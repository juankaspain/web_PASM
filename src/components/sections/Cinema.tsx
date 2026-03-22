'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Film, Calendar, User, Sparkles, X, Play, Heart, Star, Quote } from 'lucide-react'
import Image from 'next/image'
import { useRef, useState } from 'react'

interface FilmDetails {
  id: number
  title: string
  year: string
  yearSort: number
  director: string
  role: string
  type: string
  platform: string
  poster: string
  description: string
  detailedInfo?: {
    characterName: string
    characterDescription: string
    synopsis: string
    quote?: string
    trailerUrl?: string
    imdbUrl?: string
    additionalImages?: string[]
    awards?: string[]
  }
}

const films: FilmDetails[] = [
  {
    id: 1,
    title: 'Un fantasma en la batalla',
    year: '2025',
    yearSort: 2025,
    director: 'Agustín Díaz Yanes',
    role: 'Antonio',
    type: 'Largometraje',
    platform: 'Netflix',
    poster: '/assets/cinema/fantasma-en-la-batalla.jpg',
    description:
      'Película sobre la Operación Santuario contra ETA. Interpreto al novio de la protagonista infiltrada.',
    detailedInfo: {
      characterName: 'Antonio',
      characterDescription:
        'Antonio es el novio de Amaia, la joven guardia civil que se infiltra en ETA durante más de una década. Su personaje representa el amor incondicional y el apoyo emocional en medio de una operación extremadamente peligrosa. Interpreta a un hombre que debe enfrentar la decisión más difícil: dejar ir al amor de su vida por el bien de la misión y la seguridad nacional.',
      synopsis:
        'Película dramática dirigida por Agustín Díaz Yanes sobre ETA y sus consecuencias. La historia se centra en la Operación Santuario, la mayor operación encubierta contra ETA. Estrenada en cines en octubre de 2025 y disponible en Netflix. Reparto estelar con Susana Abaitua, Aitor Luna, Luis Callejo y Ruth Díaz.',
      quote:
        '"Es un proyecto que me gustó desde el primer momento. La historia sobre la lucha contra ETA es cruda. El trabajo de Susana Abaitua es de Goya. Ella tiene que rechazar la vida familiar que tenía previsto, soy su pareja."',
      trailerUrl: 'https://www.youtube.com/watch?v=R0ufJf5SFIU',
      imdbUrl: 'https://www.imdb.com/title/tt32129665/',
    },
  },
  {
    id: 2,
    title: 'Carta Blanca',
    year: '2024',
    yearSort: 2024,
    director: 'Gerardo Herrero',
    role: 'Legionario',
    type: 'Largometraje',
    platform: 'Cine',
    poster: '/assets/cinema/carta-blanca.jpg',
    description:
      'Film sobre la guerra en el Rif y el desastre de Annual. Rodaje en Ceuta con legionarios reales.',
    detailedInfo: {
      characterName: 'Legionario',
      characterDescription:
        'Interpreto a un legionario español durante la guerra del Rif. Un personaje que representa el sacrificio y la lealtad de los soldados que lucharon en el desastre de Annual. El rodaje se realizó en Ceuta con la colaboración de legionarios reales, lo que aportó autenticidad y realismo a la interpretación.',
      synopsis:
        'Film histórico dirigido por Gerardo Herrero que narra los acontecimientos del desastre de Annual durante la guerra del Rif. Una mirada intensa y realista sobre uno de los episodios más dramáticos de la historia militar española.',
      quote:
        '"Trabajar con legionarios reales fue una experiencia única. Su disciplina y profesionalidad me ayudaron a entender la mentalidad militar y a dar autenticidad al personaje."',
    },
  },
  {
    id: 3,
    title: 'Fueron los días',
    year: '2024',
    yearSort: 2024,
    director: '-',
    role: 'Personaje Principal',
    type: 'Largometraje',
    platform: 'Cine',
    poster: '/assets/cinema/fueron-los-dias.jpg',
    description: 'Largometraje estrenado en 2024.',
    detailedInfo: {
      characterName: 'Personaje Principal',
      characterDescription:
        'Papel protagonista en este largometraje que explora temas contemporáneos con una mirada profunda y emotiva. Un personaje complejo que atraviesa un viaje de autodescubrimiento y transformación personal.',
      synopsis:
        'Largometraje estrenado en 2024 que ofrece una narrativa íntima y personal sobre la vida, las relaciones y el paso del tiempo.',
    },
  },
  {
    id: 4,
    title: 'Mario, Kike y David',
    year: '2016',
    yearSort: 2016,
    director: '-',
    role: 'Kike',
    type: 'Cortometraje',
    platform: 'Festival',
    poster: '/assets/cinema/mario-kike-david.jpg',
    description: 'Cortometraje donde interpreto al personaje Kike.',
    detailedInfo: {
      characterName: 'Kike',
      characterDescription:
        'Kike es uno de los tres protagonistas de este cortometraje que explora la amistad masculina y los dilemas de la vida adulta. Un personaje que representa la honestidad emocional y la vulnerabilidad, rompiendo con estereotipos tradicionales.',
      synopsis:
        'Cortometraje que sigue las vidas entrelazadas de tres amigos: Mario, Kike y David. Una historia sobre la amistad, las decisiones y cómo enfrentamos los cambios en nuestras vidas.',
    },
  },
  {
    id: 5,
    title: 'Lapso',
    year: '2013',
    yearSort: 2013,
    director: '-',
    role: 'Rodolfo',
    type: 'Cortometraje',
    platform: 'Festival',
    poster: '/assets/cinema/lapso.jpg',
    description: 'Uno de mis primeros trabajos en cine, interpretando a Rodolfo.',
    detailedInfo: {
      characterName: 'Rodolfo',
      characterDescription:
        'Mi primer papel importante en cine. Rodolfo es un personaje que me permitió explorar las primeras facetas de la interpretación cinematográfica, trabajando con las sutilezas de la cámara y la narrativa visual. Un trabajo formativo que marcó el inicio de mi carrera en el cine.',
      synopsis:
        'Cortometraje de 2013 que explora conceptos de tiempo, memoria y percepción. Una propuesta visual e intimista que marcó uno de mis primeros pasos en el mundo del cine.',
    },
  },
].sort((a, b) => b.yearSort - a.yearSort)

