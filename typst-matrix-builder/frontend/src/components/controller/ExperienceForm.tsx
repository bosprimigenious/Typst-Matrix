import { Briefcase, Plus, Trash2 } from 'lucide-react'
import { useLocale } from '../../contexts/LocaleContext'
import { useResumeStore } from '../../store/useResumeStore'
import type { Experience } from '../../types/resume'
import { Input } from '../ui/Input'
import { Label } from '../ui/Label'

function EntryCard({
  entry,
  onUpdate,
  onRemove,
  t,
}: {
  entry: Experience
  onUpdate: (patch: Partial<Experience>) => void
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
          <Label className="text-xs text-mutedForeground">{t('experience.organization')}</Label>
          <Input
            className="h-8 bg-background text-xs"
            placeholder={t('experience.placeholderCompany')}
            value={entry.company}
            onChange={(e) => onUpdate({ company: e.target.value })}
          />
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs text-mutedForeground">{t('experience.dateRange')}</Label>
          <Input
            className="h-8 bg-background text-xs"
            placeholder={t('experience.placeholderDate')}
            value={entry.date}
            onChange={(e) => onUpdate({ date: e.target.value })}
          />
        </div>
        <div className="col-span-2 space-y-1.5">
          <Label className="text-xs text-mutedForeground">{t('experience.role')}</Label>
          <Input
            className="h-8 bg-background text-xs"
            placeholder={t('experience.placeholderRole')}
            value={entry.role}
            onChange={(e) => onUpdate({ role: e.target.value })}
          />
        </div>
      </div>
      <div className="space-y-1.5">
        <Label className="text-xs text-mutedForeground">
          {t('experience.achievements')}
        </Label>
        <div className="space-y-1">
          {lines.map((line, i) => (
            <Input
              key={i}
              className="h-8 bg-background text-xs"
              placeholder={t('experience.placeholderBullet')}
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
            + {t('experience.addLine')}
          </button>
        </div>
      </div>
    </div>
  )
}

export function ExperienceForm() {
  const { t } = useLocale()
  const { experience, addExperience, updateExperience, removeExperience } =
    useResumeStore()

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between border-b border-border pb-2">
        <div className="flex items-center gap-2">
          <Briefcase className="h-4 w-4 text-mutedForeground" />
          <h2 className="text-sm font-semibold">{t('experience.section')}</h2>
        </div>
        <button
          type="button"
          onClick={addExperience}
          className="flex items-center gap-1 text-[11px] font-medium text-mutedForeground transition-colors hover:text-foreground"
        >
          <Plus className="h-3.5 w-3.5" />
          {t('experience.addEntry')}
        </button>
      </div>
      <div className="space-y-4">
        {experience.map((entry) => (
          <EntryCard
            key={entry.id}
            entry={entry}
            onUpdate={(patch) => updateExperience(entry.id, patch)}
            onRemove={() => removeExperience(entry.id)}
            t={t}
          />
        ))}
      </div>
    </section>
  )
}
