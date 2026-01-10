import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Stats from '@/components/sections/Stats'
import SkillsGraph from '@/components/sections/SkillsGraph'
import Footer from '@/components/Footer'

// Lazy load heavy sections to improve initial page load
const Portfolio = dynamic(() => import('@/components/sections/Portfolio'), {
  loading: () => (
    <div className="flex items-center justify-center h-96 bg-gray-50">
      <div className="animate-pulse text-gray-400">Cargando portfolio...</div>
    </div>
  ),
})

const Timeline = dynamic(() => import('@/components/sections/Timeline'), {
  loading: () => (
    <div className="flex items-center justify-center h-96 bg-white">
      <div className="animate-pulse text-gray-400">Cargando timeline...</div>
    </div>
  ),
})

const Awards = dynamic(() => import('@/components/sections/Awards'))

const Gallery = dynamic(() => import('@/components/sections/Gallery'), {
  loading: () => (
    <div className="flex items-center justify-center h-96 bg-gray-50">
      <div className="animate-pulse text-gray-400">Cargando galería...</div>
    </div>
  ),
})

const Collaborators = dynamic(() => import('@/components/sections/Collaborators'))

const Showreel = dynamic(() => import('@/components/sections/Showreel'), {
  loading: () => (
    <div className="flex items-center justify-center h-96 bg-white">
      <div className="animate-pulse text-gray-400">Cargando showreel...</div>
    </div>
  ),
})

const News = dynamic(() => import('@/components/sections/News'))

const Events = dynamic(() => import('@/components/sections/Events'))

const Press = dynamic(() => import('@/components/sections/Press'), {
  loading: () => (
    <div className="flex items-center justify-center h-96 bg-gray-50">
      <div className="animate-pulse text-gray-400">Cargando prensa...</div>
    </div>
  ),
})

const Testimonials = dynamic(() => import('@/components/sections/Testimonials'))

const FAQ = dynamic(() => import('@/components/sections/FAQ'))

const PressKit = dynamic(() => import('@/components/sections/PressKit'))

const Contact = dynamic(() => import('@/components/sections/Contact'))

export default function Home() {
  return (
    <main className="relative">
      {/* Critical above-the-fold content - loaded immediately */}
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <SkillsGraph />
      
      {/* Heavy sections - lazy loaded for better performance */}
      <Portfolio />
      <Timeline />
      <Awards />
      <Gallery />
      <Collaborators />
      <Showreel />
      <News />
      <Events />
      <Press />
      <Testimonials />
      <FAQ />
      <PressKit />
      <Contact />
      
      {/* Footer always loads */}
      <Footer />
    </main>
  )
}
