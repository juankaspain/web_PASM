'use client'

import { motion, useInView } from 'framer-motion'
import { Theater as TheaterIcon, Award, Users, Calendar, Crown, Star, Trophy, Zap } from 'lucide-react'
import { useRef } from 'react'

const theaterWorks = [
  {
    title: 'Donde nacen las palabras',
    company: 'DMLP Producciones',
    period: '2025-2026',
    director: 'Ángel Caballero',
    description: 'Continuación de la aclamada "Donde mueren las palabras" (finalista al Premio Nacional de Literatura Dramática). Comedia sobre el reencuentro de amigos de la infancia que, tras años de distanciamiento, se ven obligados a confinarse juntos durante la pandemia.',
    award: 'En Cartel - Gira Nacional 2026',
    awardEntity: 'Teatro Lara Madrid & Palacio de la Prensa',
    featured: true,
    current: true,
    category: 'Comedia Contemporánea',
    venues: 'Estreno: Teatro Cervantes Málaga | Teatro Lara Madrid | Palacio de la Prensa | Gira Nacional',
  },
  {
    title: 'Fuente Ovejuna',
    company: 'Compañía Nacional de Teatro Clásico',
    period: '2015-2017',
    director: 'Helena Pimenta',
    description: 'Clásico de Lope de Vega bajo dirección de Helena Pimenta. Trabajo intensivo en verso clásico español, comedia del Siglo de Oro y técnicas de interpretación profesional.',
    award: 'Nominado Mejor Actor Secundario',
    awardEntity: 'Unión de Actores 2015',
    featured: true,
    category: 'Siglo de Oro',
  },
  {
    title: 'La villana de Getafe',
    company: 'Compañía Nacional de Teatro Clásico',
    period: '2015-2017',
    director: 'Helena Pimenta',
    description: 'Comedia del Siglo de Oro español. Profundización en técnicas de comedia clásica, verso barroco y personajes de enredo.',
    featured: true,
    category: 'Comedia Clásica',
  },
  {
    title: 'Oliver Twist',
    company: 'Compañía La Tarasca',
    period: '2016',
    director: 'Andrés Lima',
    description: 'Adaptación musical del clásico de Charles Dickens. Integración de canto, danza y actuación en espectáculo de gran formato.',
    award: 'Premio Mejor Espectáculo del Año',
    awardEntity: 'Festival de Teatro 2016',
    category: 'Musical',
  },
  {
    title: 'Don Juan Tenorio',
    company: 'Compañía Viento Sur',
    period: '2014-2015',
    director: 'José Pascual',
    description: 'Obra cumbre de José Zorrilla. Interpretación del mito de Don Juan con enfoque contemporáneo manteniendo la esencia del verso clásico.',
    category: 'Teatro Clásico',
  },
  {
    title: 'Augusto',
    company: 'Compañía La Tarasca',
    period: '2013-2014',
    director: 'Ricardo Iniesta',
    description: 'Drama histórico sobre el primer emperador romano. Composición de personaje histórico con rigor y profundidad psicológica.',
    category: 'Teatro Histórico',
  },
]

