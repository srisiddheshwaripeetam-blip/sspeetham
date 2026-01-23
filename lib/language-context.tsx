"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { type Language, type Translations } from "./translations-types"
import { en } from "./translations/en"
import { te } from "./translations/te"
import { hi } from "./translations/hi"
import { ta } from "./translations/ta"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  isLoaded: boolean
}

// Preload all translations statically - no async loading needed
const allTranslations: Record<Language, Translations> = { en, te, hi, ta }

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language
    if (saved && ["en", "te", "hi", "ta"].includes(saved)) {
      setLanguageState(saved)
      document.documentElement.lang = saved
    } else {
      document.documentElement.lang = "en"
    }
    setMounted(true)
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
    document.documentElement.lang = lang
  }

  const t = (key: string): string => {
    // Use English for server-side rendering and initial hydration to prevent mismatches
    const currentLang = mounted ? language : "en"
    const currentTranslations = allTranslations[currentLang] || allTranslations.en
    const translation = currentTranslations?.[key] || allTranslations.en[key] || key

    // Replace {year} with current year
    return translation.replace("{year}", new Date().getFullYear().toString())
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isLoaded: mounted }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}

export type { Language }
