'use client'

import { motion, useInView } from 'framer-motion'
import { GraduationCap, Award, ExternalLink } from 'lucide-react'
import { useRef } from 'react'

const training = [
  {
    title: 'Compañía Nacional de Teatro Clásico',
    organization: 'CNTC - Ministerio de Cultura',
    period: '2015-2017',
    director: 'Dir: Helena Pimenta',
    description: 'Formación de élite en verso clásico español, comedia del Siglo de Oro y técnicas de interpretación profesional. Dos años intensivos en la compañía nacional.',
    featured: true,
    url: 'https://teatroclasico.inaem.gob.es/',
  },
  {
    title: 'Escuela Superior de Arte Dramático',
    organization: 'ESAD Sevilla',
    period: '2008-2012',
    director: 'Titulación Oficial Universitaria',
    description: 'Formación completa en interpretación teatral, cine y televisión. Especialización en texto clásico y contemporáneo.',
    featured: true,
    url: 'https://www.esadsevilla.org',
  },
  {
    title: 'Work In Progress',
    organization: 'Escuela de Actuación Madrid',
    period: '2013-2015',
    director: 'Dir: Darío Facal',
    description: 'Perfeccionamiento en técnicas de cámara, casting y preparación de personajes para cine y televisión.',
    featured: false,
    url: 'https://estudio-workinprogress.com/',
  },
  {
    title: 'Especialización en Dobles de Acción',
    organization: 'NO-IDENTITY',
    period: '2012-2013',
    director: 'Formación en Especialistas de Acción',
    description: 'Formación en lucha escénica, control de nervios, coordinación de escenas de acción y trabajo de riesgo controlado.',
    featured: false,
    url: 'https://www.noidentity.es/',
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="relative py-32 overflow-hidden bg-gradient-to-b from-black via-slate-950 to-slate-900">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]" />
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
          {/* Training Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center mb-12"
            >
              <h3 className="text-4xl lg:text-5xl font-bold text-white mb-4">Formación Profesional</h3>
              <p className="text-slate-400 text-lg">Instituciones de prestigio donde he desarrollado mi carrera</p>
            </motion.div>
            
            <div className="max-w-5xl mx-auto space-y-6">
              {training.map((course, index) => (
                <motion.a
                  key={index}
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="group block cursor-pointer"
                >
                  <div className={`relative border rounded-2xl p-6 lg:p-8 backdrop-blur-sm hover:border-white/20 transition-all ${
                    course.featured 
                      ? 'bg-gradient-to-br from-yellow-900/10 to-orange-900/5 border-yellow-500/30 hover:bg-yellow-900/15 hover:border-yellow-400/50' 
                      : 'bg-white/[0.02] border-white/10 hover:bg-white/[0.04] hover:border-yellow-400/30'
                  }`}>
                    <div className="flex flex-col lg:flex-row items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                          course.featured 
                            ? 'bg-yellow-400/20 border border-yellow-400/30' 
                            : 'bg-white/5 border border-white/10'
                        }`}>
                          <GraduationCap className={`w-7 h-7 ${course.featured ? 'text-yellow-400' : 'text-slate-400'}`} />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <h4 className="text-xl lg:text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                            {course.title}
                          </h4>
                          {course.featured && (
                            <span className="px-3 py-1 rounded-full bg-yellow-400 text-black text-xs font-bold">
                              DESTACADO
                            </span>
                          )}
                        </div>
                        <p className="text-base text-slate-300 mb-2">{course.organization}</p>
                        <p className="text-slate-400 leading-relaxed mb-3">{course.description}</p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                          <span className="flex items-center gap-1">
                            <Award className="w-4 h-4" />
                            {course.period}
                          </span>
                          <span>•</span>
                          <span>{course.director}</span>
                        </div>
                      </div>

                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-yellow-400/10 rounded-lg flex items-center justify-center group-hover:bg-yellow-400/20 transition-all">
                          <ExternalLink className="w-5 h-5 text-yellow-400 group-hover:scale-110 group-hover:rotate-12 transition-all" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}