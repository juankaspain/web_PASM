'use client'

import { motion } from 'framer-motion'
import { Camera, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const galleryImages = [
  {
    title: 'La Moderna - Íñigo Peñalver',
    category: 'TV',
    year: '2023-2024',
    description: 'Como el galán protagonista de la serie diaria de TVE',
    image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=1000',
    size: 'large',
  },
  {
    title: 'Vis a vis: El Oasis - Dieguito',
    category: 'TV',
    year: '2020',
    description: 'Mi primer papel protagonista en el spin-off de Fox España',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000',
    size: 'large',
  },
  {
    title: 'Hernán - Gonzalo de Sandoval',
    category: 'TV',
    year: '2019',
    description: 'Superproducción histórica de Prime Video',
    image: 'https://images.unsplash.com/photo-1533613220915-609f661a6fe1?q=80&w=1000',
    size: 'medium',
  },
  {
    title: 'La Caza: Guadiana - Aurelio',
    category: 'TV',
    year: '2023',
    description: 'Thriller policial de TVE',
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1000',
    size: 'medium',
  },
  {
    title: 'Teatro Clásico - Segismundo',
    category: 'Teatro',
    year: '2016',
    description: 'La vida es sueño - Calderón de la Barca',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000',
    size: 'medium',
  },
  {
    title: 'Teatro Clásico - Othelo',
    category: 'Teatro',
    year: '2015',
    description: 'Shakespeare con CNTC',
    image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?q=80&w=1000',
    size: 'medium',
  },
  {
    title: 'Estoy vivo - Mikel Uribe',
    category: 'TV',
    year: '2021',
    description: 'Serie fantástica de TVE',
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1000',
    size: 'small',
  },
  {
    title: 'Honor - Federico Fede',
    category: 'TV',
    year: '2023',
    description: 'Serie policial Atresplayer',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1000',
    size: 'small',
  },
  {
    title: 'Un fantasma en la batalla',
    category: 'Cine',
    year: '2025',
    description: 'Película de Agustín Díaz Yanes',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1000',
    size: 'small',
  },
  {
    title: 'Behind the Scenes',
    category: 'BTS',
    year: '2024',
    description: 'En el set de La Moderna',
    image: 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?q=80&w=1000',
    size: 'small',
  },
]

const categories = ['Todas', 'TV', 'Cine', 'Teatro', 'BTS']

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('Todas')

  const filteredImages = activeCategory === 'Todas'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory)

  return (
    <section id="gallery" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Camera className="w-8 h-8 text-yellow-400" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-center">
              Galería Profesional
            </h2>
          </div>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Una selección visual de mis trabajos en televisión, cine y teatro.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  activeCategory === category
                    ? 'bg-yellow-400 text-slate-900 scale-105'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {filteredImages.map((item, index) => {
              const gridClass = item.size === 'large'
                ? 'md:col-span-2 md:row-span-2'
                : item.size === 'medium'
                ? 'md:col-span-1 md:row-span-1'
                : 'md:col-span-1'

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className={`group relative overflow-hidden rounded-lg ${gridClass} h-80 cursor-pointer`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 bg-yellow-400 text-slate-900 text-xs font-bold rounded-full">
                          {item.category}
                        </span>
                        <span className="text-xs text-gray-300">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-300">{item.description}</p>
                    </div>
                  </div>

                  {/* Corner Icon */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                      <ExternalLink className="w-5 h-5 text-slate-900" />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Info Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 text-center text-gray-400 text-sm"
          >
            <p>
              📸 Las fotografías profesionales están disponibles bajo petición para prensa y castings.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
