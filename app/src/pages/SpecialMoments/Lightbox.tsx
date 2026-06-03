import React from 'react';
import { X, Heart, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import { SpecialMoment } from '../../types';

interface LightboxProps {
    currentImage: SpecialMoment;
    onClose: () => void;
    onNext: (e?: React.MouseEvent) => void;
    onPrev: (e?: React.MouseEvent) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ currentImage, onClose, onNext, onPrev }) => {
    return (
        <div
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-300 backdrop-blur-sm"
            onClick={onClose}
        >
            {/* Close Button */}
            <button
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[110] p-2 bg-white/10 rounded-full hover:bg-white/20"
                onClick={(e) => {
                    e.stopPropagation();
                    onClose();
                }}
                aria-label="Close lightbox"
            >
                <X size={32} />
            </button>

            {/* Navigation Buttons */}
            <button
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white hover:scale-110 transition-all z-[110] p-4 hidden md:block"
                onClick={(e) => {
                    e.stopPropagation();
                    onPrev();
                }}
                aria-label="Previous image"
            >
                <ChevronLeft size={48} />
            </button>

            <button
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white hover:scale-110 transition-all z-[110] p-4 hidden md:block"
                onClick={(e) => {
                    e.stopPropagation();
                    onNext();
                }}
                aria-label="Next image"
            >
                <ChevronRight size={48} />
            </button>

            {/* Main Image */}
            <div className="relative max-w-full max-h-[90vh] flex items-center justify-center">
                <img
                    src={currentImage.image}
                    alt={currentImage.title}
                    className="max-w-full max-h-[90vh] object-contain shadow-2xl select-none"
                    onClick={(e) => e.stopPropagation()}
                />
            </div>
        </div>
    );
};



