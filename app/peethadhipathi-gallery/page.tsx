"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, X, ZoomIn, ArrowLeft } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { FadeUp } from "@/components/animate-on-scroll"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { useLanguage } from "@/lib/language-context"
import { RichTextRenderer } from "@/components/rich-text-renderer"
import bioEn from "@/lib/data/biographies_en.json"
import bioHi from "@/lib/data/biographies_hi.json"
import bioTa from "@/lib/data/biographies_ta.json"
import bioTe from "@/lib/data/biographies_te.json"

const biographyData: Record<string, Record<string, string>> = {
  en: bioEn,
  hi: bioHi,
  ta: bioTa,
  te: bioTe,
}

export default function PeethadhipathiGalleryPage() {
  const { t } = useLanguage()
  const [activeSwamiIndex, setActiveSwamiIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0)

  const peethadhipathis = [
    {
      id: 1,
      name: t("swami1.name"),
      title: t("swami1.title"),
      period: t("swami1.period"),
      image: "/mouna-swami-portrait-1.jpg",
      imagePosition: "object-top",
      gallery: [
        "/mouna-swami-portrait-1.jpg",
        "/mouna-swami-tapas.jpg",
        "/mouna-swami-seated.jpg",
        "/mouna-swami-procession.jpg",
        "/mounaswami/027c04c0-9f7a-4cff-b9a0-0feb5ca994a5.jpg",
        "/mounaswami/38b3e8b3-df35-4701-9cbc-087ccdb232e1.jpg",
        "/mounaswami/8b550ed6-17cd-4024-9ad7-a51bc40e537f.jpg",
        "/mounaswami/8c79684b-8279-4321-8049-dc358ece56e2.jpg",
        "/mounaswami.png",
        "/portait%20hero.png",
      ],
      description: t("swami1.long_description"),
      contributions: [
        t("swami1.contribution1"),
        t("swami1.contribution2"),
        t("swami1.contribution3"),
        t("swami1.contribution4"),
        t("swami1.contribution5"),
        t("swami1.contribution6"),
        t("swami1.contribution7"),
      ],
    },
    {
      id: 2,
      name: t("swami2.name"),
      title: t("swami2.title"),
      period: t("swami2.period"),
      image: "/vimalananda-bharati-portrait.jpg",
      imagePosition: "object-top",
      gallery: [
        "/vimalananda-bharati-portrait.jpg",
        "/vimalananda-bharati-statue.jpg",
        "/vimalananda/81dbe0ff-e0ab-4187-bec8-21abc1c89799.jpg",
        "/vimalananda/b1fbcf01-904c-4d8e-b304-9e3fddcae8a7.jpg",
        "/vimalananda.jpg",
      ],
      description: t("swami2.long_description"),
      contributions: [
        t("swami2.contribution1"),
        t("swami2.contribution2"),
        t("swami2.contribution3"),
        t("swami2.contribution4"),
      ],
    },
    {
      id: 3,
      name: t("swami3.name"),
      title: t("swami3.title"),
      period: t("swami3.period"),
      image: "/trivikrama-ramananda-standing.jpg",
      imagePosition: "object-top",
      gallery: [
        "/trivikrama-ramananda-standing.jpg",
        "/trivikrama-ramananda-puja.jpg",
        "/trivikrama-ramananda-official.jpg",
        "/trivikramananda.jpg",
      ],
      description: t("swami3.long_description"),
      contributions: [
        t("swami3.contribution1"),
        t("swami3.contribution2"),
        t("swami3.contribution3"),
        t("swami3.contribution4"),
      ],
    },
    {
      id: 4,
      name: t("swami4.name"),
      title: t("swami4.title"),
      period: t("swami4.period"),
      image: "/siva-chidananda-standing.jpg",
      imagePosition: "object-top",
      gallery: [
        "/siva-chidananda-standing.jpg",
        "/siva-chidananda-seated.jpg",
        "/sivachidananda/WhatsApp Image 2025-11-04 at 12.21.34.jpeg",
        "/sivachidananda/ce286934-2601-429a-8d59-102582f7d6fd.jpg",
        "/siva-chidananda-bharati.png",
      ],
      description: t("swami4.long_description"),
      contributions: [
        t("swami4.contribution1"),
        t("swami4.contribution2"),
        t("swami4.contribution3"),
        t("swami4.contribution4"),
        t("swami4.contribution5"),
      ],
    },
    {
      id: 5,
      name: t("swami5.name"),
      title: t("swami5.title"),
      period: t("swami5.period"),
      image: "/peethadhipathi-updated.png",
      imagePosition: "object-top",
      gallery: [
        "/peethadhipathi-updated.png",
        "/siddheswarananda-blessing.png",
        "/siddheswarananda-seated.png",
        "/siddheswarananda-garland.jpg",
        "/siddheswarananda-bharati-portrait.png",
        "/Siddheswarananda Bharati/59390105_1111951392330542_196927441682300928_n.jpg",
        "/Siddheswarananda Bharati/ATI RUDRAM (5).avif",
        "/Siddheswarananda Bharati/Peethadipati.png",
        "/Siddheswarananda Bharati/swami ji.png",
        "/siddheswarananda-bharati-current.jpg",
        "/siddheswarananda-bharati-official.jpg",
        "/swami%20pooja.png",
        "/swamiji-performing-nithya-seva.jpg",
        "/swamiji-pooja-exact.png",
        "/swamiji-seated-final.png",
      ],
      description: t("swami5.long_description"),
      contributions: [
        t("swami5.contribution1"),
        t("swami5.contribution2"),
        t("swami5.contribution3"),
        t("swami5.contribution4"),
        t("swami5.contribution5"),
        t("swami5.contribution6"),
      ],
    },
    {
      id: 6,
      name: t("swami6.name"),
      title: t("swami6.title"),
      period: t("swami6.period"),
      image: "/datteshwarananda-final.jpg",
      imagePosition: "object-top",
      gallery: [
        "/datteshwarananda-final.jpg",
        "/datteshwarananda-standing.jpg",
        "/datteshwarananda-blessing.jpg",
        "/datteshwarananda-throne.jpg",
        "/dattaswami-2.jpg",
        "/dattaswami-3.jpg",
        "/dattaswami-4.jpg",
      ],
      description: t("swami6.long_description"),
      contributions: [
        t("swami6.contribution1"),
        t("swami6.contribution2"),
        t("swami6.contribution3"),
        t("swami6.contribution4"),
        t("swami6.contribution5"),
      ],
    },
  ]

  const activeSwami = peethadhipathis[activeSwamiIndex]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const { language } = useLanguage()

  const activeHtmlDescription = biographyData[language]?.[`swami${activeSwamiIndex + 1}`] || ""


  const nextSwami = () => {
    setActiveSwamiIndex((prev) => (prev + 1) % peethadhipathis.length)
    setCurrentImageIndex(0)
  }

  const prevSwami = () => {
    setActiveSwamiIndex((prev) => (prev - 1 + peethadhipathis.length) % peethadhipathis.length)
    setCurrentImageIndex(0)
  }

  const openLightbox = (imageIndex: number) => {
    setLightboxImageIndex(imageIndex)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextLightboxImage = () => {
    setLightboxImageIndex((prev) => (prev + 1) % activeSwami.gallery.length)
  }

  const prevLightboxImage = () => {
    setLightboxImageIndex((prev) => (prev - 1 + activeSwami.gallery.length) % activeSwami.gallery.length)
  }

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-neutral-950">
        {/* Hero Section - Devotional & Respectful */}
        {/* Hero Section - Sacred Premium Design */}
        {/* Hero Section - Sacred Premium Design */}
        <div className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-amber-950 via-black to-neutral-950">

          <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 pt-24 pb-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSwami.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
                className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
              >
                {/* Text Content */}
                <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                  >
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-950/40 backdrop-blur-md shadow-[0_0_15px_rgba(245,158,11,0.1)]">
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                      <p className="text-amber-200 font-medium tracking-widest uppercase text-xs">
                        {activeSwami.period === "Successor" ? "Successor Designate" : activeSwami.period}
                      </p>
                    </div>

                    <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-[1.1] tracking-tight text-white drop-shadow-lg">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-200 to-amber-500">
                        {activeSwami.name}
                      </span>
                    </h1>

                    <div className="h-1.5 w-32 bg-gradient-to-r from-amber-500 via-amber-300 to-transparent rounded-full mx-auto lg:mx-0 mb-8 opacity-80" />

                    <p className="text-amber-200/80 text-lg font-medium mb-4 tracking-wide">
                      {activeSwami.title}
                    </p>

                    <div className="min-h-[100px] mb-8">
                      <div
                        className="text-stone-300 text-sm md:text-base font-light leading-relaxed max-w-xl mx-auto lg:mx-0 tracking-wide line-clamp-3 opacity-80"
                        dangerouslySetInnerHTML={{ __html: activeHtmlDescription.replace(/<[^>]*>?/gm, ' ') }}
                      />
                    </div>

                    <button
                      onClick={() => {
                        const storySection = document.getElementById('story-section');
                        storySection?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors uppercase text-sm font-bold tracking-widest border-b border-amber-500/50 pb-1 hover:border-amber-400 mb-8"
                    >
                      Read Story <ChevronRight className="w-4 h-4" />
                    </button>
                  </motion.div>

                  {/* Navigation Controls */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex items-center gap-6"
                  >
                    <button
                      onClick={prevSwami}
                      className="group flex items-center gap-3 px-6 py-3 rounded-full border border-amber-500/30 text-amber-100 hover:bg-amber-900/40 hover:border-amber-400/60 transition-all duration-300 active:scale-95 backdrop-blur-sm"
                    >
                      <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform text-amber-400" />
                      <span className="text-sm font-medium uppercase tracking-wider">Previous</span>
                    </button>

                    <div className="h-8 w-px bg-amber-500/20" />

                    <button
                      onClick={nextSwami}
                      className="group flex items-center gap-3 px-6 py-3 rounded-full border border-amber-500/30 text-amber-100 hover:bg-amber-900/40 hover:border-amber-400/60 transition-all duration-300 active:scale-95 backdrop-blur-sm"
                    >
                      <span className="text-sm font-medium uppercase tracking-wider">Next</span>
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-amber-400" />
                    </button>
                  </motion.div>
                </div>

                {/* Swami Image Frame */}
                <div className="relative flex justify-center lg:justify-end perspective-1000">
                  <motion.div
                    className="relative z-10 w-full max-w-md mx-auto lg:mx-0"
                    initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    {/* Golden Glow Behind */}
                    <div className="absolute inset-0 bg-amber-500/20 blur-[80px] rounded-full scale-90 lg:scale-100 animate-pulse" />

                    {/* The Frame Container */}
                    <div className="relative aspect-[3/4] rounded-t-[10rem] rounded-b-[3rem] p-4 bg-gradient-to-b from-amber-200/20 via-amber-500/10 to-transparent backdrop-blur-sm border border-amber-200/30 shadow-2xl overflow-hidden group">

                      {/* Inner Border Structure */}
                      <div className="absolute inset-0 rounded-t-[10rem] rounded-b-[3rem] border-2 border-amber-300/20 pointer-events-none" />

                      {/* Image Container */}
                      <div className="relative w-full h-full rounded-t-[9rem] rounded-b-[2rem] overflow-hidden bg-stone-900/80 shadow-inner">
                        <Image
                          src={activeSwami.image}
                          alt={activeSwami.name}
                          fill
                          className={`object-cover ${activeSwami.imagePosition} transition-transform duration-1000 group-hover:scale-105`}
                          priority
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />

                        {/* Overlay Gradient for Text Readability - Keep it minimal */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                      </div>

                      {/* Ornate Frame Details */}
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-16 border-t-2 border-amber-400/60 rounded-full opacity-70" />
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full max-w-[80%] h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Dots (Mobile/Tablet friendly interaction indication) */}
            <div className="flex justify-center gap-3 mt-12 lg:hidden">
              {peethadhipathis.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveSwamiIndex(idx)
                    setCurrentImageIndex(0)
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${idx === activeSwamiIndex
                    ? "w-8 bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.6)]"
                    : "w-2 bg-amber-800/50 hover:bg-amber-600/50"}`}
                  aria-label={`Go to Swami ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-stone-50 relative">
          {/* Decorative Wave */}
          <div className="absolute -top-16 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-stone-50" />

          <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
            <FadeUp key={activeSwami.id}>
              {/* Story Section */}
              <section id="story-section" className="mb-16 md:mb-24 scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-px bg-amber-400" />
                  <h2 className="font-serif text-2xl md:text-3xl text-amber-900 font-bold">The Story</h2>
                </div>
                <div className="prose prose-lg prose-amber max-w-none">
                  <div className="prose prose-lg prose-amber max-w-none">
                    <div
                      className="text-lg md:text-xl text-neutral-700 font-serif"
                      dangerouslySetInnerHTML={{ __html: activeHtmlDescription }}
                    />
                  </div>
                </div>
              </section>

              {/* Photo Gallery Grid */}
              <section className="mb-16 md:mb-24">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-px bg-amber-400" />
                  <h2 className="font-serif text-2xl md:text-3xl text-amber-900 font-bold">{t("gallery.photo_gallery")}</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                  {activeSwami.gallery.map((photo, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className={`relative overflow-hidden rounded-xl cursor-pointer group bg-neutral-100 border border-neutral-200 shadow-sm hover:shadow-md transition-all ${idx === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-[4/5]"
                        }`}
                      onClick={() => openLightbox(idx)}
                    >
                      {/* Inner "Mat" frame */}
                      <div className="absolute inset-2 bg-white rounded-lg shadow-inner overflow-hidden flex items-center justify-center">
                        <Image
                          src={photo}
                          alt={`${activeSwami.name} - Photo ${idx + 1}`}
                          fill
                          className="object-contain p-1"
                        />
                      </div>

                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className="p-3 bg-white/90 rounded-full shadow-lg backdrop-blur-sm transform scale-90 group-hover:scale-100 transition-transform">
                          <ZoomIn className="w-6 h-6 text-amber-900" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Divine Contributions */}
              <section className="mb-16 md:mb-24">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-px bg-amber-400" />
                  <h2 className="font-serif text-2xl md:text-3xl text-amber-900 font-bold">{t("gallery.contributions")}</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {activeSwami.contributions.map((contribution, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.08 }}
                      className="flex gap-4 items-start p-5 bg-white rounded-xl shadow-sm border border-amber-100/50 hover:shadow-lg hover:border-amber-200 transition-all duration-300 group"
                    >
                      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-amber-100 to-amber-50 text-amber-800 flex items-center justify-center text-sm font-bold border border-amber-200 group-hover:from-amber-500 group-hover:to-amber-600 group-hover:text-white group-hover:border-amber-500 transition-all duration-300">
                        {idx + 1}
                      </span>
                      <span className="text-neutral-700 text-lg leading-relaxed font-medium pt-1.5">{contribution}</span>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Swami Selector Cards */}
              <section>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-px bg-amber-400" />
                  <h2 className="font-serif text-2xl md:text-3xl text-amber-900 font-bold">{t("parampara.title")}</h2>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                  {peethadhipathis.map((swami, idx) => (
                    <button
                      key={swami.id}
                      onClick={() => {
                        setActiveSwamiIndex(idx)
                        setCurrentImageIndex(0)
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                      }}
                      className={`group relative overflow-hidden rounded-xl transition-all duration-300 ${idx === activeSwamiIndex
                        ? "ring-4 ring-amber-400 ring-offset-2"
                        : "hover:ring-2 hover:ring-amber-200"
                        }`}
                    >
                      <div className="aspect-[3/4] relative">
                        <Image
                          src={swami.image}
                          alt={swami.name}
                          fill
                          className={`object-cover ${swami.imagePosition} transition-transform duration-500 group-hover:scale-110`}
                        />
                        <div className={`absolute inset-0 transition-colors duration-300 ${idx === activeSwamiIndex
                          ? "bg-amber-600/20"
                          : "bg-black/30 group-hover:bg-black/10"
                          }`} />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                        <p className="text-white text-xs md:text-sm font-semibold leading-tight line-clamp-2">
                          {swami.name}
                        </p>
                      </div>
                      {idx === activeSwamiIndex && (
                        <div className="absolute top-2 right-2 w-3 h-3 bg-amber-400 rounded-full animate-pulse" />
                      )}
                    </button>
                  ))}
                </div>
              </section>
            </FadeUp>

            {/* Back to Parampara */}
            <div className="mt-16 text-center">
              <Link
                href="/parampara"
                className="inline-flex items-center gap-3 text-amber-800 hover:text-amber-600 font-medium text-lg transition-colors group"
              >
                <div className="w-10 h-10 rounded-full border-2 border-amber-200 flex items-center justify-center group-hover:border-amber-500 group-hover:bg-amber-50 transition-all">
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
                </div>
                {t("gallery.back")}
              </Link>
            </div>
          </div>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
              onClick={closeLightbox}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all z-10"
                aria-label="Close lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation */}
              {activeSwami.gallery.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); prevLightboxImage(); }}
                    className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-amber-500 text-white rounded-full transition-all z-10"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); nextLightboxImage(); }}
                    className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-amber-500 text-white rounded-full transition-all z-10"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </button>
                </>
              )}

              {/* Image */}
              <motion.div
                key={lightboxImageIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full max-w-5xl max-h-[85vh] mx-4"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={activeSwami.gallery[lightboxImageIndex]}
                  alt={`${activeSwami.name} - Full size`}
                  fill
                  className="object-contain"
                />
              </motion.div>

              {/* Image Counter */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">
                {lightboxImageIndex + 1} / {activeSwami.gallery.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <SiteFooter />
    </>
  )
}
