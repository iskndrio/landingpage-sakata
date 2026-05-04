"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { stats } from "./data";

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let frame = 0;
    const duration = 1400;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target]);

  return (
    <div ref={ref} className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
      {count}
      {suffix}
    </div>
  );
}

export default function StatsSection() {
  return (
    <section id="dampak" className="section-container py-8 md:py-12 bg-[#f8fbff]">
      <div className="grid gap-4 rounded-[2rem] bg-blue-50 border border-blue-100 p-6 md:grid-cols-4 md:p-10">
        {stats.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="rounded-2xl bg-white border border-blue-100 p-6 shadow-sm"
          >
            <Counter target={item.value} suffix={item.suffix} />
            <p className="mt-2 text-sm font-medium text-slate-600">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
