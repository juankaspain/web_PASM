'use client'

import { motion } from 'framer-motion'
import { Newspaper, ExternalLink, Calendar, Tag } from 'lucide-react'
import { useState } from 'react'

type Category = 'nacional' | 'regional' | 'especializada' | 'digital'

interface PressInterview {
  title: string
  publication: string
  category: Category
  date: string
  year: number
  excerpt: string
  url: string
  image?: string
  tags: string[]
}

const interviews: PressInterview[] = [
  // PRENSA NACIONAL
  {
    title: '"Al principio tenía una voz en la cabeza que me decía que era muy mal actor"',
    publication: 'La Vanguardia',
    category: 'nacional',
    date: '2025-10-17',
    year: 2025,
    excerpt:
      'El actor sevillano habla sobre el síndrome del impostor, su papel en "Un fantasma en la batalla" y cómo las señoras mayores le hablan como a su personaje de La Moderna. "Yo al amor de mi vida la esperaría lo que fuera necesario", confiesa sobre Antonio, su último personaje.',
    url: 'https://www.lavanguardia.com/gente/20251017/11166920/almagro-san-miguel-principio-tenia-voz-cabeza-me-decia-mal-actor-me-fustiga',
    tags: ['Un fantasma en la batalla', 'La Moderna', 'Cine'],
  },
  {
    title: '"Cuando llegué a La Moderna pensé: dónde me he metido, voy a morir"',
    publication: 'La Razón',
    category: 'nacional',
    date: '2023-11-26',
    year: 2023,
    excerpt:
      'El actor sevillano explica cómo tuvo que cambiar su ritmo de vida para adaptarse a una serie diaria. "Era de cenar a las diez y ahora a las ocho, a las nueve repaso lo del día siguiente y a las nueve y media estoy acostado". El equipo de arte ha reconstruido el Madrid de los años 30 de manera abrumadora.',
    url: 'https://www.larazon.es/television/series/almagro-san-miguel-cuando-llegue-moderna-pense-donde-metido-voy-morir_202311266562edda5',
    tags: ['La Moderna', 'Series', 'Rutina profesional'],
  },
  {
    title: 'Entrevista a Almagro San Miguel, el galán de La Moderna',
    publication: 'RTVE',
    category: 'nacional',
    date: '2023-12-02',
    year: 2023,
    excerpt:
      '"Me trabajé mucho las audiciones porque la oportunidad así lo requería", cuenta. Se siente muy agradecido con Boomerang y RTVE por la confianza. "Cada proyecto, personaje, es otra historia, otro mundo. La posibilidad de aprender de la historia de tu país me llena mucho".',
    url: 'https://www.rtve.es/television/20231202/moderna-entrevista-almagro-san-miguel-inigo-penalver/2463590.shtml',
    tags: ['La Moderna', 'Íñigo Peñalver', 'RTVE'],
  },

  // PRENSA REGIONAL
  {
    title: 'De La Moderna a la película sobre ETA producida por Bayona',
    publication: 'Diario de Sevilla',
    category: 'regional',
    date: '2024-10-17',
    year: 2024,
    excerpt:
      'Almagro San Miguel habla sobre "Un fantasma en la batalla", donde interpreta a Antonio. "Es un privilegio trabajar con Agustín Díaz Yanes. Crea un ambiente muy tranquilo, se percibe su experiencia". También revela su participación en "Carta blanca", sobre el desastre de Annual y la Legión.',
    url: 'https://www.diariodesevilla.es/television/almagro-san-miguel-moderna-pelicula_0_2004995240.html',
    tags: ['Cine', 'Agustín Díaz Yanes', 'Historia'],
  },

  // DIGITAL / ESPECIALIZADA
  {
    title: 'La pasión por actuar y el respeto a los clásicos del cine',
    publication: 'El Plural TV',
    category: 'digital',
    date: '2024-12-22',
    year: 2024,
    excerpt:
      'Entrevista en el Teatro de la Maestranza de Sevilla. Descubre sus inicios en actuaciones callejeras, la irrupción de influencers en la industria, la idealización de la figura del actor y la importancia de ver cine en Navidad. "Nosotros tenemos la tradición familiar de ver Pesadilla antes de Navidad".',
    url: 'https://www.youtube.com/watch?v=ts2qSZpSO_I',
    tags: ['Teatro', 'Cine', 'Tradiciones'],
  },
  {
    title: 'Presenta Operación Barrio Inglés y reflexiona sobre la historia de España',
    publication: 'YouTube / TVE',
    category: 'especializada',
    date: '2024-05-13',
    year: 2024,
    excerpt:
      'Almagro interpreta a Toni en esta serie sobre espías en la década de los 40 en Huelva. "Para mí era muy importante la visión de Toni, la visión de un español metido en el servicio secreto británico". Habla sobre el reto de grabar en Sevilla en pleno agosto y la importancia de conocer nuestra historia.',
    url: 'https://www.youtube.com/watch?v=mll_3Sj8kjg',
    tags: ['Operación Barrio Inglés', 'Historia', 'TVE'],
  },

  // MÁS ENTREVISTAS DESTACADAS
  {
    title: '"Estuve poniendo copas mientras mi familia estaba de fiesta"',
    publication: 'El Plural TV',
    category: 'digital',
    date: '2023-12-20',
    year: 2023,
    excerpt:
      'Sobre sus sacrificios antes del éxito: "Estuve poniendo copas y trabajando de lo que fuera. Me mamé muchas Navidades en Madrid solito, trabajando en discotecas mientras mi familia estaba de fiesta. Lo haces porque tienes un plan". Una historia de perseverancia y dedicación.',
    url: 'https://www.youtube.com/watch?v=ts2qSZpSO_I',
    tags: ['Trayectoria', 'Sacrificio', 'Inicios'],
  },
  {
    title: 'Un té con Almagro San Miguel en el Salón de La Moderna',
    publication: 'RTVE Play',
    category: 'especializada',
    date: '2023-11-15',
    year: 2023,
    excerpt:
      'El actor habla de su paso por La Moderna, del personaje de Íñigo, de las tramas que más nos preocupan y del futuro que le espera. Una conversación íntima sobre su personaje más emblemático y los desafíos de trabajar en una serie diaria de época.',
    url: 'https://www.rtve.es/play/videos/salon-de-te-la-moderna/almagro-san-miguel/16137829/',
    tags: ['La Moderna', 'Íñigo Peñalver', 'Entrevista'],
  },
]

