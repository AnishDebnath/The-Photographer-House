import React from 'react';
import { Button } from '../../components/Button';

interface BioProps {
    onNavigate: (page: string) => void;
}

export const Bio: React.FC<BioProps> = ({ onNavigate }) => {
    return (
        <section className="py-24 bg-white dark:bg-dark-900 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-6xl mx-auto">

                    {/* Text Side (Left) */}
                    <div className="lg:w-1/2 relative z-10">
                        <div className="mb-8">
                            <span className="text-gold-500 font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Since 2010</span>
                            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 dark:text-white leading-tight mb-6">
                                Capturing Life's <br />
                                <span className="italic text-gold-500">Masterpiece</span>
                            </h2>
                            <div className="w-20 h-1 bg-gold-500"></div>
                        </div>

                        <div className="prose dark:prose-invert text-gray-600 dark:text-gray-300 leading-relaxed space-y-6">
                            <p className="text-xl font-light text-gray-900 dark:text-white">
                                Founded in 2010, <strong>The Photographer House</strong> began with a simple philosophy: that every photograph should not just prove you were there, but prove how it <em>felt</em> to be there.
                            </p>
                            <p>
                                We are a collective of dreamers, storytellers, and technical perfectionists. Led by Alex Richardson, our team has traveled to over 20 countries, documenting everything from royal weddings in Rajasthan to intimate elopements in the Swiss Alps.
                            </p>
                            <p>
                                We don't believe in cookie-cutter templates. We believe in shadow and light, in the raw emotion of a tear, and the explosive joy of a laugh. When you choose us, you aren't just hiring a person with a camera; you are commissioning an artist to curate your legacy.
                            </p>
                        </div>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <Button variant="danger" onClick={() => onNavigate('portfolio')}>View Our Work</Button>
                            <Button variant="outline" onClick={() => onNavigate('booking')}>Contact Us</Button>
                        </div>
                    </div>

                    {/* Image Side (Right) */}
                    <div className="lg:w-1/2 relative w-full flex justify-center lg:justify-center">
                        <div className="relative w-full">
                            {/* Decorative Frame Elements */}
                            <div className="absolute -top-6 -right-6 w-full h-full border border-gold-500/30 rounded-[2rem] hidden md:block"></div>
                            <div className="absolute top-6 right-6 w-20 h-20 border-t-2 border-r-2 border-gold-500/50 rounded-tr-3xl hidden md:block"></div>
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>

                            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-gray-100 dark:bg-gray-800 group aspect-square">
                                <img
                                    src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800"
                                    alt="Photographer in action"
                                    className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105 grayscale-[20%] group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>

                                {/* Name and Title Card - Compact */}
                                <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-xl border border-white/10 py-3 px-5 rounded-xl shadow-2xl transform transition-transform duration-500 hover:scale-105">
                                    <div className="flex items-center gap-3">
                                        <div className="w-1 h-8 bg-gold-500 rounded-full"></div>
                                        <div>
                                            <p className="text-gold-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-0.5">Founder</p>
                                            <p className="font-serif text-lg text-white leading-none">Alex Richardson</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};



