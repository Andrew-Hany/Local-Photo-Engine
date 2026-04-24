"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bg: string;
  image: string;
  index: number;
}

export const FeatureCard = ({
  title,
  subtitle,
  description,
  icon: Icon,
  color,
  bg,
  image,
  index
}: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative flex flex-col h-[400px] md:h-[450px] lg:h-[500px] rounded-[2.5rem] overflow-hidden bg-white dark:bg-card border border-foreground/5 shadow-sm hover:shadow-2xl transition-all duration-500"
    >
      <div className="h-1/2 w-full overflow-hidden">
        <img 
          src={image} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          alt={title} 
        />
      </div>

      <div className="flex-1 p-8 flex flex-col justify-between">
        <div>
          <div className={`w-10 h-10 ${bg} rounded-xl flex items-center justify-center mb-4`}>
            <Icon className={`w-5 h-5 ${color}`} />
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/30 mb-1">{subtitle}</p>
          <h3 className="text-2xl font-bold mb-2 tracking-tight">{title}</h3>
          <p className="text-foreground/60 text-sm leading-relaxed line-clamp-3">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};