export default function Theater() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="theater" className="relative py-24 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-black">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[100px]" />
      </div>

      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header ESTANDARIZADO */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <TheaterIcon className="w-4 h-4 text-yellow-400" strokeWidth={2} />
              <span className="text-sm font-medium text-slate-300 tracking-wide">Teatro Profesional</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-white"
            >
              Trayectoria Teatral
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-20 h-0.5 bg-yellow-400 mx-auto mb-6"
            />
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed"
            >
              Formación de élite en la Compañía Nacional de Teatro Clásico bajo dirección de Helena Pimenta
            </motion.p>
          </div>

          {/* Feature Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-5xl mx-auto mb-12"
          >
            <div className="group relative">
              <div className="absolute -inset-[1px] bg-yellow-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
                <div className="flex flex-col lg:flex-row items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center">
                      <Crown className="w-8 h-8 text-black" strokeWidth={2.5} />
                    </div>
                  </div>
                  
                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-xl font-bold text-white mb-2">Formación de Élite - CNTC</h3>
                    <p className="text-slate-300 leading-relaxed">
                      Dos años de formación profesional intensiva (2015-2017) en la Compañía Nacional de Teatro Clásico bajo
                      dirección de Helena Pimenta. Especialización en verso clásico español y comedia del Siglo de Oro.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Awards Grid */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="max-w-5xl mx-auto mb-16"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-white/[0.04] hover:border-yellow-400/30 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center border border-yellow-400/30">
                    <Trophy className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">Premio 2016</p>
                    <p className="text-base font-semibold text-white mb-0.5">Mejor Espectáculo del Año</p>
                    <p className="text-sm text-slate-400">Oliver Twist</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-white/[0.04] hover:border-yellow-400/30 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center border border-yellow-400/30">
                    <Star className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">Nominación 2015</p>
                    <p className="text-base font-semibold text-white mb-0.5">Mejor Actor Secundario</p>
                    <p className="text-sm text-slate-400">Unión de Actores</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Works List */}
          <div className="max-w-6xl mx-auto space-y-6">
            {theaterWorks.map((work, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.08 }}
                whileHover={{ x: 4 }}
                className="group"
              >
                <div className="relative">
                  <motion.div 
                    className={`absolute left-0 top-0 bottom-0 w-[2px] ${work.current ? 'bg-green-400' : 'bg-yellow-400'}`}
                    initial={{ scaleY: 0 }}
                    whileHover={{ scaleY: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className={`relative border rounded-xl p-6 lg:p-8 backdrop-blur-sm hover:border-white/20 transition-all ${
                    work.current 
                      ? 'bg-gradient-to-br from-green-900/10 to-green-950/5 border-green-500/30 hover:bg-green-900/15' 
                      : 'bg-white/[0.02] border-white/10 hover:bg-white/[0.04]'
                  }`}>
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      <div className="lg:w-64 flex-shrink-0">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center border ${
                            work.current 
                              ? 'bg-green-400/10 border-green-400/20' 
                              : 'bg-yellow-400/10 border-yellow-400/20'
                          }`}>
                            <TheaterIcon className={`w-5 h-5 ${work.current ? 'text-green-400' : 'text-yellow-400'}`} />
                          </div>
                          {work.current && (
                            <div className="px-3 py-1 bg-green-400/20 border border-green-400/30 rounded-full animate-pulse">
                              <span className="text-xs font-bold text-green-300 uppercase tracking-wide flex items-center gap-1.5">
                                <Zap className="w-3 h-3" />
                                En Cartel
                              </span>
                            </div>
                          )}
                          {work.featured && !work.current && (
                            <div className="px-3 py-1 bg-yellow-400/20 border border-yellow-400/30 rounded-full">
                              <span className="text-xs font-bold text-yellow-300 uppercase tracking-wide">CNTC</span>
                            </div>
                          )}
                        </div>
                        
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2 text-slate-400">
                            <Users className="w-4 h-4" />
                            <span className="text-slate-300">{work.company}</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-400">
                            <Calendar className="w-4 h-4" />
                            <span>{work.period}</span>
                          </div>
                          <p className="text-xs text-slate-500">Dir: {work.director}</p>
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <h3 className="text-xl lg:text-2xl font-bold text-white">
                            {work.title}
                          </h3>
                          <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-slate-400 whitespace-nowrap">
                            {work.category}
                          </span>
                        </div>
                        
                        <p className="text-slate-400 leading-relaxed mb-4">
                          {work.description}
                        </p>

                        {work.venues && (
                          <p className="mb-4 text-sm text-slate-500">{work.venues}</p>
                        )}

                        {work.award && (
                          <div className={`inline-flex items-start gap-2 border rounded-lg px-4 py-2.5 ${
                            work.current 
                              ? 'bg-green-400/5 border-green-400/20' 
                              : 'bg-yellow-400/5 border-yellow-400/20'
                          }`}>
                            <Award className={`w-4 h-4 flex-shrink-0 mt-0.5 ${work.current ? 'text-green-400' : 'text-yellow-400'}`} />
                            <div>
                              <p className="text-sm font-semibold text-white">{work.award}</p>
                              <p className="text-xs text-slate-400">{work.awardEntity}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
