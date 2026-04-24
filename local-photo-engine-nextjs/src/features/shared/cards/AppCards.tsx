"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Collection, Person } from "@/types";

export const CollectionCard = ({ collection, isBig }: { collection: Collection, isBig?: boolean }) => (
  <motion.div
    whileHover={{ scale: 0.99, y: -4 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="group relative h-full w-full rounded-[2rem] overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all"
  >
    <img
      src={collection.cover}
      alt={collection.name}
      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
    
    <div className={cn(
        "absolute bottom-0 left-0 right-0 p-6 flex flex-col",
        isBig ? "md:p-10" : "p-6"
    )}>
      <h3 className={cn(
        "font-black text-white leading-tight",
        isBig ? "text-3xl md:text-5xl mb-2" : "text-xl md:text-2xl mb-1"
      )}>
        {collection.name}
      </h3>
      <div className="flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        <p className="text-white/80 text-sm font-bold uppercase tracking-widest">{collection.count} photos</p>
      </div>
    </div>

    {/* Glass badge for big cards */}
    {isBig && (
        <div className="absolute top-6 right-6 px-4 py-2 rounded-full glass border border-white/20 text-white text-[10px] font-black uppercase tracking-widest">
            Featured
        </div>
    )}
  </motion.div>
);

export const PersonCard = ({ person }: { person: Person }) => (
  <motion.div
    whileHover={{ y: -8, scale: 1.02 }}
    className="bg-card border border-border p-8 rounded-[2rem] flex flex-col items-center text-center group cursor-pointer hover:bg-primary/5 transition-all shadow-sm hover:shadow-xl"
  >
    <div className="relative w-28 h-28 mb-6 group">
      <div className="absolute inset-0 rounded-full bg-primary/20 scale-125 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <img
        src={person.avatar}
        alt={person.name}
        className="relative w-full h-full rounded-full object-cover ring-4 ring-border group-hover:ring-primary transition-all duration-500"
      />
    </div>
    <h3 className="text-xl font-black text-foreground group-hover:text-primary transition-colors">{person.name}</h3>
    <div className="flex items-center gap-1.5 mt-1">
        <div className="w-1 h-1 rounded-full bg-muted-foreground/30" />
        <p className="text-muted-foreground/60 text-xs font-bold uppercase tracking-widest">{person.count} items</p>
    </div>
  </motion.div>
);
