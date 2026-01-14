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
                <div
                    className="w-full md:w-1/2 relative rounded-[2rem] overflow-hidden shadow-2xl shadow-gold-900/10 group aspect-video bg-zinc-900"
                >
                    {/* Permanent Video Preview */}
                    <div className="absolute inset-0 z-0">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/WA5XMy5jeKE?autoplay=1&mute=1&controls=0&loop=1&playlist=WA5XMy5jeKE&modestbranding=1&rel=0&start=37&showinfo=0&iv_load_policy=3"
                            title="Wedding Film Preview"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            className="w-full h-full scale-[1.3] pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                        ></iframe>
                    </div>

                    {/* Fallback/Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>

                    <div
                        className="absolute inset-0 z-10 flex items-center justify-center bg-black/10 group-hover:bg-black/30 transition-colors cursor-pointer"
                        role="button"
                        tabIndex={0}
                        aria-label="Play Wedding Film Masterpiece"
                        onClick={() => setShowVideoModal(true)}
                    >
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 transform group-hover:scale-110 transition-all duration-300">
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
