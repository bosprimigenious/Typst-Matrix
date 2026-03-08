import { Wrench } from 'lucide-react'
import { useResumeStore } from '../../store/useResumeStore'
import { Input } from '../ui/Input'
import { Label } from '../ui/Label'

const CATEGORIES: {
  key: 'frontend' | 'backend' | 'algorithms'
  label: string
}[] = [
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'algorithms', label: 'Algorithms' },
]

function parseList(s: string): string[] {
  return s
    .split(/[,，]/)
    .map((x) => x.trim())
    .filter(Boolean)
}

function formatList(arr: string[]): string {
  return arr.join(', ')
}

export function SkillsForm() {
  const { skills, setSkillList } = useResumeStore()

  return (
    <section className="space-y-4">
      <div className="flex items-center gap-2 border-b border-border pb-2">
        <Wrench className="h-4 w-4 text-mutedForeground" />
        <h2 className="text-sm font-semibold">Skills</h2>
      </div>
      <div className="space-y-4">
        {CATEGORIES.map(({ key, label }) => (
          <div key={key} className="space-y-2">
            <Label>{label}</Label>
            <Input
              value={formatList(skills[key])}
              onChange={(e) => setSkillList(key, parseList(e.target.value))}
              placeholder="Comma-separated"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
