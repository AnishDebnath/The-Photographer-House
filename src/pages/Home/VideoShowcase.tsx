import React from 'react';
import { Play } from 'lucide-react';
import { Button } from '../../components/Button';

interface VideoShowcaseProps {
    onNavigate: (page: string) => void;
}

export const VideoShowcase: React.FC<VideoShowcaseProps> = ({ onNavigate }) => {
    return (
        <section className="relative py-32 flex items-center justify-center overflow-hidden bg-black" aria-label="Video Showcase">
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-60"
                >
                    <source src="https://videos.pexels.com/video-files/3205915/3205915-hd_1920_1080_25fps.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black/60"></div>
            </div>
            <div className="relative z-10 text-center max-w-4xl px-6">
                <span className="inline-block border border-gold-500/50 text-gold-500 px-4 py-1 rounded-full text-xs uppercase tracking-widest mb-6">
                    Cinematography Exclusive
                </span>
                <h2 className="font-serif text-5xl md:text-6xl text-white mb-6">Stories in Motion</h2>
                <p className="text-gray-300 mb-10 leading-relaxed text-lg">
                    Experience the surprise, the laughter, and the unforgettable rush of raw emotions. Our cinematic films capture the essence of your celebration in a way that still images simply cannot.
                </p>
                <Button variant="primary" size="lg" className="rounded-full" onClick={() => onNavigate('films')}>
                    <Play className="mr-2 h-4 w-4 fill-current" aria-hidden="true" />
                    Watch Our Films
                </Button>
            </div>
        </section>
    );
};



