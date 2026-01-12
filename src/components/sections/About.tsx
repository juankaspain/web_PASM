'use client'

import { motion, useInView } from 'framer-motion'
import { Heart, MapPin, Calendar, Quote, Sparkles, Trophy, Users, Compass } from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'
import { generateShimmerDataURL, imageSizes } from '@/lib/image-utils'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const values = [
    {
      icon: Sparkles,
      title: 'Versatilidad',
      description: 'Del verso clásico al drama contemporáneo, cada proyecto es una oportunidad para explorar nuevas facetas de la interpretación.',
    },
    {
      icon: Trophy,
      title: 'Excelencia',
      description: 'La formación continua y el trabajo riguroso son la base de cada personaje que construyo.',
    },
    {
      icon: Users,
      title: 'Colaboración',
      description: 'El mejor trabajo surge del diálogo creativo con directores, compañeros y equipos técnicos.',
    },
    {
      icon: Compass,
      title: 'Compromiso',
      description: 'Cada papel, grande o pequeño, merece la misma dedicación y profundidad interpretativa.',
    },
  ]

  return (
    <section id="about" className="relative py-32 overflow-hidden bg-gradient-to-b from-slate-900 via-black to-slate-950">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[120px]" />
      </div>

      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm fade-in-up">
              <Heart className="w-4 h-4 text-yellow-400" strokeWidth={2} />
              <span className="text-sm font-medium text-slate-300 tracking-wide">Sobre Mí</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white fade-in-up" style={{ animationDelay: '0.1s' }}>
              Más Allá del Personaje
            </h2>

            <div className="w-20 h-0.5 bg-yellow-400 mx-auto mb-6 fade-in-up" style={{ animationDelay: '0.2s' }} />
            
            <p className="text-lg text-slate-400 max-w-4xl mx-auto leading-relaxed fade-in-up px-4" style={{ animationDelay: '0.3s' }}>
              La historia de un actor sevillano que encontró su voz en el verso clásico y su lugar en la pantalla
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
            <div className="fade-in-left space-y-8">
              <div className="relative group">
                <div className="glow-effect absolute -inset-[1px] bg-yellow-400/20 rounded-2xl blur-lg" />
                <div className="relative h-[500px] rounded-2xl overflow-hidden">
                  <Image
                    src="https://github.com/user-attachments/assets/0c09e17f-1983-4ad0-8926-a0d6ef6ae5cf"
                    alt="Almagro San Miguel - Actor profesional"
                    fill
                    className="object-cover image-hover-scale"
                    sizes={imageSizes.hero}
                    placeholder="blur"
                    blurDataURL={generateShimmerDataURL(600, 500)}
                    quality={85}
                    loading="eager"
                    fetchPriority="high"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4 backdrop-blur-sm card-hover">
                  <MapPin className="w-5 h-5 text-yellow-400 mb-2" />
                  <div className="text-xs text-slate-500">Residencia</div>
                  <div className="font-bold text-white">Madrid / Sevilla</div>
                </div>
                <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4 backdrop-blur-sm card-hover">
                  <Calendar className="w-5 h-5 text-yellow-400 mb-2" />
                  <div className="text-xs text-slate-500">Nacimiento</div>
                  <div className="font-bold text-white">7 Marzo 1990</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center fade-in-right space-y-6">
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <Quote className="w-8 h-8 text-yellow-400 mb-4" />
                <p className="text-xl text-slate-300 leading-relaxed italic mb-4">
                  "El teatro me enseñó a respetar el texto, la televisión me enseñó a contar historias con silencio, 
                  y el cine me enseñó que cada fotograma es una oportunidad para la verdad."
                </p>
                <p className="text-slate-500 font-semibold">— Almagro San Miguel</p>
              </div>

              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Soy <span className="text-white font-semibold">Pedro Francisco Almagro Gordillo</span>, conocido artísticamente como 
                  <span className="text-white font-semibold"> Almagro San Miguel</span>. Nací en Sevilla, una ciudad que respira arte, 
                  y desde muy joven supe que mi vida estaría ligada al teatro.
                </p>
                <p>
                  Mi camino no ha sido convencional. Mientras muchos actores buscan la fama rápida, yo elegí el camino largo: 
                  <span className="text-white font-semibold"> cuatro años en la ESAD</span>, perfeccionamiento con <span className="text-white font-semibold">Darío Facal</span>, 
                  y <span className="text-white font-semibold">dos años en la Compañía Nacional de Teatro Clásico</span> bajo la dirección de Helena Pimenta.
                </p>
                <p>
                  El <span className="text-white font-semibold">verso clásico español</span> se convirtió en mi especialidad, casi en mi obsesión. 
                  Hay algo mágico en dar vida a palabras escritas hace siglos, en hacer que Lope, Calderón o Tirso vuelvan a respirar en el escenario.
                </p>
                <p>
                  Cuando llegó la televisión, con <span className="text-white font-semibold">"Hernán" en 2019</span>, algunos pensaron que abandonaría el teatro. 
                  Pero para mí, cada medio es una oportunidad diferente de contar historias. He participado en 
                  <span className="text-white font-semibold"> más de 300 episodios</span> de televisión, siempre intentando llevar la misma exigencia 
                  que aprendí en los escenarios.
                </p>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12 text-white">
              Lo Que Me Define Como Actor
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="group"
                  >
                    <div className="relative h-full bg-white/[0.03] border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/[0.05] hover:border-yellow-400/30 transition-all">
                      <div className="w-12 h-12 bg-yellow-400/10 border border-yellow-400/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-yellow-400" />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                      <p className="text-slate-400 leading-relaxed">{value.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Personal Reflection */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-yellow-900/10 to-orange-900/5 border border-yellow-500/30 rounded-2xl p-8 lg:p-12 backdrop-blur-sm">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center">
                    <Heart className="w-8 h-8 text-black" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4">Más Allá de la Actuación</h3>
                  <div className="space-y-4 text-slate-300 leading-relaxed">
                    <p>
                      Fuera de los escenarios y platós, soy un apasionado de la <span className="text-white font-semibold">música clásica</span>. 
                      Toco el <span className="text-white font-semibold">violonchelo</span> y la <span className="text-white font-semibold">viola</span> de forma autodidacta, 
                      instrumentos que me ayudan a encontrar el ritmo y la musicalidad en los textos que interpreto.
                    </p>
                    <p>
                      La <span className="text-white font-semibold">esgrima</span> y la <span className="text-white font-semibold">equitación</span> no son solo habilidades 
                      profesionales para mí, son pasiones que me conectan con la historia y la tradición de los personajes que doy vida, 
                      especialmente en producciones de época.
                    </p>
                    <p>
                      Creo firmemente que un actor completo debe ser un <span className="text-white font-semibold">eterno estudiante</span>. 
                      Por eso nunca dejo de formarme, de leer, de ver teatro, de cuestionarme. Cada proyecto es una oportunidad para crecer, 
                      tanto profesional como personalmente.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Final Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mt-16 text-center max-w-3xl mx-auto"
          >
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl px-8 py-6 backdrop-blur-sm">
              <Quote className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
              <p className="text-2xl text-slate-300 leading-relaxed italic">
                "Cada personaje que interpreto deja algo en mí, y espero dejar algo de mí en cada personaje."
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

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

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .fade-in-left {
          animation: fadeInLeft 0.6s ease-out forwards;
          opacity: 0;
          animation-delay: 0.2s;
        }

        .fade-in-right {
          animation: fadeInRight 0.6s ease-out forwards;
          opacity: 0;
          animation-delay: 0.2s;
        }

        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-hover:hover {
          transform: translateY(-4px);
        }

        .glow-effect {
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .group:hover .glow-effect {
          opacity: 1;
        }

        .image-hover-scale {
          transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .group:hover .image-hover-scale {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  )
}
