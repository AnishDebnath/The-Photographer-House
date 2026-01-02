import React from 'react';
import { Button } from '../../components/Button';
import { SectionHeader } from '../../components/SectionHeader';
import { GalleryItem } from '../../types';
import { galleryItems } from './data';

interface LatestWorkProps {
    onNavigate: (page: string) => void;
    setLightboxItem: (item: GalleryItem | null) => void;
}

export const LatestWork: React.FC<LatestWorkProps> = ({ onNavigate, setLightboxItem }) => {
    return (
        <section id="latest-work" className="py-24 px-4 bg-white dark:bg-dark-800 relative transition-colors duration-300" aria-labelledby="portfolio-heading">
            <SectionHeader
                subtitle="Latest Work"
                title="Captured Moments"
                description="A glimpse into our world of storytelling through lens and light."
            />
            <h2 id="portfolio-heading" className="sr-only">Latest Work Portfolio</h2>

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
                {galleryItems.map((item, idx) => (
                    <article
                        key={item.id}
                        className={`group relative overflow-hidden rounded-2xl cursor-pointer ${idx === 1 ? 'md:row-span-1' : ''}`}
                        role="article"
                        aria-label={`Project: ${item.title} - ${item.category}`}
                        onClick={() => setLightboxItem(item)}
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                    </article>
                ))}
            </div>

            <div className="text-center mt-12">
                <Button variant="dark-outline" onClick={() => onNavigate('special-moments')}>View More</Button>
            </div>
        </section>
    );
};



