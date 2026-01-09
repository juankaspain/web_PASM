'use client'

import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Film } from 'lucide-react'

const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/almagrosanmiguel/',
    icon: Instagram,
  },
  {
    name: 'Twitter / X',
    url: 'https://x.com/almagroSM',
    icon: Twitter,
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/almagrosanmiguel/',
    icon: Facebook,
  },
]

const professionalLinks = [
  {
    name: 'IMDb',
    url: 'https://www.imdb.com/name/nm9017709/',
    icon: Film,
    color: 'text-yellow-500 hover:text-yellow-600',
  },
  {
    name: 'Wikipedia',
    url: 'https://es.wikipedia.org/wiki/Almagro_San_Miguel',
    icon: Film,
    color: 'text-gray-600 hover:text-gray-700',
  },
  {
    name: 'FilmAffinity',
    url: 'https://www.filmaffinity.com/es/name.php?name-id=231727420',
    icon: Film,
    color: 'text-red-600 hover:text-red-700',
  },
]

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Almagro San Miguel</h3>
            <p className="text-gray-400 leading-relaxed">
              Actor sevillano con más de 10 años de experiencia en televisión, cine y teatro. 
              Protagonista de producciones en TVE, Prime Video y otras plataformas.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contacto</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@almagrosanmiguel.com" className="hover:text-white transition-colors">
                  info@almagrosanmiguel.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Sevilla, Andalucía, España</span>
              </li>
            </ul>
          </div>

          {/* Social & Professional Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Sígueme</h4>
            <div className="flex gap-4 mb-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            <h4 className="text-lg font-bold mb-3">Enlaces Profesionales</h4>
            <div className="space-y-2">
              {professionalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-sm ${link.color} transition-colors`}
                >
                  {link.name} →
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} Almagro San Miguel. Todos los derechos reservados.
          </p>
          <p className="mt-2">
            Actor profesional | Sevilla, España
          </p>
        </div>
      </div>
    </footer>
  )
}