// Ordenar por fecha descendente
const sortedInterviews = [...interviews].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
)

export default function PressInterviews() {
  const [activeCategory, setActiveCategory] = useState<Category | 'todas'>('todas')

  const filteredInterviews =
    activeCategory === 'todas'
      ? sortedInterviews
      : sortedInterviews.filter((i) => i.category === activeCategory)

  const categories: { id: Category | 'todas'; label: string }[] = [
    { id: 'todas', label: 'Todas' },
    { id: 'nacional', label: 'Nacional' },
    { id: 'regional', label: 'Regional' },
    { id: 'digital', label: 'Digital' },
    { id: 'especializada', label: 'Especializada' },
  ]

  // Formatear fecha
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  }

  return (
    <section id="press-interviews" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <Newspaper className="w-10 h-10 text-slate-800" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-slate-900">
              Entrevistas en Prensa
            </h2>
          </div>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Cobertura periodística, entrevistas en profundidad y apariciones en medios nacionales e
            internacionales
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-slate-900 text-white shadow-lg'
                    : 'bg-white text-slate-700 border border-slate-300 hover:border-slate-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Interviews Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {filteredInterviews.map((interview, index) => (
              <motion.article
                key={`${interview.publication}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200 hover:border-slate-900"
              >
                {/* Header Card */}
                <div className="p-6 border-b border-slate-100">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">
                        {interview.title}
                      </h3>
                      <p className="text-sm font-semibold text-slate-600 flex items-center gap-2">
                        <Newspaper className="w-4 h-4" />
                        {interview.publication}
                      </p>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(interview.date)}</span>
                  </div>

                  {/* Excerpt */}
                  <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                    {interview.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {interview.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Card */}
                <div className="px-6 py-4 bg-slate-50 group-hover:bg-slate-100 transition-colors">
                  <a
                    href={interview.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-900 font-semibold hover:text-slate-700 transition-colors"
                  >
                    <span>Leer entrevista completa</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Stats Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 bg-slate-900 rounded-2xl p-8 max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Cobertura Mediática
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {categories.slice(1).map((cat) => {
                const count = interviews.filter((i) => i.category === cat.id).length
                return (
                  <div key={cat.id} className="text-center">
                    <div className="text-4xl font-bold text-yellow-500 mb-2">{count}</div>
                    <div className="text-sm text-gray-300">{cat.label}</div>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 mb-4">
              ¿Eres periodista y quieres realizar una entrevista?
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-full transition-colors font-semibold shadow-lg hover:shadow-xl"
            >
              Contactar para prensa
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
