'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Award } from 'lucide-react'
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
          alt="Almagro San Miguel - Actor profesional sevillano"
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
            Actor Profesional
          </p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-4">
            Graduado ESAD Sevilla • Compañía Nacional Teatro Clásico • Especialista de Cine
          </p>
          <p className="text-base text-gray-400 max-w-2xl mx-auto mb-8">
            Protagonista de <strong>La Moderna</strong> (236 episodios), <strong>Vis a vis: El Oasis</strong>, 
            <strong> Hernán</strong>, <strong>Estoy vivo</strong> y <strong>La Caza: Guadiana</strong>
          </p>

          {/* Awards & Recognition */}
          <div className="flex items-center justify-center gap-2 mb-8 text-yellow-400">
            <Award className="w-5 h-5" />
            <span className="text-sm">+13 años de experiencia • Más de 300 episodios en TV</span>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="https://www.imdb.com/name/nm9017709/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-full transition-colors font-semibold"
            >
              IMDb Profile
            </a>
            <a
              href="https://es.wikipedia.org/wiki/Almagro_San_Miguel"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-colors font-semibold"
            >
              Wikipedia
            </a>
            <a
              href="#contact"
              className="px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-full transition-colors font-semibold"
            >
              Contacto
            </a>
          </div>

          <motion.a
            href="#about"
            className="inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            aria-label="Scroll para saber más"
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
