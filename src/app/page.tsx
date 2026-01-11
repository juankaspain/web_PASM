import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import LatestProject from '@/components/sections/LatestProject'
import SkillsGraph from '@/components/sections/SkillsGraph'
import Footer from '@/components/Footer'

// Lazy load heavy sections to improve initial page load
const Portfolio = dynamic(() => import('@/components/sections/Portfolio'), {
  loading: () => (
    <div className="flex items-center justify-center h-96 bg-black">
      <div className="animate-pulse text-gray-400">Cargando portfolio...</div>
    </div>
  ),
})

const Cinema = dynamic(() => import('@/components/sections/Cinema'))
const Theater = dynamic(() => import('@/components/sections/Theater'))
const Skills = dynamic(() => import('@/components/sections/Skills'))
const Headshots = dynamic(() => import('@/components/sections/Headshots'))

const Timeline = dynamic(() => import('@/components/sections/Timeline'), {
  loading: () => (
    <div className="flex items-center justify-center h-96 bg-black">
      <div className="animate-pulse text-gray-400">Cargando timeline...</div>
    </div>
  ),
})

const Milestones = dynamic(() => import('@/components/sections/Milestones'))
const Awards = dynamic(() => import('@/components/sections/Awards'))
const Calendar = dynamic(() => import('@/components/sections/Calendar'))
const Gallery = dynamic(() => import('@/components/sections/Gallery'))
const Showreel = dynamic(() => import('@/components/sections/Showreel'))
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'))
const Press = dynamic(() => import('@/components/sections/Press'))
const PressKit = dynamic(() => import('@/components/sections/PressKit'))
const Contact = dynamic(() => import('@/components/sections/Contact'))

export default function Home() {
  return (
    <main className="relative bg-black">
      {/* Critical above-the-fold content - loaded immediately */}
      <Navbar />
      <Hero />
      
      {/* Core sections - Optimized for casting directors */}
      <About />
      <Skills />
      <LatestProject />
      
      {/* Filmography sections - reorganized order */}
      {/* 1. Series de Televisión */}
      <Portfolio />
      
      {/* 2. Cine & Cortometrajes */}
      <Cinema />
      
      {/* 3. Teatro Profesional */}
      <Theater />
      
      {/* Career sections */}
      <SkillsGraph />
      <Timeline />
      <Milestones />
      <Awards />
      
      {/* Events & Schedule */}
      <Calendar />
      
      {/* Media sections - Professional photos first */}
      <Headshots />
      <Gallery />
      
      {/* Media & Declarations - Integrated section */}
      <Showreel />
      <Testimonials />
      
      <Press />
      
      {/* Professional sections */}
      <PressKit />
      <Contact />
      
      {/* Footer */}
      <Footer />
    </main>
  )
}
