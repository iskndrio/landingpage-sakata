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
  const floatingAvatars = [
    { person: active, className: "left-12 top-10 h-14 w-14" },
    { person: leftAvatar, className: "left-6 top-1/2 h-20 w-20 -translate-y-1/2" },
    { person: rightAvatar, className: "right-6 top-1/2 h-20 w-20 -translate-y-1/2" },
    { person: leftAvatar, className: "right-14 bottom-10 h-14 w-14" },
  ];

  return (
    <section id="komunitas" className="section-container py-16 md:py-24">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-gradient-to-br from-white via-[#F8FAFF] to-[#EEF4FF] px-6 py-14 text-center shadow-[0_30px_80px_rgba(15,23,42,0.12)] md:px-12">
        <span className="inline-flex rounded-full bg-[#E8F0FF] px-4 py-1 text-xs font-semibold tracking-[0.25em] text-[#1D4ED8]">
          KOMUNITAS
        </span>

        <div className="pointer-events-none absolute inset-0 hidden md:block">
          {floatingAvatars.map((avatar, index) => (
            <motion.div
              key={`${avatar.person.name}-${index}`}
              className={`absolute ${avatar.className}`}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4 + index * 0.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative h-full w-full">
                <Image
                  src={avatar.person.image}
                  alt={avatar.person.name}
                  fill
                  className="rounded-full object-cover ring-8 ring-[#F4F6FA]"
                  sizes="80px"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={active.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="text-2xl font-semibold leading-snug text-[#111827] md:text-[2.6rem] md:leading-[1.2]"
            >
              “{active.quote}”
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="flex items-center justify-center gap-3 md:hidden">
              {[active, leftAvatar, rightAvatar].map((avatar) => (
                <div key={avatar.name} className="relative h-12 w-12">
                  <Image
                    src={avatar.image}
                    alt={avatar.name}
                    fill
                    className="rounded-full object-cover ring-4 ring-white/80 shadow-[0_8px_20px_rgba(15,23,42,0.12)]"
                    sizes="48px"
                  />
                </div>
              ))}
            </div>
            <div>
              <p className="text-base font-semibold text-[#1D4ED8]">{active.name}</p>
              <p className="text-sm text-[#6B7280]">{active.role}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
