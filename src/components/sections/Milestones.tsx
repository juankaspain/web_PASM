'use client'

import { useInView } from '@/hooks/useInView'
import { Film, Tv, Sparkles, ChevronDown, Calendar } from 'lucide-react'
import { useState } from 'react'

const milestones = [
  {
    id: 1,
    year: '2025',
    title: 'Un fantasma en la batalla',
    category: 'Cine',
    icon: Film,
    shortDesc:
      'Película dirigida por Agustín Díaz Yanes, estrenada en cines y disponible en Netflix',
    fullDesc:
      'Interpretación de Antonio, novio de la protagonista Amaia (Susana Abaitua), una guardia civil infiltrada en ETA. La película, basada en la Operación Santuario contra ETA, se estrenó en cines en octubre de 2025 y posteriormente en Netflix. Producida por J.A. Bayona, Belén Atienza y Sandra Hermida, el film cuenta con un reparto excepcional que incluye a Aitor Luna, Luis Callejo y Andrés Gertrúdix. Este proyecto representa uno de los trabajos más importantes de mi carrera, abordando un tema histórico sensible con gran responsabilidad.',
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
    shortDesc:
      'Protagonista en la exitosa serie diaria de RTVE ambientada en el Madrid de 1930',
    fullDesc:
      'Papel protagonista de Íñigo Peñalver en "La Moderna", serie de RTVE basada en la novela "Tea rooms" de Luisa Carnés. La ficción se estrenó el 27 de septiembre de 2023 en prime time de forma multicanal (La 1, La 2, Clan y RTVE Play), convirtiéndose en un gran éxito de audiencia. Durante 236 episodios, interpreté a un joven empresario del Madrid de los años 30, trabajando junto a Helena Ezquerro, Stéphanie Magnin y José Luis García-Pérez. Este papel me consolidó como uno de los nuevos galanes de la televisión española.',
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
    fullDesc:
      '"Vis a vis: El Oasis" marcó un punto de inflexión en mi carrera al conseguir mi primer personaje protagonista. Interpreté a Diego "Dieguito" Ramala, hijastro de un narcotraficante, en esta miniserie spin-off de la exitosa "Vis a vis". El personaje, descrito como "un alma movida por un sentimiento puro de amor", me permitió explorar registros dramáticos profundos. La serie se estrenó el 20 de abril de 2020 en FOX (Star Channel) con 6 episodios, consolidando mi presencia en producciones de alto nivel.',
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
    fullDesc:
      'Interpretación de Gonzalo de Sandoval, personaje histórico y capitán leal a Hernán Cortés, en esta ambiciosa producción de Amazon Prime Video. La serie recrea la conquista de México y me permitió trabajar en una superproducción internacional rodada en locaciones de México. Durante 8 episodios, di vida a uno de los conquistadores más importantes de la época, un trabajo que me abrió las puertas a producciones de mayor envergadura. México se convirtió para mí, como para mi personaje, en una tierra de oportunidades.',
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
    fullDesc:
      'Después de completar mi formación en la ESAD de Sevilla y trabajar con la Compañía Nacional de Teatro Clásico (CNTC), comencé mi carrera en televisión con papeles episódicos en series como "Centro Médico" (RTVE, 2017), "Grupo 2 Homicidios" (Cuatro, 2017) y "Amar es para siempre" (Antena 3). En 2021 conseguí un papel más relevante en "Estoy vivo" (La 1), interpretando a Mikel Uribe durante 12 episodios en la cuarta temporada. Cada proyecto, por pequeño que fuera, representó una oportunidad de aprendizaje invaluable que construyó los cimientos de mi carrera.',
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
  const { ref, isInView } = useInView({ once: true, margin: '-80px' })

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-black to-slate-950 py-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-yellow-500/5 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[600px] w-[600px] rounded-full bg-yellow-500/5 blur-[120px]" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-[600ms] ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
        >
          <div className="mb-16 text-center">
            <div
              className={`mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm transition-all delay-100 duration-[500ms] ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-2.5 opacity-0'}`}
            >
              <Sparkles className="h-4 w-4 text-yellow-400" strokeWidth={2} />
              <span className="text-sm font-medium tracking-wide text-slate-300">
                Trayectoria
              </span>
            </div>

            <h2
              className={`mb-6 text-5xl font-bold tracking-tight text-white transition-all delay-200 duration-[500ms] lg:text-6xl ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-2.5 opacity-0'}`}
            >
              Hitos de Carrera
            </h2>

            <p
              className={`mx-auto max-w-3xl text-lg leading-relaxed text-slate-400 transition-all delay-300 duration-[500ms] ${isInView ? 'opacity-100' : 'opacity-0'}`}
            >
              Los momentos más significativos de mi trayectoria profesional
            </p>
          </div>

          <div className="relative">
            {/* Timeline vertical line */}
            <div className="absolute bottom-0 left-8 top-0 w-[2px] bg-white/10" />

            <div className="space-y-6">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon
                const isExpanded = expandedId === milestone.id

                return (
                  <div
                    key={milestone.id}
                    className={`relative transition-all duration-[600ms] ${isInView ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}
                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-[26px] top-8 z-10 h-4 w-4 rounded-full border-4 border-black bg-yellow-400" />

                    <div className="ml-20">
                      <button
                        onClick={() => toggleExpand(milestone.id)}
                        aria-expanded={isExpanded}
                        aria-label={`${milestone.title} (${milestone.year}) - ${isExpanded ? 'Contraer' : 'Expandir'} detalles`}
                        className="group w-full text-left"
                      >
                        <div className="relative">
                          <div className="absolute -inset-[1px] rounded-2xl bg-yellow-400/20 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100" />
                          <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all hover:bg-white/[0.04]">
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex flex-1 items-start gap-4">
                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-yellow-400 shadow-lg">
                                  <Icon className="h-6 w-6 text-black" />
                                </div>

                                <div className="min-w-0 flex-1">
                                  <div className="mb-2 flex items-center gap-3">
                                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold text-slate-300">
                                      {milestone.year}
                                    </span>
                                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold text-slate-300">
                                      {milestone.category}
                                    </span>
                                  </div>
                                  <h3 className="mb-2 text-xl font-bold text-white">
                                    {milestone.title}
                                  </h3>
                                  <p className="text-sm leading-relaxed text-slate-400">
                                    {milestone.shortDesc}
                                  </p>
                                </div>
                              </div>

                              <div
                                className={`flex-shrink-0 transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}
                              >
                                <ChevronDown className="h-5 w-5 text-slate-400 transition-colors group-hover:text-yellow-400" />
                              </div>
                            </div>

                            <div
                              className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                              <div className="mt-6 border-t border-white/10 pt-6">
                                <p className="mb-6 leading-relaxed text-slate-300">
                                  {milestone.fullDesc}
                                </p>

                                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                                  <h4 className="mb-3 flex items-center gap-2 text-sm font-bold text-white">
                                    <Sparkles className="h-4 w-4 text-yellow-400" />
                                    Destacados
                                  </h4>
                                  <ul className="space-y-2">
                                    {milestone.highlights.map((highlight, idx) => (
                                      <li
                                        key={idx}
                                        className="flex items-start gap-3"
                                      >
                                        <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-yellow-400" />
                                        <span className="text-sm text-slate-400">
                                          {highlight}
                                        </span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div
            className={`mt-16 text-center transition-all delay-[1000ms] duration-[600ms] ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 backdrop-blur-sm">
              <Calendar className="h-5 w-5 text-yellow-400" />
              <span className="text-sm font-medium text-slate-300">
                Más de 8 años de trayectoria profesional
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
