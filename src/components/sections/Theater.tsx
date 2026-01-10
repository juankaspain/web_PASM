'use client'

import { motion, useInView } from 'framer-motion'
import { Theater as TheaterIcon, Award, Users, Calendar, Sparkles } from 'lucide-react'
import { useRef } from 'react'

const theaterWorks = [
  {
    title: 'Fuente Ovejuna',
    company: 'Compañía Nacional de Teatro Clásico',
    period: '2015-2017',
    director: 'Helena Pimenta',
    description: 'Clásico de Lope de Vega. Trabajo intensivo en verso clásico español.',
    award: 'Nominado Mejor Actor Secundario - Unión de Actores',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'La villana de Getafe',
    company: 'Compañía Nacional de Teatro Clásico',
    period: '2015-2017',
    director: 'Helena Pimenta',
    description: 'Comedia del Siglo de Oro español.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Oliver Twist',
    company: 'Compañía La Tarasca',
    period: '2016',
    director: 'Teatro Musical',
    description: 'Adaptación musical del clásico de Charles Dickens.',
    award: 'Premio Mejor Espectáculo del Año 2016',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'Don Juan Tenorio',
    company: 'Compañía Viento Sur',
    period: '2014-2015',
    director: 'Teatro Clásico',
    description: 'Obra cumbre de José Zorrilla.',
    gradient: 'from-red-500 to-rose-500',
  },
  {
    title: 'Augusto',
    company: 'Compañía La Tarasca',
    period: '2013-2014',
    director: 'Teatro Histórico',
    description: 'Drama histórico sobre el emperador romano.',
    gradient: 'from-green-500 to-emerald-500',
  },
]

export default function Theater() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="theater" className="py-20 bg-gradient-to-b from-white via-purple-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-4"
            >
              <TheaterIcon className="w-4 h-4 text-purple-700" />
              <span className="text-purple-700 text-sm font-semibold">Teatro Profesional</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 bg-gradient-to-r from-purple-900 to-pink-700 bg-clip-text text-transparent">
              Trayectoria Teatral
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Formación en la <strong>Compañía Nacional de Teatro Clásico</strong> (2015-2017) 
              con Helena Pimenta, especializado en verso clásico español del Siglo de Oro.
            </p>
          </div>

          {/* Awards Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-2xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Reconocimientos</h3>
                  <p className="text-gray-700">
                    <strong>Premio Mejor Espectáculo del Año 2016</strong> por "Oliver Twist" • 
                    <strong> Nominado Mejor Actor Secundario</strong> por la Unión de Actores ("Fuente Ovejuna")
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Theater Works */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {theaterWorks.map((work, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${work.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />
                
                <div className="relative">
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${work.gradient} mb-4 shadow-lg`}>
                    <TheaterIcon className="w-5 h-5 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-xl mb-2 text-slate-900 group-hover:text-slate-700 transition-colors">
                    {work.title}
                  </h3>

                  {/* Company */}
                  <div className="flex items-center gap-2 text-sm text-purple-600 mb-2">
                    <Users className="w-4 h-4" />
                    <span className="font-semibold">{work.company}</span>
                  </div>

                  {/* Period */}
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{work.period}</span>
                  </div>

                  {/* Director */}
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Dir:</strong> {work.director}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {work.description}
                  </p>

                  {/* Award Badge */}
                  {work.award && (
                    <div className="flex items-start gap-2 bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                      <Sparkles className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-yellow-800 font-semibold leading-tight">
                        {work.award}
                      </p>
                    </div>
                  )}
                </div>

                {/* Bottom accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${work.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl`} />
              </motion.div>
            ))}
          </div>

          {/* Bottom Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 italic">
              "El teatro es la base de mi formación como actor. El trabajo en la CNTC 
              con Helena Pimenta fue fundamental para mi especialización en verso clásico."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