export default function Cinema() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [selectedFilm, setSelectedFilm] = useState<FilmDetails | null>(null)

  return (
    <>
      <section
        id="filmografia"
        className="relative overflow-hidden bg-gradient-to-b from-black via-slate-950 to-slate-900 py-32"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-yellow-500/5 blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 h-[600px] w-[600px] rounded-full bg-yellow-500/5 blur-[120px]" />
        </div>

        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-16 text-center">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm"
              >
                <Film className="h-4 w-4 text-yellow-400" strokeWidth={2} />
                <span className="text-sm font-medium tracking-wide text-slate-300">
                  Filmografía
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-6 text-5xl font-bold tracking-tight text-white lg:text-6xl"
              >
                Cine & Cortometrajes
              </motion.h2>

              {/* Golden line */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="mx-auto mb-6 h-0.5 w-20 bg-yellow-400"
              />

              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-400"
              >
                Trabajos destacados en cine y cortometrajes
              </motion.p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {films.map((film, index) => (
                <motion.button
                  key={film.id}
                  onClick={() => setSelectedFilm(film)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative w-full text-left"
                >
                  <div className="absolute -inset-[1px] rounded-2xl bg-yellow-400/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all hover:border-yellow-400/30 hover:bg-white/[0.04]">
                    {/* Poster */}
                    <div className="relative aspect-[2/3] overflow-hidden">
                      <Image
                        src={film.poster}
                        alt={`Póster de ${film.title}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                      {/* Type badge */}
                      <div className="absolute left-4 top-4">
                        <span className="rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-black">
                          {film.type}
                        </span>
                      </div>

                      {/* Click indicator */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400">
                          <Play className="ml-1 h-8 w-8 text-black" />
                        </div>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-6">
                      <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-yellow-400">
                        {film.title}
                      </h3>

                      <div className="mb-4 space-y-2">
                        <div className="flex items-center gap-2 text-sm text-slate-400">
                          <Calendar className="h-4 w-4 text-yellow-400" />
                          <span>
                            {film.year} • {film.platform}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-400">
                          <User className="h-4 w-4 text-yellow-400" />
                          <span>Rol: {film.role}</span>
                        </div>
                        {film.director !== '-' && (
                          <div className="flex items-center gap-2 text-sm text-slate-400">
                            <Sparkles className="h-4 w-4 text-yellow-400" />
                            <span>Dir: {film.director}</span>
                          </div>
                        )}
                      </div>

                      <p className="mb-4 text-sm leading-relaxed text-slate-400">
                        {film.description}
                      </p>

                      <span className="text-sm font-semibold text-yellow-400 group-hover:underline">
                        Ver más detalles →
                      </span>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedFilm && selectedFilm.detailedInfo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
            onClick={() => setSelectedFilm(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-black shadow-2xl"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedFilm(null)}
                aria-label="Cerrar detalles de la película"
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 transition-colors hover:bg-white/20"
              >
                <X className="h-5 w-5 text-white" />
              </button>

              {/* Header with poster */}
              <div className="relative h-96 overflow-hidden">
                <Image
                  src={selectedFilm.poster}
                  alt={selectedFilm.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <span className="mb-3 inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-black">
                    {selectedFilm.type}
                  </span>
                  <h3 className="mb-2 text-4xl font-bold text-white">
                    {selectedFilm.title}
                  </h3>
                  <div className="flex items-center gap-4 text-slate-300">
                    <span>{selectedFilm.year}</span>
                    <span>•</span>
                    <span>{selectedFilm.platform}</span>
                    {selectedFilm.director !== '-' && (
                      <>
                        <span>•</span>
                        <span>Dir: {selectedFilm.director}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-8 p-8">
                {/* Character section */}
                <div>
                  <div className="mb-4 flex items-center gap-2">
                    <Heart className="h-5 w-5 text-yellow-400" />
                    <h4 className="text-2xl font-bold text-white">
                      Mi Personaje: {selectedFilm.detailedInfo.characterName}
                    </h4>
                  </div>
                  <p className="leading-relaxed text-slate-300">
                    {selectedFilm.detailedInfo.characterDescription}
                  </p>
                </div>

                {/* Synopsis */}
                <div>
                  <div className="mb-4 flex items-center gap-2">
                    <Film className="h-5 w-5 text-yellow-400" />
                    <h4 className="text-2xl font-bold text-white">Sinopsis</h4>
                  </div>
                  <p className="leading-relaxed text-slate-300">
                    {selectedFilm.detailedInfo.synopsis}
                  </p>
                </div>

                {/* Quote */}
                {selectedFilm.detailedInfo.quote && (
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
                    <Quote className="mb-3 h-6 w-6 text-yellow-400" />
                    <p className="mb-3 text-lg italic leading-relaxed text-slate-300">
                      {selectedFilm.detailedInfo.quote}
                    </p>
                    <p className="font-semibold text-slate-500">— Almagro San Miguel</p>
                  </div>
                )}

                {/* Actions */}
                <div className="flex flex-wrap gap-4">
                  {selectedFilm.detailedInfo.trailerUrl && (
                    <a
                      href={selectedFilm.detailedInfo.trailerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver Tráiler de ${selectedFilm.title} (se abre en nueva ventana)`}
                      className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-6 py-3 font-bold text-black transition-colors hover:bg-yellow-500"
                    >
                      <Play className="h-5 w-5" />
                      Ver Tráiler
                    </a>
                  )}
                  {selectedFilm.detailedInfo.imdbUrl && (
                    <a
                      href={selectedFilm.detailedInfo.imdbUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver ${selectedFilm.title} en IMDb (se abre en nueva ventana)`}
                      className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 font-bold text-white transition-colors hover:bg-white/20"
                    >
                      <Star className="h-5 w-5" />
                      Ver en IMDb
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
