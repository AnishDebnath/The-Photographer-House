import React from 'react';
import { SpecialMoment } from '../../types';
import { LazyImage } from '../../components/LazyImage';

interface GridProps {
    columns: (SpecialMoment & { actualIndex: number })[][];
    onImageClick: (index: number) => void;
}

export const Grid: React.FC<GridProps> = ({ columns, onImageClick }) => {
    return (
        <div className="container mx-auto px-6 py-20">
            <div className="flex flex-col md:flex-row gap-6 items-start">
                {columns.map((colItems, colIndex) => (
                    <div key={colIndex} className="flex-1 flex flex-col gap-6">
                        {colItems.map((item) => (
                            <div
                                key={item.id}
                                className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 bg-gray-100 dark:bg-dark-800"
                                onClick={() => onImageClick(item.actualIndex)}
                            >
                                <LazyImage
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-auto block transition-transform duration-700 group-hover:scale-110"
                                    containerClassName="w-full"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none"></div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};



