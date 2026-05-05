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
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.35], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.4], [0, -60]);

  const coverY = useTransform(scrollYProgress, [0, 0.5], ["60vh", "-10vh"]);
  const coverScale = useTransform(scrollYProgress, [0, 0.5], [1.05, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[220vh] bg-[#f8fbff] text-slate-900 pt-2 md:pt-4 pb-0"
    >
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
            className="font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-7xl lg:text-[6rem] mb-6 text-slate-900"
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
            className="mt-4 mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-slate-600 font-light"
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
              className="flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white transition-transform hover:scale-105 hover:bg-blue-700 sm:w-auto"
            >
              Lihat Program <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#tentang"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-blue-200 bg-white/60 px-8 py-4 text-base font-semibold text-slate-900 transition-all hover:bg-blue-50 sm:w-auto"
            >
              Tentang Kami
            </a>
          </motion.div>
        </div>
      </motion.div>

      <div className="sticky top-0 mt-[60vh] w-full z-20">
        <motion.div
          style={{ y: coverY, scale: coverScale }}
          className="mx-auto w-full max-w-[1100px] px-4 md:px-8"
        >
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[2rem] border border-blue-100 shadow-[0_24px_60px_rgba(37,99,235,0.18)] bg-blue-50 backdrop-blur-sm">
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center text-white">
              <h2 className="text-3xl font-semibold tracking-tight drop-shadow md:text-5xl">
                Connect. Share.
                <br />
                Invest.
              </h2>
              <p className="mt-4 max-w-xl text-xs leading-relaxed drop-shadow sm:text-sm md:text-base">
                UnBound X is an educational platform. Brokerage services are provided exclusively by MARV Capital Inc., a registered broker-dealer. Clearing and custody are provided by Alpaca Securities LLC.
              </p>
            </div>
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
