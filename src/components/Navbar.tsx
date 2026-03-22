'use client'

import { Menu, X, ChevronDown } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { NAVIGATION_ITEMS } from '@/lib/constants'

// A.4 - Primary links shown directly, rest grouped under "Más"
const PRIMARY_COUNT = 8
const primaryLinks = NAVIGATION_ITEMS.slice(0, PRIMARY_COUNT)
const moreLinks = NAVIGATION_ITEMS.slice(PRIMARY_COUNT)

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [isMoreOpen, setIsMoreOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const moreMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = NAVIGATION_ITEMS.map((link) => link.href.substring(1))
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

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close "Más" dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (moreMenuRef.current && !moreMenuRef.current.contains(e.target as Node)) {
        setIsMoreOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // A.3 - Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  // D.8 - Focus trap in mobile menu
  useEffect(() => {
    if (!isMobileMenuOpen || !mobileMenuRef.current) return

    const menu = mobileMenuRef.current
    const focusableElements = menu.querySelectorAll<HTMLElement>(
      'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
    )
    const firstFocusable = focusableElements[0]
    const lastFocusable = focusableElements[focusableElements.length - 1]

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false)
        return
      }
      if (e.key !== 'Tab') return

      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          e.preventDefault()
          lastFocusable?.focus()
        }
      } else {
        if (document.activeElement === lastFocusable) {
          e.preventDefault()
          firstFocusable?.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    firstFocusable?.focus()

    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMobileMenuOpen])

  const isMoreActive = moreLinks.some((link) => activeSection === link.href)

  return (
    <>
      <nav
        className={`animate-slideInDown fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'border-b border-white/5 bg-black/95 shadow-lg backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="font-serif text-2xl font-bold">
              <span className="text-white">Almagro</span>
              <span className="text-yellow-400"> San Miguel</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-1 lg:flex">
              {primaryLinks.map((link) => {
                const isActive = activeSection === link.href
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? 'page' : undefined}
                    className="group relative px-4 py-2 transition-all duration-300"
                  >
                    <span
                      className={`text-sm font-medium tracking-wide transition-all duration-300 ${
                        isActive
                          ? 'font-semibold text-yellow-400'
                          : 'text-white/70 group-hover:text-white'
                      }`}
                    >
                      {link.label}
                    </span>
                  </a>
                )
              })}

              {/* A.4 - "Más" dropdown for remaining links */}
              <div className="relative" ref={moreMenuRef}>
                <button
                  onClick={() => setIsMoreOpen(!isMoreOpen)}
                  aria-expanded={isMoreOpen}
                  aria-haspopup="true"
                  className="group relative flex items-center gap-1 px-4 py-2 transition-all duration-300"
                >
                  <span
                    className={`text-sm font-medium tracking-wide transition-all duration-300 ${
                      isMoreActive
                        ? 'font-semibold text-yellow-400'
                        : 'text-white/70 group-hover:text-white'
                    }`}
                  >
                    Más
                  </span>
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      isMoreOpen ? 'rotate-180' : ''
                    } ${isMoreActive ? 'text-yellow-400' : 'text-white/70 group-hover:text-white'}`}
                  />
                </button>

                {isMoreOpen && (
                  <div className="absolute right-0 top-full mt-2 w-48 rounded-xl border border-white/10 bg-black/95 py-2 shadow-xl backdrop-blur-md">
                    {moreLinks.map((link) => {
                      const isActive = activeSection === link.href
                      return (
                        <a
                          key={link.href}
                          href={link.href}
                          onClick={() => setIsMoreOpen(false)}
                          aria-current={isActive ? 'page' : undefined}
                          className={`block px-4 py-2.5 text-sm font-medium transition-colors ${
                            isActive
                              ? 'bg-white/5 text-yellow-400'
                              : 'text-white/70 hover:bg-white/5 hover:text-white'
                          }`}
                        >
                          {link.label}
                        </a>
                      )
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button - D.3 aria-expanded */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Menú de navegación"
              className="rounded-lg p-2 text-white/70 transition-all duration-300 hover:bg-white/5 hover:text-white lg:hidden"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        ref={mobileMenuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
        className={`bg-black/98 fixed inset-y-0 right-0 z-40 w-full border-l border-white/5 shadow-2xl backdrop-blur-xl sm:w-80 transition-transform duration-300 ease-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Mobile header */}
          <div className="flex items-center justify-between border-b border-white/5 p-6">
            <div className="font-serif text-xl font-bold">
              <span className="text-white">Almagro</span>
              <span className="text-yellow-400"> San Miguel</span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Cerrar menú"
              className="rounded-lg p-2 text-white/70 transition-all duration-300 hover:bg-white/5 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile links */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="space-y-1">
              {NAVIGATION_ITEMS.map((link) => {
                const isActive = activeSection === link.href
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`group flex items-center justify-between rounded-lg px-5 py-4 transition-all duration-300 ${
                      isActive
                        ? 'border-l-2 border-yellow-400 bg-white/5'
                        : 'border-l-2 border-transparent hover:border-l-white/20 hover:bg-white/5'
                    }`}
                  >
                    <span
                      className={`text-base font-medium tracking-wide transition-colors duration-300 ${
                        isActive
                          ? 'font-semibold text-yellow-400'
                          : 'text-white/70 group-hover:text-white'
                      }`}
                    >
                      {link.label}
                    </span>

                    <div
                      className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                        isActive
                          ? 'scale-100 bg-yellow-400'
                          : 'scale-0 bg-white/30 group-hover:scale-100'
                      }`}
                    />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Mobile footer */}
          <div className="border-t border-white/5 p-6">
            <p className="text-center text-xs font-light tracking-wide text-white/40">
              Actor de Televisión, Cine y Teatro
            </p>
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      <div
        onClick={() => setIsMobileMenuOpen(false)}
        className={`fixed inset-0 z-30 bg-black/60 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />
    </>
  )
}
