'use client'

import { useInView } from '@/hooks/useInView'
import {
  Theater as TheaterIcon,
  Award,
  Users,
  Calendar,
  Crown,
  Star,
  Trophy,
  Zap,
} from 'lucide-react'

const theaterWorks = [
  {
    title: 'Donde nacen las palabras',
    company: 'DMLP Producciones',
    period: '2025-2026',
    director: 'Ángel Caballero',
    description:
      'Continuación de la aclamada "Donde mueren las palabras" (finalista al Premio Nacional de Literatura Dramática). Comedia sobre el reencuentro de amigos de la infancia que, tras años de distanciamiento, se ven obligados a confinarse juntos durante la pandemia.',
    award: 'En Cartel - Gira Nacional 2026',
    awardEntity: 'Teatro Lara Madrid & Palacio de la Prensa',
    featured: true,
    current: true,
    category: 'Comedia Contemporánea',
    venues:
      'Estreno: Teatro Cervantes Málaga | Teatro Lara Madrid | Palacio de la Prensa | Gira Nacional',
  },
  {
    title: 'Fuente Ovejuna',
    company: 'Compañía Nacional de Teatro Clásico',
    period: '2015-2017',
    director: 'Helena Pimenta',
    description:
      'Clásico de Lope de Vega bajo dirección de Helena Pimenta. Trabajo intensivo en verso clásico español, comedia del Siglo de Oro y técnicas de interpretación profesional.',
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
    description:
      'Comedia del Siglo de Oro español. Profundización en técnicas de comedia clásica, verso barroco y personajes de enredo.',
    featured: true,
    category: 'Comedia Clásica',
  },
  {
    title: 'Oliver Twist',
    company: 'Compañía La Tarasca',
    period: '2016',
    director: 'Andrés Lima',
    description:
      'Adaptación musical del clásico de Charles Dickens. Integración de canto, danza y actuación en espectáculo de gran formato.',
    award: 'Premio Mejor Espectáculo del Año',
    awardEntity: 'Festival de Teatro 2016',
    category: 'Musical',
  },
  {
    title: 'Don Juan Tenorio',
    company: 'Compañía Viento Sur',
    period: '2014-2015',
    director: 'José Pascual',
    description:
      'Obra cumbre de José Zorrilla. Interpretación del mito de Don Juan con enfoque contemporáneo manteniendo la esencia del verso clásico.',
    category: 'Teatro Clásico',
  },
  {
    title: 'Augusto',
    company: 'Compañía La Tarasca',
    period: '2013-2014',
    director: 'Ricardo Iniesta',
    description:
      'Drama histórico sobre el primer emperador romano. Composición de personaje histórico con rigor y profundidad psicológica.',
    category: 'Teatro Histórico',
  },
]

