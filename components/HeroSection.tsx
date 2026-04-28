"use client";

import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
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

  const heroOpacity = useTransform(scrollYProgress, [0, 0.28, 0.45], [1, 1, 0.15]);
  const heroScale = useTransform(scrollYProgress, [0, 0.45], [1, 0.94]);
  const heroBlur = useTransform(scrollYProgress, [0, 0.45], [0, 10]);
  const heroY = useTransform(scrollYProgress, [0, 0.45], [0, -60]);
  const heroFilter = useMotionTemplate`blur(${heroBlur}px)`;

  const coverY = useTransform(scrollYProgress, [0.1, 0.55], [140, -180]);
  const coverScale = useTransform(scrollYProgress, [0.1, 0.55], [0.92, 1]);
  const coverOpacity = useTransform(scrollYProgress, [0, 0.18, 0.35], [0.85, 1, 1]);

  return (
    <section ref={sectionRef} className="section-container relative min-h-[180vh] py-16 md:py-24">
      <motion.div
        style={{ opacity: heroOpacity, scale: heroScale, filter: heroFilter, y: heroY }}
        className="sticky top-28 z-10 grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]"
      >
        <div>
          <motion.span
            initial="hidden"
            animate="visible"
            custom={0}
            variants={itemVariants}
            className="inline-flex rounded-full bg-[#EEF4FF] px-4 py-1 text-xs font-semibold tracking-[0.2em] text-[#2563EB]"
          >
            INOVASI UNTUK INDONESIA
          </motion.span>

          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={itemVariants}
            className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-[#1A1F36] md:text-7xl"
          >
            Mendorong Inovasi Teknologi
            <br />
            untuk Indonesia yang
            <br />
            <span className="text-[#2563EB]">Lebih Baik.</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.2}
            variants={itemVariants}
            className="mt-6 max-w-2xl text-base leading-8 text-[#6B7280] md:text-lg"
          >
            Sakata Innovation Center hadir untuk membangun ekosistem teknologi yang inklusif, berdampak, dan
            berkelanjutan bagi seluruh Indonesia.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.3}
            variants={itemVariants}
            className="mt-10 flex flex-wrap gap-4"
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

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="relative overflow-hidden rounded-[2rem] border border-[#E5EAF3] bg-gradient-to-br from-[#F8FAFF] to-white p-8"
        >
          <div className="absolute -left-4 top-10 h-24 w-24 rounded-full bg-[#DBEAFE]" />
          <div className="absolute right-8 top-8 text-5xl md:text-6xl">🚀</div>
          <div className="absolute bottom-10 left-10 text-4xl md:text-5xl">💡</div>
          <div className="absolute bottom-8 right-12 text-4xl md:text-5xl">🌐</div>

          <div className="relative z-10 flex min-h-[320px] flex-col justify-between rounded-[1.5rem] bg-[#1A1F36] p-8 text-white shadow-[0_30px_80px_rgba(37,99,235,0.18)]">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-white/10 px-4 py-1 text-xs font-semibold tracking-[0.2em] text-white/80">
                SAKATA
              </span>
              <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/80">2025</span>
            </div>
            <div>
              <p className="max-w-sm font-display text-3xl font-bold leading-tight md:text-4xl">
                Menumbuhkan talenta, mempercepat inovasi, memperluas dampak.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-3">
                {["Academy", "Lab", "Impact"].map((label) => (
                  <div
                    key={label}
                    className="rounded-2xl bg-white/10 px-4 py-4 text-center text-sm font-medium text-white/90"
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 top-[34vh] z-20">
        <div className="sticky top-24">
          <motion.div
            style={{ y: coverY, scale: coverScale, opacity: coverOpacity }}
            className="relative mx-auto h-[56vh] w-full max-w-7xl overflow-hidden rounded-[2rem] border border-gray-200 bg-[#F4F6FA] shadow-[0_30px_80px_rgba(17,24,39,0.10)]"
          >
            <Image
              src="https://picsum.photos/1600/1000?random=42"
              alt="Aktivitas pelatihan dan kolaborasi Sakata Innovation Center"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F36]/55 via-[#1A1F36]/15 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2 md:bottom-8 md:left-8 md:right-8">
              <div className="inline-flex w-fit rounded-full bg-white/15 px-4 py-1 text-xs font-semibold tracking-[0.2em] text-white backdrop-blur">
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
