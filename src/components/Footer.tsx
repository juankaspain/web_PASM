'use client'

import {
  Mail,
  MapPin,
  Facebook,
  Instagram,
  X,
  Youtube,
  Scale,
  Shield,
  Cookie,
  Code,
} from 'lucide-react'
import { TikTokIcon } from '@/components/icons'
import Link from 'next/link'

const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/almagrosanmiguel/',
    icon: Instagram,
    iconType: 'lucide',
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@almagrosanmiguel7219',
    icon: Youtube,
    iconType: 'lucide',
  },
  {
    name: 'X',
    url: 'https://x.com/almagroSM',
    icon: X,
    iconType: 'lucide',
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@almagro.san.migue',
    icon: TikTokIcon,
    iconType: 'custom',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/almagrosanmiguel/',
    icon: Facebook,
    iconType: 'lucide',
  },
]

const quickLinks = [
  { label: 'Sobre mí', href: '/#about' },
  { label: 'Series TV', href: '/#series' },
  { label: 'Filmografía', href: '/#filmografia' },
  { label: 'Galería', href: '/#gallery' },
  { label: 'Contacto', href: '/#contact' },
]

const legalLinks = [
  {
    label: 'Aviso Legal',
    href: '/legal',
    icon: Scale,
    description: 'Información legal y términos de uso',
  },
  {
    label: 'Política de Privacidad',
    href: '/privacy',
    icon: Shield,
    description: 'Cómo protegemos tus datos',
  },
  {
    label: 'Política de Cookies',
    href: '/cookies',
    icon: Cookie,
    description: 'Uso de cookies en la web',
  },
]

export default function Footer() {
  return (
    <footer
      className="border-t border-neutral-800 bg-slate-950 py-16 text-white"
      role="contentinfo"
    >
      <div className="container mx-auto max-w-7xl px-4">
        {/* Main Grid - 4 columns on desktop */}
        <div className="mb-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold">
              <span className="text-white">Almagro </span>
              <span className="text-yellow-500">San Miguel</span>
            </h3>
            <p className="text-sm font-light leading-relaxed text-gray-400">
              Actor sevillano con más de 10 años de experiencia en televisión, cine y
              teatro. Protagonista de producciones en TVE, Prime Video y otras
              plataformas.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-neutral-500" aria-hidden="true" />
                <span className="font-light">Madrid y Sevilla, España</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-neutral-500" aria-hidden="true" />
                <span className="font-light">Disponible para proyectos</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="mb-4 text-lg font-semibold">Navegación</h4>
            <ul className="space-y-2.5" role="list">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block transform text-sm font-light text-gray-400 transition-colors duration-200 hover:translate-x-1 hover:text-yellow-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h4 className="mb-4 text-lg font-semibold">Legal</h4>
            <ul className="space-y-2.5" role="list">
              {legalLinks.map((link) => {
                const Icon = link.icon
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-start gap-2 text-sm text-gray-400 transition-colors hover:text-yellow-400"
                      title={link.description}
                    >
                      <Icon className="mt-0.5 h-4 w-4 flex-shrink-0" aria-hidden="true" />
                      <span className="inline-block transform font-light duration-200 group-hover:translate-x-1">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="mb-4 text-lg font-semibold">Sígueme</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative rounded-lg border border-neutral-800 bg-neutral-900 p-3 shadow-lg transition-all hover:-translate-y-0.5 hover:scale-110 hover:border-neutral-700 hover:bg-neutral-800"
                    aria-label={`Visitar ${link.name} (se abre en nueva ventana)`}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                    <span className="pointer-events-none absolute -bottom-8 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded bg-slate-900 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                      {link.name}
                    </span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="space-y-4 border-t border-neutral-800 pt-8">
          <div className="space-y-2 text-center text-sm text-gray-400">
            <p className="font-light">
              © {new Date().getFullYear()} Almagro San Miguel. Todos los derechos
              reservados.
            </p>
            <p className="text-xs font-light text-gray-500">
              Actor profesional | Madrid y Sevilla, España
            </p>
          </div>

          {/* Developer Credit */}
          <div className="border-t border-neutral-800/50 pt-4 text-center">
            <a
              href="https://github.com/juankaspain"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-xs text-gray-500 transition-colors hover:text-yellow-400"
              aria-label="Developed by JuankaSpain (se abre en nueva ventana)"
            >
              <Code
                className="h-3.5 w-3.5 transition-transform group-hover:rotate-12"
                aria-hidden="true"
              />
              <span className="font-light">
                Developed by <strong className="font-semibold">JuankaSpain</strong>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"
        aria-hidden="true"
      />
    </footer>
  )
}
