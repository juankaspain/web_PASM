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
    description: 'Nominada a los Emmy Internacionales 2024 y ganadora del Premio FICAL. Más de 350 episodios como protagonista en TVE.',
    year: '2023-2025',
    highlight: true,
  },
  {
    icon: Star,
    title: 'Compañía Nacional Teatro Clásico',
    description: 'Seleccionado para formar parte de la CNTC bajo dirección de Helena Pimenta. Formación de élite en verso clásico español.',
    year: '2015-2017',
    highlight: false,
  },
  {
    icon: Film,
    title: 'La Caza - Serie Más Vista RTVE',
    description: 'Protagonista en "La Caza: Guadiana", una de las series más vistas de RTVE Play y gran éxito de audiencia en La 1.',
    year: '2022-2024',
    highlight: true,
  },
  {
    icon: Trophy,
    title: 'Vis a vis: El Oasis - Protagonista',
    description: 'Primer papel protagonista (Diego Ramala) en el spin-off de la exitosa serie. Múltiples nominaciones en Premios Iris y Fotogramas.',
    year: '2020',
    highlight: false,
  },
  {
    icon: Award,
    title: 'Hernán Cortés - Prime Video',
    description: 'Seleccionado para producción histórica internacional de Amazon Prime Video. Estreno en Latinoamérica y España.',
    year: '2019',
    highlight: false,
  },
  {
    icon: Tv,
    title: 'Operación: Barrio Inglés - TVE',
    description: 'Serie de época ambientada en la II Guerra Mundial. Nominaciones en Premios ASECAN por banda sonora original.',
    year: '2024',
    highlight: false,
  },
]

export default function Awards() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="awards" className="relative py-32 overflow-hidden bg-gradient-to-b from-slate-950 via-black to-slate-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px]" />
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
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <Trophy className="w-4 h-4 text-yellow-400" strokeWidth={2} />
              <span className="text-sm font-medium text-slate-300 tracking-wide">Reconocimientos</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white"
            >
              Premios & Reconocimientos
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed"
            >
              Trayectoria profesional reconocida por la industria audiovisual nacional e internacional
            </motion.p>
          </div>

          {/* Awards */}
          <div className="max-w-5xl mx-auto mb-20">
            <h3 className="text-2xl font-bold mb-10 text-center flex items-center justify-center gap-2 text-white">
              <Award className="w-6 h-6 text-yellow-400" />
              Premios y Nominaciones
            </h3>
            <div className="space-y-6">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="relative group"
                >
                  <div className="absolute -inset-[1px] bg-yellow-400/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-white/[0.02] border border-white/10 rounded-2xl p-6 lg:p-8 hover:bg-white/[0.04] hover:border-white/20 transition-all">
                    <div className="flex flex-col lg:flex-row items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className={`w-16 h-16 rounded-xl flex items-center justify-center shadow-lg ${
                          award.type === 'premio' ? 'bg-yellow-400' : 'bg-orange-400'
                        }`}>
                          {award.type === 'premio' ? (
                            <Trophy className="w-8 h-8 text-black" />
                          ) : (
                            <Star className="w-8 h-8 text-black" />
                          )}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <span className="text-2xl font-bold text-white">{award.year}</span>
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                            award.type === 'premio' 
                              ? 'bg-yellow-400 text-black' 
                              : 'bg-orange-400 text-black'
                          }`}>
                            {award.type === 'premio' ? 'PREMIO' : 'NOMINACIÓN'}
                          </span>
                          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-slate-300 border border-white/20">
                            {award.category}
                          </span>
                          {award.international && (
                            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                              INTERNACIONAL
                            </span>
                          )}
                        </div>
                        <h4 className="text-xl lg:text-2xl font-bold mb-2 text-white">{award.title}</h4>
                        <p className="text-slate-300 mb-1">
                          <span className="font-semibold">Producción:</span> {award.work}
                        </p>
                        <p className="text-slate-300 mb-1">
                          <span className="font-semibold">Organización:</span> {award.organization}
                        </p>
                        <p className="text-slate-400 text-sm mt-2">
                          <span className="font-semibold">Papel:</span> {award.role}
                        </p>
                      </div>
                    </div>
                    <motion.div 
                      className={`absolute bottom-0 left-0 h-[2px] ${
                        award.type === 'premio' ? 'bg-yellow-400' : 'bg-orange-400'
                      }`}
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Recognitions */}
          <div>
            <h3 className="text-2xl font-bold mb-10 text-center flex items-center justify-center gap-2 text-white">
              <Star className="w-6 h-6 text-yellow-400" />
              Hitos Profesionales & Producciones Destacadas
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {recognitions.map((recognition, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="relative group"
                >
                  <div className={`absolute -inset-[1px] rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    recognition.highlight ? 'bg-green-400/20' : 'bg-yellow-400/20'
                  }`} />
                  <div className={`relative border rounded-2xl p-6 hover:border-white/20 transition-all ${
                    recognition.highlight 
                      ? 'bg-gradient-to-br from-green-900/10 to-green-950/5 border-green-500/30 hover:bg-green-900/15'
                      : 'bg-white/[0.02] border-white/10 hover:bg-white/[0.04]'
                  }`}>
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 ${
                        recognition.highlight 
                          ? 'bg-green-400/10 border border-green-400/20'
                          : 'bg-yellow-400/10 border border-yellow-400/20'
                      }`}>
                        <recognition.icon className={`w-6 h-6 ${
                          recognition.highlight ? 'text-green-400' : 'text-yellow-400'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg mb-2 text-white">{recognition.title}</h4>
                        <p className="text-slate-300 text-sm leading-relaxed mb-3">{recognition.description}</p>
                        <div className="flex items-center gap-2 text-xs text-slate-400">
                          <Calendar className="w-3 h-3" />
                          {recognition.year}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-20 text-center"
          >
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute -inset-4 bg-yellow-400/5 rounded-2xl blur-2xl" />
                <div className="relative bg-white/[0.02] border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                  <div className="flex flex-col items-center gap-4">
                    <Sparkles className="w-8 h-8 text-yellow-400" />
                    <p className="text-lg text-slate-300 leading-relaxed">
                      <span className="font-semibold text-white">Emmy Internacionales 2024</span>: "La Moderna" nominada junto a "La Promesa" en la categoría de Mejor Telenovela. Ambas series de RTVE compitieron con producciones de 21 países. "La Promesa" resultó ganadora en la gala celebrada en Nueva York.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-slate-400 mt-2">
                      <Award className="w-4 h-4 text-yellow-400" />
                      <span>Trayectoria profesional respaldada por la industria nacional e internacional</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
