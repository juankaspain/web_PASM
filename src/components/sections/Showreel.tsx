'use client'

import { motion } from 'framer-motion'
import { Play, Download } from 'lucide-react'
import Image from 'next/image'

export default function Showreel() {
  return (
    <section id="showreel" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 font-serif text-4xl font-bold lg:text-5xl">
            Showreel
          </h2>
          <div className="mx-auto h-1 w-24 bg-primary" />
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            Un vistazo a mi trabajo en acción
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Main Video */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="group relative aspect-video overflow-hidden rounded-2xl bg-slate-900 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1200"
                alt="Showreel thumbnail"
                fill
                className="object-cover opacity-70 transition-opacity group-hover:opacity-90"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm transition-all hover:scale-110 hover:bg-white">
                  <Play className="ml-1 h-8 w-8 fill-slate-900 text-slate-900" />
                </button>
              </div>

              {/* Duration Badge */}
              <div className="absolute bottom-4 right-4 rounded-full bg-black/70 px-3 py-1 text-sm font-semibold text-white backdrop-blur-sm">
                3:24
              </div>
            </div>

            <div className="mt-4">
              <h3 className="mb-2 text-xl font-bold">Showreel 2024</h3>
              <p className="text-sm text-muted-foreground">
                Recopilación de mis mejores trabajos recientes en cine,
                televisión y teatro
              </p>
            </div>
          </motion.div>

          {/* Info & Additional Videos */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Download Section */}
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-bold">Materiales</h3>
              <div className="space-y-3">
                <button className="flex w-full items-center justify-between rounded-lg bg-muted p-4 transition-colors hover:bg-muted/70">
                  <span className="font-semibold">Showreel HD</span>
                  <Download size={20} />
                </button>
                <button className="flex w-full items-center justify-between rounded-lg bg-muted p-4 transition-colors hover:bg-muted/70">
                  <span className="font-semibold">CV Actoral</span>
                  <Download size={20} />
                </button>
                <button className="flex w-full items-center justify-between rounded-lg bg-muted p-4 transition-colors hover:bg-muted/70">
                  <span className="font-semibold">Headshots</span>
                  <Download size={20} />
                </button>
              </div>
            </div>

            {/* Mini Showreels */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Clips Destacados</h3>

              {[
                { title: 'Escena Dramática - El Último Adiós', duration: '1:12' },
                { title: 'Monólogo - Hamlet', duration: '2:05' },
                { title: 'Escena Cómica - Caminos Cruzados', duration: '0:58' },
              ].map((clip, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-4 rounded-lg bg-muted p-4 transition-colors hover:bg-muted/70"
                >
                  <div className="relative h-16 w-24 flex-shrink-0 overflow-hidden rounded">
                    <Image
                      src={`https://images.unsplash.com/photo-${1485846234645 + index}?q=80&w=200`}
                      alt={clip.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <Play
                        size={20}
                        className="fill-white text-white opacity-80 group-hover:opacity-100"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">{clip.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {clip.duration}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
