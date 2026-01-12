'use client'

import { motion } from 'framer-motion'
import { useState, useMemo } from 'react'
import Image from 'next/image'
import { Calendar, Film, Tv, Theater, ChevronDown, ExternalLink, Newspaper } from 'lucide-react'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  category: 'Series TV' | 'Cine' | 'Teatro'
  year: number
  date: string
  fullDate: string
  image: string
  production: string
  medium: string
  link: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Un té con Almagro San Miguel: "La Moderna ha marcado un antes y un después en mi vida"',
    excerpt: 'El actor nos habla de su futuro en la serie y de todo lo que ha aprendido interpretando a Íñigo Peñalver. "Agradezco muchísimo la oportunidad que me han dado".',
    category: 'Series TV',
    year: 2024,
    date: '8 Jun 2024',
    fullDate: '2024-06-08',
    image: 'https://github.com/user-attachments/assets/43e8482d-f288-4cd0-b1ad-31e054eafdf4',
    production: 'La Moderna',
    medium: 'RTVE',
    link: 'https://www.rtve.es/television/20240608/con-almagro-san-miguel-moderna-cambiado-antes-despues-vida/16137963.shtml',
  },
  {
    id: 2,
    title: 'Almagro San Miguel, el galán de La Moderna: "El amor tiende a no caber en definiciones"',
    excerpt: 'El actor lleva desde septiembre interpretando a Íñigo Peñalver en La Moderna, un papel que ha hecho que muchos seguidores le tengan un cariño muy especial.',
    category: 'Series TV',
    year: 2023,
    date: '2 Dic 2023',
    fullDate: '2023-12-02',
    image: 'https://github.com/user-attachments/assets/43e8482d-f288-4cd0-b1ad-31e054eafdf4',
    production: 'La Moderna',
    medium: 'RTVE',
    link: 'https://www.rtve.es/television/20231202/moderna-entrevista-almagro-san-miguel-inigo-penalver/2463590.shtml',
  },
  {
    id: 3,
    title: 'Quién es Almagro San Miguel, el actor de Íñigo Peñalver en Salón de té La Moderna',
    excerpt: 'El actor sevillano hizo sus primeros pinitos sobre las tablas con la Compañía Nacional de Teatro Clásico. Después de obras como Don Juan Tenorio y Oliver Twist, llegó a TV.',
    category: 'Series TV',
    year: 2023,
    date: '25 Oct 2023',
    fullDate: '2023-10-25',
    image: 'https://github.com/user-attachments/assets/43e8482d-f288-4cd0-b1ad-31e054eafdf4',
    production: 'La Moderna',
    medium: '20 Minutos',
    link: 'https://www.20minutos.es/cinemania/series/quien-es-almagro-san-miguel-actor-inigo-penalver-salon-te-moderna-5179648/',
  },
  {
    id: 4,
    title: 'Almagro San Miguel: "El teatro se abre paso siempre y quien quiera contar algo lo hará"',
    excerpt: 'A Almagro San Miguel podemos verle derrochando talento en Vis a Vis: El Oasis y en la serie histórica de Amazon Prime Video Hernán.',
    category: 'Series TV',
    year: 2020,
    date: '20 Abr 2020',
    fullDate: '2020-04-20',
    image: 'https://github.com/user-attachments/assets/592b31fa-c2d0-4b08-b522-f84ad45b6651',
    production: 'Vis a vis: El Oasis',
    medium: 'The Citizen',
    link: 'https://thecitizen.es/cultura/almagro-san-miguel-entrv/',
  },
  {
    id: 5,
    title: 'Almagro San Miguel (Dieguito): "El oasis es el broche de oro a la relación de Maca y Zulema"',
    excerpt: 'Esta noche FOX estrena a las 22h Vis a Vis: El Oasis, el spin-off de la exitosa serie. Entrevista exclusiva con el actor sobre su personaje Diego Ramala.',
    category: 'Series TV',
    year: 2020,
    date: '20 Abr 2020',
    fullDate: '2020-04-20',
    image: 'https://github.com/user-attachments/assets/592b31fa-c2d0-4b08-b522-f84ad45b6651',
    production: 'Vis a vis: El Oasis',
    medium: 'YourWay Magazine',
    link: 'https://www.yourwaymagazine.com/entrevista-almagro-san-miguel-el-oasis/',
  },
  {
    id: 6,
    title: 'El Oasis es un regalo para los seguidores de Vis a Vis',
    excerpt: 'Hablamos con el actor Almagro San Miguel sobre sus recientes trabajos en Hernán, la serie de Amazon Prime Video, y ahora en Vis a Vis: El Oasis.',
    category: 'Series TV',
    year: 2020,
    date: '13 May 2020',
    fullDate: '2020-05-13',
    image: 'https://github.com/user-attachments/assets/592b31fa-c2d0-4b08-b522-f84ad45b6651',
    production: 'Vis a vis: El Oasis',
    medium: 'YouTube Interview',
    link: 'https://www.youtube.com/watch?v=eVzy4GL1BoY',
  },
  {
    id: 7,
    title: 'Almagro San Miguel protagoniza 236 episodios de La Moderna en TVE',
    excerpt: 'El actor sevillano ha interpretado a Íñigo Peñalver durante 236 episodios de la serie diaria de época que ha conquistado las tardes de La 1.',
    category: 'Series TV',
    year: 2024,
    date: '20 Sep 2024',
    fullDate: '2024-09-20',
    image: 'https://github.com/user-attachments/assets/43e8482d-f288-4cd0-b1ad-31e054eafdf4',
    production: 'La Moderna',
    medium: 'IMDb',
    link: 'https://www.imdb.com/name/nm9017709/',
  },
  {
    id: 8,
    title: 'Almagro San Miguel en Hernán: interpretando a Gonzalo de Sandoval',
    excerpt: 'El actor participa en la ambiciosa serie histórica de Amazon Prime Video sobre la conquista de México, interpretando al Capitán Gonzalo de Sandoval durante 8 episodios.',
    category: 'Series TV',
    year: 2019,
    date: '21 Nov 2019',
    fullDate: '2019-11-21',
    image: 'https://github.com/user-attachments/assets/e6f1ac3c-faec-4e6f-b1fd-e91a58b1cd1e',
    production: 'Hernán',
    medium: 'IMDb',
    link: 'https://www.imdb.com/name/nm9017709/',
  },
]

