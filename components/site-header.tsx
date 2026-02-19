"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { ChevronDown, X, Menu } from "lucide-react"
import Image from "next/image"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/lib/language-context"

const navGroupsConfig = [
  { href: "/", labelKey: "nav.home" },
  {
    labelKey: "nav.about",
    items: [
      { href: "/about", labelKey: "nav.about" },
      { href: "/parampara", labelKey: "nav.parampara" },
      { href: "/peethadhipathi-gallery", labelKey: "nav.gallery" },
    ],
  },
  {
    labelKey: "nav.spiritual",
    items: [
      { href: "/deities", labelKey: "nav.deities" },
      { href: "/homam", labelKey: "nav.homam" },
    ],
  },
  { href: "/visit", labelKey: "nav.visit" },
  { href: "/donate", labelKey: "nav.donate" },
  { href: "/contact", labelKey: "nav.contact" },
]

export function SiteHeader() {
  const { t } = useLanguage()
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileDropdowns, setMobileDropdowns] = useState<Record<string, boolean>>({})
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      const prev = document.body.style.overflow
      document.body.style.overflow = "hidden"
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [menuOpen])

  useEffect(() => {
    if (menuOpen) setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [menuOpen])

  useEffect(() => {
    const handleClickOutside = () => setActiveDropdown(null)
    if (activeDropdown) {
      document.addEventListener("click", handleClickOutside)
      return () => document.removeEventListener("click", handleClickOutside)
    }
  }, [activeDropdown])

  const isActiveGroup = (group: any) => {
    if (group.href) return pathname === group.href
    return group.items?.some((item: any) => pathname === item.href)
  }

  const toggleMobileDropdown = (label: string) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [label]: !prev[label],
    }))
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-500 ease-out",
        scrolled
          ? "bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 shadow-depth-2 border-b-2 border-amber-400/60"
          : "bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 border-b border-amber-300/50",
      )}
    >
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-700 via-yellow-500 to-amber-700" />

      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            {/* Removed subtle glow behind logo for cleaner look */}
            <Image
              src="/images/design-mode/Logo.png"
              alt="Sri Siddheswari Peetham Logo"
              width={52}
              height={52}
              className="relative h-13 w-13 transition-all duration-300 group-hover:scale-110 drop-shadow-lg"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg md:text-xl font-bold text-temple-gradient bg-gradient-to-r from-amber-800 via-orange-700 to-amber-800 bg-clip-text text-transparent">
              Sri Siddheswari Peetham
            </span>
            <span className="text-xs text-amber-700 font-medium tracking-wide">Courtallam, Tamil Nadu</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navGroupsConfig.map((group) => {
            const active = isActiveGroup(group)
            const label = t(group.labelKey)

            if (group.href) {
              return (
                <Link
                  key={group.href}
                  href={group.href}
                  className={cn(
                    "relative text-sm font-semibold transition-all duration-300 py-2 px-1",
                    active
                      ? "text-amber-900 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-amber-600 after:via-yellow-500 after:to-amber-600"
                      : "text-amber-700 hover:text-amber-900 hover:scale-105",
                  )}
                >
                  {label}
                </Link>
              )
            }

            return (
              <div key={group.labelKey} className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setActiveDropdown(activeDropdown === group.labelKey ? null : group.labelKey)
                  }}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors ${active ? "text-neutral-900" : "text-orange-600 hover:text-orange-700"
                    }`}
                >
                  {label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${activeDropdown === group.labelKey ? "rotate-180" : ""}`}
                  />
                </button>

                {activeDropdown === group.labelKey && (
                  <div
                    className="absolute top-full left-0 mt-2 w-56 rounded-xl bg-white shadow-depth-3 py-2 z-50 animate-scale-in origin-top border border-amber-200"
                    style={{ animationDuration: '200ms' }}
                  >
                    {group.items?.map((item, idx) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setActiveDropdown(null)}
                        className={cn(
                          "block px-4 py-3 text-sm transition-all duration-200 relative overflow-hidden",
                          pathname === item.href
                            ? "text-amber-900 bg-amber-100/50 font-semibold"
                            : "text-amber-800 hover:text-amber-900 hover:bg-amber-50/80 hover:translate-x-1",
                        )}
                        style={{ animationDelay: `${idx * 50}ms` }}
                      >
                        {t(item.labelKey)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
          <LanguageSwitcher />
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t">
          <nav className="flex flex-col gap-1 p-4 bg-orange-50 border-b border-orange-100">
            {navGroupsConfig.map((group) => {
              const active = isActiveGroup(group)
              const label = t(group.labelKey)

              if (group.href) {
                return (
                  <Link
                    key={group.href}
                    href={group.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                      active
                        ? "text-neutral-900 bg-white font-semibold"
                        : "text-orange-600 hover:text-orange-800 hover:bg-white",
                    )}
                  >
                    {label}
                  </Link>
                )
              }

              const isOpenDropdown = mobileDropdowns[group.labelKey]
              return (
                <div key={group.labelKey} className="relative">
                  <button
                    onClick={() => toggleMobileDropdown(group.labelKey)}
                    className={`w-full flex items-center justify-between px-4 py-3 text-base font-medium rounded-lg transition-colors ${active ? "text-neutral-900 bg-white" : "text-orange-600 hover:bg-white"
                      }`}
                  >
                    {label}
                    <ChevronDown className={`h-5 w-5 transition-transform ${isOpenDropdown && "rotate-180"}`} />
                  </button>
                  {isOpenDropdown && (
                    <ul className="mt-1 ml-4 space-y-1">
                      {group.items?.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "block px-4 py-2.5 text-sm rounded-lg transition-colors",
                            pathname === item.href
                              ? "bg-neutral-100 text-neutral-900 font-medium"
                              : "text-neutral-600 hover:bg-neutral-50",
                          )}
                        >
                          {t(item.labelKey)}
                        </Link>
                      ))}
                    </ul>
                  )}
                </div>
              )
            })}
          </nav>
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
    </header>
  )
}

export default SiteHeader
