'use client'

import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import Link from 'next/link'

// NAVEGACIÓN OPTIMIZADA: 10 links principales organizados para casting directors
const navLinks = [
  { href: '#skills', label: 'Skills', icon: '🎭' },
  { href: '#portfolio', label: 'Filmografía', icon: '🎥' },
  { href: '#theater', label: 'Teatro', icon: '🎭' },
  { href: '#awards', label: 'Premios', icon: '🏆' },
  { href: '#calendar', label: 'Agenda', icon: '📅' },
  { href: '#headshots', label: 'Headshots', icon: '📸' },
  { href: '#showreel', label: 'Showreel', icon: '🎬' },
  { href: '#press', label: 'Prensa', icon: '📰' },
  { href: '#presskit', label: 'Press Kit', icon: '📎' },
  { href: '#contact', label: 'Contacto', icon: '📨' },
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/95 backdrop-blur-md shadow-lg border-b border-white/10'
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

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className="group relative px-4 py-2 transition-all duration-300"
                  >
                    {/* Background hover effect */}
                    <div className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                      isActive 
                        ? 'bg-yellow-400/10 border border-yellow-400/30' 
                        : 'bg-transparent border border-transparent group-hover:bg-white/5 group-hover:border-white/10'
                    }`} />
                    
                    {/* Link content */}
                    <span className={`relative text-sm font-semibold transition-colors duration-300 ${
                      isActive 
                        ? 'text-yellow-400' 
                        : 'text-slate-300 group-hover:text-white'
                    }`}>
                      {link.label}
                    </span>
                    
                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-yellow-400"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                )
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
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
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed inset-y-0 right-0 z-40 w-full sm:w-80 bg-black/98 backdrop-blur-xl border-l border-white/10 shadow-2xl"
        >
          <div className="flex flex-col h-full">
            {/* Mobile header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="font-serif text-xl font-bold">
                <span className="text-white">Almagro</span>
                <span className="text-yellow-400"> San Miguel</span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile links */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-2">
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
                      className={`group flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                        isActive
                          ? 'bg-yellow-400/10 border border-yellow-400/30'
                          : 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20'
                      }`}
                    >
                      {/* Icon */}
                      <div className={`flex items-center justify-center w-10 h-10 rounded-lg transition-colors ${
                        isActive
                          ? 'bg-yellow-400/20 text-yellow-400'
                          : 'bg-white/10 text-slate-300 group-hover:bg-white/20 group-hover:text-white'
                      }`}>
                        <span className="text-lg">{link.icon}</span>
                      </div>
                      
                      {/* Label */}
                      <span className={`text-base font-semibold transition-colors ${
                        isActive
                          ? 'text-yellow-400'
                          : 'text-white group-hover:text-yellow-400'
                      }`}>
                        {link.label}
                      </span>
                      
                      {/* Arrow indicator */}
                      <svg 
                        className={`ml-auto w-5 h-5 transition-transform group-hover:translate-x-1 ${
                          isActive ? 'text-yellow-400' : 'text-slate-500'
                        }`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.a>
                  )
                })}
              </div>
            </div>

            {/* Mobile footer */}
            <div className="p-6 border-t border-white/10">
              <p className="text-xs text-slate-400 text-center">
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