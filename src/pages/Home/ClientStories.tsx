import React from 'react';
import { Button } from '../../components/Button';
import { SectionHeader } from '../../components/SectionHeader';
import { clientStories } from './data';

import { LazyImage } from '../../components/LazyImage';

interface ClientStoriesProps {
    navigateToPortfolioFolder: (category: string, folderTitle: string) => void;
}

export const ClientStories: React.FC<ClientStoriesProps> = ({ navigateToPortfolioFolder }) => {
    return (
        <section className="py-24 bg-zinc-950 transition-colors duration-300" aria-labelledby="stories-heading">
            <SectionHeader
                subtitle="Client Stories"
                title="Love in Frames"
                description="Real couples, real moments. Discover the stories behind the smiles."
                light={true}
            />
            <h2 id="stories-heading" className="sr-only">Client Stories Gallery</h2>

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {clientStories.map((story) => (
                        <article
                            key={story.id}
                            className="group relative aspect-[3/4] rounded-[2rem] overflow-hidden cursor-pointer shadow-2xl"
                            onClick={() => navigateToPortfolioFolder(story.category, story.folderTitle)}
                        >
                            <LazyImage
                                src={story.image}
                                alt={`Portrait of ${story.name}`}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                containerClassName="h-full w-full"
                            />

                            {/* Gradient Overlay - Stronger for visibility */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent/0 opacity-90 transition-opacity duration-500"></div>

                            {/* Content Container */}
                            <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col items-center text-center z-10">

                                {/* Category */}
                                <span className="text-gold-500 text-[10px] font-bold tracking-[0.25em] uppercase mb-3 drop-shadow-sm">
                                    {story.category}
                                </span>

                                {/* Names */}
                                <h3 className="font-serif text-3xl text-white mb-4 italic tracking-wide drop-shadow-md">
                                    {story.name}
                                </h3>

                                {/* Separator */}
                                <div className="w-12 h-px bg-gold-500/80 mb-4 shadow-sm"></div>

                                {/* Description */}
                                <p className="text-gray-200 text-xs font-medium leading-relaxed max-w-[220px] mx-auto opacity-90 drop-shadow-sm">
                                    {story.description}
                                </p>
                            </div>

                            {/* Border effect */}
                            <div className="absolute inset-0 border border-white/10 rounded-[2rem] group-hover:border-gold-500/30 transition-colors duration-500 pointer-events-none z-20"></div>
                        </article>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <Button variant="dark-outline" onClick={() => navigateToPortfolioFolder('Wedding', 'Biswanath & Niketa')}>View All Stories</Button>
                </div>
            </div>
        </section>
    );
};



