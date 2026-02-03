"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { ChevronDown, ChevronRight, ChevronUp, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { FadeUp } from "@/components/animate-on-scroll"
import { useLanguage } from "@/lib/language-context"

export default function ParamparaPage() {
  const { t } = useLanguage()
  const [expandedId, setExpandedId] = useState<number | null>(null)

  // Ref for the timeline container
  const timelineRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  const [biographies, setBiographies] = useState<Record<string, string>>({})
  const { language } = useLanguage()

  // Pre-load all biographies for the timeline
  useEffect(() => {
    const fetchBiographies = async () => {
      try {
        const response = await fetch(`/content/biographies_${language}.json`)
        if (response.ok) {
          const data = await response.json()
          setBiographies(data)
        }
      } catch (error) {
        console.error("Error fetching biographies:", error)
      }
    }
    fetchBiographies()
  }, [language])

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  const lineage = [
    {
      id: 1,
      name: t("swami1.name"),
      role: t("swami1.title"),
      period: t("swami1.period"),
      year: "1916",
      image: "/mouna-swami-portrait-1.jpg",
      imagePosition: "object-top",
      description: t("swami1.brief"),
      fullDescription: t("swami1.description"),
      birth: t("swami1.birth"),
      siddhi: t("swami1.siddhi"),
    },
    {
      id: 2,
      name: t("swami2.name"),
      role: t("swami2.title"),
      period: t("swami2.period"),
      year: "1944",
      image: "/vimalananda-bharati-portrait.jpg",
      imagePosition: "object-top",
      description: t("swami2.brief"),
      fullDescription: t("swami2.description"),
      birth: t("swami2.birth"),
      siddhi: t("swami2.siddhi"),
    },
    {
      id: 3,
      name: t("swami3.name"),
      role: t("swami3.title"),
      period: t("swami3.period"),
      year: "1950",
      image: "/trivikrama-ramananda-standing.jpg",
      imagePosition: "object-top",
      description: t("swami3.brief"),
      fullDescription: t("swami3.description"),
      birth: t("swami3.birth"),
      siddhi: t("swami3.siddhi"),
    },
    {
      id: 4,
      name: t("swami4.name"),
      role: t("swami4.title"),
      period: t("swami4.period"),
      year: "1991",
      image: "/siva-chidananda-standing.jpg",
      imagePosition: "object-top",
      description: t("swami4.brief"),
      fullDescription: t("swami4.description"),
      birth: t("swami4.birth"),
      siddhi: t("swami4.siddhi"),
    },
    {
      id: 5,
      name: t("swami5.name"),
      role: t("swami5.title"),
      period: t("swami5.period"),
      year: "2002",
      image: "/peethadhipathi-updated.png",
      imagePosition: "object-top",
      description: t("swami5.brief"),
      fullDescription: t("swami5.description"),
      birth: t("swami5.birth"),
      siddhi: t("swami5.siddhi"),
    },
    {
      id: 6,
      name: t("swami6.name"),
      role: t("swami6.title"),
      period: t("swami6.period"),
      year: "Next",
      image: "/datteshwarananda-final.jpg",
      imagePosition: "object-top",
      description: t("swami6.brief"),
      fullDescription: t("swami6.description"),
      birth: t("swami6.birth"),
      siddhi: t("swami6.siddhi"),
    },
  ]

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      <SiteHeader />

      <main className="flex-grow pt-24 pb-16 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <FadeUp>
          <div className="text-center mb-16 space-y-4">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-amber-900 mb-2">
              {t("parampara.title")}
            </h1>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full" />
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              {t("parampara.subtitle")}
            </p>
          </div>
        </FadeUp>

        <div className="relative" ref={timelineRef}>
          {/* Vertical Line for Desktop */}
          {/* Static Background Line */}
          <div className="absolute left-8 md:left-1/2 top-4 bottom-0 w-1 bg-amber-200/50 hidden md:block rounded-full" />

          {/* Animated Foreground Line */}
          <motion.div
            className="absolute left-8 md:left-1/2 top-4 w-1 bg-gradient-to-b from-amber-500 via-orange-500 to-amber-500 hidden md:block rounded-full origin-top shadow-[0_0_15px_rgba(245,158,11,0.6)]"
            style={{ height: lineHeight }}
          />

          <div className="space-y-12 md:space-y-24 pb-12">
            {lineage.map((guru, index) => {
              const isEven = index % 2 === 0
              const isExpanded = expandedId === guru.id

              return (
                <FadeUp key={guru.id} delay={index * 0.1}>
                  <div className={`relative flex flex-col md:flex-row gap-4 md:gap-12 items-center ${isEven ? "md:flex-row-reverse" : ""
                    }`}>

                    {/* Timeline Node (Desktop) */}
                    <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center justify-center z-20">
                      {/* Year Circle */}
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-100 to-white border-4 border-amber-600 shadow-[0_0_20px_rgba(180,83,9,0.3)] flex items-center justify-center relative group">
                        <span className="font-serif font-bold text-amber-900 text-sm">{guru.year}</span>
                        {/* Inner Glow Ring */}
                        <div className="absolute inset-0 rounded-full border border-amber-300 opacity-50 animate-pulse" />
                      </div>
                    </div>

                    {/* Image Side */}
                    <div className={`w-full md:w-1/2 flex justify-center ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
                      <div className={`relative w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-white shadow-xl group ${isEven ? "md:ml-8" : "md:mr-8"
                        }`}>
                        <div className="absolute inset-0 bg-amber-900/10 group-hover:bg-transparent transition-colors z-10" />
                        <Image
                          src={guru.image}
                          alt={guru.name}
                          fill
                          className={`object-cover ${guru.imagePosition} transition-transform duration-700 group-hover:scale-110`}
                        />
                        {/* Divine Halo Effect */}
                        <div className="absolute inset-0 rounded-full ring-4 ring-amber-400/30 group-hover:ring-amber-500/60 transition-all duration-500" />
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className={`w-full md:w-1/2 ${isEven ? "md:text-right md:pr-4" : "md:text-left md:pl-4"
                      }`}>
                      <div className="bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-sm border border-amber-100 hover:shadow-[0_10px_40px_rgba(124,45,18,0.1)] transition-all duration-300 relative overflow-hidden group">

                        {/* Decorative background element */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-100/40 to-transparent rounded-bl-full -mr-10 -mt-10 opacity-60 group-hover:opacity-80 transition-opacity" />

                        <span className="inline-block px-3 py-1 bg-gradient-to-r from-amber-100 to-amber-50 text-amber-800 rounded-full text-xs font-bold tracking-wider mb-3 shadow-sm border border-amber-200">
                          {guru.period}
                        </span>

                        <h3 className="font-serif text-2xl font-bold text-gray-900 mb-1 leading-tight group-hover:text-amber-800 transition-colors">
                          {guru.name}
                        </h3>

                        <p className="text-amber-700 font-medium mb-4">{guru.role}</p>

                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {guru.description}
                        </p>

                        <div className="space-y-4">
                          <button
                            onClick={() => toggleExpand(guru.id)}
                            className={`inline-flex items-center gap-1.5 text-sm font-bold transition-all duration-300 px-4 py-2 rounded-full border-2 ${isExpanded
                              ? "bg-amber-50 border-amber-200 text-amber-800"
                              : "bg-transparent border-transparent text-amber-600 hover:bg-amber-50 hover:text-amber-800"
                              }`}
                          >
                            {isExpanded ? (
                              <>
                                {t("parampara.read_less")} <ChevronUp className="w-4 h-4" />
                              </>
                            ) : (
                              <>
                                {t("parampara.read_more")} <ChevronDown className="w-4 h-4" />
                              </>
                            )}
                          </button>

                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="pt-4 border-t border-gray-100 text-sm text-gray-600 space-y-3">
                                  <div className="italic bg-amber-50/50 p-3 rounded-lg border border-amber-100/50 leading-relaxed text-justify min-h-[50px]">
                                    <span className="font-semibold text-amber-900 block mb-2">{t("parampara.read_full_history")}:</span>
                                    {!biographies[`swami${guru.id}`] ? (
                                      <div className="space-y-2 animate-pulse">
                                        <div className="h-3 bg-amber-200/40 rounded w-full" />
                                        <div className="h-3 bg-amber-200/40 rounded w-5/6" />
                                        <div className="h-3 bg-amber-200/40 rounded w-4/6" />
                                      </div>
                                    ) : (
                                      <div
                                        className="space-y-4"
                                        dangerouslySetInnerHTML={{ __html: biographies[`swami${guru.id}`] }}
                                      />
                                    )}
                                  </div>
                                  <div className="text-xs text-gray-500 flex flex-wrap gap-x-4 gap-y-1">
                                    <span><strong>{t("parampara.born")}:</strong> {guru.birth}</span>
                                    <span>
                                      {guru.siddhi === "Present" ?
                                        <strong className="text-green-600 px-2 py-0.5 bg-green-50 rounded-full border border-green-200">{t("parampara.current_peethadhipathi")}</strong> :
                                        <span><strong>{t("parampara.siddhi")}:</strong> {guru.siddhi}</span>
                                      }
                                    </span>
                                  </div>
                                  <Link
                                    href="/peethadhipathi-gallery"
                                    className="inline-flex items-center gap-1 text-amber-700 hover:text-amber-900 font-medium text-xs mt-2 group/link"
                                  >
                                    {t("parampara.view_gallery")} <ChevronRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                                  </Link>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>

                  </div>
                </FadeUp>
              )
            })}
          </div>
        </div>

        {/* CTA to Gallery */}
        <div className="mt-20 md:mt-32">
          <FadeUp>
            <div className="bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-2xl border border-amber-700/50">
              <div className="absolute inset-0 bg-[url('/pattern-dark.png')] opacity-10 mix-blend-overlay" />

              {/* Decorative Circles */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-amber-500/20 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-500/20 blur-3xl rounded-full translate-x-1/2 translate-y-1/2" />

              <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                <h2 className="font-serif text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-100 to-white">{t("parampara.explore_gallery")}</h2>
                <p className="text-amber-100 text-lg leading-relaxed font-light">
                  {t("parampara.explore_description")}
                </p>
                <Link
                  href="/peethadhipathi-gallery"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-white to-amber-50 text-amber-900 px-8 py-4 rounded-full font-bold hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transform hover:-translate-y-1 transition-all duration-300"
                >
                  {t("parampara.view_gallery")} <ArrowRight className="w-5 h-5 text-amber-700" />
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
