'use client'

import { motion } from 'framer-motion'
import { Star, ExternalLink, Sparkles } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

interface Collaborator {
  name: string
  role: string
  project: string
  image: string
  description: string
  imdb?: string
  highlight: string
}

const collaborators: Collaborator[] = [
  {
    name: 'Agustín Díaz Yanes',
    role: 'Director',
    project: 'Un fantasma en la batalla',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400',
    description: 'Prestigioso director y guionista español, ganador del Goya al Mejor Guión Adaptado. Ha dirigido películas como "Alatriste" y "Nadie conoce a nadie".',
    highlight: 'Director Goya',
    imdb: 'https://www.imdb.com/name/nm0227009/',
  },
  {
    name: 'Helena Pimenta',
    role: 'Directora CNTC',
    project: 'Fuente Ovejuna',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400',
    description: 'Directora de la Compañía Nacional de Teatro Clásico. Referente en la dirección de obras del Siglo de Oro español.',
    highlight: 'CNTC',
  },
  {
    name: 'Maggie Civantos',
    role: 'Co-protagonista',
    project: 'Vis a vis: El Oasis',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400',
    description: 'Actriz española conocida por su papel protagonista en "Vis a vis". Nominada a los Premios Feroz y Premios Unión de Actores.',
    highlight: 'Protagonista Vis a vis',
    imdb: 'https://www.imdb.com/name/nm3677974/',
  },
  {
    name: 'Óscar Jaenada',
    role: 'Protagonista',
    project: 'Hernán',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400',
    description: 'Actor internacional con carrera en Hollywood. Conocido por "Piratas del Caribe", "Cantinflas" y "Luis Miguel: La Serie".',
    highlight: 'Actor Internacional',
    imdb: 'https://www.imdb.com/name/nm0415320/',
  },
  {
    name: 'Javier Gutiérrez',
    role: 'Protagonista',
    project: 'Estoy vivo',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400',
    description: 'Actor ganador del Goya por "La isla mínima". Una de las figuras más reconocidas del cine español contemporáneo.',
    highlight: 'Goya Mejor Actor',
    imdb: 'https://www.imdb.com/name/nm1126861/',
  },
  {
    name: 'Najwa Nimri',
    role: 'Actriz',
    project: 'Vis a vis: El Oasis',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400',
    description: 'Actriz y cantante española, reconocida internacionalmente por su papel en "La Casa de Papel" y "Vis a vis".',
    highlight: 'La Casa de Papel',
    imdb: 'https://www.imdb.com/name/nm0632047/',
  },
  {
    name: 'Anna Castillo',
    role: 'Actriz',
    project: 'Estoy vivo',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400',
    description: 'Joven actriz española ganadora del Goya por "El olivo". Reconocida por su trabajo en cine y televisión.',
    highlight: 'Goya Revelación',
    imdb: 'https://www.imdb.com/name/nm3641894/',
  },
  {
    name: 'Michel Brown',
    role: 'Actor',
    project: 'Hernán',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400',
    description: 'Actor argentino-estadounidense conocido por telenovelas y series internacionales. Carrera en EE.UU. y Latinoamérica.',
    highlight: 'Actor Internacional',
    imdb: 'https://www.imdb.com/name/nm0114440/',
  },
]

export default function Collaborators() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="collaborators" className="py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-slate-100 to-gray-100 rounded-full mb-4"
            >
              <Sparkles className="w-4 h-4 text-slate-700" />
              <span className="text-slate-700 text-sm font-semibold">Colaboraciones</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Directores y Actores
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              He tenido el privilegio de trabajar con algunos de los profesionales más talentosos
              del cine y la televisión española e internacional.
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {collaborators.map((person, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                {/* Card */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Hover overlay with description */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-black/90 p-4 flex flex-col justify-end"
                    >
                      <p className="text-white text-sm leading-relaxed">{person.description}</p>
                      {person.imdb && (
                        <a
                          href={person.imdb}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="mt-3 inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 text-sm font-semibold"
                        >
                          Ver IMDb
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </motion.div>

                    {/* Bottom info */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 bg-yellow-500 text-white text-xs font-bold rounded-full">
                          {person.highlight}
                        </span>
                      </div>
                      <h3 className="text-white font-bold text-lg">{person.name}</h3>
                      <p className="text-gray-200 text-sm">{person.role}</p>
                    </div>
                  </div>

                  {/* Project */}
                  <div className="p-4 bg-gradient-to-r from-slate-50 to-white">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm font-semibold text-slate-700">{person.project}</span>
                    </div>
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10" />
              </motion.div>
            ))}
          </div>

          {/* Bottom note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-gray-600 max-w-2xl mx-auto">
              Estas colaboraciones han sido fundamentales en mi desarrollo profesional,
              permitiéndome aprender de los mejores y elevar la calidad de mis interpretaciones.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
