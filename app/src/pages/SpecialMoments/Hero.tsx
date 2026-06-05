import React, { useState, useEffect } from 'react';
import { Button } from '../../components/ui/Button';
import { LazyImage } from '../../components/feature/LazyImage';

interface HeroProps {
    onNavigate: (page: string, sectionId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
    const [bannerUrl, setBannerUrl] = useState('https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&q=80&w=1920');

    useEffect(() => {
        fetch('/api/banners/special-moments-hero')
            .then(res => res.json())
            .then(data => {
                if (data && data.asset_url) {
                    setBannerUrl(data.asset_url);
                }
            })
            .catch(console.error);
    }, []);

    return (
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
                <LazyImage
                    src={bannerUrl}
                    alt="Special Moments Hero"
                    className="w-full h-full object-cover"
                    containerClassName="w-full h-full"
                />
                <div className="absolute inset-0 bg-black/50"></div>
            </div>
            <div className="relative z-10 text-center px-6 pt-20">
                <p className="text-gold-500 text-[10px] md:text-sm font-bold tracking-[0.25em] uppercase mb-4 animate-fade-in-up">
                    Behind The Lens
                </p>
                <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl text-white mb-6 leading-tight">
                    Frozen in <span className="italic text-gold-500">Time</span>
                </h1>
                <p className="text-gray-200 max-w-lg mx-auto font-light text-sm md:text-lg px-4">
                    Every photograph has a story. These are the moments that defined our journey.
                </p>
                <div className="flex justify-center mt-8">
                    <Button variant="outline" onClick={() => onNavigate('portfolio')}>View Full Portfolio</Button>
                </div>
            </div>
        </section>
    );
};



