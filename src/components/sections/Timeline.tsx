'use client'

import { motion } from 'framer-motion'
import { Calendar, Tv, Film, Theater, GraduationCap, Award } from 'lucide-react'

const timelineEvents = [
  {
    year: '1990',
    icon: Calendar,
    title: 'Nacimiento',
    description: 'Nace en Sevilla el 7 de marzo',
    color: 'bg-blue-500',
  },
  {
    year: '2008',
    icon: GraduationCap,
    title: 'Ingreso en ESAD Sevilla',
    description: 'Entra "por los pelos" en la Escuela Superior de Arte Dramático después de que su madre pagara las pruebas',
    color: 'bg-purple-500',
  },
  {
    year: '2009-2012',
    icon: Theater,
    title: 'Teatro de Calle & Isla Mágica',
    description: 'Trabajos en teatro de calle por pueblos andaluces y en el Corral de Comedias de Isla Mágica durante años',
    color: 'bg-green-500',
  },
  {
    year: '2013',
    icon: Film,
    title: 'Primeros Cortometrajes',
    description: 'Debuta en cine con "Lapso" (8.6 IMDb) interpretando a Rodolfo',
    color: 'bg-yellow-500',
  },
  {
    year: '2015-2017',
    icon: Theater,
    title: 'Compañía Nacional Teatro Clásico',
    description: 'Formación con Helena Pimenta. Fuente Ovejuna, La Villana de Getafe. Nominado a Mejor Actor Secundario',
    color: 'bg-red-500',
  },
  {
    year: '2016',
    icon: Award,
    title: 'Premio Mejor Espectáculo',
    description: 'Oliver Twist (Musical) gana premio al mejor espectáculo del año con CIA La Tarasca',
    color: 'bg-yellow-600',
  },
  {
    year: '2017-2018',
    icon: Tv,
    title: 'Primeras Apariciones TV',
    description: 'Papeles episódicos en Centro Médico, Grupo 2: Homicidios y Amar es para siempre',
    color: 'bg-indigo-500',
  },
  {
    year: '2019',
    icon: Tv,
    title: 'Hernán (Prime Video)',
    description: 'Interpreta a Gonzalo de Sandoval en la superproducción histórica de Amazon',
    color: 'bg-orange-500',
  },
  {
    year: '2020',
    icon: Tv,
    title: 'Vis a vis: El Oasis',
    description: 'PRIMER PROTAGONISTA: Diego "Dieguito" Ramala en el spin-off de Fox España',
    color: 'bg-pink-500',
    highlight: true,
  },
  {
    year: '2021',
    icon: Tv,
    title: 'Estoy vivo',
    description: 'Mikel Uribe en 12 episodios de la serie de TVE',
    color: 'bg-cyan-500',
  },
  {
    year: '2022',
    icon: Tv,
    title: 'Desconocidas',
    description: 'Ramón en la serie de Canal Sur (8 episodios)',
    color: 'bg-teal-500',
  },
  {
    year: '2023',
    icon: Tv,
    title: 'La Caza: Guadiana & Honor',
    description: 'Doble proyectos: Aurelio en La Caza (TVE) y Federico en Honor (Atresplayer)',
    color: 'bg-blue-600',
  },
  {
    year: '2023-2024',
    icon: Tv,
    title: 'La Moderna - PROTAGONISTA',
    description: '236 EPISODIOS como Íñigo Peñalver, el galán de las tardes de La 1',
    color: 'bg-red-600',
    highlight: true,
  },
  {
    year: '2024',
    icon: Tv,
    title: 'Operación Barrio Inglés',
    description: 'Toni en la serie de espías de TVE (8 episodios)',
    color: 'bg-slate-600',
  },
  {
    year: '2025',
    icon: Film,
    title: 'Un fantasma en la batalla',
    description: 'Antonio en la película de Agustín Díaz Yanes sobre ETA',
    color: 'bg-gray-700',
  },
  {
    year: '2026',
    icon: Calendar,
    title: 'Nuevos Proyectos',
    description: 'Disponible para castings y colaboraciones desde Mayo',
    color: 'bg-green-600',
  },
]

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calendar className="w-8 h-8 text-slate-700" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-center">
              Línea de Tiempo
            </h2>
          </div>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            El recorrido de mi carrera desde los inicios hasta el presente.
          </p>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200" />

            {timelineEvents.map((event, index) => {
              const Icon = event.icon
              const isLeft = index % 2 === 0

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className={`relative mb-12 md:flex md:items-center ${isLeft ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Content */}
                  <div className={`md:w-5/12 ${isLeft ? 'md:text-right' : 'md:text-left'} ml-20 md:ml-0`}>
                    <div className={`bg-white rounded-lg border-2 p-6 shadow-lg hover:shadow-xl transition-all ${
                      event.highlight ? 'border-yellow-400 bg-yellow-50' : 'border-gray-200'
                    }`}>
                      <div className={`flex items-center gap-2 mb-2 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                        <span className="text-2xl font-bold text-slate-700">{event.year}</span>
                        {event.highlight && (
                          <span className="px-2 py-1 bg-yellow-400 text-xs font-bold rounded-full">HITO</span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <p className="text-gray-600 text-sm">{event.description}</p>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <div className={`w-16 h-16 rounded-full ${event.color} flex items-center justify-center shadow-lg border-4 border-white`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Summary Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 grid md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 text-white text-center">
              <div className="text-4xl font-bold mb-2">18</div>
              <div className="text-sm opacity-90">Años de carrera</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-6 text-white text-center">
              <div className="text-4xl font-bold mb-2">12+</div>
              <div className="text-sm opacity-90">Series de TV</div>
            </div>
            <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg p-6 text-white text-center">
              <div className="text-4xl font-bold mb-2">300+</div>
              <div className="text-sm opacity-90">Episodios grabados</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg p-6 text-white text-center">
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-sm opacity-90">Obras de teatro</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
