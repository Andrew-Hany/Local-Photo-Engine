"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=800",
];

export const ImmersiveGallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section ref={containerRef} id="demo" className="min-h-screen py-32 bg-black text-white overflow-hidden flex flex-col justify-center gap-10">
      <div className="container mx-auto px-6 mb-10 text-center">
        <h2 className="text-6xl font-bold mb-6 tracking-tight">Every photo has a story.</h2>
        <p className="text-xl text-white/40 max-w-2xl mx-auto">
          Bring your library to life with cinematic transitions and an interface that disappears.
        </p>
      </div>

      <motion.div 
        style={{ x }} 
        className="flex gap-6 px-10"
      >
        {images.map((src, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, y: -10 }}
            className={`flex-none w-[400px] h-[550px] rounded-3xl overflow-hidden shadow-2xl border border-white/5 ${
              i % 2 === 0 ? "mt-20" : ""
            }`}
          >
            <img src={src} alt="Gallery" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity p-8 flex flex-col justify-end">
              <p className="text-[10px] uppercase tracking-widest text-white/60 font-bold mb-1">Gallery</p>
              <h4 className="text-xl font-bold">Memory {i + 1}</h4>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
