'use client'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ui/ScrollToTop'
import {
  SectionSkeleton,
  ShowreelSkeleton,
  TestimonialsSkeleton,
  ContactSkeleton,
  GallerySkeleton,
  TimelineSkeleton,
} from '@/components/ui/Skeleton'

// Lazy load below-fold sections — ssr:false keeps them out of the initial server bundle
const LatestProject = dynamic(() => import('@/components/sections/LatestProject'), {
  ssr: false,
})
const About = dynamic(() => import('@/components/sections/About'), { ssr: false })
const Series = dynamic(() => import('@/components/sections/Series'), { ssr: false })
const Cinema = dynamic(() => import('@/components/sections/Cinema'), { ssr: false })
const Theater = dynamic(() => import('@/components/sections/Theater'), { ssr: false })
const Skills = dynamic(() => import('@/components/sections/Skills'), { ssr: false })
const Headshots = dynamic(() => import('@/components/sections/Headshots'), { ssr: false })
const Timeline = dynamic(() => import('@/components/sections/Timeline'), { ssr: false })
const Milestones = dynamic(() => import('@/components/sections/Milestones'), {
  ssr: false,
})
const Awards = dynamic(() => import('@/components/sections/Awards'), { ssr: false })
const Calendar = dynamic(() => import('@/components/sections/Calendar'), { ssr: false })
const Gallery = dynamic(() => import('@/components/sections/Gallery'), { ssr: false })
const Showreel = dynamic(() => import('@/components/sections/Showreel'), { ssr: false })
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'), {
  ssr: false,
})
const Press = dynamic(() => import('@/components/sections/Press'), { ssr: false })
const Blog = dynamic(() => import('@/components/sections/Blog'), { ssr: false })
const PressKit = dynamic(() => import('@/components/sections/PressKit'), { ssr: false })
const Contact = dynamic(() => import('@/components/sections/Contact'), { ssr: false })

/** Wrapper that reserves vertical space for lazy-loaded sections to prevent CLS */
function LazySection({
  children,
  fallback,
  minHeight = 'min-h-[400px]',
}: {
  children: React.ReactNode
  fallback: React.ReactNode
  minHeight?: string
}) {
  return (
    <div className={`content-auto ${minHeight}`}>
      <Suspense fallback={<div className={minHeight}>{fallback}</div>}>
        {children}
      </Suspense>
    </div>
  )
}

export default function ClientPage() {
  return (
    <main id="main-content" className="relative bg-black">
      {/* Critical above-the-fold content - loaded immediately */}
      <Navbar />
      <Hero />

      {/* Latest Project - Immediately after hero to showcase current work */}
      <LazySection fallback={<SectionSkeleton />}>
        <LatestProject />
      </LazySection>

      {/* Core sections - Optimized for casting directors */}
      <LazySection fallback={<SectionSkeleton />}>
        <About />
      </LazySection>
      <LazySection fallback={<SectionSkeleton />}>
        <Skills />
      </LazySection>

      {/* Filmography sections */}
      <LazySection fallback={<SectionSkeleton />}>
        <Series />
      </LazySection>
      <LazySection fallback={<SectionSkeleton />}>
        <Cinema />
      </LazySection>
      <LazySection fallback={<SectionSkeleton />}>
        <Theater />
      </LazySection>

      {/* Career sections */}
      <LazySection fallback={<TimelineSkeleton />}>
        <Timeline />
      </LazySection>
      <LazySection fallback={<SectionSkeleton />}>
        <Milestones />
      </LazySection>
      <LazySection fallback={<SectionSkeleton />}>
        <Awards />
      </LazySection>

      {/* Events & Schedule */}
      <LazySection fallback={<SectionSkeleton />}>
        <Calendar />
      </LazySection>

      {/* Media sections */}
      <LazySection fallback={<GallerySkeleton />} minHeight="min-h-[500px]">
        <Headshots />
      </LazySection>
      <LazySection fallback={<GallerySkeleton />} minHeight="min-h-[500px]">
        <Gallery />
      </LazySection>

      {/* Media & Declarations */}
      <LazySection fallback={<ShowreelSkeleton />} minHeight="min-h-[500px]">
        <Showreel />
      </LazySection>
      <LazySection fallback={<TestimonialsSkeleton />}>
        <Testimonials />
      </LazySection>
      <LazySection fallback={<SectionSkeleton />}>
        <Press />
      </LazySection>

      {/* Blog */}
      <LazySection fallback={<SectionSkeleton />}>
        <Blog />
      </LazySection>

      {/* Professional sections */}
      <LazySection fallback={<SectionSkeleton />}>
        <PressKit />
      </LazySection>
      <LazySection fallback={<ContactSkeleton />}>
        <Contact />
      </LazySection>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </main>
  )
}
