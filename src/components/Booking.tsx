import React from 'react';
import { Camera, MapPin, Calendar, Phone, ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from './Button';
import { LazyImage } from './LazyImage';

interface BookingProps {
    onNavigate: (page: string) => void;
}

export const Booking: React.FC<BookingProps> = ({ onNavigate }) => {
    return (
        <section className="relative py-32 bg-dark-950 flex items-center justify-center overflow-hidden border-t border-white/5">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <LazyImage
                    src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=1920"
                    alt="Booking Background"
                    className="w-full h-full object-cover opacity-20"
                    containerClassName="w-full h-full absolute inset-0"
                />
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-dark-950"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">

                {/* Availability Badge */}
                <div className="inline-block border border-gold-500/30 bg-gold-500/10 px-6 py-1.5 rounded-full text-gold-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-8 backdrop-blur-md">
                    @ 2024 / 2025 Availability
                </div>

                {/* Heading */}
                <h2 className="font-serif text-4xl md:text-6xl text-white mb-2 leading-tight">
                    "Let us capture your
                </h2>
                <h2 className="font-serif text-4xl md:text-6xl text-gold-500 italic mb-16 leading-tight">
                    Perfect Moment."
                </h2>

                {/* Horizontal Form (Desktop) */}
                <div className="hidden md:inline-flex items-center bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-full p-3 pl-10 max-w-5xl w-full shadow-2xl transition-all duration-300 hover:border-gold-500/30 hover:bg-zinc-900/80">

                    {/* Event Type */}
                    <div className="flex-1 flex flex-col items-start border-r border-white/10 pr-8 mr-8 group relative">
                        <label className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gold-500 font-bold mb-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                            <Camera size={12} /> Event Type
                        </label>
                        <div className="w-full relative">
                            <select className="w-full bg-transparent border-none text-white outline-none font-serif text-xl p-0 cursor-pointer appearance-none focus:ring-0 placeholder-gray-500">
                                <option className="bg-dark-900">Wedding</option>
                                <option className="bg-dark-900">Pre-Wedding</option>
                                <option className="bg-dark-900">Fashion</option>
                                <option className="bg-dark-900">Product</option>
                            </select>
                            <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                        </div>
                    </div>

                    {/* Location */}
                    <div className="flex-1 flex flex-col items-start border-r border-white/10 pr-8 mr-8 group">
                        <label className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gold-500 font-bold mb-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                            <MapPin size={12} /> Location
                        </label>
                        <input type="text" placeholder="City, Venue" className="w-full bg-transparent border-none text-white outline-none font-serif text-xl p-0 placeholder-zinc-600 focus:ring-0" />
                    </div>

                    {/* Date */}
                    <div className="flex-1 flex flex-col items-start border-r border-white/10 pr-8 mr-8 group min-w-0">
                        <label className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gold-500 font-bold mb-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                            <Calendar size={12} /> Date (Approx)
                        </label>
                        <input
                            type="text"
                            placeholder="dd-mm-yyyy"
                            maxLength={10}
                            onChange={(e) => {
                                let v = e.target.value.replace(/[^0-9]/g, '');
                                if (v.length > 8) v = v.slice(0, 8);
                                if (v.length > 4) v = `${v.slice(0, 2)}-${v.slice(2, 4)}-${v.slice(4)}`;
                                else if (v.length > 2) v = `${v.slice(0, 2)}-${v.slice(2)}`;
                                e.target.value = v;
                            }}
                            className="w-full bg-transparent border-none text-white outline-none font-serif text-xl p-0 h-[30px] placeholder-zinc-600 focus:ring-0 [color-scheme:dark]"
                        />
                    </div>

                    {/* Phone */}
                    <div className="flex-1 flex flex-col items-start pr-8 mr-8 group">
                        <label className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gold-500 font-bold mb-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                            <Phone size={12} /> Phone
                        </label>
                        <input type="tel" placeholder="+91..." className="w-full bg-transparent border-none text-white outline-none font-serif text-xl p-0 placeholder-zinc-600 focus:ring-0" />
                    </div>

                    {/* Button */}
                    <button
                        onClick={() => onNavigate('booking')}
                        className="bg-gold-500 hover:bg-white text-black font-bold text-xs uppercase tracking-widest px-10 py-5 rounded-full transition-all duration-300 shadow-[0_0_20px_-5px_theme(colors.gold.500)] hover:shadow-white/50 flex items-center gap-2 whitespace-nowrap group/btn"
                    >
                        <span>Check Availability</span>
                        <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Stacked Form (Mobile) */}
                <div className="md:hidden bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] p-6 space-y-6 text-left">
                    {/* Event Type */}
                    <div className="group">
                        <label className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gold-500 font-bold mb-2">
                            <Camera size={12} /> Event Type
                        </label>
                        <div className="relative border-b border-white/20 pb-2">
                            <select className="w-full bg-transparent border-none text-white outline-none font-serif text-lg p-0 cursor-pointer appearance-none focus:ring-0">
                                <option className="bg-dark-900">Wedding</option>
                                <option className="bg-dark-900">Pre-Wedding</option>
                                <option className="bg-dark-900">Fashion</option>
                            </select>
                            <ChevronDown className="absolute right-0 top-1 text-gray-500 pointer-events-none" size={16} />
                        </div>
                    </div>

                    {/* Location */}
                    <div className="group">
                        <label className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gold-500 font-bold mb-2">
                            <MapPin size={12} /> Location
                        </label>
                        <input type="text" placeholder="City, Venue" className="w-full bg-transparent border-b border-white/20 pb-2 text-white outline-none font-serif text-lg p-0 placeholder-gray-600 focus:ring-0" />
                    </div>

                    {/* Date */}
                    <div className="group">
                        <label className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gold-500 font-bold mb-2">
                            <Calendar size={12} /> Date (Approx)
                        </label>
                        <input type="date" className="w-full bg-transparent border-b border-white/20 pb-2 text-white outline-none font-serif text-lg p-0 placeholder-gray-600 focus:ring-0 [color-scheme:dark]" />
                    </div>

                    {/* Phone */}
                    <div className="group">
                        <label className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gold-500 font-bold mb-2">
                            <Phone size={12} /> Phone
                        </label>
                        <input type="tel" placeholder="+91..." className="w-full bg-transparent border-b border-white/20 pb-2 text-white outline-none font-serif text-lg p-0 placeholder-gray-600 focus:ring-0" />
                    </div>

                    <Button variant="primary" className="w-full" onClick={() => onNavigate('booking')}>Check Availability</Button>
                </div>

            </div>
        </section>
    );
};
