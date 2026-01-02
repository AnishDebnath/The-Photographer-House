import React, { useState, useEffect, useCallback } from 'react';
import { Hero } from './Hero';
import { Grid } from './Grid';
import { Lightbox } from './Lightbox';
import { specialMoments } from './data';

interface SpecialMomentsPageProps {
  onNavigate: (page: string, sectionId?: string) => void;
}

export const SpecialMomentsPage: React.FC<SpecialMomentsPageProps> = ({ onNavigate }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) => (prev! + 1) % specialMoments.length);
  }, [selectedImageIndex]);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) => (prev! - 1 + specialMoments.length) % specialMoments.length);
  }, [selectedImageIndex]);

  useEffect(() => {
    if (selectedImageIndex === null) {
      document.body.style.overflow = 'unset';
      return;
    }
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImageIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImageIndex, handleNext, handlePrev]);

  const currentImage = selectedImageIndex !== null ? specialMoments[selectedImageIndex] : null;

  return (
    <div className="bg-white dark:bg-dark-900 min-h-screen transition-colors duration-300 pb-20 animate-in fade-in">
      <Hero onNavigate={onNavigate} />
      <Grid onImageClick={setSelectedImageIndex} />

      {currentImage && (
        <Lightbox
          currentImage={currentImage}
          onClose={() => setSelectedImageIndex(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </div>
  );
};
