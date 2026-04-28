import AboutSection from "@/components/AboutSection";
import CommunitySection from "@/components/CommunitySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import PartnerSection from "@/components/PartnerSection";
import ProgramSection from "@/components/ProgramSection";
import StatsSection from "@/components/StatsSection";
import TestimonialSection from "@/components/TestimonialSection";

export default function Home() {
  return (
    <div className="bg-white text-[#111827]">
      <Navbar />

      <main>
        <div className="relative z-10 bg-white">
          <HeroSection />
          <CommunitySection />
        </div>
        <StatsSection />
        <ProgramSection />
        <AboutSection />
        <TestimonialSection />
        <PartnerSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
