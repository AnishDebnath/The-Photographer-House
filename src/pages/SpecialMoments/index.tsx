import React, { useState, useEffect, useCallback } from 'react';
import { Hero } from './Hero';
import { Grid } from './Grid';
import { Lightbox } from './Lightbox';
import { specialMoments } from './data';
import { SpecialMoment } from '../../types';

interface SpecialMomentsPageProps {
  onNavigate: (page: string, sectionId?: string) => void;
}

export const SpecialMomentsPage: React.FC<SpecialMomentsPageProps> = ({ onNavigate }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [numCols, setNumCols] = useState(1);

  // Layout logic to match Portfolio (left-to-right ordering)
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

  const columns = Array.from({ length: numCols }, (): (SpecialMoment & { actualIndex: number })[] => []);
  specialMoments.forEach((item, index) => {
    columns[index % numCols].push({ ...item, actualIndex: index });
  });

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
      <Grid columns={columns} onImageClick={setSelectedImageIndex} />

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
