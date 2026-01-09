'use client'

import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { href: '#about', label: 'Sobre Mí' },
  { href: '#stats', label: 'Estadísticas' },
  { href: '#portfolio', label: 'Filmografía' },
  { href: '#timeline', label: 'Timeline' },
  { href: '#awards', label: 'Premios' },
  { href: '#gallery', label: 'Galería' },
  { href: '#news', label: 'Noticias' },
  { href: '#events', label: 'Eventos' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contacto' },
]

export default function Navbar() {
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
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="font-serif text-2xl font-bold">
              <span className={isScrolled ? 'text-slate-900' : 'text-white'}>
                Almagro
              </span>
              <span className="text-yellow-400"> San Miguel</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors hover:text-yellow-400 ${
                    isScrolled ? 'text-slate-700' : 'text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#presskit"
                className="px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-slate-900 rounded-full transition-colors font-bold text-sm"
              >
                Press Kit
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 ${
                isScrolled ? 'text-slate-900' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 bg-slate-900 pt-20"
        >
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white text-xl font-semibold hover:text-yellow-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#presskit"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-slate-900 rounded-full transition-colors font-bold text-center"
              >
                Press Kit
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}
