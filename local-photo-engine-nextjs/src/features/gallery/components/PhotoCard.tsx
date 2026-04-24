"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { Photo } from "@/types";

interface PhotoCardProps {
  photo: Photo;
  onClick: (photo: Photo) => void;
}

export const PhotoCard = ({ photo, onClick }: PhotoCardProps) => {
  return (
    <motion.div
      layoutId={photo.id}
      onClick={() => onClick(photo)}
      whileHover={{ scale: 0.98 }}
      className="relative aspect-square cursor-zoom-in overflow-hidden rounded-xl group bg-muted border border-border/5"
    >
      <img
        src={photo.url}
        alt="Photo"
        className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-end p-3">
        {photo.isFavorite && (
          <Heart className="w-4 h-4 text-white fill-white" />
        )}
      </div>
    </motion.div>
  );
};
