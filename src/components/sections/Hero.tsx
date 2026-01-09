'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Award, Play, Star, TrendingUp, Film, Tv } from 'lucide-react'
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
    { icon: Tv, label: '300+ Episodios', color: 'from-blue-500 to-cyan-500' },
    { icon: Film, label: '12 Series', color: 'from-purple-500 to-pink-500' },
    { icon: Award, label: '2 Premios', color: 'from-yellow-500 to-orange-500' },
    { icon: TrendingUp, label: '13 Años', color: 'from-green-500 to-emerald-500' },
  ]

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background with Particles Effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974"
          alt="Almagro San Miguel - Actor profesional sevillano"
          fill
          className="object-cover brightness-[0.25]"
          priority
        />
        
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-yellow-900/40 mix-blend-multiply" />
        
        {/* Particles Effect */}
        {mounted && (
          <div className="absolute inset-0 opacity-30">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-yellow-400 rounded-full"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  opacity: 0,
                }}
                animate={{
                  y: [null, Math.random() * window.innerHeight],
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
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        style={{ opacity, scale }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-500/30 rounded-full mb-6 backdrop-blur-sm"
          >
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-300 text-sm font-semibold">Actor Profesional Certificado</span>
          </motion.div>

          {/* Main Title with Gradient */}
          <motion.h1 
            className="text-6xl md:text-8xl font-serif font-bold mb-6 bg-gradient-to-r from-white via-yellow-100 to-yellow-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Almagro San Miguel
          </motion.h1>

          {/* Subtitle with Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <p className="text-2xl md:text-3xl text-yellow-400 font-bold mb-4">
              Actor de Televisión, Cine y Teatro
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-3 leading-relaxed">
              Graduado ESAD Sevilla • Compañía Nacional Teatro Clásico • Especialista de Cine NO-IDENTITY
            </p>
            <p className="text-base text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              Protagonista de <strong className="text-white">La Moderna</strong> (236 episodios TVE), 
              <strong className="text-white"> Vis a vis: El Oasis</strong> (Fox/Star), 
              <strong className="text-white"> Hernán</strong> (Prime Video), 
              <strong className="text-white"> Estoy vivo</strong> y 
              <strong className="text-white"> La Caza: Guadiana</strong>
            </p>
          </motion.div>

          {/* Achievement Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="group relative"
                >
                  <div className={`px-5 py-3 bg-gradient-to-r ${achievement.color} rounded-xl shadow-lg transform transition-all duration-300 group-hover:shadow-2xl`}>
                    <div className="flex items-center gap-2">
                      <Icon className="w-5 h-5 text-white" />
                      <span className="text-white font-bold text-sm">{achievement.label}</span>
                    </div>
                  </div>
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10`} />
                </motion.div>
              )
            })}
          </motion.div>

          {/* CTA Buttons Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <motion.a
              href="#showreel"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-500 hover:to-orange-500 text-white rounded-full transition-all font-bold shadow-xl hover:shadow-2xl flex items-center gap-2"
            >
              <Play className="w-5 h-5 group-hover:animate-pulse" />
              Ver Showreel
            </motion.a>
            
            <motion.a
              href="https://www.imdb.com/name/nm9017709/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-all font-bold border border-white/20 hover:border-white/40 shadow-lg"
            >
              IMDb Profile
            </motion.a>
            
            <motion.a
              href="https://es.wikipedia.org/wiki/Almagro_San_Miguel"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-all font-bold border border-white/20 hover:border-white/40 shadow-lg"
            >
              Wikipedia
            </motion.a>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white rounded-full transition-all font-bold shadow-lg hover:shadow-xl"
            >
              Contacto Profesional
            </motion.a>
          </motion.div>

          {/* Scroll Indicator Enhanced */}
          <motion.a
            href="#about"
            className="inline-flex flex-col items-center gap-2 group"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            aria-label="Scroll para saber más"
          >
            <span className="text-sm text-gray-400 group-hover:text-white transition-colors">Descubre más</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown className="w-8 h-8 text-yellow-400 group-hover:text-yellow-300 transition-colors" />
            </motion.div>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Bottom Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent z-[5]" />
    </section>
  )
}
