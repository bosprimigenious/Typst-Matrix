import { AppHeader } from './AppHeader'
import { ControllerPanel } from '../controller/ControllerPanel'
import { ViewerPanel } from '../viewer/ViewerPanel'

export interface AppLayoutProps {
  onBack?: () => void
}

export function AppLayout({ onBack }: AppLayoutProps) {
  return (
    <div className="flex h-screen w-full flex-col overflow-hidden bg-background text-foreground font-sans selection:bg-primary selection:text-primaryForeground">
      <AppHeader variant="editor" onBack={onBack} />

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
