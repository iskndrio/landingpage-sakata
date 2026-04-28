"use client";

import { motion } from "framer-motion";
import { programs } from "./data";

export default function ProgramSection() {
  return (
    <section id="program" className="section-container py-16 md:py-24">
      <span className="inline-flex rounded-full bg-[#EEF4FF] px-4 py-1 text-xs font-semibold tracking-[0.2em] text-[#2563EB]">
        PROGRAM
      </span>
      <h2 className="mt-5 max-w-3xl font-display text-4xl font-bold tracking-tight text-[#1A1F36] md:text-5xl">
        Inisiatif Kami untuk Ekosistem Teknologi
      </h2>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {programs.map((program, index) => (
          <motion.article
            key={program.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-2xl bg-[#F4F6FA] p-8 transition duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center gap-4">
              <span className="text-3xl">{program.emoji}</span>
              <div className="inline-flex rounded-2xl bg-white p-3 text-[#2563EB]">
                <program.icon className="h-6 w-6" />
              </div>
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-[#1A1F36]">{program.title}</h3>
            <p className="mt-4 text-sm leading-7 text-[#6B7280] md:text-base">{program.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
