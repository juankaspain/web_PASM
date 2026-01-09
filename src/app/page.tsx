import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Stats from '@/components/sections/Stats'
import SkillsGraph from '@/components/sections/SkillsGraph'
import Portfolio from '@/components/sections/Portfolio'
import Timeline from '@/components/sections/Timeline'
import Awards from '@/components/sections/Awards'
import Gallery from '@/components/sections/Gallery'
import Collaborators from '@/components/sections/Collaborators'
import Showreel from '@/components/sections/Showreel'
import News from '@/components/sections/News'
import Events from '@/components/sections/Events'
import Press from '@/components/sections/Press'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import PressKit from '@/components/sections/PressKit'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <SkillsGraph />
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
      <Footer />
    </main>
  )
}
