import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '../../components/Button';

interface BookingProps {
    onNavigate: (page: string) => void;
}

export const Booking: React.FC<BookingProps> = ({ onNavigate }) => {
    return (
        <section className="relative py-32 bg-dark-950 overflow-hidden border-t border-white/5">
            {/* Parallax Background */}
            <div className="absolute inset-0 opacity-40">
                <img src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover grayscale" alt="Booking Background" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-900/90 to-dark-900"></div>

            <div className="relative container mx-auto px-6 z-10 max-w-4xl text-center">
                <div className="inline-flex items-center gap-2 bg-gold-500/10 text-gold-500 px-4 py-1.5 rounded-full mb-8 border border-gold-500/20">
                    <span className="w-2 h-2 bg-gold-500 rounded-full animate-pulse"></span>
                    <span className="text-xs font-bold uppercase tracking-widest">Limited Slots Available</span>
                </div>

                <h2 className="font-serif text-4xl md:text-6xl text-white mb-4">"Ready to book your</h2>
                <h2 className="font-serif text-4xl md:text-6xl text-gold-500 italic mb-16">Session?"</h2>

                {/* Minimalist Form */}
                <form className="bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-[2rem] border border-white/10 shadow-2xl" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                        <div className="text-left group relative">
                            <label className="text-[10px] uppercase tracking-widest text-gold-500 mb-2 block group-focus-within:text-white transition-colors">Photography Type</label>
                            <div className="relative">
                                <select className="w-full bg-transparent border-b border-white/20 py-3 text-white outline-none focus:border-gold-500 transition-colors appearance-none cursor-pointer">
                                    <option className="bg-dark-900">Wedding Photography</option>
                                    <option className="bg-dark-900">Jewellery Shoot</option>
                                    <option className="bg-dark-900">Product Photography</option>
                                    <option className="bg-dark-900">Photo Albums</option>
                                    <option className="bg-dark-900">Fashion / Portfolio</option>
                                </select>
                                <ChevronDown className="absolute right-0 top-3 text-gray-500 pointer-events-none group-focus-within:text-gold-500 transition-colors" size={16} />
                            </div>
                        </div>
                        <div className="text-left group">
                            <label className="text-[10px] uppercase tracking-widest text-gold-500 mb-2 block group-focus-within:text-white transition-colors">Location</label>
                            <input type="text" placeholder="e.g. Kolkata, India" className="w-full bg-transparent border-b border-white/20 py-3 text-white outline-none focus:border-gold-500 transition-colors placeholder-gray-500 focus:placeholder-white/20" />
                        </div>
                        <div className="text-left group">
                            <label className="text-[10px] uppercase tracking-widest text-gold-500 mb-2 block group-focus-within:text-white transition-colors">Date</label>
                            <input
                                type="date"
                                className="w-full bg-transparent border-b border-white/20 py-3 text-white outline-none focus:border-gold-500 transition-colors placeholder-gray-600 [color-scheme:dark] opacity-90 focus:opacity-100"
                            />
                        </div>
                    </div>
                    <Button variant="primary" size="lg" className="w-full md:w-auto px-16" onClick={() => onNavigate('booking')}>Send Request</Button>
                </form>
            </div>
        </section>
    );
};



