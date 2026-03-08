import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import type { Locale } from '../i18n/translations'
import { translations } from '../i18n/translations'

const STORAGE_KEY = 'typst-matrix-locale'

function loadLocale(): Locale {
  try {
    const s = localStorage.getItem(STORAGE_KEY)
    if (s === 'zh' || s === 'en') return s
  } catch {
    // ignore
  }
  return 'en'
}

type LocaleContextValue = {
  locale: Locale
  setLocale: (next: Locale) => void
  t: (key: string) => string
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(loadLocale)

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // ignore
    }
  }, [])

  const t = useCallback(
    (key: string) => translations[locale][key] ?? key,
    [locale]
  )

  const value = useMemo(
    () => ({ locale, setLocale, t }),
    [locale, setLocale, t]
  )

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  )
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider')
  return ctx
}
