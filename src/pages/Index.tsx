import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CoursesSection from "@/components/CoursesSection";
import CorporateSection from "@/components/CorporateSection";
import ContactFooter from "@/components/ContactFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <CoursesSection />
      <CorporateSection />
      <ContactFooter />
    </div>
  );
};

export default Index;
