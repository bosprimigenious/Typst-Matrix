import { useState } from 'react'
import { AppLayout } from './components/layout/AppLayout'
import { HomePage } from './pages/HomePage'
import { useResumeStore } from './store/useResumeStore'
import type { TemplateId } from './types/resume'

type View = 'home' | 'editor'

export default function App() {
  const [view, setView] = useState<View>('home')
  const setTemplateId = useResumeStore((s) => s.setTemplateId)

  const handleSelectTemplate = (templateId: TemplateId) => {
    setTemplateId(templateId)
    setView('editor')
  }

  const handleBack = () => {
    setView('home')
  }

  if (view === 'home') {
    return <HomePage onSelectTemplate={handleSelectTemplate} />
  }

  return <AppLayout onBack={handleBack} />
}
