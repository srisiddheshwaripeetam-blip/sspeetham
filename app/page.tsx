"use client"

import type React from "react"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { useState, useEffect, useRef } from "react"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { MapPin, Phone, Mail } from "lucide-react"
import { FourSquares } from "@/components/icons/four-squares"

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.15 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="transition-all duration-700 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

export default function HomePage() {
  const { t } = useLanguage()
  const [showWebsite, setShowWebsite] = useState(false)

  const handleEnterSite = () => {
    setShowWebsite(true)
  }

  if (!showWebsite) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 flex items-center justify-center relative overflow-hidden">
        {/* Decorative mandala background */}
        <div className="absolute inset-0 mandala-bg opacity-50" />

        {/* Floating decorative elements */}
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-amber-300/30 rounded-full float-gentle" />
        <div
          className="absolute bottom-32 right-20 w-24 h-24 border-2 border-orange-300/30 rounded-full float-gentle"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-16 h-16 border border-amber-400/20 rounded-full float-gentle"
          style={{ animationDelay: "4s" }}
        />

        {/* Rotating ornate circle */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[500px] border border-amber-200/30 rounded-full rotate-slow" />
          <div
            className="absolute w-[400px] h-[400px] border border-orange-200/20 rounded-full rotate-slow"
            style={{ animationDirection: "reverse", animationDuration: "90s" }}
          />
        </div>

        {/* Main content */}
        <div className="relative z-10 text-center animate-scale-in">
          <button
            onClick={handleEnterSite}
            className="group relative bg-white/90 backdrop-blur-sm rounded-full p-8 shadow-depth-3 animate-breathe cursor-pointer border-4 border-amber-400 transition-all duration-500 hover:scale-105"
          >
            {/* Outer glow ring */}
            <div className="absolute -inset-4 rounded-full border-2 border-amber-300/50 pulse-glow" />
            <div
              className="absolute -inset-8 rounded-full border border-amber-200/30 pulse-glow"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute -inset-12 rounded-full border border-amber-100/20 pulse-glow"
              style={{ animationDelay: "2s" }}
            />

            <img
              src="/logo-nobg.png"
              alt="Sri Siddheswari Peetham"
              className="w-48 h-48 md:w-64 md:h-64 object-contain transition-all duration-700 group-hover:scale-110 group-hover:rotate-3"
            />
          </button>

          <p className="mt-8 text-amber-700 font-medium text-lg animate-fade-slide-up" style={{ animationDelay: "0.3s" }}>Click to Enter</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen pt-0 md:pt-20">
        {/* Hero Section - Enhanced with ornate elements */}
        <section className="relative h-[650px] sm:h-[700px] lg:h-[700px] overflow-hidden mt-0 md:-mt-20">
          {/* Background Image */}
          <div className="absolute inset-0">
            <picture>
              <source media="(max-width: 640px)" srcSet="/portrait-hero-mobile.png" />
              <img
                src="/images/website-20hero.webp"
                alt="Spiritual leaders of Sri Siddheswari Peetham"
                className="h-full w-full object-cover object-top md:object-center"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent sm:from-black/80 sm:via-black/50 lg:from-black/70 lg:via-black/35 lg:to-transparent" />
          </div>

          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600" />
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600" />

          {/* Content Overlay */}
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 h-full flex items-end pb-3 sm:pb-8 md:items-center md:pb-12 lg:pb-0 pt-16 md:pt-20">
            <div className="max-w-xl lg:max-w-2xl w-full sm:w-auto">
              <div className="bg-black/60 backdrop-blur-md rounded-2xl p-4 sm:p-6 lg:bg-transparent lg:backdrop-blur-none lg:p-0 border border-amber-500/20 lg:border-0">
                <FadeUp>
                  <h1
                    className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-white lg:text-5xl xl:text-6xl drop-shadow-lg"
                    style={{ WebkitTextFillColor: "white", background: "none" }}
                  >
                    {t("home.hero.title")}
                  </h1>
                </FadeUp>
                <FadeUp delay={100}>
                  <p className="mt-2 sm:mt-4 text-base sm:text-xl text-amber-200 lg:text-2xl font-medium">
                    {t("home.hero.location")}
                  </p>
                </FadeUp>
                <FadeUp delay={150}>
                  <p className="mt-3 sm:mt-6 text-sm sm:text-lg leading-relaxed text-white/95 max-w-lg">
                    {t("home.hero.description")}
                  </p>
                </FadeUp>
                <FadeUp delay={200}>
                  <Link href="/visit" className="btn-temple mt-4 sm:mt-8 inline-block text-sm sm:text-lg">
                    {t("home.hero.cta")}
                  </Link>
                </FadeUp>
              </div>
            </div>
          </div>
        </section>

        <div className="divider-ornate my-8">
          <FourSquares className="divider-symbol text-amber-600 w-6 h-6 animate-pulse" />
        </div>

        {/* Primary Visual Cards */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <FadeUp>
            <h2 className="text-center font-serif text-3xl md:text-4xl mb-10">{t("home.explore.title")}</h2>
          </FadeUp>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: t("nav.deities"),
                copy: t("deities.hero.description"),
                href: "/deities",
                img: "/deities-shrines-card.webp",
                type: "image",
              },
              {
                title: t("nav.homam"),
                copy: t("home.pratyangira.description"),
                href: "/homam",
                img: "/homam-card.webp",
                type: "image",
              },
              {
                title: t("home.meru.title"),
                copy: t("home.meru.description"),
                href: "/deities",
                img: "/meru-card.webp",
                type: "image",
              },
            ].map((card, i) => (
              <FadeUp key={card.title} delay={100 * i}>
                <Link href={card.href} className="group block temple-card-modern overflow-hidden">
                  <div className="relative aspect-square w-full overflow-hidden">
                    {card.type === "video" ? (
                      <video
                        src={card.img}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                      />
                    ) : (
                      <img
                        src={card.img || "/placeholder.svg"}
                        alt={`${card.title} visual`}
                        className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                      />
                    )}
                  </div>
                  <div className="p-5 bg-gradient-to-b from-amber-50 to-white relative">
                    <h3
                      className="font-serif text-xl text-amber-900 transition-colors duration-300 group-hover:text-amber-700"
                      style={{ WebkitTextFillColor: "#78350f", background: "none" }}
                    >
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-amber-800">{card.copy}</p>
                    <span className="mt-3 inline-flex items-center text-sm font-semibold text-amber-700 group-hover:text-amber-600 transition-all duration-300">
                      Explore
                      <span className="ml-2 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110">→</span>
                    </span>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </section>

        <div className="divider-ornate my-8">
          <FourSquares className="divider-symbol text-amber-600 w-6 h-6 animate-pulse" />
        </div>

        {/* Heritage Cards */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <FadeUp>
            <h2 className="text-center font-serif text-3xl md:text-4xl mb-10">{t("home.heritage.title")}</h2>
          </FadeUp>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: t("home.parampara.title"),
                copy: t("home.parampara.description"),
                img: "/guru-parampara-updated.png",
                href: "/parampara",
                objectPosition: "object-top",
              },
              {
                title: t("home.swamiji.title"),
                copy: t("home.swamiji.description"),
                img: "/Siddheswarananda Bharati/peethadhipathi-updated.png",
                href: "/about",
                objectPosition: "object-top",
              },
            ].map((card, i) => (
              <FadeUp key={card.title} delay={100 * i}>
                <Link href={card.href} className="group block temple-card-modern overflow-hidden">
                  <div className="relative aspect-square w-full overflow-hidden">
                    <img
                      src={card.img || "/placeholder.svg"}
                      alt={`${card.title} image`}
                      className={`h-full w-full object-cover ${card.objectPosition} transition-all duration-700 ease-out group-hover:scale-105`}
                    />
                  </div>
                  <div className="p-5 bg-gradient-to-b from-amber-50 to-white relative">
                    <h3
                      className="font-serif text-xl text-amber-900 transition-colors duration-300 group-hover:text-amber-700"
                      style={{ WebkitTextFillColor: "#78350f", background: "none" }}
                    >
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-amber-800">{card.copy}</p>
                    <span className="mt-3 inline-flex items-center text-sm font-semibold text-amber-700 group-hover:text-amber-600 transition-all duration-300">
                      Learn more
                      <span className="ml-2 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110">→</span>
                    </span>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </section>

        <div className="divider-ornate my-8">
          <FourSquares className="divider-symbol text-amber-600 w-6 h-6 animate-pulse" />
        </div>

        {/* Services Section with temple-inspired background */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-100 via-orange-50 to-amber-100 mandala-bg relative">
          <div className="max-w-7xl mx-auto">
            <FadeUp>
              <h2 className="text-center font-serif text-3xl md:text-4xl mb-10">{t("home.services.title")}</h2>
            </FadeUp>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: t("deities.button.bookSeva"),
                  copy: t("home.bookseva.copy"),
                  href: "/sevas/book",
                },
                {
                  title: t("home.darshan.title"),
                  copy: t("home.visit.description"),
                  href: "/visit",
                },
                {
                  title: t("home.support.title"),
                  copy: t("home.support.description"),
                  href: "/donate",
                },
              ].map((item, i) => (
                <FadeUp key={item.title} delay={100 * i}>
                  <Link href={item.href} className="group block glass-card p-6 rounded-xl hover:shadow-glow-amber transition-all duration-500 hover:-translate-y-2">
                    <h3
                      className="font-serif text-lg text-amber-900 transition-colors duration-300 group-hover:text-amber-700"
                      style={{ WebkitTextFillColor: "#78350f", background: "none" }}
                    >
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-amber-800">{item.copy}</p>
                    <span className="mt-4 inline-flex items-center text-sm font-semibold text-amber-700 group-hover:text-amber-600 transition-all duration-300">
                      Explore
                      <span className="ml-2 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110">→</span>
                    </span>
                  </Link>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        <div className="divider-ornate my-8">
          <FourSquares className="divider-symbol text-amber-600 w-6 h-6 animate-pulse" />
        </div>

        {/* Contact Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <FadeUp>
              <div className="ornate-frame p-8 hover:shadow-glow-amber transition-all duration-500">
                <h2 className="font-serif text-3xl md:text-4xl mb-4">{t("footer.visit")}</h2>
                <p className="text-amber-800 leading-relaxed mb-6">
                  {t("home.visit.description")}
                </p>
                <div className="space-y-4 text-amber-900">
                  <p className="flex items-center gap-3 transition-transform duration-300 hover:translate-x-1">
                    <span className="text-amber-600 p-2 bg-amber-100 rounded-full"><MapPin className="w-5 h-5" /></span>
                    Courtallam, Tamil Nadu, India
                  </p>
                  <p className="flex items-center gap-3 transition-transform duration-300 hover:translate-x-1">
                    <span className="text-amber-600 p-2 bg-amber-100 rounded-full"><Phone className="w-5 h-5" /></span>
                    +91 9443184738
                  </p>
                  <p className="flex items-center gap-3 transition-transform duration-300 hover:translate-x-1">
                    <span className="text-amber-600 p-2 bg-amber-100 rounded-full"><Mail className="w-5 h-5" /></span>
                    feedback@srisiddheshwaripeetham.com
                  </p>
                </div>
                <Link href="/contact" className="btn-modern inline-block mt-8">
                  {t("nav.contact")}
                </Link>
              </div>
            </FadeUp>

            <FadeUp delay={150}>
              <div className="image-frame-ornate animate-glow-border overflow-hidden group">
                <img
                  src="/courtallam-temple-gopuram-and-peetham-campus.png"
                  alt="Sri Siddheswari Peetham Campus"
                  className="w-full h-80 object-cover transition-all duration-700 group-hover:scale-105"
                />
              </div>
            </FadeUp>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
