'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { useState } from 'react'

type Category = 'series' | 'cine' | 'teatro'

interface Testimonial {
  quote: string
  project: string
  category: Category
  source: string
  year: number
  date: string
}

const testimonials: Testimonial[] = [
  // SERIES - 2023
  {
    quote:
      '"Cada proyecto, personaje, es otra historia, otro mundo, otros conflictos. La posibilidad de aprender de la historia de tu país me llena mucho."',
    project: 'La Moderna',
    category: 'series',
    source: 'RTVE - Entrevista oficial',
    year: 2023,
    date: '2023-12-02',
  },
  {
    quote:
      '"Me trabajé mucho las audiciones porque la oportunidad así lo requería. Estoy tremendamente agradecido con Bloomberg y RTVE por la confianza depositada."',
    project: 'La Moderna',
    category: 'series',
    source: 'RTVE - Sobre su casting',
    year: 2023,
    date: '2023-12-02',
  },
  {
    quote:
      '"Cada vez que me vienen nuevas dudones me sorprendo, me encanta que sea así. No te puedes quedar tranquilo pensando que todo está bien o mal, porque en un segundo cambia."',
    project: 'La Moderna',
    category: 'series',
    source: 'RTVE - Sobre las tramas',
    year: 2023,
    date: '2023-12-01',
  },
  {
    quote:
      '"El personaje de Íñigo Peñalver tiene muchas capas: es leal, empático, pero también tiene sus conflictos internos. Me identifiqué mucho con su forma de amar."',
    project: 'La Moderna',
    category: 'series',
    source: 'La Vanguardia',
    year: 2023,
    date: '2023-10-17',
  },
  {
    quote:
      '"Lo más importante es trabajar codo con codo con todas las personas que conformamos la serie. Es muy difícil llegar, pero luego mantente: otro año, otro año, otro año."',
    project: 'La Moderna',
    category: 'series',
    source: 'El Plural TV',
    year: 2023,
    date: '2023-05-15',
  },

  // SERIES - 2020
  {
    quote:
      '"Diego es un galardista que trabaja con un narcodictante mexicano. Fue fascinante explorar ese mundo oscuro y trabajar con el increíble elenco femenino de Vis a Vis."',
    project: 'Vis a Vis: El Oasis',
    category: 'series',
    source: 'Antena 3 / Netflix',
    year: 2020,
    date: '2020-04-20',
  },
  {
    quote:
      '"Mi primer papel protagonista fue un reto enorme. Diego Ramala es un personaje complejo, con muchas capas. Me permitió demostrar mi rango como actor."',
    project: 'Vis a Vis: El Oasis',
    category: 'series',
    source: 'FOX España',
    year: 2020,
    date: '2020-04-15',
  },

  // SERIES - 2019
  {
    quote:
      '"Trabajar en una producción de Amazon Prime Video fue un salto gigante en mi carrera. El nivel de producción, el equipo internacional, todo fue extraordinario."',
    project: 'Hernán Cortés',
    category: 'series',
    source: 'Amazon Prime Video',
    year: 2019,
    date: '2019-11-15',
  },

  // CINE - 2024
  {
    quote:
      '"Venía de estar poniendo copas en discotecas. Hernán fue maravilloso, un proyecto que me cambió la vida profesionalmente. Trabajar en una producción histórica de Amazon fue un sueño."',
    project: 'Hernán Cortés',
    category: 'cine',
    source: 'La Casa de Monika TV',
    year: 2024,
    date: '2024-12-01',
  },
  {
    quote:
      '"Interpretar a Antonio en esta historia basada en hechos reales sobre ETA fue un honor y una responsabilidad. Es una historia que necesitaba ser contada."',
    project: 'Un fantasma en la batalla',
    category: 'cine',
    source: 'Radio España',
    year: 2024,
    date: '2024-11-15',
  },
  {
    quote:
      '"Es un privilegio trabajar con Agustín Díaz Yanes. Crea un ambiente muy tranquilo, se percibe su experiencia, te da dos o tres detalles. Saber hablarte, eso es sapiencia."',
    project: 'Un fantasma en la batalla',
    category: 'cine',
    source: 'Diario de Sevilla',
    year: 2024,
    date: '2024-10-20',
  },

  // TEATRO - 2023
  {
    quote:
      '"La Compañía Nacional de Teatro Clásico fue mi escuela más importante. Aprender verso clásico con Helena Pimenta marcó mi carrera para siempre."',
    project: 'Fuente Ovejuna (CNTC)',
    category: 'teatro',
    source: 'Teatro',
    year: 2023,
    date: '2023-06-15',
  },
  {
    quote:
      '"El verso clásico requiere una técnica muy específica. Trabajar con directores como Helena Pimenta me enseñó a respetar el texto y encontrar la verdad en cada palabra."',
    project: 'Fuente Ovejuna (CNTC)',
    category: 'teatro',
    source: 'Compañía Nacional de Teatro Clásico',
    year: 2023,
    date: '2023-06-01',
  },
  {
    quote:
      '"El teatro es donde todo comenzó para mí. La conexión directa con el público, la energía de lo efímero, es algo que no se puede replicar en ningún otro medio."',
    project: 'Carrera teatral',
    category: 'teatro',
    source: 'El Plural TV',
    year: 2023,
    date: '2023-05-15',
  },

  // TEATRO - 2019
  {
    quote:
      '"Oxígeno fue un montaje experimental que nos permitió explorar nuevas formas de narrativa escénica. Trabajar con el colectivo Dínamo fue muy enriquecedor."',
    project: 'Oxígeno',
    category: 'teatro',
    source: 'Compañía Dínamo',
    year: 2019,
    date: '2019-09-20',
  },

  // TEATRO - 2018
  {
    quote:
      '"Mis inicios fueron haciendo teatro de calle. No nos contrataba ni Cristo, entonces dijimos: vamos a juntarnos y nos íbamos a las plazas de los pueblos a actuar."',
    project: 'Teatro de calle',
    category: 'teatro',
    source: 'El Plural TV',
    year: 2018,
    date: '2018-01-01',
  },
]

