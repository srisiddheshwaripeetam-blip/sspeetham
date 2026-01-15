"use client"

import Image from "next/image"
import { FadeUp } from "@/components/animate-on-scroll"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { Flame, Flower, BookOpen, Music } from "lucide-react"

import { useLanguage } from "@/lib/language-context"

export default function DonatePage() {
  const { t } = useLanguage()
  return (
    <>
      {/* Add header */}
      <SiteHeader />

      <main className="mx-auto max-w-4xl px-4 py-8 pt-24">
        {/* Hero Section */}
        <FadeUp>
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl text-amber-900 mb-4">{t('donate.title')}</h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              {t('donate.description')}
            </p>
          </div>
        </FadeUp>

        {/* Donation Categories */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <FadeUp delay={100}>
            <div className="bg-white rounded-xl shadow-lg border border-amber-100 overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <Image
                  src="/annadanam-seva-peetham.jpg"
                  alt="Annadanam Seva at Sri Siddheswari Peetham"
                  width={400}
                  height={200}
                  className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-amber-900 mb-3 group-hover:text-amber-700 transition-colors">
                  {t('donate.annadanam.title')}
                </h3>
                <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
                  {t('donate.annadanam.desc')}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-amber-800">₹501 - ₹5,001</span>
                  <button className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 hover:scale-105 transition-all duration-200 text-sm font-medium">
                    Donate Now
                  </button>
                </div>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={200}>
            <div className="bg-white rounded-xl shadow-lg border border-amber-100 overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <Image
                  src="/go-seva-cow-protection.png"
                  alt="Go Seva - Cow Protection Program"
                  width={400}
                  height={200}
                  className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-amber-900 mb-3 group-hover:text-amber-700 transition-colors">
                  {t('donate.goseva.title')}
                </h3>
                <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
                  {t('donate.goseva.desc')}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-amber-800">₹1,001 - ₹10,001</span>
                  <button className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 hover:scale-105 transition-all duration-200 text-sm font-medium">
                    Donate Now
                  </button>
                </div>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={300}>
            <div className="bg-white rounded-xl shadow-lg border border-amber-100 overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <Image
                  src="/images/temple-maintenance.jpg"
                  alt="Temple Maintenance and Upkeep"
                  width={400}
                  height={200}
                  className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-amber-900 mb-3 group-hover:text-amber-700 transition-colors">
                  {t('donate.maintenance.title')}
                </h3>
                <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
                  {t('donate.maintenance.desc')}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-amber-800">₹2,001 - ₹25,001</span>
                  <button className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 hover:scale-105 transition-all duration-200 text-sm font-medium">
                    Donate Now
                  </button>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Special Donation Programs */}
        <FadeUp delay={400}>
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 mb-12 border border-amber-200">
            <h2 className="font-serif text-3xl text-amber-900 text-center mb-8">Special Donation Programs</h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center group-hover:bg-amber-300 transition-colors">
                    <span className="text-2xl text-amber-700"><Flame className="w-6 h-6" /></span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-amber-900 mb-2">Daily Deepam Sponsorship</h3>
                    <p className="text-sm text-neutral-600 mb-3">
                      Sponsor the sacred oil lamps that illuminate the temple throughout the day.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-amber-800">₹365/month</span>
                      <button className="text-sm text-amber-700 hover:text-amber-800 font-medium hover:scale-105 transition-all">
                        Subscribe →
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center group-hover:bg-amber-300 transition-colors">
                    <span className="text-2xl text-amber-700"><Flower className="w-6 h-6" /></span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-amber-900 mb-2">Flower Decoration Fund</h3>
                    <p className="text-sm text-neutral-600 mb-3">
                      Support the beautiful floral decorations for daily pujas and special festivals.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-amber-800">₹501/month</span>
                      <button className="text-sm text-amber-700 hover:text-amber-800 font-medium hover:scale-105 transition-all">
                        Subscribe →
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center group-hover:bg-amber-300 transition-colors">
                    <span className="text-2xl text-amber-700"><BookOpen className="w-6 h-6" /></span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-amber-900 mb-2">Vedic Education Support</h3>
                    <p className="text-sm text-neutral-600 mb-3">
                      Help preserve and teach ancient Vedic knowledge to future generations.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-amber-800">₹1,001/month</span>
                      <button className="text-sm text-amber-700 hover:text-amber-800 font-medium hover:scale-105 transition-all">
                        Subscribe →
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center group-hover:bg-amber-300 transition-colors">
                    <span className="text-2xl text-amber-700"><Music className="w-6 h-6" /></span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-amber-900 mb-2">Bhajan & Satsang Fund</h3>
                    <p className="text-sm text-neutral-600 mb-3">
                      Support regular spiritual gatherings, bhajans, and devotional programs.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-amber-800">₹751/month</span>
                      <button className="text-sm text-amber-700 hover:text-amber-800 font-medium hover:scale-105 transition-all">
                        Subscribe →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Donation Form */}
        <FadeUp delay={500}>
          <div className="bg-white rounded-2xl shadow-lg border border-neutral-200 p-8">
            <h2 className="font-serif text-3xl text-amber-900 text-center mb-8">Make a Donation</h2>

            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault()
                alert("Thank you for your generous donation! You will be redirected to the payment gateway.")
              }}
            >
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Donation Type</label>
                  <select className="w-full rounded-lg border border-neutral-300 px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all">
                    <option>Annadanam</option>
                    <option>Go Seva</option>
                    <option>Temple Maintenance</option>
                    <option>General Donation</option>
                    <option>Special Programs</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Amount (₹)</label>
                  <input
                    type="number"
                    placeholder="Enter amount"
                    className="w-full rounded-lg border border-neutral-300 px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full rounded-lg border border-neutral-300 px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full rounded-lg border border-neutral-300 px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full rounded-lg border border-neutral-300 px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Special Message (Optional)</label>
                <textarea
                  rows={4}
                  placeholder="Any special prayers or dedications..."
                  className="w-full rounded-lg border border-neutral-300 px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all resize-none"
                ></textarea>
              </div>

              <div className="flex items-center gap-3">
                <input type="checkbox" id="receipt" className="w-4 h-4 text-amber-600 rounded focus:ring-amber-500" />
                <label htmlFor="receipt" className="text-sm text-neutral-600">
                  I would like to receive a donation receipt for tax purposes
                </label>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-amber-700 hover:to-orange-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Proceed to Payment
                </button>
              </div>
            </form>
          </div>
        </FadeUp>

        {/* Trust Information */}
        <FadeUp delay={600}>
          <div className="mt-12 text-center bg-neutral-50 rounded-xl p-8">
            <h3 className="font-semibold text-neutral-900 mb-4">Tax Benefits & Transparency</h3>
            <div className="grid gap-4 md:grid-cols-3 text-sm text-neutral-600">
              <div>
                <p className="font-medium text-neutral-800 mb-1">80G Tax Benefits</p>
                <p>All donations are eligible for tax deduction under Section 80G of the Income Tax Act.</p>
              </div>
              <div>
                <p className="font-medium text-neutral-800 mb-1">Transparent Usage</p>
                <p>Regular updates on how your donations are utilized for temple activities and seva programs.</p>
              </div>
              <div>
                <p className="font-medium text-neutral-800 mb-1">Secure Payments</p>
                <p>All transactions are processed through secure, encrypted payment gateways for your safety.</p>
              </div>
            </div>
          </div>
        </FadeUp>
      </main>

      {/* Add footer */}
      <SiteFooter />
    </>
  )
}
