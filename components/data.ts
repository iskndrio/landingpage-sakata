import { BookOpen, FlaskConical, HeartHandshake } from "lucide-react";

export const navLinks = [
  { label: "Program", href: "#program" },
  { label: "Tentang", href: "#tentang" },
  { label: "Dampak", href: "#dampak" },
  { label: "Komunitas", href: "#komunitas" },
  { label: "Kontak", href: "#kontak" },
];

export const stats = [
  { value: 500, suffix: "+", label: "Peserta Program" },
  { value: 30, suffix: "+", label: "Mitra Institusi" },
  { value: 5, suffix: "", label: "Kota Jangkauan" },
  { value: 3, suffix: " Tahun", label: "Beroperasi" },
];

export const programs = [
  {
    title: "Sakata Academy",
    description:
      "Pelatihan teknologi dan coding intensif untuk generasi muda Indonesia yang ingin berkarir di bidang digital.",
    icon: BookOpen,
    emoji: "🎓",
  },
  {
    title: "Innovation Lab",
    description:
      "Ruang kolaborasi dan inkubasi untuk mengubah ide-ide inovatif menjadi solusi nyata bersama mentor berpengalaman.",
    icon: FlaskConical,
    emoji: "🔬",
  },
  {
    title: "Tech for Impact",
    description:
      "Program pengembangan solusi digital yang menjawab tantangan nyata masyarakat di berbagai daerah Indonesia.",
    icon: HeartHandshake,
    emoji: "🌱",
  },
];

export const testimonials = [
  {
    quote:
      "Program Sakata Academy benar-benar mengubah karir saya. Dalam 3 bulan, saya sudah bisa bekerja sebagai developer.",
    name: "Andi Pratama",
    role: "Alumni Batch 1",
    image: "/people/andi-pratama.jpg",
  },
  {
    quote:
      "Kolaborasi dengan Sakata membuka banyak peluang bagi perusahaan kami untuk berkontribusi pada ekosistem teknologi lokal.",
    name: "Rina Kusuma",
    role: "Partnership Manager",
    image: "/people/rina-kusuma.jpg",
  },
  {
    quote:
      "Innovation Lab memberikan ruang yang saya butuhkan untuk mengembangkan ide menjadi produk nyata.",
    name: "Budi Santoso",
    role: "Founder StartupLokal",
    image: "/people/budi-santoso.jpg",
  },
];

export const partners = [
  "Kementerian Kominfo",
  "Google.org",
  "UNDP Indonesia",
  "Universitas Indonesia",
  "Telkom Indonesia",
  "BRIN",
];
