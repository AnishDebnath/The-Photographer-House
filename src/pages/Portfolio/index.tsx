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
  // Data for the full portfolio organized by project folders
  const projectFolders: PortfolioFolder[] = [
    {
      title: "Biswanath & Niketa",
      category: "Wedding",
      coverImage: "/src/assets/portfolio/Wedding/Biswanath & Niketa/biswanath niketa wedding (8).jpg",
      count: 10,
      items: Array.from({ length: 10 }, (_, i) => ({
        id: 101 + i,
        image: `/src/assets/portfolio/Wedding/Biswanath & Niketa/biswanath niketa wedding (${i + 1}).jpg`,
        title: "Biswanath & Niketa",
        category: "Wedding"
      }))
    },
    {
      title: "Arijit & Susmita",
      category: "Wedding",
      coverImage: "/src/assets/portfolio/Wedding/Arijit & Susmita/arijit susmita wedding (2).jpg",
      count: 13,
      items: Array.from({ length: 13 }, (_, i) => ({
        id: 201 + i,
        image: `/src/assets/portfolio/Wedding/Arijit & Susmita/arijit susmita wedding (${i + 1}).jpg`,
        title: "Arijit & Susmita",
        category: "Wedding"
      }))
    },
    {
      title: "Ayesha & Eliyaz",
      category: "Wedding",
      coverImage: "/src/assets/portfolio/Wedding/Ayesha & Eliyaz/ayesha eliyaz wedding (8).jpg",
      count: 10,
      items: Array.from({ length: 10 }, (_, i) => ({
        id: 301 + i,
        image: `/src/assets/portfolio/Wedding/Ayesha & Eliyaz/ayesha eliyaz wedding (${i + 1}).jpg`,
        title: "Ayesha & Eliyaz",
        category: "Wedding"
      }))
    },
    {
      title: "Pooja & Anik",
      category: "Wedding",
      coverImage: "/src/assets/portfolio/Wedding/Pooja & Anik/pooja anik wedding (7).jpg",
      count: 7,
      items: Array.from({ length: 7 }, (_, i) => ({
        id: 401 + i,
        image: `/src/assets/portfolio/Wedding/Pooja & Anik/pooja anik wedding (${i + 1}).jpg`,
        title: "Pooja & Anik",
        category: "Wedding"
      }))
    },
    {
      title: "Rajasree & Bishal",
      category: "Wedding",
      coverImage: "/src/assets/portfolio/Wedding/Rajasree & Bishal/rajasree bishal wedding (17).jpg",
      count: 50,
      items: Array.from({ length: 50 }, (_, i) => ({
        id: 501 + i,
        image: `/src/assets/portfolio/Wedding/Rajasree & Bishal/rajasree bishal wedding (${i + 1}).jpg`,
        title: "Rajasree & Bishal",
        category: "Wedding"
      }))
    },
    {
      title: "Sourav & Swagata",
      category: "Wedding",
      coverImage: "/src/assets/portfolio/Wedding/Sourav & Swagata/sourav swagata wedding (8).jpg",
      count: 10,
      items: Array.from({ length: 10 }, (_, i) => ({
        id: 601 + i,
        image: `/src/assets/portfolio/Wedding/Sourav & Swagata/sourav swagata wedding (${i + 1}).jpg`,
        title: "Sourav & Swagata",
        category: "Wedding"
      }))
    },
    {
      title: "Indranil & Plavita",
      category: "Engagement",
      coverImage: "/src/assets/portfolio/Engagement/Indranil & Plavita/indranil plavita engagement (10).jpg",
      count: 10,
      items: Array.from({ length: 10 }, (_, i) => ({
        id: 701 + i,
        image: `/src/assets/portfolio/Engagement/Indranil & Plavita/indranil plavita engagement (${i + 1}).jpg`,
        title: "Indranil & Plavita",
        category: "Engagement"
      }))
    },
    {
      title: "Indranil & Plavita",
      category: "Reception",
      coverImage: "/src/assets/portfolio/Reception/Indranil & Plavita/indranil plavita reception (6).jpg",
      count: 8,
      items: Array.from({ length: 8 }, (_, i) => ({
        id: 801 + i,
        image: `/src/assets/portfolio/Reception/Indranil & Plavita/indranil plavita reception (${i + 1}).jpg`,
        title: "Indranil & Plavita",
        category: "Reception"
      }))
    },
    {
      title: "Ayesha",
      category: "Haldi",
      coverImage: "/src/assets/portfolio/Haldi/Ayesha/ayesha haldi (10).jpg",
      count: 11,
      items: Array.from({ length: 11 }, (_, i) => ({
        id: 901 + i,
        image: `/src/assets/portfolio/Haldi/Ayesha/ayesha haldi (${i + 1}).jpg`,
        title: "Ayesha",
        category: "Haldi"
      }))
    },
    {
      title: "Kiara",
      category: "Rice Ceremony",
      coverImage: "/src/assets/portfolio/Rice Ceremony/Kiara/kiara rice ceremony (6).jpg",
      count: 12,
      items: Array.from({ length: 12 }, (_, i) => ({
        id: 1001 + i,
        image: `/src/assets/portfolio/Rice Ceremony/Kiara/kiara rice ceremony (${i + 1}).jpg`,
        title: "Kiara",
        category: "Rice Ceremony"
      }))
    },
    {
      title: "Oiendrila",
      category: "Rice Ceremony",
      coverImage: "/src/assets/portfolio/Rice Ceremony/Oiendrila/oiendrila rice ceremony (1).jpg",
      count: 14,
      items: Array.from({ length: 14 }, (_, i) => ({
        id: 1101 + i,
        image: `/src/assets/portfolio/Rice Ceremony/Oiendrila/oiendrila rice ceremony (${i + 1}).jpg`,
        title: "Oiendrila",
        category: "Rice Ceremony"
      }))
    },
    {
      title: "Studio Collection",
      category: "Jewellery Photography",
      coverImage: "/src/assets/portfolio/Jewellery Photography/Jewellery photoshoot/jewellery post (5).jpg",
      count: 35,
      items: Array.from({ length: 35 }, (_, i) => ({
        id: 1201 + i,
        image: `/src/assets/portfolio/Jewellery Photography/Jewellery photoshoot/jewellery post (${i + 1}).jpg`,
        title: "Studio Collection",
        category: "Jewellery Photography"
      }))
    },
    {
      title: "AI Concept Shoot",
      category: "Jewellery Photography",
      coverImage: "/src/assets/portfolio/Jewellery Photography/Jewellery with AI Models/ai model (1).jpg",
      count: 15,
      items: Array.from({ length: 15 }, (_, i) => ({
        id: 1301 + i,
        image: `/src/assets/portfolio/Jewellery Photography/Jewellery with AI Models/ai model (${i + 1}).jpg`,
        title: "AI Concept Shoot",
        category: "Jewellery Photography"
      }))
    }
  ];

  // Derive allItems from projectFolders
  const allItems = projectFolders.flatMap(folder => folder.items);

  // 1. Define Data Structure
  const uniqueCategories = Array.from(new Set(projectFolders.map(f => f.category || 'Uncategorized')));
  const categories = ['All', ...uniqueCategories];

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
