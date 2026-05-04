"use client";

import { motion } from "framer-motion";
import { programs } from "./data";

export default function ProgramSection() {
  return (
    <section id="program" className="section-container py-16 md:py-24">
      <span className="inline-flex rounded-full bg-blue-50 border border-blue-100 px-4 py-1 text-xs font-semibold tracking-[0.2em] text-blue-700">
        PROGRAM
      </span>
      <h2 className="mt-5 max-w-3xl font-display text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
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
            className="rounded-2xl border border-blue-100 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:bg-blue-50"
          >
            <div className="flex items-center gap-4">
              <div className="inline-flex rounded-2xl bg-blue-50 p-3 text-blue-700 border border-blue-100 shadow-sm">
                <program.icon className="h-6 w-6" />
              </div>
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-slate-900">{program.title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">{program.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
