import React from 'react';
import { Play } from 'lucide-react';
import { FilmItem } from '../../types';

interface GridProps {
    onFilmClick: (film: FilmItem) => void;
}

import { films } from './data';

export const Grid: React.FC<GridProps> = ({ onFilmClick }) => {

    return (
        <div className="container mx-auto px-6 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {films.map((film) => (
                    <div
                        key={film.id}
                        className="group cursor-pointer"
                        onClick={() => onFilmClick(film)}
                    >
                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg mb-4 bg-gray-900">
                            <img
                                src={`https://img.youtube.com/vi/${film.id}/hqdefault.jpg`}
                                alt={film.title}
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=80';
                                }}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                            />

                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                <div className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-gold-500 group-hover:border-gold-500 transition-all duration-300">
                                    <Play className="fill-white text-white group-hover:fill-black group-hover:text-black ml-1 transition-colors" size={24} />
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between mb-1">
                                <p className="text-gold-500 text-xs font-bold tracking-widest uppercase">{film.category}</p>
                            </div>
                            <h3 className="text-2xl font-serif text-gray-900 dark:text-white group-hover:text-gold-500 transition-colors mb-2">
                                {film.title}
                            </h3>
                            <p className="text-gray-500 text-sm line-clamp-2">
                                {film.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
