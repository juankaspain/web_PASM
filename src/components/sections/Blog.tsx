'use client'
import { useState, useMemo } from 'react'
import Image from '@/components/ui/SafeImage'
import {
  Calendar,
  Film,
  Tv,
  Theater,
  ChevronDown,
  ExternalLink,
  Newspaper,
} from 'lucide-react'
import { useOneShotInView } from '@/hooks/useOneShotInView'

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
    title:
      'Un té con Almagro San Miguel: "La Moderna ha marcado un antes y un después en mi vida"',
    excerpt:
      'El actor nos habla de su futuro en la serie y de todo lo que ha aprendido interpretando a Íñigo Peñalver. "Agradezco muchísimo la oportunidad que me han dado".',
    category: 'Series TV',
    year: 2024,
    date: '8 Jun 2024',
    fullDate: '2024-06-08',
    image: '/assets/blog/la-moderna-rtve-2024.jpg',
    production: 'La Moderna',
    medium: 'RTVE',
    link: 'https://www.rtve.es/television/20240608/con-almagro-san-miguel-moderna-cambiado-antes-despues-vida/16137963.shtml',
  },
  {
    id: 2,
    title:
      'Almagro San Miguel, el galán de La Moderna: "El amor tiende a no caber en definiciones"',
    excerpt:
      'El actor lleva desde septiembre interpretando a Íñigo Peñalver en La Moderna, un papel que ha hecho que muchos seguidores le tengan un cariño muy especial.',
    category: 'Series TV',
    year: 2023,
    date: '2 Dic 2023',
    fullDate: '2023-12-02',
    image: '/assets/blog/la-moderna-rtve-2023.jpg',
    production: 'La Moderna',
    medium: 'RTVE',
    link: 'https://www.rtve.es/television/20231202/moderna-entrevista-almagro-san-miguel-inigo-penalver/2463590.shtml',
  },
  {
    id: 3,
    title:
      'Quién es Almagro San Miguel, el actor de Íñigo Peñalver en Salón de té La Moderna',
    excerpt:
      'El actor sevillano hizo sus primeros pinitos sobre las tablas con la Compañía Nacional de Teatro Clásico. Después de obras como Don Juan Tenorio y Oliver Twist, llegó a TV.',
    category: 'Series TV',
    year: 2023,
    date: '25 Oct 2023',
    fullDate: '2023-10-25',
    image: '/assets/blog/la-moderna-20minutos.jpg',
    production: 'La Moderna',
    medium: '20 Minutos',
    link: 'https://www.20minutos.es/cinemania/series/quien-es-almagro-san-miguel-actor-inigo-penalver-salon-te-moderna-5179648/',
  },
  {
    id: 4,
    title:
      'Almagro San Miguel: "El teatro se abre paso siempre y quien quiera contar algo lo hará"',
    excerpt:
      'A Almagro San Miguel podemos verle derrochando talento en Vis a Vis: El Oasis y en la serie histórica de Amazon Prime Video Hernán.',
    category: 'Series TV',
    year: 2020,
    date: '20 Abr 2020',
    fullDate: '2020-04-20',
    image:
      'https://github.com/user-attachments/assets/43e8482d-f288-4cd0-b1ad-31e054eafdf4',
    production: 'Vis a vis: El Oasis',
    medium: 'The Citizen',
    link: 'https://thecitizen.es/cultura/almagro-san-miguel-entrv/',
  },
  {
    id: 5,
    title:
      'Almagro San Miguel (Dieguito): "El oasis es el broche de oro a la relación de Maca y Zulema"',
    excerpt:
      'Esta noche FOX estrena a las 22h Vis a Vis: El Oasis, el spin-off de la exitosa serie. Entrevista exclusiva con el actor sobre su personaje Diego Ramala.',
    category: 'Series TV',
    year: 2020,
    date: '20 Abr 2020',
    fullDate: '2020-04-20',
    image:
      'https://github.com/user-attachments/assets/43e8482d-f288-4cd0-b1ad-31e054eafdf4',
    production: 'Vis a vis: El Oasis',
    medium: 'YourWay Magazine',
    link: 'https://www.yourwaymagazine.com/entrevista-almagro-san-miguel-el-oasis/',
  },
  {
    id: 6,
    title: 'El Oasis es un regalo para los seguidores de Vis a Vis',
    excerpt:
      'Hablamos con el actor Almagro San Miguel sobre sus recientes trabajos en Hernán, la serie de Amazon Prime Video, y ahora en Vis a Vis: El Oasis.',
    category: 'Series TV',
    year: 2020,
    date: '13 May 2020',
    fullDate: '2020-05-13',
    image:
      'https://github.com/user-attachments/assets/43e8482d-f288-4cd0-b1ad-31e054eafdf4',
    production: 'Vis a vis: El Oasis',
    medium: 'YouTube Interview',
    link: 'https://www.youtube.com/watch?v=eVzy4GL1BoY',
  },
  {
    id: 7,
    title: 'Almagro San Miguel protagoniza 236 episodios de La Moderna en TVE',
    excerpt:
      'El actor sevillano ha interpretado a Íñigo Peñalver durante 236 episodios de la serie diaria de época que ha conquistado las tardes de La 1.',
    category: 'Series TV',
    year: 2024,
    date: '20 Sep 2024',
    fullDate: '2024-09-20',
    image: '/assets/blog/la-moderna-imdb.jpg',
    production: 'La Moderna',
    medium: 'IMDb',
    link: 'https://www.imdb.com/name/nm9017709/',
  },
  {
    id: 8,
    title: 'Almagro San Miguel en Hernán: interpretando a Gonzalo de Sandoval',
    excerpt:
      'El actor participa en la ambiciosa serie histórica de Amazon Prime Video sobre la conquista de México, interpretando al Capitán Gonzalo de Sandoval durante 8 episodios.',
    category: 'Series TV',
    year: 2019,
    date: '21 Nov 2019',
    fullDate: '2019-11-21',
    image:
      'https://github.com/user-attachments/assets/43e8482d-f288-4cd0-b1ad-31e054eafdf4',
    production: 'Hernán',
    medium: 'IMDb',
    link: 'https://www.imdb.com/name/nm9017709/',
  },
]

