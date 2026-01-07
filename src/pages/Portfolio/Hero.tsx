import React from 'react';
import { LazyImage } from '../../components/LazyImage';

export const Hero: React.FC = () => {
    return (
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
                <LazyImage
                    src="/assets/booking banner.jpg"
                    alt="Portfolio Hero"
                    className="w-full h-full object-cover"
                    containerClassName="w-full h-full"
                />
                <div className="absolute inset-0 bg-black/50"></div>
            </div>
            <div className="relative z-10 text-center px-4 pt-20">
                <p className="text-gold-500 text-sm font-bold tracking-[0.2em] uppercase mb-4 animate-fade-in-up">
                    Our Masterpieces
                </p>
                <h1 className="font-serif text-5xl md:text-7xl text-white mb-6">
                    Portfolio
                </h1>
                <p className="text-gray-200 max-w-lg mx-auto font-light text-lg">
                    A curated collection of our finest moments captured in time.
                </p>
            </div>
        </section>
    );
};



