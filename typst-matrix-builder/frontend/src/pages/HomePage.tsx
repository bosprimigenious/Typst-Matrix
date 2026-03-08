import { ArrowRight, Code, Layout } from 'lucide-react'
import { AppHeader } from '../components/layout/AppHeader'
import { useLocale } from '../contexts/LocaleContext'
import { getTemplateLabel } from '../i18n/translations'
import type { TemplateId } from '../types/resume'

const TEMPLATES: {
  id: TemplateId
  categoryKey: string
  descKey: string
  icon: 'layout' | 'code'
}[] = [
  {
    id: 'resume_aero_minimal',
    categoryKey: 'home.categoryResume',
    descKey: 'home.descAero',
    icon: 'layout',
  },
  {
    id: 'resume_golden_dual',
    categoryKey: 'home.categoryResume',
    descKey: 'home.descGolden',
    icon: 'layout',
  },
  {
    id: 'cv_bento',
    categoryKey: 'home.categoryPortfolio',
    descKey: 'home.descBento',
    icon: 'layout',
  },
  {
    id: 'cv_cli',
    categoryKey: 'home.categoryGeek',
    descKey: 'home.descCli',
    icon: 'code',
  },
]

interface HomePageProps {
  onSelectTemplate: (templateId: TemplateId) => void
}

export function HomePage({ onSelectTemplate }: HomePageProps) {
  const { t, locale } = useLocale()

  return (
    <div className="flex h-full flex-col overflow-y-auto bg-grid-pattern">
      <AppHeader variant="home" />

      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <h1 className="mb-6 bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-500 bg-clip-text text-4xl font-extrabold tracking-tighter text-transparent md:text-5xl lg:text-6xl">
          {t('home.heroTitle')}
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-mutedForeground lg:text-lg">
          {t('home.heroSubtitle')}
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-32">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-xl font-semibold tracking-tight">
            {t('home.galleryTitle')}
          </h2>
          <span className="rounded-full border border-border bg-background px-3 py-1 text-sm font-medium text-mutedForeground shadow-sm">
            {TEMPLATES.length} {t('home.galleryBadge')}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TEMPLATES.map((tpl) => (
            <button
              key={tpl.id}
              type="button"
              onClick={() => onSelectTemplate(tpl.id)}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-background text-left shadow-card transition-all duration-300 hover:border-mutedForeground/30 hover:shadow-card-hover"
            >
              <div className="relative flex h-40 items-center justify-center overflow-hidden border-b border-border bg-muted/50 transition-colors group-hover:bg-muted/80">
                <div className="absolute flex h-32 w-24 items-center justify-center rounded-sm bg-white text-mutedForeground/30 shadow-sm ring-1 ring-border/50 transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:scale-105">
                  {tpl.icon === 'code' ? (
                    <Code className="h-8 w-8" />
                  ) : (
                    <Layout className="h-8 w-8" />
                  )}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="mb-2 flex items-start justify-between">
                  <h3 className="font-semibold tracking-tight text-foreground">
                    {getTemplateLabel(tpl.id, locale)}
                  </h3>
                  <span className="rounded-sm bg-muted px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-mutedForeground">
                    {t(tpl.categoryKey)}
                  </span>
                </div>
                <p className="mb-4 line-clamp-2 flex-1 text-sm leading-relaxed text-mutedForeground">
                  {t(tpl.descKey)}
                </p>
                <div className="mt-auto flex -translate-x-[10px] items-center text-xs font-semibold text-primary opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                  {t('home.useEngine')}
                  <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  )
}
