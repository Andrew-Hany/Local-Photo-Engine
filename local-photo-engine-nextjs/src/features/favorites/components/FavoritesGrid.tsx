"use client";

import React from "react";
import { GalleryGrid } from "@/features/gallery/components/GalleryGrid";
import { mockPhotos } from "@/data/mock-data";

interface FavoritesGridProps {
  onPhotoClick: (photo: any) => void;
  gridDensity: number;
}

export const FavoritesGrid = ({ onPhotoClick, gridDensity }: FavoritesGridProps) => {
  const favoritePhotos = mockPhotos.filter(p => p.isFavorite);
  
  return (
    <GalleryGrid 
      photos={favoritePhotos} 
      onPhotoClick={onPhotoClick} 
      gridDensity={gridDensity} 
    />
  );
};
