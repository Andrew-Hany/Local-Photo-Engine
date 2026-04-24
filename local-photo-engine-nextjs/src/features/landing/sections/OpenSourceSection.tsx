"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Heart, Share2 } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const OpenSourceSection = () => {
  return (
    <section id="opensource" className="min-h-screen py-40 bg-background overflow-hidden flex items-center relative">
      {/* Background Contribution Grid - Subtle Light Style */}
      <div className="absolute inset-x-0 top-0 h-full opacity-[0.03] pointer-events-none select-none flex justify-center items-center overflow-hidden">
        <div className="grid grid-cols-20 gap-2 rotate-12 scale-150">
          {Array.from({ length: 400 }).map((_, i) => (
            <div 
              key={i} 
              className={`w-4 h-4 rounded-[2px] ${i % 7 === 0 ? "bg-primary" : i % 5 === 0 ? "bg-primary/40" : "bg-primary/10"}`}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="px-6 py-2 bg-orange-500/5 rounded-full inline-flex items-center gap-2 mb-10 border border-orange-500/10"
        >
          <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
          <span className="text-sm font-bold tracking-tight text-orange-600/60 uppercase text-[10px]">Openly Built</span>
        </motion.div>

        <h2 className="text-7xl font-bold mb-8 tracking-tighter text-foreground">Your data. Your choices. <br /><span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-rose-600 italic">Openly built.</span></h2>
        
        <p className="text-xl text-foreground/50 max-w-2xl mx-auto mb-16 leading-relaxed font-light">
          Local Photo Engine is free and open source. Help us build the future of private AI by adding new features or simply setting it up on your own machine.
        </p>
 
        <div className="flex justify-center flex-wrap gap-6 mb-32">
          <a 
            href="https://github.com/andrewzaki/local-photo-engine" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-10 py-5 bg-foreground text-background rounded-full font-bold text-lg hover:scale-105 transition-all flex items-center gap-3 shadow-2xl shadow-foreground/10"
          >
            <GithubIcon className="w-6 h-6" />
            Contribute Features
          </a>
          <a
            href="https://github.com/andrewzaki/local-photo-engine#setup"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 glass border border-foreground/10 rounded-full font-bold text-lg hover:bg-foreground/5 transition-all text-foreground"
          >
            Setup Guide
          </a>
        </div>
 
        {/* Bento Grid Features - Match Hero Colors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
          {[
            { icon: Globe, title: "Universal", desc: "Native performance on Windows, MacOS, and Linux systems.", color: "text-orange-600", bg: "bg-orange-50" },
            { icon: Heart, title: "Pure OS", desc: "No subscriptions, no hidden trackers. Just 100% transparent code.", color: "text-rose-600", bg: "bg-rose-50" },
            { icon: Share2, title: "Extensible", desc: "Modular architecture. Start building your own custom photo views.", color: "text-orange-600", bg: "bg-orange-50" },
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-[2.5rem] bg-white border border-black/5 hover:border-orange-500/30 transition-all text-left shadow-[0_10px_40px_-20px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-20px_rgba(249,115,22,0.1)]"
            >
              <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                <item.icon className={`w-7 h-7 ${item.color} opacity-60 group-hover:opacity-100 transition-all`} />
              </div>
              <h4 className="font-bold text-xl mb-3 text-foreground">{item.title}</h4>
              <p className="text-foreground/50 leading-relaxed group-hover:text-foreground/70 transition-colors">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
