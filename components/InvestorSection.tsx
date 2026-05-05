"use client";

import Image from "next/image";

export default function InvestorSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="section-container">
        <div className="text-center">
          <span className="inline-flex rounded-full bg-white border border-slate-200 px-4 py-1 text-xs font-semibold tracking-[0.2em] text-slate-500 shadow-sm">
            ABOUT
          </span>
          <h2 className="mx-auto mt-6 max-w-4xl font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Built for a New Generation
            <br />
            of Investors
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-600">
            At UnBoundX, we bring together deep institutional experience and next-gen innovation to reshape the future of investing.
          </p>
        </div>

        <div className="mt-10 grid items-center gap-8 md:mt-16 md:gap-10 md:grid-cols-[280px_1fr]">
          <div className="relative mx-auto h-60 w-48 overflow-hidden rounded-3xl sm:h-72 sm:w-56">
            <Image
              src="/people/rreza.jpg"
              alt="Founder"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 60vw, 280px"
            />
          </div>
          <div className="text-left text-slate-700">
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
              Maneesh Awasthi
            </p>
            <p className="mt-2 text-sm font-medium text-slate-600">
              Co-Founder & CEO
            </p>
            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
              <p>
                With over 27 years of experience across institutional finance, structured credit products, and regulatory compliance,
                he has seen firsthand how trust is built and broken in financial markets.
              </p>
              <p>
                As the CEO and Co-Founder of MARV Capital, a SEC and FINRA-regulated broker-dealer, he has led structuring, sales and
                trading, advisory for hedge funds, real-money accounts, and growth-stage companies.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid items-center gap-8 md:mt-16 md:gap-10 md:grid-cols-[1fr_280px]">
          <div className="text-left text-slate-700">
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
              Arnav Awasthi
            </p>
            <p className="mt-2 text-sm font-medium text-slate-600">
              Co-Founder, COO, & Head of Product
            </p>
            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
              <p>
                As a builder with roots in aerospace engineering and a mind shaped by computer science and economics, I have always
                gravitated toward complex challenges. That shifted after seeing how isolated and noisy the retail investor experience
                can be.
              </p>
              <p>
                From autonomous rockets to decentralized finance, I have explored systems that require both precision and intuition.
                That spirit now drives UnBound X, a platform built to make investing more meaningful, intuitive, and human.
              </p>
            </div>
          </div>
          <div className="relative mx-auto h-60 w-48 overflow-hidden rounded-3xl sm:h-72 sm:w-56">
            <Image
              src="/people/rizki.jpg"
              alt="Co-Founder"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 60vw, 280px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