// Ordenar posts por fecha (más recientes primero)
const sortedBlogPosts = [...blogPosts].sort(
  (a, b) => new Date(b.fullDate).getTime() - new Date(a.fullDate).getTime()
)

const categories = ['Todas', 'Series TV', 'Cine', 'Teatro'] as const
type Category = (typeof categories)[number]

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Series TV':
      return <Tv className="h-4 w-4" />
    case 'Cine':
      return <Film className="h-4 w-4" />
    case 'Teatro':
      return <Theater className="h-4 w-4" />
    default:
      return null
  }
}

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('Todas')
  const [selectedYear, setSelectedYear] = useState<number | null>(null)
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false)

  const [headerRef, headerInView] = useOneShotInView({ threshold: 0.1 })
  const [badgeRef, badgeInView] = useOneShotInView({ threshold: 0.1 })
  const [filtersRef, filtersInView] = useOneShotInView({ threshold: 0.1 })
  const [resultsCountRef, resultsCountInView] = useOneShotInView({
    threshold: 0.1,
  })
  const [gridRef, gridInView] = useOneShotInView({ threshold: 0.05 })

  // Obtener años únicos ordenados descendentemente
  const availableYears = useMemo(() => {
    const years = [...new Set(sortedBlogPosts.map((post) => post.year))]
    return years.sort((a, b) => b - a)
  }, [])

  // Filtrar posts
  const filteredPosts = useMemo(() => {
    return sortedBlogPosts.filter((post) => {
      const categoryMatch =
        selectedCategory === 'Todas' || post.category === selectedCategory
      const yearMatch = selectedYear === null || post.year === selectedYear
      return categoryMatch && yearMatch
    })
  }, [selectedCategory, selectedYear])

  return (
    <section
      id="blog"
      className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-black py-32"
    >
      {/* Background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-10 top-20 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div
          ref={headerRef}
          className={`mb-16 text-center transition-all duration-[600ms] ${headerInView ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
        >
          <div
            ref={badgeRef}
            className={`mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 transition-transform duration-500 ${badgeInView ? 'scale-100' : 'scale-0'}`}
          >
            <Newspaper className="h-4 w-4 text-yellow-400" />
            <span className="text-sm font-medium tracking-wide text-yellow-400">
              PRENSA & MEDIOS
            </span>
          </div>

          <h2 className="mb-6 font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
            <span className="text-white">Noticias </span>
            <span className="text-yellow-400">& Entrevistas</span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-white/60">
            Cobertura mediática y entrevistas sobre mis proyectos profesionales
          </p>
        </div>

        {/* Filters */}
        <div
          ref={filtersRef}
          className={`mb-12 flex flex-col items-center justify-center gap-4 transition-all delay-200 duration-[600ms] md:flex-row ${filtersInView ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
        >
          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                onClick={() => setSelectedCategory(category)}
                aria-pressed={selectedCategory === category}
                className={`rounded-lg px-6 py-3 font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-yellow-400 text-black shadow-lg shadow-yellow-400/30'
                    : 'border border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Year dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsYearDropdownOpen(!isYearDropdownOpen)}
              aria-expanded={isYearDropdownOpen}
              aria-label={`Filtrar por año: ${selectedYear || 'Todos los años'}`}
              className="flex min-w-[140px] items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-white/70 transition-all duration-300 hover:bg-white/10 hover:text-white"
            >
              <Calendar className="h-4 w-4" />
              <span className="font-medium">{selectedYear || 'Todos los años'}</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${
                  isYearDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Dropdown menu */}
            {isYearDropdownOpen && (
              <div className="absolute left-0 right-0 top-full z-20 mt-2 overflow-hidden rounded-lg border border-white/10 bg-slate-900 shadow-xl">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedYear(null)
                    setIsYearDropdownOpen(false)
                  }}
                  className={`w-full px-6 py-3 text-left transition-all duration-200 ${
                    selectedYear === null
                      ? 'bg-yellow-400 font-semibold text-black'
                      : 'text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  Todos los años
                </button>
                {availableYears.map((year) => (
                  <button
                    type="button"
                    key={year}
                    onClick={() => {
                      setSelectedYear(year)
                      setIsYearDropdownOpen(false)
                    }}
                    className={`w-full px-6 py-3 text-left transition-all duration-200 ${
                      selectedYear === year
                        ? 'bg-yellow-400 font-semibold text-black'
                        : 'text-white/70 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Results count */}
        <p
          ref={resultsCountRef}
          className={`mb-8 text-center text-white/40 transition-opacity duration-[600ms] ${resultsCountInView ? 'opacity-100' : 'opacity-0'}`}
        >
          {filteredPosts.length}{' '}
          {filteredPosts.length === 1 ? 'noticia encontrada' : 'noticias encontradas'}
        </p>

        {/* Blog posts grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredPosts.map((post, index) => (
            <article
              key={post.id}
              aria-labelledby={`blog-post-${post.id}`}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:border-yellow-400/50 hover:shadow-2xl hover:shadow-yellow-400/20 ${gridInView ? 'translate-y-0 opacity-100' : 'translate-y-[30px] opacity-0'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
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
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-lg border border-white/20 bg-black/60 px-3 py-1.5 backdrop-blur-sm">
                  {getCategoryIcon(post.category)}
                  <span className="text-xs font-medium text-white">{post.category}</span>
                </div>

                {/* Year badge */}
                <div className="absolute right-4 top-4 rounded-lg bg-yellow-400 px-3 py-1.5 text-xs font-bold text-black">
                  {post.year}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Medium & Date */}
                <div className="mb-3 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 font-semibold text-yellow-400">
                    <Newspaper className="h-3.5 w-3.5" />
                    <span>{post.medium}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-white/40">
                    <Calendar className="h-3.5 w-3.5" />
                    <time dateTime={post.fullDate}>{post.date}</time>
                  </div>
                </div>

                {/* Production name */}
                <div className="mb-2 text-sm font-medium text-white/50">
                  {post.production}
                </div>

                {/* Title */}
                <h3
                  id={`blog-post-${post.id}`}
                  className="mb-3 line-clamp-2 font-serif text-lg font-bold text-white transition-colors duration-300 group-hover:text-yellow-400"
                >
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-white/60">
                  {post.excerpt}
                </p>

                {/* Read more link */}
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Leer artículo completo: ${post.title} en ${post.medium} (se abre en nueva ventana)`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-yellow-400 transition-all duration-300 group-hover:gap-3"
                >
                  <span>Leer artículo completo</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Empty state */}
        {filteredPosts.length === 0 && (
          <div className="animate-fadeIn py-20 text-center">
            <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/5">
              <Newspaper className="h-10 w-10 text-white/40" />
            </div>
            <h3 className="mb-3 font-serif text-2xl font-bold text-white">
              No hay noticias para esta selección
            </h3>
            <p className="text-white/60">
              Prueba con otros filtros para ver más contenido
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
