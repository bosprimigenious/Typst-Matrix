import { FolderGit2, Plus, Trash2 } from 'lucide-react'
import { useLocale } from '../../contexts/LocaleContext'
import { useResumeStore } from '../../store/useResumeStore'
import type { Project } from '../../types/resume'
import { Input } from '../ui/Input'
import { Label } from '../ui/Label'

function EntryCard({
  entry,
  onUpdate,
  onRemove,
  t,
}: {
  entry: Project
  onUpdate: (patch: Partial<Project>) => void
  onRemove: () => void
  t: (key: string) => string
}) {
  const lines = entry.description.length ? entry.description : ['']

  return (
    <div className="group relative rounded-lg border border-border bg-muted/20 p-4 transition-all hover:border-mutedForeground/30 hover:bg-muted/40">
      <button
        type="button"
        onClick={onRemove}
        className="absolute -right-2 -top-2 rounded-md border border-border bg-background p-1.5 text-mutedForeground opacity-0 shadow-sm transition-all hover:text-red-600 group-hover:opacity-100"
        aria-label={t('common.remove')}
      >
        <Trash2 className="h-3.5 w-3.5" />
      </button>
      <div className="mb-4 grid grid-cols-2 gap-4 pr-6">
        <div className="space-y-1.5">
          <Label className="text-xs text-mutedForeground">{t('projects.projectName')}</Label>
          <Input
            className="h-8 bg-background text-xs"
            placeholder={t('projects.placeholderName')}
            value={entry.name}
            onChange={(e) => onUpdate({ name: e.target.value })}
          />
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs text-mutedForeground">{t('projects.dateRange')}</Label>
          <Input
            className="h-8 bg-background text-xs"
            placeholder={t('projects.placeholderDate')}
            value={entry.date}
            onChange={(e) => onUpdate({ date: e.target.value })}
          />
        </div>
        <div className="col-span-2 space-y-1.5">
          <Label className="text-xs text-mutedForeground">{t('projects.role')}</Label>
          <Input
            className="h-8 bg-background text-xs"
            placeholder={t('projects.placeholderRole')}
            value={entry.role}
            onChange={(e) => onUpdate({ role: e.target.value })}
          />
        </div>
      </div>
      <div className="space-y-1.5">
        <Label className="text-xs text-mutedForeground">{t('projects.description')}</Label>
        <div className="space-y-1">
          {lines.map((line, i) => (
            <Input
              key={i}
              className="h-8 bg-background text-xs"
              placeholder={t('projects.placeholderBullet')}
              value={line}
              onChange={(e) => {
                const next = [...entry.description]
                next[i] = e.target.value
                onUpdate({ description: next })
              }}
            />
          ))}
          <button
            type="button"
            onClick={() =>
              onUpdate({ description: [...entry.description, ''] })
            }
            className="text-[11px] font-medium text-mutedForeground transition-colors hover:text-foreground"
          >
            + {t('projects.addLine')}
          </button>
        </div>
      </div>
    </div>
  )
}

export function ProjectsForm() {
  const { t } = useLocale()
  const { projects, addProject, updateProject, removeProject } =
    useResumeStore()

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between border-b border-border pb-2">
        <div className="flex items-center gap-2">
          <FolderGit2 className="h-4 w-4 text-mutedForeground" />
          <h2 className="text-sm font-semibold">{t('projects.section')}</h2>
        </div>
        <button
          type="button"
          onClick={addProject}
          className="flex items-center gap-1 text-[11px] font-medium text-mutedForeground transition-colors hover:text-foreground"
        >
          <Plus className="h-3.5 w-3.5" />
          {t('projects.addEntry')}
        </button>
      </div>
      <div className="space-y-4">
        {projects.map((entry) => (
          <EntryCard
            key={entry.id}
            entry={entry}
            onUpdate={(patch) => updateProject(entry.id, patch)}
            onRemove={() => removeProject(entry.id)}
            t={t}
          />
        ))}
      </div>
    </section>
  )
}
