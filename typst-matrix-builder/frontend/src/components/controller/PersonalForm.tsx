import { Settings, User } from 'lucide-react'
import { useLocale } from '../../contexts/LocaleContext'
import { useResumeStore } from '../../store/useResumeStore'
import { getTemplateLabel } from '../../i18n/translations'
import { TEMPLATE_OPTIONS, type TemplateId } from '../../types/resume'
import { Input } from '../ui/Input'
import { Label } from '../ui/Label'
import { Select } from '../ui/Select'
import { Textarea } from '../ui/Textarea'

export function PersonalForm() {
  const { locale, t } = useLocale()
  const { templateId, personal, setTemplateId, setPersonal } = useResumeStore()

  return (
    <>
      <section className="space-y-4">
        <div className="flex items-center gap-2 border-b border-border pb-2">
          <Settings className="h-4 w-4 text-mutedForeground" />
          <h2 className="text-sm font-semibold">{t('config.section')}</h2>
        </div>
        <div className="space-y-2">
          <Label>{t('config.templateArchitecture')}</Label>
          <Select
            value={templateId}
            onChange={(e) => setTemplateId(e.target.value as TemplateId)}
          >
            {TEMPLATE_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {getTemplateLabel(o.value, locale)}
              </option>
            ))}
          </Select>
          <p className="text-[11px] text-mutedForeground">
            {t('config.templateHint')}
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center gap-2 border-b border-border pb-2">
          <User className="h-4 w-4 text-mutedForeground" />
          <h2 className="text-sm font-semibold">{t('personal.section')}</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 space-y-2">
            <Label>{t('personal.fullName')}</Label>
            <Input
              placeholder={t('personal.placeholderName')}
              value={personal.name}
              onChange={(e) => setPersonal('name', e.target.value)}
            />
          </div>
          <div className="col-span-2 space-y-2">
            <Label>{t('personal.title')}</Label>
            <Input
              placeholder={t('personal.placeholderTitle')}
              value={personal.title}
              onChange={(e) => setPersonal('title', e.target.value)}
            />
          </div>
          <div className="col-span-2 space-y-2">
            <Label>{t('personal.alias')}</Label>
            <Input
              placeholder={t('personal.placeholderAlias')}
              value={personal.alias ?? ''}
              onChange={(e) => setPersonal('alias', e.target.value)}
            />
          </div>
          <div className="col-span-2 space-y-2">
            <Label>{t('personal.summary')}</Label>
            <Textarea
              rows={2}
              placeholder={t('personal.placeholderSummary')}
              value={personal.summary ?? ''}
              onChange={(e) => setPersonal('summary', e.target.value)}
            />
          </div>
        </div>
      </section>
    </>
  )
}
