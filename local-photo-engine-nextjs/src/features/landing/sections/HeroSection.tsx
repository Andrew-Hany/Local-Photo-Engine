"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { HeroVisuals } from "../components/HeroVisuals";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-primary text-sm font-medium mb-6 border border-primary/10">
              Private AI Photo Platform
            </span>
            <h1 className="text-7xl md:text-8xl font-bold tracking-tight mb-6 leading-[1.1]">
              Your memories, <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-rose-500 to-primary italic font-medium py-4 pr-4 -my-4 inline-block">beautifully</span> organized.
            </h1>
            <p className="text-xl md:text-2xl text-foreground/60 max-w-2xl mb-10 leading-relaxed font-light">
              Local Photo Engine uses secure, on-device AI to curate your life. No cloud, no tracking, just your photos.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/app"
              className="px-8 py-4 bg-foreground text-background rounded-full font-bold text-lg hover:scale-105 transition-all flex items-center gap-2 shadow-xl shadow-foreground/10"
            >
              Open App <ChevronRight className="w-5 h-5" />
            </Link>
            <a
              href="https://github.com/andrewzaki/local-photo-engine"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 glass text-foreground rounded-full font-bold text-lg hover:bg-foreground/5 transition-all border border-foreground/10 flex items-center gap-2"
            >
              <GithubIcon className="w-5 h-5" />
              GitHub
            </a>
          </motion.div>
        </div>
      </div>

      <HeroVisuals />
    </section>
  );
};
