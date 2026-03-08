import { Briefcase, Plus, Trash2 } from 'lucide-react'
import { useResumeStore } from '../../store/useResumeStore'
import type { Experience } from '../../types/resume'
import { Input } from '../ui/Input'
import { Label } from '../ui/Label'

function EntryCard({
  entry,
  onUpdate,
  onRemove,
}: {
  entry: Experience
  onUpdate: (patch: Partial<Experience>) => void
  onRemove: () => void
}) {
  const lines = entry.description.length ? entry.description : ['']

  return (
    <div className="group relative rounded-lg border border-border bg-muted/20 p-4 transition-all hover:border-mutedForeground/30 hover:bg-muted/40">
      <button
        type="button"
        onClick={onRemove}
        className="absolute -right-2 -top-2 rounded-md border border-border bg-background p-1.5 text-mutedForeground opacity-0 shadow-sm transition-all hover:text-red-600 group-hover:opacity-100"
        aria-label="Remove"
      >
        <Trash2 className="h-3.5 w-3.5" />
      </button>
      <div className="mb-4 grid grid-cols-2 gap-4 pr-6">
        <div className="space-y-1.5">
          <Label className="text-xs text-mutedForeground">Organization</Label>
          <Input
            className="h-8 bg-background text-xs"
            placeholder="Company Name"
            value={entry.company}
            onChange={(e) => onUpdate({ company: e.target.value })}
          />
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs text-mutedForeground">Date Range</Label>
          <Input
            className="h-8 bg-background text-xs"
            placeholder="YYYY.MM - Present"
            value={entry.date}
            onChange={(e) => onUpdate({ date: e.target.value })}
          />
        </div>
        <div className="col-span-2 space-y-1.5">
          <Label className="text-xs text-mutedForeground">Role</Label>
          <Input
            className="h-8 bg-background text-xs"
            placeholder="e.g. Software Engineer Intern"
            value={entry.role}
            onChange={(e) => onUpdate({ role: e.target.value })}
          />
        </div>
      </div>
      <div className="space-y-1.5">
        <Label className="text-xs text-mutedForeground">
          Achievements / Description
        </Label>
        <div className="space-y-1">
          {lines.map((line, i) => (
            <Input
              key={i}
              className="h-8 bg-background text-xs"
              placeholder="Bullet point"
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
            + Add line
          </button>
        </div>
      </div>
    </div>
  )
}

export function ExperienceForm() {
  const { experience, addExperience, updateExperience, removeExperience } =
    useResumeStore()

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between border-b border-border pb-2">
        <div className="flex items-center gap-2">
          <Briefcase className="h-4 w-4 text-mutedForeground" />
          <h2 className="text-sm font-semibold">Professional Experience</h2>
        </div>
        <button
          type="button"
          onClick={addExperience}
          className="flex items-center gap-1 text-[11px] font-medium text-mutedForeground transition-colors hover:text-foreground"
        >
          <Plus className="h-3.5 w-3.5" />
          Add Entry
        </button>
      </div>
      <div className="space-y-4">
        {experience.map((entry) => (
          <EntryCard
            key={entry.id}
            entry={entry}
            onUpdate={(patch) => updateExperience(entry.id, patch)}
            onRemove={() => removeExperience(entry.id)}
          />
        ))}
      </div>
    </section>
  )
}
