"use client";

import React from "react";
import { HeroSection } from "@/features/landing/sections/HeroSection";
import { FeaturesSection } from "@/features/landing/sections/FeaturesSection";
import { ImmersiveGallery } from "@/features/landing/sections/ImmersiveGallery";
import { PrivacySection } from "@/features/landing/sections/PrivacySection";
import { OpenSourceSection } from "@/features/landing/sections/OpenSourceSection";
import { LandingFooter } from "@/features/landing/sections/LandingFooter";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-white">
      <div className="relative">
        <HeroSection />
        
        <div id="features" className="scroll-mt-32">
          <FeaturesSection />
        </div>
        
        <div id="demo" className="scroll-mt-32">
          <ImmersiveGallery />
        </div>
        
        <PrivacySection />
        
        <div id="opensource" className="scroll-mt-32">
          <OpenSourceSection />
        </div>
        
        <LandingFooter />
      </div>
    </main>
  );
}
