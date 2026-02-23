'use client'

import { motion } from 'framer-motion'
import { Trophy, Globe, Zap, Users } from 'lucide-react'

const achievements = [
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Built one of Africa\'s largest telecommunications networks with presence across the continent.',
  },
  {
    icon: Zap,
    title: 'Industry Pioneer',
    description: 'Pioneered the telecom revolution in Nigeria, transforming connectivity for millions.',
  },
  {
    icon: Users,
    title: 'Economic Leadership',
    description: 'Created employment opportunities for over 100,000 people across multiple continents.',
  },
  {
    icon: Trophy,
    title: 'Awards & Recognition',
    description: 'Recipient of numerous international awards for business excellence and social impact.',
  },
]

export default function Achievements() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-4">
            Legacy of Excellence
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">
            Transforming Africa's Economic Landscape
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Through strategic vision and unwavering commitment, Mike Adenuga has built institutions that
            continue to shape industries and improve lives across the continent.
          </p>
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={index}
                className="p-8 rounded-xl border border-border bg-card hover:border-accent/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ translateY: -5 }}
              >
                <motion.div
                  className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </motion.div>
                <h3 className="font-serif text-xl font-bold text-primary mb-3">{achievement.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Highlight stat */}
        <motion.div
          className="mt-16 p-12 rounded-xl border border-border bg-gradient-to-r from-accent/10 to-secondary/10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <p className="text-sm text-accent uppercase font-semibold tracking-widest mb-2">Industry Leading</p>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-primary">
              From Concept to Continent-Spanning Enterprise
            </h3>
            <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
              What began as a bold vision has evolved into a global force, with operations spanning
              telecommunications, energy, hospitality, and diverse investments across emerging markets.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
