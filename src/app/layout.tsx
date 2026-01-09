import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Pedro Almagro | Actor & Performer',
  description:
    'Official website of Pedro Almagro - Award-winning actor, performer, and storyteller based in Sevilla, Spain.',
  keywords: [
    'actor',
    'performer',
    'teatro',
    'cine',
    'television',
    'Sevilla',
    'España',
    'Pedro Almagro',
  ],
  authors: [{ name: 'Pedro Almagro' }],
  creator: 'Pedro Almagro',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://pedroalmagro.com',
    title: 'Pedro Almagro | Actor & Performer',
    description:
      'Official website of Pedro Almagro - Award-winning actor and performer',
    siteName: 'Pedro Almagro',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pedro Almagro',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pedro Almagro | Actor & Performer',
    description: 'Award-winning actor and performer based in Sevilla, Spain',
    images: ['/og-image.jpg'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable,
          playfair.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
