import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Almagro San Miguel - Actor Profesional | Televisión, Cine y Teatro',
  description: 'Actor profesional español con más de 300 episodios en televisión. Protagonista en series de TVE, Amazon Prime Video y Fox. Especializado en verso clásico español y teatro.',
  keywords: [
    'Almagro San Miguel',
    'Pedro Francisco Almagro',
    'actor español',
    'actor televisión',
    'La Moderna TVE',
    'Vis a vis El Oasis',
    'Hernán Prime Video',
    'actor teatro clásico',
    'CNTC',
    'Helena Pimenta',
    'ESAD Sevilla',
    'actor Sevilla',
    'galán protagonista',
    'verso clásico español',
    'esgrima teatral',
    'actor español netflix',
  ],
  authors: [{ name: 'Almagro San Miguel' }],
  creator: 'Almagro San Miguel',
  publisher: 'Almagro San Miguel',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'profile',
    locale: 'es_ES',
    url: 'https://almagrosanmiguel.com',
    siteName: 'Almagro San Miguel - Actor Profesional',
    title: 'Almagro San Miguel - Actor de Televisión, Cine y Teatro',
    description: 'Actor profesional con más de 300 episodios en TV. Protagonista en La Moderna (TVE), Vis a vis: El Oasis (Fox) y Hernán (Prime Video). Formado en CNTC y ESAD Sevilla.',
    images: [
      {
        url: 'https://github.com/user-attachments/assets/43e8482d-f288-4cd0-b1ad-31e054eafdf4',
        width: 1200,
        height: 630,
        alt: 'Almagro San Miguel - Actor Profesional',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Almagro San Miguel - Actor Profesional',
    description: 'Actor español con +300 episodios en TV. Protagonista en series de TVE, Prime Video y Fox. Especializado en teatro clásico.',
    images: ['https://github.com/user-attachments/assets/43e8482d-f288-4cd0-b1ad-31e054eafdf4'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code', // Añadir código real de Google Search Console
  },
}

// Schema.org structured data for better SEO
export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Pedro Francisco Almagro Gordillo',
  alternateName: 'Almagro San Miguel',
  url: 'https://almagrosanmiguel.com',
  image: 'https://github.com/user-attachments/assets/43e8482d-f288-4cd0-b1ad-31e054eafdf4',
  sameAs: [
    'https://www.imdb.com/name/nm9017709/',
    'https://www.filmaffinity.com/es/name.php?name-id=231727420',
    'https://www.sensacine.com/actores/actor-889713/',
    'https://es.wikipedia.org/wiki/Almagro_San_Miguel',
  ],
  jobTitle: 'Actor',
  worksFor: {
    '@type': 'Organization',
    name: 'Independiente',
  },
  alumniOf: [
    {
      '@type': 'EducationalOrganization',
      name: 'Escuela Superior de Arte Dramático de Sevilla',
      url: 'https://www.esadsevilla.org',
    },
    {
      '@type': 'Organization',
      name: 'Compañía Nacional de Teatro Clásico',
      url: 'https://teatroclasico.inaem.gob.es/',
    },
  ],
  birthDate: '1990-03-07',
  birthPlace: {
    '@type': 'Place',
    name: 'Sevilla, España',
  },
  nationality: {
    '@type': 'Country',
    name: 'España',
  },
  knowsAbout: [
    'Actuación',
    'Teatro Clásico',
    'Verso Clásico Español',
    'Televisión',
    'Cine',
    'Teatro Musical',
    'Esgrima Teatral',
    'Equitación',
    'Violonchelo',
  ],
  award: [
    'Nominación Mejor Actor Secundario - Fuente Ovejuna (2015)',
    'Premio Mejor Espectáculo del Año - Oliver Twist (2016)',
  ],
}
