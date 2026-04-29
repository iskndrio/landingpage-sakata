"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CommunitySection() {
  return (
    <section id="komunitas" className="section-container relative z-20 bg-white pt-4 pb-16 md:pt-6 md:pb-24">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto w-full max-w-105"
        >
          <div className="absolute -left-6 top-12 hidden h-16 w-16 items-center justify-center rounded-full border border-white/60 bg-white text-xs font-semibold text-[#1A1F36] shadow-[0_14px_30px_rgba(15,23,42,0.12)] md:flex z-10">
            SA
          </div>
          <div className="absolute -right-4 top-20 hidden h-12 w-12 items-center justify-center rounded-full bg-[#E2FBE8] text-sm font-semibold text-[#0F766E] md:flex z-10">
            KT
          </div>
          <div className="relative overflow-hidden rounded-[2.6rem] bg-[#b19ff6] p-3 shadow-[0_30px_80px_rgba(15,23,42,0.25)]">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.1rem] bg-white">
              <Image
                src="/image.png"
                alt="Sakata Community Activity"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0F172A]/80 to-transparent p-6 pt-20">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold tracking-wider text-white backdrop-blur-md">
                    SAKATA
                  </span>
                  <span className="text-sm font-semibold text-white/90">2026</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          
          <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-[#1A1F36] md:text-5xl">
            Memadukan Keuangan dengan Konektivitas Sosial
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-[#6B7280] md:text-lg">
            Bantu kami membangun ekosistem yang dinamis di mana ide dan peluang bertemu. Kami menghubungkan talenta,
            mentor, dan mitra untuk membentuk masa depan inovasi yang lebih cerdas dan terhubung.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
