"use client";

import { partners } from "./data";

export default function PartnerSection() {
  const marqueeItems = [...partners, ...partners];

  return (
    <section className="overflow-hidden py-16 bg-[#f8fbff] border-y border-blue-100">
      <div className="section-container">
        <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-slate-900 md:text-5xl text-center">
          Dipercaya oleh Institusi Terkemuka
        </h2>
      </div>

      <div className="mt-8 overflow-hidden">
        <div className="marquee-track flex min-w-max gap-4">
          {marqueeItems.map((partner, index) => (
            <div
              key={`${partner}-${index}`}
              className="rounded-2xl border border-blue-100 bg-white px-6 py-4 text-sm font-semibold text-blue-300 grayscale transition hover:grayscale-0 hover:bg-blue-50 hover:text-slate-900"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
