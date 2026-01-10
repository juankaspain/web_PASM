'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Film, Award, Theater as TheaterIcon, Tv, Sparkles, ChevronDown, Calendar } from 'lucide-react'
import { useState, useRef } from 'react'
import { useInView } from 'framer-motion'

const milestones = [
  {
    id: 1,
    year: '2025',
    title: 'Un fantasma en la batalla',
    category: 'Cine',
    icon: Film,
    shortDesc: 'Papel destacado en película dirigida por Agustín Díaz Yanes, disponible en Netflix',
    fullDesc: 'Interpretación del personaje Antonio, novio de la protagonista Amaia (Susana Abaitua) en esta película sobre la Operación Santuario contra ETA. El film se estrenó en cines en octubre de 2025 y llegó a Netflix ese mismo año. Trabajé junto a un reparto excepcional incluyendo a Aitor Luna, Luis Callejo y Ruth Díaz. Este proyecto representa uno de los trabajos más importantes de mi carrera, abordando un tema histórico sensible con gran responsabilidad.',
    highlights: [
      'Estreno en cines y Netflix en 2025',
      'Dirección: Agustín Díaz Yanes',
      'Reparto: Susana Abaitua, Aitor Luna, Luis Callejo, Ruth Díaz',
      'Basada en hechos reales (Operación Santuario)',
    ],
  },
  {
    id: 2,
    year: '2023',
    title: 'Nominación Goya Mejor Actor Revelación',
    category: 'Premio',
    icon: Award,
    shortDesc: 'Reconocimiento de la Academia de Cine por interpretación destacada',
    fullDesc: 'Nominación a los Premios Goya como Mejor Actor Revelación, el máximo reconocimiento del cine español. Esta nominación representa la culminación de años de trabajo y dedicación al craft actoral. Aunque no gané el premio, la nominación por sí misma fue un honor inmenso que validó mi trayectoria y abrió nuevas puertas en la industria cinematográfica española.',
    highlights: [
      'Premios Goya - Academia de Cine',
      'Categoría: Mejor Actor Revelación',
      'Reconocimiento nacional en cine español',
      'Impulsó mi visibilidad en la industria',
    ],
  },
  {
    id: 3,
    year: '2021',
    title: 'Gran Vía 0',
    category: 'Teatro',
    icon: TheaterIcon,
    shortDesc: 'Proyecto teatral innovador que marcó un hito en mi carrera escénica',
    fullDesc: '"Gran Vía 0" fue un proyecto teatral que combinó elementos de teatro documental con ficción contemporánea. La obra exploraba la vida en la icónica Gran Vía madrileña durante la pandemia, ofreciendo una mirada única a un momento histórico. Mi trabajo en esta producción me permitió experimentar con nuevas técnicas interpretativas y conectar profundamente con el público en un formato íntimo. Fue una experiencia transformadora que consolidó mi amor por las tablas.',
    highlights: [
      'Teatro contemporáneo experimental',
      'Temática: Madrid durante la pandemia',
      'Formato innovador teatro-documental',
      'Recepción crítica muy positiva',
    ],
  },
  {
    id: 4,
    year: '2019',
    title: '45 Revoluciones',
    category: 'Televisión',
    icon: Tv,
    shortDesc: 'Serie musical de Antena 3 ambientada en los años 60',
    fullDesc: '"45 Revoluciones" fue una serie de época que capturaba la efervescencia musical y social de la España de los años 60. Participé en varios episodios interpretando un personaje secundario que tuvo un arco narrativo significativo. La serie fue un éxito de audiencia y me permitió trabajar con un equipo técnico de primer nivel, además de aprender sobre la actuación para televisión en producciones de gran presupuesto. Esta experiencia fue fundamental para mi desarrollo como actor versátil.',
    highlights: [
      'Antena 3 - Serie de época musical',
      'Ambientación: España años 60',
      'Gran producción y equipo técnico',
      'Éxito de audiencia nacional',
    ],
  },
  {
    id: 5,
    year: '2018',
    title: 'Debut Profesional',
    category: 'Inicio',
    icon: Sparkles,
    shortDesc: 'Comienzo oficial de mi carrera como actor profesional',
    fullDesc: 'Después de completar mi formación en la ESAD de Sevilla y realizar prácticas con el CNTC, di el salto definitivo al mundo profesional en 2018. Mis primeros trabajos incluyeron papeles en cortometrajes independientes, teatro off y pequeños roles en televisión. Cada proyecto, por pequeño que fuera, representó una oportunidad de aprendizaje invaluable. Este periodo de "pagar mis cuotas" fue esencial para construir los cimientos de lo que vendría después. Aprendí la importancia de la persistencia, la preparación constante y el networking en esta industria.',
    highlights: [
      'Formación: ESAD Sevilla + CNTC',
      'Primeros trabajos: cortometrajes y teatro',
      'Construcción de red profesional',
      'Fundamentos de carrera establecidos',
    ],
  },
]

