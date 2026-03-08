import { Settings, User } from 'lucide-react'
import { useResumeStore } from '../../store/useResumeStore'
import { TEMPLATE_OPTIONS, type TemplateId } from '../../types/resume'
import { Input } from '../ui/Input'
import { Label } from '../ui/Label'
import { Select } from '../ui/Select'
import { Textarea } from '../ui/Textarea'

export function PersonalForm() {
  const { templateId, personal, setTemplateId, setPersonal } = useResumeStore()

  return (
    <>
      <section className="space-y-4">
        <div className="flex items-center gap-2 border-b border-border pb-2">
          <Settings className="h-4 w-4 text-mutedForeground" />
          <h2 className="text-sm font-semibold">Configuration</h2>
        </div>
        <div className="space-y-2">
          <Label>Template Architecture</Label>
          <Select
            value={templateId}
            onChange={(e) => setTemplateId(e.target.value as TemplateId)}
          >
            {TEMPLATE_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </Select>
          <p className="text-[11px] text-mutedForeground">
            Defines the core rendering pipeline for the generated PDF.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center gap-2 border-b border-border pb-2">
          <User className="h-4 w-4 text-mutedForeground" />
          <h2 className="text-sm font-semibold">Personal Identity</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 space-y-2">
            <Label>Full Name</Label>
            <Input
              placeholder="e.g. Hengji Zhang"
              value={personal.name}
              onChange={(e) => setPersonal('name', e.target.value)}
            />
          </div>
          <div className="col-span-2 space-y-2">
            <Label>Title</Label>
            <Input
              placeholder="e.g. Software Engineer"
              value={personal.title}
              onChange={(e) => setPersonal('title', e.target.value)}
            />
          </div>
          <div className="col-span-2 space-y-2">
            <Label>Alias</Label>
            <Input
              placeholder="Optional display name"
              value={personal.alias ?? ''}
              onChange={(e) => setPersonal('alias', e.target.value)}
            />
          </div>
          <div className="col-span-2 space-y-2">
            <Label>Summary</Label>
            <Textarea
              rows={2}
              placeholder="Brief professional summary..."
              value={personal.summary ?? ''}
              onChange={(e) => setPersonal('summary', e.target.value)}
            />
          </div>
        </div>
      </section>
    </>
  )
}
