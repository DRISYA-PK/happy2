"use client";

import { CtaSection } from "@/components/landing/CtaSection";
import { Footer } from "@/components/landing/Footer";
import { GlassNavbar } from "@/components/landing/GlassNavbar";
import { GlobalBackground } from "@/components/landing/GlobalBackground";
import { HeroSection } from "@/components/landing/HeroSection";
import { PillarsSection } from "@/components/landing/PillarsSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <GlobalBackground />
      <GlassNavbar />
      <HeroSection />
      <PillarsSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
