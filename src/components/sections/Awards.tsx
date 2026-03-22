'use client'

import { motion, useInView } from 'framer-motion'
import { Award, Star, Trophy, Calendar, Sparkles, Tv, Film } from 'lucide-react'
import { useRef } from 'react'

const awards = [
  {
    year: '2025',
    title: 'Nominación Equipo de Guión',
    work: 'La Moderna (TVE)',
    organization: 'Premios ALMA',
    role: 'Íñigo Peñalver (Protagonista)',
    type: 'nominacion',
    category: 'Televisión',
    international: false,
  },
  {
    year: '2024',
    title: 'Nominación Mejor Telenovela',
    work: 'La Moderna (TVE)',
    organization: 'Emmy Internacionales',
    role: 'Íñigo Peñalver (Protagonista)',
    type: 'nominacion',
    category: 'Televisión',
    international: true,
  },
  {
    year: '2023',
    title: 'Mejor Serie Diaria',
    work: 'La Moderna (TVE)',
    organization: 'Premio FICAL - Festival de Almería',
    role: 'Íñigo Peñalver (Protagonista)',
    type: 'premio',
    category: 'Televisión',
    international: false,
  },
  {
    year: '2020',
    title: 'Múltiples Nominaciones',
    work: 'Vis a vis: El Oasis (FOX)',
    organization: 'Premios Iris - Academia Televisión',
    role: 'Diego Ramala (Protagonista)',
    type: 'nominacion',
    category: 'Televisión',
    international: false,
  },
  {
    year: '2020',
    title: 'Nominación Mejor Actriz',
    work: 'Vis a vis: El Oasis (FOX)',
    organization: 'Fotogramas de Plata',
    role: 'Diego Ramala (Protagonista)',
    type: 'nominacion',
    category: 'Televisión',
    international: false,
  },
  {
    year: '2016',
    title: 'Mejor Espectáculo del Año',
    work: 'Oliver Twist (Musical)',
    organization: 'Festival de Teatro 2016',
    role: 'Jefe de Policía Duff',
    type: 'premio',
    category: 'Teatro',
    international: false,
  },
  {
    year: '2015',
    title: 'Nominación Mejor Actor Secundario',
    work: 'Fuente Ovejuna',
    organization: 'Unión de Actores',
    role: 'Compañía Nacional de Teatro Clásico',
    type: 'nominacion',
    category: 'Teatro',
    international: false,
  },
]

const recognitions = [
  {
    icon: Tv,
    title: 'La Moderna - Éxito Internacional',
    description:
      'Nominada Emmy Internacionales 2024 y ganadora Premio FICAL. Más de 350 episodios como protagonista en TVE.',
    year: '2023-2025',
    highlight: true,
  },
  {
    icon: Star,
    title: 'CNTC - Formación de Élite',
    description:
      'Compañía Nacional de Teatro Clásico bajo dirección de Helena Pimenta. Especialización en verso clásico español.',
    year: '2015-2017',
    highlight: false,
  },
  {
    icon: Film,
    title: 'La Caza - Serie Más Vista',
    description:
      'Protagonista en "La Caza: Guadiana", una de las series más vistas de RTVE Play y gran éxito de audiencia.',
    year: '2022-2024',
    highlight: true,
  },
  {
    icon: Trophy,
    title: 'Vis a vis: El Oasis',
    description:
      'Primer papel protagonista (Diego Ramala) en spin-off exitoso. Múltiples nominaciones Premios Iris y Fotogramas.',
    year: '2020',
    highlight: false,
  },
  {
    icon: Award,
    title: 'Hernán Cortés - Prime Video',
    description:
      'Producción histórica internacional de Amazon Prime Video. Estreno en Latinoamérica y España.',
    year: '2019',
    highlight: false,
  },
  {
    icon: Tv,
    title: 'Operación: Barrio Inglés',
    description:
      'Serie de época ambientada en la II Guerra Mundial. Nominaciones Premios ASECAN.',
    year: '2024',
    highlight: false,
  },
]

