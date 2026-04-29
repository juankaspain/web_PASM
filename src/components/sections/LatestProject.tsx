'use client'

import {
  Play,
  Calendar,
  Film,
  Star,
  ExternalLink,
  Youtube,
  Heart,
  Sparkles,
  Video,
  ChevronDown,
} from 'lucide-react'
import Image from '@/components/ui/SafeImage'
import { useState } from 'react'
import { useInView } from '@/hooks/useInView'

export default function LatestProject() {
  const { ref, isInView } = useInView({ once: true, margin: '-80px' })
  const [showCharacterInfo, setShowCharacterInfo] = useState(false)

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black via-slate-950 to-slate-900 py-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-1/4 top-0 h-[500px] w-[500px] rounded-full bg-red-500/5 blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 h-[600px] w-[600px] rounded-full bg-red-500/5 blur-[120px]" />
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
          <div
            className={`mb-8 inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 shadow-lg transition-all duration-500 ${isInView ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
          >
            <Sparkles className="h-4 w-4 text-white" strokeWidth={2} />
            <span className="text-sm font-bold tracking-wide text-white">
              ÚLTIMO TRABAJO
            </span>
          </div>

          <div className="mb-20 grid items-center gap-12 lg:grid-cols-2">
            <div
              className={`transition-all delay-200 duration-[600ms] ${isInView ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}
            >
              <h2 className="mb-6 text-5xl font-bold leading-tight text-white lg:text-6xl">
                Un fantasma en la batalla
              </h2>

              <div className="mb-6 flex items-center gap-6 text-slate-400">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Film className="h-5 w-5" />
                  <span>Cine</span>
                </div>
              </div>

              <p className="mb-6 text-xl leading-relaxed text-slate-300">
                Película dramática dirigida por{' '}
                <span className="font-semibold text-white">Agustín Díaz Yanes</span> sobre
                ETA y sus consecuencias. Estrenada en cines en octubre de 2025 y{' '}
                <span className="font-semibold text-white">disponible en Netflix</span>.
              </p>

              <div className="mb-8 rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
                <h3 className="mb-3 text-lg font-bold text-white">Reparto Destacado</h3>
                <p className="text-slate-300">
                  Junto a <span className="font-semibold text-white">Susana Abaitua</span>
                  , <span className="font-semibold text-white">Aitor Luna</span>,{' '}
                  <span className="font-semibold text-white">Luis Callejo</span> y{' '}
                  <span className="font-semibold text-white">Ruth Díaz</span>
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.netflix.com/title/81700950"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-scale inline-flex items-center gap-2 rounded-full bg-red-600 px-8 py-4 font-bold text-white shadow-xl transition-all hover:bg-red-700"
                >
                  <Play className="h-5 w-5" />
                  Ver en Netflix
                </a>
                <a
                  href="https://www.youtube.com/watch?v=R0ufJf5SFIU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-scale inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-8 py-4 font-bold text-white transition-all hover:bg-white/[0.08]"
                >
                  <Youtube className="h-5 w-5" />
                  Ver Tráiler
                </a>
                <a
                  href="https://www.imdb.com/title/tt32129665/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-scale inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-8 py-4 font-bold text-white transition-all hover:bg-white/[0.08]"
                >
                  <ExternalLink className="h-5 w-5" />
                  Ver en IMDb
                </a>
              </div>
            </div>

            <div
              className={`relative transition-all delay-200 duration-[600ms] ${isInView ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
            >
              <div className="absolute -inset-[1px] rounded-2xl bg-red-600/20 opacity-60 blur-xl" />
              <div className="group relative h-[500px] overflow-hidden rounded-2xl shadow-2xl md:h-[600px]">
                <Image
                  src="/assets/cinema/fantasma-en-la-batalla.jpg"
                  alt="Poster oficial de Un fantasma en la batalla"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  priority
                />

                <a
                  href="https://www.youtube.com/watch?v=R0ufJf5SFIU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-600 shadow-2xl transition-transform hover:scale-110">
                    <Play className="ml-1 h-10 w-10 text-white" />
                  </div>
                </a>
              </div>

              <div className="absolute -bottom-6 -right-6 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 px-6 py-3 font-bold text-white shadow-xl">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-white" />
                  <span className="text-lg">7.4</span>
                  <span className="text-sm opacity-80">IMDb</span>
                </div>
              </div>
            </div>
          </div>

          {/* Behind the Scenes - Entrevista Canal Sur con video embebido */}
          <div
            className={`mb-20 transition-all delay-300 duration-[600ms] ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
          >
            <div className="mb-12 text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-gradient-to-r from-yellow-500/20 to-orange-600/20 px-4 py-1.5 backdrop-blur-sm">
                <Video className="h-4 w-4 text-yellow-400" strokeWidth={2} />
                <span className="text-sm font-medium tracking-wide text-yellow-200">
                  BEHIND THE SCENES
                </span>
              </div>
              <h3 className="mb-4 text-4xl font-bold text-white lg:text-5xl">
                Entre Bastidores
              </h3>
              <p className="text-lg text-slate-400">
                Cómo fue trabajar en esta producción
              </p>
            </div>

            <div className="mx-auto max-w-4xl">
              <div className="relative">
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-yellow-500/30 to-orange-600/30 opacity-60 blur-xl" />
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-sm">
                  {/* Embedded YouTube Player */}
                  <div className="relative aspect-video">
                    <iframe
                      src="https://www.youtube.com/embed/MV5kUBPfd9U"
                      title="Una de cine - Canal Sur - Almagro San Miguel"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>

                  <div className="p-6">
                    <div className="mb-3 flex items-center gap-3">
                      <Youtube className="h-6 w-6 text-red-500" />
                      <h4 className="text-2xl font-bold text-white">
                        Una de cine - Canal Sur
                      </h4>
                    </div>
                    <p className="mb-4 leading-relaxed text-slate-300">
                      El actor sevillano{' '}
                      <span className="font-semibold text-white">Almagro San Miguel</span>{' '}
                      cuenta cómo ha sido trabajar en{' '}
                      <span className="font-semibold text-white">
                        "Un fantasma en la batalla"
                      </span>{' '}
                      junto al director{' '}
                      <span className="font-semibold text-white">Agustín Díaz Yanes</span>
                      . También habla sobre su participación en{' '}
                      <span className="font-semibold text-white">"Carta Blanca"</span> de
                      Gerardo Herrero.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-slate-400">
                      <span>?? Canal Sur</span>
                      <span>|</span>
                      <span>?? 14 nov 2025</span>
                      <span>|</span>
                      <a
                        href="https://www.youtube.com/watch?v=MV5kUBPfd9U"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-yellow-400 transition-colors hover:text-yellow-300"
                      >
                        Ver en YouTube ?
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Collapsible Character Info Section - Sin título Antonio */}
          <div
            className={`mt-20 transition-all delay-[400ms] duration-[600ms] ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
          >
            <div className="text-center">
              <button
                onClick={() => setShowCharacterInfo(!showCharacterInfo)}
                className="hover-scale inline-flex items-center gap-3 rounded-full border border-white/20 bg-gradient-to-r from-white/[0.08] to-white/[0.05] px-8 py-4 font-bold text-white shadow-xl transition-all hover:border-yellow-400/40 hover:bg-white/[0.12]"
              >
                <span>¿Quieres saber más sobre mi personaje?</span>
                <ChevronDown
                  className={`h-5 w-5 text-yellow-400 transition-transform duration-300 ${showCharacterInfo ? 'rotate-180' : ''}`}
                />
              </button>
            </div>

            {/* CSS-based Collapsible Content */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${showCharacterInfo ? 'mt-12 max-h-[2000px] opacity-100' : 'mt-0 max-h-0 opacity-0'}`}
            >
              <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
                <div className="group relative">
                  <div className="absolute -inset-[1px] rounded-2xl bg-white/10 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition-all hover:bg-white/[0.05]">
                    <div className="mb-6 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                        <Heart className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-white">El Novio de Amaia</h4>
                    </div>

                    <div className="space-y-4 leading-relaxed text-slate-300">
                      <p>
                        Antonio es{' '}
                        <span className="font-semibold text-white">
                          el novio de Amaia
                        </span>
                        , la joven guardia civil que se infiltra en ETA durante más de una
                        década. Su personaje representa{' '}
                        <span className="font-semibold text-white">
                          el amor incondicional
                        </span>{' '}
                        y el apoyo emocional en medio de una operación extremadamente
                        peligrosa.
                      </p>
                      <p>
                        Interpreta a un hombre que debe enfrentar la decisión más difícil:{' '}
                        <span className="font-semibold text-white">
                          dejar ir al amor de su vida
                        </span>{' '}
                        por el bien de la misión y la seguridad nacional. Un papel cargado
                        de emoción, sacrificio y tensión dramática.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group relative">
                  <div className="absolute -inset-[1px] rounded-2xl bg-white/10 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition-all hover:bg-white/[0.05]">
                    <div className="mb-6 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                        <Star className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-white">Sobre el Personaje</h4>
                    </div>

                    <div className="space-y-4">
                      <blockquote className="border-l-4 border-white/20 pl-4 italic text-slate-300">
                        "Yo al amor de mi vida la esperaría lo que fuera necesario. Es un
                        personaje que se mueve entre la lealtad y la duda, con una
                        presencia sobria y contenida."
                      </blockquote>

                      <div className="space-y-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                        <div className="flex items-start gap-3">
                          <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-white" />
                          <p className="text-sm text-slate-300">
                            <span className="font-semibold text-white">
                              Contexto histórico:
                            </span>{' '}
                            Basado en la Operación Santuario, la mayor operación
                            encubierta contra ETA
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-white" />
                          <p className="text-sm text-slate-300">
                            <span className="font-semibold text-white">
                              Trabajo de investigación:
                            </span>{' '}
                            Hablé con personas que vivieron los atentados para entender el
                            contexto emocional
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-white" />
                          <p className="text-sm text-slate-300">
                            <span className="font-semibold text-white">
                              Reto interpretativo:
                            </span>{' '}
                            Trabajar la química con Susana Abaitua para que se viera que
                            están muy enamorados
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <div className="inline-block max-w-3xl rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-6 backdrop-blur-sm">
                  <p className="text-lg leading-relaxed text-slate-300">
                    <span className="text-2xl font-bold text-white">"</span>
                    Es un proyecto que me gustó desde el primer momento. La historia sobre
                    la lucha contra ETA es cruda. El trabajo de Susana Abaitua es de Goya.
                    Ella tiene que rechazar la vida familiar que tenía previsto, soy su
                    pareja.
                    <span className="text-2xl font-bold text-white">"</span>
                  </p>
                  <p className="mt-4 font-semibold text-slate-400">
                    - Almagro San Miguel
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
