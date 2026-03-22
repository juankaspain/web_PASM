import { cn } from '@/lib/utils'

type SkeletonProps = React.HTMLAttributes<HTMLDivElement>

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-gray-800/50', className)}
      {...props}
    />
  )
}

export function SectionSkeleton({ className }: { className?: string }) {
  return (
    <section className={cn('min-h-[400px] bg-black py-20', className)}>
      <div className="container mx-auto px-4">
        <Skeleton className="mx-auto mb-12 h-12 w-64" />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="h-48 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CardSkeleton() {
  return (
    <div className="space-y-4 rounded-lg border border-gray-800 p-6">
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <div className="flex gap-2 pt-2">
        <Skeleton className="h-8 w-20" />
        <Skeleton className="h-8 w-20" />
      </div>
    </div>
  )
}

export function ShowreelSkeleton() {
  return (
    <section className="min-h-[500px] bg-black py-20">
      <div className="container mx-auto px-4">
        <Skeleton className="mx-auto mb-12 h-12 w-64" />
        <div className="mx-auto aspect-video max-w-4xl">
          <Skeleton className="h-full w-full rounded-lg" />
        </div>
        <div className="mx-auto mt-8 max-w-2xl space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
      </div>
    </section>
  )
}

export function TestimonialsSkeleton() {
  return (
    <section className="min-h-[400px] bg-zinc-900 py-20">
      <div className="container mx-auto px-4">
        <Skeleton className="mx-auto mb-12 h-12 w-64" />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-4 rounded-lg bg-black/50 p-6">
              <Skeleton className="h-20 w-full" />
              <div className="flex items-center gap-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-3 w-24" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ContactSkeleton() {
  return (
    <section className="min-h-[400px] bg-black py-20">
      <div className="container mx-auto max-w-2xl px-4">
        <Skeleton className="mx-auto mb-12 h-12 w-48" />
        <div className="space-y-6">
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-32 w-full" />
          <Skeleton className="ml-auto h-12 w-32" />
        </div>
      </div>
    </section>
  )
}

export function GallerySkeleton() {
  return (
    <section className="min-h-[500px] bg-zinc-900 py-20">
      <div className="container mx-auto px-4">
        <Skeleton className="mx-auto mb-12 h-12 w-48" />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <Skeleton key={i} className="aspect-square w-full" />
          ))}
        </div>
      </div>
    </section>
  )
}

export function TimelineSkeleton() {
  return (
    <section className="min-h-[400px] bg-black py-20">
      <div className="container mx-auto max-w-4xl px-4">
        <Skeleton className="mx-auto mb-12 h-12 w-56" />
        <div className="space-y-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex gap-4">
              <Skeleton className="mt-1 h-3 w-3 flex-shrink-0 rounded-full" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