// Ordenar posts por fecha (más recientes primero)
const sortedBlogPosts = [...blogPosts].sort((a, b) => 
  new Date(b.fullDate).getTime() - new Date(a.fullDate).getTime()
)

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
    const years = [...new Set(sortedBlogPosts.map(post => post.year))]
    return years.sort((a, b) => b - a)
  }, [])

  // Filtrar posts
  const filteredPosts = useMemo(() => {
    return sortedBlogPosts.filter(post => {
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
            <Newspaper className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 text-sm font-medium tracking-wide">PRENSA & MEDIOS</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            <span className="text-white">Noticias </span>
            <span className="text-yellow-400">& Entrevistas</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Cobertura mediática y entrevistas sobre mis proyectos profesionales
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
                {/* Medium & Date */}
                <div className="flex items-center justify-between text-xs mb-3">
                  <div className="flex items-center gap-2 text-yellow-400 font-semibold">
                    <Newspaper className="w-3.5 h-3.5" />
                    <span>{post.medium}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-white/40">
                    <Calendar className="w-3.5 h-3.5" />
                    <time>{post.date}</time>
                  </div>
                </div>

                {/* Production name */}
                <div className="text-white/50 text-sm font-medium mb-2">
                  {post.production}
                </div>

                {/* Title */}
                <h3 className="text-lg font-serif font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-white/60 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read more link */}
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-yellow-400 font-medium text-sm group-hover:gap-3 transition-all duration-300"
                >
                  <span>Leer artículo completo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
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
              <Newspaper className="w-10 h-10 text-white/40" />
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