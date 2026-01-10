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
    shortDesc: 'Película dirigida por Agustín Díaz Yanes, estrenada en cines y disponible en Netflix',
    fullDesc: 'Interpretación de Antonio, novio de la protagonista Amaia (Susana Abaitua), una guardia civil infiltrada en ETA. La película, basada en la Operación Santuario contra ETA, se estrenó en cines en octubre de 2025 y posteriormente en Netflix. Producida por J.A. Bayona, Belén Atienza y Sandra Hermida, el film cuenta con un reparto excepcional que incluye a Aitor Luna, Luis Callejo y Andrés Gertrúdix. Este proyecto representa uno de los trabajos más importantes de mi carrera, abordando un tema histórico sensible con gran responsabilidad.',
    highlights: [
      'Estreno: Octubre 2025 (cines) y Netflix',
      'Dirección: Agustín Díaz Yanes',
      'Producción: J.A. Bayona, Belén Atienza, Sandra Hermida',
      'Basada en hechos reales (Operación Santuario)',
    ],
  },
  {
    id: 2,
    year: '2023-2024',
    title: 'Salón de té La Moderna',
    category: 'Televisión',
    icon: Tv,
    shortDesc: 'Protagonista en la exitosa serie diaria de RTVE ambientada en el Madrid de 1930',
    fullDesc: 'Papel protagonista de Íñigo Peñalver en "La Moderna", serie de RTVE basada en la novela "Tea rooms" de Luisa Carnés. La ficción se estrenó el 27 de septiembre de 2023 en prime time de forma multicanal (La 1, La 2, Clan y RTVE Play), convirtiéndose en un gran éxito de audiencia. Durante 236 episodios, interpreté a un joven empresario del Madrid de los años 30, trabajando junto a Helena Ezquerro, Stéphanie Magnin y José Luis García-Pérez. Este papel me consolidó como uno de los nuevos galanes de la televisión española.',
    highlights: [
      'RTVE - Producción Mediawan y Boomerang TV',
      '236 episodios (2023-2024)',
      'Estreno multicanal: 27 septiembre 2023',
      'Papel protagonista: Íñigo Peñalver',
    ],
  },
  {
    id: 3,
    year: '2020',
    title: 'Vis a vis: El Oasis',
    category: 'Televisión',
    icon: Tv,
    shortDesc: 'Primer papel protagonista en la aclamada serie de Star Channel (FOX)',
    fullDesc: '"Vis a vis: El Oasis" marcó un punto de inflexión en mi carrera al conseguir mi primer personaje protagonista. Interpreté a Diego "Dieguito" Ramala, hijastro de un narcotraficante, en esta miniserie spin-off de la exitosa "Vis a vis". El personaje, descrito como "un alma movida por un sentimiento puro de amor", me permitió explorar registros dramáticos profundos. La serie se estrenó el 20 de abril de 2020 en FOX (Star Channel) con 6 episodios, consolidando mi presencia en producciones de alto nivel.',
    highlights: [
      'Star Channel (FOX) - 6 episodios',
      'Estreno: 20 abril 2020',
      'Primer papel protagonista',
      'Personaje: Diego "Dieguito" Ramala',
    ],
  },
  {
    id: 4,
    year: '2020',
    title: 'Hernán',
    category: 'Televisión',
    icon: Tv,
    shortDesc: 'Serie histórica de Amazon Prime Video sobre la conquista de México',
    fullDesc: 'Interpretación de Gonzalo de Sandoval, personaje histórico y capitán leal a Hernán Cortés, en esta ambiciosa producción de Amazon Prime Video. La serie recrea la conquista de México y me permitió trabajar en una superproducción internacional rodada en locaciones de México. Durante 8 episodios, di vida a uno de los conquistadores más importantes de la época, un trabajo que me abrió las puertas a producciones de mayor envergadura. México se convirtió para mí, como para mi personaje, en una tierra de oportunidades.',
    highlights: [
      'Amazon Prime Video',
      '8 episodios - Serie histórica',
      'Rodaje en México',
      'Personaje histórico: Gonzalo de Sandoval',
    ],
  },
  {
    id: 5,
    year: '2017-2021',
    title: 'Primeros pasos en televisión',
    category: 'Televisión',
    icon: Sparkles,
    shortDesc: 'Inicio profesional con apariciones en series de televisión española',
    fullDesc: 'Después de completar mi formación en la ESAD de Sevilla y trabajar con la Compañía Nacional de Teatro Clásico (CNTC), comencé mi carrera en televisión con papeles episódicos en series como "Centro Médico" (RTVE, 2017), "Grupo 2 Homicidios" (Cuatro, 2017) y "Amar es para siempre" (Antena 3). En 2021 conseguí un papel más relevante en "Estoy vivo" (La 1), interpretando a Mikel Uribe durante 12 episodios en la cuarta temporada. Cada proyecto, por pequeño que fuera, representó una oportunidad de aprendizaje invaluable que construyó los cimientos de mi carrera.',
    highlights: [
      'Formación: ESAD Sevilla + CNTC',
      'Primeras series: Centro Médico, Grupo 2 Homicidios',
      'Estoy vivo (2021): Mikel Uribe - 12 episodios',
      'Construcción de trayectoria profesional',
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
                Más de 8 años de trayectoria profesional
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
