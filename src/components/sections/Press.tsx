'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Calendar, Newspaper, Video } from 'lucide-react'
import Image from 'next/image'

const pressArticles = [
  {
    title: 'Almagro San Miguel: la pasión por actuar y aprender del pasado',
    outlet: 'El Plural TV',
    date: '23 de diciembre de 2024',
    excerpt:
      'Entrevista en el Teatro de la Maestranza sobre sus nuevos retos tras La Moderna, su interés por la historia de España y la irrupción de influencers en la industria.',
    url: 'https://www.youtube.com/watch?v=ts2qSZpSO_I',
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1000',
    featured: true,
    type: 'video',
  },
  {
    title: 'Almagro San Miguel, el galán de "La Moderna": "El amor tiende a no caber en definiciones"',
    outlet: 'RTVE',
    date: '2 de diciembre de 2023',
    excerpt:
      'El nuevo galán de las tardes de La 1 habla sobre su personaje Íñigo Peñalver y cómo se siente interpretando al protagonista de la serie diaria.',
    url: 'https://www.rtve.es/television/20231202/moderna-entrevista-almagro-san-miguel-inigo-penalver/2463590.shtml',
    image: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=1000',
    featured: true,
  },
  {
    title: 'Almagro San Miguel: "Al principio tenía una voz en la cabeza que me decía que era muy mal actor"',
    outlet: 'La Vanguardia',
    date: '17 de octubre de 2025',
    excerpt:
      'El actor sevillano habla sobre el síndrome del impostor, su última película "Un fantasma en la batalla" de Díaz Yanes y cómo superó sus inseguridades.',
    url: 'https://www.lavanguardia.com/gente/20251017/11166920/almagro-san-miguel-principio-tenia-voz-cabeza-me-decia-mal-actor-me-fustiga',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1000',
    featured: false,
  },
  {
    title: 'De "La Moderna" a la película sobre ETA de Díaz Yanes',
    outlet: 'Diario de Sevilla',
    date: '17 de octubre de 2025',
    excerpt:
      '"Es un privilegio trabajar con Díaz Yanes. Crea un ambiente muy tranquilo, se percibe su experiencia", afirma el actor sobre su trabajo en "Un fantasma en la batalla".',
    url: 'https://www.diariodesevilla.es/television/almagro-san-miguel-moderna-pelicula_0_2004995240.html',
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=1000',
    featured: false,
  },
  {
    title: 'Almagro San Miguel, un actor todoterreno con doblete en TVE',
    outlet: 'Diario Crítico',
    date: '25 de abril de 2024',
    excerpt:
      'Graduado en la ESAD de Sevilla, Almagro San Miguel comienza su carrera en los escenarios con proyectos teatrales que le llevan hasta la Compañía Nacional de Teatro Clásico.',
    url: 'https://www.diariocritico.com/almagro-san-miguel-series-tv',
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1000',
    featured: false,
  },
  {
    title: 'Almagro San Miguel: "Cuando llegué a La Moderna pensé dónde me he metido; voy a morir"',
    outlet: 'La Razón',
    date: '26 de noviembre de 2023',
    excerpt:
      'El actor sevillano se asoma cada tarde a la pantalla en la nueva serie diaria de TVE y confiesa sus primeras impresiones al enfrentarse al ritmo frenético de la producción.',
    url: 'https://www.larazon.es/television/series/almagro-san-miguel-cuando-llegue-moderna-pense-donde-metido-voy-morir_202311266562edda5',
    image: 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?q=80&w=1000',
    featured: false,
  },
  {
    title: 'El lado más personal de Almagro San Miguel, el nuevo rostro de TVE',
    outlet: 'Vanitatis (El Confidencial)',
    date: '28 de septiembre de 2023',
    excerpt:
      'Con una carrera en alza, Almagro San Miguel se convierte en el rostro de la nueva serie diaria de TVE. Una apuesta personal para este intérprete de origen sevillano.',
    url: 'https://www.vanitatis.elconfidencial.com/famosos/2023-09-28/almagro-san-miguel-familia-mascotas-la-moderna-serie-tve_3743441/',
    image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=1000',
    featured: false,
  },
  {
    title: 'Almagro San Miguel presenta "Operación Barrio Inglés" y continúa en "La Moderna"',
    outlet: 'FILMADOS (YouTube)',
    date: '13 de mayo de 2024',
    excerpt:
      'El actor interpreta a Toni en la nueva serie de TVE sobre espías en la década de los 40 en Huelva, mientras continúa con su personaje Íñigo en La Moderna.',
    url: 'https://www.youtube.com/watch?v=mll_3Sj8kjg',
    image: 'https://images.unsplash.com/photo-1574267432644-f74f8ec9cfd0?q=80&w=1000',
    featured: false,
    type: 'video',
  },
  {
    title: 'Entrevista exclusiva: "Me podréis ver en Honor, una serie sobre el poder y la corrupción"',
    outlet: 'TV Teleaudiencias',
    date: '12 de mayo de 2023',
    excerpt:
      'El actor habla sobre su participación en la serie "Honor" de Atresplayer, donde interpreta a Federico "Fede" en una trama sobre corrupción policial.',
    url: 'https://tvteleaudiencias.wordpress.com/2023/05/12/entrevista-exclusiva-a-almagro-san-miguel-me-podreis-ver-en-honor-a3-una-serie',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1000',
    featured: false,
  },
  {
    title: 'Almagro San Miguel (Dieguito): "El Oasis es el broche de oro a la relación de Maca y Zulema"',
    outlet: 'Your Way Magazine',
    date: '2020',
    excerpt:
      'Entrevista sobre su papel protagonista en "Vis a vis: El Oasis", interpretando a Diego "Dieguito" Ramala, el personaje que le dio su primera gran oportunidad en televisión.',
    url: 'https://www.yourwaymagazine.com/entrevista-almagro-san-miguel-el-oasis/',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000',
    featured: false,
  },
]

