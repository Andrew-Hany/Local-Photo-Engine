"use client";

import React from "react";
import { motion } from "framer-motion";

export const HeroVisuals = () => {
  return (
    <div className="absolute right-[-10%] top-[15%] w-1/2 h-[70%] hidden lg:block perspective-2000">
      {/* Main Background Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
        animate={{ opacity: 1, scale: 1, rotateY: -20 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10"
      >
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200"
          alt="Mountainscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </motion.div>

      {/* Feature Card: AI Recognition */}
      <motion.div
        initial={{ opacity: 0, x: 50, y: 100 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute -left-20 bottom-[-15%] glass p-4 rounded-2xl shadow-2xl border border-white/20 backdrop-blur-xl z-20 animate-float"
      >
        <div className="flex items-center gap-4">
          <div className="flex -space-x-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-muted">
                <img src={`https://i.pravatar.cc/100?u=${i + 10}`} alt="Person" />
              </div>
            ))}
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-foreground/40 font-bold mb-0.5">Recognized</p>
            <p className="text-sm font-bold text-foreground">Family Group</p>
          </div>
        </div>
      </motion.div>

      {/* Feature Card: Intelligent Search */}
      <motion.div
        initial={{ opacity: 0, x: 20, y: 50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute left-[340px] bottom-[-15%] glass-premium py-3 px-5 rounded-[20px] border border-white/10 shadow-2xl z-30 animate-float-delayed flex items-center gap-4 whitespace-nowrap"
      >
        <div className="w-8 h-8 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/60 border border-foreground/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </div>
        <div className="flex flex-col">
          <p className="text-[9px] uppercase tracking-[0.2em] text-foreground/30 font-black mb-0.5">Intelligent Search</p>
          <p className="text-sm font-bold text-foreground/90 italic tracking-tight italic">"sunsets by the beach"</p>
        </div>
      </motion.div>

      {/* Secondary Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
        animate={{ opacity: 1, scale: 1, rotate: 5 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="absolute -right-20 -bottom-10 w-2/3 h-1/2 rounded-2xl overflow-hidden shadow-2xl border border-white/10 z-10"
      >
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1000"
          alt="Beach"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
};
