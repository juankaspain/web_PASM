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

export default function ClientPage() {
  return (
    <main id="main-content" className="relative bg-black">
      {/* Critical above-the-fold content - loaded immediately */}
      <Navbar />
      <Hero />

      {/* Latest Project - Immediately after hero to showcase current work */}
      <div className="content-auto">
        <Suspense fallback={<SectionSkeleton />}>
          <LatestProject />
        </Suspense>
      </div>

      {/* Core sections - Optimized for casting directors */}
      <div className="content-auto">
        <Suspense fallback={<SectionSkeleton />}>
          <About />
        </Suspense>
      </div>
      <div className="content-auto">
        <Suspense fallback={<SectionSkeleton />}>
          <Skills />
        </Suspense>
      </div>

      {/* Filmography sections */}
      <div className="content-auto">
        <Suspense fallback={<SectionSkeleton />}>
          <Series />
        </Suspense>
      </div>
      <div className="content-auto">
        <Suspense fallback={<SectionSkeleton />}>
          <Cinema />
        </Suspense>
      </div>
      <div className="content-auto">
        <Suspense fallback={<SectionSkeleton />}>
          <Theater />
        </Suspense>
      </div>

      {/* Career sections */}
      <div className="content-auto">
        <Suspense fallback={<TimelineSkeleton />}>
          <Timeline />
        </Suspense>
      </div>
      <div className="content-auto">
        <Suspense fallback={<SectionSkeleton />}>
          <Milestones />
        </Suspense>
      </div>
      <div className="content-auto">
        <Suspense fallback={<SectionSkeleton />}>
          <Awards />
        </Suspense>
      </div>

      {/* Events & Schedule */}
      <div className="content-auto">
        <Suspense fallback={<SectionSkeleton />}>
          <Calendar />
        </Suspense>
      </div>

      {/* Media sections */}
      <div className="content-auto">
        <Suspense fallback={<GallerySkeleton />}>
          <Headshots />
        </Suspense>
      </div>
      <div className="content-auto">
        <Suspense fallback={<GallerySkeleton />}>
          <Gallery />
        </Suspense>
      </div>

      {/* Media & Declarations */}
      <div className="content-auto">
        <Suspense fallback={<ShowreelSkeleton />}>
          <Showreel />
        </Suspense>
      </div>
      <div className="content-auto">
        <Suspense fallback={<TestimonialsSkeleton />}>
          <Testimonials />
        </Suspense>
      </div>
      <div className="content-auto">
        <Suspense fallback={<SectionSkeleton />}>
          <Press />
        </Suspense>
      </div>

      {/* Blog */}
      <div className="content-auto">
        <Suspense fallback={<SectionSkeleton />}>
          <Blog />
        </Suspense>
      </div>

      {/* Professional sections */}
      <div className="content-auto">
        <Suspense fallback={<SectionSkeleton />}>
          <PressKit />
        </Suspense>
      </div>
      <div className="content-auto">
        <Suspense fallback={<ContactSkeleton />}>
          <Contact />
        </Suspense>
      </div>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </main>
  )
}
