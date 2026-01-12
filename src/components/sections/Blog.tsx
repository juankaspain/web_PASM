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
  fullDate: string // Para ordenar correctamente
  image: string
  production: string
  medium: string // Medio de comunicación
  link: string // URL externa
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'RTVE obra el milagro y confirma el regreso de La Moderna',
    excerpt: 'La cadena pública rectifica y confirma la continuidad de una de sus series diarias más reivindicadas. La ficción de época volverá a los hogares españoles.',
    category: 'Series TV',
    year: 2025,
    date: '12 Dic 2025',
    fullDate: '2025-12-12',
    image: 'https://github.com/user-attachments/assets/43e8482d-f288-4cd0-b1ad-31e054eafdf4',
    production: 'La Moderna',
    medium: 'Artículo 14',
    link: 'https://www.articulo14.es/cultura/rtve-obra-el-milagro-y-confirma-el-regreso-de-la-moderna-20251212.html',
  },
  {
    id: 2,
    title: 'Almagro San Miguel, de La Moderna a la película sobre ETA',
    excerpt: 'El actor sevillano participa en la nueva producción cinematográfica que retrata episodios históricos de España. Compagina su trabajo en televisión con el cine.',
    category: 'Cine',
    year: 2025,
    date: '17 Oct 2025',
    fullDate: '2025-10-17',
    image: 'https://github.com/user-attachments/assets/43e8482d-f288-4cd0-b1ad-31e054eafdf4',
    production: 'Carta Blanca',
    medium: 'Diario de Sevilla',
    link: 'https://www.diariodesevilla.es/television/almagro-san-miguel-moderna-pelicula_0_2004995240.html',
  },
  {
    id: 3,
    title: 'Stéphanie Magnin, Helena Ezquerro y Almagro San Miguel se despiden de La Moderna',
    excerpt: 'Los tres protagonistas de la exitosa serie de época anuncian su salida tras más de 200 episodios. Un cierre emocional para los personajes más queridos.',
    category: 'Series TV',
    year: 2024,
    date: '20 Sep 2024',
    fullDate: '2024-09-20',
    image: 'https://github.com/user-attachments/assets/43e8482d-f288-4cd0-b1ad-31e054eafdf4',
    production: 'La Moderna',
    medium: 'RTVE',
    link: 'https://www.rtve.es/television/20240920/stephanie-magnin-helena-ezquerro-almagro-san-miguel-se-despiden-moderna/16256288.shtml',
  },
  {
    id: 4,
    title: 'Un té con Almagro San Miguel: La Moderna ha marcado un antes y un después en mi vida',
    excerpt: 'El actor habla de su futuro en la serie y de todo lo que ha aprendido interpretando a Íñigo Peñalver. Una entrevista íntima sobre su experiencia.',
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
    id: 5,
    title: 'El actor sevillano Almagro San Miguel, novedad en La Caza: Guadiana',
    excerpt: 'La nueva temporada del thriller de TVE se estrena con incorporaciones al reparto. El actor se suma a este proyecto de misterio y suspense.',
    category: 'Series TV',
    year: 2024,
    date: '16 Mar 2024',
    fullDate: '2024-03-16',
    image: 'https://github.com/user-attachments/assets/5fbfd580-ca05-4d3f-a835-74c9c121efe4',
    production: 'La Caza: Guadiana',
    medium: 'Gatrópolis',
    link: 'https://gatropolis.com/series/sevillano-almagro-san-miguel-caza-guadiana/',
  },
  {
    id: 6,
    title: 'Entrevista a Almagro San Miguel, el galán de La Moderna',
    excerpt: 'El actor nos habla de su trabajo en la serie en estos últimos meses y de los desafíos que le esperan a su personaje Íñigo Peñalver.',
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
    id: 7,
    title: 'Almagro San Miguel: Cuando llegué a La Moderna pensé dónde me he metido; voy a morir',
    excerpt: 'El actor sevillano confiesa sus primeras impresiones al entrar en la serie diaria de TVE y cómo ha superado el reto de grabar cada día.',
    category: 'Series TV',
    year: 2023,
    date: '26 Nov 2023',
    fullDate: '2023-11-26',
    image: 'https://github.com/user-attachments/assets/43e8482d-f288-4cd0-b1ad-31e054eafdf4',
    production: 'La Moderna',
    medium: 'La Razón',
    link: 'https://www.larazon.es/television/series/almagro-san-miguel-cuando-llegue-moderna-pense-donde-metido-voy-morir_202311266562edda5',
  },
  {
    id: 8,
    title: 'Quién es Almagro San Miguel (Íñigo) de Salón de té La Moderna',
    excerpt: 'El protagonista de la serie de época de TVE es uno de los nuevos talentos que forman el elenco de actores. Conoce su trayectoria profesional.',
    category: 'Series TV',
    year: 2023,
    date: '29 Sep 2023',
    fullDate: '2023-09-29',
    image: 'https://github.com/user-attachments/assets/43e8482d-f288-4cd0-b1ad-31e054eafdf4',
    production: 'La Moderna',
    medium: 'El Español',
    link: 'https://www.elespanol.com/bluper/20230929/almagro-san-miguel-inigo-salon-moderna-parque-atracciones-television/798170293_0.html',
  },
  {
    id: 9,
    title: 'Almagro San Miguel llega a Netflix con Vis a Vis: El Oasis',
    excerpt: 'El actor sigue deleitándonos cada miércoles con su participación en Estoy Vivo. Su papel de Diego Ramala ha sido muy reconocido y alabado.',
    category: 'Series TV',
    year: 2021,
    date: '16 Abr 2021',
    fullDate: '2021-04-16',
    image: 'https://github.com/user-attachments/assets/592b31fa-c2d0-4b08-b522-f84ad45b6651',
    production: 'Vis a vis: El Oasis',
    medium: 'Barna Foto Press',
    link: 'https://barnafotopress.com/2021/04/16/almagro-san-miguel-llega-a-netflix-con-vis-a-vis-el-oasis-y-sigue-con-estoy-vivo-en-tve/',
  },
  {
    id: 10,
    title: 'Vis a vis: El Oasis - El esperado spin-off llega a Fox',
    excerpt: 'La continuación de la exitosa serie carcelaria se estrena con nuevos personajes y tramas que mantienen la esencia del original.',
    category: 'Series TV',
    year: 2020,
    date: '20 Abr 2020',
    fullDate: '2020-04-20',
    image: 'https://github.com/user-attachments/assets/592b31fa-c2d0-4b08-b522-f84ad45b6651',
    production: 'Vis a vis: El Oasis',
    medium: 'Vertele',
    link: 'https://vertele.eldiario.es/noticias/vis-a-vis-el-oasis-fox/',
  },
  {
    id: 11,
    title: 'Hernán: Amazon Prime Video estrena su gran apuesta histórica',
    excerpt: 'La plataforma presenta una ambiciosa producción sobre la conquista de México, con un reparto internacional y una puesta en escena espectacular.',
    category: 'Series TV',
    year: 2019,
    date: '23 Nov 2019',
    fullDate: '2019-11-23',
    image: 'https://github.com/user-attachments/assets/e6f1ac3c-faec-4e6f-b1fd-e91a58b1cd1e',
    production: 'Hernán',
    medium: 'Fotogramas',
    link: 'https://www.fotogramas.es/series-tv-noticias/a29893365/hernan-serie-amazon-reparto-sinopsis/',
  },
  {
    id: 12,
    title: 'Almagro San Miguel en Hernán, el hombre de Amazon Prime Video',
    excerpt: 'El actor participa con el personaje del Capitán Gonzalo de Sandoval en la nueva serie histórica de Amazon sobre la conquista de México.',
    category: 'Series TV',
    year: 2019,
    date: '21 Nov 2019',
    fullDate: '2019-11-21',
    image: 'https://github.com/user-attachments/assets/e6f1ac3c-faec-4e6f-b1fd-e91a58b1cd1e',
    production: 'Hernán',
    medium: 'Work in Progress',
    link: 'https://estudio-workinprogress.com/almagro-san-miguel-hernan-el-hombre/',
  },
  {
    id: 13,
    title: 'Operación Barrio Inglés: Telecinco apuesta por la comedia de situación',
    excerpt: 'Nueva sitcom protagonizada por Carlos Areces que mezcla humor y crítica social en un barrio madrileño multicultural.',
    category: 'Series TV',
    year: 2019,
    date: '5 Mar 2019',
    fullDate: '2019-03-05',
    image: 'https://github.com/user-attachments/assets/1d7da6453ba-bc95-485b-ad27-ca73f6fd8b08',
    production: 'Operación Barrio Inglés',
    medium: 'Ecartelera',
    link: 'https://www.ecartelera.com/noticias/operacion-barrio-ingles/',
  },
  {
    id: 14,
    title: 'Estoy Vivo: La serie de TVE que mezcla policíaco con sobrenatural',
    excerpt: 'La ficción protagonizada por Javier Collás y Alejo Sauras se consolida como un fenómeno de audiencia en La 1.',
    category: 'Series TV',
    year: 2018,
    date: '12 Sep 2018',
    fullDate: '2018-09-12',
    image: 'https://github.com/user-attachments/assets/1494d8d6535291c3a2e-4cd1-a177d459bc21',
    production: 'Estoy Vivo',
    medium: 'El País',
    link: 'https://elpais.com/cultura/television/estoy-vivo-tve-serie/',
  },
  {
    id: 15,
    title: 'Oliver Twist, el musical: El gran musical familiar de la temporada',
    excerpt: 'El Teatro La Latina alberga este espectacular musical con más de 30 actores. Una experiencia única que combina emociones con altísimo nivel musical.',
    category: 'Teatro',
    year: 2016,
    date: '15 Oct 2016',
    fullDate: '2016-10-15',
    image: 'https://github.com/user-attachments/assets/9c3c5137-53ed-4c49-854d-528d94724ab4',
    production: 'Oliver Twist',
    medium: 'Es Madrid',
    link: 'https://www.esmadrid.com/agenda/oliver-twist-musical-teatro-latina',
  },
  {
    id: 16,
    title: 'Fuenteovejuna muestra su fuerza y su voz en un excelente montaje de la CNTC',
    excerpt: 'Rakel Camacho dirige esta visión renovada del clásico de Lope de Vega. Un montaje brillante y espectacular con veinte actores en escena.',
    category: 'Teatro',
    year: 2015,
    date: '18 Sep 2015',
    fullDate: '2015-09-18',
    image: 'https://github.com/user-attachments/assets/61bf2c1c-fd67-49c0-ab54-1cd045eefdb5',
    production: 'Fuente Ovejuna',
    medium: 'La Última Bambalina',
    link: 'https://laultimabambalina.blogspot.com/2025/10/fuenteovejuna-muestra-su-fuerza-y-su.html',
  },
  {
    id: 17,
    title: 'Víctor Ros: La serie de época que recupera la novela negra del XIX',
    excerpt: 'TVE apuesta por el policialaco histórico con esta adaptación de las novelas de Jerónimo Tristante, ambientada en el Madrid de 1870.',
    category: 'Series TV',
    year: 2015,
    date: '8 Ene 2015',
    fullDate: '2015-01-08',
    image: 'https://github.com/user-attachments/assets/4c3e0458-e4f4-4d6f-a093-d627e80d3d32',
    production: 'Víctor Ros',
    medium: 'ABC',
    link: 'https://www.abc.es/play/television/noticias/victor-ros-serie-tve/',
  },
  {
    id: 18,
    title: 'La Casa de Bernarda Alba: Un clásico que sigue vigente',
    excerpt: 'Nueva producción del drama lorquiano que pone el foco en la opresión y la libertad. Una obra maestra del teatro español.',
    category: 'Teatro',
    year: 2014,
    date: '22 Mar 2014',
    fullDate: '2014-03-22',
    image: 'https://github.com/user-attachments/assets/1516545016542-7a51f25a86fc7ac00b',
    production: 'La Casa de Bernarda Alba',
    medium: 'El Cultural',
    link: 'https://elcultural.com/casa-bernarda-alba-teatro/',
  },
  {
    id: 19,
    title: 'La Caza: Guadiana se estrena en TVE',
    excerpt: 'Megan Montaner, Alain Hernández y Félix Gómez regresan como protagonistas en un nuevo caso en la frontera de Huelva con Portugal.',
    category: 'Series TV',
    year: 2023,
    date: '13 Mar 2023',
    fullDate: '2023-03-13',
    image: 'https://github.com/user-attachments/assets/5fbfd580-ca05-4d3f-a835-74c9c121efe4',
    production: 'La Caza: Guadiana',
    medium: 'RTVE',
    link: 'https://www.rtve.es/rtve/20230313/1-estrena-caza-guadiana-tercera-temporada-exitosa-serie-misterio-suspense/2431400.shtml',
  },
  {
    id: 20,
    title: 'La Sombra del Padre: Teatro contemporáneo que cuestiona la masculinidad',
    excerpt: 'Una obra valiente que explora las relaciones paterno-filiales y los roles de género en la sociedad actual.',
    category: 'Teatro',
    year: 2013,
    date: '10 Nov 2013',
    fullDate: '2013-11-10',
    image: 'https://github.com/user-attachments/assets/8d05a32d-d4f0-4c49-9b18-cd298cb086ef',
    production: 'La Sombra del Padre',
    medium: 'Teatros del Canal',
    link: 'https://www.teatroscanal.com/espectaculo/la-sombra-del-padre/',
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
            <span className="text-yellow-400">& Actualidad</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Cobertura mediática de mis proyectos en televisión, cine y teatro
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