export interface PressArticle {
  publication: string
  date: string
  title: string
  excerpt: string
  image: string
  link: string
  category: 'interview' | 'review' | 'news'
}

export interface Testimonial {
  text: string
  author: string
  role: string
  image?: string
}

export const pressArticles: PressArticle[] = [
  {
    publication: 'El País',
    date: '15 de Marzo, 2024',
    title: 'Pedro Almagro brilla en su interpretación de "El Último Adiós"',
    excerpt:
      'Una actuación magistral que confirma a Almagro como uno de los actores más talentosos de su generación. Su interpretación es visceral y emocionalmente devastadora.',
    image: '/assets/press/el-pais.jpg',
    link: '#',
    category: 'review',
  },
  {
    publication: 'ABC Sevilla',
    date: '8 de Febrero, 2024',
    title: 'El hijo pródigo del teatro sevillano regresa triunfal',
    excerpt:
      'Pedro Almagro regresa a sus raíces con una interpretación emotiva y poderosa en el Teatro Lope de Vega. El público sevillano aplaude de pie.',
    image: '/assets/press/abc-sevilla.jpg',
    link: '#',
    category: 'news',
  },
  {
    publication: 'Fotogramas',
    date: '22 de Enero, 2024',
    title: 'Los 10 rostros del cine español a seguir en 2024',
    excerpt:
      'Almagro encabeza nuestra lista de actores emergentes con proyectos que prometen cautivar al público. Su versatilidad es su mayor fortaleza.',
    image: '/assets/press/fotogramas.jpg',
    link: '#',
    category: 'news',
  },
  {
    publication: 'Variety',
    date: '10 de Diciembre, 2023',
    title: 'Spanish Talent to Watch: Pedro Almagro Makes International Waves',
    excerpt:
      'With his nuanced performances and undeniable screen presence, Almagro is catching the attention of international casting directors.',
    image: '/assets/press/variety.jpg',
    link: '#',
    category: 'interview',
  },
  {
    publication: 'El Mundo',
    date: '5 de Noviembre, 2023',
    title: 'Entrevista exclusiva: "El teatro es mi primera pasión"',
    excerpt:
      'En una conversación íntima, Pedro Almagro habla sobre sus orígenes, sus sueños y por qué el teatro siempre será su hogar artístico.',
    image: '/assets/press/el-mundo.jpg',
    link: '#',
    category: 'interview',
  },
  {
    publication: 'La Vanguardia',
    date: '18 de Octubre, 2023',
    title: 'Crítica: Hamlet reinventado con maestría',
    excerpt:
      'La interpretación de Almagro es una clase magistral de actuación clásica con toques contemporáneos. Una experiencia teatral imperdible.',
    image: '/assets/press/la-vanguardia.jpg',
    link: '#',
    category: 'review',
  },
]

export const testimonials: Testimonial[] = [
  {
    text: 'Pedro tiene esa rara habilidad de desaparecer completamente en sus personajes. Es un placer dirigirlo, siempre aporta capas de profundidad que enriquecen cada escena.',
    author: 'Carmen Martínez',
    role: 'Directora de Cine',
    image: '/assets/press/testimonial-carmen.jpg',
  },
  {
    text: 'Su compromiso con cada proyecto y su profesionalismo son ejemplares. Un verdadero artista que entiende la responsabilidad de contar historias.',
    author: 'Javier Sánchez',
    role: 'Director de Teatro',
    image: '/assets/press/testimonial-javier.jpg',
  },
  {
    text: 'Trabajar con Pedro fue una de las mejores experiencias de mi carrera. Su generosidad en escena y su talento natural crean magia.',
    author: 'Laura Campos',
    role: 'Actriz',
    image: '/assets/press/testimonial-laura.jpg',
  },
  {
    text: 'Pedro no solo actúa, vive cada personaje. Su dedicación al oficio es inspiradora para todo el equipo de producción.',
    author: 'Miguel Torres',
    role: 'Productor Ejecutivo',
    image: '/assets/press/testimonial-miguel.jpg',
  },
]
