"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section id="kontak" className="section-container py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-[2rem] bg-gradient-to-br from-[#1A1F36] to-[#2563EB] px-8 py-14 text-center md:px-20"
      >
        <h2 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
          Siap Berkontribusi untuk Ekosistem Teknologi Indonesia?
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/80 md:text-lg">
          Bergabunglah bersama ratusan individu dan institusi yang telah bersama Sakata membangun masa depan teknologi yang
          lebih inklusif.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:hello@sakatainnovation.id"
            className="rounded-full bg-white px-6 py-3 font-semibold text-[#1A1F36] transition hover:bg-gray-100"
          >
            Bergabung Sekarang
          </a>
          <a
            href="mailto:hello@sakatainnovation.id"
            className="rounded-full border border-white/70 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Hubungi Kami
          </a>
        </div>
      </motion.div>
    </section>
  );
}
