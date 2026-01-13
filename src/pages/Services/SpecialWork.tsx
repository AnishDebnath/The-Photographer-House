import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { Button } from '../../components/Button';
import { GalleryItem } from '../../types';

import { LazyImage } from '../../components/LazyImage';

import { galleryItems } from '../Home/data';

interface SpecialWorkProps {
    onNavigate: (page: string) => void;
    setLightboxItem: (item: GalleryItem | null) => void;
}

export const SpecialWork: React.FC<SpecialWorkProps> = ({ onNavigate, setLightboxItem }) => {
    const specialWork = galleryItems;


    return (
        <section className="py-32 bg-zinc-50 dark:bg-black border-t border-gray-200 dark:border-white/5 relative overflow-hidden transition-colors duration-500">
            {/* Architectural Lines - subtle background detail */}
            <div className="absolute inset-0 pointer-events-none opacity-30 dark:opacity-20">
                <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300 dark:via-white/10 to-transparent"></div>
                <div className="absolute right-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300 dark:via-white/10 to-transparent"></div>
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300 dark:via-white/10 to-transparent dashed opacity-50"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-24">
                    <div className="inline-flex items-center gap-3 mb-6 animate-fade-in-up">
                        <Star className="w-3 h-3 text-gold-500 fill-gold-500" />
                        <span className="text-gold-500 text-xs font-bold tracking-[0.3em] uppercase">Curated Portfolio</span>
                        <Star className="w-3 h-3 text-gold-500 fill-gold-500" />
                    </div>
                    <h2 className="font-serif text-5xl md:text-7xl text-gray-900 dark:text-white mb-8 leading-tight">
                        Signature <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600">Masterpieces</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg font-light leading-relaxed max-w-2xl mx-auto">
                        A selection of our most technically demanding and artistically fulfilling work. Moments that transcend the ordinary.
                    </p>
                </div>

                {/* Grid - Architectural Staggered Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20">
                    {specialWork.map((item, idx) => (
                        <div
                            key={item.id}
                            className={`group relative w-full cursor-pointer perspective-1000 ${idx % 3 === 1 ? 'md:-mt-16' : 'md:mt-8'}`}
                            onClick={() => setLightboxItem(item)}
                        >
                            {/* Image Container - Using fixed height for consistent sizing + shadow effect */}
                            <div className="relative overflow-hidden h-[400px] w-full bg-gray-100 dark:bg-gray-900 shadow-xl group-hover:shadow-2xl transition-all duration-500 rounded-lg">
                                <LazyImage
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0"
                                    containerClassName="h-full w-full"
                                />

                                {/* Minimalist Hover Border Effect - No Text */}
                                <div className="absolute inset-0 border border-transparent group-hover:border-gold-500/50 transition-colors duration-500 m-4 pointer-events-none"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Center Button */}
                <div className="text-center relative">
                    <div className="absolute left-0 right-0 top-1/2 h-px bg-gray-200 dark:bg-white/5 -z-10"></div>
                    <Button variant="outline" size="lg" onClick={() => onNavigate('special-moments')} className="bg-white dark:bg-black px-12 group hover:border-gold-500">
                        View Full Gallery <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </div>
        </section>
    );
};