export default function Press() {
  return (
    <section id="press" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Newspaper className="w-8 h-8 text-slate-700" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-center">
              Prensa
            </h2>
          </div>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Entrevistas, artículos y apariciones en medios de comunicación sobre mi trayectoria profesional.
          </p>

          {/* Featured Articles */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {pressArticles
              .filter((article) => article.featured)
              .map((article, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                      {article.type === 'video' && <Video className="w-4 h-4" />}
                      DESTACADO
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                      <span className="font-semibold text-slate-700">{article.outlet}</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {article.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-slate-700 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 font-semibold transition-colors"
                    >
                      {article.type === 'video' ? 'Ver entrevista' : 'Leer artículo completo'}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </motion.article>
              ))}
          </div>

          {/* Other Articles */}
          <div className="grid md:grid-cols-3 gap-6">
            {pressArticles
              .filter((article) => !article.featured)
              .map((article, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {article.type === 'video' && (
                      <div className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full">
                        <Video className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-3 text-xs text-gray-500">
                      <span className="font-semibold text-slate-600">{article.outlet}</span>
                      <span>{article.date}</span>
                    </div>
                    <h4 className="text-base font-bold mb-2 line-clamp-2 group-hover:text-slate-700 transition-colors">
                      {article.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{article.excerpt}</p>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-slate-700 hover:text-slate-900 text-sm font-semibold transition-colors"
                    >
                      {article.type === 'video' ? 'Ver' : 'Leer más'}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </motion.article>
              ))}
          </div>

          {/* Radio Interview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 bg-slate-100 rounded-lg p-8 text-center"
          >
            <Video className="w-12 h-12 text-slate-700 mx-auto mb-4" />
            <h3 className="text-2xl font-serif font-bold mb-3">Entrevista en Radio</h3>
            <p className="text-gray-700 mb-4">
              Entrevista completa en Rumbera Sevilla 93.4 FM sobre "Vis a Vis: El Oasis" y "Hernán"
            </p>
            <a
              href="https://www.youtube.com/watch?v=JnzoAOXccYg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full transition-colors font-semibold"
            >
              Ver en YouTube
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
