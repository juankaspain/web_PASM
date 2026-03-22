'use client'

import { useInView } from '@/hooks/useInView'
import {
  GraduationCap,
  Award,
  Languages,
  Music,
  Swords,
  Star,
  FileText,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react'

const training = [
  {
    title: 'Compañía Nacional de Teatro Clásico',
    organization: 'CNTC - Ministerio de Cultura',
    period: '2015-2017',
    director: 'Dir: Helena Pimenta',
    description:
      'Formación de élite en verso clásico español, comedia del Siglo de Oro y técnicas de interpretación profesional. Dos años intensivos en la compañía nacional.',
    featured: true,
    url: 'https://teatroclasico.inaem.gob.es/',
  },
  {
    title: 'Escuela Superior de Arte Dramático',
    organization: 'ESAD Sevilla',
    period: '2008-2012',
    director: 'Titulación Oficial Universitaria',
    description:
      'Formación completa en interpretación teatral, cine y televisión. Especialización en texto clásico y contemporáneo.',
    featured: true,
    url: 'https://www.esadsevilla.org',
  },
  {
    title: 'Work In Progress',
    organization: 'Escuela de Actuación Madrid',
    period: '2013-2015',
    director: 'Dir: Darío Facal',
    description:
      'Perfeccionamiento en técnicas de cámara, casting y preparación de personajes para cine y televisión.',
    featured: false,
    url: 'https://estudio-workinprogress.com/',
  },
  {
    title: 'Especialización en Dobles de Acción',
    organization: 'NO-IDENTITY',
    period: '2012-2013',
    director: 'Formación en Especialistas de Acción',
    description:
      'Formación en lucha escénica, control de nervios, coordinación de escenas de acción y trabajo de riesgo controlado.',
    featured: false,
    url: 'https://www.noidentity.es/',
  },
]

const skills = [
  {
    category: 'Combate & Acción',
    icon: Swords,
    color: 'yellow',
    items: [
      { name: 'Esgrima Teatral', level: 'Avanzado', icon: '⚔️' },
      { name: 'Lucha Escénica', level: 'Avanzado' },
      { name: 'Equitación', level: 'Avanzado' },
      { name: 'Especialista Cine', level: 'Competente' },
      { name: 'Acrobacias', level: 'Competente' },
    ],
  },
  {
    category: 'Música & Canto',
    icon: Music,
    color: 'yellow',
    items: [
      { name: 'Violonchelo', level: 'Avanzado', icon: '🎻' },
      { name: 'Viola', level: 'Avanzado' },
      { name: 'Canto Lírico', level: 'Avanzado' },
      { name: 'Teatro Musical', level: 'Avanzado', icon: '🎭' },
    ],
  },
  {
    category: 'Idiomas & Dialectos',
    icon: Languages,
    color: 'yellow',
    items: [
      { name: 'Español Nativo', level: 'Experto', icon: '🌟' },
      { name: 'Andaluz', level: 'Experto' },
      { name: 'Inglés', level: 'Avanzado' },
      { name: 'Verso Clásico', level: 'Experto', icon: '🌟' },
      { name: 'Francés', level: 'Competente' },
    ],
  },
  {
    category: 'Movimiento & Danza',
    icon: Star,
    color: 'yellow',
    items: [
      { name: 'Danza Contemporánea', level: 'Avanzado' },
      { name: 'Flamenco', level: 'Avanzado' },
      { name: 'Mimo & Pantomima', level: 'Avanzado' },
      { name: 'Expresión Corporal', level: 'Avanzado' },
    ],
  },
  {
    category: 'Técnicas Actorales',
    icon: CheckCircle2,
    color: 'yellow',
    items: [
      { name: 'Teatro Clásico', level: 'Experto', icon: '🌟' },
      { name: 'Televisión', level: 'Experto', icon: '🌟' },
      { name: 'Cine', level: 'Avanzado' },
      { name: 'Improvisación', level: 'Avanzado' },
    ],
  },
  {
    category: 'Especialidades',
    icon: Star,
    color: 'yellow',
    items: [
      { name: 'Teatro de Calle', level: 'Experto', icon: '🌟' },
      { name: 'Títeres', level: 'Avanzado' },
      { name: 'Cine', level: 'Avanzado' },
      { name: 'Clown', level: 'Competente' },
      { name: 'Caída Libre', level: 'Competente' },
    ],
  },
]

const getLevelColor = (level: string) => {
  switch (level) {
    case 'Nativo':
    case 'Experto':
      return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30'
    case 'Avanzado':
      return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30'
    case 'Competente':
      return 'text-slate-400 bg-slate-400/10 border-slate-400/30'
    case 'Intermedio':
      return 'text-slate-400 bg-slate-400/10 border-slate-400/30'
    default:
      return 'text-slate-300 bg-slate-300/10 border-slate-300/30'
  }
}

export default function Skills() {
  const { ref, isInView } = useInView({ once: true, margin: '-80px' })

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-gradient-to-b from-black via-slate-950 to-slate-900 py-32"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[600px] w-[600px] rounded-full bg-blue-500/5 blur-[120px]" />
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
          {/* PRIMERO: Training Section */}
          <div className="mb-32">
            <div
              className={`mb-12 text-center transition-all delay-100 duration-[500ms] ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-2.5 opacity-0'}`}
            >
              <h3 className="mb-4 text-4xl font-bold text-white lg:text-5xl">
                Formación Profesional
              </h3>
              <p className="text-lg text-slate-400">
                Instituciones de prestigio donde he desarrollado mi carrera
              </p>
            </div>

            <div className="mx-auto max-w-5xl space-y-6">
              {training.map((course, index) => (
                <a
                  key={course.title}
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${course.title} - ${course.organization} (se abre en nueva ventana)`}
                  className={`group block cursor-pointer hover-right transition-all duration-[600ms] ${isInView ? 'translate-x-0 opacity-100' : '-translate-x-5 opacity-0'}`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div
                    className={`relative rounded-2xl border p-6 backdrop-blur-sm transition-all hover:border-white/20 lg:p-8 ${
                      course.featured
                        ? 'border-yellow-500/30 bg-gradient-to-br from-yellow-900/10 to-orange-900/5 hover:border-yellow-400/50 hover:bg-yellow-900/15'
                        : 'border-white/10 bg-white/[0.02] hover:border-yellow-400/30 hover:bg-white/[0.04]'
                    }`}
                  >
                    <div className="flex flex-col items-start gap-6 lg:flex-row">
                      <div className="flex-shrink-0">
                        <div
                          className={`flex h-14 w-14 items-center justify-center rounded-xl ${
                            course.featured
                              ? 'border border-yellow-400/30 bg-yellow-400/20'
                              : 'border border-white/10 bg-white/5'
                          }`}
                        >
                          <GraduationCap
                            className={`h-7 w-7 ${course.featured ? 'text-yellow-400' : 'text-slate-400'}`}
                          />
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="mb-3 flex flex-wrap items-center gap-3">
                          <h4 className="text-xl font-bold text-white transition-colors group-hover:text-yellow-400 lg:text-2xl">
                            {course.title}
                          </h4>
                          {course.featured && (
                            <span className="rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-black">
                              DESTACADO
                            </span>
                          )}
                        </div>
                        <p className="mb-2 text-base text-slate-300">
                          {course.organization}
                        </p>
                        <p className="mb-3 leading-relaxed text-slate-400">
                          {course.description}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                          <span className="flex items-center gap-1">
                            <Award className="h-4 w-4" />
                            {course.period}
                          </span>
                          <span>•</span>
                          <span>{course.director}</span>
                        </div>
                      </div>

                      <div className="flex-shrink-0">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-400/10 transition-all group-hover:bg-yellow-400/20">
                          <ExternalLink className="h-5 w-5 text-yellow-400 transition-all group-hover:rotate-12 group-hover:scale-110" />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* SEGUNDO: Skills Grid */}
          <div>
            <div
              className={`mb-12 text-center transition-all delay-[600ms] duration-[500ms] ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-2.5 opacity-0'}`}
            >
              <h3 className="mb-4 text-4xl font-bold text-white lg:text-5xl">
                Habilidades Artísticas
              </h3>
              <p className="mx-auto max-w-5xl text-base text-slate-400 lg:text-lg">
                Más de 13 años de formación y práctica profesional en las principales
                escuelas y compañías de España
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {skills.map((skillCategory, categoryIndex) => (
                <div
                  key={categoryIndex}
                  className={`group relative hover-lift transition-all duration-[600ms] ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                  style={{ transitionDelay: `${700 + categoryIndex * 100}ms` }}
                >
                  <div className="absolute -inset-[1px] rounded-2xl bg-yellow-400/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all hover:border-yellow-400/30 hover:bg-white/[0.04]">
                    <div className="mb-6 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                        <skillCategory.icon className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-white">
                        {skillCategory.category}
                      </h4>
                    </div>

                    <div className="space-y-3">
                      {skillCategory.items.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="flex items-center justify-between gap-3"
                        >
                          <span className="flex items-center gap-2 text-sm text-slate-300">
                            {skill.icon && <span>{skill.icon}</span>}
                            {skill.name}
                          </span>
                          <span
                            className={`rounded-full border px-2.5 py-1 text-xs font-bold ${getLevelColor(skill.level)}`}
                          >
                            {skill.level}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Note for Casting */}
          <div
            className={`mx-auto mt-16 max-w-4xl transition-all delay-[1300ms] duration-[600ms] ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
          >
            <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center backdrop-blur-sm">
              <FileText className="mx-auto mb-4 h-8 w-8 text-yellow-400" />
              <p className="leading-relaxed text-slate-300">
                Estas habilidades están respaldadas por más de{' '}
                <span className="font-bold text-white">
                  13 años de experiencia profesional
                </span>{' '}
                en teatro, cine y televisión. Disponible para proyectos que requieran
                formación adicional o especialización específica.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
