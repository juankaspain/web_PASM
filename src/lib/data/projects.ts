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
    image: '/assets/gallery/el-ultimo-adios.jpg',
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
    image: '/assets/gallery/sombras-medianoche.jpg',
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
    image: '/assets/gallery/hamlet.jpg',
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
    image: '/assets/gallery/caminos-cruzados.jpg',
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
    image: '/assets/gallery/bernarda-alba.jpg',
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
    image: '/assets/gallery/codigo-rojo.jpg',
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
    image: '/assets/gallery/sombra-pasado.jpg',
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
    image: '/assets/gallery/don-juan-tenorio.jpg',
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
    image: '/assets/gallery/entre-dos-mundos.jpg',
    description:
      'Drama médico que explora dilemas éticos en un hospital de Barcelona. Emoción y tensión en cada episodio.',
    icon: TvMinimal,
    director: 'Patricia García',
    production: 'TVE',
  },
]

export const categories = ['Todos', 'Cine', 'TV', 'Teatro'] as const
