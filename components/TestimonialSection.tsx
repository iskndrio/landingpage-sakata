"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { testimonials } from "./data";

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const active = testimonials[activeIndex];
  const leftAvatar = testimonials[(activeIndex + 1) % testimonials.length];
  const rightAvatar = testimonials[(activeIndex + 2) % testimonials.length];

  return (
    <section id="komunitas" className="section-container py-16 md:py-24">
      <div className="relative overflow-hidden rounded-[2rem] bg-white px-6 py-14 text-center md:px-12">
        <span className="inline-flex rounded-full bg-[#EEF4FF] px-4 py-1 text-xs font-semibold tracking-[0.2em] text-[#2563EB]">
          KOMUNITAS
        </span>

        <div className="pointer-events-none absolute left-6 top-1/2 hidden -translate-y-1/2 md:block">
          <div className="relative h-20 w-20">
            <Image
              src={leftAvatar.image}
              alt={leftAvatar.name}
              fill
              className="rounded-full object-cover ring-8 ring-[#F4F6FA]"
              sizes="80px"
            />
          </div>
        </div>

        <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 md:block">
          <div className="relative h-20 w-20">
            <Image
              src={rightAvatar.image}
              alt={rightAvatar.name}
              fill
              className="rounded-full object-cover ring-8 ring-[#F4F6FA]"
              sizes="80px"
            />
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={active.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="text-2xl font-semibold leading-snug text-[#1A1F36] md:text-4xl"
            >
              “{active.quote}”
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="relative h-16 w-16 md:hidden">
              <Image src={active.image} alt={active.name} fill className="rounded-full object-cover" sizes="64px" />
            </div>
            <div>
              <p className="text-base font-semibold text-[#2563EB]">{active.name}</p>
              <p className="text-sm text-[#6B7280]">{active.role}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
