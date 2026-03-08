import { Wrench } from 'lucide-react'
import { useLocale } from '../../contexts/LocaleContext'
import { useResumeStore } from '../../store/useResumeStore'
import { Input } from '../ui/Input'
import { Label } from '../ui/Label'

const CATEGORY_KEYS = [
  { key: 'frontend' as const, labelKey: 'skills.frontend' },
  { key: 'backend' as const, labelKey: 'skills.backend' },
  { key: 'algorithms' as const, labelKey: 'skills.algorithms' },
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
  const { t } = useLocale()
  const { skills, setSkillList } = useResumeStore()

  return (
    <section className="space-y-4">
      <div className="flex items-center gap-2 border-b border-border pb-2">
        <Wrench className="h-4 w-4 text-mutedForeground" />
        <h2 className="text-sm font-semibold">{t('skills.section')}</h2>
      </div>
      <div className="space-y-4">
        {CATEGORY_KEYS.map(({ key, labelKey }) => (
          <div key={key} className="space-y-2">
            <Label>{t(labelKey)}</Label>
            <Input
              value={formatList(skills[key])}
              onChange={(e) => setSkillList(key, parseList(e.target.value))}
              placeholder={t('skills.placeholder')}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
