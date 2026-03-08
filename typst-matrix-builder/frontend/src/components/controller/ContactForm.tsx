import { Phone } from 'lucide-react'
import { useLocale } from '../../contexts/LocaleContext'
import { useResumeStore } from '../../store/useResumeStore'
import { Input } from '../ui/Input'
import { Label } from '../ui/Label'

const FIELD_KEYS = [
  { key: 'phone' as const, labelKey: 'contact.phone', placeholderKey: 'contact.placeholderPhone' },
  { key: 'email' as const, labelKey: 'contact.email', placeholderKey: 'contact.placeholderEmail' },
  { key: 'github' as const, labelKey: 'contact.github', placeholderKey: 'contact.placeholderGithub' },
  { key: 'website' as const, labelKey: 'contact.website', placeholderKey: 'contact.placeholderWebsite' },
]

export function ContactForm() {
  const { t } = useLocale()
  const { contact, setContact } = useResumeStore()

  return (
    <section className="space-y-4">
      <div className="flex items-center gap-2 border-b border-border pb-2">
        <Phone className="h-4 w-4 text-mutedForeground" />
        <h2 className="text-sm font-semibold">{t('contact.section')}</h2>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {FIELD_KEYS.map(({ key, labelKey, placeholderKey }) => (
          <div key={key} className="space-y-2">
            <Label>{t(labelKey)}</Label>
            <Input
              type="text"
              value={contact[key] ?? ''}
              onChange={(e) => setContact(key, e.target.value)}
              placeholder={t(placeholderKey)}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
