import React from 'react';
import { albums } from './data';

interface GridProps {
    onImageClick: (image: string) => void;
}

export const Grid: React.FC<GridProps> = ({ onImageClick }) => {

    return (
        <div className="container mx-auto px-6 py-20">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                {albums.map((album) => (
                    <div
                        key={album.id}
                        className="break-inside-avoid group relative rounded-2xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 bg-gray-100 dark:bg-dark-800"
                        onClick={() => onImageClick(album.image)}
                    >
                        <img
                            src={album.image}
                            alt={album.title}
                            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};



