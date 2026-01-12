import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import LatestProject from '@/components/sections/LatestProject'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ui/ScrollToTop'
import { 
  SectionSkeleton, 
  ShowreelSkeleton, 
  TestimonialsSkeleton, 
  ContactSkeleton,
  GallerySkeleton,
  TimelineSkeleton
} from '@/components/ui/Skeleton'

// Lazy load heavy sections with optimized loading states
const Series = dynamic(() => import('@/components/sections/Series'), {
  ssr: false,
})

const Cinema = dynamic(() => import('@/components/sections/Cinema'), {
  ssr: false,
})

const Theater = dynamic(() => import('@/components/sections/Theater'), {
  ssr: false,
})

const Skills = dynamic(() => import('@/components/sections/Skills'), {
  ssr: false,
})

const Headshots = dynamic(() => import('@/components/sections/Headshots'), {
  ssr: false,
})

const Timeline = dynamic(() => import('@/components/sections/Timeline'), {
  ssr: false,
})

const Milestones = dynamic(() => import('@/components/sections/Milestones'), {
  ssr: false,
})

const Awards = dynamic(() => import('@/components/sections/Awards'), {
  ssr: false,
})

const Calendar = dynamic(() => import('@/components/sections/Calendar'), {
  ssr: false,
})

const Gallery = dynamic(() => import('@/components/sections/Gallery'), {
  ssr: false,
})

const Showreel = dynamic(() => import('@/components/sections/Showreel'), {
  ssr: false,
})

const Testimonials = dynamic(() => import('@/components/sections/Testimonials'), {
  ssr: false,
})

const Press = dynamic(() => import('@/components/sections/Press'), {
  ssr: false,
})

const Blog = dynamic(() => import('@/components/sections/Blog'), {
  ssr: false,
})

const PressKit = dynamic(() => import('@/components/sections/PressKit'), {
  ssr: false,
})

const Contact = dynamic(() => import('@/components/sections/Contact'), {
  ssr: false,
})

export default function Home() {
  return (
    <main className="relative bg-black">
      {/* Critical above-the-fold content - loaded immediately */}
      <Navbar />
      <Hero />
      
      {/* Latest Project - Immediately after hero to showcase current work */}
      <LatestProject />
      
      {/* Core sections - Optimized for casting directors */}
      <About />
      <Skills />
      
      {/* Filmography sections - reorganized order with Suspense */}
      {/* 1. Series de Televisión */}
      <Suspense fallback={<SectionSkeleton />}>
        <Series />
      </Suspense>
      
      {/* 2. Cine & Cortometrajes */}
      <Suspense fallback={<SectionSkeleton />}>
        <Cinema />
      </Suspense>
      
      {/* 3. Teatro Profesional */}
      <Suspense fallback={<SectionSkeleton />}>
        <Theater />
      </Suspense>
      
      {/* Career sections */}
      <Suspense fallback={<TimelineSkeleton />}>
        <Timeline />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Milestones />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Awards />
      </Suspense>
      
      {/* Events & Schedule */}
      <Suspense fallback={<SectionSkeleton />}>
        <Calendar />
      </Suspense>
      
      {/* Media sections - Professional photos first */}
      <Suspense fallback={<GallerySkeleton />}>
        <Headshots />
      </Suspense>
      <Suspense fallback={<GallerySkeleton />}>
        <Gallery />
      </Suspense>
      
      {/* Media & Declarations - Integrated section */}
      <Suspense fallback={<ShowreelSkeleton />}>
        <Showreel />
      </Suspense>
      <Suspense fallback={<TestimonialsSkeleton />}>
        <Testimonials />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <Press />
      </Suspense>
      
      {/* Blog - Noticias y actualizaciones */}
      <Suspense fallback={<SectionSkeleton />}>
        <Blog />
      </Suspense>
      
      {/* Professional sections */}
      <Suspense fallback={<SectionSkeleton />}>
        <PressKit />
      </Suspense>
      <Suspense fallback={<ContactSkeleton />}>
        <Contact />
      </Suspense>
      
      {/* Footer */}
      <Footer />
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </main>
  )
}