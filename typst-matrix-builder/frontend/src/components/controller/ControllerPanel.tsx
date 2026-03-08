import { useEffect, useCallback, useState } from 'react'
import { Loader2 } from 'lucide-react'
import { PersonalForm } from './PersonalForm'
import { ContactForm } from './ContactForm'
import { EducationForm } from './EducationForm'
import { ExperienceForm } from './ExperienceForm'
import { ProjectsForm } from './ProjectsForm'
import { SkillsForm } from './SkillsForm'
import { useResumeStore } from '../../store/useResumeStore'
import { compileResume } from '../../lib/api'
import { useDebounce } from '../../hooks/useDebounce'
import { Button } from '../ui/Button'

const AUTO_COMPILE_DELAY_MS = 1500

export function ControllerPanel() {
  const [isCompiling, setIsCompiling] = useState(false)
  const setPdfUrl = useResumeStore((s) => s.setPdfUrl)
  const payloadJson = useResumeStore((s) => JSON.stringify(s.getPayload()))
  const debouncedPayloadJson = useDebounce(payloadJson, AUTO_COMPILE_DELAY_MS)

  const runCompile = useCallback(async () => {
    const payload = useResumeStore.getState().getPayload()
    setIsCompiling(true)
    try {
      const blob = await compileResume(payload)
      const pdfUrl = URL.createObjectURL(blob)
      setPdfUrl(pdfUrl)
    } catch (e) {
      console.error(e)
      alert('Compilation failed. Check backend logs.')
    } finally {
      setIsCompiling(false)
    }
  }, [setPdfUrl])

  useEffect(() => {
    runCompile()
  }, [debouncedPayloadJson, runCompile])

  return (
    <>
      <div className="custom-scrollbar flex-1 space-y-10 overflow-y-auto p-8">
        <PersonalForm />
        <ContactForm />
        <EducationForm />
        <ExperienceForm />
        <ProjectsForm />
        <SkillsForm />
      </div>

      <div className="shrink-0 border-t border-border bg-muted/30 p-4">
        <Button
          type="button"
          onClick={runCompile}
          disabled={isCompiling}
          className="w-full"
        >
          {isCompiling ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Compiling Engine...
            </>
          ) : (
            'Build Document'
          )}
        </Button>
      </div>
    </>
  )
}
