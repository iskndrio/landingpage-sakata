import { navLinks } from "./data";

const socialLinks = [
  { label: "X", ariaLabel: "Twitter" },
  { label: "IG", ariaLabel: "Instagram" },
  { label: "IN", ariaLabel: "LinkedIn" },
  { label: "GH", ariaLabel: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="border-t border-blue-100 bg-[#f8fbff] text-slate-500 py-10">
      <div className="section-container grid gap-8 md:grid-cols-[minmax(0,1fr)_auto_auto] md:items-start">
        <div>
          <div className="flex items-center gap-3">
            <img src="/logo-sakata.png" alt="Sakata Innovation Center" className="h-10 w-10 rounded-full" />
            <div>
              <p className="font-semibold text-slate-900">Sakata Innovation Center</p>
              <p className="text-sm text-slate-500">Inovasi untuk Indonesia</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="transition hover:text-slate-900">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 text-slate-600">
          {socialLinks.map((item) => (
            <a
              key={item.ariaLabel}
              href="#"
              aria-label={item.ariaLabel}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-blue-200 bg-white text-xs font-semibold transition hover:text-slate-900 hover:bg-blue-50"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <p className="section-container mt-8 text-xs text-slate-500">
        © 2025 Sakata Innovation Center. Yayasan Nirlaba Teknologi.
      </p>
    </footer>
  );
}
