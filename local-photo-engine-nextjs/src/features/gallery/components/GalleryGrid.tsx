"use client";

import React, { useMemo } from "react";
import { PhotoCard } from "./PhotoCard";
import { StickyDateHeader } from "./StickyDateHeader";

interface GalleryGridProps {
  photos: any[];
  onPhotoClick: (photo: any) => void;
  gridDensity: number;
}

export const GalleryGrid = ({ photos, onPhotoClick, gridDensity }: GalleryGridProps) => {
  const groupedPhotos = useMemo(() => {
    const groups: Record<string, any[]> = {};
    photos.forEach((photo) => {
      if (!groups[photo.date]) groups[photo.date] = [];
      groups[photo.date].push(photo);
    });
    return groups;
  }, [photos]);

  return (
    <div className="space-y-16">
      {Object.entries(groupedPhotos).map(([date, datePhotos]) => (
        <div key={date} className="relative">
          <StickyDateHeader date={date} count={datePhotos.length} />

          <div
            className="grid gap-4 sm:gap-6 mt-0"
            style={{
              gridTemplateColumns: `repeat(${gridDensity}, minmax(0, 1fr))`
            }}
          >
            {datePhotos.map((photo) => (
              <PhotoCard key={photo.id} photo={photo} onClick={onPhotoClick} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
