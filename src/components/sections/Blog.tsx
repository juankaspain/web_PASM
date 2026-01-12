'use client'

import { motion } from 'framer-motion'
import { useState, useMemo } from 'react'
import Image from 'next/image'
import { Calendar, Film, Tv, Theater, ChevronDown } from 'lucide-react'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  category: 'Series TV' | 'Cine' | 'Teatro'
  year: number
  date: string
  image: string
  production: string
  role?: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'La Moderna estrena su segunda temporada en TVE',
    excerpt: 'La exitosa serie de época regresa a La 1 con nuevos episodios donde Íñigo Peñalver continúa su apasionante historia en los grandes almacenes.',
    category: 'Series TV',
    year: 2024,
    date: '15 Enero 2024',
    image: 'https://github.com/user-attachments/assets/43e8482d-f288-4cd0-b1ad-31e054eafdf4',
    production: 'La Moderna',
    role: 'Íñigo Peñalver',
  },
  {
    id: 2,
    title: 'Vis a vis: El Oasis llega a Fox Spain',
    excerpt: 'El spin-off de la exitosa serie Vis a vis se estrena con Diego Ramala como uno de los personajes principales en esta nueva aventura.',
    category: 'Series TV',
    year: 2020,
    date: '20 Abril 2020',
    image: 'https://github.com/user-attachments/assets/592b31fa-c2d0-4b08-b522-f84ad45b6651',
    production: 'Vis a vis: El Oasis',
    role: 'Diego Ramala',
  },
  {
    id: 3,
    title: 'Hernán, la gran producción histórica de Prime Video',
    excerpt: 'Amazon Prime Video estrena esta ambiciosa serie sobre la conquista de México, donde interpreto a Gonzalo de Sandoval, brazo derecho de Hernán Cortés.',
    category: 'Series TV',
    year: 2019,
    date: '21 Noviembre 2019',
    image: 'https://github.com/user-attachments/assets/e6f1ac3c-faec-4e6f-b1fd-e91a58b1cd1e',
    production: 'Hernán',
    role: 'Gonzalo de Sandoval',
  },
  {
    id: 4,
    title: 'Oliver Twist, el musical que arrasa en Madrid',
    excerpt: 'El Teatro Nuevo Apolo acoge este espectacular musical donde doy vida a uno de los personajes principales. Premiado como Mejor Espectáculo del Año 2016.',
    category: 'Teatro',
    year: 2016,
    date: '12 Octubre 2016',
    image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=800',
    production: 'Oliver Twist',
  },
  {
    id: 5,
    title: 'Fuente Ovejuna con la Compañía Nacional de Teatro Clásico',
    excerpt: 'Estreno en el Teatro de la Comedia de Madrid de esta producción de Lope de Vega. Nominación a Mejor Actor Secundario por la Unión de Actores.',
    category: 'Teatro',
    year: 2015,
    date: '18 Septiembre 2015',
    image: 'https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=800',
    production: 'Fuente Ovejuna',
  },
  {
    id: 6,
    title: 'La Caza: Guadiana se estrena en TVE',
    excerpt: 'Nueva temporada de La Caza ambientada en Extremadura. Una trama apasionante que nos lleva a los años 80 en España.',
    category: 'Series TV',
    year: 2024,
    date: '8 Marzo 2024',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800',
    production: 'La Caza: Guadiana',
  },
]

const categories = ['Todas', 'Series TV', 'Cine', 'Teatro'] as const
type Category = typeof categories[number]

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Series TV':
      return <Tv className="w-4 h-4" />
    case 'Cine':
      return <Film className="w-4 h-4" />
    case 'Teatro':
      return <Theater className="w-4 h-4" />
    default:
      return null
  }
}

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('Todas')
  const [selectedYear, setSelectedYear] = useState<number | null>(null)
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false)

  // Obtener años únicos ordenados descendentemente
  const availableYears = useMemo(() => {
    const years = [...new Set(blogPosts.map(post => post.year))]
    return years.sort((a, b) => b - a)
  }, [])

  // Filtrar posts
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const categoryMatch = selectedCategory === 'Todas' || post.category === selectedCategory
      const yearMatch = selectedYear === null || post.year === selectedYear
      return categoryMatch && yearMatch
    })
  }, [selectedCategory, selectedYear])

  return (
    <section id="blog" className="relative py-32 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-black">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-6"
          >
            <Calendar className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 text-sm font-medium tracking-wide">NOTICIAS & ACTUALIZACIONES</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            <span className="text-white">Blog </span>
            <span className="text-yellow-400">Profesional</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Noticias y actualizaciones sobre mis proyectos en televisión, cine y teatro
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-4 mb-12 justify-center items-center"
        >
          {/* Category filters */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-yellow-400 text-black shadow-lg shadow-yellow-400/30'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Year dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsYearDropdownOpen(!isYearDropdownOpen)}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition-all duration-300 min-w-[140px]"
            >
              <Calendar className="w-4 h-4" />
              <span className="font-medium">
                {selectedYear || 'Todos los años'}
              </span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                isYearDropdownOpen ? 'rotate-180' : ''
              }`} />
            </button>

            {/* Dropdown menu */}
            {isYearDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 right-0 mt-2 bg-slate-900 border border-white/10 rounded-lg shadow-xl overflow-hidden z-20"
              >
                <button
                  onClick={() => {
                    setSelectedYear(null)
                    setIsYearDropdownOpen(false)
                  }}
                  className={`w-full px-6 py-3 text-left transition-all duration-200 ${
                    selectedYear === null
                      ? 'bg-yellow-400 text-black font-semibold'
                      : 'text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  Todos los años
                </button>
                {availableYears.map((year) => (
                  <button
                    key={year}
                    onClick={() => {
                      setSelectedYear(year)
                      setIsYearDropdownOpen(false)
                    }}
                    className={`w-full px-6 py-3 text-left transition-all duration-200 ${
                      selectedYear === year
                        ? 'bg-yellow-400 text-black font-semibold'
                        : 'text-white/70 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Results count */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-white/40 mb-8"
        >
          {filteredPosts.length} {filteredPosts.length === 1 ? 'noticia encontrada' : 'noticias encontradas'}
        </motion.p>

        {/* Blog posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-yellow-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-400/20"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Category badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-sm border border-white/20">
                  {getCategoryIcon(post.category)}
                  <span className="text-white text-xs font-medium">{post.category}</span>
                </div>

                {/* Year badge */}
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-yellow-400 text-black text-xs font-bold">
                  {post.year}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Date */}
                <div className="flex items-center gap-2 text-white/40 text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <time>{post.date}</time>
                </div>

                {/* Production name */}
                <div className="text-yellow-400 text-sm font-semibold mb-2">
                  {post.production}
                  {post.role && <span className="text-white/40"> • {post.role}</span>}
                </div>

                {/* Title */}
                <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                {/* Read more */}
                <div className="flex items-center gap-2 text-yellow-400 font-medium text-sm group-hover:gap-3 transition-all duration-300">
                  <span>Leer más</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Empty state */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/5 border border-white/10 mb-6">
              <Calendar className="w-10 h-10 text-white/40" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-white mb-3">
              No hay noticias para esta selección
            </h3>
            <p className="text-white/60">
              Prueba con otros filtros para ver más contenido
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}