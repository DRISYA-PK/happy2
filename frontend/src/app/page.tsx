"use client";

import { CtaSection } from "@/components/landing/CtaSection";
import { ChallengeSection } from "@/components/landing/ChallengeSection";
import { Footer } from "@/components/layout/Footer";
import { FounderSection } from "@/components/landing/FounderSection";
import { Navbar } from "@/components/layout/Navbar";
import { GlobalBackground } from "@/components/landing/GlobalBackground";
import { HeroSection } from "@/components/landing/HeroSection";
import { WhatHcaDoesSection } from "@/components/landing/WhatHcaDoesSection";
import { ProgramsSection } from "@/components/landing/ProgramsSection";
import { PillarsSection } from "@/components/landing/PillarsSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <GlobalBackground />
      <Navbar />
      <HeroSection />
      <ChallengeSection />
      <FounderSection />
      <WhatHcaDoesSection />
      <ProgramsSection />
      <PillarsSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
