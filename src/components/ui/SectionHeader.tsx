'use client'

import { motion } from 'framer-motion'
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
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
        >
          <badge.icon className="w-4 h-4 text-yellow-400" strokeWidth={2} />
          <span className="text-sm font-medium text-slate-300 tracking-wide">{badge.text}</span>
        </motion.div>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl lg:text-5xl font-bold mb-6 text-white"
      >
        {title}
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-20 h-0.5 bg-yellow-400 mx-auto mb-6"
      />
      
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg text-slate-400 max-w-4xl mx-auto leading-relaxed px-4"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}