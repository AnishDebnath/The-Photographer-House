import React from 'react';
import { FolderOpen } from 'lucide-react';
import { PortfolioFolder } from '../../types';

import { LazyImage } from '../../components/LazyImage';

interface FolderViewProps {
    folders: PortfolioFolder[];
    onFolderClick: (folderTitle: string) => void;
}

export const FolderView: React.FC<FolderViewProps> = ({ folders, onFolderClick }) => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {folders.map((folder, idx) => (
                    <div
                        key={idx}
                        onClick={() => onFolderClick(folder.title)}
                        className="group cursor-pointer relative aspect-[4/3] sm:aspect-[3/4] md:aspect-[4/3] rounded-[1.5rem] md:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                    >
                        {/* Cover Image */}
                        <LazyImage
                            src={folder.coverImage}
                            alt={folder.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            containerClassName="h-full w-full"
                        />

                        {/* Base Filter Layer */}
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-500"></div>

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity duration-500"></div>

                        {/* Folder Content */}
                        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 transition-opacity duration-300">
                            <div className="flex items-center justify-between mb-2">
                                {/* Icon turns Gold bg on hover */}
                                <div className="bg-gold-500/20 backdrop-blur-md p-2.5 md:p-3 rounded-xl text-gold-500 group-hover:bg-gold-500 group-hover:text-black transition-colors duration-500">
                                    <FolderOpen size={20} className="md:w-6 md:h-6" />
                                </div>
                            </div>

                            {/* Category Label above Title */}
                            <p className="text-gold-500 text-[9px] md:text-[10px] uppercase tracking-widest mb-1">{folder.category}</p>
                            <h3 className="text-xl md:text-2xl font-serif text-white mb-1 group-hover:text-gold-100 transition-colors leading-tight">{folder.title}</h3>

                            {/* Link Text and Arrow Animation */}
                            <p className="text-gray-400 text-xs md:text-sm group-hover:text-gold-500 transition-colors duration-300 flex items-center gap-2">
                                View Gallery
                                <span className="transform group-hover:translate-x-2 transition-transform duration-300 hidden md:inline">&rarr;</span>
                            </p>
                        </div>

                        {/* Border Effect */}
                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold-500/30 rounded-2xl transition-colors duration-500 pointer-events-none"></div>
                    </div>
                ))}
            </div>

            {folders.length === 0 && (
                <div className="text-center py-20 text-gray-500">
                    No collections found for this category.
                </div>
            )}
        </>
    );
};



