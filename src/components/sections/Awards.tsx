'use client'

import { motion, useInView } from 'framer-motion'
import { Award, Star, Trophy, Calendar, Sparkles } from 'lucide-react'
import { useRef } from 'react'

const awards = [
  {
    year: '2016',
    title: 'Mejor Espectáculo del Año',
    work: 'Oliver Twist (Musical)',
    organization: 'Producción CIA La Tarasca',
    role: 'Jefe de Policía Duff',
    type: 'premio',
  },
  {
    year: '2015',
    title: 'Nominación Mejor Actor Secundario',
    work: 'Fuente Ovejuna',
    organization: 'Unión de Actores',
    role: 'Compañía Nacional de Teatro Clásico',
    type: 'nominacion',
  },
]

const recognitions = [
  {
    icon: Star,
    title: 'Compañía Nacional Teatro Clásico',
    description: 'Seleccionado para formar parte de la CNTC bajo dirección de Helena Pimenta',
    year: '2015-2017',
  },
  {
    icon: Trophy,
    title: 'Protagonista Serie Diaria TVE',
    description: '236 episodios como Íñigo Peñalver en La Moderna, el galán de las tardes',
    year: '2023-2024',
  },
  {
    icon: Award,
    title: 'Prime Video International',
    description: 'Seleccionado para Hernán, producción histórica de Amazon para Latinoamérica',
    year: '2019',
  },
  {
    icon: Star,
    title: 'Vis a vis: El Oasis',
    description: 'Primer papel protagonista en spin-off de la exitosa serie de Antena 3',
    year: '2020',
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
              Logros y reconocimientos a lo largo de mi trayectoria profesional
            </motion.p>
          </div>

          {/* Awards */}
          <div className="max-w-4xl mx-auto mb-20">
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
                  <div className="relative bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.04] hover:border-white/20 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-xl bg-yellow-400 flex items-center justify-center shadow-lg">
                          {award.type === 'premio' ? (
                            <Trophy className="w-8 h-8 text-black" />
                          ) : (
                            <Star className="w-8 h-8 text-black" />
                          )}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl font-bold text-white">{award.year}</span>
                          <span className="px-3 py-1 rounded-full text-xs font-bold bg-yellow-400 text-black">
                            {award.type === 'premio' ? 'PREMIO' : 'NOMINACIÓN'}
                          </span>
                        </div>
                        <h4 className="text-xl font-bold mb-2 text-white">{award.title}</h4>
                        <p className="text-slate-300 mb-1">
                          <span className="font-semibold">Obra:</span> {award.work}
                        </p>
                        <p className="text-slate-300 mb-1">
                          <span className="font-semibold">Organización:</span> {award.organization}
                        </p>
                        <p className="text-slate-400 text-sm">{award.role}</p>
                      </div>
                    </div>
                    <motion.div 
                      className="absolute bottom-0 left-0 h-[2px] bg-yellow-400"
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
              Hitos Profesionales
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {recognitions.map((recognition, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="relative group"
                >
                  <div className="absolute -inset-[1px] bg-yellow-400/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.04] hover:border-white/20 transition-all">
                    <div className="flex items-start gap-4">
                      <recognition.icon className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-lg mb-2 text-white">{recognition.title}</h4>
                        <p className="text-slate-300 text-sm mb-2">{recognition.description}</p>
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
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-sm">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium text-slate-300">
                Trayectoria profesional respaldada por la industria
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
