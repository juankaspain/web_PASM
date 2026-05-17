'use client'

import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ui/ScrollToTop'
import { useOneShotInView } from '@/hooks/useOneShotInView'
import {
  SectionSkeleton,
  ShowreelSkeleton,
  TestimonialsSkeleton,
  ContactSkeleton,
  GallerySkeleton,
  TimelineSkeleton,
} from '@/components/ui/Skeleton'

const LatestProject = dynamic(() => import('@/components/sections/LatestProject'), {
  loading: () => <SectionSkeleton />,
  ssr: false,
})
const About = dynamic(() => import('@/components/sections/About'), {
  loading: () => <SectionSkeleton />,
  ssr: false,
})
const Skills = dynamic(() => import('@/components/sections/Skills'), {
  loading: () => <SectionSkeleton />,
  ssr: false,
})
const Series = dynamic(() => import('@/components/sections/Series'), {
  loading: () => <SectionSkeleton />,
  ssr: false,
})
const Cinema = dynamic(() => import('@/components/sections/Cinema'), {
  loading: () => <SectionSkeleton />,
  ssr: false,
})
const Theater = dynamic(() => import('@/components/sections/Theater'), {
  loading: () => <SectionSkeleton />,
  ssr: false,
})
const Timeline = dynamic(() => import('@/components/sections/Timeline'), {
  loading: () => <TimelineSkeleton />,
  ssr: false,
})
const Milestones = dynamic(() => import('@/components/sections/Milestones'), {
  loading: () => <SectionSkeleton />,
  ssr: false,
})
const Awards = dynamic(() => import('@/components/sections/Awards'), {
  loading: () => <SectionSkeleton />,
  ssr: false,
})
const Calendar = dynamic(() => import('@/components/sections/Calendar'), {
  loading: () => <SectionSkeleton />,
  ssr: false,
})
const Headshots = dynamic(() => import('@/components/sections/Headshots'), {
  loading: () => <GallerySkeleton />,
  ssr: false,
})
const Gallery = dynamic(() => import('@/components/sections/Gallery'), {
  loading: () => <GallerySkeleton />,
  ssr: false,
})
const Showreel = dynamic(() => import('@/components/sections/Showreel'), {
  loading: () => <ShowreelSkeleton />,
  ssr: false,
})
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'), {
  loading: () => <TestimonialsSkeleton />,
  ssr: false,
})
const Press = dynamic(() => import('@/components/sections/Press'), {
  loading: () => <SectionSkeleton />,
  ssr: false,
})
const Blog = dynamic(() => import('@/components/sections/Blog'), {
  loading: () => <SectionSkeleton />,
  ssr: false,
})
const PressKit = dynamic(() => import('@/components/sections/PressKit'), {
  loading: () => <SectionSkeleton />,
  ssr: false,
})
const Contact = dynamic(() => import('@/components/sections/Contact'), {
  loading: () => <ContactSkeleton />,
  ssr: false,
})

function DeferredSection({
  Component,
  fallback,
  minHeight = 'min-h-[400px]',
}: {
  Component: React.ComponentType
  fallback: React.ReactNode
  minHeight?: string
}) {
  const [ref, isInView] = useOneShotInView({
    rootMargin: '150px 0px',
    threshold: 0,
  })

  return (
    <div ref={ref} data-testid="lazy-section" className={`content-auto ${minHeight}`}>
      {isInView ? <Component /> : fallback}
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
      <DeferredSection Component={LatestProject} fallback={<SectionSkeleton />} />

      {/* Core sections - Optimized for casting directors */}
      <DeferredSection Component={About} fallback={<SectionSkeleton />} />
      <DeferredSection Component={Skills} fallback={<SectionSkeleton />} />

      {/* Filmography sections */}
      <DeferredSection Component={Series} fallback={<SectionSkeleton />} />
      <DeferredSection Component={Cinema} fallback={<SectionSkeleton />} />
      <DeferredSection Component={Theater} fallback={<SectionSkeleton />} />

      {/* Career sections */}
      <DeferredSection Component={Timeline} fallback={<TimelineSkeleton />} />
      <DeferredSection Component={Milestones} fallback={<SectionSkeleton />} />
      <DeferredSection Component={Awards} fallback={<SectionSkeleton />} />

      {/* Events & Schedule */}
      <DeferredSection Component={Calendar} fallback={<SectionSkeleton />} />

      {/* Media sections */}
      <DeferredSection
        Component={Headshots}
        fallback={<GallerySkeleton />}
        minHeight="min-h-[500px]"
      />
      <DeferredSection
        Component={Gallery}
        fallback={<GallerySkeleton />}
        minHeight="min-h-[500px]"
      />

      {/* Media & Declarations */}
      <DeferredSection
        Component={Showreel}
        fallback={<ShowreelSkeleton />}
        minHeight="min-h-[500px]"
      />
      <DeferredSection Component={Testimonials} fallback={<TestimonialsSkeleton />} />
      <DeferredSection Component={Press} fallback={<SectionSkeleton />} />

      {/* Blog */}
      <DeferredSection Component={Blog} fallback={<SectionSkeleton />} />

      {/* Professional sections */}
      <DeferredSection Component={PressKit} fallback={<SectionSkeleton />} />
      <DeferredSection Component={Contact} fallback={<ContactSkeleton />} />

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </main>
  )
}
