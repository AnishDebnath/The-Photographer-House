import React, { useState, useEffect } from 'react';
import { LazyImage } from '../../components/feature/LazyImage';

export const Hero: React.FC = () => {
    const [bannerUrl, setBannerUrl] = useState('/assets/portfolio/hero-banner.jpg');

    useEffect(() => {
        fetch('/api/banners/portfolio-hero')
            .then(res => res.json())
            .then(data => {
                if (data && data.asset_url) {
                    setBannerUrl(data.asset_url);
                }
            })
            .catch(console.error);
    }, []);

    return (
        <section className="relative h-[40vh] md:h-[50vh] min-h-[300px] md:min-h-[400px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
                <LazyImage
                    src={bannerUrl}
                    alt="Portfolio Hero"
                    className="w-full h-full object-cover"
                    containerClassName="w-full h-full"
                />
                <div className="absolute inset-0 bg-black/50"></div>
            </div>
            <div className="relative z-10 text-center px-6 pt-10 md:pt-20">
                <p className="text-gold-500 text-[10px] md:text-sm font-bold tracking-[0.2em] uppercase mb-4 animate-fade-in-up">
                    Our Masterpieces
                </p>
                <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl text-white mb-6 leading-tight">
                    Portfolio
                </h1>
                <p className="text-gray-200 max-w-lg mx-auto font-light text-sm md:text-lg px-4">
                    A curated collection of our finest moments captured in time.
                </p>
            </div>
        </section>
    );
};



