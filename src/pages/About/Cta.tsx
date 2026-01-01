import React from 'react';
import { Sparkles } from 'lucide-react';
import { Button } from '../../components/Button';

interface CtaProps {
    onNavigate: (page: string) => void;
}

export const Cta: React.FC<CtaProps> = ({ onNavigate }) => {
    return (
        <section className="relative py-20 bg-dark-950 overflow-hidden">
            {/* Parallax Background */}
            <div className="absolute inset-0 opacity-30">
                <img
                    src="https://images.unsplash.com/photo-1511285560982-1351cdeb9821?auto=format&fit=crop&q=80&w=1920"
                    className="w-full h-full object-cover"
                    alt="Booking Background"
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-950/90 to-dark-950"></div>

            {/* Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>

            <div className="relative container mx-auto px-6 z-10">
                <div className="max-w-4xl mx-auto text-center border border-white/10 bg-white/5 backdrop-blur-sm rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden group">

                    {/* Decorative corners */}
                    <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-gold-500/30 rounded-tl-[2.5rem]"></div>
                    <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-gold-500/30 rounded-br-[2.5rem]"></div>

                    <div className="flex justify-center mb-6">
                        <div className="p-3 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 animate-pulse">
                            <Sparkles size={24} />
                        </div>
                    </div>

                    <h2 className="font-serif text-3xl md:text-5xl text-white mb-6 leading-tight">
                        "Life is a canvas. <br /> Let us paint your <span className="text-gold-500 italic">masterpiece</span>."
                    </h2>

                    <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-6"></div>

                    <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto font-light leading-relaxed">
                        Our calendar fills up quickly, especially for wedding seasons. Reach out today to secure your date and let's start planning something beautiful.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Button variant="danger" size="lg" className="px-12 w-full sm:w-auto" onClick={() => onNavigate('booking')}>
                            Book Your Session
                        </Button>
                        <Button variant="outline" size="lg" onClick={() => onNavigate('portfolio')} className="w-full sm:w-auto">
                            Explore Portfolio
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};



