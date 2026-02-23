'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <p className="text-accent font-semibold uppercase tracking-[0.2em] text-xs mb-4">
            Business Visionary
          </p>

          <h1 className="font-serif text-5xl md:text-7xl font-bold text-primary mb-4 leading-tight">
            Chief Mike <br /> Adenuga
          </h1>

          <h2 className="text-xl md:text-2xl font-medium text-accent/90 mb-6 italic">
            Nigerian Billionaire, Telecom & Oil Pioneer
          </h2>

          <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed">
            Founder and Chairman of Globacom and Conoil. A visionary who transformed African telecommunications and built continental business enterprises through strategic discipline and long-term commitment.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/about"
              className="px-8 py-4 bg-accent text-primary font-bold rounded-full hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 flex items-center gap-2 group"
            >
              Learn More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/businesses"
              className="px-8 py-4 border border-accent/30 text-accent font-bold rounded-full hover:bg-accent/5 transition-all duration-300"
            >
              Business Empire
            </Link>
          </div>
        </motion.div>

        {/* Right Side: Image Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Main Image Wrapper */}
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <Image
              src="/mike2.jpeg"
              alt="Chief Mike Adenuga"
              fill
              className="object-cover object-top" // Ensures the head isn't cut off
              priority
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          {/* Animated Gold Frame Accent */}
          <motion.div
            className="absolute -bottom-4 -right-4 -z-10 w-full h-full border-2 border-accent/20 rounded-3xl"
            animate={{ x: [0, 8, 0], y: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  )
}