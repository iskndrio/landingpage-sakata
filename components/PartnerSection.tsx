"use client";

import Image from "next/image";
import { partners } from "./data";

export default function PartnerSection() {
  const marqueeItems = [...partners, ...partners];

  return (
    <section className="overflow-hidden py-14 bg-[#f8fbff] border-y border-blue-100">
      <div className="section-container">
        <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl text-center">
          Dipercaya oleh Institusi Terkemuka
        </h2>
      </div>

      <div className="mt-8 overflow-hidden">
        <div className="marquee-track flex min-w-max gap-4">
          {marqueeItems.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex items-center justify-center rounded-2xl border border-blue-100 bg-white px-4 py-3 grayscale transition hover:grayscale-0 hover:bg-blue-50 sm:px-6 sm:py-4"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={200}
                height={80}
                className="h-10 w-auto object-contain sm:h-12 md:h-14"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
