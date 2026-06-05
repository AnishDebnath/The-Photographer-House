import React, { useState, useEffect } from 'react';

export const Hero: React.FC = () => {
    const [imageUrl, setImageUrl] = useState('/assets/services/hero-banner.jpg');

    useEffect(() => {
        fetch('/api/banners/services-hero')
            .then(res => res.json())
            .then(data => {
                if (data && data.asset_url) {
                    setImageUrl(data.asset_url);
                }
            })
            .catch(console.error);
    }, []);

    return (
        <section className="relative h-[40vh] md:h-[50vh] min-h-[300px] md:min-h-[400px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
                <img src={imageUrl} className="w-full h-full object-cover" alt="Services Hero" />
                <div className="absolute inset-0 bg-black/70"></div>
            </div>
            <div className="relative z-10 text-center px-6 pt-10 md:pt-20">
                <p className="text-gold-500 text-[10px] md:text-xs lg:text-sm font-bold tracking-[0.2em] uppercase mb-4 animate-fade-in-up">Professional Photography Studio</p>
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-6 leading-tight">Services Tailored to <br /><span className="italic text-gold-500">Your Vision</span></h1>
                <p className="text-gray-200 max-w-2xl mx-auto font-light text-sm md:text-base lg:text-lg">From intimate portraits to grand corporate events, we provide professional photography services designed to capture the essence of every moment.</p>
            </div>
        </section>
    );
};



