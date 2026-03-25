import Navbar from "@/Components/Navbar";
import HeroSection from "@/Components/HeroSection";
import SkillsSection from "@/Components/SkillsSection";
import ProjectCarousel from "@/Components/ProjectCarousel";
import ContactSection from "@/Components/ContactSection";
import Footer from "@/Components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ProjectCarousel />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
