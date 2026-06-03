import React from 'react';
import { X } from 'lucide-react';

interface LightboxProps {
    selectedImage: string;
    onClose: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ selectedImage, onClose }) => {
    return (
        <div
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-300 backdrop-blur-md"
            onClick={onClose}
        >
            <button
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[110] p-2 bg-white/10 rounded-full hover:bg-white/20"
                onClick={onClose}
            >
                <X size={32} />
            </button>

            <img
                src={selectedImage}
                alt="Album Preview"
                className="max-w-full max-h-[90vh] object-contain shadow-2xl rounded-sm"
                onClick={(e) => e.stopPropagation()}
            />
        </div>
    );
};



