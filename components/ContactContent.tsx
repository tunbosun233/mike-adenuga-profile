'use client'

import { motion } from 'framer-motion'
import { Linkedin, Twitter, Globe } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function ContactContent() {
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
              Contact
            </p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6 text-balance">
              Connect & Inquire
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              For inquiries regarding partnerships, media requests, or business opportunities, please reach out through the following channels.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card to-background">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-4">
              Social & Professional
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary text-balance">
              Reach Out
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* LinkedIn */}
            <motion.div
              className="p-8 rounded-xl border border-border bg-card hover:border-accent transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ translateY: -5 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-primary">LinkedIn</h3>
                  <p className="text-sm text-muted-foreground">Professional Network</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Connect on LinkedIn for professional insights, business announcements, and industry updates.
              </p>
              <a
                href="https://www.linkedin.com/company/conoil-plc/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/90 transition-all"
              >
                Visit LinkedIn
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>

            {/* X (Twitter) */}
            <motion.div
              className="p-8 rounded-xl border border-border bg-card hover:border-accent transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ translateY: -5 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Twitter className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-primary">X (Twitter)</h3>
                  <p className="text-sm text-muted-foreground">Social Updates</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Follow on X for the latest news, thoughts, and business developments from Mike Adenuga.
              </p>
              <a
                href="https://x.com/gloworld"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/90 transition-all"
              >
                Follow on X
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Business Websites */}
          <motion.div
            className="p-8 rounded-xl border-2 border-accent/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif text-2xl font-bold text-primary mb-6">Business Inquiries</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              For business-specific inquiries, please contact the respective organizations:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  name: 'Globacom Ltd',
                  description: 'Telecommunications inquiries',
                  url: 'https://www.gloworld.com/ng',
                  icon: Globe,
                },
                {
                  name: 'Conoil Petroleum',
                  description: 'Energy & petroleum inquiries',
                  url: 'https://conoilplc.com/',
                  icon: Globe,
                },
              ].map((business, index) => {
                const Icon = business.icon
                return (
                  <a
                    key={index}
                    href={business.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-6 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-primary group-hover:text-accent transition-colors">{business.name}</h4>
                        <p className="text-sm text-muted-foreground">{business.description}</p>
                      </div>
                      <Icon className="w-5 h-5 text-accent group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="p-8 rounded-xl border border-border bg-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">About Inquiries</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This website serves as the official digital presence of Chief Michael Adeniyi Agbolade Ishola Adenuga Jr. 
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For media inquiries, partnership opportunities, or other business matters, please reach out through LinkedIn or X.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              All inquiries are reviewed by the appropriate team members and will receive responses in due course.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
