import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedModel from "@/components/FeaturedModel";
import PerformanceSection from "@/components/PerformanceSection";
import ImmersiveSection from "@/components/ImmersiveSection";
import RevealVideo from "@/components/RevealVideo";
import TechnologySection from "@/components/TechnologySection";
import InteriorSection from "@/components/InteriorSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="bg-background min-h-screen">
    <Navbar />
    <HeroSection />
    <FeaturedModel />
    <PerformanceSection />
    <ImmersiveSection />
    <RevealVideo />
    <TechnologySection />
    <InteriorSection />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
