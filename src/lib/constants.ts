// Global constants for the application

export const SITE_CONFIG = {
  name: 'Almagro San Miguel',
  title: 'Almagro San Miguel - Actor Profesional',
  description:
    'Portfolio profesional de Almagro San Miguel. Actor con 13+ años de experiencia en TV, cine y teatro. La Moderna, Vis a vis, TVE.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://almagrosanmiguel.com',
  locale: 'es_ES',
  author: 'Almagro San Miguel',
  email: 'info@almagrosanmiguel.com',
} as const

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/almagrosanmiguel/',
  twitter: 'https://x.com/almagroSM',
  imdb: 'https://www.imdb.com/name/nm9017709/',
  linkedin: 'https://www.linkedin.com/in/almagro-san-miguel/',
} as const

export const CONTACT_INFO = {
  email: 'info@almagrosanmiguel.com',
  phone: '+34 XXX XXX XXX', // Update with real phone if public
  location: 'Sevilla, España',
  formspreeEndpoint: 'https://formspree.io/f/xlggrndl',
} as const

export const NAVIGATION_ITEMS = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Sobre Mí', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Contacto', href: '#contact' },
] as const

export const SEO_KEYWORDS = [
  'actor',
  'actor español',
  'Almagro San Miguel',
  'La Moderna',
  'Vis a vis',
  'TVE',
  'teatro',
  'cine',
  'televisión',
  'Sevilla',
  'portfolio actor',
] as const

export const MEDIA_QUERIES = {
  mobile: '(max-width: 640px)',
  tablet: '(min-width: 641px) and (max-width: 1024px)',
  desktop: '(min-width: 1025px)',
} as const

export const ANIMATION_DURATIONS = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
} as const

export const Z_INDEX = {
  base: 0,
  dropdown: 10,
  sticky: 20,
  navbar: 30,
  modal: 40,
  tooltip: 50,
} as const