export default function Awards() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="awards"
      className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-black to-slate-900 py-24"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-yellow-500/5 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[600px] w-[600px] rounded-full bg-orange-500/5 blur-[120px]" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header ESTANDARIZADO */}
          <div className="mb-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm"
            >
              <Trophy className="h-4 w-4 text-yellow-400" strokeWidth={2} />
              <span className="text-sm font-medium tracking-wide text-slate-300">
                Reconocimientos
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6 text-4xl font-bold tracking-tight text-white lg:text-5xl"
            >
              Premios & Reconocimientos
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mx-auto mb-6 h-0.5 w-20 bg-yellow-400"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-400"
            >
              Trayectoria profesional reconocida por la industria audiovisual nacional e
              internacional
            </motion.p>
          </div>

          {/* Awards */}
          <div className="mx-auto mb-16 max-w-5xl">
            <h3 className="mb-10 flex items-center justify-center gap-2 text-center text-2xl font-bold text-white">
              <Award className="h-6 w-6 text-yellow-400" />
              Premios y Nominaciones
            </h3>
            <div className="space-y-6">
              {awards.map((award, index) => (
                <motion.div
                  key={`${award.year}-${award.organization}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="group"
                >
                  <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-yellow-400/30 hover:bg-white/[0.04] lg:p-8">
                    <div className="flex flex-col items-start gap-6 lg:flex-row">
                      <div className="flex-shrink-0">
                        <div
                          className={`flex h-16 w-16 items-center justify-center rounded-xl shadow-lg ${
                            award.type === 'premio' ? 'bg-yellow-400' : 'bg-orange-400'
                          }`}
                        >
                          {award.type === 'premio' ? (
                            <Trophy className="h-8 w-8 text-black" />
                          ) : (
                            <Star className="h-8 w-8 text-black" />
                          )}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="mb-3 flex flex-wrap items-center gap-3">
                          <span className="text-2xl font-bold text-white">
                            {award.year}
                          </span>
                          <span
                            className={`rounded-full px-3 py-1 text-xs font-bold ${
                              award.type === 'premio'
                                ? 'bg-yellow-400 text-black'
                                : 'bg-orange-400 text-black'
                            }`}
                          >
                            {award.type === 'premio' ? 'PREMIO' : 'NOMINACIÓN'}
                          </span>
                          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-slate-300">
                            {award.category}
                          </span>
                          {award.international && (
                            <span className="rounded-full border border-blue-500/30 bg-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-300">
                              INTERNACIONAL
                            </span>
                          )}
                        </div>
                        <h4 className="mb-2 text-xl font-bold text-white lg:text-2xl">
                          {award.title}
                        </h4>
                        <p className="mb-1 text-slate-300">
                          <span className="font-semibold">Producción:</span> {award.work}
                        </p>
                        <p className="mb-1 text-slate-300">
                          <span className="font-semibold">Organización:</span>{' '}
                          {award.organization}
                        </p>
                        <p className="mt-2 text-sm text-slate-400">
                          <span className="font-semibold">Papel:</span> {award.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Recognitions */}
          <div>
            <h3 className="mb-10 flex items-center justify-center gap-2 text-center text-2xl font-bold text-white">
              <Star className="h-6 w-6 text-yellow-400" />
              Hitos Profesionales
            </h3>
            <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
              {recognitions.map((recognition, index) => (
                <motion.div
                  key={recognition.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group"
                >
                  <div
                    className={`relative rounded-2xl border p-6 transition-all hover:border-white/20 ${
                      recognition.highlight
                        ? 'border-green-500/30 bg-gradient-to-br from-green-900/10 to-green-950/5 hover:bg-green-900/15'
                        : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.04]'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg ${
                          recognition.highlight
                            ? 'border border-green-400/20 bg-green-400/10'
                            : 'border border-yellow-400/20 bg-yellow-400/10'
                        }`}
                      >
                        <recognition.icon
                          className={`h-6 w-6 ${
                            recognition.highlight ? 'text-green-400' : 'text-yellow-400'
                          }`}
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="mb-2 text-lg font-bold text-white">
                          {recognition.title}
                        </h4>
                        <p className="mb-3 text-sm leading-relaxed text-slate-300">
                          {recognition.description}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-slate-300">
                          <Calendar className="h-3 w-3" />
                          {recognition.year}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Emmy Context */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mx-auto mt-16 max-w-4xl"
          >
            <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm">
              <div className="flex flex-col items-center gap-4">
                <Sparkles className="h-8 w-8 text-yellow-400" />
                <p className="text-center text-lg leading-relaxed text-slate-300">
                  <span className="font-semibold text-white">
                    Emmy Internacionales 2024
                  </span>
                  : "La Moderna" nominada junto a "La Promesa" en la categoría Mejor
                  Telenovela. Ambas series de RTVE compitieron con producciones de 21
                  países.
                </p>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Award className="h-4 w-4 text-yellow-400" />
                  <span>
                    Trayectoria respaldada por la industria nacional e internacional
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
