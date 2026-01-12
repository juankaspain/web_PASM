'use client'

import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import Link from 'next/link'

// NAVEGACIÓN OPTIMIZADA: 11 links principales organizados para casting directors
const navLinks = [
  { href: '#about', label: 'Sobre mí' },
  { href: '#series', label: 'Series TV' },
  { href: '#filmografia', label: 'Cine' },
  { href: '#theater', label: 'Teatro' },
  { href: '#awards', label: 'Premios' },
  { href: '#calendar', label: 'Agenda' },
  { href: '#headshots', label: 'Headshots' },
  { href: '#showreel', label: 'Showreel' },
  { href: '#press', label: 'Prensa' },
  { href: '#presskit', label: 'Press Kit' },
  { href: '#contact', label: 'Contacto' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Detect active section
      const sections = navLinks.map((link) => link.href.substring(1))
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(`#${current}`)
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-hidden ${
          isScrolled
            ? 'bg-black/95 backdrop-blur-md shadow-lg border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="font-serif text-2xl font-bold">
              <span className="text-white">Almagro</span>
              <span className="text-yellow-400"> San Miguel</span>
            </Link>

            {/* Desktop Navigation - Minimalista */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className="group relative px-4 py-5 transition-all duration-300"
                  >
                    {/* Link text */}
                    <span className={`relative text-sm font-medium tracking-wide transition-all duration-300 ${
                      isActive 
                        ? 'text-yellow-400 font-semibold' 
                        : 'text-white/70 group-hover:text-white'
                    }`}>
                      {link.label}
                    </span>
                    
                    {/* Línea inferior - contenida dentro del padding */}
                    <div className={`absolute bottom-0 left-4 right-4 transition-all duration-300 ${
                      isActive 
                        ? 'h-0.5 bg-yellow-400 opacity-100' 
                        : 'h-px bg-white/30 opacity-0 group-hover:opacity-100'
                    }`} />
                  </a>
                )
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
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

      {/* Mobile Menu - Rediseñado minimalista */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed inset-y-0 right-0 z-40 w-full sm:w-80 bg-black/98 backdrop-blur-xl border-l border-white/5 shadow-2xl"
        >
          <div className="flex flex-col h-full">
            {/* Mobile header */}
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <div className="font-serif text-xl font-bold">
                <span className="text-white">Almagro</span>
                <span className="text-yellow-400"> San Miguel</span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile links - Minimalista */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-1">
                {navLinks.map((link, index) => {
                  const isActive = activeSection === link.href
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`group flex items-center justify-between px-5 py-4 rounded-lg transition-all duration-300 ${
                        isActive
                          ? 'bg-white/5 border-l-2 border-yellow-400'
                          : 'border-l-2 border-transparent hover:bg-white/5 hover:border-l-white/20'
                      }`}
                    >
                      {/* Label */}
                      <span className={`text-base font-medium tracking-wide transition-colors duration-300 ${
                        isActive
                          ? 'text-yellow-400 font-semibold'
                          : 'text-white/70 group-hover:text-white'
                      }`}>
                        {link.label}
                      </span>
                      
                      {/* Indicador sutil */}
                      <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        isActive 
                          ? 'bg-yellow-400 scale-100' 
                          : 'bg-white/30 scale-0 group-hover:scale-100'
                      }`} />
                    </motion.a>
                  )
                })}
              </div>
            </div>

            {/* Mobile footer */}
            <div className="p-6 border-t border-white/5">
              <p className="text-xs text-white/40 text-center font-light tracking-wide">
                Actor de Televisión, Cine y Teatro
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm lg:hidden"
        />
      )}
    </>
  )
}