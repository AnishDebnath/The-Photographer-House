import React, { useState, useEffect, useRef } from 'react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    className?: string;
    containerClassName?: string;
}

export const LazyImage: React.FC<LazyImageProps> = ({
    src,
    alt,
    className = "",
    containerClassName = "",
    ...props
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);

    // Reset state and check for cached images
    useEffect(() => {
        setIsLoaded(false);
        setError(false);

        if (imgRef.current?.complete) {
            setIsLoaded(true);
        }
    }, [src]);

    return (
        <div className={`relative overflow-hidden bg-zinc-800/50 ${containerClassName}`}>
            {/* Shimmer Effect while loading */}
            {!isLoaded && !error && (
                <div className="absolute inset-0 z-10">
                    <div className="w-full h-full animate-pulse bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 bg-[length:200%_100%] animate-[shimmer_2s_infinite]"></div>
                </div>
            )}

            <img
                key={src} // Force re-mount on src change for cleaner state transitions
                ref={imgRef}
                src={src}
                alt={alt}
                loading="lazy"
                onLoad={() => setIsLoaded(true)}
                onError={() => {
                    setError(true);
                    setIsLoaded(false); // Ensure we don't show a broken image transition
                }}
                className={`
                    transition-all duration-1000 ease-out
                    ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105 blur-sm'}
                    ${className}
                `}
                {...props}
            />

            {error && (
                <div className="absolute inset-0 flex items-center justify-center bg-zinc-900/80 backdrop-blur-sm border border-white/5">
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Image Unavailable</span>
                </div>
            )}
        </div>
    );
};
