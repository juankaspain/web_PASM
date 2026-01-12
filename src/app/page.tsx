import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import LatestProject from '@/components/sections/LatestProject'
import SkillsGraph from '@/components/sections/SkillsGraph'
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
  loading: () => <SectionSkeleton />,
})

const Cinema = dynamic(() => import('@/components/sections/Cinema'), {
  loading: () => <SectionSkeleton />,
})

const Theater = dynamic(() => import('@/components/sections/Theater'), {
  loading: () => <SectionSkeleton />,
})

const Skills = dynamic(() => import('@/components/sections/Skills'), {
  loading: () => <SectionSkeleton />,
})

const Headshots = dynamic(() => import('@/components/sections/Headshots'), {
  loading: () => <GallerySkeleton />,
})

const Timeline = dynamic(() => import('@/components/sections/Timeline'), {
  loading: () => <TimelineSkeleton />,
})

const Milestones = dynamic(() => import('@/components/sections/Milestones'), {
  loading: () => <SectionSkeleton />,
})

const Awards = dynamic(() => import('@/components/sections/Awards'), {
  loading: () => <SectionSkeleton />,
})

const Calendar = dynamic(() => import('@/components/sections/Calendar'), {
  loading: () => <SectionSkeleton />,
})

const Gallery = dynamic(() => import('@/components/sections/Gallery'), {
  loading: () => <GallerySkeleton />,
})

const Showreel = dynamic(() => import('@/components/sections/Showreel'), {
  loading: () => <ShowreelSkeleton />,
})

const Testimonials = dynamic(() => import('@/components/sections/Testimonials'), {
  loading: () => <TestimonialsSkeleton />,
})

const Press = dynamic(() => import('@/components/sections/Press'), {
  loading: () => <SectionSkeleton />,
})

const PressKit = dynamic(() => import('@/components/sections/PressKit'), {
  loading: () => <SectionSkeleton />,
})

const Contact = dynamic(() => import('@/components/sections/Contact'), {
  loading: () => <ContactSkeleton />,
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
      <SkillsGraph />
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