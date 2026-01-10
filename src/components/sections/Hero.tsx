'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Award, Play, Star, TrendingUp, Film, Tv, Sparkles, MapPin, Calendar } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Hero() {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 0.8])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const achievements = [
    { icon: Tv, label: '300+ Episodios', subtitle: 'TV Nacional', color: 'from-blue-500 to-cyan-500', bgColor: 'bg-blue-500/10', borderColor: 'border-blue-500/30' },
    { icon: Film, label: '12 Series', subtitle: 'Protagonista', color: 'from-purple-500 to-pink-500', bgColor: 'bg-purple-500/10', borderColor: 'border-purple-500/30' },
    { icon: Award, label: '2 Premios', subtitle: 'Reconocimientos', color: 'from-yellow-500 to-orange-500', bgColor: 'bg-yellow-500/10', borderColor: 'border-yellow-500/30' },
    { icon: TrendingUp, label: '13 Años', subtitle: 'Experiencia', color: 'from-green-500 to-emerald-500', bgColor: 'bg-green-500/10', borderColor: 'border-green-500/30' },
  ]

  const recentWorks = [
    { title: 'La Moderna', episodes: '236 ep.', network: 'TVE', year: '2024-2025' },
    { title: 'Un fantasma en la batalla', type: 'Cine', network: 'Netflix', year: '2025' },
    { title: 'Vis a vis: El Oasis', episodes: '8 ep.', network: 'Fox', year: '2020' },
    { title: 'Hernán', role: 'Gonzalo de Sandoval', network: 'Prime', year: '2019' },
  ]

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Split Layout Background */}
      <div className="absolute inset-0 z-0 grid lg:grid-cols-2">
        {/* Left Side - Actor Photo */}
        <div className="relative h-full">
          <Image
            src="https://github.com/user-attachments/assets/0c09e17f-1983-4ad0-8926-a0d6ef6ae5cf"
            alt="Almagro San Miguel - Actor profesional sevillano"
            fill
            className="object-cover object-center"
            sizes="50vw"
            priority
          />
          {/* Gradient overlay to blend */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/40 to-black" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />
        </div>
        
        {/* Right Side - Solid dark background */}
        <div className="hidden lg:block bg-gradient-to-br from-slate-900 via-slate-800 to-black" />
      </div>

      {/* Overlay gradient for mobile */}
      <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black z-[1]" />

      {/* Particles Effect */}
      {mounted && (
        <div className="absolute inset-0 opacity-20 z-[2]">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400 rounded-full"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
                opacity: 0,
              }}
              animate={{
                y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080)],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: 'linear',
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      )}

      {/* Content Container */}
      <motion.div 
        className="relative z-10 w-full max-w-7xl mx-auto px-4 py-12 lg:py-0"
        style={{ opacity, scale }}
      >
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Empty on desktop (photo background) */}
          <div className="hidden lg:block" />
          
          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="space-y-6 lg:pl-8"
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-500/30 rounded-full backdrop-blur-sm"
            >
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-300 text-sm font-semibold">Actor Profesional Certificado</span>
            </motion.div>

            {/* Main Title */}
            <div>
              <motion.h1 
                className="text-5xl md:text-7xl font-serif font-bold mb-4 bg-gradient-to-r from-white via-yellow-100 to-yellow-300 bg-clip-text text-transparent leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Almagro <span className="text-yellow-400">San Miguel</span>
              </motion.h1>
              
              <motion.p
                className="text-2xl md:text-3xl text-yellow-400 font-bold mb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Actor de Televisión, Cine y Teatro
              </motion.p>
            </div>

            {/* Quick Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="grid grid-cols-2 gap-3"
            >
              <div className="bg-slate-800/60 backdrop-blur-md border border-slate-700/50 rounded-xl p-3">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-yellow-400" />
                  <span className="text-xs text-gray-400">Ubicación</span>
                </div>
                <p className="text-sm font-bold text-white">Sevilla, España</p>
              </div>
              <div className="bg-slate-800/60 backdrop-blur-md border border-slate-700/50 rounded-xl p-3">
                <div className="flex items-center gap-2 mb-1">
                  <Calendar className="w-4 h-4 text-yellow-400" />
                  <span className="text-xs text-gray-400">Nacimiento</span>
                </div>
                <p className="text-sm font-bold text-white">7 Marzo 1990</p>
              </div>
            </motion.div>

            {/* Training Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-2"
            >
              <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs font-semibold text-blue-300">
                ESAD Sevilla
              </span>
              <span className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-full text-xs font-semibold text-purple-300">
                CNTC Helena Pimenta
              </span>
              <span className="px-3 py-1.5 bg-red-500/10 border border-red-500/30 rounded-full text-xs font-semibold text-red-300">
                NO-IDENTITY Especialista
              </span>
            </motion.div>

            {/* Recent Works */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="space-y-3"
            >
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-yellow-400" />
                <h3 className="text-lg font-bold text-white">Trabajos Destacados</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {recentWorks.map((work, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                    className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-lg p-3 hover:bg-slate-700/40 hover:border-yellow-500/30 transition-all group"
                  >
                    <p className="text-sm font-bold text-white group-hover:text-yellow-400 transition-colors">
                      {work.title}
                    </p>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-xs text-gray-400">
                        {work.episodes || work.type || work.role}
                      </span>
                      <span className="text-xs text-yellow-400 font-semibold">
                        {work.network} • {work.year}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Achievement Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-3"
            >
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.1 + index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05, y: -3 }}
                    className="group relative"
                  >
                    <div className={`${achievement.bgColor} ${achievement.borderColor} border backdrop-blur-sm rounded-xl p-3 transform transition-all duration-300 hover:shadow-lg`}>
                      <div className="flex flex-col items-center text-center gap-1">
                        <Icon className="w-5 h-5 text-white" />
                        <span className="text-white font-bold text-sm">{achievement.label}</span>
                        <span className="text-xs text-gray-400">{achievement.subtitle}</span>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="flex flex-wrap gap-3 pt-4"
            >
              <motion.a
                href="#showreel"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-6 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-500 hover:to-orange-500 text-white rounded-full transition-all font-bold shadow-xl hover:shadow-2xl flex items-center gap-2"
              >
                <Play className="w-4 h-4 group-hover:animate-pulse" />
                Ver Showreel
              </motion.a>
              
              <motion.a
                href="https://www.imdb.com/name/nm9017709/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-all font-bold border border-white/20 hover:border-yellow-400/50"
              >
                IMDb
              </motion.a>
              
              <motion.a
                href="https://es.wikipedia.org/wiki/Almagro_San_Miguel"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-all font-bold border border-white/20 hover:border-yellow-400/50"
              >
                Wikipedia
              </motion.a>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.a
              href="#about"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors group pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              aria-label="Scroll para saber más"
            >
              <span className="text-sm font-medium">Descubre más</span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ArrowDown className="w-5 h-5" />
              </motion.div>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent z-[5]" />
    </section>
  )
}
