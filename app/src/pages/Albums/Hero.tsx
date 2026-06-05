import React, { useState, useEffect } from 'react';

export const Hero: React.FC = () => {
    const [imageUrl, setImageUrl] = useState('/assets/albums/hero-banner.jpg');

    useEffect(() => {
        fetch('/api/banners/albums-hero')
            .then(res => res.json())
            .then(data => {
                if (data && data.asset_url) {
                    setImageUrl(data.asset_url);
                }
            })
            .catch(console.error);
    }, []);

    return (
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src={imageUrl}
                    alt="Albums Hero"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50"></div>
            </div>
            <div className="relative z-10 text-center px-4 pt-20">
                <p className="text-gold-500 text-sm font-bold tracking-[0.2em] uppercase mb-4 animate-fade-in-up">
                    Printed Legacies
                </p>
                <h1 className="font-serif text-5xl md:text-7xl text-white mb-6">
                    Heirloom <span className="italic text-gold-500">Albums</span>
                </h1>
                <p className="text-gray-200 max-w-lg mx-auto font-light text-lg">
                    Tangible memories handcrafted to last generations. Explore our collection of bespoke photo books.
                </p>
            </div>
        </section>
    );
};