// Ordenar por fecha descendente (más reciente primero)
const sortedTestimonials = [...testimonials].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
)

export default function ProfessionalTestimonials() {
  const [activeCategory, setActiveCategory] = useState<Category>('series')

  const filteredTestimonials = sortedTestimonials.filter(
    (t) => t.category === activeCategory
  )

  const categories: { id: Category; label: string }[] = [
    { id: 'series', label: 'Series' },
    { id: 'cine', label: 'Cine' },
    { id: 'teatro', label: 'Teatro' },
  ]

  return (
    <section id="professional-testimonials" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <Quote className="w-8 h-8 text-yellow-500" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-center">
              Declaraciones Profesionales
            </h2>
          </div>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            Reflexiones sobre proyectos, personajes y experiencias a lo largo de su carrera
            artística
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-yellow-500 text-slate-900'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {filteredTestimonials.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.project}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-yellow-500 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/10"
              >
                <Quote className="w-8 h-8 text-yellow-500/50 mb-4" />

                <blockquote className="text-gray-200 leading-relaxed mb-4 italic text-sm">
                  {testimonial.quote}
                </blockquote>

                <div className="border-t border-slate-700 pt-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-yellow-500">{testimonial.project}</p>
                    <span className="text-xs text-gray-400 bg-slate-900 px-2 py-1 rounded">
                      {testimonial.year}
                    </span>
                  </div>

                  <p className="text-xs text-gray-400">
                    {testimonial.source} •{' '}
                    {testimonial.category.charAt(0).toUpperCase() +
                      testimonial.category.slice(1)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto"
          >
            {categories.map((cat) => {
              const count = testimonials.filter((t) => t.category === cat.id).length
              return (
                <div
                  key={cat.id}
                  className="text-center p-4 bg-slate-800 rounded-lg border border-slate-700"
                >
                  <div className="text-3xl font-bold text-yellow-500 mb-2">{count}</div>
                  <div className="text-sm text-gray-400">{cat.label}</div>
                </div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
