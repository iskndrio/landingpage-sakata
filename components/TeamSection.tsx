"use client";

import Image from "next/image";

export default function TeamSection() {
  return (
    <section className="bg-[#f8fbff] py-14 md:py-24">
      <div className="section-container">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#e6ecff]">
          <div className="absolute inset-0">
            <Image
              src="/image-team.jpg"
              alt="Our team"
              fill
              className="object-cover opacity-30"
              sizes="100vw"
            />
          </div>
          <div className="relative z-10 max-w-3xl px-6 py-12 sm:px-8 md:px-14 md:py-20">
            <span className="inline-flex rounded-full bg-white border border-slate-200 px-4 py-1 text-xs font-semibold tracking-[0.2em] text-slate-600 shadow-sm">
              OUR TEAM
            </span>
            <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              By Experts. For You.
            </h2>
            <p className="mt-6 text-sm leading-7 text-slate-700 sm:text-base md:text-lg">
              UnBoundX was founded by professionals and visionary builders who have experienced the core challenges of retail financelimited access, fragmented education, and a lack of trust. With deep expertise in finance and technology, we are building a platform that is accessible, transparent, and secure. Through strong compliance, clear transparency, and advanced infrastructure, we provide a trusted space for your financial and creative goals to thrive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
