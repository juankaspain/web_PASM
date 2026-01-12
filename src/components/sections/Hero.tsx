'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Play, MapPin, Calendar, Camera, Instagram, X, Youtube, Facebook, ExternalLink, Sparkles } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { SiTiktok, SiImdb, SiWikipedia } from 'react-icons/si'
import { RiFilmLine, RiMovie2Line } from 'react-icons/ri'
import { Tv, Film, Award, Users } from 'lucide-react'

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
      icon: SiImdb,
      description: 'Perfil profesional',
      gradient: 'from-yellow-400/20 to-yellow-600/20',
      borderColor: 'border-yellow-400/30',
      iconColor: 'text-yellow-400',
      hoverBg: 'hover:bg-yellow-400/10',
      hoverBorder: 'hover:border-yellow-400/50',
      hoverText: 'hover:text-yellow-400',
    },
    { 
      name: 'FilmAffinity', 
      url: 'https://www.filmaffinity.com/es/name.php?name-id=231727420',
      icon: RiFilmLine,
      description: 'Filmografía completa',
      gradient: 'from-blue-400/20 to-blue-600/20',
      borderColor: 'border-blue-400/30',
      iconColor: 'text-blue-400',
      hoverBg: 'hover:bg-blue-400/10',
      hoverBorder: 'hover:border-blue-400/50',
      hoverText: 'hover:text-blue-400',
    },
    { 
      name: 'SensaCine', 
      url: 'https://www.sensacine.com/actores/actor-889713/',
      icon: RiMovie2Line,
      description: 'Proyectos y noticias',
      gradient: 'from-purple-400/20 to-purple-600/20',
      borderColor: 'border-purple-400/30',
      iconColor: 'text-purple-400',
      hoverBg: 'hover:bg-purple-400/10',
      hoverBorder: 'hover:border-purple-400/50',
      hoverText: 'hover:text-purple-400',
    },
    { 
      name: 'Wikipedia', 
      url: 'https://es.wikipedia.org/wiki/Almagro_San_Miguel',
      icon: SiWikipedia,
      description: 'Biografía',
      gradient: 'from-slate-400/20 to-slate-600/20',
      borderColor: 'border-slate-400/30',
      iconColor: 'text-slate-300',
      hoverBg: 'hover:bg-slate-400/10',
      hoverBorder: 'hover:border-slate-400/50',
      hoverText: 'hover:text-slate-200',
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
      icon: SiTiktok,
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

  // Estadísticas profesionales actualizadas con datos REALES
  const careerStats = [
    {
      icon: Tv,
      value: '8',
      label: 'Series TV',
      gradient: 'from-blue-500/20 to-blue-600/20',
      iconColor: 'text-blue-400',
      borderColor: 'border-blue-400/30',
    },
    {
      icon: Film,
      value: '5',
      label: 'Películas',
      gradient: 'from-purple-500/20 to-purple-600/20',
      iconColor: 'text-purple-400',
      borderColor: 'border-purple-400/30',
    },
    {
      icon: Award,
      value: '8',
      label: 'Obras Teatro',
      gradient: 'from-yellow-500/20 to-yellow-600/20',
      iconColor: 'text-yellow-400',
      borderColor: 'border-yellow-400/30',
    },
    {
      icon: Users,
      value: '12+',
      label: 'Años Exp.',
      gradient: 'from-green-500/20 to-green-600/20',
      iconColor: 'text-green-400',
      borderColor: 'border-green-400/30',
    },
  ]

  const specialties = ['Drama', 'Comedia', 'Acción', 'Verso Clásico']

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

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
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

        .profile-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .profile-card:hover {
          transform: translateY(-8px);
        }

        .profile-icon {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .profile-card:hover .profile-icon {
          transform: scale(1.15) rotate(5deg);
        }

        .external-link-icon {
          transition: all 0.3s ease;
        }

        .profile-card:hover .external-link-icon {
          transform: translate(2px, -2px);
        }

        .stat-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .stat-card:hover {
          transform: translateY(-6px) scale(1.02);
        }

        .stat-icon {
          transition: all 0.4s ease;
        }

        .stat-card:hover .stat-icon {
          transform: scale(1.2) rotate(5deg);
        }

        .pulse-dot {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-slate-900" />

      {/* Simplified stars animation */}
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

              {/* Especialidades */}
              <div 
                className="flex items-center gap-2 flex-wrap fade-in-up pt-2"
                style={{ animationDelay: '0.25s' }}
              >
                <Sparkles className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <div className="flex items-center gap-2 flex-wrap">
                  {specialties.map((specialty, index) => (
                    <span key={specialty}>
                      <span className="text-sm font-medium text-slate-400">{specialty}</span>
                      {index < specialties.length - 1 && (
                        <span className="text-slate-600 mx-1">|</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
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

            {/* Sección de Bienvenida Profesional con Estadísticas */}
            <div className="relative fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/20 via-yellow-500/20 to-yellow-400/20 rounded-3xl blur-2xl opacity-60" />
              
              <div className="relative bg-gradient-to-br from-slate-900/95 to-black/95 rounded-3xl border border-yellow-400/20 p-6 backdrop-blur-xl shadow-2xl">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-green-400 pulse-dot" />
                  <span className="text-xs font-bold uppercase tracking-widest text-green-400">
                    Disponible para nuevos proyectos
                  </span>
                </div>

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Bienvenido a mi Portfolio Profesional
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Más de <span className="text-yellow-400 font-bold">12 años</span> de experiencia en televisión, cine y teatro.
                    Con <span className="text-yellow-400 font-bold">+300 episodios</span> en series de televisión.
                  </p>
                </div>

                {/* Estadísticas actualizadas */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {careerStats.map((stat, index) => {
                    const Icon = stat.icon
                    return (
                      <div
                        key={index}
                        className={`stat-card relative rounded-xl border bg-gradient-to-br from-black/60 to-slate-900/60 p-4 backdrop-blur-sm ${stat.borderColor}`}
                      >
                        <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${stat.gradient} opacity-0 hover:opacity-100 transition-opacity blur-lg`} />
                        
                        <div className="relative flex flex-col items-center gap-2 text-center">
                          <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                            <Icon className={`stat-icon w-5 h-5 ${stat.iconColor}`} />
                          </div>
                          <div className="text-2xl font-bold text-white">{stat.value}</div>
                          <div className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">
                            {stat.label}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Botones de CTA */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3 fade-in-up" style={{ animationDelay: '0.5s' }}>
              <a
                href="#showreel"
                className="cta-button group inline-flex items-center justify-center gap-2 rounded-full bg-yellow-400 px-7 py-3.5 text-base font-semibold text-black shadow-[0_10px_30px_rgba(250,204,21,0.25)]"
              >
                <Play className="w-5 h-5 play-icon" />
                Ver Showreel Profesional
              </a>
              
              <a
                href="#headshots"
                className="cta-button group inline-flex items-center justify-center gap-2 rounded-full bg-yellow-400 px-7 py-3.5 text-base font-semibold text-black shadow-[0_10px_30px_rgba(250,204,21,0.25)]"
              >
                <Camera className="w-5 h-5 play-icon" />
                Ver Headshots Profesionales
              </a>
            </div>

            {/* Professional Links - Recuperados */}
            <div className="space-y-4 fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center gap-2.5">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/60 border border-slate-700/50 backdrop-blur-sm">
                  <ExternalLink className="w-3.5 h-3.5 text-yellow-400" />
                  <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-slate-300">
                    Perfiles Profesionales
                  </h3>
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {professionalLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`profile-card group relative flex flex-col items-center gap-3 rounded-2xl border bg-gradient-to-br from-slate-900/90 to-slate-950/90 px-4 py-5 backdrop-blur-xl transition-all shadow-[0_8px_32px_rgba(0,0,0,0.5)] ${link.borderColor} ${link.hoverBg} ${link.hoverBorder}`}
                    >
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${link.gradient} opacity-0 group-hover:opacity-100 transition-opacity blur-xl`} />
                      
                      <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-xl bg-black/40 border border-white/10 shadow-lg">
                        <Icon className={`profile-icon w-7 h-7 ${link.iconColor}`} />
                      </div>
                      
                      <div className="relative z-10 text-center space-y-1">
                        <div className="flex items-center justify-center gap-1.5">
                          <p className={`text-sm font-bold text-white transition-colors ${link.hoverText}`}>
                            {link.name}
                          </p>
                          <ExternalLink className={`external-link-icon w-3 h-3 text-slate-500 group-hover:${link.iconColor.replace('text-', 'text-')} transition-all`} />
                        </div>
                        <p className="text-[10px] text-slate-400 leading-tight">
                          {link.description}
                        </p>
                      </div>
                      
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                      </div>
                    </a>
                  )
                })}
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
                      <Icon className={`w-5 h-5 text-slate-300 transition-colors ${link.color}`} />
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