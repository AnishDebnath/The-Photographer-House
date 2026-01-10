import React, { useState, useEffect } from 'react';
import { BadgeCheck } from 'lucide-react';
import { Button } from '../../components/Button';

interface HeroProps {
    onNavigate: (page: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black" aria-label="Hero Section">
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-60"
                // poster="https://picsum.photos/id/431/1920/1080"
                >
                    <source src="/assets/home/homepage hero 1.webm" type="video/webm" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-dark-900/60 via-dark-900/40 to-dark-900/90"></div>
            </div>

            <div
                className="relative z-10 text-center px-6 max-w-5xl mx-auto"
                style={{ transform: `translateY(${scrollY * 0.4}px)` }}
            >
                <div className="animate-fade-in-up">
                    <p className="inline-block border border-gold-500/50 rounded-full px-4 md:px-6 py-1.5 md:py-2 bg-black/20 backdrop-blur-sm text-gold-500 tracking-[0.15em] md:tracking-[0.2em] uppercase text-[10px] md:text-xs font-bold mb-6 md:mb-8">
                        www.thephotographerhouse.com
                    </p>
                </div>
                <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-[1.1] md:leading-tight">
                    Where Every <br />
                    <span className="italic text-gold-500">Click</span> Tells a Story
                </h1>
                <p className="text-gray-300 max-w-2xl mx-auto mb-8 md:mb-10 font-light text-base md:text-lg px-2">
                    Turning spare moments into lasting memories in Indian weddings, commodities, jewelry, and e-commerce photography since 2010.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button variant="primary" size="lg" onClick={() => onNavigate('portfolio')}>Explore Portfolio</Button>
                    <Button variant="dark-outline" size="lg" onClick={() => onNavigate('services')}>Our Services</Button>
                </div>
            </div>

            {/* Lead Photographer Badge */}
            {/* <div
                className="absolute bottom-10 right-10 z-20 hidden md:flex items-center gap-4 bg-red-900/20 backdrop-blur-md border border-red-500/20 p-2 pr-8 rounded-full shadow-2xl cursor-default hover:bg-red-900/30 transition-colors"
                role="region"
                aria-label="Lead Photographer Profile"
            >
                <div className="relative">
                    <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=150&h=150"
                        alt="Preetam Chakraborty"
                        className="w-14 h-14 rounded-full border-2 border-gold-500 object-cover"
                    />
                </div>
                <div className="flex flex-col justify-center">
                    <h3 className="font-serif text-white text-lg leading-tight tracking-wide">Preetam Chakraborty</h3>
                    <div className="flex items-center gap-1.5 mt-0.5">
                        <BadgeCheck size={14} className="text-gold-500 fill-gold-500 text-red-950" />
                        <p className="text-[10px] font-bold text-gold-500 uppercase tracking-[0.15em]">Lead Photographer</p>
                    </div>
                </div>
            </div> */}
            {/* Scroll Indicator */}
            <div
                className="absolute bottom-16 md:bottom-20 left-0 right-0 mx-auto w-fit z-20 flex flex-col items-center gap-4 animate-bounce opacity-80 cursor-pointer group"
                onClick={() => {
                    const nextSection = document.getElementById('latest-work');
                    if (nextSection) {
                        nextSection.scrollIntoView({ behavior: 'smooth' });
                    } else {
                        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
                    }
                }}
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1 group-hover:border-gold-500/50 transition-colors">
                    <div className="w-1.5 h-2.5 bg-gold-500 rounded-full animate-scroll-dot"></div>
                </div>
                {/* Compensate for tracking to ensure pixel-perfect text centering */}
                <span className="text-[10px] text-white/50 group-hover:text-white transition-colors uppercase tracking-[0.3em] font-bold pl-[0.3em]">Scroll</span>
            </div>
        </section>
    );
};



