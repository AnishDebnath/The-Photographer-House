import React, { useState, useRef, useEffect } from 'react';
import { Camera, MapPin, Calendar, Phone, ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from './Button';
import { LazyImage } from './LazyImage';
import { eventTypes } from './data';

interface BookingProps {
    onNavigate: (page: string) => void;
}

export const Booking: React.FC<BookingProps> = ({ onNavigate }) => {
    const [selectedType, setSelectedType] = useState(eventTypes[0]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const formRef = useRef<HTMLDivElement>(null);

    // Close dropdown on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (formRef.current && !formRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelectType = (type: string) => {
        setSelectedType(type);
        setIsDropdownOpen(false);
    };

    return (
        <section className="relative py-32 bg-dark-950 flex items-center justify-center border-t border-white/5 z-10">
            {/* Custom Scrollbar Styles */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #d4af37;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #f4cf57;
                }
            `}} />

            {/* Background Layer */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <LazyImage
                    src="assets/booking banner.jpg"
                    alt="Booking Background"
                    className="w-full h-full object-cover opacity-20"
                    containerClassName="w-full h-full absolute inset-0"
                />
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-dark-950"></div>
            </div>

            <div className="container mx-auto px-6 relative z-20 text-center" ref={formRef}>

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

                {/* Horizontal Form (Desktop) - Fixed Layout */}
                <div className="hidden md:inline-flex items-center bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-full p-3 pl-10 max-w-5xl w-full shadow-2xl transition-all duration-300 hover:border-gold-500/30 hover:bg-zinc-900/80 relative">

                    {/* Event Type - Column 1 */}
                    <div className="flex-[1.2] min-w-0 flex flex-col items-start border-r border-white/10 pr-6 mr-6 group relative">
                        <label className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gold-500 font-bold mb-1.5 opacity-80 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            <Camera size={12} /> Event Type
                        </label>
                        <div className="w-full relative">
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setIsDropdownOpen(!isDropdownOpen);
                                }}
                                className="w-full flex items-center justify-between bg-transparent border-none text-white outline-none font-serif text-xl p-0 cursor-pointer text-left gap-2"
                            >
                                <span className="truncate block flex-1">{selectedType}</span>
                                <ChevronDown size={14} className={`text-gray-500 flex-shrink-0 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {/* Dropdown Menu - Desktop */}
                            {isDropdownOpen && (
                                <div
                                    className="absolute top-[calc(100%+25px)] left-[-20px] w-72 bg-zinc-900 border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden z-[500] animate-in fade-in slide-in-from-top-4 duration-300"
                                    onMouseDown={(e) => e.stopPropagation()}
                                >
                                    <div className="max-h-64 overflow-y-auto py-3 custom-scrollbar">
                                        {eventTypes.map(type => (
                                            <button
                                                key={type}
                                                type="button"
                                                onClick={() => handleSelectType(type)}
                                                className={`w-full text-left px-6 py-3.5 text-sm font-medium transition-all hover:bg-gold-500 hover:text-black ${selectedType === type ? 'text-gold-500 bg-white/5' : 'text-zinc-400'}`}
                                            >
                                                {type}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Location - Column 2 */}
                    <div className="flex-1 min-w-0 flex flex-col items-start border-r border-white/10 pr-6 mr-6 group">
                        <label className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gold-500 font-bold mb-1.5 opacity-80 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            <MapPin size={12} /> Location
                        </label>
                        <input type="text" placeholder="City, Venue" className="w-full bg-transparent border-none text-white outline-none font-serif text-xl p-0 placeholder-zinc-600 focus:ring-0 truncate" />
                    </div>

                    {/* Date - Column 3 */}
                    <div className="flex-1 min-w-0 flex flex-col items-start border-r border-white/10 pr-6 mr-6 group">
                        <label className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gold-500 font-bold mb-1.5 opacity-80 group-hover:opacity-100 transition-opacity whitespace-nowrap">
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
                            className="w-full bg-transparent border-none text-white outline-none font-serif text-xl p-0 placeholder-zinc-600 focus:ring-0 truncate"
                        />
                    </div>

                    {/* Phone - Column 4 */}
                    <div className="flex-1 min-w-0 flex flex-col items-start pr-6 mr-6 group">
                        <label className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gold-500 font-bold mb-1.5 opacity-80 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            <Phone size={12} /> Phone
                        </label>
                        <input
                            type="tel"
                            placeholder="Phone No."
                            pattern="[0-9]*"
                            maxLength={10}
                            onChange={(e) => {
                                let v = e.target.value.replace(/[^0-9]/g, '');
                                if (v.length > 10) v = v.slice(0, 10);
                                e.target.value = v;
                            }}
                            className="w-full bg-transparent border-none text-white outline-none font-serif text-xl p-0 placeholder-zinc-600 focus:ring-0 truncate"
                        />
                    </div>

                    {/* Check Availability Button */}
                    <button
                        type="button"
                        onClick={() => onNavigate('booking')}
                        className="bg-gold-500 hover:bg-white text-black font-bold text-xs uppercase tracking-widest px-10 py-5 rounded-full transition-all duration-300 shadow-[0_0_20px_-5px_theme(colors.gold.500)] hover:shadow-white/50 flex items-center gap-2 whitespace-nowrap group/btn flex-shrink-0"
                    >
                        <span>Check Availability</span>
                        <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Stacked Form (Mobile) */}
                <div className="md:hidden bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] p-6 space-y-6 text-left relative z-30">
                    {/* Event Type (Mobile) */}
                    <div className="group relative">
                        <label className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gold-500 font-bold mb-2">
                            <Camera size={12} /> Event Type
                        </label>
                        <div className="relative border-b border-white/20 pb-2">
                            <button
                                type="button"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="w-full flex items-center justify-between bg-transparent border-none text-white outline-none font-serif text-lg p-0 cursor-pointer text-left"
                            >
                                <span>{selectedType}</span>
                                <ChevronDown className={`text-gray-500 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} size={16} />
                            </button>

                            {isDropdownOpen && (
                                <div
                                    className="absolute top-full left-0 mt-2 w-full bg-zinc-900 border border-white/10 rounded-xl shadow-2xl overflow-hidden z-[200] animate-in fade-in slide-in-from-top-2 duration-200"
                                    onMouseDown={(e) => e.stopPropagation()}
                                >
                                    <div className="max-h-60 overflow-y-auto py-2 custom-scrollbar">
                                        {eventTypes.map(type => (
                                            <button
                                                key={type}
                                                type="button"
                                                onClick={() => handleSelectType(type)}
                                                className={`w-full text-left px-5 py-3 text-sm transition-colors hover:bg-gold-500 hover:text-black ${selectedType === type ? 'text-gold-500 bg-white/5' : 'text-zinc-300'}`}
                                            >
                                                {type}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
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
                        <input
                            type="tel"
                            placeholder="Phone No."
                            pattern="[0-9]*"
                            maxLength={10}
                            onChange={(e) => {
                                let v = e.target.value.replace(/[^0-9]/g, '');
                                if (v.length > 10) v = v.slice(0, 10);
                                e.target.value = v;
                            }}
                            className="w-full bg-transparent border-b border-white/20 pb-2 text-white outline-none font-serif text-lg p-0 placeholder-gray-600 focus:ring-0"
                        />
                    </div>

                    <Button variant="primary" className="w-full" onClick={() => onNavigate('booking')}>Check Availability</Button>
                </div>
            </div>
        </section>
    );
};
