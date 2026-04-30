'use client'

import { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import LatestProject from '@/components/sections/LatestProject'
import About from '@/components/sections/About'
import Series from '@/components/sections/Series'
import Cinema from '@/components/sections/Cinema'
import Theater from '@/components/sections/Theater'
import Skills from '@/components/sections/Skills'
import Headshots from '@/components/sections/Headshots'
import Timeline from '@/components/sections/Timeline'
import Milestones from '@/components/sections/Milestones'
import Awards from '@/components/sections/Awards'
import Calendar from '@/components/sections/Calendar'
import Gallery from '@/components/sections/Gallery'
import Showreel from '@/components/sections/Showreel'
import Testimonials from '@/components/sections/Testimonials'
import Press from '@/components/sections/Press'
import Blog from '@/components/sections/Blog'
import PressKit from '@/components/sections/PressKit'
import Contact from '@/components/sections/Contact'
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

// Keep home sections in the main route bundle to avoid fragile post-deploy chunk loads.
/** Wrapper that reserves vertical space for below-fold sections to prevent CLS */
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
