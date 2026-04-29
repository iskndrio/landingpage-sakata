"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "./data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-4 py-4">
      <motion.div
        animate={{
          boxShadow: isScrolled ? "0 10px 30px rgba(17, 24, 39, 0.08)" : "0 0 0 rgba(0, 0, 0, 0)",
        }}
        className={`section-container rounded-full border transition-all duration-300 ${
          isScrolled
            ? "border-gray-200/80 bg-white/85 backdrop-blur-md"
            : "border-transparent bg-white/70"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 md:px-5">
          <a href="#" className="flex items-center gap-3 text-[#1A1F36]">
            <Image
              src="/logo-sakata.png"
              alt="Sakata Logo"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span className="max-w-[9rem] text-sm font-bold leading-tight md:max-w-none md:text-base">
              Sakata Innovation Center
            </span>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-sm font-medium text-gray-600 transition hover:text-[#2563EB]">
                {link.label}
              </a>
            ))}
            <a
              href="#kontak"
              className="rounded-full bg-[#1A1F36] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2563EB]"
            >
              Bergabung
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex rounded-full border border-gray-200 p-2 text-[#1A1F36] md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -12, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden border-t border-gray-100 px-5 py-4 md:hidden"
            >
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm font-medium text-gray-700"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#kontak"
                  className="mt-2 rounded-full bg-[#1A1F36] px-5 py-3 text-center text-sm font-semibold text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Bergabung
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
