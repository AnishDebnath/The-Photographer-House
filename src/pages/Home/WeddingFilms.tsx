import React from 'react';
import { Play } from 'lucide-react';
import { Button } from '../../components/Button';

interface WeddingFilmsProps {
    onNavigate: (page: string) => void;
    setShowVideoModal: (show: boolean) => void;
}

export const WeddingFilms: React.FC<WeddingFilmsProps> = ({ onNavigate, setShowVideoModal }) => {
    return (
        <section className="bg-black py-20" aria-labelledby="films-heading">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10 md:gap-12 text-center md:text-left">
                <div className="w-full md:w-1/2 relative rounded-[2rem] overflow-hidden shadow-2xl shadow-gold-900/10 group">
                    <img src="https://picsum.photos/id/158/800/500" alt="Cinematic wedding film thumbnail" className="w-full aspect-video md:aspect-auto object-cover" />
                    <div
                        className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors cursor-pointer"
                        role="button"
                        tabIndex={0}
                        aria-label="Play Wedding Film Masterpiece"
                        onClick={() => setShowVideoModal(true)}
                    >
                        <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center border border-white/40 transform group-hover:scale-110 transition-transform">
                            <Play className="ml-1 fill-white text-white" aria-hidden="true" />
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <h3 className="text-gold-500 tracking-[0.2em] text-[10px] md:text-xs uppercase mb-4">Cinematic Masterpieces</h3>
                    <h2 id="films-heading" className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight">Wedding Films</h2>
                    <p className="text-gray-400 leading-relaxed mb-6 text-sm md:text-base">
                        "We don't just record events; we capture moments." Our wedding films are timeless structures that house precious memories for a lifetime. With the colors of India and modern narrative techniques, we craft art.
                    </p>
                    <p className="text-gray-400 leading-relaxed mb-8 text-sm md:text-base hidden sm:block">
                        More importantly, we tailor films per the personality of the wedding couples, making it a distinctive heirloom for your family.
                    </p>
                    <Button variant="primary" onClick={() => onNavigate('films')}>View Our Channel</Button>
                </div>
            </div>
        </section>
    );
};
