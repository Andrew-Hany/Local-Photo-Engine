"use client";

import React, { useRef } from "react";
import { MapPin, ChevronRight } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useTheme } from "next-themes";

interface StickyDateHeaderProps {
  date: string;
  count: number;
}

export const StickyDateHeader = ({ date, count }: StickyDateHeaderProps) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  // High-precision scroll tracking - tighter range for "snappier" intersection
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start 100px", "start 0px"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 200, damping: 25, restDelta: 0.001 });

  const isDark = resolvedTheme === "dark";
  const bgRgb = isDark ? "15, 15, 15" : "245, 245, 245";
  const borderRgb = isDark ? "255, 255, 255" : "0, 0, 0";

  // Dynamic values to align with the Navbar at top-6
  const bgOpacity = useTransform(smoothProgress, [0.6, 1], [0, 0.98]); // Starts converting as it hits the "line"
  const blurAmount = useTransform(smoothProgress, [0.6, 1], [0, 40]); 
  const shadowOpacity = useTransform(smoothProgress, [0.6, 1], [0, 0.02]); 
  const pt = useTransform(smoothProgress, [0, 1], ["40px", "31px"]); // Perfectly centers the Date+Location block with Navbar (at 47px)
  const pb = useTransform(smoothProgress, [0, 1], ["40px", "27px"]); // Total height 88px (31+30+27)
  const borderOpacity = useTransform(smoothProgress, [0.7, 1], [0, 0.1]);

  return (
    <motion.div
      ref={headerRef}
      style={{
        backgroundColor: useTransform(bgOpacity, (v) => `rgba(${bgRgb}, ${v})`),
        paddingTop: pt,
        paddingBottom: pb,
        borderBottomColor: useTransform(borderOpacity, (v) => `rgba(${borderRgb}, ${v})`),
        backdropFilter: useTransform(blurAmount, (v) => `blur(${v}px)`),
        boxShadow: useTransform(shadowOpacity, (v) => `0 25px 50px -12px rgba(0, 0, 0, ${v})`),
      }}
      // Exactly matches PhotoCard's rounded-xl for a "Lego-like" stackable feel
      className="sticky top-0 z-40 border-b border-transparent rounded-b-xl group"
    >
      <div className="flex items-center justify-between px-6">
        {/* Left: Date - Aligned to Navbar level */}
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <motion.h3
              style={{ fontSize: useTransform(smoothProgress, [0, 1], ["36px", "16px"]) }}
              className="font-black tracking-tight text-foreground flex items-center gap-2 origin-left"
            >
              {date}
              <ChevronRight className="w-4 h-4 text-primary opacity-40" />
            </motion.h3>
            <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest overflow-hidden mt-1">
              <MapPin className="w-3 h-3 text-primary/60" />
              <span>San Francisco, CA</span>
            </div>
          </div>
        </div>

        {/* Right: Actions - Aligned to Navbar level */}
        <div className="flex items-center gap-6">
          <motion.span
            style={{ fontSize: useTransform(smoothProgress, [0, 1], ["12px", "10px"]) }}
            className="font-black text-muted-foreground/50 uppercase tracking-[0.2em]"
          >
            {count} items
          </motion.span>
          <motion.button
            style={{
              scale: useTransform(smoothProgress, [0, 1], [1, 0.8]),
              paddingLeft: useTransform(smoothProgress, [0, 1], ["24px", "16px"]),
              paddingRight: useTransform(smoothProgress, [0, 1], ["24px", "16px"]),
            }}
            className="font-bold rounded-full transition-all border text-primary border-primary/20 hover:bg-primary/5 py-1.5 text-xs shadow-sm"
          >
            Select
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
