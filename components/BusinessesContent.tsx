'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const businesses = [
  {
    name: 'Globacom Ltd',
    category: 'Telecommunications',
    description:
      "Founded in 2003, Globacom emerged as Nigeria's second-largest telecommunications operator. Operating in Nigeria and West Africa, Globacom owns the Glo-1 submarine cable and provides innovative mobile and data services to millions of customers.",
    image: '/glo_button.png', // Added leading slash
    highlights: ['Founded 2003', 'Glo-1 submarine cable', 'Nigeria & West Africa', 'Second-largest telecom'],
  },
  {
    name: 'Conoil Petroleum',
    category: 'Energy & Oil',
    description:
      'An integrated Nigerian oil and gas company with operations in the Niger Delta. Conoil operates oil blocks and engages in exploration, production, distribution, and retail operations across West Africa.',
    image: '/co.jpg', // Added leading slash
    highlights: ['Niger Delta operations', 'Oil block holdings', 'Integrated operations', 'Regional presence'],
  },
  {
    name: 'Diversified Holdings',
    category: 'Strategic Investments',
    description:
      'Beyond core telecommunications and energy, Mike Adenuga maintains documented investments in real estate, infrastructure, and finance. These holdings reflect a disciplined approach to portfolio diversification and long-term value creation.',
    image: '/des.jpg', // Added leading slash
    highlights: ['Real estate assets', 'Infrastructure', 'Finance sector', 'Strategic positioning'],
  },
]

export default function BusinessesContent() {
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
              Business Empires
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-primary mb-6 text-balance">
              Transforming African Industries
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From telecommunications to energy, Mike Adenuga's business portfolio represents strategic excellence
              and continental leadership across multiple sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Business Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-24">
          {businesses.map((business, index) => (
            <motion.div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Image Container */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/5 bg-muted/20">
                  <Image
                    src={business.image}
                    alt={business.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              </div>

              {/* Content Container */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <p className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-3">
                  {business.category}
                </p>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
                  {business.name}
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {business.description}
                </p>

                <div className="grid grid-cols-2 gap-y-4 gap-x-6 mb-10">
                  {business.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full ring-4 ring-accent/10" />
                      <span className="text-sm font-medium text-foreground/80">{highlight}</span>
                    </div>
                  ))}
                </div>

                <button className="px-8 py-4 bg-accent text-primary font-bold rounded-full hover:shadow-xl hover:shadow-accent/20 transition-all active:scale-95">
                  View Case Study
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/[0.02] -z-10" />
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { metric: '100K+', label: 'Employees' },
              { metric: '$10B+', label: 'Combined Value' },
              { metric: '50M+', label: 'Customers Served' },
              { metric: '35+', label: 'Years Building' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-10 rounded-3xl border border-white/5 bg-card/50 backdrop-blur-sm text-center group hover:border-accent/30 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-4xl md:text-5xl font-bold text-accent mb-3 group-hover:scale-110 transition-transform">
                  {item.metric}
                </p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}