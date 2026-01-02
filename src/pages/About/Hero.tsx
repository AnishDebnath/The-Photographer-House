import React from 'react';
import { LazyImage } from '../../components/LazyImage';

export const Hero: React.FC = () => {
    return (
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
                <LazyImage
                    src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&q=80&w=1920"
                    alt="About Us Hero"
                    className="w-full h-full object-cover"
                    containerClassName="w-full h-full"
                />
                <div className="absolute inset-0 bg-black/60"></div>
            </div>
            <div className="relative z-10 text-center px-4 pt-20">
                <p className="text-gold-500 text-sm font-bold tracking-[0.2em] uppercase mb-4 animate-fade-in-up">
                    Our Story
                </p>
                <h1 className="font-serif text-5xl md:text-7xl text-white mb-6">
                    About The <span className="italic text-gold-500">House</span>
                </h1>
                <p className="text-gray-200 max-w-lg mx-auto font-light text-lg">
                    Where technical mastery meets artistic intuition.
                </p>
            </div>
        </section>
    );
};



