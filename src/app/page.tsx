import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import LatestProject from '@/components/sections/LatestProject'
import Stats from '@/components/sections/Stats'
import Theater from '@/components/sections/Theater'
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

const Timeline = dynamic(() => import('@/components/sections/Timeline'), {
  loading: () => (
    <div className="flex items-center justify-center h-96 bg-black">
      <div className="animate-pulse text-gray-400">Cargando timeline...</div>
    </div>
  ),
})

const Milestones = dynamic(() => import('@/components/sections/Milestones'))
const Awards = dynamic(() => import('@/components/sections/Awards'))
const Gallery = dynamic(() => import('@/components/sections/Gallery'))
const Showreel = dynamic(() => import('@/components/sections/Showreel'))
const PressKit = dynamic(() => import('@/components/sections/PressKit'))
const Contact = dynamic(() => import('@/components/sections/Contact'))

export default function Home() {
  return (
    <main className="relative bg-black">
      {/* Critical above-the-fold content - loaded immediately */}
      <Navbar />
      <Hero />
      
      {/* Core sections */}
      <About />
      <LatestProject />
      <Stats />
      
      {/* Portfolio sections */}
      <Portfolio />
      <Theater />
      <SkillsGraph />
      <Timeline />
      <Milestones />
      <Awards />
      
      {/* Media sections */}
      <Gallery />
      <Showreel />
      
      {/* Professional sections */}
      <PressKit />
      <Contact />
      
      {/* Footer */}
      <Footer />
    </main>
  )
}
