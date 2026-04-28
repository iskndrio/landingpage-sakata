"use client";

import { motion } from "framer-motion";

export default function CommunitySection() {
  return (
    <section id="komunitas" className="section-container py-16 md:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto w-full max-w-[420px]"
        >
          <div className="absolute -left-6 top-12 hidden h-16 w-16 items-center justify-center rounded-full border border-white/60 bg-white text-xs font-semibold text-[#1A1F36] shadow-[0_14px_30px_rgba(15,23,42,0.12)] md:flex">
            SA
          </div>
          <div className="absolute -right-4 top-20 hidden h-12 w-12 items-center justify-center rounded-full bg-[#E2FBE8] text-sm font-semibold text-[#0F766E] md:flex">
            +
          </div>
          <div className="relative rounded-[2.6rem] bg-[#0F172A] p-4 shadow-[0_30px_80px_rgba(15,23,42,0.25)]">
            <div className="rounded-[2.1rem] bg-white">
              <div className="flex items-center justify-between px-5 pt-4 text-[10px] font-semibold tracking-[0.18em] text-[#9CA3AF]">
                <span>SAKATA</span>
                <span>2026</span>
              </div>
              <div className="px-5 pb-5">
                <div className="mt-3 h-36 rounded-2xl bg-gradient-to-br from-[#E0EAFF] via-[#EEF2FF] to-[#F8FAFF]" />
                <div className="mt-4 grid gap-2">
                  <div className="h-3 w-36 rounded-full bg-[#E5E7EB]" />
                  <div className="h-3 w-52 rounded-full bg-[#E5E7EB]" />
                  <div className="h-3 w-28 rounded-full bg-[#E5E7EB]" />
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <div className="flex h-9 w-24 items-center justify-center rounded-full bg-[#111827] text-[11px] font-semibold text-white">
                    Lihat
                  </div>
                  <div className="flex h-9 w-20 items-center justify-center rounded-full border border-[#E5E7EB] text-[11px] font-semibold text-[#374151]">
                    Simpan
                  </div>
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
          <span className="inline-flex rounded-full bg-[#EEF4FF] px-4 py-1 text-xs font-semibold tracking-[0.2em] text-[#2563EB]">
            KOMUNITAS
          </span>
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
