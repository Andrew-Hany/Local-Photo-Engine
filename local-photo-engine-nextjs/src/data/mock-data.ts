export const mockPhotos = [
  // Today - Diverse & Reliable
  { id: "t1", url: "/generated/p1.png", date: "Today", isFavorite: true },
  { id: "t2", url: "/generated/p2.png", date: "Today", isFavorite: false },
  { id: "t3", url: "/generated/p3.png", date: "Today", isFavorite: false },
  { id: "t4", url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80", date: "Today", isFavorite: true },
  { id: "t5", url: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?auto=format&fit=crop&w=800&q=80", date: "Today", isFavorite: false },
  { id: "t6", url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80", date: "Today", isFavorite: true },
  { id: "t7", url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80", date: "Today", isFavorite: false },
  { id: "t8", url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=800&q=80", date: "Today", isFavorite: false },
  
  // Yesterday - Different Mix
  { id: "y1", url: "/generated/p4.png", date: "Yesterday", isFavorite: false },
  { id: "y2", url: "/generated/p5.png", date: "Yesterday", isFavorite: true },
  { id: "y3", url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80", date: "Yesterday", isFavorite: false },
  { id: "y4", url: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80", date: "Yesterday", isFavorite: true },
  { id: "y5", url: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=800&q=80", date: "Yesterday", isFavorite: false },
  { id: "y6", url: "https://images.unsplash.com/photo-1439853949127-fa647821eba0?auto=format&fit=crop&w=800&q=80", date: "Yesterday", isFavorite: true },
  { id: "y7", url: "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?auto=format&fit=crop&w=800&q=80", date: "Yesterday", isFavorite: false },

  // April 12, 2026
  { id: "a1", url: "/generated/p1.png", date: "April 12, 2026", isFavorite: false },
  { id: "a2", url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80", date: "April 12, 2026", isFavorite: true },
  { id: "a3", url: "/generated/p1.png", date: "April 12, 2026", isFavorite: false },
  { id: "a4", url: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80", date: "April 12, 2026", isFavorite: false },
  { id: "a5", url: "/generated/p2.png", date: "April 12, 2026", isFavorite: true },
  { id: "a6", url: "/generated/p3.png", date: "April 12, 2026", isFavorite: false },

  // Older
  { id: "o1", url: "/generated/p4.png", date: "March 20, 2026", isFavorite: false },
  { id: "o2", url: "/generated/p2.png", date: "March 20, 2026", isFavorite: true },
  { id: "o3", url: "/generated/p5.png", date: "Jan 5, 2026", isFavorite: true },
  { id: "o4", url: "/generated/p3.png", date: "Jan 5, 2026", isFavorite: false },
];

export const mockCollections = [
  { id: "1", name: "Summer Trip 2025", count: 124, cover: "/generated/summer.png" },
  { id: "2", name: "Nature Wonders", count: 89, cover: "/generated/nature.png" },
  { id: "3", name: "Urban Vibes", count: 230, cover: "/generated/urban.png" },
  { id: "4", name: "Architecture", count: 112, cover: "/generated/architecture.png" },
  { id: "5", name: "Family", count: 450, cover: "/generated/p4.png" },
  { id: "6", name: "Pets", count: 56, cover: "/generated/p5.png" },
];

export const mockPeople = [
  { id: "1", name: "Alex Johnson", count: 243, avatar: "https://i.pravatar.cc/150?u=alex" },
  { id: "2", name: "Sarah Smith", count: 156, avatar: "https://i.pravatar.cc/150?u=sarah" },
  { id: "3", name: "Michael Chen", count: 89, avatar: "https://i.pravatar.cc/150?u=michael" },
  { id: "4", name: "Emma Wilson", count: 312, avatar: "https://i.pravatar.cc/150?u=emma" },
  { id: "5", name: "David Miller", count: 67, avatar: "https://i.pravatar.cc/150?u=david" },
];

export const landingFeatures = [
  {
    title: "AI Semantic Search",
    description: "Search for 'sunset at the beach' or 'dog playing' across your local library instantly.",
    icon: "Search"
  },
  {
    title: "Privacy First",
    description: "All processing happens 100% locally. Your photos never leave your device.",
    icon: "Shield"
  },
  {
    title: "Facial Recognition",
    description: "Automatically group photos by people without cloud processing.",
    icon: "User"
  },
  {
    title: "Vector Storage",
    description: "High-performance local vector database for lightning-fast retrieval.",
    icon: "Database"
  },
  {
    title: "Smart Albums",
    description: "Auto-curated collections based on events, locations, and time.",
    icon: "Sparkles"
  },
  {
    title: "Cross-Platform",
    description: "Seamlessly manage your local library across all your desktop devices.",
    icon: "Monitor"
  }
];
