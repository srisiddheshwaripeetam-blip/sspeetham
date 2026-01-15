import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FadeUp } from "@/components/animate-on-scroll"

export default function VisitPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 pt-24 md:pt-28 pb-8">
        {/* Hero */}
        <FadeUp>
          <section className="grid gap-4 md:grid-cols-2 md:items-center">
            <div className="overflow-hidden rounded-xl border">
              {/* Using a descriptive placeholder; can be swapped with a site image later */}
              <Image
                src="/courtallam-temple-gopuram-and-peetham-campus.png"
                alt="Courtallam temple gopuram near Sri Siddheswari Peetham"
                width={900}
                height={560}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div className="md:pl-6">
              <h1 className="font-serif text-3xl md:text-4xl text-balance">Visit Courtallam</h1>
              <p className="mt-3 text-neutral-700 text-pretty">
                Sri Siddheswari Peetham is located in Courtallam, Tamil Nadu, famed for its waterfalls and serene hills.
                Plan your trip using the essentials below.
              </p>
              <ul className="mt-4 space-y-2 text-neutral-700">
                <li>• Best season: Southwest monsoon (June–September)</li>
                <li>• Air: Nearest airports are Madurai and Trivandrum</li>
                <li>• Rail: Sengottai, Tenkasi, Tirunelveli</li>
                <li>• Road: Connected by national highways and frequent buses</li>
              </ul>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  className="inline-flex"
                  href="https://maps.app.goo.gl/jn4UqAgf1wSLwKyw6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-amber-600 hover:bg-amber-700">Get Directions</Button>
                </a>
                <a className="inline-flex" href="/events">
                  <Button variant="outline">View Timings & Events</Button>
                </a>
              </div>
            </div>
          </section>
        </FadeUp>

        {/* Info Cards */}
        <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <FadeUp>
            <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-32 w-full overflow-hidden border-b">
                <Image
                  src="/images/how-to-reach.jpg"
                  alt="How to reach Sri Siddheswari Peetham in Courtallam"
                  width={400}
                  height={200}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">How to Reach</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-neutral-700">
                Frequent buses from Tenkasi/Tirunelveli. Taxis available from nearby railheads. Roads remain motorable
                during monsoon. Check local advisories.
                <div className="mt-3">
                  <a href="https://maps.app.goo.gl/jn4UqAgf1wSLwKyw6" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline underline-offset-4 hover:text-amber-800">
                    See Map
                  </a>
                </div>
              </CardContent>
            </Card>
          </FadeUp>

          <FadeUp delay={80}>
            <Card className="h-full overflow-hidden">
              <div className="h-32 w-full overflow-hidden border-b">
                <Image
                  src="/temple-timings-and-pooja-schedule.png"
                  alt="Temple timings and pooja schedule"
                  width={400}
                  height={200}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Temple Timings</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-neutral-700">
                Morning and evening poojas on most days; special homams on selected tithis. See the latest in Events.
                <div className="mt-3">
                  <a href="/events" className="text-amber-700 underline underline-offset-4 hover:text-amber-800">
                    See Calendar
                  </a>
                </div>
              </CardContent>
            </Card>
          </FadeUp>

          <FadeUp delay={120}>
            <Card className="h-full overflow-hidden">
              <div className="h-32 w-full overflow-hidden border-b">
                <Image
                  src="/temple-etiquette-and-dress-code.png"
                  alt="Temple etiquette and dress code"
                  width={400}
                  height={200}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Etiquette</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-neutral-700">
                Traditional attire preferred. Maintain silence inside sanctum. Photography may be restricted near
                deities. Follow volunteer guidance.
              </CardContent>
            </Card>
          </FadeUp>

          <FadeUp delay={160}>
            <Card className="h-full overflow-hidden">
              <div className="h-32 w-full overflow-hidden border-b">
                <Image
                  src="/nearby-courtallam-waterfalls-and-sites.png"
                  alt="Nearby places around Courtallam waterfalls"
                  width={400}
                  height={200}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Nearby</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-neutral-700">
                Explore the famed Courtallam waterfalls, Kutralanathar Temple, and serene hill trails. Ideal for a
                weekend pilgrimage retreat.
              </CardContent>
            </Card>
          </FadeUp>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
