'use client'

import { motion, useInView } from 'framer-motion'
import { Theater as TheaterIcon, Award, Users, Calendar, Sparkles, Crown, Star } from 'lucide-react'
import { useRef } from 'react'

const theaterWorks = [
  {
    title: 'Fuente Ovejuna',
    company: 'Compañía Nacional de Teatro Clásico',
    period: '2015-2017',
    director: 'Helena Pimenta',
    description: 'Clásico de Lope de Vega. Trabajo intensivo en verso clásico español y formación profesional avanzada.',
    award: 'Nominado Mejor Actor Secundario - Unión de Actores',
    gradient: 'from-purple-500 via-pink-500 to-rose-500',
    featured: true,
  },
  {
    title: 'La villana de Getafe',
    company: 'Compañía Nacional de Teatro Clásico',
    period: '2015-2017',
    director: 'Helena Pimenta',
    description: 'Comedia del Siglo de Oro español. Profundización en técnicas de comedia clásica.',
    gradient: 'from-blue-500 via-cyan-500 to-teal-500',
    featured: true,
  },
  {
    title: 'Oliver Twist',
    company: 'Compañía La Tarasca',
    period: '2016',
    director: 'Teatro Musical',
    description: 'Adaptación musical del clásico de Charles Dickens. Integración de canto, baile y actuación.',
    award: 'Premio Mejor Espectáculo del Año 2016',
    gradient: 'from-yellow-500 via-orange-500 to-red-500',
  },
  {
    title: 'Don Juan Tenorio',
    company: 'Compañía Viento Sur',
    period: '2014-2015',
    director: 'Teatro Clásico',
    description: 'Obra cumbre de José Zorrilla. Interpretación del personaje icónico del teatro español.',
    gradient: 'from-red-500 via-rose-500 to-pink-500',
  },
  {
    title: 'Augusto',
    company: 'Compañía La Tarasca',
    period: '2013-2014',
    director: 'Teatro Histórico',
    description: 'Drama histórico sobre el emperador romano. Trabajo de composición de personaje histórico.',
    gradient: 'from-green-500 via-emerald-500 to-teal-500',
  },
]

export default function Theater() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="theater" className="relative py-24 sm:py-32 overflow-hidden bg-black">
      {/* Fondo cinematográfico con gradiente púrpura */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/30 to-black" />
      
      {/* Patrón decorativo de fondo */}
      <div className="absolute inset-0 opacity-5" 
           style={{
             backgroundImage: 'radial-gradient(circle, rgba(168,85,247,0.4) 1px, transparent 1px)',
             backgroundSize: '40px 40px'
           }} 
      />

      {/* Resplandor púrpura superior */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-500/10 rounded-full blur-[120px]" />

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
              <span className="bg-gradient-to-r from-white via-purple-100 to-pink-200 bg-clip-text text-transparent">
                Trayectoria Teatral
              </span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
            >
              Formación en la <strong className="text-purple-300">Compañía Nacional de Teatro Clásico</strong> (2015-2017) 
              con Helena Pimenta, especializado en verso clásico español del Siglo de Oro
            </motion.p>
          </div>

          {/* Destacado CNTC */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="relative group">
              {/* Resplandor */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Card */}
              <div className="relative bg-gradient-to-br from-purple-900/90 via-slate-900/90 to-pink-900/90 border border-purple-500/30 rounded-3xl p-8 backdrop-blur-xl">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <motion.div 
                    className="flex-shrink-0"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(168,85,247,0.5)]">
                      <Crown className="w-10 h-10 text-white" />
                    </div>
                  </motion.div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-white mb-3 flex items-center justify-center md:justify-start gap-2">
                      <Sparkles className="w-5 h-5 text-yellow-300" />
                      Formación de Élite
                    </h3>
                    <p className="text-slate-200 leading-relaxed">
                      Dos años de formación intensiva en la <strong className="text-purple-300">CNTC</strong> bajo
                      la dirección de <strong className="text-pink-300">Helena Pimenta</strong>, especializándome
                      en verso clásico español, comedia del Siglo de Oro y técnicas de interpretación teatral avanzadas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Premios Destacados */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="max-w-5xl mx-auto mb-16"
          >
            <div className="grid md:grid-cols-2 gap-4">
              {/* Premio 1 */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-gradient-to-br from-slate-900/90 to-black/90 border border-yellow-500/30 rounded-2xl p-6 backdrop-blur-xl">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Premio 2016</p>
                      <p className="text-sm font-bold text-white">Mejor Espectáculo del Año</p>
                      <p className="text-xs text-slate-300">Oliver Twist</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Nominación */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-gradient-to-br from-slate-900/90 to-black/90 border border-purple-500/30 rounded-2xl p-6 backdrop-blur-xl">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Nominación 2015</p>
                      <p className="text-sm font-bold text-white">Mejor Actor Secundario</p>
                      <p className="text-xs text-slate-300">Unión de Actores - Fuente Ovejuna</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Grid de Obras */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {theaterWorks.map((work, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.7, delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group relative"
              >
                {/* Resplandor exterior */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${work.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
                
                {/* Card */}
                <div className="relative h-full bg-gradient-to-br from-slate-900/95 via-slate-950/95 to-black/95 rounded-2xl border border-slate-700/50 backdrop-blur-xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
                  {/* Badge CNTC */}
                  {work.featured && (
                    <div className="absolute -top-3 -right-3">
                      <div className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-[10px] font-bold text-white shadow-lg">
                        CNTC
                      </div>
                    </div>
                  )}

                  {/* Icono */}
                  <motion.div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${work.gradient} mb-4 shadow-lg`}
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.5 }}
                  >
                    <TheaterIcon className="w-5 h-5 text-white" />
                  </motion.div>

                  {/* Título */}
                  <h3 className="font-bold text-xl mb-3 text-white group-hover:text-purple-300 transition-colors">
                    {work.title}
                  </h3>

                  {/* Compañía */}
                  <div className="flex items-center gap-2 text-sm text-purple-300 mb-2">
                    <Users className="w-4 h-4" />
                    <span className="font-semibold">{work.company}</span>
                  </div>

                  {/* Período */}
                  <div className="flex items-center gap-2 text-sm text-slate-400 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{work.period}</span>
                  </div>

                  {/* Director */}
                  <p className="text-sm text-slate-300 mb-3">
                    <strong className="text-slate-200">Dir:</strong> {work.director}
                  </p>

                  {/* Descripción */}
                  <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                    {work.description}
                  </p>

                  {/* Badge de Premio */}
                  {work.award && (
                    <div className="flex items-start gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3">
                      <Sparkles className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-yellow-300 font-semibold leading-tight">
                        {work.award}
                      </p>
                    </div>
                  )}

                  {/* Línea decorativa inferior */}
                  <motion.div 
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${work.gradient} rounded-b-2xl`}
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Cita inferior */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="text-center mt-16 max-w-3xl mx-auto"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl" />
              <div className="relative bg-slate-900/60 border border-purple-500/20 rounded-2xl p-8 backdrop-blur-sm">
                <p className="text-lg text-slate-300 italic leading-relaxed">
                  "El teatro es la base de mi formación como actor. El trabajo en la CNTC 
                  con Helena Pimenta fue fundamental para mi especialización en verso clásico 
                  y mi desarrollo como intérprete profesional."
                </p>
                <div className="mt-4 w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Vignette inferior */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  )
}
