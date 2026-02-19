"use client"

import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import Image from "next/image"
import { FadeUp } from "@/components/animate-on-scroll"
import { Mountain, ExternalLink, Leaf, CircleDot } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { RichTextRenderer } from "@/components/rich-text-renderer"

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-8 pt-24 md:pt-28">
        {/* Hero Section */}
        <FadeUp>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 p-8 md:p-12">
            <div className="relative z-10">
              <h1 className="font-serif text-4xl md:text-5xl text-amber-900 mb-4">{t("about.hero.title")}</h1>
              <p className="text-lg text-amber-800 leading-relaxed max-w-2xl">
                {t("about.hero.description")}
              </p>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-200/30 rounded-full blur-2xl"></div>
          </div>
        </FadeUp>

        {/* History Section */}
        <div className="mt-16 grid gap-12 md:grid-cols-2 items-center">
          <FadeUp delay={100}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="group text-center">
                <div className="overflow-hidden rounded-xl shadow-lg mb-3 aspect-[4/5]">
                  <Image
                    src="/mounaswami/mouna-swami-tapas.jpg"
                    alt="H.H. Sri Mouna Swamy - Founder"
                    width={400}
                    height={500}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="font-serif font-semibold text-amber-900 leading-tight">H.H. Sri Mouna Swamy</p>
                <p className="text-xs text-amber-700 font-medium mt-1">Founder</p>
              </div>

              <div className="group text-center">
                <div className="overflow-hidden rounded-xl shadow-lg mb-3 aspect-[4/5]">
                  <Image
                    src="/Siddheswarananda Bharati/siddheswarananda-bharati-current.jpg"
                    alt="H.H. Sri Siddheswarananda Bharati Swamy - Current Peethadhipathi"
                    width={400}
                    height={500}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="font-serif font-semibold text-amber-900 leading-tight">
                  H.H. Sri Siddheswarananda Bharati Swamy
                </p>
                <p className="text-xs text-amber-700 font-medium mt-1">Current Peethadhipathi</p>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={200}>
            <div className="space-y-6">
              <h2 className="font-serif text-3xl text-amber-900">{t("about.history.title")}</h2>
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <RichTextRenderer content={t("about.history.para1")} />
                <RichTextRenderer content={t("about.history.para2")} />
                <RichTextRenderer content={t("about.history.para3")} />
                <RichTextRenderer content={t("about.history.para4")} />
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Location & Significance */}
        <FadeUp delay={300}>
          <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 border border-amber-100 hover:shadow-xl transition-all duration-300">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center group">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors">
                  <span className="text-2xl text-amber-700"><Mountain className="w-8 h-8" /></span>
                </div>
                <h3 className="font-semibold text-amber-900 mb-2">{t("about.location.title")}</h3>
                <p className="text-sm text-neutral-600">
                  {t("about.location.description")}
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors">
                  <span className="text-2xl text-amber-700"><CircleDot className="w-8 h-8" /></span>
                </div>
                <h3 className="font-semibold text-amber-900 mb-2">{t("about.traditions.title")}</h3>
                <p className="text-sm text-neutral-600">
                  {t("about.traditions.description")}
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors">
                  <span className="text-2xl text-amber-700"><Leaf className="w-8 h-8" /></span>
                </div>
                <h3 className="font-semibold text-amber-900 mb-2">{t("about.healing.title")}</h3>
                <p className="text-sm text-neutral-600">
                  {t("about.healing.description")}
                </p>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Guru Parampara */}
        <div className="mt-16">
          <FadeUp delay={400}>
            <h2 className="font-serif text-3xl text-center text-amber-900 mb-8">{t("about.parampara.title")}</h2>
          </FadeUp>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: t("swami1.name"),
                title: t("swami1.title"),
                period: t("swami1.period"),
              },
              {
                name: t("swami2.name"),
                title: t("swami2.title"),
                period: t("swami2.period")
              },
              {
                name: t("swami3.name"),
                title: t("swami3.title"),
                period: t("swami3.period"),
              },
              {
                name: t("swami4.name"),
                title: t("swami4.title"),
                period: t("swami4.period")
              },
              {
                name: t("swami5.name"),
                title: t("swami5.title"),
                period: t("swami5.period"),
              },
              {
                name: t("swami6.name"),
                title: t("swami6.title"),
                period: t("swami6.period"),
              },
            ].map((guru, index) => (
              <FadeUp key={index} delay={500 + index * 100}>
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200 hover:shadow-lg hover:scale-105 transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-amber-300 transition-colors">
                      <span className="text-amber-800 font-bold">{index + 1}</span>
                    </div>
                    <h3 className="font-semibold text-amber-900 text-sm mb-1">{guru.name}</h3>
                    <p className="text-xs text-amber-700 mb-1">{guru.title}</p>
                    <p className="text-xs text-neutral-600">{guru.period}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>

        {/* Presiding Deity */}
        <FadeUp delay={800}>
          <div className="mt-16 text-center bg-gradient-to-r from-amber-900 to-orange-800 text-white rounded-2xl p-12 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="font-serif text-3xl mb-4 text-white">{t("about.deity.title")}</h2>
              <p className="text-xl mb-2">{t("about.deity.name")}</p>
              <p className="text-lg opacity-90 mb-4">{t("about.deity.aka")}</p>
              <p className="max-w-2xl mx-auto leading-relaxed opacity-90">
                {t("about.deity.description")}
              </p>
            </div>
            <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          </div>
        </FadeUp>
      </main>
      <SiteFooter />
    </>
  )
}
