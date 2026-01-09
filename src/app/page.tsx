import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Stats from '@/components/sections/Stats'
import SkillsVisual from '@/components/sections/SkillsVisual'
import Portfolio from '@/components/sections/Portfolio'
import Gallery from '@/components/sections/Gallery'
import Timeline from '@/components/sections/Timeline'
import Awards from '@/components/sections/Awards'
import Showreel from '@/components/sections/Showreel'
import Press from '@/components/sections/Press'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <SkillsVisual />
      <Portfolio />
      <Gallery />
      <Timeline />
      <Awards />
      <Showreel />
      <Press />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
