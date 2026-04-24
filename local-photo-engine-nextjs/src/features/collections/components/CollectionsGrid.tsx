"use client";

import React from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { CollectionCard } from "@/features/shared/cards/AppCards";
import { mockCollections } from "@/data/mock-data";

export const CollectionsGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]">
      {/* Main Featured Card - Top Left */}
      <div className="col-span-2 row-span-2">
        <CollectionCard collection={mockCollections[0]} isBig />
      </div>

      {/* Vertical Tall Card - Top Right */}
      <div className="col-span-1 row-span-2">
        <CollectionCard collection={mockCollections[1]} />
      </div>

      {/* Create New - Square */}
      <motion.div
        whileHover={{ scale: 0.98 }}
        className="rounded-[2rem] border-2 border-dashed border-border flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-muted/50 transition-all bg-muted/20"
      >
        <div className="p-5 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20">
          <Plus className="w-8 h-8" />
        </div>
        <span className="font-black text-xs uppercase tracking-widest text-muted-foreground">New Album</span>
      </motion.div>

      {/* Horizontal Wide Card - Middle Right */}
      <div className="col-span-1 row-span-1">
        <CollectionCard collection={mockCollections[2]} />
      </div>

      {/* Small Squares / Wide Spans to fill everything */}
      <div className="col-span-2 row-span-1">
        <CollectionCard collection={mockCollections[3]} />
      </div>

      <div className="col-span-1 row-span-1">
        <CollectionCard collection={mockCollections[4]} />
      </div>

      <div className="col-span-1 row-span-1">
        <CollectionCard collection={mockCollections[5]} />
      </div>
    </div>
  );
};
