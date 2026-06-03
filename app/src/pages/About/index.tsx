import React from 'react';

import { Hero } from './Hero';
import { Bio } from './Bio';
import { Stats } from '../../components/Stats';
import { Values } from './Values';
import { Testimonials } from '../../components/Testimonials';
import { Cta } from './Cta';

interface AboutPageProps {
  onNavigate: (page: string, sectionId?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white dark:bg-dark-900 min-h-screen transition-colors duration-300 pb-0 animate-in fade-in">
      <Hero />
      <Bio onNavigate={onNavigate} />
      <Stats />
      <Values onNavigate={onNavigate} />
      <Testimonials onNavigate={onNavigate} />
      <Cta onNavigate={onNavigate} />
    </div>
  );
};
