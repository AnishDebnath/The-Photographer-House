import React, { useState, useRef } from 'react';
import { Star, User, MapPin, Play, Pause } from 'lucide-react';
import { FullReview } from '../../types';
import { reviews } from './data';

const GoogleLogo = ({ className = "" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" width="20" height="20" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.24.81-.6z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
);

const FacebookLogo = ({ className = "" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" width="20" height="20" className={className} xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill="#1877F2" />
        <path d="M16.525 14.292l.532-3.47h-3.328v-2.25c0-.949.465-1.874 1.956-1.874h1.549V3.695s-1.374-.235-2.686-.235c-2.741 0-4.533 1.662-4.533 4.669v2.651H7.078v3.47h3.047v8.385a12.09 12.09 0 003.75 0v-8.385h2.65z" fill="#fff" />
    </svg>
);

const InstagramLogo = ({ className = "" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" width="20" height="20" className={className} xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="igLinear" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0" stopColor="#feda75" />
                <stop offset="0.25" stopColor="#fa7e1e" />
                <stop offset="0.5" stopColor="#d62976" />
                <stop offset="0.75" stopColor="#962fbf" />
                <stop offset="1" stopColor="#4f5bd5" />
            </linearGradient>
        </defs>
        <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#igLinear)" />
        <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm5.25-6.75a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z" fill="#fff" />
    </svg>
);

const YoutubeLogo = ({ className = "" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" width="20" height="20" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="4" width="20" height="16" rx="5" fill="#FF0000" />
        <path d="M10 9l6 3-6 3V9z" fill="#fff" />
    </svg>
);

const renderStars = (count: number) => {
    return [...Array(5)].map((_, i) => (
        <Star
            key={i}
            size={14}
            className={`${i < count ? 'fill-gold-500 text-gold-500' : 'fill-gray-200 text-gray-200 dark:fill-gray-700 dark:text-gray-700'}`}
        />
    ));
};

const renderSourceIcon = (review: FullReview, isOverlay: boolean = false) => {
    const { source, reviewLink } = review;

    const getIcon = () => {
        switch (source) {
            case 'google': return <GoogleLogo className="w-3.5 h-3.5 md:w-4 md:h-4" />;
            case 'facebook': return <FacebookLogo className="w-3.5 h-3.5 md:w-4 md:h-4" />;
            case 'instagram': return <InstagramLogo className="w-3.5 h-3.5 md:w-4 md:h-4" />;
            case 'youtube': return <YoutubeLogo className="w-3.5 h-3.5 md:w-4 md:h-4" />;
            default: return null;
        }
    };

    if (source === 'youtube') {
        const content = (
            <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border backdrop-blur-md transition-all duration-300 ${reviewLink ? 'hover:bg-red-500/20 active:scale-95 cursor-pointer shadow-lg hover:shadow-red-500/20' : ''} bg-red-500/15 border-red-500/30 text-white font-bold text-[10px] md:text-xs uppercase tracking-wider`}>
                <YoutubeLogo className="w-3.5 h-3.5 md:w-4 md:h-4" />
                <span>YouTube</span>
            </div>
        );
        return reviewLink ? (
            <a href={reviewLink} target="_blank" rel="noopener noreferrer" className="block z-10">{content}</a>
        ) : content;
    }

    if (reviewLink) {
        return (
            <a
                href={reviewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-1.5 px-3 rounded-full bg-white/50 dark:bg-white/[0.03] border border-gray-200/50 dark:border-white/[0.05] shadow-sm hover:shadow-md hover:bg-white dark:hover:bg-white/[0.08] transition-all duration-300 group/source z-10"
                title={`View on ${source}`}
            >
                <div className="group-hover/source:scale-110 transition-transform duration-300">
                    {getIcon()}
                </div>
                <span className="text-[10px] md:text-xs font-bold text-gray-600 dark:text-gray-300 group-hover/source:text-blue-600 dark:group-hover/source:text-white transition-colors uppercase tracking-tight capitalize">{source}</span>
            </a>
        );
    }

    let textColor = isOverlay ? 'text-white' : 'text-gray-800 dark:text-gray-200';

    return (
        <div className={`flex items-center gap-1.5 text-[10px] md:text-xs font-bold ${textColor}`}>
            {getIcon()}
            <span className="capitalize">{source}</span>
        </div>
    );
};

const VideoReviewCard: React.FC<{ review: FullReview }> = ({ review }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div
            className="relative h-full aspect-[3/4] md:aspect-auto md:min-h-[400px] bg-dark-900 rounded-2xl shadow-lg transition-all duration-500 border border-gray-100 dark:border-white/5 overflow-hidden group block"
        >
            <video
                ref={videoRef}
                src={review.video}
                loop
                playsInline
                preload="metadata"
                onClick={togglePlay}
                className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 cursor-pointer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent pointer-events-none"></div>

            {/* Overlay Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none">
                <div className="flex justify-between items-center mb-6 pointer-events-auto">
                    <div className="flex gap-1">
                        {renderStars(review.rating)}
                    </div>
                    {/* Source Icon / Link */}
                    {renderSourceIcon(review, false)}
                </div>

                <div className="flex items-center gap-4 pt-6 mt-auto pointer-events-auto border-t border-white/10">
                    <div className="relative shrink-0">
                        {review.image ? (
                            <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-gold-500/20 group-hover:ring-gold-500 transition-all" />
                        ) : (
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center ring-2 ring-gold-500/20 group-hover:ring-gold-500 text-white transition-all">
                                <User size={20} />
                            </div>
                        )}
                    </div>
                    <div>
                        <h4 className="font-serif text-base text-white font-bold">{review.name}</h4>
                        <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-bold mt-1 text-gold-500">
                            <MapPin size={10} className="stroke-[2.5]" />
                            <span>{review.location}</span>
                        </div>
                    </div>
                    {/* Reduced size, icon-only play/pause button */}
                    <button
                        onClick={(e) => { e.stopPropagation(); togglePlay(); }}
                        className="ml-auto text-white hover:text-gold-500 transition-all duration-300 transform hover:scale-110 active:scale-90"
                    >
                        {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" className="ml-0.5" />}
                    </button>
                </div>
            </div>
        </div>
    );
};

export const Grid: React.FC = () => {
    return (
        <div className="container mx-auto px-6 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {reviews.map((review) => (
                    review.video ? (
                        <VideoReviewCard key={review.id} review={review} />
                    ) : (
                        <div
                            key={review.id}
                            className="flex flex-col h-full bg-white dark:bg-dark-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-white/5 overflow-hidden group hover:-translate-y-1"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={review.eventImage}
                                    alt={`${review.name}'s Event`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                            </div>

                            <div className="flex flex-col flex-grow p-8">
                                <div className="flex justify-between items-center mb-6">
                                    <div className="flex gap-1">
                                        {renderStars(review.rating)}
                                    </div>
                                    <div className="relative">
                                        {renderSourceIcon(review)}
                                    </div>
                                </div>

                                <div className="flex-grow mb-8">
                                    <p className="text-gray-900 dark:text-gray-100 text-lg leading-relaxed italic font-medium line-clamp-6">
                                        "{review.text}"
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 pt-6 border-t border-gray-100 dark:border-white/5 mt-auto">
                                    <div className="relative shrink-0">
                                        {review.image ? (
                                            <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-gold-500/20 group-hover:ring-gold-500 transition-all" />
                                        ) : (
                                            <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center ring-2 ring-gold-500/20 group-hover:ring-gold-500 text-gray-400 transition-all">
                                                <User size={20} />
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        <h4 className="font-serif text-base text-gray-900 dark:text-white font-bold">{review.name}</h4>
                                        <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-bold mt-1 text-gold-500">
                                            <MapPin size={10} className="stroke-[2.5]" />
                                            <span>{review.location}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                ))}
            </div>
        </div>
    );
};



