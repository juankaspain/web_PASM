'use client'

import { Mail, MapPin, Facebook, Instagram, X, Youtube, ExternalLink, Heart } from 'lucide-react'
import { motion } from 'framer-motion'
import { SiTiktok } from 'react-icons/si'
import { useState, useEffect } from 'react'

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
    url: 'https://www.imdb.com/name/nm9017709/',
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

export default function Footer() {
  const [hasSupported, setHasSupported] = useState(false)
  const [fanCount, setFanCount] = useState(23)
  const [showParticles, setShowParticles] = useState(false)

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
      setShowParticles(true)
      
      // Save to localStorage
      localStorage.setItem('fanSupport', 'true')
      localStorage.setItem('fanCount', newCount.toString())
      
      // Hide particles after animation
      setTimeout(() => setShowParticles(false), 2000)
    }
  }

  return (
    <footer className="bg-slate-950 border-t border-neutral-800 text-white py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold">
              <span className="text-white">Almagro </span>
              <span className="text-yellow-500">San Miguel</span>
            </h3>
            <p className="text-gray-400 leading-relaxed font-light">
              Actor sevillano con más de 10 años de experiencia en televisión, cine y teatro. 
              Protagonista de producciones en TVE, Prime Video y otras plataformas.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-400" />
              Contacto
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2 group">
                <Mail className="w-4 h-4 text-neutral-500 group-hover:text-blue-400 transition-colors" />
                <a 
                  href="mailto:info@almagrosanmiguel.com" 
                  className="hover:text-white transition-colors font-light"
                >
                  info@almagrosanmiguel.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-neutral-500" />
                <span className="font-light">Madrid y Sevilla, España</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Sígueme</h4>
            <div className="flex gap-3">
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
                    className="bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 p-3 rounded-lg transition-all shadow-lg"
                    aria-label={link.name}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Professional Links Section - Styled like Hero */}
        <div className="mb-12">
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
                <span className="text-2xl">{link.icon}</span>
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

        {/* Fan Support Button */}
        <div className="mb-12 flex flex-col items-center">
          <motion.button
            onClick={handleFanSupport}
            disabled={hasSupported}
            whileHover={!hasSupported ? { scale: 1.05 } : {}}
            whileTap={!hasSupported ? { scale: 0.95 } : {}}
            className={`relative group px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl transition-all duration-300 overflow-hidden ${
              hasSupported 
                ? 'bg-gradient-to-r from-pink-500 to-rose-500 cursor-default' 
                : 'bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 cursor-pointer'
            }`}
          >
            {/* Particles Effect */}
            {showParticles && (
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ 
                      x: '50%', 
                      y: '50%', 
                      opacity: 1,
                      scale: 0
                    }}
                    animate={{ 
                      x: `${50 + (Math.random() - 0.5) * 200}%`, 
                      y: `${50 + (Math.random() - 0.5) * 200}%`, 
                      opacity: 0,
                      scale: 1
                    }}
                    transition={{ 
                      duration: 1.5,
                      delay: i * 0.05,
                      ease: 'easeOut'
                    }}
                    className="absolute w-2 h-2 bg-white rounded-full"
                  />
                ))}
              </div>
            )}

            <div className="relative flex items-center gap-3">
              <motion.div
                animate={!hasSupported ? {
                  scale: [1, 1.3, 1],
                } : {}}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
              >
                <Heart 
                  className={`w-6 h-6 ${
                    hasSupported ? 'fill-white text-white' : 'text-white'
                  }`}
                  fill={hasSupported ? 'currentColor' : 'none'}
                />
              </motion.div>
              <span className="text-white">
                {hasSupported ? '¡Gracias! ❤️' : 'Apóyame ❤️'}
              </span>
            </div>
          </motion.button>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-sm text-gray-400 font-light"
          >
            <span className="font-semibold text-pink-400">{fanCount} fans</span> te apoyan ❤️
          </motion.p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8 text-center text-gray-500 text-sm space-y-2">
          <p className="font-light">
            © {new Date().getFullYear()} Almagro San Miguel. Todos los derechos reservados.
          </p>
          <p className="font-light">
            Actor profesional | Madrid y Sevilla, España
          </p>
        </div>
      </div>
    </footer>
  )
}