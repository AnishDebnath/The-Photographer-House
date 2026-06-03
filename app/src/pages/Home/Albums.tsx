import React from 'react';
import { Button } from '../../components/Button';
import { albumImages } from './data';

import { LazyImage } from '../../components/LazyImage';

interface AlbumsProps {
    onNavigate: (page: string) => void;
}

export const Albums: React.FC<AlbumsProps> = ({ onNavigate }) => {
    return (
        <section className="py-24 bg-[#111] text-center overflow-hidden transition-colors duration-300" aria-labelledby="albums-heading">
            <div className="container mx-auto px-6 mb-12">
                <div className="mb-12">
                    <span className="text-gold-500 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Preserve Your Memories</span>
                    <h2 id="albums-heading" className="font-serif text-4xl md:text-5xl text-white mb-6">Heirloom Photo Albums</h2>
                    <p className="text-gray-400 font-light max-w-2xl mx-auto text-lg">Handcrafted albums designed to tell your story for generations to come.</p>
                </div>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full overflow-hidden mb-12 md:mb-16">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-12 md:w-20 z-10 bg-gradient-to-r from-[#111] to-transparent pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-12 md:w-20 z-10 bg-gradient-to-l from-[#111] to-transparent pointer-events-none"></div>

                <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
                    {/* Set 1 */}
                    <div className="flex gap-4 md:gap-8 px-2 md:px-4">
                        {albumImages.map((img, i) => (
                            <div key={`set1-${i}`} className="w-64 h-48 md:w-96 md:h-72 flex-shrink-0 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden cursor-pointer hover:opacity-90 transition-opacity shadow-lg" onClick={() => onNavigate('albums')}>
                                <LazyImage
                                    src={img}
                                    alt="Album Preview"
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                                    containerClassName="w-full h-full"
                                />
                            </div>
                        ))}
                    </div>
                    {/* Set 2 */}
                    <div className="flex gap-4 md:gap-8 px-2 md:px-4">
                        {albumImages.map((img, i) => (
                            <div key={`set2-${i}`} className="w-64 h-48 md:w-96 md:h-72 flex-shrink-0 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden cursor-pointer hover:opacity-90 transition-opacity shadow-lg" onClick={() => onNavigate('albums')}>
                                <LazyImage
                                    src={img}
                                    alt="Album Preview"
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                                    containerClassName="w-full h-full"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6">
                <Button variant="outline" className="border-gold-500/50 hover:border-gold-500 text-gold-500 px-8 py-3" onClick={() => onNavigate('albums')}>Explore Our Albums</Button>
            </div>
        </section>
    );
};



