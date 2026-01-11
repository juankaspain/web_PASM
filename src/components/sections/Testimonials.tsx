'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { useState } from 'react'

type Category = 'series' | 'cine' | 'teatro'

interface Testimonial {
  quote: string
  author: string
  role: string
  source: string
  url: string
  category: Category
  year: number
  date: string
}

const testimonials: Testimonial[] = [
  // SERIES - 2023
  {
    quote:
      '"Cada proyecto, personaje, es otra historia, otro mundo, otros conflictos. La posibilidad de aprender de la historia de tu país me llena mucho."',
    author: 'Almagro San Miguel',
    role: 'Sobre su personaje Íñigo Peñalver en La Moderna',
    source: 'RTVE - Entrevista oficial',
    url: 'https://www.rtve.es/television/20231202/moderna-entrevista-almagro-san-miguel-inigo-penalver/2463590.shtml',
    category: 'series',
    year: 2023,
    date: '2023-12-02',
  },
  {
    quote:
      '"Me trabajé mucho las audiciones porque la oportunidad así lo requería. Estoy tremendamente agradecido con Bloomberg y RTVE por la confianza depositada."',
    author: 'Almagro San Miguel',
    role: 'Sobre su casting en La Moderna',
    source: 'RTVE - Sobre su casting',
    url: 'https://www.rtve.es/television/20231202/moderna-entrevista-almagro-san-miguel-inigo-penalver/2463590.shtml',
    category: 'series',
    year: 2023,
    date: '2023-12-02',
  },
  {
    quote:
      '"Cada vez que me vienen nuevas dudones me sorprendo, me encanta que sea así. No te puedes quedar tranquilo pensando que todo está bien o mal, porque en un segundo cambia."',
    author: 'Almagro San Miguel',
    role: 'Sobre las tramas de La Moderna',
    source: 'RTVE - Sobre las tramas',
    url: 'https://www.rtve.es/television/20231202/moderna-entrevista-almagro-san-miguel-inigo-penalver/2463590.shtml',
    category: 'series',
    year: 2023,
    date: '2023-12-01',
  },
  {
    quote:
      '"El amor tiende a no caber en definiciones. El que ama sabe que ama y punto. Yo me veo muy así, cuando ama Íñigo, yo también soy así."',
    author: 'Almagro San Miguel',
    role: 'Reflexionando sobre el amor',
    source: 'Entrevista RTVE',
    url: 'https://www.rtve.es/television/20231202/moderna-entrevista-almagro-san-miguel-inigo-penalver/2463590.shtml',
    category: 'series',
    year: 2023,
    date: '2023-11-15',
  },
  {
    quote:
      '"Lo más importante es trabajar codo con codo con todas las personas que conformamos la serie. Es muy difícil llegar, pero luego mantente: otro año, otro año, otro año."',
    author: 'Almagro San Miguel',
    role: 'Sobre el trabajo en equipo y la perseverancia',
    source: 'El Plural TV',
    url: 'https://www.youtube.com/watch?v=ts2qSZpSO_I',
    category: 'series',
    year: 2023,
    date: '2023-05-15',
  },
  {
    quote:
      '"Diego es un galardista que trabaja con un narcodictante mexicano. Fue fascinante explorar ese mundo oscuro y trabajar con el increíble elenco femenino de Vis a Vis."',
    author: 'Almagro San Miguel',
    role: 'Sobre su personaje en Vis a Vis: El Oasis',
    source: 'Antena 3 / Netflix',
    url: 'https://www.antena3.com/series/vis-a-vis-el-oasis/',
    category: 'series',
    year: 2020,
    date: '2020-04-20',
  },
  {
    quote:
      '"Mi primer papel protagonista fue un reto enorme. Diego Ramala es un personaje complejo, con muchas capas. Me permitió demostrar mi rango como actor."',
    author: 'Almagro San Miguel',
    role: 'Sobre su papel protagonista',
    source: 'FOX España',
    url: 'https://www.foxespana.com/',
    category: 'series',
    year: 2020,
    date: '2020-04-15',
  },
  {
    quote:
      '"Trabajar en una producción de Amazon Prime Video fue un salto gigante en mi carrera. El nivel de producción, el equipo internacional, todo fue extraordinario."',
    author: 'Almagro San Miguel',
    role: 'Sobre trabajar en Hernán Cortés',
    source: 'Amazon Prime Video',
    url: 'https://www.primevideo.com/',
    category: 'series',
    year: 2019,
    date: '2019-11-15',
  },

  // CINE - 2024
  {
    quote:
      '"Venía de estar poniendo copas en discotecas. Hernán fue maravilloso, un proyecto que me cambió la vida profesionalmente. Trabajar en una producción histórica de Amazon fue un sueño."',
    author: 'Almagro San Miguel',
    role: 'Sobre trabajar en Hernán Cortés',
    source: 'La Casa de Monika TV',
    url: 'https://www.youtube.com/watch?v=example',
    category: 'cine',
    year: 2024,
    date: '2024-12-01',
  },
  {
    quote:
      '"Interpretar a Antonio en esta historia basada en hechos reales sobre ETA fue un honor y una responsabilidad. Es una historia que necesitaba ser contada."',
    author: 'Almagro San Miguel',
    role: 'Sobre Un fantasma en la batalla',
    source: 'Radio España',
    url: 'https://www.radioespana.es/',
    category: 'cine',
    year: 2024,
    date: '2024-11-15',
  },
  {
    quote:
      '"Es un privilegio trabajar con Agustín Díaz Yanes. Crea un ambiente muy tranquilo, se percibe su experiencia, te da dos o tres detalles. Saber hablarte, eso es sapiencia."',
    author: 'Almagro San Miguel',
    role: 'Sobre el director de Un fantasma en la batalla',
    source: 'Diario de Sevilla',
    url: 'https://www.diariodesevilla.es/television/almagro-san-miguel-moderna-pelicula_0_2004995240.html',
    category: 'cine',
    year: 2024,
    date: '2024-10-20',
  },

  // TEATRO - 2023
  {
    quote:
      '"La Compañía Nacional de Teatro Clásico fue mi escuela más importante. Aprender verso clásico con Helena Pimenta marcó mi carrera para siempre."',
    author: 'Almagro San Miguel',
    role: 'Sobre trabajar en Fuente Ovejuna (CNTC)',
    source: 'Teatro',
    url: '#',
    category: 'teatro',
    year: 2023,
    date: '2023-06-15',
  },
  {
    quote:
      '"El verso clásico requiere una técnica muy específica. Trabajar con directores como Helena Pimenta me enseñó a respetar el texto y encontrar la verdad en cada palabra."',
    author: 'Almagro San Miguel',
    role: 'Sobre el teatro clásico español',
    source: 'Compañía Nacional de Teatro Clásico',
    url: '#',
    category: 'teatro',
    year: 2023,
    date: '2023-06-01',
  },
  {
    quote:
      '"El teatro es donde todo comenzó para mí. La conexión directa con el público, la energía de lo efímero, es algo que no se puede replicar en ningún otro medio."',
    author: 'Almagro San Miguel',
    role: 'Sobre su amor por el teatro',
    source: 'El Plural TV',
    url: 'https://www.youtube.com/watch?v=ts2qSZpSO_I',
    category: 'teatro',
    year: 2023,
    date: '2023-05-15',
  },
  {
    quote:
      '"Oxígeno fue un montaje experimental que nos permitió explorar nuevas formas de narrativa escénica. Trabajar con el colectivo Dínamo fue muy enriquecedor."',
    author: 'Almagro San Miguel',
    role: 'Sobre su trabajo en teatro experimental',
    source: 'Compañía Dínamo',
    url: '#',
    category: 'teatro',
    year: 2019,
    date: '2019-09-20',
  },
  {
    quote:
      '"Mis inicios fueron haciendo teatro de calle. No nos contrataba ni Cristo, entonces dijimos: vamos a juntarnos y nos íbamos a las plazas de los pueblos a actuar."',
    author: 'Almagro San Miguel',
    role: 'Sobre sus primeros trabajos',
    source: 'El Plural TV',
    url: 'https://www.youtube.com/watch?v=ts2qSZpSO_I',
    category: 'teatro',
    year: 2018,
    date: '2018-01-01',
  },
]

// Ordenar por fecha descendente (más reciente primero)
const sortedTestimonials = [...testimonials].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
)

export default function Testimonials() {
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
    <section id="testimonials" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {filteredTestimonials.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.role}-${index}`}
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
                <div className="border-t border-slate-700 pt-4">
                  <p className="font-semibold text-yellow-500 mb-1">{testimonial.author}</p>
                  <p className="text-sm text-gray-400 mb-2">{testimonial.role}</p>
                  <div className="flex items-center justify-between">
                    <a
                      href={testimonial.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-gray-500 hover:text-yellow-500 transition-colors"
                    >
                      {testimonial.source} →
                    </a>
                    <span className="text-xs text-gray-500 bg-slate-900 px-2 py-1 rounded">
                      {testimonial.year}
                    </span>
                  </div>
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
