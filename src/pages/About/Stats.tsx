import React from 'react';
import { Camera, Globe, Users, Award } from 'lucide-react';
import { StatCounter } from '../../components/StatCounter';

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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {[
                        {
                            value: 800,
                            label: "Weddings Captured",
                            suffix: "+",
                            icon: Camera,
                        },
                        {
                            value: 24,
                            label: "Cities Traveled",
                            suffix: "",
                            icon: Globe,
                        },
                        {
                            value: 5000,
                            label: "Happy Clients",
                            suffix: "+",
                            icon: Users,
                        },
                        {
                            value: 14,
                            label: "Years Experience",
                            suffix: "+",
                            icon: Award,
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex items-center gap-6 shadow-lg hover:shadow-gold-500/10 hover:border-gold-500/50 transition-all duration-300 group">
                            <div className="w-16 h-16 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-500 transition-transform duration-500 group-hover:scale-110">
                                <item.icon size={32} strokeWidth={1.5} />
                            </div>
                            <div>
                                <StatCounter
                                    value={item.value}
                                    label={item.label}
                                    suffix={item.suffix}
                                    valueClassName="text-4xl font-serif font-bold text-white leading-none mb-1 group-hover:text-gold-500 transition-colors"
                                    labelClassName="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};



