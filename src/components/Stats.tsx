import React from 'react';
import { StatCounter } from './StatCounter';
import { statItems } from './data';

export const Stats: React.FC = () => {
    return (
        <section className="relative py-24 bg-dark-950 overflow-hidden">

            {/* Rich Background */}
            <div className="absolute inset-0 opacity-20">
                <img
                    src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=1920"
                    alt="Background Texture"
                    className="w-full h-full object-cover grayscale"
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-dark-950/95 via-dark-950/80 to-dark-950/95"></div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
                    {statItems.map((item, idx) => (
                        <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[1.5rem] md:rounded-2xl p-5 md:p-6 flex items-center gap-4 md:gap-6 shadow-lg hover:shadow-gold-500/10 hover:border-gold-500/50 transition-all duration-300 group">
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-500 transition-transform duration-500 group-hover:scale-110 shrink-0">
                                <item.icon size={24} className="md:w-8 md:h-8" strokeWidth={1.5} />
                            </div>
                            <div>
                                <StatCounter
                                    value={item.value}
                                    label={item.label}
                                    suffix={item.suffix}
                                    valueClassName="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-white leading-none mb-1 group-hover:text-gold-500 transition-colors"
                                    labelClassName="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
