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
    title:
      'Pedro Almagro brilla en su interpretación de "El Último Adiós"',
    excerpt:
      'Una actuación magistral que confirma a Almagro como uno de los actores más talentosos de su generación. Su interpretación es visceral y emocionalmente devastadora.',
    image:
      'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=400',
    link: '#',
    category: 'review',
  },
  {
    publication: 'ABC Sevilla',
    date: '8 de Febrero, 2024',
    title: 'El hijo pródigo del teatro sevillano regresa triunfal',
    excerpt:
      'Pedro Almagro regresa a sus raíces con una interpretación emotiva y poderosa en el Teatro Lope de Vega. El público sevillano aplaude de pie.',
    image:
      'https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=400',
    link: '#',
    category: 'news',
  },
  {
    publication: 'Fotogramas',
    date: '22 de Enero, 2024',
    title: 'Los 10 rostros del cine español a seguir en 2024',
    excerpt:
      'Almagro encabeza nuestra lista de actores emergentes con proyectos que prometen cautivar al público. Su versatilidad es su mayor fortaleza.',
    image:
      'https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=400',
    link: '#',
    category: 'news',
  },
  {
    publication: 'Variety',
    date: '10 de Diciembre, 2023',
    title: 'Spanish Talent to Watch: Pedro Almagro Makes International Waves',
    excerpt:
      'With his nuanced performances and undeniable screen presence, Almagro is catching the attention of international casting directors.',
    image:
      'https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=400',
    link: '#',
    category: 'interview',
  },
  {
    publication: 'El Mundo',
    date: '5 de Noviembre, 2023',
    title: 'Entrevista exclusiva: "El teatro es mi primera pasión"',
    excerpt:
      'En una conversación íntima, Pedro Almagro habla sobre sus orígenes, sus sueños y por qué el teatro siempre será su hogar artístico.',
    image:
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=400',
    link: '#',
    category: 'interview',
  },
  {
    publication: 'La Vanguardia',
    date: '18 de Octubre, 2023',
    title: 'Crítica: Hamlet reinventado con maestría',
    excerpt:
      'La interpretación de Almagro es una clase magistral de actuación clásica con toques contemporáneos. Una experiencia teatral imperdible.',
    image:
      'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=400',
    link: '#',
    category: 'review',
  },
]

export const testimonials: Testimonial[] = [
  {
    text: 'Pedro tiene esa rara habilidad de desaparecer completamente en sus personajes. Es un placer dirigirlo, siempre aporta capas de profundidad que enriquecen cada escena.',
    author: 'Carmen Martínez',
    role: 'Directora de Cine',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100',
  },
  {
    text: 'Su compromiso con cada proyecto y su profesionalismo son ejemplares. Un verdadero artista que entiende la responsabilidad de contar historias.',
    author: 'Javier Sánchez',
    role: 'Director de Teatro',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100',
  },
  {
    text: 'Trabajar con Pedro fue una de las mejores experiencias de mi carrera. Su generosidad en escena y su talento natural crean magia.',
    author: 'Laura Campos',
    role: 'Actriz',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100',
  },
  {
    text: 'Pedro no solo actúa, vive cada personaje. Su dedicación al oficio es inspiradora para todo el equipo de producción.',
    author: 'Miguel Torres',
    role: 'Productor Ejecutivo',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100',
  },
]
