import AboutSection from "@/components/AboutSection";
import CommunitySection from "@/components/CommunitySection";
import CTASection from "@/components/CTASection";
import ImageSection from "@/components/ImageSection";
import InvestorSection from "@/components/InvestorSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import PartnerSection from "@/components/PartnerSection";
import ProgramSection from "@/components/ProgramSection";
import StatsSection from "@/components/StatsSection";
import TestimonialSection from "@/components/TestimonialSection";
import UsersSection from "@/components/UsersSection";

export default function Home() {
  return (
    <div className="bg-[#f8fbff] text-slate-900 min-h-screen">
      <Navbar />

      <main>
        <div className="relative z-10 bg-[#f8fbff]">
          <HeroSection />
          <CommunitySection />
        </div>
        <StatsSection />
        <ProgramSection />
        <AboutSection />
        <TestimonialSection />
        <PartnerSection />
        <ImageSection />
        <UsersSection />
        <InvestorSection />
        <TeamSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
