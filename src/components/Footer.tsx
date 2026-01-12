'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Heart, Mail, MapPin, Scale, Shield, Cookie, Instagram, Facebook, Youtube, ExternalLink } from 'lucide-react'
import { SiTiktok, SiImdb } from 'react-icons/si'
import { trackEvent } from '@/lib/analytics'

const socialLinks = [
  {
    icon: Instagram,
    label: 'Instagram',
    url: 'https://www.instagram.com/almagrosanmiguel/',
    color: 'hover:text-pink-400',
  },
  {
    icon: 'X',
    label: 'X (Twitter)',
    url: 'https://x.com/almagroSM',
    color: 'hover:text-blue-400',
  },
  {
    icon: 'tiktok',
    label: 'TikTok',
    url: 'https://www.tiktok.com/@almagro.san.migue',
    color: 'hover:text-white',
  },
  {
    icon: Youtube,
    label: 'YouTube',
    url: 'https://www.youtube.com/@almagrosanmiguel7219',
    color: 'hover:text-red-400',
  },
  {
    icon: Facebook,
    label: 'Facebook',
    url: 'https://www.facebook.com/almagrosanmiguel/',
    color: 'hover:text-blue-500',
  },
  {
    icon: 'imdb',
    label: 'IMDb',
    url: 'https://www.imdb.com/name/nm8137381/',
    color: 'hover:text-yellow-400',
  },
]

const legalLinks = [
  {
    icon: Scale,
    label: 'Aviso Legal',
    href: '/legal',
  },
  {
    icon: Shield,
    label: 'Privacidad',
    href: '/privacy',
  },
  {
    icon: Cookie,
    label: 'Cookies',
    href: '/cookies',
  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-black border-t border-white/10">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-black" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Column 1: About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Almagro San Miguel
            </h3>
            <p className="text-slate-300 leading-relaxed mb-6 max-w-md">
              Actor profesional con formación en interpretación teatral y audiovisual. 
              Disponible para castings, colaboraciones y proyectos artísticos.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a 
                href="mailto:info@almagrosanmiguel.com"
                className="flex items-center gap-3 text-slate-300 hover:text-yellow-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-yellow-400/10 group-hover:border-yellow-400/30 transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-sm">info@almagrosanmiguel.com</span>
              </a>
              
              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-sm">Madrid y Sevilla, España</span>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold text-white mb-4">Información Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 text-slate-300 hover:text-yellow-400 transition-colors group"
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm">{link.label}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </motion.div>

          {/* Column 3: Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold text-white mb-4">Sígueme</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent('click_social_footer', 'engagement', social.label)}
                    className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 ${social.color} transition-all hover:scale-110 hover:bg-white/10`}
                    aria-label={social.label}
                  >
                    {Icon === 'X' ? (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    ) : Icon === 'tiktok' ? (
                      <SiTiktok className="w-5 h-5" />
                    ) : Icon === 'imdb' ? (
                      <SiImdb className="w-5 h-5" />
                    ) : (
                      <Icon className="w-5 h-5" />
                    )}
                  </a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Legal Identity Data */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <p className="text-sm text-slate-400 mb-1">
                <strong className="text-slate-300">Pedro Francisco Almagro Gordillo</strong> (Almagro San Miguel)
              </p>
              <p className="text-xs text-slate-500">
                NIF: 12345678Z • Madrid, España
              </p>
            </motion.div>

            {/* Copyright & Made with */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center lg:text-right"
            >
              <p className="text-sm text-slate-400 mb-1">
                © {currentYear} Almagro San Miguel. Todos los derechos reservados.
              </p>
              <p className="text-xs text-slate-500 flex items-center justify-center lg:justify-end gap-1">
                Hecho con <Heart className="w-3 h-3 text-red-500 fill-red-500" /> en España
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
    </footer>
  )
}
