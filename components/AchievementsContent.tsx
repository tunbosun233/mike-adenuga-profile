'use client'

import { motion } from 'framer-motion'
import { Trophy, Globe, Award, Users } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const honors = [
  {
    award: 'Grand Commander of the Order of the Niger (GCON)',
    year: '2004',
    description: 'Nigeria\'s highest civilian honor, bestowed for distinguished service and significant contributions to national development and African entrepreneurship.',
    icon: Trophy,
  },
  {
    award: 'Commander of the Legion of Honour (France)',
    year: '2007',
    description: 'Recognition from the French government for entrepreneurial excellence, international business leadership, and contributions to African-European relations.',
    icon: Globe,
  },
  {
    award: 'Africa\'s Leading Billionaire Entrepreneur',
    year: '2026',
    description: 'Recognized as one of Africa\'s most successful and influential billionaires, with documented impact on telecommunications, energy, and continental economic development.',
    icon: Award,
  },
]

const legacyPoints = [
  {
    title: 'Indigenous Ownership',
    description: 'Building African-owned, African-led enterprises that compete globally. Demonstrating that African entrepreneurs can create world-class companies.',
  },
  {
    title: 'Telecommunications Pioneer',
    description: 'Transforming African connectivity through Globacom. Bringing advanced telecommunications infrastructure and innovation to the continent.',
  },
  {
    title: 'Continental Leadership',
    description: 'Creating employment for thousands across Africa. Contributing significantly to African economic development and continental integration.',
  },
  {
    title: 'Long-Term Vision',
    description: 'Building sustainable, disciplined enterprises focused on enduring value creation. Demonstrating patient capital and strategic thinking in African business.',
  },
  {
    title: 'Family Involvement',
    description: 'Involving next-generation leadership, including daughter Bella Disu as Globacom Executive Vice Chairman, ensuring continuity of vision.',
  },
  {
    title: 'African Prosperity',
    description: 'Every venture guided by commitment to African advancement. Success measured not just in profit, but in continent-wide positive impact.',
  },
]

export default function AchievementsContent() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-4">
              Recognition & Legacy
            </p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6 text-balance">
              Honors & Continental Impact
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Mike Adenuga's contributions to African business, infrastructure development, and entrepreneurship have earned international recognition and lasting impact across the continent.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Honors */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card to-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-4">
              Honors
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary text-balance">
              Awards & Recognition
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {honors.map((honor, index) => {
              const Icon = honor.icon
              return (
                <motion.div
                  key={index}
                  className="p-8 rounded-xl border border-border bg-card hover:border-accent transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ translateY: -5 }}
                >
                  <Icon className="w-12 h-12 text-accent mb-4" />
                  <h3 className="font-serif text-xl font-bold text-primary mb-2">{honor.award}</h3>
                  <p className="text-sm text-accent font-semibold mb-3">{honor.year}</p>
                  <p className="text-muted-foreground leading-relaxed text-sm">{honor.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Business Legacy */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-4">
              Business Legacy
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary text-balance">
              Impact on Africa
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {legacyPoints.map((point, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-xl border-2 border-accent/30 hover:border-accent transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <h3 className="font-serif text-xl font-bold text-primary mb-3">{point.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-4">
              Measurable Impact
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary text-balance">
              Continental Reach
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              className="p-8 rounded-xl border border-border bg-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-5xl font-bold text-accent mb-2">100K+</p>
              <p className="text-muted-foreground">Direct and indirect employees across Africa</p>
            </motion.div>

            <motion.div
              className="p-8 rounded-xl border border-border bg-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-5xl font-bold text-accent mb-2">50+</p>
              <p className="text-muted-foreground">Years of entrepreneurial experience and innovation</p>
            </motion.div>

            <motion.div
              className="p-8 rounded-xl border border-border bg-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-5xl font-bold text-accent mb-2">$10B+</p>
              <p className="text-muted-foreground">Combined enterprise value created</p>
            </motion.div>

            <motion.div
              className="p-8 rounded-xl border border-border bg-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="text-5xl font-bold text-accent mb-2">2nd</p>
              <p className="text-muted-foreground">Richest person in Nigeria as of 2026</p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
