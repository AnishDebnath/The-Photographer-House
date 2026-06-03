import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { GalleryItem } from '../../types';

import { LazyImage } from '../../components/LazyImage';

interface GalleryViewProps {
    openedFolderTitle: string;
    activeTab: string;
    handleBackToFolders: () => void;
    columns: GalleryItem[][];
    setSelectedItem: (item: GalleryItem) => void;
}

export const GalleryView: React.FC<GalleryViewProps> = ({
    openedFolderTitle,
    activeTab,
    handleBackToFolders,
    columns,
    setSelectedItem
}) => {
    return (
        <div className="animate-in fade-in slide-in-from-right-8 duration-500">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8 md:mb-12 gap-4 md:gap-6">
                <button
                    onClick={handleBackToFolders}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gold-500 transition-colors uppercase tracking-widest text-[10px] md:text-xs font-bold group self-start md:self-auto"
                >
                    <div className="p-1.5 md:p-2 rounded-full border border-gray-300 dark:border-white/20 group-hover:border-gold-500 transition-colors">
                        <ArrowLeft size={14} className="md:w-4 md:h-4" />
                    </div>
                    Back to {activeTab === 'All' ? 'Folders' : activeTab}
                </button>

                <div className="text-center">
                    <h2 className="font-serif text-2xl md:text-3xl text-gray-900 dark:text-white leading-tight">{openedFolderTitle}</h2>
                    <p className="text-gold-500 text-[10px] uppercase tracking-[0.2em] mt-1 md:mt-2">Gallery Collection</p>
                </div>

                <div className="w-24 hidden md:block"></div> {/* Spacer for alignment */}
            </div>

            <div className="flex gap-6 items-start">
                {columns.map((colItems, colIndex) => (
                    <div key={colIndex} className="flex-1 flex flex-col gap-6">
                        {colItems.map((item) => (
                            <div
                                key={item.id}
                                className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-md dark:shadow-none bg-zinc-800/10"
                                onClick={() => setSelectedItem(item)}
                            >
                                <LazyImage
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-auto block transition-transform duration-700 group-hover:scale-110"
                                    containerClassName="w-full"
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};



