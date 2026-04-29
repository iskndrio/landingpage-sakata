"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.22, 0.35], [1, 1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.45], [1, 0.94]);
  const heroY = useTransform(scrollYProgress, [0, 0.45], [0, -60]);

  const coverY = useTransform(scrollYProgress, [0, 0.2, 0.55], [160, 80, -180]);
  const coverScale = useTransform(scrollYProgress, [0.1, 0.55], [0.98, 1]);
  return (
    <section ref={sectionRef} className="section-container relative min-h-[100vh] bg-white pt-6 pb-0 md:pt-10 md:pb-0">
      <motion.div
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        className="sticky top-16 z-0 flex justify-center bg-white"
      >
        <div className="text-center">
          {/* <motion.span
            initial="hidden"
            animate="visible"
            custom={0}
            variants={itemVariants}
            className="inline-flex rounded-full bg-[#EEF4FF] px-4 py-1 text-xs font-semibold tracking-[0.2em] text-[#2563EB]"
          >
            INOVASI UNTUK INDONESIA
          </motion.span> */}

          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={itemVariants}
            className="mx-auto mt-6 max-w-4xl font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-[#1A1F36] md:text-7xl"
          >
            Mendorong Inovasi Teknologi untuk Indonesia yang{" "}
            <span className="text-[#2563EB]">Lebih Baik.</span>
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.2}
            variants={itemVariants}
            className="mt-6 mx-auto max-w-2xl text-base leading-8 text-[#6B7280] md:text-lg"
          >
            Sakata Innovation Center hadir untuk membangun ekosistem teknologi yang inklusif, berdampak, dan
            berkelanjutan bagi seluruh Indonesia.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.3}
            variants={itemVariants}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <a
              href="#program"
              className="inline-flex items-center gap-2 rounded-full bg-[#2563EB] px-6 py-3 font-semibold text-white transition hover:bg-[#1D4ED8]"
            >
              Lihat Program <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#tentang"
              className="rounded-full border border-[#D1D5DB] px-6 py-3 font-semibold text-[#1A1F36] transition hover:border-[#2563EB] hover:text-[#2563EB]"
            >
              Tentang Kami
            </a>
          </motion.div>
        </div>
      </motion.div>

      <div className="mt-4 md:mt-6 bg-white">
        <div className="sticky top-24 bg-white">
          <motion.div
            style={{ y: coverY, scale: coverScale, opacity: 1 }}
            className="relative z-30 mx-auto h-[56vh] w-full max-w-7xl overflow-hidden rounded-[2rem] border border-gray-200 bg-[#F4F6FA] shadow-[0_30px_80px_rgba(17,24,39,0.10)]"
          >
            <Image
              src="/image.png"
              alt="Aktivitas pelatihan dan kolaborasi Sakata Innovation Center"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2 md:bottom-8 md:left-8 md:right-8">
              <div className="inline-flex w-fit rounded-full bg-[#111827] px-4 py-1 text-xs font-semibold tracking-[0.2em] text-white">
                EKOSISTEM
              </div>
              <p className="max-w-2xl font-display text-2xl font-bold leading-tight text-white md:text-3xl">
                Ruang bertemu talenta, mentor, dan institusi untuk menghasilkan inovasi yang bisa diuji di dunia nyata.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