export default function Theater() {
  const { ref, isInView } = useInView({ once: true, margin: '-80px' })

  return (
    <section
      id="theater"
      className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-black py-24"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-20 h-[600px] w-[600px] rounded-full bg-yellow-500/5 blur-[120px]" />
        <div className="absolute bottom-20 left-0 h-[500px] w-[500px] rounded-full bg-amber-500/5 blur-[100px]" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-[600ms] ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
        >
          {/* Header ESTANDARIZADO */}
          <div className="mb-16 text-center">
            <div
              className={`mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm transition-all delay-100 duration-[500ms] ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-2.5 opacity-0'}`}
            >
              <TheaterIcon className="h-4 w-4 text-yellow-400" strokeWidth={2} />
              <span className="text-sm font-medium tracking-wide text-slate-300">
                Teatro Profesional
              </span>
            </div>

            <h2
              className={`mb-6 text-4xl font-bold tracking-tight text-white transition-all delay-200 duration-[500ms] lg:text-5xl ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-2.5 opacity-0'}`}
            >
              Trayectoria Teatral
            </h2>

            <div
              className={`mx-auto mb-6 h-0.5 w-20 bg-yellow-400 transition-all delay-300 duration-[800ms] ${isInView ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}
            />

            <p
              className={`mx-auto max-w-3xl text-lg leading-relaxed text-slate-400 transition-all delay-[400ms] duration-[500ms] ${isInView ? 'opacity-100' : 'opacity-0'}`}
            >
              Formación de élite en la Compañía Nacional de Teatro Clásico bajo dirección
              de Helena Pimenta
            </p>
          </div>

          {/* Feature Box */}
          <div
            className={`mx-auto mb-12 max-w-5xl transition-all delay-[400ms] duration-[600ms] ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
          >
            <div className="group relative">
              <div className="absolute -inset-[1px] rounded-2xl bg-yellow-400/20 opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-100" />

              <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-8 shadow-2xl backdrop-blur-xl">
                <div className="flex flex-col items-center gap-6 lg:flex-row">
                  <div className="flex-shrink-0">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400">
                      <Crown className="h-8 w-8 text-black" strokeWidth={2.5} />
                    </div>
                  </div>

                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="mb-2 text-xl font-bold text-white">
                      Formación de Élite - CNTC
                    </h3>
                    <p className="leading-relaxed text-slate-300">
                      Dos años de formación profesional intensiva (2015-2017) en la
                      Compañía Nacional de Teatro Clásico bajo dirección de Helena
                      Pimenta. Especialización en verso clásico español y comedia del
                      Siglo de Oro.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Awards Grid */}
          <div
            className={`mx-auto mb-16 max-w-5xl transition-all delay-[500ms] duration-[600ms] ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all hover:border-yellow-400/30 hover:bg-white/[0.04]">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-yellow-400/30 bg-yellow-400/20">
                    <Trophy className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="mb-0.5 text-xs uppercase tracking-wider text-slate-500">
                      Premio 2016
                    </p>
                    <p className="mb-0.5 text-base font-semibold text-white">
                      Mejor Espectáculo del Año
                    </p>
                    <p className="text-sm text-slate-400">Oliver Twist</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all hover:border-yellow-400/30 hover:bg-white/[0.04]">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-yellow-400/30 bg-yellow-400/20">
                    <Star className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="mb-0.5 text-xs uppercase tracking-wider text-slate-500">
                      Nominación 2015
                    </p>
                    <p className="mb-0.5 text-base font-semibold text-white">
                      Mejor Actor Secundario
                    </p>
                    <p className="text-sm text-slate-400">Unión de Actores</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Works List */}
          <div className="mx-auto max-w-6xl space-y-6">
            {theaterWorks.map((work, index) => (
              <div
                key={work.title}
                className={`group transition-all duration-[500ms] hover-right ${isInView ? 'translate-x-0 opacity-100' : '-translate-x-5 opacity-0'}`}
                style={{ transitionDelay: `${600 + index * 80}ms` }}
              >
                <div className="relative">
                  <div
                    className={`absolute bottom-0 left-0 top-0 w-[2px] origin-top scale-y-0 transition-transform duration-300 group-hover:scale-y-100 ${work.current ? 'bg-green-400' : 'bg-yellow-400'}`}
                  />

                  <div
                    className={`relative rounded-xl border p-6 backdrop-blur-sm transition-all hover:border-white/20 lg:p-8 ${
                      work.current
                        ? 'border-green-500/30 bg-gradient-to-br from-green-900/10 to-green-950/5 hover:bg-green-900/15'
                        : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.04]'
                    }`}
                  >
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
                      <div className="flex-shrink-0 lg:w-64">
                        <div className="mb-4 flex items-center gap-3">
                          <div
                            className={`flex h-10 w-10 items-center justify-center rounded-lg border ${
                              work.current
                                ? 'border-green-400/20 bg-green-400/10'
                                : 'border-yellow-400/20 bg-yellow-400/10'
                            }`}
                          >
                            <TheaterIcon
                              className={`h-5 w-5 ${work.current ? 'text-green-400' : 'text-yellow-400'}`}
                            />
                          </div>
                          {work.current && (
                            <div className="animate-pulse rounded-full border border-green-400/30 bg-green-400/20 px-3 py-1">
                              <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-green-300">
                                <Zap className="h-3 w-3" />
                                En Cartel
                              </span>
                            </div>
                          )}
                          {work.featured && !work.current && (
                            <div className="rounded-full border border-yellow-400/30 bg-yellow-400/20 px-3 py-1">
                              <span className="text-xs font-bold uppercase tracking-wide text-yellow-300">
                                CNTC
                              </span>
                            </div>
                          )}
                        </div>

                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2 text-slate-400">
                            <Users className="h-4 w-4" />
                            <span className="text-slate-300">{work.company}</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-400">
                            <Calendar className="h-4 w-4" />
                            <span>{work.period}</span>
                          </div>
                          <p className="text-xs text-slate-500">Dir: {work.director}</p>
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="mb-3 flex items-start justify-between gap-4">
                          <h3 className="text-xl font-bold text-white lg:text-2xl">
                            {work.title}
                          </h3>
                          <span className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                            {work.category}
                          </span>
                        </div>

                        <p className="mb-4 leading-relaxed text-slate-400">
                          {work.description}
                        </p>

                        {work.venues && (
                          <p className="mb-4 text-sm text-slate-500">{work.venues}</p>
                        )}

                        {work.award && (
                          <div
                            className={`inline-flex items-start gap-2 rounded-lg border px-4 py-2.5 ${
                              work.current
                                ? 'border-green-400/20 bg-green-400/5'
                                : 'border-yellow-400/20 bg-yellow-400/5'
                            }`}
                          >
                            <Award
                              className={`mt-0.5 h-4 w-4 flex-shrink-0 ${work.current ? 'text-green-400' : 'text-yellow-400'}`}
                            />
                            <div>
                              <p className="text-sm font-semibold text-white">
                                {work.award}
                              </p>
                              <p className="text-xs text-slate-300">{work.awardEntity}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
