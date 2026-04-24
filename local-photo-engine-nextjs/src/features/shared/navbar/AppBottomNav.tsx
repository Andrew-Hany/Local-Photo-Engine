"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Search, Settings as SettingsIcon, 
  LayoutGrid, Users, Heart, Shapes, Upload,
  Grid2X2, Grid3X3
} from "lucide-react";
import { cn } from "@/lib/utils";

export type Tab = "Library" | "Collections" | "People" | "Favorites";

interface AppBottomNavProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
  gridDensity: number;
  setGridDensity: (density: number) => void;
  setIsSettingsOpen: (isOpen: boolean) => void;
}

export const AppBottomNav = ({
  activeTab,
  setActiveTab,
  gridDensity,
  setGridDensity,
  setIsSettingsOpen
}: AppBottomNavProps) => {
  const tabs: { id: Tab; icon: any }[] = [
    { id: "Library", icon: LayoutGrid },
    { id: "Collections", icon: Shapes },
    { id: "People", icon: Users },
    { id: "Favorites", icon: Heart },
  ];

  return (
    <div className="fixed bottom-10 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          type: "spring", 
          damping: 25, 
          stiffness: 200,
          opacity: { duration: 0.2 }
        }}
        className={cn(
          "w-full max-w-4xl glass border border-border shadow-2xl rounded-2xl p-2 pointer-events-auto",
          "bg-background/40 backdrop-blur-3xl"
        )}
      >
        <div className="flex items-center justify-between gap-3 px-2">
          {/* Tabs */}
          <div className="flex items-center gap-1 bg-muted/20 p-1 rounded-xl">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "relative flex items-center gap-2 px-3 sm:px-5 py-2.5 rounded-lg text-sm font-semibold transition-all",
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="tab-bg-app-bottom"
                      className="absolute inset-0 bg-background rounded-lg shadow-sm border border-border -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <tab.icon className={cn("w-4 h-4", isActive ? "text-primary" : "")} />
                  <span className="hidden md:inline">{tab.id}</span>
                </button>
              );
            })}
          </div>

          {/* Search */}
          <div className="flex-1 max-w-xs relative hidden sm:flex">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground opacity-50" />
            <input
              type="text"
              placeholder="Search moments..."
              className="w-full bg-muted/30 border border-border rounded-xl py-2 pl-11 pr-4 text-xs focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-muted/20 p-1 rounded-xl">
              <button 
                onClick={() => setGridDensity(4)}
                className={cn("p-1.5 rounded-lg transition-all", gridDensity === 4 ? "bg-background text-foreground shadow-sm" : "text-muted-foreground")}
              >
                <Grid2X2 className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setGridDensity(6)}
                className={cn("p-1.5 rounded-lg transition-all", gridDensity === 6 ? "bg-background text-foreground shadow-sm" : "text-muted-foreground")}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
            </div>
            <button 
              onClick={() => setIsSettingsOpen(true)}
              className="p-2.5 rounded-xl bg-muted/20 hover:bg-muted/40 border border-border text-foreground transition-all"
            >
              <SettingsIcon className="w-5 h-5" />
            </button>
            <button className="p-2.5 rounded-xl bg-primary text-primary-foreground font-bold hover:scale-105 transition-all shadow-lg shadow-primary/20 group">
              <Upload className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
