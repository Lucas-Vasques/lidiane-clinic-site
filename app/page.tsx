import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExamsSection } from "@/components/sections/exams-section";
import { FloatingWhatsapp } from "@/components/sections/floting-whatsapp";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { SiteHeader } from "@/components/sections/site-header";
import { SiteFooter } from "@/components/sections/site-footer";
import { StoryCardsSection } from "@/components/sections/story-cards-section";

export default function HomePage() {
  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ExamsSection />
      <StoryCardsSection />
      <ContactSection />
      <SiteFooter />
      <FloatingWhatsapp />
    </main>
  );
}