'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974"
          alt="Almagro San Miguel - Actor profesional"
          fill
          className="object-cover brightness-[0.3]"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
            Almagro San Miguel
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-4">
            Actor & Performer
          </p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Actor sevillano con más de 10 años de experiencia en televisión, cine y teatro.
            Protagonista de La Moderna, Vis a vis: El Oasis, Estoy vivo y La Caza.
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-12">
            <a
              href="https://www.imdb.com/name/nm9017709/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-full transition-colors"
            >
              IMDb
            </a>
            <a
              href="https://es.wikipedia.org/wiki/Almagro_San_Miguel"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-colors"
            >
              Wikipedia
            </a>
          </div>

          <motion.a
            href="#about"
            className="inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <ArrowDown className="w-8 h-8 text-white animate-bounce" />
          </motion.a>
        </motion.div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70 z-[1]" />
    </section>
  )
}
