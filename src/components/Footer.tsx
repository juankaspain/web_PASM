'use client'

import { Mail, MapPin, Facebook, Instagram, X, Youtube, ExternalLink, Heart, Scale, Shield, Cookie } from 'lucide-react'
import { motion } from 'framer-motion'
import { SiTiktok } from 'react-icons/si'
import { useState, useEffect } from 'react'
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
    icon: SiTiktok,
    iconType: 'react-icons',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/almagrosanmiguel/',
    icon: Facebook,
    iconType: 'lucide',
  },
]

const professionalLinks = [
  { 
    name: 'IMDb', 
    url: 'https://www.imdb.com/name/nm8137381/',
    icon: '⭐',
    description: 'Perfil profesional'
  },
  { 
    name: 'FilmAffinity', 
    url: 'https://www.filmaffinity.com/es/name.php?name-id=231727420',
    icon: '🎬',
    description: 'Filmografía completa'
  },
  { 
    name: 'SensaCine', 
    url: 'https://www.sensacine.com/actores/actor-889713/',
    icon: '🎭',
    description: 'Proyectos y noticias'
  },
  { 
    name: 'Wikipedia', 
    url: 'https://es.wikipedia.org/wiki/Almagro_San_Miguel',
    icon: '📖',
    description: 'Biografía'
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
  const [hasSupported, setHasSupported] = useState(false)
  const [fanCount, setFanCount] = useState(23)

  useEffect(() => {
    // Load state from localStorage
    const supported = localStorage.getItem('fanSupport')
    if (supported === 'true') {
      setHasSupported(true)
    }
    
    // Load fan count from localStorage
    const savedCount = localStorage.getItem('fanCount')
    if (savedCount) {
      setFanCount(parseInt(savedCount, 10))
    }
  }, [])

  const handleFanSupport = () => {
    if (!hasSupported) {
      setHasSupported(true)
      const newCount = fanCount + 1
      setFanCount(newCount)
      
      // Save to localStorage
      localStorage.setItem('fanSupport', 'true')
      localStorage.setItem('fanCount', newCount.toString())
    }
  }

  return (
    <footer className="bg-slate-950 border-t border-neutral-800 text-white py-16" role="contentinfo">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Main Grid - 4 columns on desktop */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold">
              <span className="text-white">Almagro </span>
              <span className="text-yellow-500">San Miguel</span>
            </h3>
            <p className="text-gray-400 leading-relaxed font-light text-sm">
              Actor sevillano con más de 10 años de experiencia en televisión, cine y teatro. 
              Protagonista de producciones en TVE, Prime Video y otras plataformas.
            </p>
            <div className="space-y-2 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-neutral-500" />
                <span className="font-light">Madrid y Sevilla, España</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-neutral-500" />
                <span className="font-light">Disponible para proyectos</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2.5" role="list">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-yellow-400 transition-colors text-sm block hover:translate-x-1 transform duration-200 font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2.5" role="list">
              {legalLinks.map((link) => {
                const Icon = link.icon
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-start gap-2 text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                      title={link.description}
                    >
                      <Icon className="w-4 h-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="group-hover:translate-x-1 transform duration-200 inline-block font-light">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Social Links + Fan Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Sígueme</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 p-3 rounded-lg transition-all shadow-lg"
                    aria-label={`Visitar ${link.name}`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                      {link.name}
                    </span>
                  </motion.a>
                )
              })}
            </div>

            {/* Fan Support Button - Minimalist */}
            <motion.button
              onClick={handleFanSupport}
              disabled={hasSupported}
              whileHover={!hasSupported ? { scale: 1.02 } : {}}
              whileTap={!hasSupported ? { scale: 0.98 } : {}}
              className={`w-full mt-6 px-4 py-3 rounded-lg font-medium text-sm transition-all duration-300 flex items-center justify-between ${
                hasSupported 
                  ? 'bg-neutral-900 border border-neutral-800 cursor-default' 
                  : 'bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 cursor-pointer'
              }`}
              aria-label={hasSupported ? 'Ya has apoyado' : 'Apoyar al actor'}
            >
              <div className="flex items-center gap-2.5">
                <motion.div
                  animate={!hasSupported ? {
                    scale: [1, 1.2, 1],
                  } : {}}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                >
                  <Heart 
                    className={`w-4 h-4 ${
                      hasSupported ? 'fill-rose-500 text-rose-500' : 'text-neutral-400'
                    } transition-colors`}
                    aria-hidden="true"
                  />
                </motion.div>
                <span className="text-neutral-300 font-light">
                  {hasSupported ? 'Gracias por tu apoyo' : 'Apóyame'}
                </span>
              </div>
              <span className="text-xs text-neutral-500 font-light">
                {fanCount} fans
              </span>
            </motion.button>
          </div>
        </div>

        {/* Professional Links Section */}
        <div className="mb-12 pt-8 border-t border-neutral-800">
          <div className="flex items-center gap-2 mb-6">
            <ExternalLink className="w-4 h-4 text-blue-400" />
            <h4 className="text-lg font-semibold">Enlaces Profesionales</h4>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {professionalLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="group flex flex-col items-center gap-2.5 rounded-xl border border-neutral-800 
                           bg-neutral-900/80 px-4 py-4 backdrop-blur-md hover:border-neutral-700
                           hover:bg-neutral-900 transition-all shadow-lg hover:shadow-xl"
              >
                <span className="text-2xl" aria-hidden="true">{link.icon}</span>
                <div className="text-center">
                  <p className="text-sm font-semibold text-neutral-100 group-hover:text-white transition-colors">
                    {link.name}
                  </p>
                  <p className="text-xs text-neutral-500 mt-1 font-light">{link.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8 space-y-3">
          <div className="text-center text-gray-400 text-sm space-y-2">
            <p className="font-light">
              <strong className="text-gray-300">Pedro Francisco Almagro Gordillo</strong> (Almagro San Miguel)
            </p>
            <p className="font-light">
              © {new Date().getFullYear()} Almagro San Miguel. Todos los derechos reservados.
            </p>
            <p className="text-gray-500 text-xs font-light">
              Actor profesional | Madrid y Sevilla, España
            </p>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
    </footer>
  )
}