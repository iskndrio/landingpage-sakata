"use client";

import Image from "next/image";

export default function ImageSection() {
  return (
    <section className="bg-[#f8fbff] text-slate-900">
      <div className="relative h-[100vh]">
        <div className="sticky top-0 z-10 h-[100vh]">
          <div className="grid gap-6 px-6 pt-8 pb-10 md:grid-cols-2 md:px-16 md:pb-0">
            <div className="relative h-[48vh] overflow-hidden rounded-3xl sm:h-[56vh] md:h-[75vh]">
              <Image
                src="/image-compliance.jpg"
                alt="Committed to compliance"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="text-2xl font-bold text-white">
                  Committed to compliance
                </h3>
                <p className="mt-2 text-sm text-white/80">
                  User safety and innovation go hand in hand. With our Do It Right
                  philosophy, we prioritize compliance to protect users while driving
                  groundbreaking progress.
                </p>
              </div>
            </div>

            <div className="flex h-[48vh] flex-col justify-end rounded-3xl bg-[#0f172a] p-6 sm:h-[56vh] md:h-[75vh]">
              <h3 className="text-2xl font-bold text-white">Beyond Security</h3>
              <p className="mt-2 text-sm text-white/70">
                Through transparency and trust, we safeguard your investments and
                content, empowering your financial and creative pursuits with
                confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
