import { Film, TvMinimal, Theater } from 'lucide-react'

export interface Project {
  id: number
  title: string
  category: 'Cine' | 'TV' | 'Teatro'
  role: string
  year: number
  image: string
  description: string
  icon: typeof Film | typeof TvMinimal | typeof Theater
  awards?: string[]
  director?: string
  production?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'El Último Adiós',
    category: 'Cine',
    role: 'Protagonista - Marcos Fernández',
    year: 2024,
    image:
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800',
    description:
      'Drama intenso sobre pérdida, redención y segundas oportunidades en la España contemporánea. Un hombre debe enfrentar su pasado antes de que sea demasiado tarde.',
    icon: Film,
    awards: ['Mejor Actor - Festival de Cine de Málaga 2024'],
    director: 'Carmen López',
    production: 'Producciones Andaluzas',
  },
  {
    id: 2,
    title: 'Sombras de Medianoche',
    category: 'TV',
    role: 'Inspector David Morales (Recurrente)',
    year: 2023,
    image:
      'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=800',
    description:
      'Serie de suspense que cautivó a millones de espectadores. Crímenes sin resolver en una ciudad que nunca duerme. 8 episodios de pura tensión.',
    icon: TvMinimal,
    director: 'Miguel Ángel Ruiz',
    production: 'Netflix España',
  },
  {
    id: 3,
    title: 'Hamlet',
    category: 'Teatro',
    role: 'Hamlet - Príncipe de Dinamarca',
    year: 2023,
    image:
      'https://images.unsplash.com/photo-1503095396549-807759245b35?q=80&w=800',
    description:
      'Adaptación moderna y visceral del clásico de Shakespeare. Una producción que desafía los límites entre la locura y la lucidez. Más de 50 funciones con sold out.',
    icon: Theater,
    awards: ['Nominación Mejor Actor - Premios Max 2023'],
    director: 'Alberto Sánchez',
    production: 'Teatro Español Madrid',
  },
  {
    id: 4,
    title: 'Caminos Cruzados',
    category: 'Cine',
    role: 'Secundario - Pablo Vega',
    year: 2023,
    image:
      'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=800',
    description:
      'Comedia dramática sobre encuentros fortuitos que cambian vidas. Una historia coral sobre el destino, el azar y las decisiones que tomamos.',
    icon: Film,
    director: 'Luis Torres',
    production: 'A Contracorriente Films',
  },
  {
    id: 5,
    title: 'La Casa de Bernarda Alba',
    category: 'Teatro',
    role: 'Pepe el Romano',
    year: 2022,
    image:
      'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=800',
    description:
      'Clásico imperecedero de Federico García Lorca en el emblemático Teatro Lope de Vega de Sevilla. Una producción que rindió homenaje a nuestras raíces andaluzas.',
    icon: Theater,
    director: 'María José Gómez',
    production: 'Teatro Lope de Vega',
  },
  {
    id: 6,
    title: 'Código Rojo',
    category: 'TV',
    role: 'Protagonista - Capitán Álvarez',
    year: 2022,
    image:
      'https://images.unsplash.com/photo-1574267432644-f046462e8e4d?q=80&w=800',
    description:
      'Thriller policial con altos ratings. Una unidad especial lucha contra el crimen organizado en una carrera contrarreloj. 2 temporadas, 16 episodios.',
    icon: TvMinimal,
    awards: ['Mejor Serie Thriller - Premios Feroz 2023'],
    director: 'Javier Martínez',
    production: 'Movistar+ Originales',
  },
  {
    id: 7,
    title: 'La Sombra del Pasado',
    category: 'Cine',
    role: 'Protagonista - Daniel Ortega',
    year: 2022,
    image:
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=800',
    description:
      'Thriller psicológico sobre un hombre atormentado por eventos de su niñez. Una exploración profunda del trauma y la memoria.',
    icon: Film,
    director: 'Elena Fernández',
    production: 'El Deseo Producciones',
  },
  {
    id: 8,
    title: 'Don Juan Tenorio',
    category: 'Teatro',
    role: 'Don Juan',
    year: 2021,
    image:
      'https://images.unsplash.com/photo-1514306191717-452ec28c7814?q=80&w=800',
    description:
      'Interpretación apasionada del clásico de José Zorrilla. Una celebración del romanticismo español con producción de lujo.',
    icon: Theater,
    director: 'Carlos Romero',
    production: 'Teatro de la Maestranza',
  },
  {
    id: 9,
    title: 'Entre dos Mundos',
    category: 'TV',
    role: 'Doctor Rafael Sánchez (Principal)',
    year: 2021,
    image:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800',
    description:
      'Drama médico que explora dilemas éticos en un hospital de Barcelona. Emoción y tensión en cada episodio.',
    icon: TvMinimal,
    director: 'Patricia García',
    production: 'TVE',
  },
]

export const categories = ['Todos', 'Cine', 'TV', 'Teatro'] as const
