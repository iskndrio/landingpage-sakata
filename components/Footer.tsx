import { navLinks } from "./data";

const socialLinks = [
  { label: "X", ariaLabel: "Twitter" },
  { label: "IG", ariaLabel: "Instagram" },
  { label: "IN", ariaLabel: "LinkedIn" },
  { label: "GH", ariaLabel: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-10">
      <div className="section-container grid gap-8 md:grid-cols-[minmax(0,1fr)_auto_auto] md:items-start">
        <div>
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#1A1F36] text-sm font-bold text-white">
              S
            </span>
            <div>
              <p className="font-semibold text-[#1A1F36]">Sakata Innovation Center</p>
              <p className="text-sm text-[#6B7280]">Inovasi untuk Indonesia</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#6B7280]">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="transition hover:text-[#2563EB]">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 text-[#6B7280]">
          {socialLinks.map((item) => (
            <a
              key={item.ariaLabel}
              href="#"
              aria-label={item.ariaLabel}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-xs font-semibold transition hover:text-[#2563EB]"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <p className="section-container mt-8 text-xs text-[#6B7280]">
        © 2025 Sakata Innovation Center. Yayasan Nirlaba Teknologi.
      </p>
    </footer>
  );
}
