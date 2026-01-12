'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Heart, Scale, Shield, Cookie } from 'lucide-react'
import { trackEvent } from '@/lib/analytics'

const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/almagrosanmiguel/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
        <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: 'X (Twitter)',
    url: 'https://x.com/almagroSM',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@almagro.san.migue',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@almagrosanmiguel7219',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/almagrosanmiguel/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'IMDb',
    url: 'https://www.imdb.com/name/nm8137381/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.31 9.588v4.824h-1.412V9.588h1.412zm7.987-1.93v8.684h-1.764v-1.176c-.495.906-1.319 1.294-2.259 1.294-1.647 0-2.754-1.235-2.754-3.412 0-2.259 1.107-3.483 2.754-3.483.918 0 1.718.341 2.224 1.236V7.659h1.799zm-3.506 1.424c-.918 0-1.483.73-1.483 2.083 0 1.341.565 2.036 1.483 2.036.906 0 1.506-.683 1.506-2.036 0-1.365-.6-2.083-1.506-2.083zM2 7.659h1.988L4.4 13.93l.447-6.271h2.259l.447 6.271.412-6.271h1.976l-.989 8.684H6.847L6.4 11.918l-.447 4.424H3.847L2 7.659zm7.341 0h1.765v8.684H9.341V7.659zm13.482-.847c-.424-.765-1.059-1.365-2.118-1.765-.941-.341-2.33-.518-4.4-.518H0v13.694h14.306c2.07 0 3.459-.176 4.4-.517 1.059-.389 1.694-1.001 2.118-1.765.423-.812.635-1.918.635-3.447V9.447c0-1.518-.212-2.636-.635-3.447z" />
      </svg>
    ),
  },
]

const legalLinks = [
  {
    label: 'Aviso Legal',
    href: '/legal',
    icon: Scale,
  },
  {
    label: 'Privacidad',
    href: '/privacy',
    icon: Shield,
  },
  {
    label: 'Cookies',
    href: '/cookies',
    icon: Cookie,
  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="footer" className="relative pt-20 pb-10 bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Almagro <span className="text-yellow-400">San Miguel</span>
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Actor profesional • Madrid, España
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex justify-center gap-4 mb-12"
          >
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('click_social_footer', 'engagement', social.name)}
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-yellow-400 hover:border-yellow-400/30 hover:bg-yellow-400/5 transition-all duration-300 hover:scale-110"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 mb-10 pb-10 border-b border-white/10"
          >
            {legalLinks.map((link) => {
              const Icon = link.icon
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 text-slate-400 hover:text-yellow-400 transition-colors text-sm group"
                >
                  <Icon className="w-4 h-4" />
                  <span>{link.label}</span>
                </Link>
              )
            })}
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center space-y-3"
          >
            <p className="text-slate-400 text-sm">
              <strong className="text-slate-300">Pedro Francisco Almagro Gordillo</strong> (Almagro San Miguel)
            </p>
            <p className="text-slate-400 text-sm">
              © {currentYear} Almagro San Miguel. Todos los derechos reservados.
            </p>
            <p className="text-slate-500 text-xs flex items-center justify-center gap-1">
              Hecho con <Heart className="w-3 h-3 text-red-500 fill-red-500 inline" /> en España
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
    </footer>
  )
}
