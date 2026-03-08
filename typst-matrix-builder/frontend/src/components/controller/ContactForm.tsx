import { Phone } from 'lucide-react'
import { useResumeStore } from '../../store/useResumeStore'
import { Input } from '../ui/Input'
import { Label } from '../ui/Label'

const FIELDS: { key: 'phone' | 'email' | 'github' | 'website'; label: string }[] =
  [
    { key: 'phone', label: 'Phone Number' },
    { key: 'email', label: 'Email Address' },
    { key: 'github', label: 'GitHub' },
    { key: 'website', label: 'Website' },
  ]

export function ContactForm() {
  const { contact, setContact } = useResumeStore()

  return (
    <section className="space-y-4">
      <div className="flex items-center gap-2 border-b border-border pb-2">
        <Phone className="h-4 w-4 text-mutedForeground" />
        <h2 className="text-sm font-semibold">Contact</h2>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {FIELDS.map(({ key, label }) => (
          <div key={key} className="space-y-2">
            <Label>{label}</Label>
            <Input
              type="text"
              value={contact[key] ?? ''}
              onChange={(e) => setContact(key, e.target.value)}
              placeholder={
                key === 'email'
                  ? 'hello@example.com'
                  : key === 'phone'
                    ? '+86 172 0000 0000'
                    : key === 'github'
                      ? 'username'
                      : 'https://...'
              }
            />
          </div>
        ))}
      </div>
    </section>
  )
}
