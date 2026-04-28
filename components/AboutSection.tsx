"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="tentang" className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-container rounded-[2rem] bg-[#EFF6FF] px-8 py-16 text-center md:px-20"
      >
        <span className="inline-flex rounded-full bg-white px-4 py-1 text-xs font-semibold tracking-[0.2em] text-[#2563EB]">
          TENTANG
        </span>
        <h2 className="mx-auto mt-5 max-w-4xl font-display text-4xl font-bold tracking-tight text-[#1A1F36] md:text-5xl">
          Dibangun untuk Masa Depan Teknologi Indonesia
        </h2>
        <p className="mx-auto mt-6 max-w-[700px] text-base leading-8 text-[#6B7280] md:text-lg">
          Sakata Innovation Center berdiri dengan keyakinan bahwa akses terhadap teknologi dan pendidikan digital adalah hak
          semua orang. Kami hadir untuk menjembatani kesenjangan itu melalui program yang berdampak nyata.
        </p>
      </motion.div>
    </section>
  );
}
