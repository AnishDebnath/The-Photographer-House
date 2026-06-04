import React from 'react';
import { Play } from 'lucide-react';
import { Button } from '../../components/ui/Button';

interface VideoShowcaseProps {
    onNavigate: (page: string) => void;
}

export const VideoShowcase: React.FC<VideoShowcaseProps> = ({ onNavigate }) => {
    return (
        <section className="relative py-20 md:py-32 flex items-center justify-center overflow-hidden bg-black" aria-label="Video Showcase">
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-100"
                >
                    <source src="/assets/home/video-background.webm" type="video/webm" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black/60"></div>

                {/* <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/4WHACREjwN0?autoplay=1&mute=1&controls=0&loop=1&playlist=4WHACREjwN0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&vq=hd1440p60"
                    title="Video Showcase Background"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    className="w-full h-full scale-[1.5] pointer-events-none opacity-100"
                ></iframe> */}
                <div className="absolute inset-0 bg-black/20"></div>
            </div>
            <div className="relative z-10 text-center max-w-4xl px-6">
                <span className="inline-block border border-gold-500/50 text-gold-500 px-4 py-1 rounded-full text-[10px] md:text-xs uppercase tracking-widest mb-6">
                    Cinematography Exclusive
                </span>
                <h2 className="font-serif text-4xl md:text-6xl text-white mb-6 leading-tight">Stories in Motion</h2>
                <p className="text-gray-300 mb-10 leading-relaxed text-base md:text-lg">
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



