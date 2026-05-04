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
        className="flex min-h-[360px] w-full flex-col items-center justify-center bg-blue-50 border-y border-blue-100 px-6 py-16 text-center md:min-h-[420px] md:px-16"
      >
        <span className="mb-4 inline-flex rounded-full bg-white border border-blue-100 px-4 py-1 text-xs font-semibold tracking-[0.2em] text-blue-700 shadow-sm">
          BERGABUNG
        </span>
        <h2 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
          Siap Berkontribusi untuk Ekosistem Teknologi Indonesia?
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
          Bergabunglah bersama ratusan individu dan institusi yang telah bersama Sakata membangun masa depan teknologi yang
          lebih inklusif.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:hello@sakatainnovation.id"
            className="rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Bergabung Sekarang
          </a>
          <a
            href="https://sakattaku.com"
            className="rounded-full border border-blue-200 px-6 py-3 font-semibold text-slate-900 transition hover:bg-white"
          >
            Kunjungi Kami
          </a>
        </div>
      </motion.div>
    </section>
  );
}
