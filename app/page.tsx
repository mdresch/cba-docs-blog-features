import MainLayout from "./main-layout"
import { HeroSection } from "@/components/landing/hero-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { PricingSection } from "@/components/landing/pricing-section"
import { TeamSection } from "@/components/landing/team-section"
import { AboutSection } from "@/components/landing/about-section"

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <TeamSection />
      <AboutSection />
    </MainLayout>
  )
}

