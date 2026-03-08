import express, { Request, Response } from 'express'
import cors from 'cors'
import { v4 as uuidv4 } from 'uuid'
import { exec } from 'child_process'
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import util from 'util'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const execPromise = util.promisify(exec)

const app = express()
app.use(cors())
app.use(express.json({ limit: '10mb' }))

const TEMP_DIR = path.join(__dirname, '../temp')
const REPO_ROOT = path.join(__dirname, '../../..')

function buildEntryTyp(workDir: string, templateId: string): string {
  const templateFull = path.join(REPO_ROOT, '03_resume', `${templateId}.typ`)
  const templateRel = path.relative(workDir, templateFull).replace(/\\/g, '/')
  return [
    `#import "${templateRel}": resume as target`,
    '#let data = json("data.json")',
    '#show: target.with(data)',
  ].join('\n')
}

app.post('/api/compile', async (req: Request, res: Response): Promise<void> => {
  const payload = req.body as Record<string, unknown>
  const sessionId = uuidv4()
  const workDir = path.join(TEMP_DIR, sessionId)

  try {
    await fs.mkdir(workDir, { recursive: true })

    const dataPath = path.join(workDir, 'data.json')
    await fs.writeFile(dataPath, JSON.stringify(payload, null, 2), 'utf-8')

    const templateId = (payload.templateId as string) || 'resume_aero_minimal'
    const entryPath = path.join(workDir, 'main.typ')
    const outPdfPath = path.join(workDir, 'output.pdf')
    await fs.writeFile(
      entryPath,
      buildEntryTyp(workDir, templateId).trim(),
      'utf-8'
    )

    await execPromise(
      `typst compile --root "${workDir}" "${entryPath}" "${outPdfPath}"`,
      { maxBuffer: 10 * 1024 * 1024 }
    )

    const pdfBuffer = await fs.readFile(outPdfPath)
    res.setHeader('Content-Type', 'application/pdf')
    res.setHeader(
      'Content-Disposition',
      `inline; filename="resume_${sessionId}.pdf"`
    )
    res.send(pdfBuffer)
  } catch (error) {
    console.error(`[Compile Error] Session: ${sessionId}`, error)
    res.status(500).json({ error: 'PDF compilation failed.' })
  } finally {
    try {
      await fs.rm(workDir, { recursive: true, force: true })
    } catch (cleanupError) {
      console.error(`[Cleanup Error] Session: ${sessionId}`, cleanupError)
    }
  }
})

const frontendDist = path.join(__dirname, '../../frontend/dist')
app.use(express.static(frontendDist))
app.get('*', (_req, res) => {
  res.sendFile(path.join(frontendDist, 'index.html'), (err) => {
    if (err) res.status(404).send('Not found')
  })
})

const PORT = Number(process.env.PORT) || 3001
app.listen(PORT, () => {
  console.log(`Typst compilation engine running on port ${PORT}`)
})
