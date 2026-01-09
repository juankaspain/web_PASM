'use client'

import { motion } from 'framer-motion'
import { Camera, ExternalLink, Play } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const galleryItems = [
  {
    id: 1,
    type: 'image',
    title: 'La Moderna - Íñigo Peñalver',
    project: 'La Moderna (TVE)',
    year: '2023-2024',
    image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=1000',
    category: 'tv',
  },
  {
    id: 2,
    type: 'image',
    title: 'Vis a vis: El Oasis - Dieguito',
    project: 'Vis a vis: El Oasis',
    year: '2020',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000',
    category: 'tv',
  },
  {
    id: 3,
    type: 'image',
    title: 'Hernán - Gonzalo de Sandoval',
    project: 'Hernán (Prime Video)',
    year: '2019',
    image: 'https://images.unsplash.com/photo-1533613220915-609f661a6fe1?q=80&w=1000',
    category: 'tv',
  },
  {
    id: 4,
    type: 'image',
    title: 'Un fantasma en la batalla',
    project: 'Un fantasma en la batalla',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1000',
    category: 'film',
  },
  {
    id: 5,
    type: 'image',
    title: 'La Caza: Guadiana - Aurelio',
    project: 'La Caza: Guadiana',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1000',
    category: 'tv',
  },
  {
    id: 6,
    type: 'image',
    title: 'Estoy vivo - Mikel Uribe',
    project: 'Estoy vivo',
    year: '2021',
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1000',
    category: 'tv',
  },
  {
    id: 7,
    type: 'image',
    title: 'Teatro Clásico - Segismundo',
    project: 'La vida es sueño',
    year: '2015',
    image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=1000',
    category: 'theater',
  },
  {
    id: 8,
    type: 'image',
    title: 'Oliver Twist - Jefe Duff',
    project: 'Oliver Twist (Musical)',
    year: '2016',
    image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=1000',
    category: 'theater',
  },
  {
    id: 9,
    type: 'video',
    title: 'Behind the Scenes - La Moderna',
    project: 'Making of',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1000',
    category: 'bts',
  },
]

const categories = [
  { id: 'all', label: 'Todas', icon: Camera },
  { id: 'tv', label: 'Televisión', icon: Play },
  { id: 'film', label: 'Cine', icon: Camera },
  { id: 'theater', label: 'Teatro', icon: Camera },
  { id: 'bts', label: 'Behind the Scenes', icon: Camera },
]

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory)

  return (
    <section id="gallery" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Camera className="w-8 h-8 text-yellow-400" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-white">
              Galería de Imágenes
            </h2>
          </div>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            Una selección visual de mis personajes y proyectos más destacados.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                    selectedCategory === category.id
                      ? 'bg-yellow-400 text-slate-900'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.label}
                </button>
              )
            })}
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative aspect-[4/5] rounded-lg overflow-hidden cursor-pointer"
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
                    <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-300 text-sm mb-1">{item.project}</p>
                    <p className="text-gray-400 text-xs">{item.year}</p>
                  </div>
                  {item.type === 'video' && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center">
                        <Play className="w-8 h-8 text-slate-900 ml-1" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-slate-900">
                    {item.category.toUpperCase()}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-gray-300 mb-4">
              ¿Quieres ver más contenido detrás de las cámaras?
            </p>
            <a
              href="https://www.instagram.com/almagrosanmiguel/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full transition-all hover:scale-105 font-semibold"
            >
              Visítame en Instagram
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
