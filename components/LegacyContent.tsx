'use client'

import { motion } from 'framer-motion'
import { Globe, Users, Zap, TrendingUp, Building2, Heart } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const legacyPillars = [
  {
    icon: Globe,
    title: 'Indigenous Ownership',
    description:
      'Building African-owned, African-led enterprises that compete globally. Demonstrating that African entrepreneurs can create world-class companies without external capital or ownership.',
  },
  {
    icon: Zap,
    title: 'Telecommunications Pioneer',
    description:
      'Transforming African connectivity through Globacom. Bringing advanced telecommunications infrastructure, innovation, and digital inclusion to the continent.',
  },
  {
    icon: TrendingUp,
    title: 'Continental Leadership',
    description:
      'Creating employment opportunities for thousands across Africa. Contributing significantly to African economic development, foreign exchange generation, and continental integration.',
  },
  {
    icon: Building2,
    title: 'Long-Term Vision',
    description:
      'Building sustainable, disciplined enterprises focused on enduring value creation. Demonstrating patient capital and strategic thinking in African business practice.',
  },
  {
    icon: Users,
    title: 'Family & Succession',
    description:
      'Involving next-generation leadership to ensure continuity. Daughter Bella Disu serves as Globacom Executive Vice Chairman, carrying forward the vision and values.',
  },
  {
    icon: Heart,
    title: 'African Prosperity',
    description:
      'Every venture guided by commitment to African advancement. Success measured not just in profit, but in continent-wide positive impact and sustainable growth.',
  },
]

export default function LegacyContent() {
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
              Vision & Impact
            </p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6 text-balance">
              Legacy & Impact
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Mike Adenuga's contributions to African business, infrastructure development, and entrepreneurship have created lasting value across the continent. His work demonstrates what African-led, disciplined capitalism can achieve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Legacy Pillars */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {legacyPillars.map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="p-8 rounded-xl bg-card border border-border hover:border-accent/50 transition-colors duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-primary mb-3">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card to-background">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-8 text-balance">
              A Continental Vision
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Mike Adenuga's journey represents a fundamental principle: African entrepreneurs can build world-class enterprises through discipline, long-term thinking, and strategic vision. His businesses operate across telecommunications, energy, and finance—creating value not just for shareholders, but for employees, communities, and the continent.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              His legacy is not measured in personal wealth alone, but in the infrastructure built, the careers launched, the connectivity enabled, and the proof that Africa can lead its own economic future.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
