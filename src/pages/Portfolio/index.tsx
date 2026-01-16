import React, { useState, useEffect, useCallback } from 'react';
import { GalleryItem, PortfolioFolder } from '../../types';

import { Hero } from './Hero';
import { FolderView } from './FolderView';
import { GalleryView } from './GalleryView';
import { Lightbox } from './Lightbox';
import { projectFolders } from './data';

interface PortfolioPageProps {
  initialCategory?: string;
  initialFolder?: string | null;
}

const categoryOrder = [
  'Wedding',
  'Pre-wedding',
  'Engagement',
  'Reception',
  'Haldi',
  'Rice Ceremony',
  'Birthday',
  'Jewellery Photography'
];

const getSortedFolders = (folders: PortfolioFolder[]) => {
  return [...folders].sort((a, b) => {
    const catA = a.category || '';
    const catB = b.category || '';

    if (catA !== catB) {
      const indexA = categoryOrder.indexOf(catA);
      const indexB = categoryOrder.indexOf(catB);
      if (indexA !== -1 && indexB !== -1) return indexA - indexB;
      if (indexA !== -1) return -1;
      if (indexB !== -1) return 1;
      return catA.localeCompare(catB);
    }

    // Within same category, sort by title alphabetical
    return a.title.localeCompare(b.title);
  });
};

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ initialCategory = 'All', initialFolder = null }) => {
  // State for Navigation & View Modes
  const [activeTab, setActiveTab] = useState(initialCategory); // Controls the top filter tabs
  const [viewMode, setViewMode] = useState<'folders' | 'gallery'>(initialFolder ? 'gallery' : 'folders'); // Controls whether we see folders or photos
  const [openedFolderTitle, setOpenedFolderTitle] = useState<string | null>(initialFolder); // Which project folder is currently open

  // State for Lightbox & Layout
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [numCols, setNumCols] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const [openedFolderCategory, setOpenedFolderCategory] = useState<string | null>(null);

  // Sync activeTab if initialCategory changes prop
  useEffect(() => {
    setActiveTab(initialCategory);
  }, [initialCategory]);

  // 1. Define Data Structure
  const uniqueCategories = Array.from(new Set(projectFolders.map(f => f.category || 'Uncategorized')))
    .sort((a, b) => {
      const indexA = categoryOrder.indexOf(a);
      const indexB = categoryOrder.indexOf(b);
      if (indexA !== -1 && indexB !== -1) return indexA - indexB;
      if (indexA !== -1) return -1;
      if (indexB !== -1) return 1;
      return a.localeCompare(b);
    });

  const categories = ['All', ...uniqueCategories];

  // 2. Logic for what to display based on state
  const displayedFolders = activeTab === 'All'
    ? getSortedFolders(projectFolders)
    : getSortedFolders(projectFolders.filter(f => f.category === activeTab));

  const currentFolder = projectFolders.find(f => f.title === openedFolderTitle && (!openedFolderCategory || f.category === openedFolderCategory));

  const galleryImages = currentFolder
    ? currentFolder.items.filter(item => item.image !== currentFolder.coverImage)
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
    setOpenedFolderCategory(null);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleFolderClick = (folderTitle: string, folderCategory?: string) => {
    setOpenedFolderTitle(folderTitle);
    setOpenedFolderCategory(folderCategory || null);
    setViewMode('gallery');
    window.scrollTo(0, 400); // Scroll past hero
  };

  const handleBackToFolders = () => {
    setViewMode('folders');
    setOpenedFolderTitle(null);
    setOpenedFolderCategory(null);
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
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 flex-row animate-in fade-in duration-700">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => handleTabChange(cat)}
              className={`px-4 md:px-8 py-2 md:py-3 rounded-full text-[10px] md:text-sm font-bold uppercase tracking-widest transition-all duration-300 ${activeTab === cat
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
