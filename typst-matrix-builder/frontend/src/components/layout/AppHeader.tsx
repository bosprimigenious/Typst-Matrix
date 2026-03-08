import { ArrowLeft } from 'lucide-react'
import { useLocale } from '../../contexts/LocaleContext'

function IconSparkle() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    </svg>
  )
}

function IconSlash() {
  return (
    <svg
      className="text-mutedForeground/50"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m10 19 4-14" />
    </svg>
  )
}

function IconGithub() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

export type AppHeaderVariant = 'home' | 'editor'

export interface AppHeaderProps {
  variant: AppHeaderVariant
  onBack?: () => void
}

export function AppHeader({ variant, onBack }: AppHeaderProps) {
  const { locale, setLocale, t } = useLocale()

  return (
    <header className="relative z-20 flex h-16 shrink-0 items-center justify-between border-b border-border bg-background/95 px-6 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* 左侧 */}
      <div className="flex items-center gap-2">
        {variant === 'editor' && onBack && (
          <button
            type="button"
            onClick={onBack}
            className="mr-1 rounded-md p-2 text-mutedForeground transition-colors hover:bg-muted hover:text-foreground"
            aria-label={t('nav.back')}
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
        )}
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primaryForeground shadow-sm">
          <IconSparkle />
        </div>
        {variant === 'editor' && (
          <>
            <span className="cursor-pointer rounded-md px-2 py-1.5 text-sm font-medium tracking-tight text-foreground transition-colors hover:bg-muted">
              bosprimigenious
            </span>
            <IconSlash />
          </>
        )}
        <span
          className={`flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 font-semibold tracking-tight text-foreground transition-colors hover:bg-muted ${
            variant === 'home' ? 'text-base' : 'text-sm'
          }`}
        >
          Typst-Matrix
          <span className="rounded-md border border-border/50 bg-muted px-2 py-0.5 text-[11px] font-medium text-mutedForeground">
            Beta
          </span>
        </span>
      </div>

      {/* 居中：仅 Editor 显示 */}
      {variant === 'editor' && (
        <nav className="absolute left-1/2 hidden h-full -translate-x-1/2 items-center text-sm font-medium text-mutedForeground md:flex">
          <span className="flex h-full items-center border-b-2 border-primary px-1 text-foreground">
            {t('nav.editor')}
          </span>
        </nav>
      )}

      {/* 右侧：语言 + GitHub + 头像（统一） */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-0.5 rounded-md border border-border/50 bg-muted/30 p-0.5">
          <button
            type="button"
            onClick={() => setLocale('zh')}
            className={`rounded px-2.5 py-1.5 text-sm font-medium transition-colors ${
              locale === 'zh'
                ? 'bg-background text-foreground shadow-sm'
                : 'text-mutedForeground hover:text-foreground'
            }`}
          >
            中文
          </button>
          <button
            type="button"
            onClick={() => setLocale('en')}
            className={`rounded px-2.5 py-1.5 text-sm font-medium transition-colors ${
              locale === 'en'
                ? 'bg-background text-foreground shadow-sm'
                : 'text-mutedForeground hover:text-foreground'
            }`}
          >
            English
          </button>
        </div>
        <div className="h-5 w-px bg-border" />
        <a
          href="https://github.com/bosprimigenious/Typst-Matrix"
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 rounded-md border border-transparent px-3 py-2 text-sm font-medium text-mutedForeground transition-colors hover:border-border hover:bg-muted hover:text-foreground sm:flex"
        >
          <IconGithub />
          {t('nav.starOnGitHub')}
        </a>
      </div>
    </header>
  )
}
