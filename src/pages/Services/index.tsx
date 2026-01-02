import React from 'react';

import { Hero } from './Hero';
import { ServiceList } from './ServiceList';
import { WhyChooseUs } from './WhyChooseUs';
import { Booking } from '../../components/Booking';
import { SpecialWork } from './SpecialWork';

interface ServicesPageProps {
  onNavigate: (page: string, sectionId?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white dark:bg-dark-900 min-h-screen transition-colors duration-300 pb-0 animate-in fade-in">
      <Hero />
      <ServiceList onNavigate={onNavigate} />
      <WhyChooseUs />
      <Booking onNavigate={onNavigate} />
      <SpecialWork onNavigate={onNavigate} />
    </div>
  );
};
