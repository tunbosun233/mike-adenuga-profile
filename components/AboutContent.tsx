'use client'

import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Timeline from '@/components/Timeline'

export default function AboutContent() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6 text-balance">
                About Mike Adenuga
              </h1>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Mike Adenuga represents the pinnacle of African entrepreneurship. From his early ventures in
                petroleum trading to founding Globacom, one of Africa's largest telecommunications companies, his
                trajectory demonstrates the power of vision, persistence, and excellence.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With business interests spanning telecommunications, energy, hospitality, and real estate, Mike
                Adenuga has created wealth not just for himself, but for thousands of employees and their families
                across the continent. His leadership philosophy emphasizes innovation, quality, and a deep
                commitment to African advancement.
              </p>
            </div>

            {/* Image */}
            <div className="relative h-96 md:h-full rounded-2xl overflow-hidden shadow-2xl">
              {/* Replace with Mike Adenuga photo */}
              <Image
                src="mike.webp"
                alt="Mike Adenuga"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Biography Highlights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card to-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl border border-border bg-card">
              <h3 className="font-serif text-2xl font-bold text-primary mb-4">Birth & Origins</h3>
              <p className="text-muted-foreground leading-relaxed">
                Born 29 April 1953 in Ibadan, Oyo State, Nigeria. Educated at Ibadan Grammar School before pursuing higher education at Northwestern Oklahoma State University and earning an MBA from Pace University, New York.
              </p>
            </div>

            <div className="p-8 rounded-xl border border-border bg-card">
              <h3 className="font-serif text-2xl font-bold text-primary mb-4">Early Ventures</h3>
              <p className="text-muted-foreground leading-relaxed">
                Built initial wealth through lace trading and soft drink distribution. These early entrepreneurial successes provided the capital, experience, and platform for larger ambitions in telecommunications and energy sectors.
              </p>
            </div>

            <div className="p-8 rounded-xl border border-border bg-card">
              <h3 className="font-serif text-2xl font-bold text-primary mb-4">Character</h3>
              <p className="text-muted-foreground leading-relaxed">
                Known for discipline, privacy, and a long-term focused approach. His decision-making emphasizes sustainable growth over short-term gains, reflecting a measured and strategic entrepreneurial philosophy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <Timeline />

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-4">Core Principles</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary text-balance">
              Philosophy of Excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl border-2 border-accent/30 hover:border-accent transition-colors">
              <h3 className="font-serif text-2xl font-bold text-primary mb-4">Innovation First</h3>
              <p className="text-muted-foreground leading-relaxed">
                Mike Adenuga believes that continuous innovation is essential for staying ahead. Whether in
                telecommunications or other ventures, embracing new technologies and methodologies is non-negotiable.
              </p>
            </div>

            <div className="p-8 rounded-xl border-2 border-accent/30 hover:border-accent transition-colors">
              <h3 className="font-serif text-2xl font-bold text-primary mb-4">African Pride</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every business decision is guided by a commitment to African prosperity. Creating African brands
                that compete globally, employing African talent, and solving African challenges drive his vision.
              </p>
            </div>

            <div className="p-8 rounded-xl border-2 border-accent/30 hover:border-accent transition-colors">
              <h3 className="font-serif text-2xl font-bold text-primary mb-4">Quality & Excellence</h3>
              <p className="text-muted-foreground leading-relaxed">
                Mediocrity is not an option. Mike Adenuga demands excellence in all endeavors, from service
                delivery to employee development, ensuring that his enterprises set industry standards.
              </p>
            </div>

            <div className="p-8 rounded-xl border-2 border-accent/30 hover:border-accent transition-colors">
              <h3 className="font-serif text-2xl font-bold text-primary mb-4">Social Responsibility</h3>
              <p className="text-muted-foreground leading-relaxed">
                Success comes with responsibility. Through various philanthropic initiatives, Mike Adenuga gives
                back to communities, supporting education, healthcare, and economic development programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
