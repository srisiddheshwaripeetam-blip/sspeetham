"use client"

import Image from "next/image"
import { FadeUp } from "@/components/animate-on-scroll"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { Instagram, Facebook, Youtube, Phone, Mail, MessageCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <>
      {/* Add header */}
      <SiteHeader />

      <main className="mx-auto max-w-4xl px-4 pt-24 pb-12">
        <FadeUp>
          <h1 className="font-serif text-3xl md:text-4xl">Contact Us</h1>
        </FadeUp>

        <section className="mt-8 grid gap-10 md:grid-cols-2">
          {/* Form */}
          <FadeUp>
            <form
              className="grid gap-4 rounded-xl border bg-white/50 backdrop-blur-sm p-6 shadow-sm"
              onSubmit={(e) => {
                e.preventDefault()
                alert("Thanks! We will respond shortly.")
              }}
            >
              <label className="block">
                <span className="block text-sm text-neutral-700">Name</span>
                <input
                  name="name"
                  required
                  placeholder="Your full name"
                  className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm"
                />
              </label>
              <label className="block">
                <span className="block text-sm text-neutral-700">Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm"
                />
              </label>
              <label className="block">
                <span className="block text-sm text-neutral-700">Message</span>
                <textarea
                  rows={5}
                  name="message"
                  placeholder="How can we help?"
                  className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm"
                />
              </label>
              <Button
                type="submit"
                className="mt-2 w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white"
              >
                Send Message
              </Button>
            </form>
          </FadeUp>

          {/* Info + Map */}
          <FadeUp delay={80}>
            <aside className="space-y-6">
              <Card className="overflow-hidden shadow-sm">
                <div className="relative aspect-video w-full">
                  <Image
                    src="/courtallam-temple-gopuram-and-peetham-campus.png"
                    alt="Sri Siddheswari Peetham campus"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-5">
                  <h2 className="text-xl font-bold text-amber-900">Temple Office</h2>
                  <p className="mt-2 text-sm text-neutral-700 leading-relaxed">
                    Sri Siddheswari Peetham, Courtallam, Tenkasi District, Tamil Nadu 627802, India
                  </p>

                  <div className="mt-4 space-y-3">
                    <p className="text-sm text-neutral-700 flex items-center gap-3">
                      <Mail size={18} className="text-amber-600" />
                      <span className="break-all">feedback@srisiddheshwaripeetham.com</span>
                    </p>
                    <p className="text-sm text-neutral-700 flex items-center gap-3">
                      <Phone size={18} className="text-amber-600" />
                      <span>+91 9443184738</span>
                    </p>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-sm font-semibold text-amber-900 mb-3">Connect With Us</h3>
                    <div className="flex gap-4">
                      <a
                        href="https://www.instagram.com/sri_siddheshwari_peetam?igsh=MXVyMjZrM2M5YTIzaQ=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-600 hover:text-amber-700 transition-transform hover:scale-110"
                        aria-label="Instagram"
                      >
                        <Instagram size={28} />
                      </a>
                      <a
                        href="https://www.facebook.com/share/1ADsPJTnUL/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-600 hover:text-amber-700 transition-transform hover:scale-110"
                        aria-label="Facebook"
                      >
                        <Facebook size={28} />
                      </a>
                      <a
                        href="https://www.youtube.com/@SriSiddeswaripeetham"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-600 hover:text-amber-700 transition-transform hover:scale-110"
                        aria-label="YouTube"
                      >
                        <Youtube size={28} />
                      </a>
                      <a
                        href="https://chat.whatsapp.com/CjrsFyJSZMHGIUG2ICwfLt?mode=ac_t"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-600 hover:text-amber-700 transition-transform hover:scale-110"
                        aria-label="WhatsApp Group"
                      >
                        <MessageCircle size={28} />
                      </a>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href="https://maps.google.com/?q=Sri+Siddheswari+Peetham+Courtallam"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Open in Maps
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href="/visit">Plan your visit</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden shadow-sm">
                <div className="relative aspect-video w-full">
                  <Image
                    src="/temple-timings-and-pooja-schedule.png"
                    alt="Temple timings and pooja schedule"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-5">
                  <h3 className="text-lg font-bold text-amber-900">Visiting Hours</h3>
                  <p className="mt-2 text-sm text-neutral-700 leading-relaxed">
                    Morning and evening darshan on most days. Timings may vary during festivals.
                  </p>
                </CardContent>
              </Card>
            </aside>
          </FadeUp>
        </section>
      </main>

      {/* Add footer */}
      <SiteFooter />
    </>
  )
}
