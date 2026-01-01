import React from 'react';
import { Star } from 'lucide-react';
import { Button } from '../../components/Button';

interface CtaProps {
    onNavigate: (page: string, sectionId?: string) => void;
}

export const Cta: React.FC<CtaProps> = ({ onNavigate }) => {
    return (
        <section className="py-20 px-6">
            <div className="container mx-auto">
                <div className="relative rounded-[2rem] overflow-hidden bg-dark-900 text-white p-12 md:p-20 text-center shadow-2xl">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1920"
                            alt="Camera Lens Background"
                            className="w-full h-full object-cover opacity-30"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/80 to-transparent"></div>
                    </div>

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <div className="inline-block mb-6 p-3 rounded-full border border-gold-500/30 bg-gold-500/10 backdrop-blur-md">
                            <Star className="text-gold-500 fill-gold-500 w-6 h-6" />
                        </div>

                        <h2 className="font-serif text-4xl md:text-6xl mb-6 leading-tight">
                            Ready to create your own <span className="italic text-gold-500">Masterpiece</span>?
                        </h2>

                        <p className="text-gray-300 text-lg md:text-xl mb-10 font-light leading-relaxed">
                            Join the hundreds of happy clients who have trusted us with their most precious moments. Let's discuss your vision.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button variant="primary" size="lg" onClick={() => onNavigate('home', 'contact')} className="min-w-[200px]">
                                Book A Consultation
                            </Button>
                            <Button variant="outline" size="lg" onClick={() => onNavigate('portfolio')} className="min-w-[200px] border-gray-600 text-gray-300 hover:border-white hover:text-white hover:bg-white/5">
                                View Portfolio
                            </Button>
                        </div>

                        <p className="mt-8 text-xs text-gray-500 uppercase tracking-widest">
                            Limited Availability for {new Date().getFullYear()} Season
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};



