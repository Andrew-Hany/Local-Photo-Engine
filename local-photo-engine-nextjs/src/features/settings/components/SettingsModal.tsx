"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Modal } from "@/features/shared/modals/Modal";
import { Moon, Sun, Monitor, HardDrive, Database, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SettingsModal = ({ isOpen, onClose }: SettingsModalProps) => {
  const { theme, setTheme } = useTheme();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-8 space-y-8 bg-card text-foreground">
        <div>
          <h2 className="text-2xl font-bold mb-2">Settings</h2>
          <p className="text-muted-foreground text-sm">Manage your local photo engine preferences.</p>
        </div>

        <div className="space-y-6">
          {/* Appearance */}
          <section className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground/60">Appearance</h3>
            <div className="flex gap-4">
              {[
                { id: "light", icon: Sun, label: "Light" },
                { id: "dark", icon: Moon, label: "Dark" },
                { id: "system", icon: Monitor, label: "System" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setTheme(item.id)}
                  className={cn(
                    "flex-1 p-4 rounded-xl border flex flex-col items-center gap-2 transition-all",
                    theme === item.id 
                      ? "bg-primary/10 border-primary text-primary" 
                      : "bg-muted/50 border-border text-muted-foreground hover:bg-muted"
                  )}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="text-xs font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </section>

          {/* Local Folder */}
          <section className="space-y-4">
             <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground/60">Storage</h3>
             <div className="p-4 rounded-xl bg-muted/30 border border-border space-y-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <HardDrive className="w-5 h-5 text-primary" />
                        <div>
                            <p className="text-sm font-medium">Local Library Path</p>
                            <p className="text-xs text-muted-foreground">/Users/andrewzaki/Pictures/LPE-Library</p>
                        </div>
                    </div>
                    <button className="px-3 py-1 bg-primary/10 hover:bg-primary/20 rounded-md text-xs transition-colors">Change</button>
                </div>
                <div className="flex items-center justify-between border-t border-border pt-4">
                    <div className="flex items-center gap-3">
                        <Database className="w-5 h-5 text-primary" />
                        <div>
                            <p className="text-sm font-medium">Cache Size</p>
                            <p className="text-xs text-muted-foreground">4.2 GB used of 10 GB</p>
                        </div>
                    </div>
                    <button className="px-3 py-1 bg-primary/10 hover:bg-primary/20 rounded-md text-xs transition-colors">Clear Cache</button>
                </div>
             </div>
          </section>

          {/* Privacy */}
          <section className="space-y-4">
             <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground/60">Privacy</h3>
             <div className="p-4 rounded-xl bg-muted/30 border border-border flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-green-500" />
                    <div>
                        <p className="text-sm font-medium">Semantic Search Indexing</p>
                        <p className="text-xs text-muted-foreground">Enabled - Local processing only</p>
                    </div>
                </div>
                <div className={cn(
                    "w-10 h-6 rounded-full relative transition-colors",
                    "bg-primary"
                )}>
                    <div className="absolute right-1 top-1 w-4 h-4 bg-white dark:bg-black rounded-full transition-all" />
                </div>
             </div>
          </section>
        </div>

        <div className="pt-4 border-t border-border flex justify-end">
            <button 
              onClick={onClose}
              className="px-6 py-2 bg-primary text-primary-foreground font-bold rounded-lg hover:scale-105 transition-transform"
            >
                Save Changes
            </button>
        </div>
      </div>
    </Modal>
  );
};
