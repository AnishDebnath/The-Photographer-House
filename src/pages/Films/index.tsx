import React, { useState, useEffect } from 'react';
import { FilmItem } from '../../types';

import { Hero } from './Hero';
import { Grid } from './Grid';
import { VideoModal } from './VideoModal';

export const FilmsPage: React.FC = () => {
  const [activeFilm, setActiveFilm] = useState<FilmItem | null>(null);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (activeFilm) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeFilm]);

  return (
    <div className="bg-white dark:bg-dark-900 min-h-screen transition-colors duration-300 pb-20 animate-in fade-in">
      <Hero />
      <Grid onFilmClick={setActiveFilm} />

      {activeFilm && (
        <VideoModal
          activeFilm={activeFilm}
          onClose={() => setActiveFilm(null)}
        />
      )}
    </div>
  );
};
