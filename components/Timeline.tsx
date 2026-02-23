'use client'

import { motion } from 'framer-motion'

const milestones = [
  {
    year: '1953',
    title: 'Early Foundation',
    description: 'Born into a merchant family, Mike Adenuga learns the values of enterprise and perseverance.',
  },
  {
    year: '1970s',
    title: 'Business Ventures Begin',
    description: 'Enters the petroleum business, establishing trading operations across West Africa.',
  },
  {
    year: '1989',
    title: 'Conoil Petroleum Founded',
    description: 'Establishes Conoil, beginning a transformative journey in the energy sector.',
  },
  {
    year: '2001',
    title: 'Globacom Revolution',
    description: 'Launches Globacom, bringing revolutionary mobile telecommunications to Nigeria and Africa.',
  },
  {
    year: '2005',
    title: 'Continental Expansion',
    description: 'Expands Globacom to 13 African countries, becoming a continental telecommunications force.',
  },
  {
    year: '2010s',
    title: 'Diversification',
    description: 'Expands investments into hospitality, real estate, and international ventures.',
  },
  {
    year: '2020s',
    title: 'Legacy Building',
    description: 'Strengthens philanthropic initiatives and mentors the next generation of African entrepreneurs.',
  },
  {
    year: 'Present',
    title: 'Continued Excellence',
    description: 'Maintains leadership across multiple sectors while championing African economic advancement.',
  },
]

export default function Timeline() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-4">
            Career Milestones
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary text-balance">
            A Journey of Vision & Achievement
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              className="relative flex gap-8"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Timeline line and dot */}
              <div className="hidden md:flex flex-col items-center">
                <motion.div
                  className="w-4 h-4 rounded-full bg-accent border-4 border-background ring-2 ring-accent"
                  whileHover={{ scale: 1.3 }}
                />
                {index !== milestones.length - 1 && (
                  <div className="w-1 h-24 bg-gradient-to-b from-accent to-accent/20 mt-4" />
                )}
              </div>

              {/* Content */}
              <div className="pt-1 pb-8">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-3">
                  <span className="text-xl font-bold text-accent font-serif">{milestone.year}</span>
                  <h3 className="text-2xl font-bold text-primary">{milestone.title}</h3>
                </div>
                <p className="text-muted-foreground max-w-2xl">{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
