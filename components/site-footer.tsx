"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { Instagram, Facebook, Youtube, MessageCircle, ChevronRight } from "lucide-react"
import { FourSquares } from "@/components/icons/four-squares"

export default function SiteFooter() {
  const { t } = useLanguage()

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-amber-950 via-orange-900 to-amber-950 text-amber-50 mt-20">
      <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-amber-700 via-yellow-500 to-amber-700" />
      <div className="absolute top-3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
      <div className="absolute top-4 left-0 right-0 h-px">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, transparent 0px, transparent 20px, #d97706 20px, #d97706 25px, transparent 25px, transparent 45px)",
          }}
        />
      </div>

      <div className="absolute top-6 left-6 text-amber-600/30">
        <FourSquares className="w-8 h-8 rotate-90" />
      </div>
      <div className="absolute top-6 right-6 text-amber-600/30">
        <FourSquares className="w-8 h-8 rotate-90" />
      </div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-amber-500/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-amber-500/15 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-amber-500/10 rounded-full" />
      </div>

      <div className="relative container mx-auto px-4 py-16">
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-500" />
            <div className="flex items-center gap-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-amber-500/70"
                  style={{ animationDelay: `${i * 200}ms` }}
                />
              ))}
            </div>
            <div className="w-14 h-14 rounded-full border-2 border-amber-500 bg-amber-900/50 flex items-center justify-center shadow-lg shadow-amber-500/20">
              <span className="text-amber-400 font-bold text-2xl">ॐ</span>
            </div>
            <div className="flex items-center gap-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-amber-500/70"
                  style={{ animationDelay: `${(i + 3) * 200}ms` }}
                />
              ))}
            </div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-500" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="relative p-6 border border-amber-700/50 rounded-lg bg-amber-900/20">
            <h3 className="font-serif font-bold text-lg text-amber-300 mb-4 border-b border-amber-800/50 pb-2 inline-block">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-amber-100 hover:text-amber-300 transition-all duration-300 hover:translate-x-2 inline-flex items-center gap-2 group"
                >
                  <span className="text-amber-500 group-hover:text-amber-300 transition-colors"><ChevronRight className="w-4 h-4" /></span>
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/deities"
                  className="text-amber-100 hover:text-amber-300 transition-all duration-300 hover:translate-x-2 inline-flex items-center gap-2 group"
                >
                  <span className="text-amber-500 group-hover:text-amber-300 transition-colors"><ChevronRight className="w-4 h-4" /></span>
                  {t("nav.deities")}
                </Link>
              </li>
              <li>
                <Link
                  href="/visit"
                  className="text-amber-100 hover:text-amber-300 transition-all duration-300 hover:translate-x-2 inline-flex items-center gap-2 group"
                >
                  <span className="text-amber-500 group-hover:text-amber-300 transition-colors"><ChevronRight className="w-4 h-4" /></span>
                  {t("nav.visit")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="relative p-6 border border-amber-700/50 rounded-lg bg-amber-900/20">
            <h3 className="font-serif font-bold text-lg text-amber-300 mb-4 border-b border-amber-800/50 pb-2 inline-block">
              {t("footer.contact")}
            </h3>
            <ul className="space-y-3 text-sm text-amber-100 leading-relaxed">
              <li className="font-semibold text-amber-200 flex items-center gap-2">
                <span className="text-amber-500"><FourSquares className="w-4 h-4" /></span>
                Sri Siddheswari Peetham
              </li>
              <li className="pl-5">Courtallam, Tamil Nadu, India</li>
              <li className="pl-5">
                Phone:{" "}
                <a
                  href="tel:+919443184738"
                  className="hover:text-amber-300 transition-colors underline-offset-2 hover:underline"
                >
                  +91 9443184738
                </a>
              </li>
              <li className="pl-5">
                Email:{" "}
                <a
                  href="mailto:feedback@srisiddheshwaripeetham.com"
                  className="hover:text-amber-300 transition-colors underline-offset-2 hover:underline"
                >
                  feedback@srisiddheshwaripeetham.com
                </a>
              </li>
            </ul>
          </div>

          <div className="relative p-6 border border-amber-700/50 rounded-lg bg-amber-900/20">
            <h3 className="font-serif font-bold text-lg text-amber-300 mb-4 border-b border-amber-800/50 pb-2 inline-block">
              Connect With Us
            </h3>
            <div className="flex gap-3 mb-6 mt-2">
              <a
                href="https://www.instagram.com/sri_siddheshwari_peetam?igsh=MXVyMjZrM2M5YTIzaQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-gradient-to-br from-amber-800 to-amber-900 border-2 border-amber-600 flex items-center justify-center text-amber-100 hover:from-amber-700 hover:to-amber-800 hover:scale-110 hover:shadow-lg hover:shadow-amber-500/40 hover:border-amber-400 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/share/1ADsPJTnUL/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-gradient-to-br from-amber-800 to-amber-900 border-2 border-amber-600 flex items-center justify-center text-amber-100 hover:from-amber-700 hover:to-amber-800 hover:scale-110 hover:shadow-lg hover:shadow-amber-500/40 hover:border-amber-400 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.youtube.com/@SriSiddeswaripeetham"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-gradient-to-br from-amber-800 to-amber-900 border-2 border-amber-600 flex items-center justify-center text-amber-100 hover:from-amber-700 hover:to-amber-800 hover:scale-110 hover:shadow-lg hover:shadow-amber-500/40 hover:border-amber-400 transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
              <a
                href="https://chat.whatsapp.com/CjrsFyJSZMHGIUG2ICwfLt?mode=ac_t"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-gradient-to-br from-amber-800 to-amber-900 border-2 border-amber-600 flex items-center justify-center text-amber-100 hover:from-amber-700 hover:to-amber-800 hover:scale-110 hover:shadow-lg hover:shadow-amber-500/40 hover:border-amber-400 transition-all duration-300"
                aria-label="WhatsApp Group"
              >
                <MessageCircle size={18} />
              </a>
            </div>
            <p className="text-sm text-amber-200/80 leading-relaxed">
              Follow us for updates, events, and spiritual guidance.
            </p>
          </div>
        </div>

        <div className="relative mt-12 pt-8">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center gap-4">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-amber-600" />
            <span className="text-amber-500"><FourSquares className="w-6 h-6" /></span>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-amber-600" />
          </div>

          <div className="flex flex-col items-center gap-4 pt-4">
            <p className="text-center text-sm text-amber-200/90">
              {t("footer.copyright")}
            </p>
            <p className="text-center text-sm text-amber-300/80">
              Powered by{" "}
              <a
                href="https://techvedyaa.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-200 hover:text-white font-semibold hover:underline underline-offset-2 transition-colors"
              >
                TechVedyaa
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-6 text-amber-600/30">
        <FourSquares className="w-8 h-8" />
      </div>
      <div className="absolute bottom-4 right-6 text-amber-600/30">
        <FourSquares className="w-8 h-8" />
      </div>
    </footer>
  )
}
