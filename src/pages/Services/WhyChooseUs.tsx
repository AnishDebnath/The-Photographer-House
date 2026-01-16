import React from 'react';
import { servicesWhyChooseUs } from '../../components/data';

export const WhyChooseUs: React.FC = () => {

    return (
        <div className="mt-20 py-32 bg-dark-950 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-[128px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-900/10 rounded-full blur-[128px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20 max-w-4xl mx-auto">
                    <h2 className="font-serif text-4xl md:text-6xl text-white mb-8">Why We Shine Bright As The <br /><span className="text-gold-500 italic">Top Kolkata Wedding Photographer</span></h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-8"></div>
                    <p className="text-gray-400 font-light text-xl leading-relaxed">Excellence is not an act, but a habit. Here is why couples trust us with their most precious memories.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesWhyChooseUs.map((item, idx) => (
                        <div key={idx} className={`bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10 hover:border-gold-500/50 hover:bg-white/10 transition-all duration-500 group ${idx === 6 ? 'md:col-span-2 lg:col-span-3 lg:w-2/3 lg:mx-auto' : ''}`}>
                            <div className="flex items-start justify-between mb-6">
                                <div className="w-14 h-14 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl flex items-center justify-center text-black shadow-lg shadow-gold-500/20 group-hover:scale-110 transition-transform duration-500">
                                    <item.icon size={28} />
                                </div>
                                <span className="text-5xl font-serif text-white/5 font-bold group-hover:text-white/10 transition-colors">0{idx + 1}</span>
                            </div>

                            <h3 className="font-serif text-2xl text-white mb-4 group-hover:text-gold-400 transition-colors">{item.title}</h3>
                            <p className="text-gray-400 text-base leading-relaxed group-hover:text-gray-300 transition-colors">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};



