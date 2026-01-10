// Centralized type definitions

export interface Project {
  id: string
  title: string
  role: string
  year: number
  type: 'tv' | 'film' | 'theater'
  image: string
  description: string
  link?: string
  episodes?: number
}

export interface Skill {
  name: string
  level: number // 0-100
  category: 'acting' | 'technical' | 'other'
}

export interface TimelineEvent {
  year: number
  title: string
  description: string
  type: 'education' | 'work' | 'award'
}

export interface Award {
  id: string
  title: string
  organization: string
  year: number
  type: 'win' | 'nomination'
}

export interface Testimonial {
  id: string
  name: string
  role: string
  text: string
  avatar?: string
  company?: string
}

export interface NewsArticle {
  id: string
  title: string
  excerpt: string
  date: string
  image: string
  link?: string
  category: string
}

export interface Event {
  id: string
  title: string
  date: string
  location: string
  type: 'premiere' | 'performance' | 'other'
  status: 'upcoming' | 'past'
  link?: string
}

export interface PressArticle {
  id: string
  title: string
  publication: string
  date: string
  link: string
}

export interface FAQ {
  id: string
  question: string
  answer: string
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}

export interface GalleryImage {
  id: string
  src: string
  alt: string
  category: 'tv' | 'film' | 'theater' | 'bts'
}

export interface Collaborator {
  id: string
  name: string
  role: string
  image: string
  bio?: string
}

// API Response types
export interface ApiResponse<T> {
  data: T
  error?: string
  success: boolean
}

// Utility types
export type Nullable<T> = T | null
export type Optional<T> = T | undefined
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}
