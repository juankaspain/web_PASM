import Link from 'next/link'
import { Instagram, Twitter, Facebook, Mail, Heart } from 'lucide-react'

const socialLinks = [
  { name: 'Instagram', href: 'https://instagram.com', icon: Instagram },
  { name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
  { name: 'Facebook', href: 'https://facebook.com', icon: Facebook },
  { name: 'Email', href: 'mailto:info@pedroalmagro.com', icon: Mail },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold">Pedro Almagro</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Actor & Performer
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Sevilla, España
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#about"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Sobre Mí
                </Link>
              </li>
              <li>
                <Link
                  href="#portfolio"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Portafolio
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="mb-4 font-semibold">Redes Sociales</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            © {currentYear} Pedro Almagro. Hecho con
            <Heart size={16} className="fill-red-500 text-red-500" />
            en Sevilla
          </p>
        </div>
      </div>
    </footer>
  )
}
