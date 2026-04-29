'use client'

import {
  Heart,
  MapPin,
  Calendar,
  Quote,
  Sparkles,
  Trophy,
  Users,
  Compass,
} from 'lucide-react'
import Image from '@/components/ui/SafeImage'
import { generateShimmerDataURL, imageSizes } from '@/lib/image-utils'
import { useInView } from '@/hooks/useInView'

export default function About() {
  const { ref, isInView } = useInView({ once: true, margin: '-80px' })

  const values = [
    {
      icon: Sparkles,
      title: 'Versatilidad',
      description:
        'Del verso clásico al drama contemporáneo, cada proyecto es una oportunidad para explorar nuevas facetas de la interpretación.',
    },
    {
      icon: Trophy,
      title: 'Excelencia',
      description:
        'La formación continua y el trabajo riguroso son la base de cada personaje que construyo.',
    },
    {
      icon: Users,
      title: 'Colaboración',
      description:
        'El mejor trabajo surge del diálogo creativo con directores, compañeros y equipos técnicos.',
    },
    {
      icon: Compass,
      title: 'Compromiso',
      description:
        'Cada papel, grande o pequeño, merece la misma dedicación y profundidad interpretativa.',
    },
  ]

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-black to-slate-950 py-32"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-yellow-500/5 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 h-[600px] w-[600px] rounded-full bg-yellow-500/5 blur-[120px]" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-[600ms] ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
        >
          <div className="mb-20 text-center">
            <div className="fade-in-up mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
              <Heart className="h-4 w-4 text-yellow-400" strokeWidth={2} />
              <span className="text-sm font-medium tracking-wide text-slate-300">
                Sobre Mí
              </span>
            </div>

            <h2
              className="fade-in-up mb-6 text-4xl font-bold text-white lg:text-5xl"
              style={{ animationDelay: '0.1s' }}
            >
              Más Allá del Personaje
            </h2>

            <div
              className="fade-in-up mx-auto mb-6 h-0.5 w-20 bg-yellow-400"
              style={{ animationDelay: '0.2s' }}
            />

            <p
              className="fade-in-up mx-auto max-w-4xl px-4 text-lg leading-relaxed text-slate-400"
              style={{ animationDelay: '0.3s' }}
            >
              La historia de un actor sevillano que encontró su voz en el verso clásico y
              su lugar en la pantalla
            </p>
          </div>

          <div className="mx-auto mb-20 grid max-w-6xl gap-12 lg:grid-cols-2">
            <div className="fade-in-left space-y-8">
              <div className="group relative">
                <div className="glow-effect absolute -inset-[1px] rounded-2xl bg-yellow-400/20 blur-lg" />
                <div className="relative h-[500px] overflow-hidden rounded-2xl">
                  <Image
                    src="/assets/about/profile.jpg"
                    alt="Almagro San Miguel - Actor profesional"
                    fill
                    className="image-hover-scale object-cover"
                    sizes={imageSizes.hero}
                    placeholder="blur"
                    blurDataURL={generateShimmerDataURL(600, 500)}
                    quality={85}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="card-hover rounded-xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm">
                  <MapPin className="mb-2 h-5 w-5 text-yellow-400" />
                  <div className="text-xs text-slate-500">Residencia</div>
                  <div className="font-bold text-white">Madrid / Sevilla</div>
                </div>
                <div className="card-hover rounded-xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm">
                  <Calendar className="mb-2 h-5 w-5 text-yellow-400" />
                  <div className="text-xs text-slate-500">Nacimiento</div>
                  <div className="font-bold text-white">7 Marzo 1990</div>
                </div>
              </div>
            </div>

            <div className="fade-in-right flex flex-col justify-center space-y-6">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm">
                <Quote className="mb-4 h-8 w-8 text-yellow-400" />
                <p className="mb-4 text-xl italic leading-relaxed text-slate-300">
                  "El teatro me enseñó a respetar el texto, la televisión me enseñó a
                  contar historias con silencio, y el cine me enseñó que cada fotograma es
                  una oportunidad para la verdad."
                </p>
                <p className="font-semibold text-slate-500">— Almagro San Miguel</p>
              </div>

              <div className="space-y-4 leading-relaxed text-slate-300">
                <p>
                  Soy{' '}
                  <span className="font-semibold text-white">
                    Pedro Francisco Almagro Gordillo
                  </span>
                  , conocido artísticamente como
                  <span className="font-semibold text-white"> Almagro San Miguel</span>.
                  Nací en Sevilla, una ciudad que respira arte, y desde muy joven supe que
                  mi vida estaría ligada al teatro.
                </p>
                <p>
                  Mi camino no ha sido convencional. Mientras muchos actores buscan la
                  fama rápida, yo elegí el camino largo:
                  <span className="font-semibold text-white">
                    {' '}
                    cuatro años en la ESAD
                  </span>
                  , perfeccionamiento con{' '}
                  <span className="font-semibold text-white">Darío Facal</span>, y{' '}
                  <span className="font-semibold text-white">
                    dos años en la Compañía Nacional de Teatro Clásico
                  </span>{' '}
                  bajo la dirección de Helena Pimenta.
                </p>
                <p>
                  El{' '}
                  <span className="font-semibold text-white">verso clásico español</span>{' '}
                  se convirtió en mi especialidad, casi en mi obsesión. Hay algo mágico en
                  dar vida a palabras escritas hace siglos, en hacer que Lope, Calderón o
                  Tirso vuelvan a respirar en el escenario.
                </p>
                <p>
                  Cuando llegó la televisión, con{' '}
                  <span className="font-semibold text-white">"Hernán" en 2019</span>,
                  algunos pensaron que abandonaría el teatro. Pero para mí, cada medio es
                  una oportunidad diferente de contar historias. He participado en
                  <span className="font-semibold text-white">
                    {' '}
                    más de 300 episodios
                  </span>{' '}
                  de televisión, siempre intentando llevar la misma exigencia que aprendí
                  en los escenarios.
                </p>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="mb-20">
            <h3 className="mb-12 text-center text-3xl font-bold text-white">
              Lo Que Me Define Como Actor
            </h3>
            <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <div
                    key={value.title}
                    style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                    className={`group transition-all duration-[600ms] ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
                  >
                    <div className="relative h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all hover:border-yellow-400/30 hover:bg-white/[0.05]">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-yellow-400/30 bg-yellow-400/10 transition-transform group-hover:scale-110">
                        <Icon className="h-6 w-6 text-yellow-400" />
                      </div>
                      <h4 className="mb-3 text-xl font-bold text-white">{value.title}</h4>
                      <p className="leading-relaxed text-slate-400">
                        {value.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Personal Reflection */}
          <div
            className={`mx-auto max-w-4xl transition-all delay-500 duration-[600ms] ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
          >
            <div className="rounded-2xl border border-yellow-500/30 bg-gradient-to-br from-yellow-900/10 to-orange-900/5 p-8 backdrop-blur-sm lg:p-12">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400">
                    <Heart className="h-8 w-8 text-black" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="mb-4 text-2xl font-bold text-white">
                    Más Allá de la Actuación
                  </h3>
                  <div className="space-y-4 leading-relaxed text-slate-300">
                    <p>
                      Fuera de los escenarios y platós, soy un apasionado de la{' '}
                      <span className="font-semibold text-white">música clásica</span>.
                      Toco el{' '}
                      <span className="font-semibold text-white">violonchelo</span> y la{' '}
                      <span className="font-semibold text-white">viola</span> de forma
                      autodidacta, instrumentos que me ayudan a encontrar el ritmo y la
                      musicalidad en los textos que interpreto.
                    </p>
                    <p>
                      La <span className="font-semibold text-white">esgrima</span> y la{' '}
                      <span className="font-semibold text-white">equitación</span> no son
                      solo habilidades profesionales para mí, son pasiones que me conectan
                      con la historia y la tradición de los personajes que doy vida,
                      especialmente en producciones de época.
                    </p>
                    <p>
                      Creo firmemente que un actor completo debe ser un{' '}
                      <span className="font-semibold text-white">eterno estudiante</span>.
                      Por eso nunca dejo de formarme, de leer, de ver teatro, de
                      cuestionarme. Cada proyecto es una oportunidad para crecer, tanto
                      profesional como personalmente.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Final Quote */}
          <div
            className={`mx-auto mt-16 max-w-3xl text-center transition-all delay-700 duration-[600ms] ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
          >
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-6 backdrop-blur-sm">
              <Quote className="mx-auto mb-4 h-8 w-8 text-yellow-400" />
              <p className="text-2xl italic leading-relaxed text-slate-300">
                "Cada personaje que interpreto deja algo en mí, y espero dejar algo de mí
                en cada personaje."
              </p>
            </div>
          </div>
        </div>
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
