import { Download, Loader2 } from 'lucide-react'
import { useResumeStore } from '../../store/useResumeStore'

export function ViewerPanel() {
  const pdfUrl = useResumeStore((s) => s.pdfUrl)

  return (
    <div className="relative flex flex-1 flex-col overflow-hidden bg-[#f0f0f3]">
      <div className="absolute left-1/2 top-4 z-10 flex -translate-x-1/2 items-center gap-1 rounded-lg border border-border/50 bg-background/80 px-2 py-1.5 shadow-sm backdrop-blur-md">
        <span className="border-r border-border/50 px-2 text-[11px] font-medium text-mutedForeground">
          Output Viewer
        </span>
        {pdfUrl ? (
          <a
            href={pdfUrl}
            download="Typst_Resume.pdf"
            className="flex items-center gap-1 rounded-md px-2 py-1 text-[11px] font-medium text-foreground transition-colors hover:bg-muted"
          >
            <Download className="h-3.5 w-3.5" />
            Export PDF
          </a>
        ) : (
          <span className="px-2 text-[11px] text-mutedForeground">
            Build to export
          </span>
        )}
      </div>

      <div className="flex flex-1 items-start justify-center overflow-auto p-12">
        {pdfUrl ? (
          <div className="w-full max-w-[800px] overflow-hidden rounded-sm bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] ring-1 ring-border/50 aspect-[1/1.414] min-h-[600px]">
            <iframe
              src={`${pdfUrl}#toolbar=0`}
              title="PDF Preview"
              className="h-full w-full border-0"
            />
          </div>
        ) : (
          <div className="flex max-w-[800px] flex-col items-center gap-4 pt-32 text-mutedForeground">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-background/80">
              <Loader2 className="h-6 w-6 animate-spin" />
            </div>
            <span className="font-mono text-sm">Typst Core Rendering...</span>
            <p className="text-xs">
              Configure the form and wait for auto-compile, or click Build
              Document.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
