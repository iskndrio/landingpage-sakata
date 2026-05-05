"use client";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { BadgeCheck, BookOpen, Wallet } from "lucide-react";
import { useRef } from "react";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const cards = [
  {
    title: "Learn from pros",
    description:
      "Exclusive posts, videos, and live sessions from verified traders to absorb winning habits, skip rookie mistakes, and grow with confidence.",
    Icon: BadgeCheck,
  },
  {
    title: "Personalized insights",
    description:
      "Trend signals and knowledge tailored to your watchlist, built to help you decide faster and invest smarter.",
    Icon: BookOpen,
  },
  {
    title: "Mirror top portfolios",
    description:
      "One-tap allocation updates mirror real trades from high performers, with controls to keep you in charge.",
    Icon: Wallet,
  },
];

export default function UsersSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const coverY = useTransform(scrollYProgress, [0, 1], ["0vh", "-160vh"]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate z-30 mt-0 min-h-[250vh] bg-[#eef3ff] text-slate-900 md:min-h-[160vh]"
    >
      <motion.div style={{ y: coverY }} className="relative z-30">
        <div className="sticky top-0 z-20 w-full bg-[#eef3ff] px-5 py-8 md:px-16 md:py-16">
          <div className="w-full rounded-[2.5rem] bg-[#eef3ff] p-6 sm:p-8 md:p-16 min-h-[70vh] md:min-h-screen">
          <motion.h2
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={itemVariants}
            className="mx-auto mt-6 max-w-4xl text-center text-3xl font-bold text-slate-900 sm:text-4xl md:mt-8 md:text-7xl"
          >
            We believe that knowledge empowers investing.
          </motion.h2>

          <div className="mt-4 rounded-3xl bg-[#dde8ff] p-5 md:mt-8 md:p-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
              {cards.map(({ title, description, Icon }) => (
                <div key={title} className="rounded-2xl bg-white p-6 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-slate-800">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}