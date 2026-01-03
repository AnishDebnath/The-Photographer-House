import React, { useState, useEffect, useCallback } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

import { NavBar } from './components/NavBar';
import { HomePage } from './pages/Home';
import { PortfolioPage } from './pages/Portfolio';
import { ServicesPage } from './pages/Services';
import { FilmsPage } from './pages/Films';
import { ReviewsPage } from './pages/Reviews';
import { BlogPage } from './pages/Blog';
import { AlbumsPage } from './pages/Albums';
import { SpecialMomentsPage } from './pages/SpecialMoments';
import { BookingPage } from './pages/Booking';
import { AboutPage } from './pages/About';
import { GalleryItem } from './types';
import { galleryItems } from './pages/Home/data';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  // Navigation State (Derived from location but keeping for stateful logic)
  const [portfolioCategory, setPortfolioCategory] = useState('All');
  const [portfolioFolder, setPortfolioFolder] = useState<string | null>(null);

  // Lightbox State (Global for Home section interactions)
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  // Video Modal State (Global/Home)
  const [showVideoModal, setShowVideoModal] = useState(false);

  // Blog Navigation State
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null);

  // Derived current page for NavBar highlight
  const currentPage = location.pathname === '/' ? 'home' : (location.pathname === '/home' ? 'home' : location.pathname.substring(1));

  // Handle Theme Toggle
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Update Page Title based on Route
  useEffect(() => {
    const baseTitle = 'The Photographer House';
    const path = location.pathname;

    const titles: Record<string, string> = {
      '/': 'Premium Photography & Cinematography',
      '/home': 'Premium Photography & Cinematography',
      '/about-tph': 'About Our Story',
      '/portfolio': portfolioFolder ? `${portfolioFolder} Gallery` : 'Portfolio & Gallery',
      '/services': 'Services',
      '/films': 'Films',
      '/reviews': 'Reviews',
      '/blog': 'Stories',
      '/special-moments': 'Special Moments',
      '/booking': 'Book Your Session',
      '/albums': 'Photo Albums'
    };

    document.title = titles[path] ? `${titles[path]} | ${baseTitle}` : baseTitle;
  }, [location.pathname, portfolioFolder]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Navigation Logic
  const handleNavigation = (page: string, sectionId?: string) => {
    const path = page === 'home' ? '/' : `/${page}`;
    navigate(path);

    // Reset portfolio category if navigating generally
    if (page === 'portfolio') {
      setPortfolioCategory('All');
      setPortfolioFolder(null);
    }

    if (page === 'home') {
      if (sectionId) {
        // Allow render to happen then scroll
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          } else if (sectionId === 'root' || !sectionId) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Special redirect for portfolio deep linking
  const navigateToPortfolioCategory = (category: string) => {
    setPortfolioCategory(category);
    setPortfolioFolder(null);
    navigate('/portfolio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToPortfolioFolder = (category: string, folderTitle: string) => {
    setPortfolioCategory(category);
    setPortfolioFolder(folderTitle);
    navigate('/portfolio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBlogNavigation = (blogId: number) => {
    setSelectedBlogId(blogId);
    navigate('/blog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Lightbox Navigation Logic
  const navigateLightbox = useCallback((direction: 'next' | 'prev') => {
    if (!lightboxItem) return;
    const currentIndex = galleryItems.findIndex(item => item.id === lightboxItem.id);
    if (currentIndex === -1) return;

    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % galleryItems.length;
    } else {
      newIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    }
    setLightboxItem(galleryItems[newIndex]);
  }, [lightboxItem]);

  // Lightbox Keyboard Support
  useEffect(() => {
    if (!lightboxItem) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxItem(null);
      if (e.key === 'ArrowRight') navigateLightbox('next');
      if (e.key === 'ArrowLeft') navigateLightbox('prev');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxItem, navigateLightbox]);

  // Lock scroll when lightbox is open
  useEffect(() => {
    if (lightboxItem || showVideoModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [lightboxItem, showVideoModal]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900 text-gray-800 dark:text-gray-200 font-sans transition-colors duration-300">
      <NavBar
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        currentPage={currentPage}
        onNavigate={handleNavigation}
      />

      <main>
        <Routes>
          <Route path="/" element={
            <HomePage
              onNavigate={handleNavigation}
              navigateToPortfolioCategory={navigateToPortfolioCategory}
              navigateToPortfolioFolder={navigateToPortfolioFolder}
              setLightboxItem={setLightboxItem}
              setShowVideoModal={setShowVideoModal}
              handleBlogNavigation={handleBlogNavigation}
            />
          } />
          <Route path="/home" element={
            <HomePage
              onNavigate={handleNavigation}
              navigateToPortfolioCategory={navigateToPortfolioCategory}
              navigateToPortfolioFolder={navigateToPortfolioFolder}
              setLightboxItem={setLightboxItem}
              setShowVideoModal={setShowVideoModal}
              handleBlogNavigation={handleBlogNavigation}
            />
          } />
          <Route path="/about-tph" element={<AboutPage onNavigate={handleNavigation} />} />
          <Route path="/portfolio" element={<PortfolioPage initialCategory={portfolioCategory} initialFolder={portfolioFolder} />} />
          <Route path="/services" element={<ServicesPage onNavigate={handleNavigation} />} />
          <Route path="/films" element={<FilmsPage />} />
          <Route path="/reviews" element={<ReviewsPage onNavigate={handleNavigation} />} />
          <Route path="/blog" element={<BlogPage onNavigate={handleNavigation} initialPostId={selectedBlogId} />} />
          <Route path="/special-moments" element={<SpecialMomentsPage onNavigate={handleNavigation} />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/albums" element={<AlbumsPage onNavigate={handleNavigation} />} />
        </Routes>
      </main>

      {/* --- LIGHTBOX (Global for Home Grid) --- */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-300 backdrop-blur-sm"
          onClick={() => setLightboxItem(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[110] p-2 bg-white/10 rounded-full hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxItem(null);
            }}
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>

          <button
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white hover:scale-110 transition-all z-[110] p-4 hidden md:block"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox('prev');
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={48} />
          </button>

          <button
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white hover:scale-110 transition-all z-[110] p-4 hidden md:block"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox('next');
            }}
            aria-label="Next image"
          >
            <ChevronRight size={48} />
          </button>

          <div className="relative max-w-full max-h-[90vh] flex items-center justify-center">
            <img
              src={lightboxItem.image}
              alt={lightboxItem.title}
              className="max-w-full max-h-[90vh] object-contain shadow-2xl select-none"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* --- VIDEO MODAL (Global) --- */}
      {showVideoModal && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-500 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          onClick={() => setShowVideoModal(false)}
        >
          <button
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[110] p-2 bg-white/10 rounded-full hover:bg-white/20"
            onClick={() => setShowVideoModal(false)}
            aria-label="Close Video"
          >
            <X size={32} />
          </button>
          <div className="w-full max-w-6xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl relative">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Wedding Cinematography Showreel"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-gray-100 dark:bg-zinc-950 py-12 border-t border-gray-200 dark:border-white/5 text-center transition-colors duration-300">
        <div className="container mx-auto px-6">
          <p className="text-gold-500 text-xs font-bold tracking-[0.2em] uppercase mb-4">The Photographer House</p>
          <p className="text-gray-500 dark:text-gray-500 text-sm">© {new Date().getFullYear()} All rights reserved. Crafted with passion.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;