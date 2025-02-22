'use client'
import MainLayout from "./main-layout";
import { HeroSection } from "@/components/landing/hero-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { TeamSection } from "@/components/landing/team-section";
import { AboutSection } from "@/components/landing/about-section";
import { useState, useEffect, useRef } from 'react';


export default function Home() {
  const [features, setFeatures] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showTeamSection, setShowTeamSection] = useState(true); // Example conditional rendering

  useEffect(() => {
    const fetchFeatures = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const res = await fetch('/api/features'); // Correct path
        if (!res.ok) {
          const errorData = await res.json(); // Attempt to parse error JSON
          throw new Error(errorData?.error || `HTTP error! status: ${res.status}`); // Use optional chaining
        }
        const data = await res.json();
        setFeatures(data);
        
      } catch (err) {
        setError(err);
        console.error("Error fetching features:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeatures();
  }, []); // Empty dependency array - fetch only once


  return (
    <MainLayout>
      <HeroSection title="Welcome!" />
      {isLoading && <p>Loading features...</p>}
      {error && <p>Error: {error.message}</p>}
      {!isLoading && <FeaturesSection features={features} />}
      <PricingSection />
      {showTeamSection && <TeamSection />} {/* Conditional rendering */}
      <AboutSection />
    </MainLayout>
  );
}