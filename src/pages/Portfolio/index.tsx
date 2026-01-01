import React, { useState, useEffect, useCallback } from 'react';
import { GalleryItem, PortfolioFolder } from '../../types';

import { Hero } from './Hero';
import { FolderView } from './FolderView';
import { GalleryView } from './GalleryView';
import { Lightbox } from './Lightbox';

interface PortfolioPageProps {
  initialCategory?: string;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ initialCategory = 'All' }) => {
  // State for Navigation & View Modes
  const [activeTab, setActiveTab] = useState(initialCategory); // Controls the top filter tabs
  const [viewMode, setViewMode] = useState<'folders' | 'gallery'>('folders'); // Controls whether we see folders or photos
  const [openedFolderTitle, setOpenedFolderTitle] = useState<string | null>(null); // Which project folder is currently open

  // State for Lightbox & Layout
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [numCols, setNumCols] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  // Sync activeTab if initialCategory changes prop
  useEffect(() => {
    setActiveTab(initialCategory);
  }, [initialCategory]);

  // Extended data for the full portfolio
  const allItems: GalleryItem[] = [
    // { id: 1, image: "https://picsum.photos/id/1027/800/1200", title: "Rohan & Sneha", category: "Wedding" },
    // { id: 2, image: "https://picsum.photos/id/433/800/800", title: "The Golden Ring", category: "Jewellery Photography" },
    // { id: 3, image: "https://picsum.photos/id/338/800/1200", title: "Walk Together", category: "Pre-wedding" },
    // { id: 4, image: "https://picsum.photos/id/250/800/800", title: "Heirloom Scent", category: "Product shoot" },
    // { id: 5, image: "https://picsum.photos/id/106/800/800", title: "Grand Reception", category: "Reception" },
    // { id: 6, image: "https://picsum.photos/id/64/800/1200", title: "She Said Yes", category: "Engagement" },
    // { id: 7, image: "https://picsum.photos/id/1012/800/1200", title: "Forest Tales", category: "Pre-wedding" },
    // { id: 8, image: "https://picsum.photos/id/1059/800/800", title: "Birthday Bash", category: "Birthday" },
    // { id: 9, image: "https://picsum.photos/id/349/800/1200", title: "Haldi Vibes", category: "Haldi" },
    // { id: 10, image: "https://picsum.photos/id/334/800/800", title: "First Rice", category: "Rice Ceremony" },
    // { id: 11, image: "https://picsum.photos/id/292/800/800", title: "Kitchen Tools", category: "Product shoot" },
    // { id: 12, image: "https://picsum.photos/id/177/800/1200", title: "Mountain Vows", category: "Wedding" },
    // { id: 13, image: "https://picsum.photos/id/449/800/1200", title: "City Motion", category: "Reception" },
    // { id: 14, image: "https://picsum.photos/id/129/800/800", title: "Intimate Moments", category: "Engagement" },
    // { id: 15, image: "https://picsum.photos/id/65/800/1200", title: "Haldi Joy", category: "Haldi" },
    // { id: 16, image: "https://picsum.photos/id/158/800/1200", title: "Golden Birthday", category: "Birthday" },
    // { id: 17, image: "https://picsum.photos/id/1011/800/800", title: "Ceremonial Blessings", category: "Rice Ceremony" },
    // { id: 18, image: "https://picsum.photos/id/1070/800/800", title: "Bridal Jewellery", category: "Jewellery Photography" },
    // { id: 19, image: "https://picsum.photos/id/203/800/800", title: "Corporate Gala", category: "Event" },

    // Wedding: Biswanath & Niketa
    { id: 101, image: "/src/assets/portfolio/Wedding/Biswanath & Niketa/post 1.jpg", title: "Biswanath & Niketa", category: "Wedding" },
    { id: 102, image: "/src/assets/portfolio/Wedding/Biswanath & Niketa/post 2.jpg", title: "Biswanath & Niketa", category: "Wedding" },
    { id: 103, image: "/src/assets/portfolio/Wedding/Biswanath & Niketa/post 3.jpg", title: "Biswanath & Niketa", category: "Wedding" },
    { id: 104, image: "/src/assets/portfolio/Wedding/Biswanath & Niketa/post 4.jpg", title: "Biswanath & Niketa", category: "Wedding" },
    { id: 105, image: "/src/assets/portfolio/Wedding/Biswanath & Niketa/post 5.jpg", title: "Biswanath & Niketa", category: "Wedding" },
    { id: 106, image: "/src/assets/portfolio/Wedding/Biswanath & Niketa/post 6.jpg", title: "Biswanath & Niketa", category: "Wedding" },
    { id: 107, image: "/src/assets/portfolio/Wedding/Biswanath & Niketa/post 7.jpg", title: "Biswanath & Niketa", category: "Wedding" },
    { id: 108, image: "/src/assets/portfolio/Wedding/Biswanath & Niketa/post 8.jpg", title: "Biswanath & Niketa", category: "Wedding" },
    { id: 109, image: "/src/assets/portfolio/Wedding/Biswanath & Niketa/post 9.jpg", title: "Biswanath & Niketa", category: "Wedding" },
    { id: 110, image: "/src/assets/portfolio/Wedding/Biswanath & Niketa/post 10.jpg", title: "Biswanath & Niketa", category: "Wedding" },

    // Engagement: Indranil & Plavita
    { id: 201, image: "/src/assets/portfolio/Engagement/Indranil & Plavita/post 1.jpg", title: "Indranil & Plavita", category: "Engagement" },
    { id: 202, image: "/src/assets/portfolio/Engagement/Indranil & Plavita/post 2.jpg", title: "Indranil & Plavita", category: "Engagement" },
    { id: 203, image: "/src/assets/portfolio/Engagement/Indranil & Plavita/post 3.jpg", title: "Indranil & Plavita", category: "Engagement" },
    { id: 204, image: "/src/assets/portfolio/Engagement/Indranil & Plavita/post 4.jpg", title: "Indranil & Plavita", category: "Engagement" },
    { id: 205, image: "/src/assets/portfolio/Engagement/Indranil & Plavita/post 5.jpg", title: "Indranil & Plavita", category: "Engagement" },
    { id: 206, image: "/src/assets/portfolio/Engagement/Indranil & Plavita/post 6.jpg", title: "Indranil & Plavita", category: "Engagement" },
    { id: 207, image: "/src/assets/portfolio/Engagement/Indranil & Plavita/post 7.jpg", title: "Indranil & Plavita", category: "Engagement" },
    { id: 208, image: "/src/assets/portfolio/Engagement/Indranil & Plavita/post 8.jpg", title: "Indranil & Plavita", category: "Engagement" },
    { id: 209, image: "/src/assets/portfolio/Engagement/Indranil & Plavita/post 9.jpg", title: "Indranil & Plavita", category: "Engagement" },
    { id: 210, image: "/src/assets/portfolio/Engagement/Indranil & Plavita/post 10.jpg", title: "Indranil & Plavita", category: "Engagement" },
  ];

  // 1. Define Data Structure
  const uniqueCategories = Array.from(new Set(allItems.map(item => item.category || 'Uncategorized')));
  const categories = ['All', ...uniqueCategories];

  const uniqueProjectTitles = Array.from(new Set(allItems.map(item => item.title || 'Untitled')));
  const projectFolders: PortfolioFolder[] = uniqueProjectTitles.map(title => {
    const items = allItems.filter(i => i.title === title);
    return {
      title: title,
      category: items[0].category, // Assume project shares one category
      count: items.length,
      coverImage: items[0].image,
      items: items
    };
  });

  // 2. Logic for what to display based on state
  const displayedFolders = activeTab === 'All'
    ? projectFolders
    : projectFolders.filter(f => f.category === activeTab);

  const galleryImages = openedFolderTitle
    ? allItems.filter(item => item.title === openedFolderTitle)
    : [];

  // 3. Layout Helpers (Masonry)
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth >= 1024) setNumCols(3);
        else if (window.innerWidth >= 768) setNumCols(2);
        else setNumCols(1);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const columns = Array.from({ length: numCols }, (): GalleryItem[] => []);
  galleryImages.forEach((item, index) => {
    columns[index % numCols].push(item);
  });

  // 4. Interaction Handlers
  const handleTabChange = (cat: string) => {
    setIsAnimating(true);
    setActiveTab(cat);
    setViewMode('folders'); // Reset to folder view when changing tabs
    setOpenedFolderTitle(null);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleFolderClick = (folderTitle: string) => {
    setOpenedFolderTitle(folderTitle);
    setViewMode('gallery');
    window.scrollTo({ top: 400, behavior: 'smooth' }); // Scroll past hero
  };

  const handleBackToFolders = () => {
    setViewMode('folders');
    setOpenedFolderTitle(null);
  };

  const navigateLightbox = useCallback((direction: 'next' | 'prev') => {
    if (!selectedItem) return;
    const currentIndex = galleryImages.findIndex(item => item.id === selectedItem.id);
    if (currentIndex === -1) return;

    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % galleryImages.length;
    } else {
      newIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    }
    setSelectedItem(galleryImages[newIndex]);
  }, [selectedItem, galleryImages]);

  // Lightbox key events
  useEffect(() => {
    if (!selectedItem) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedItem(null);
      if (e.key === 'ArrowRight') navigateLightbox('next');
      if (e.key === 'ArrowLeft') navigateLightbox('prev');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem, navigateLightbox]);

  // Prevent background scroll when lightbox is open
  useEffect(() => {
    if (selectedItem) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedItem]);

  return (
    <div className="bg-white dark:bg-dark-900 min-h-screen transition-colors duration-300">
      <Hero />

      {/* Main Content */}
      <div className="container mx-auto px-6 py-20 min-h-[500px]">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 animate-in fade-in slide-in-from-bottom-2 duration-700">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => handleTabChange(cat)}
              className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 ${activeTab === cat
                ? 'bg-gold-500 text-black shadow-md transform scale-105'
                : 'text-gray-500 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-white/5 hover:bg-white/50 dark:hover:bg-white/10'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* View Content */}
        <div className={`transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          {viewMode === 'folders' ? (
            <FolderView
              folders={displayedFolders}
              onFolderClick={handleFolderClick}
            />
          ) : (
            <GalleryView
              openedFolderTitle={openedFolderTitle || ''}
              activeTab={activeTab}
              handleBackToFolders={handleBackToFolders}
              columns={columns}
              setSelectedItem={setSelectedItem}
            />
          )}
        </div>
      </div>

      {selectedItem && (
        <Lightbox
          selectedItem={selectedItem}
          onClose={() => setSelectedItem(null)}
          onNext={() => navigateLightbox('next')}
          onPrev={() => navigateLightbox('prev')}
        />
      )}
    </div>
  );
};
