'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'Inicio', href: '#hero' },
  { name: 'Sobre Mí', href: '#about' },
  { name: 'Portafolio', href: '#portfolio' },
  { name: 'Showreel', href: '#showreel' },
  { name: 'Prensa', href: '#press' },
  { name: 'Contacto', href: '#contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg border-b border-white/10'
          : 'bg-gradient-to-b from-black/60 to-transparent backdrop-blur-sm'
      )}
    >
      <nav className="container mx-auto flex items-center justify-between px-6 py-5">
        <Link
          href="#hero"
          className="font-serif text-2xl font-bold tracking-tight text-white transition-colors hover:text-gray-200"
        >
          Pedro Almagro
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center space-x-8 md:flex">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-sm font-medium text-white/90 transition-colors hover:text-white relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all hover:after:w-full"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white md:hidden"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="border-t border-white/10 bg-slate-900/95 backdrop-blur-lg md:hidden">
          <ul className="container mx-auto space-y-4 px-6 py-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg font-medium text-white/90 transition-colors hover:text-white"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
