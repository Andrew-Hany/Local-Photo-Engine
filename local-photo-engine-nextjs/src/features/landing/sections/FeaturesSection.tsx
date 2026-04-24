"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Shield, Sparkles } from "lucide-react";
import { FeatureCard } from "../components/FeatureCard";

const features = [
  {
    title: "Privacy First",
    subtitle: "On-Device AI",
    description: "Every pixel is analyzed locally on your machine. Your personal data never touches the cloud.",
    icon: Shield,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Smart Discovery",
    subtitle: "Semantic Search",
    description: 'Find photos with natural language. Search for "me at the beach" or "mountains in winter" instantly.',
    icon: Search,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Effortless Control",
    subtitle: "Auto-Organization",
    description: "Smart albums for people, places, and events are created automatically. Your library, perfectly structured.",
    icon: Sparkles,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=800",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="h-screen w-full bg-background flex flex-col justify-center items-center py-10 overflow-hidden">
      <div className="container mx-auto px-6 h-full flex flex-col justify-center max-w-7xl">
        <div className="mb-12 text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-4 tracking-tighter"
          >
            Built for privacy. <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-rose-500 to-primary italic py-4 pr-4 -my-4 inline-block">Fast by design.</span>
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto md:mx-0"
          >
            Local Photo Engine is a desktop-first platform that gives you total control over your digital legacy.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 h-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
