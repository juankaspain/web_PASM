'use client'

import { motion } from 'framer-motion'
import { Award, Star, Trophy, Calendar } from 'lucide-react'

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
  return (
    <section id="awards" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="w-8 h-8 text-yellow-400" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-center">
              Premios & Reconocimientos
            </h2>
          </div>
          <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto">
            Logros y reconocimientos a lo largo de mi trayectoria profesional.
          </p>

          {/* Awards */}
          <div className="max-w-4xl mx-auto mb-16">
            <h3 className="text-2xl font-serif font-bold mb-8 text-center flex items-center justify-center gap-2">
              <Award className="w-6 h-6 text-yellow-400" />
              Premios y Nominaciones
            </h3>
            <div className="space-y-6">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                        award.type === 'premio' ? 'bg-yellow-500' : 'bg-blue-500'
                      }`}>
                        {award.type === 'premio' ? (
                          <Trophy className="w-8 h-8 text-white" />
                        ) : (
                          <Star className="w-8 h-8 text-white" />
                        )}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl font-bold text-yellow-400">{award.year}</span>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          award.type === 'premio' ? 'bg-yellow-500 text-white' : 'bg-blue-500 text-white'
                        }`}>
                          {award.type === 'premio' ? 'PREMIO' : 'NOMINACIÓN'}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold mb-2">{award.title}</h4>
                      <p className="text-gray-300 mb-1">
                        <strong>Obra:</strong> {award.work}
                      </p>
                      <p className="text-gray-300 mb-1">
                        <strong>Organización:</strong> {award.organization}
                      </p>
                      <p className="text-gray-400 text-sm">{award.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Recognitions */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-8 text-center flex items-center justify-center gap-2">
              <Star className="w-6 h-6 text-yellow-400" />
              Hitos Profesionales
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {recognitions.map((recognition, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-yellow-400/50 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <recognition.icon className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-bold text-lg">{recognition.title}</h4>
                      </div>
                      <p className="text-gray-300 text-sm mb-2">{recognition.description}</p>
                      <div className="flex items-center gap-2 text-xs text-yellow-400">
                        <Calendar className="w-3 h-3" />
                        {recognition.year}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
