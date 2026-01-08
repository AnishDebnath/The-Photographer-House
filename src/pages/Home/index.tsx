import React from 'react';
import { GalleryItem } from '../../types';

import { Hero } from './Hero';
import { LatestWork } from './LatestWork';
import { VideoShowcase } from './VideoShowcase';
import { Callout } from './Callout';
import { ClientStories } from './ClientStories';
import { Albums } from './Albums';
import { WeddingFilms } from './WeddingFilms';
import { Booking } from '../../components/Booking';
import { Services } from './Services';
import { Faq } from './Faq';
import { Blog } from './Blog';
import { Stats } from '../About/Stats';
import { Testimonials } from '../About/Testimonials';
import { Contact } from './Contact';
import { WhyChooseUs } from './WhyChooseUs';

interface HomePageProps {
    onNavigate: (page: string, sectionId?: string) => void;
    navigateToPortfolioCategory: (category: string) => void;
    navigateToPortfolioFolder: (category: string, folderTitle: string) => void;
    setLightboxItem: (item: GalleryItem | null) => void;
    setShowVideoModal: (show: boolean) => void;
    handleBlogNavigation: (id: number) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
    onNavigate,
    navigateToPortfolioCategory,
    navigateToPortfolioFolder,
    setLightboxItem,
    setShowVideoModal,
    handleBlogNavigation
}) => {
    return (
        <>
            <Hero onNavigate={onNavigate} />
            <LatestWork onNavigate={onNavigate} setLightboxItem={setLightboxItem} />
            <VideoShowcase onNavigate={onNavigate} />
            <Callout onNavigate={onNavigate} />
            <ClientStories navigateToPortfolioFolder={navigateToPortfolioFolder} navigateToPortfolioCategory={navigateToPortfolioCategory} />
            <Albums onNavigate={onNavigate} />
            <WeddingFilms onNavigate={onNavigate} setShowVideoModal={setShowVideoModal} />
            <Booking onNavigate={onNavigate} />
            <Services onNavigate={onNavigate} />
            <Stats />
            <Testimonials onNavigate={onNavigate} />
            <Contact />
            <WhyChooseUs />
            <Faq onNavigate={onNavigate} />
            <Blog onNavigate={onNavigate} handleBlogNavigation={handleBlogNavigation} />
        </>
    );
};
