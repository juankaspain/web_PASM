import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Portfolio from '@/components/sections/Portfolio'
import Showreel from '@/components/sections/Showreel'
import Press from '@/components/sections/Press'
import Contact from '@/components/sections/Contact'
import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative">
        <Hero />
        <About />
        <Portfolio />
        <Showreel />
        <Press />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
