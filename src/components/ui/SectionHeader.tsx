'use client'

import { LucideIcon } from 'lucide-react'

interface SectionHeaderProps {
  badge?: {
    icon: LucideIcon
    text: string
  }
  title: string
  subtitle?: string
  isInView?: boolean
}

export default function SectionHeader({ badge, title, subtitle, isInView = true }: SectionHeaderProps) {
  return (
    <div className="text-center mb-20">
      {badge && (
        <div
          className={`inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-500 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2.5'
          }`}
        >
          <badge.icon className="w-4 h-4 text-yellow-400" strokeWidth={2} />
          <span className="text-sm font-medium text-slate-300 tracking-wide">{badge.text}</span>
        </div>
      )}

      <h2
        className={`text-4xl lg:text-5xl font-bold mb-6 text-white transition-all duration-500 delay-100 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2.5'
        }`}
      >
        {title}
      </h2>

      <div
        className={`w-20 h-0.5 bg-yellow-400 mx-auto mb-6 transition-all duration-700 delay-200 origin-center ${
          isInView ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
        }`}
      />

      {subtitle && (
        <p
          className={`text-lg text-slate-400 max-w-4xl mx-auto leading-relaxed px-4 transition-opacity duration-500 delay-300 ${
            isInView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
