'use client'

import { motion, useInView } from 'framer-motion'
import { Theater as TheaterIcon, Award, Users, Calendar, Sparkles, Crown, Star, MapPin } from 'lucide-react'
import { useRef } from 'react'

const theaterWorks = [
  {
    title: 'Fuente Ovejuna',
    company: 'Compañía Nacional de Teatro Clásico',
    period: '2015-2017',
    director: 'Helena Pimenta',
    description: 'Clásico de Lope de Vega. Trabajo intensivo en verso clásico español y formación profesional avanzada.',
    award: 'Nominado Mejor Actor Secundario - Unión de Actores',
    featured: true,
  },
  {
    title: 'La villana de Getafe',
    company: 'Compañía Nacional de Teatro Clásico',
    period: '2015-2017',
    director: 'Helena Pimenta',
    description: 'Comedia del Siglo de Oro español. Profundización en técnicas de comedia clásica.',
    featured: true,
  },
  {
    title: 'Oliver Twist',
    company: 'Compañía La Tarasca',
    period: '2016',
    director: 'Teatro Musical',
    description: 'Adaptación musical del clásico de Charles Dickens. Integración de canto, baile y actuación.',
    award: 'Premio Mejor Espectáculo del Año 2016',
  },
  {
    title: 'Don Juan Tenorio',
    company: 'Compañía Viento Sur',
    period: '2014-2015',
    director: 'Teatro Clásico',
    description: 'Obra cumbre de José Zorrilla. Interpretación del personaje icónico del teatro español.',
  },
  {
    title: 'Augusto',
    company: 'Compañía La Tarasca',
    period: '2013-2014',
    director: 'Teatro Histórico',
    description: 'Drama histórico sobre el emperador romano. Trabajo de composición de personaje histórico.',
  },
]

export default function Theater() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="theater" className="relative py-24 sm:py-32 overflow-hidden bg-black">
      {/* Fondo elegante */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />
      
      {/* Patrón decorativo sutil */}
      <div className="absolute inset-0 opacity-5" 
           style={{
             backgroundImage: 'radial-gradient(circle, rgba(251,191,36,0.3) 1px, transparent 1px)',
             backgroundSize: '40px 40px'
           }} 
      />

      {/* Resplandor dorado superior */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-yellow-500/10 rounded-full blur-[150px]" />

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
              className="inline-flex items-center gap-2 px-5 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full mb-6 backdrop-blur-sm"
            >
              <TheaterIcon className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 text-sm font-bold uppercase tracking-wider">Teatro Profesional</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-300 bg-clip-text text-transparent">
                Trayectoria Teatral
              </span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
            >
              Formación en la <strong className="text-yellow-300">Compañía Nacional de Teatro Clásico</strong> (2015-2017) 
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
              {/* Resplandor dorado */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500/50 to-amber-500/50 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              
              {/* Card ejecutiva */}
              <div className="relative bg-gradient-to-br from-slate-900/95 via-slate-950/95 to-black/95 border border-slate-700/50 rounded-3xl p-8 backdrop-blur-xl shadow-[0_25px_70px_rgba(0,0,0,0.9)]">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <motion.div 
                    className="flex-shrink-0"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center shadow-[0_20px_50px_rgba(251,191,36,0.4)]">
                      <Crown className="w-10 h-10 text-black" />
                    </div>
                  </motion.div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-white mb-3 flex items-center justify-center md:justify-start gap-2">
                      <Sparkles className="w-5 h-5 text-yellow-400" />
                      Formación de Élite
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      Dos años de formación intensiva en la <strong className="text-yellow-300">CNTC</strong> bajo
                      la dirección de <strong className="text-amber-300">Helena Pimenta</strong>, especializándome
                      en verso clásico español, comedia del Siglo de Oro y técnicas de interpretación teatral avanzadas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Premios Destacados - Diseño minimalista */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="max-w-5xl mx-auto mb-16"
          >
            <div className="grid md:grid-cols-2 gap-4">
              {/* Premio 1 */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400/50 to-amber-500/50 rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity" />
                <div className="relative bg-gradient-to-br from-slate-900/90 to-black/90 border border-yellow-500/20 rounded-2xl p-6 backdrop-blur-xl">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center shadow-lg">
                      <Award className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Premio 2016</p>
                      <p className="text-sm font-bold text-white">Mejor Espectáculo del Año</p>
                      <p className="text-xs text-yellow-300">Oliver Twist</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Nominación */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400/50 to-amber-500/50 rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity" />
                <div className="relative bg-gradient-to-br from-slate-900/90 to-black/90 border border-yellow-500/20 rounded-2xl p-6 backdrop-blur-xl">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center shadow-lg">
                      <Star className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Nominación 2015</p>
                      <p className="text-sm font-bold text-white">Mejor Actor Secundario</p>
                      <p className="text-xs text-yellow-300">Unión de Actores - Fuente Ovejuna</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Grid de Obras - Diseño elegante profesional */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {theaterWorks.map((work, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.7, delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                {/* Resplandor sutil */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-yellow-500/30 to-amber-500/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                
                {/* Card */}
                <div className="relative h-full bg-gradient-to-br from-slate-900/95 via-slate-950/95 to-black/95 rounded-2xl border border-slate-700/50 backdrop-blur-xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
                  {/* Badge CNTC minimalista */}
                  {work.featured && (
                    <div className="absolute -top-3 -right-3">
                      <div className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full text-[10px] font-bold text-black shadow-lg">
                        CNTC
                      </div>
                    </div>
                  )}

                  {/* Icono minimalista */}
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-yellow-400/10 to-amber-500/10 border border-yellow-500/20 mb-4">
                    <TheaterIcon className="w-5 h-5 text-yellow-400" />
                  </div>

                  {/* Título */}
                  <h3 className="font-bold text-xl mb-3 text-white group-hover:text-yellow-300 transition-colors">
                    {work.title}
                  </h3>

                  {/* Compañía */}
                  <div className="flex items-center gap-2 text-sm text-slate-400 mb-2">
                    <Users className="w-4 h-4" />
                    <span className="font-semibold">{work.company}</span>
                  </div>

                  {/* Período */}
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{work.period}</span>
                  </div>

                  {/* Director */}
                  <p className="text-sm text-slate-400 mb-3">
                    <strong className="text-slate-300">Dir:</strong> {work.director}
                  </p>

                  {/* Descripción */}
                  <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                    {work.description}
                  </p>

                  {/* Badge de Premio minimalista */}
                  {work.award && (
                    <div className="flex items-start gap-2 bg-yellow-500/5 border border-yellow-500/20 rounded-lg p-3">
                      <Sparkles className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-yellow-300 font-semibold leading-tight">
                        {work.award}
                      </p>
                    </div>
                  )}

                  {/* Línea decorativa inferior dorada */}
                  <motion.div 
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-b-2xl"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Cita inferior elegante */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="text-center mt-16 max-w-3xl mx-auto"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 rounded-3xl blur-2xl" />
              <div className="relative bg-slate-900/60 border border-yellow-500/10 rounded-2xl p-8 backdrop-blur-sm">
                <p className="text-lg text-slate-300 italic leading-relaxed">
                  "El teatro es la base de mi formación como actor. El trabajo en la CNTC 
                  con Helena Pimenta fue fundamental para mi especialización en verso clásico 
                  y mi desarrollo como intérprete profesional."
                </p>
                <div className="mt-4 w-16 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto rounded-full" />
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
