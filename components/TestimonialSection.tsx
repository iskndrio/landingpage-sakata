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
  const bottomAvatar = testimonials[(activeIndex + 3) % testimonials.length];
  const floatingAvatars = [
    { person: leftAvatar, className: "left-8 top-16 h-20 w-20" },
    { person: active, className: "left-[18%] top-2 h-16 w-16" },
    { person: rightAvatar, className: "right-10 top-10 h-20 w-20" },
    { person: leftAvatar, className: "right-6 top-[55%] h-24 w-24 -translate-y-1/2" },
    { person: rightAvatar, className: "left-6 top-[55%] h-24 w-24 -translate-y-1/2" },
    { person: bottomAvatar, className: "right-[20%] bottom-10 h-[72px] w-[72px]" },
  ];

  return (
    <section id="komunitas" className="w-full bg-white py-16 md:py-24 px-4 md:px-10">
      <div className="relative w-full overflow-hidden px-4 py-10 text-center md:px-10 min-h-130 md:min-h-140">

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
                  className="rounded-full object-cover ring-8 ring-slate-100/80 shadow-[0_18px_40px_rgba(15,23,42,0.18)]"
                  sizes="80px"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mx-auto mt-8 w-full max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={active.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="text-3xl font-semibold leading-tight text-slate-800 md:text-[3.4rem] md:leading-[1.15]"
            >
              “{active.quote}”
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-6 flex flex-col items-center gap-3">
            <div className="flex items-center justify-center gap-3 md:hidden">
              {[active, leftAvatar, rightAvatar].map((avatar) => (
                <div key={avatar.name} className="relative h-12 w-12">
                  <Image
                    src={avatar.image}
                    alt={avatar.name}
                    fill
                    className="rounded-full object-cover ring-4 ring-slate-100/80 shadow-md"
                    sizes="48px"
                  />
                </div>
              ))}
            </div>
            <div>
              <p className="text-lg font-semibold text-slate-800">- {active.name}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
