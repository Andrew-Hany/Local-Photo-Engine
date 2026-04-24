"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GalleryGrid } from "@/features/gallery/components/GalleryGrid";
import { PhotoModal } from "@/features/gallery/components/PhotoModal";
import { SettingsModal } from "@/features/settings/components/SettingsModal";
import { CollectionsGrid } from "@/features/collections/components/CollectionsGrid";
import { PeopleGrid } from "@/features/people/components/PeopleGrid";
import { FavoritesGrid } from "@/features/favorites/components/FavoritesGrid";
import { AppBottomNav, type Tab } from "@/features/shared/navbar/AppBottomNav";
import { mockPhotos } from "@/data/mock-data";
import { cn } from "@/lib/utils";

// Tab type is now imported from AppBottomNav

export default function AppPage() {
  const [activeTab, setActiveTab] = useState<Tab>("Library");
  const [gridDensity, setGridDensity] = useState(6);
  const [selectedPhoto, setSelectedPhoto] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);


  const handlePhotoClick = (photo: any) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  // Tab configuration is now handled in AppBottomNav

  const renderContent = () => {
    switch (activeTab) {
      case "Library":
        return (
          <GalleryGrid 
            photos={mockPhotos} 
            onPhotoClick={handlePhotoClick} 
            gridDensity={gridDensity} 
          />
        );
      case "Collections":
        return <CollectionsGrid />;
      case "People":
        return <PeopleGrid />;
      case "Favorites":
        return (
          <FavoritesGrid 
            onPhotoClick={handlePhotoClick} 
            gridDensity={gridDensity} 
          />
        );
      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <AppBottomNav 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        gridDensity={gridDensity}
        setGridDensity={setGridDensity}
        setIsSettingsOpen={setIsSettingsOpen}
      />

      {/* Main Content Area */}
      <div className="pt-28 pb-40 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <PhotoModal
        photo={selectedPhoto}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <SettingsModal 
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />
    </main>
  );
}
