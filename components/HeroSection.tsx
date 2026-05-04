"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

const itemVariants: any = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -80]);

  const coverY = useTransform(scrollYProgress, [0, 0.3, 0.7], [100, 50, -50]);
  const coverScale = useTransform(scrollYProgress, [0, 0.4], [0.95, 1.05]);

  return (
    <section ref={sectionRef} className="relative min-h-[100vh] bg-[#f8fbff] text-slate-900 pt-2 md:pt-4 pb-0 overflow-hidden">
      <motion.div
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        className="sticky top-4 md:top-6 z-10 flex flex-col items-center justify-center px-4"
      >
        <div className="text-center max-w-5xl mx-auto flex flex-col items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={itemVariants}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 py-1.5 px-4 text-sm font-medium text-blue-700 backdrop-blur-md"
          >
            <span>Pusat Inovasi Teknologi</span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={itemVariants}
            className="font-display text-5xl font-bold leading-[1.1] tracking-tight md:text-7xl lg:text-[6rem] mb-6 text-slate-900"
          >
            Mendorong Inovasi <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">
              untuk Indonesia.
            </span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.2}
            variants={itemVariants}
            className="mt-4 mx-auto max-w-2xl text-lg md:text-xl text-slate-600 font-light"
          >
            Sakata Innovation Center hadir untuk membangun ekosistem teknologi yang inklusif, berdampak, dan berkelanjutan bagi seluruh pejuang inovasi.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.3}
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
          >
            <a
              href="#program"
              className="flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white transition-transform hover:scale-105 hover:bg-blue-700"
            >
              Lihat Program <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#tentang"
              className="flex items-center justify-center gap-2 rounded-full border border-blue-200 bg-white/60 px-8 py-4 text-base font-semibold text-slate-900 transition-all hover:bg-blue-50"
            >
              Tentang Kami
            </a>
          </motion.div>
        </div>
      </motion.div>

      <div className="relative mt-8 md:mt-12 w-full z-20 pointer-events-none">
        <motion.div
          style={{ y: coverY, scale: coverScale }}
          className="mx-auto w-full max-w-[900px] px-4 md:px-8"
        >
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[2rem] border border-blue-100 shadow-[0_24px_60px_rgba(37,99,235,0.18)] bg-blue-50 backdrop-blur-sm">
            <Image
              src="/image.png"
              alt="Dashboard Sakata Innovation Center"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 900px"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
