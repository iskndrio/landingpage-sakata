"use client";

import { partners } from "./data";

export default function PartnerSection() {
  const marqueeItems = [...partners, ...partners];

  return (
    <section className="overflow-hidden py-16">
      <div className="section-container">
        <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-[#1A1F36] md:text-5xl">
          Dipercaya oleh Institusi Terkemuka
        </h2>
      </div>

      <div className="mt-8 overflow-hidden">
        <div className="marquee-track flex min-w-max gap-4">
          {marqueeItems.map((partner, index) => (
            <div
              key={`${partner}-${index}`}
              className="rounded-2xl border border-gray-200 bg-[#F4F6FA] px-6 py-4 text-sm font-semibold text-[#6B7280] grayscale transition hover:grayscale-0"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