export default function Milestones() {
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-slate-900 via-black to-slate-950">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[120px]" />
      </div>

      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-yellow-400" strokeWidth={2} />
              <span className="text-sm font-medium text-slate-300 tracking-wide">Trayectoria</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white"
            >
              Hitos de Carrera
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed"
            >
              Los momentos más significativos de mi trayectoria profesional
            </motion.p>
          </div>

          <div className="relative">
            {/* Timeline vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-white/10" />

            <div className="space-y-6">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon
                const isExpanded = expandedId === milestone.id

                return (
                  <motion.div
                    key={milestone.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="relative"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-[26px] top-8 w-4 h-4 rounded-full bg-yellow-400 border-4 border-black z-10" />

                    <div className="ml-20">
                      <button
                        onClick={() => toggleExpand(milestone.id)}
                        className="w-full text-left group"
                      >
                        <div className="relative">
                          <div className="absolute -inset-[1px] bg-yellow-400/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <div className="relative bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.04] transition-all backdrop-blur-sm">
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex items-start gap-4 flex-1">
                                <div className="w-12 h-12 rounded-xl bg-yellow-400 flex items-center justify-center flex-shrink-0 shadow-lg">
                                  <Icon className="w-6 h-6 text-black" />
                                </div>
                                
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-3 mb-2">
                                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-slate-300">
                                      {milestone.year}
                                    </span>
                                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-slate-400">
                                      {milestone.category}
                                    </span>
                                  </div>
                                  <h3 className="text-xl font-bold text-white mb-2">
                                    {milestone.title}
                                  </h3>
                                  <p className="text-sm text-slate-400 leading-relaxed">
                                    {milestone.shortDesc}
                                  </p>
                                </div>
                              </div>

                              <motion.div
                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="flex-shrink-0"
                              >
                                <ChevronDown className="w-5 h-5 text-slate-400 group-hover:text-yellow-400 transition-colors" />
                              </motion.div>
                            </div>

                            <AnimatePresence>
                              {isExpanded && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="overflow-hidden"
                                >
                                  <div className="pt-6 mt-6 border-t border-white/10">
                                    <p className="text-slate-300 leading-relaxed mb-6">
                                      {milestone.fullDesc}
                                    </p>

                                    <div className="bg-white/[0.03] border border-white/10 rounded-xl p-5">
                                      <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                                        <Sparkles className="w-4 h-4 text-yellow-400" />
                                        Destacados
                                      </h4>
                                      <ul className="space-y-2">
                                        {milestone.highlights.map((highlight, idx) => (
                                          <li key={idx} className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-2 flex-shrink-0" />
                                            <span className="text-sm text-slate-400">{highlight}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>
                      </button>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-sm">
              <Calendar className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium text-slate-300">
                Más de 7 años de trayectoria profesional
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
