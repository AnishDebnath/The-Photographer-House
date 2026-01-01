import React from 'react';
import { X } from 'lucide-react';
import { FilmItem } from '../../types';

interface VideoModalProps {
    activeFilm: FilmItem;
    onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ activeFilm, onClose }) => {
    return (
        <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center p-4 animate-in fade-in duration-300 backdrop-blur-md">
            <button
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[110] p-2 bg-white/10 rounded-full hover:bg-white/20"
                onClick={onClose}
            >
                <X size={32} />
            </button>

            <div className="w-full max-w-6xl aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-black">
                <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${activeFilm.id}?${activeFilm.si ? `si=${activeFilm.si}` : 'autoplay=1'}`}
                    title={activeFilm.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-full"
                ></iframe>
            </div>
        </div>
    );
};



