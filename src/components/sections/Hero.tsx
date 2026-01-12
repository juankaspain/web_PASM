'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Play, MapPin, Calendar, ExternalLink, Clapperboard, Tv, Star, Theater as TheaterIcon, Instagram, X, Youtube, Facebook } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { SiTiktok } from 'react-icons/si/SiTiktok'

export default function Hero() {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 200], [1, 0.95])
  const scale = useTransform(scrollY, [0, 200], [1, 0.98])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

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

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/almagrosanmiguel/',
      icon: Instagram,
      color: 'hover:text-pink-500',
      bgHover: 'hover:bg-pink-500/10',
      borderHover: 'hover:border-pink-500/30',
    },
    {
      name: 'X',
      url: 'https://x.com/almagroSM',
      icon: X,
      color: 'hover:text-sky-400',
      bgHover: 'hover:bg-sky-400/10',
      borderHover: 'hover:border-sky-400/30',
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@almagro.san.migue',
      icon: 'tiktok',
      color: 'hover:text-white',
      bgHover: 'hover:bg-white/10',
      borderHover: 'hover:border-white/30',
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@almagrosanmiguel7219',
      icon: Youtube,
      color: 'hover:text-red-500',
      bgHover: 'hover:bg-red-500/10',
      borderHover: 'hover:border-red-500/30',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/almagrosanmiguel/',
      icon: Facebook,
      color: 'hover:text-blue-500',
      bgHover: 'hover:bg-blue-500/10',
      borderHover: 'hover:border-blue-500/30',
    },
  ]

  const quickHighlights = [
    {
      icon: Clapperboard,
      title: 'Un fantasma en la batalla',
      character: 'Antonio',
      year: '2025',
      detail: 'Netflix • Dir. Agustín Díaz Yanes',
      url: 'https://www.netflix.com/es/title/81700950',
    },
    {
      icon: Tv,
      title: 'La Moderna',
      character: 'Íñigo Peñalver',
      year: '2023-2024',
      detail: '236 episodios • TVE',
      url: 'https://www.rtve.es/play/videos/salon-de-te-la-moderna/',
    },
    {
      icon: Star,
      title: 'Vis a vis: El Oasis',
      character: 'Diego Ramala',
      year: '2020',
      detail: 'Protagonista • Fox España',
      url: 'https://www.netflix.com/es/title/80059465',
    },
    {
      icon: TheaterIcon,
      title: 'CNTC',
      character: 'Verso clásico español',
      year: '2015-2017',
      detail: 'Compañía Nacional de Teatro Clásico',
      url: null,
    },
  ]

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* All styled-jsx tags MUST be at section root level */}
      <style jsx>{`
        @keyframes star-float {
          0%, 100% { opacity: 0; transform: translateY(0); }
          50% { opacity: 1; }
          100% { transform: translateY(-100vh); }
        }
        .star-animation {
          animation: star-float linear infinite;
        }
      `}</style>

      <style jsx>{`
        .hero-image-container {
          transition: transform 0.5s ease-out;
        }
        .hero-image-container:hover {
          transform: scale(1.02);
        }
      `}</style>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(5px); }
        }

        .fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .card-hover {
          transition: all 0.3s ease;
        }

        .card-hover:hover {
          transform: scale(1.03) translateY(-2px);
        }

        .cta-button {
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          transform: scale(1.04);
        }

        .cta-button:active {
          transform: scale(0.97);
        }

        .play-icon {
          transition: transform 0.3s ease;
        }

        .cta-button:hover .play-icon {
          transform: scale(1.1);
        }

        .explore-button {
          transition: all 0.3s ease;
        }

        .explore-button:hover {
          transform: scale(1.03);
        }

        .arrow-bounce {
          animation: bounce 1.4s ease-in-out infinite;
        }
      `}</style>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-slate-900" />

      {/* Simplified stars animation - using CSS instead of Framer Motion for better performance */}
      {mounted && (
        <div className="pointer-events-none absolute inset-0 opacity-10">
          {[...Array(18)].map((_, i) => (
            <div
              key={i}
              className="star-animation absolute w-1 h-1 bg-yellow-400 rounded-full blur-[1px]"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${Math.random() * 12 + 14}s`,
              }}
            />
          ))}
        </div>
      )}

      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20"
        style={{ opacity, scale }}
      >
        <div className="grid lg:grid-cols-[0.95fr_1.25fr] gap-8 xl:gap-12 items-center">
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[480px] lg:max-w-[520px]">
              <div className="absolute inset-0 rounded-[28px] lg:rounded-[36px] bg-yellow-400/10 blur-3xl" />
              
              {/* Optimized image with priority and fetchPriority */}
              <div className="hero-image-container relative aspect-[2.5/4] rounded-[28px] lg:rounded-[36px] overflow-hidden shadow-[0_50px_150px_rgba(0,0,0,0.95)]">
                <Image
                  src="https://github.com/user-attachments/assets/43e8482d-f288-4cd0-b1ad-31e054eafdf4"
                  alt="Almagro San Miguel - Actor profesional de televisión, cine y teatro"
                  fill
                  className="object-cover object-[center_15%] scale-105"
                  sizes="(min-width: 1024px) 520px, 90vw"
                  priority
                  fetchPriority="high"
                  quality={90}
                  style={{
                    filter: 'brightness(1.05) contrast(1.08) saturate(0.95)',
                  }}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
                <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.7)]" />
                <div className="absolute inset-0 bg-gradient-to-tl from-yellow-600/5 via-transparent to-transparent" />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6 lg:space-y-7 fade-in-up">
            <div className="space-y-2">
              <h1 
                className="text-[40px] sm:text-[48px] md:text-[54px] lg:text-[60px] xl:text-[66px] font-serif font-bold tracking-tight leading-[1.1] fade-in-up"
                style={{ animationDelay: '0.1s' }}
              >
                <span className="text-white">Almagro </span>
                <span className="text-yellow-400">San Miguel</span>
              </h1>

              <p 
                className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-300 fade-in-up"
                style={{ animationDelay: '0.2s' }}
              >
                Actor de Televisión, Cine y Teatro
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="rounded-2xl bg-slate-900/80 border border-slate-700/60 px-4 py-3 backdrop-blur-md">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-yellow-400" />
                  <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-gray-400">
                    Ubicación
                  </span>
                </div>
                <p className="text-sm font-semibold text-white">Sevilla y Madrid</p>
              </div>
              <div className="rounded-2xl bg-slate-900/80 border border-slate-700/60 px-4 py-3 backdrop-blur-md">
                <div className="flex items-center gap-2 mb-1">
                  <Calendar className="w-4 h-4 text-yellow-400" />
                  <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-gray-400">
                    Nacimiento
                  </span>
                </div>
                <p className="text-sm font-semibold text-white">7 Marzo 1990</p>
              </div>
            </div>

            {/* Quick Highlights */}
            <div className="grid grid-cols-2 gap-3 fade-in-up" style={{ animationDelay: '0.4s' }}>
              {quickHighlights.map((highlight) => {
                const Icon = highlight.icon
                const CardContent = (
                  <>
                    <div className="flex items-start gap-2 mb-2">
                      <Icon className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-white leading-tight line-clamp-2">
                          {highlight.title}
                        </h4>
                      </div>
                      {highlight.url && (
                        <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-yellow-400 transition-colors flex-shrink-0" />
                      )}
                    </div>
                    <div className="space-y-1">
                      <p className="text-[11px] text-yellow-400/90 font-semibold">
                        {highlight.character}
                      </p>
                      <p className="text-[10px] text-slate-400 font-medium">
                        {highlight.year}
                      </p>
                      <p className="text-[10px] text-slate-500 leading-tight">
                        {highlight.detail}
                      </p>
                    </div>
                  </>
                )

                return highlight.url ? (
                  <a
                    key={highlight.title}
                    href={highlight.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-hover group rounded-xl bg-slate-900/80 border border-slate-700/60 px-3.5 py-3.5 backdrop-blur-md hover:border-yellow-400/30 transition-all cursor-pointer"
                  >
                    {CardContent}
                  </a>
                ) : (
                  <div
                    key={highlight.title}
                    className="card-hover group rounded-xl bg-slate-900/80 border border-slate-700/60 px-3.5 py-3.5 backdrop-blur-md hover:border-yellow-400/30 transition-all"
                  >
                    {CardContent}
                  </div>
                )
              })}
            </div>

            <div className="pt-2 fade-in-up" style={{ animationDelay: '0.5s' }}>
              <a
                href="#showreel"
                className="cta-button group inline-flex items-center gap-2 rounded-full bg-yellow-400 px-7 py-3.5 text-base font-semibold text-black shadow-[0_10px_30px_rgba(250,204,21,0.25)]"
              >
                <Play className="w-5 h-5 play-icon" />
                Ver Showreel Profesional
              </a>
            </div>

            {/* Professional Links */}
            <div className="space-y-3 fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-yellow-400" />
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
                  Perfiles profesionales
                </h3>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {professionalLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-hover group flex flex-col items-center gap-2 rounded-xl border border-slate-700/70 bg-slate-900/80 px-3 py-3 backdrop-blur-md hover:border-white/20 hover:bg-slate-900/95 transition-all shadow-[0_12px_30px_rgba(15,23,42,0.8)]"
                  >
                    <span className="text-2xl">{link.icon}</span>
                    <div className="text-center">
                      <p className="text-xs font-semibold text-slate-50 group-hover:text-white transition-colors">
                        {link.name}
                      </p>
                      <p className="text-[10px] text-gray-400 mt-0.5">{link.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3 fade-in-up" style={{ animationDelay: '0.7s' }}>
              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-yellow-400" />
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
                  Redes Sociales
                </h3>
              </div>
              
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2.5">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`card-hover group flex flex-col items-center justify-center gap-2 rounded-xl border border-slate-700/70 bg-slate-900/80 px-3 py-3 backdrop-blur-md transition-all shadow-[0_12px_30px_rgba(15,23,42,0.8)] ${link.borderHover} ${link.bgHover}`}
                    >
                      {Icon === 'tiktok' ? (
                        <SiTiktok className={`w-5 h-5 text-slate-300 transition-colors ${link.color}`} />
                      ) : (
                        <Icon className={`w-5 h-5 text-slate-300 transition-colors ${link.color}`} />
                      )}
                      <p className={`text-[10px] font-semibold text-slate-400 transition-colors ${link.color}`}>
                        {link.name.split(' ')[0]}
                      </p>
                    </a>
                  )
                })}
              </div>
            </div>

            <div className="pt-3 flex justify-center lg:justify-start fade-in-up" style={{ animationDelay: '0.8s' }}>
              <a
                href="#about"
                className="explore-button group inline-flex items-center gap-3 rounded-full border border-slate-600/70 bg-slate-900/60 px-5 py-2.5 backdrop-blur-md hover:border-white/20 hover:bg-slate-900/80 transition-all"
              >
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                  Explorar portfolio completo
                </span>
                <ArrowDown className="w-4 h-4 text-yellow-400 arrow-bounce" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}
