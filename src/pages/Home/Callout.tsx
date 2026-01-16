import React from 'react';
import { Button } from '../../components/Button';
import patternbanner from '../../assets/home/pattern banner.jpg';

interface CalloutProps {
    onNavigate: (page: string) => void;
}

export const Callout: React.FC<CalloutProps> = ({ onNavigate }) => {
    return (
        <section id="about" className="relative py-24 md:py-32 bg-black overflow-hidden" aria-label="Unique Selling Proposition">
            {/* Background Pattern */}
            <div
                className="absolute inset-0 z-0 opacity-40"
                style={{
                    backgroundImage: `url(${patternbanner})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed'
                }}
            ></div>

            {/* Gradient Overlay for better text readability */}
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-black/10 to-transparent"></div>
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-black via-black/10 to-transparent"></div>

            <div className="container mx-auto px-6 text-center relative z-10">
                <p className="text-gold-500 text-[10px] md:text-xs font-bold tracking-[0.2em] mb-4">WANT TO KNOW WHAT'S POSSIBLE?</p>
                <h2 className="font-serif text-3xl md:text-6xl text-white mb-6 md:mb-8 leading-tight">
                    "Grand, Creative & <span className="text-gold-500 italic">Unique?</span>"
                </h2>
                <p className="text-gray-300 max-w-2xl mx-auto mb-10 font-light italic text-base md:text-lg leading-relaxed">
                    "Not just a claim. It's our way of life. We offer bespoke, breathtaking & elite wedding photography services across the globe."
                </p>
                <Button variant="primary" size="lg" onClick={() => onNavigate('about-tph')}>Read Our Story</Button>
            </div>
        </section>
    );
};



