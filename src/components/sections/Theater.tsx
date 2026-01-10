'use client'

import { motion, useInView } from 'framer-motion'
import { Theater as TheaterIcon, Award, Users, Calendar, Sparkles, Star, Trophy, Medal } from 'lucide-react'
import { useRef } from 'react'

const theaterWorks = [
  {
    title: 'Fuente Ovejuna',
    company: 'Compañía Nacional de Teatro Clásico',
    period: '2015-2017',
    director: 'Helena Pimenta',
    description: 'Clásico de Lope de Vega en el que trabajé intensivamente el verso clásico español del Siglo de Oro.',
    award: 'Nominado Mejor Actor Secundario - Unión de Actores',
    gradient: 'from-purple-500 via-pink-500 to-rose-500',
    icon: TheaterIcon,
  },
  {
    title: 'La villana de Getafe',
    company: 'Compañía Nacional de Teatro Clásico',
    period: '2015-2017',
    director: 'Helena Pimenta',
    description: 'Comedia del Siglo de Oro español que fortaleció mi dominio del verso clásico.',
    gradient: 'from-blue-500 via-cyan-500 to-teal-500',
    icon: TheaterIcon,
  },
  {
    title: 'Oliver Twist',
    company: 'Compañía La Tarasca',
    period: '2016',
    director: 'Teatro Musical',
    description: 'Adaptación musical del clásico de Charles Dickens con números musicales y coreografías.',
    award: 'Premio Mejor Espectáculo del Año 2016',
    gradient: 'from-yellow-500 via-orange-500 to-red-500',
    icon: Star,
  },
  {
    title: 'Don Juan Tenorio',
    company: 'Compañía Viento Sur',
    period: '2014-2015',
    director: 'Teatro Clásico',
    description: 'Obra cumbre de José Zorrilla, piedra angular del teatro romántico español.',
    gradient: 'from-red-500 via-rose-500 to-pink-500',
    icon: TheaterIcon,
  },
  {
    title: 'Augusto',
    company: 'Compañía La Tarasca',
    period: '2013-2014',
    director: 'Teatro Histórico',
    description: 'Drama histórico sobre el emperador romano que consolidó mi carrera teatral.',
    gradient: 'from-green-500 via-emerald-500 to-teal-500',
    icon: Users,
  },
]

const awards = [
  {
    title: 'Mejor Espectáculo del Año 2016',
    work: 'Oliver Twist',
    icon: Trophy,
  },
  {
    title: 'Nominación Mejor Actor Secundario',
    work: 'Fuente Ovejuna - Unión de Actores',
    icon: Medal,
  },
]

export default function Theater() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="theater" className="relative py-24 sm:py-32 overflow-hidden bg-black">
      {/* Fondo cinematográfico */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/30 to-black" />
      
      {/* Patrón decorativo */}
      <div className="absolute inset-0 opacity-5" 
           style={{
             backgroundImage: 'radial-gradient(circle, rgba(168,85,247,0.4) 1px, transparent 1px)',
             backgroundSize: '40px 40px'
           }} 
      />

      {/* Partículas flotantes */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
              opacity: 0,
            }}
            animate={{
              y: [null, Math.random() * -400],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 8,
              repeat: Infinity,
              ease: 'linear',
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Contenido */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header Premium */}
          <div className="text-center mb-16 sm:mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-full mb-6 backdrop-blur-sm"
            >
              <TheaterIcon className="w-4 h-4 text-purple-300" />
              <span className="text-purple-300 text-sm font-bold uppercase tracking-wider">Teatro Profesional</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-white via-purple-100 to-pink-300 bg-clip-text text-transparent">
                Trayectoria Teatral
              </span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
            >
              Formación en la <span className="font-bold text-purple-300">Compañía Nacional de Teatro Clásico</span> (2015-2017) 
              con Helena Pimenta. Especializado en <span className="font-bold text-pink-300">verso clásico español</span> del Siglo de Oro
            </motion.p>
          </div>

          {/* Sección de Premios Destacada */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="max-w-5xl mx-auto mb-16"
          >
            <div className="relative">
              {/* Resplandor */}
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/30 via-orange-500/30 to-yellow-500/30 rounded-3xl blur-2xl" />
              
              {/* Card de premios */}
              <div className="relative bg-gradient-to-br from-slate-900/95 via-slate-950/95 to-black/95 border border-yellow-500/30 rounded-3xl p-8 md:p-10 backdrop-blur-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(251,191,36,0.4)]">
                    <Award className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">Reconocimientos</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {awards.map((award, index) => {
                    const Icon = award.icon
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                        className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20"
                      >
                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-xl flex items-center justify-center">
                          <Icon className="w-5 h-5 text-yellow-300" />
                        </div>
                        <div>
                          <p className="font-bold text-yellow-100 mb-1">{award.title}</p>
                          <p className="text-sm text-slate-400">{award.work}</p>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Grid de Obras Teatrales */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {theaterWorks.map((work, index) => {
              const Icon = work.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ duration: 0.7, delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative"
                >
                  {/* Resplandor exterior */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${work.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                  
                  {/* Card */}
                  <div className="relative h-full bg-gradient-to-br from-slate-900/90 via-slate-950/90 to-black/90 rounded-3xl p-6 border border-slate-700/50 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
                    {/* Gradiente decorativo superior */}
                    <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${work.gradient} opacity-10 rounded-bl-full`} />
                    
                    {/* Icono */}
                    <motion.div
                      className={`relative mb-5 inline-flex p-3 rounded-2xl bg-gradient-to-br ${work.gradient} shadow-lg`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                    </motion.div>

                    {/* Título */}
                    <h3 className="font-bold text-xl sm:text-2xl mb-3 text-white group-hover:text-purple-200 transition-colors">
                      {work.title}
                    </h3>

                    {/* Compañía */}
                    <div className="flex items-center gap-2 text-sm text-purple-300 mb-2">
                      <Users className="w-4 h-4" />
                      <span className="font-semibold">{work.company}</span>
                    </div>

                    {/* Periodo */}
                    <div className="flex items-center gap-2 text-sm text-slate-400 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{work.period}</span>
                    </div>

                    {/* Director */}
                    <p className="text-sm text-slate-400 mb-4">
                      <span className="text-slate-300 font-semibold">Dir:</span> {work.director}
                    </p>

                    {/* Descripción */}
                    <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                      {work.description}
                    </p>

                    {/* Badge de premio */}
                    {work.award && (
                      <div className="flex items-start gap-2 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-xl p-3">
                        <Sparkles className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-yellow-200 font-semibold leading-tight">
                          {work.award}
                        </p>
                      </div>
                    )}

                    {/* Barra inferior */}
                    <motion.div 
                      className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${work.gradient} rounded-b-3xl`}
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Nota inferior */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="text-center mt-16"
          >
            <div className="inline-flex flex-col items-center gap-4 px-8 py-6 rounded-2xl bg-slate-900/60 border border-slate-700/50 backdrop-blur-md max-w-3xl">
              <TheaterIcon className="w-8 h-8 text-purple-300" />
              <p className="text-slate-300 italic leading-relaxed">
                "El teatro es la base de mi formación como actor. El trabajo en la CNTC 
                con Helena Pimenta fue fundamental para mi especialización en verso clásico español."
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Vignette inferior */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  )
}
