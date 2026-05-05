"use client";

import Image from "next/image";
import { ShieldCheck } from "lucide-react";

export default function ComplianceSection() {
  return (
    <section className="bg-[#f8fbff] pt-6 pb-0">
      <div className="h-[160vh]">
        <div className="section-container sticky top-0 z-10 h-screen">
          <div className="grid items-stretch gap-8 md:grid-cols-2">
            <div className="relative rounded-3xl border border-blue-100 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="./public/image.png"
                  alt="Committed to compliance"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                  <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                    Committed to compliance
                  </h3>
                  <p className="mt-3 max-w-lg text-sm text-white/90 sm:text-base">
                    User safety and innovation go hand in hand. With our "Do It Right"
                    philosophy, we prioritize compliance to protect users while driving
                    groundbreaking progress.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex h-full flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900/90 p-8 text-white shadow-[0_24px_60px_rgba(15,23,42,0.2)]">
              <div className="flex justify-end">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <ShieldCheck className="h-6 w-6" />
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Beyond Security
                </h3>
                <p className="mt-4 text-sm text-white/80 sm:text-base">
                  Through transparency and trust, we safeguard your investments and
                  content, empowering your financial and creative pursuits with
                  confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
