import { GraduationCap, Plus, Trash2 } from 'lucide-react'
import { useLocale } from '../../contexts/LocaleContext'
import { useResumeStore } from '../../store/useResumeStore'
import type { EducationEntry } from '../../types/resume'
import { Input } from '../ui/Input'
import { Label } from '../ui/Label'

function EntryCard({
  entry,
  onUpdate,
  onRemove,
  t,
}: {
  entry: EducationEntry
  onUpdate: (patch: Partial<EducationEntry>) => void
  onRemove: () => void
  t: (key: string) => string
}) {
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
          <Label className="text-xs text-mutedForeground">{t('education.school')}</Label>
          <Input
            className="h-8 bg-background text-xs"
            placeholder={t('education.placeholderSchool')}
            value={entry.school}
            onChange={(e) => onUpdate({ school: e.target.value })}
          />
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs text-mutedForeground">{t('education.dateRange')}</Label>
          <Input
            className="h-8 bg-background text-xs"
            placeholder={t('education.placeholderDate')}
            value={entry.date}
            onChange={(e) => onUpdate({ date: e.target.value })}
          />
        </div>
        <div className="col-span-2 space-y-1.5">
          <Label className="text-xs text-mutedForeground">{t('education.major')}</Label>
          <Input
            className="h-8 bg-background text-xs"
            placeholder={t('education.placeholderMajor')}
            value={entry.major}
            onChange={(e) => onUpdate({ major: e.target.value })}
          />
        </div>
        <div className="col-span-2 space-y-1.5">
          <Label className="text-xs text-mutedForeground">{t('education.rank')}</Label>
          <Input
            className="h-8 bg-background text-xs"
            placeholder={t('education.placeholderRank')}
            value={entry.rank ?? ''}
            onChange={(e) => onUpdate({ rank: e.target.value })}
          />
        </div>
      </div>
    </div>
  )
}

export function EducationForm() {
  const { t } = useLocale()
  const { education, addEducation, updateEducation, removeEducation } =
    useResumeStore()

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between border-b border-border pb-2">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-4 w-4 text-mutedForeground" />
          <h2 className="text-sm font-semibold">{t('education.section')}</h2>
        </div>
        <button
          type="button"
          onClick={addEducation}
          className="flex items-center gap-1 text-[11px] font-medium text-mutedForeground transition-colors hover:text-foreground"
        >
          <Plus className="h-3.5 w-3.5" />
          {t('education.addEntry')}
        </button>
      </div>
      <div className="space-y-4">
        {education.map((entry) => (
          <EntryCard
            key={entry.id}
            entry={entry}
            onUpdate={(patch) => updateEducation(entry.id, patch)}
            onRemove={() => removeEducation(entry.id)}
            t={t}
          />
        ))}
      </div>
    </section>
  )
}
