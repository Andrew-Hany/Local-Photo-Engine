"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, EyeOff, HardDrive } from "lucide-react";

export const PrivacySection = () => {
  return (
    <section className="min-h-screen py-40 bg-background overflow-hidden relative flex items-center">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-6xl font-bold mb-8 leading-tight tracking-tight">Your library <br />stays yours.</h2>
              
              <ul className="space-y-6">
                {[
                  { icon: EyeOff, text: "No cloud uploads.", color: "text-orange-500" },
                  { icon: HardDrive, text: "Storage on your disk.", color: "text-green-500" },
                  { icon: Shield, text: "Zero data tracking.", color: "text-blue-500" },
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-center gap-4 text-xl font-medium text-foreground/80"
                  >
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                    {item.text}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="flex-1 relative perspective-2000">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative w-full aspect-[4/5] max-w-2xl mx-auto flex items-center justify-center will-change-transform"
            >
              {/* Central Glass Vault */}
              <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                <motion.div 
                  initial={{ opacity: 0, y: 40, rotateY: 15 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  transition={{ 
                    duration: 1.8, 
                    delay: 0.4, 
                    ease: [0.23, 1, 0.32, 1] 
                  }}
                  className="w-full h-full max-h-[500px] max-w-[400px] glass-premium rounded-[4rem] border border-white/30 shadow-[0_32px_120px_-20px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center relative overflow-hidden will-change-transform"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-primary/10 opacity-50" />
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6 relative z-20">
                    <Shield className="w-12 h-12 text-primary animate-pulse" />
                  </div>
                  <p className="text-sm font-bold tracking-[0.4em] uppercase text-primary/40 relative z-20">Secure Local Vault</p>
                  
                  {/* Decorative Scan Line */}
                  <motion.div 
                    animate={{ top: ["0%", "100%", "0%"] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent z-10"
                  />
                </motion.div>
              </div>

              {/* Dynamic Photo Cloud - Layered behind and around the glass */}
              <div className="absolute inset-0 z-0">
                {[
                  { x: -20, y: -30, scale: 0.7, delay: 0.1, img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" },
                  { x: 30, y: -20, scale: 0.8, delay: 0.3, img: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?auto=format&fit=crop&w=400&q=80" },
                  { x: -35, y: 10, scale: 0.6, delay: 0.5, img: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=400&q=80" },
                  { x: 40, y: 25, scale: 0.75, delay: 0.7, img: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=400&q=80" },
                  { x: 0, y: 35, scale: 0.65, delay: 0.9, img: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=400&q=80" },
                ].map((photo, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 0, y: 40, scale: 0.5 }}
                    whileInView={{ 
                      opacity: 1, 
                      x: `${photo.x}%`, 
                      y: `${photo.y}%`, 
                      scale: photo.scale,
                    }}
                    animate={{
                      y: [`${photo.y}%`, `${photo.y - 2}%`, `${photo.y}%`]
                    }}
                    transition={{
                      whileInView: { 
                        duration: 2, 
                        delay: photo.delay, 
                        ease: [0.23, 1, 0.32, 1] 
                      },
                      animate: { 
                        duration: 5 + i, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 blur-[1px] opacity-40 hover:opacity-100 hover:blur-0 transition-all duration-700 origin-center rotate-3">
                      <img src={photo.img} alt="Memories" className="w-full h-full object-cover" />
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Floating Status Badges */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                animate={{ y: [0, -15, 0] }} 
                transition={{ 
                  whileInView: { duration: 1.2, delay: 0.8, ease: "easeOut" },
                  animate: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute top-[15%] -right-10 glass-premium px-6 py-4 rounded-[2rem] z-30 shadow-2xl border border-white/40"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40 mb-0.5">Status</span>
                    <span className="text-sm font-bold text-foreground">100% On-Device</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 animate={{ y: [0, 15, 0] }} 
                 transition={{ 
                   whileInView: { duration: 1.2, delay: 1, ease: "easeOut" },
                   animate: { duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }
                 }}
                 className="absolute bottom-[15%] -left-10 glass-premium px-6 py-4 rounded-[2rem] z-30 shadow-2xl border border-white/40"
              >
                 <div className="flex items-center gap-3">
                   <HardDrive className="w-5 h-5 text-primary" />
                   <div className="flex flex-col">
                     <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40 mb-0.5">Hardware</span>
                     <span className="text-sm font-bold text-foreground font-display">Neural Engine Active</span>
                   </div>
                 </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
