"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section id="kontak" className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex min-h-[360px] w-full flex-col items-center justify-center bg-gradient-to-br from-[#E6F0FF] via-[#D7E8FF] to-[#C2DCFF] px-6 py-16 text-center md:min-h-[420px] md:px-16"
      >
        <h2 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-tight text-[#102A56] md:text-5xl">
          Siap Berkontribusi untuk Ekosistem Teknologi Indonesia?
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#34507C] md:text-lg">
          Bergabunglah bersama ratusan individu dan institusi yang telah bersama Sakata membangun masa depan teknologi yang
          lebih inklusif.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:hello@sakatainnovation.id"
            className="rounded-full bg-[#1D4ED8] px-6 py-3 font-semibold text-white transition hover:bg-[#1E40AF]"
          >
            Bergabung Sekarang
          </a>
          <a
            href="mailto:hello@sakatainnovation.id"
            className="rounded-full border border-[#1D4ED8]/40 px-6 py-3 font-semibold text-[#1D4ED8] transition hover:bg-white/60"
          >
            Hubungi Kami
          </a>
        </div>
      </motion.div>
    </section>
  );
}
