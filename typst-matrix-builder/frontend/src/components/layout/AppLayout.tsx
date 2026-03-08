import { Terminal } from 'lucide-react'
import { ControllerPanel } from '../controller/ControllerPanel'
import { ViewerPanel } from '../viewer/ViewerPanel'

export function AppLayout() {
  return (
    <div className="flex h-screen w-full flex-col overflow-hidden bg-background text-foreground font-sans selection:bg-primary selection:text-primaryForeground">
      <header className="flex h-14 shrink-0 items-center justify-between border-b border-border px-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex items-center gap-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primaryForeground shadow-sm">
            <Terminal className="h-4 w-4" />
          </div>
          <span className="text-sm font-semibold tracking-tight">
            Typst-Matrix Workspace
          </span>
          <span className="rounded-full border border-border bg-muted px-2 py-0.5 text-[10px] font-medium text-mutedForeground">
            Beta
          </span>
        </div>
        <div className="flex items-center gap-4 text-sm text-mutedForeground">
          <a
            href="https://github.com/typst/typst"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            Typst
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </a>
        </div>
      </header>

      <main className="flex flex-1 overflow-hidden">
        <div className="flex w-[45%] flex-col border-r border-border bg-background shadow-[1px_0_10px_rgba(0,0,0,0.02)] lg:w-[40%]">
          <ControllerPanel />
        </div>
        <div className="min-w-0 flex-1">
          <ViewerPanel />
        </div>
      </main>
    </div>
  )
}
