import React from 'react';

import { Hero } from './Hero';
import { Stats } from './Stats';
import { Grid } from './Grid';
import { Cta } from './Cta';

interface ReviewsPageProps {
  onNavigate: (page: string, sectionId?: string) => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white dark:bg-dark-900 min-h-screen transition-colors duration-300 pb-20 animate-in fade-in">
      <Hero />
      <Stats />
      <Grid />
      <Cta onNavigate={onNavigate} />
    </div>
  );
};
