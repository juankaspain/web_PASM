'use client'

import { motion } from 'framer-motion'
import { Newspaper, Clock, ExternalLink, TrendingUp } from 'lucide-react'
import Image from 'next/image'

const newsItems = [
  {
    id: 1,
    title: 'Estreno de "Un fantasma en la batalla" en cines',
    excerpt: 'La nueva película de Agustín Díaz Yanes sobre ETA llega a los cines españoles. Almagro interpreta a Antonio en este thriller basado en hechos reales.',
    date: '2025-10-17',
    category: 'Cine',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1000',
    link: 'https://www.diariodesevilla.es/television/almagro-san-miguel-moderna-pelicula_0_2004995240.html',
    featured: true,
  },
  {
    id: 2,
    title: 'Entrevista en El Plural TV en Teatro de la Maestranza',
    excerpt: 'Conversación sobre sus nuevos retos tras La Moderna, su pasión por la historia de España y la irrupción de influencers en la industria audiovisual.',
    date: '2024-12-23',
    category: 'Entrevistas',
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1000',
    link: 'https://www.youtube.com/watch?v=ts2qSZpSO_I',
    featured: true,
  },
  {
    id: 3,
    title: 'Fin de "La Moderna" tras 236 episodios',
    excerpt: 'Despedida del personaje de Íñigo Peñalver después de casi dos años como protagonista de la serie diaria de TVE.',
    date: '2024-06-15',
    category: 'Televisión',
    image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=1000',
    link: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'Doble trabajo en TVE: "Operación Barrio Inglés" y "La Moderna"',
    excerpt: 'Compagina la grabación de la serie de espías ambientada en los años 40 con su papel protagonista en La Moderna.',
    date: '2024-05-13',
    category: 'Televisión',
    image: 'https://images.unsplash.com/photo-1574267432644-f74f8ec9cfd0?q=80&w=1000',
    link: 'https://www.youtube.com/watch?v=mll_3Sj8kjg',
    featured: false,
  },
  {
    id: 5,
    title: 'Participa en "La Caza: Guadiana" como Aurelio',
    excerpt: 'Nuevo capítulo de la aclamada serie de TVE, interpretando a Aurelio "Aure" Santana Mencía en una trama de suspense.',
    date: '2023-09-20',
    category: 'Televisión',
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1000',
    link: 'https://www.imdb.com/title/tt15398770/',
    featured: false,
  },
  {
    id: 6,
    title: 'Estreno como protagonista en "La Moderna"',
    excerpt: 'Almagro San Miguel se convierte en el nuevo galán de las tardes de La 1 con el personaje de Íñigo Peñalver.',
    date: '2023-09-04',
    category: 'Televisión',
    image: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=1000',
    link: 'https://www.rtve.es/television/20231202/moderna-entrevista-almagro-san-miguel-inigo-penalver/2463590.shtml',
    featured: false,
  },
]

export default function News() {
  return (
    <section id="news" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <TrendingUp className="w-8 h-8 text-slate-700" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-center">
              Últimas Noticias
            </h2>
          </div>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Mantente al día con mis últimos proyectos, estrenos y apariciones en medios.
          </p>

          {/* Featured News */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {newsItems
              .filter((item) => item.featured)
              .map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-yellow-400"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 bg-yellow-400 text-slate-900 rounded-full text-xs font-bold">
                        DESTACADO
                      </span>
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-slate-700">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      {new Date(item.date).toLocaleDateString('es-ES', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-slate-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{item.excerpt}</p>
                    {item.link !== '#' && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 font-semibold transition-colors"
                      >
                        Leer más
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </motion.article>
              ))}
          </div>

          {/* Other News */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newsItems
              .filter((item) => !item.featured)
              .map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-slate-700">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      {new Date(item.date).toLocaleDateString('es-ES', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </div>
                    <h4 className="text-base font-bold mb-2 line-clamp-2 group-hover:text-slate-700 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.excerpt}</p>
                    {item.link !== '#' && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-slate-700 hover:text-slate-900 text-sm font-semibold transition-colors"
                      >
                        Ver más
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </motion.article>
              ))}
          </div>

          {/* Subscribe CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-slate-900 to-slate-700 rounded-xl p-8 text-center text-white"
          >
            <Newspaper className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
            <h3 className="text-2xl font-serif font-bold mb-3">
              Mantente Informado
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Sígueme en redes sociales para estar al día de todos mis proyectos, estrenos y novedades.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.instagram.com/almagrosanmiguel/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:scale-105 transition-transform font-semibold"
              >
                Instagram
              </a>
              <a
                href="https://x.com/almagroSM"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-slate-900 rounded-full hover:scale-105 transition-transform font-semibold"
              >
                Twitter / X
              </a>
              <a
                href="https://www.facebook.com/almagrosanmiguel/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 text-white rounded-full hover:scale-105 transition-transform font-semibold"
              >
                Facebook
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
