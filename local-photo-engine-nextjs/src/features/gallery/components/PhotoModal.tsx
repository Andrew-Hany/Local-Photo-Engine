"use client";

import React from "react";
import { Heart, Share2, Info, ChevronLeft, ChevronRight, Trash2 } from "lucide-react";
import { Modal } from "@/features/shared/modals/Modal";
import { Photo } from "@/types";

interface PhotoModalProps {
  photo: Photo | null;
  isOpen: boolean;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export const PhotoModal = ({ photo, isOpen, onClose, onNext, onPrev }: PhotoModalProps) => {
  if (!photo) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col lg:flex-row h-full">
        {/* Main Preview */}
        <div className="relative flex-1 bg-black flex items-center justify-center p-4">
           <img
            src={photo.url}
            alt="Preview"
            className="max-w-full max-h-full object-contain shadow-2xl"
          />

          <button 
            onClick={(e) => { e.stopPropagation(); onPrev?.(); }}
            className="absolute left-4 p-3 rounded-full bg-background/20 hover:bg-background/40 text-foreground transition-all border border-border"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={(e) => { e.stopPropagation(); onNext?.(); }}
            className="absolute right-4 p-3 rounded-full bg-background/20 hover:bg-background/40 text-foreground transition-all border border-border"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Sidebar Info */}
        <div className="w-full lg:w-80 bg-card border-l border-border p-6 flex flex-col gap-6 overflow-y-auto">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">Details</h3>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-primary/10 rounded-lg text-muted-foreground hover:text-foreground transition-colors">
                <Heart className={photo.isFavorite ? "fill-red-500 text-red-500" : ""} />
              </button>
              <button className="p-2 hover:bg-primary/10 rounded-lg text-muted-foreground hover:text-foreground transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-primary/10 rounded-lg text-red-400 hover:text-red-300 transition-colors">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="space-y-4 text-sm">
            <div className="flex flex-col gap-1">
              <span className="text-muted-foreground uppercase text-[10px] font-bold tracking-wider">Date</span>
              <span className="text-foreground/80">{photo.date}</span>
            </div>
            
            {photo.people && photo.people.length > 0 && (
              <div className="flex flex-col gap-2">
                <span className="text-muted-foreground uppercase text-[10px] font-bold tracking-wider">People</span>
                <div className="flex flex-wrap gap-2">
                  {photo.people.map((p: string) => (
                    <span key={p} className="px-2 py-1 bg-indigo-500/10 text-indigo-400 rounded-md border border-indigo-500/20">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                    <Info className="w-4 h-4" />
                    <span>More Info</span>
                </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
