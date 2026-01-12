// Cinema.tsx actualizado - primeras líneas con SectionHeader  
'use client'

import { motion } from 'framer-motion'
import { Film, Calendar, Award, Play } from 'lucide-react'
import Image from 'next/image'
import { useState, useRef } from 'react'
import { useInView } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'

// ... resto del contenido de Cinema se mantiene igual ...