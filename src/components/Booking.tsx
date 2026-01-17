import React, { useState, useRef, useEffect } from 'react';
import { Camera, MapPin, Calendar as CalendarIcon, Phone, ArrowRight, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './Button';
import { LazyImage } from './LazyImage';
import { eventTypes } from './data';

interface BookingProps {
    onNavigate: (page: string) => void;
}

export const Booking: React.FC<BookingProps> = ({ onNavigate }) => {
    const [selectedType, setSelectedType] = useState(eventTypes[0]);
    const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false);

    // Date Picker State
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const typeRef = useRef<HTMLDivElement>(null);
    const calendarRef = useRef<HTMLDivElement>(null);
    const typeMobileRef = useRef<HTMLDivElement>(null);
    const calendarMobileRef = useRef<HTMLDivElement>(null);

    // Close dropdowns on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;
            const isOutsideType =
                (!typeRef.current || !typeRef.current.contains(target)) &&
                (!typeMobileRef.current || !typeMobileRef.current.contains(target));

            const isOutsideCalendar =
                (!calendarRef.current || !calendarRef.current.contains(target)) &&
                (!calendarMobileRef.current || !calendarMobileRef.current.contains(target));

            if (isOutsideType) setIsTypeDropdownOpen(false);
            if (isOutsideCalendar) setIsCalendarOpen(false);
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelectType = (type: string) => {
        setSelectedType(type);
        setIsTypeDropdownOpen(false);
    };

    // Calendar logic
    const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const prevMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
    };

    const nextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
    };

    const handleDateSelect = (day: number) => {
        const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (date < today) return;

        setSelectedDate(date);
        setIsCalendarOpen(false);
    };

    const formatDate = (date: Date | null) => {
        if (!date) return "";
        const d = date.getDate().toString().padStart(2, '0');
        const m = (date.getMonth() + 1).toString().padStart(2, '0');
        const y = date.getFullYear();
        return `${d}-${m}-${y}`;
    };

    const renderCalendar = () => {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();
        const totalDays = daysInMonth(year, month);
        const startDay = firstDayOfMonth(year, month);
        const days = [];

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        for (let i = 0; i < startDay; i++) {
            days.push(<div key={`empty-${i}`} className="h-8 md:h-10"></div>);
        }

        for (let d = 1; d <= totalDays; d++) {
            const date = new Date(year, month, d);
            const isSelected = selectedDate?.toDateString() === date.toDateString();
            const isToday = today.toDateString() === date.toDateString();
            const isPast = date < today;

            days.push(
                <button
                    key={d}
                    type="button"
                    disabled={isPast}
                    onClick={() => handleDateSelect(d)}
                    className={`h-8 w-8 md:h-10 md:w-10 rounded-full flex items-center justify-center text-xs md:text-sm transition-all duration-200
                        ${isSelected ? 'bg-gold-500 text-black font-bold shadow-lg shadow-gold-500/20' :
                            isToday ? 'border border-gold-500/50 text-gold-500' :
                                isPast ? 'opacity-20 cursor-not-allowed' : 'text-zinc-400 hover:bg-white/10 hover:text-white'}`}
                >
                    {d}
                </button>
            );
        }

        return days;
    };

    return (
        <section className="relative py-32 bg-dark-950 flex items-center justify-center border-t border-white/5 z-[100] overflow-visible">
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

            <div className="container mx-auto px-6 relative z-[110] text-center">

                {/* Availability Badge */}
                <div className="inline-block border border-gold-500/30 bg-gold-500/10 px-6 py-1.5 rounded-full text-gold-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-8 backdrop-blur-md">
                    @ 2026 / 2027 Availability
                </div>

                <h2 className="font-serif text-4xl md:text-6xl text-white mb-2 leading-tight">
                    "Let us capture your
                </h2>
                <h2 className="font-serif text-4xl md:text-6xl text-gold-500 italic mb-16 leading-tight">
                    Perfect Moment."
                </h2>

                {/* Horizontal Form (Desktop) */}
                <div className="hidden md:inline-flex items-center bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-full p-3 pl-10 max-w-6xl w-full shadow-2xl transition-all duration-300 hover:border-gold-500/30 hover:bg-zinc-900/80 relative z-[120] overflow-visible">

                    {/* Event Type */}
                    <div className="flex-[1.5] min-w-0 flex flex-col items-start border-r border-white/10 pr-8 mr-8 group relative" ref={typeRef}>
                        <label className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gold-500 font-bold mb-1.5 opacity-80 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            <Camera size={12} /> Event Type
                        </label>
                        <div className="w-full relative">
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setIsTypeDropdownOpen(!isTypeDropdownOpen);
                                    setIsCalendarOpen(false);
                                }}
                                className="w-full flex items-center justify-between bg-transparent border-none text-white outline-none font-serif text-xl p-0 cursor-pointer text-left gap-2"
                            >
                                <span className="truncate block flex-1">{selectedType}</span>
                                <ChevronDown size={14} className={`text-gray-500 flex-shrink-0 transition-transform duration-300 ${isTypeDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isTypeDropdownOpen && (
                                <div
                                    className="absolute top-[calc(100%+25px)] left-[-20px] w-80 bg-zinc-100 dark:bg-zinc-900 border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden z-[999] animate-in fade-in slide-in-from-top-4 duration-300"
                                    onMouseDown={(e) => e.stopPropagation()}
                                >
                                    <div className="max-h-64 overflow-y-auto py-3 custom-scrollbar">
                                        {eventTypes.map(type => (
                                            <button
                                                key={type}
                                                type="button"
                                                onClick={() => handleSelectType(type)}
                                                className={`w-full text-left px-6 py-3.5 text-sm font-medium transition-all hover:bg-gold-500 hover:text-black ${selectedType === type ? 'text-gold-500 bg-white/5' : 'text-zinc-600 dark:text-zinc-400'}`}
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
                    <div className="flex-1 min-w-0 flex flex-col items-start border-r border-white/10 pr-8 mr-8 group">
                        <label className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gold-500 font-bold mb-1.5 opacity-80 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            <MapPin size={12} /> Location
                        </label>
                        <input type="text" placeholder="City, Venue" className="w-full bg-transparent border-none text-white outline-none font-serif text-xl p-0 placeholder-zinc-600 focus:ring-0 truncate" />
                    </div>

                    {/* Date Picker - Downward Opening */}
                    <div className="flex-[1.3] min-w-0 flex flex-col items-start border-r border-white/10 pr-8 mr-8 group relative" ref={calendarRef}>
                        <label className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gold-500 font-bold mb-1.5 opacity-80 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            <CalendarIcon size={12} /> Date (Approx)
                        </label>
                        <div className="w-full relative">
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setIsCalendarOpen(!isCalendarOpen);
                                    setIsTypeDropdownOpen(false);
                                }}
                                className="w-full flex items-center justify-between bg-transparent border-none text-white outline-none font-serif text-xl p-0 cursor-pointer text-left gap-2"
                            >
                                <span className={`${selectedDate ? 'text-white' : 'text-zinc-600'} truncate block flex-1`}>
                                    {selectedDate ? formatDate(selectedDate) : "Pick a date"}
                                </span>
                                <ChevronDown size={14} className={`text-gray-500 flex-shrink-0 transition-transform duration-300 ${isCalendarOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isCalendarOpen && (
                                <div
                                    className="absolute top-[calc(100%+25px)] left-1/2 -translate-x-1/2 w-[300px] bg-zinc-900 border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] p-5 z-[999] animate-in fade-in slide-in-from-top-4 duration-300"
                                    onMouseDown={(e) => e.stopPropagation()}
                                >
                                    <div className="flex items-center justify-between mb-4 px-1">
                                        <button type="button" onClick={prevMonth} className="p-1 hover:bg-white/10 rounded-full text-zinc-400 hover:text-gold-500 transition-colors">
                                            <ChevronLeft size={20} />
                                        </button>
                                        <span className="text-sm font-bold text-white tracking-widest uppercase">
                                            {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                                        </span>
                                        <button type="button" onClick={nextMonth} className="p-1 hover:bg-white/10 rounded-full text-zinc-400 hover:text-gold-500 transition-colors">
                                            <ChevronRight size={20} />
                                        </button>
                                    </div>
                                    <div className="grid grid-cols-7 gap-1 mb-2">
                                        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                                            <div key={day} className="text-[10px] font-bold text-gold-600 uppercase text-center p-1">
                                                {day}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="grid grid-cols-7 gap-1">
                                        {renderCalendar()}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="flex-1 min-w-0 flex flex-col items-start pr-8 mr-8 group">
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
                <div className="md:hidden bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] p-6 space-y-6 text-left relative z-[120]">
                    <div className="group relative" ref={typeMobileRef}>
                        <label className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gold-500 font-bold mb-2">
                            <Camera size={12} /> Event Type
                        </label>
                        <div className="relative border-b border-white/20 pb-2">
                            <button
                                type="button"
                                onClick={() => {
                                    setIsTypeDropdownOpen(!isTypeDropdownOpen);
                                    setIsCalendarOpen(false);
                                }}
                                className="w-full flex items-center justify-between bg-transparent border-none text-white outline-none font-serif text-lg p-0 cursor-pointer text-left"
                            >
                                <span>{selectedType}</span>
                                <ChevronDown className={`text-gray-500 transition-transform duration-300 ${isTypeDropdownOpen ? 'rotate-180' : ''}`} size={16} />
                            </button>

                            {isTypeDropdownOpen && (
                                <div
                                    className="absolute top-full left-0 mt-2 w-full bg-zinc-900 border border-white/10 rounded-xl shadow-2xl overflow-hidden z-[999] animate-in fade-in slide-in-from-top-2 duration-200"
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

                    <div className="group">
                        <label className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gold-500 font-bold mb-2">
                            <MapPin size={12} /> Location
                        </label>
                        <input type="text" placeholder="City, Venue" className="w-full bg-transparent border-b border-white/20 pb-2 text-white outline-none font-serif text-lg p-0 placeholder-gray-600 focus:ring-0" />
                    </div>

                    <div className="group relative" ref={calendarMobileRef}>
                        <label className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gold-500 font-bold mb-2">
                            <CalendarIcon size={12} /> Date (Approx)
                        </label>
                        <div className="relative border-b border-white/20 pb-2">
                            <button
                                type="button"
                                onClick={() => {
                                    setIsCalendarOpen(!isCalendarOpen);
                                    setIsTypeDropdownOpen(false);
                                }}
                                className="w-full flex items-center justify-between bg-transparent border-none text-white outline-none font-serif text-lg p-0 cursor-pointer text-left"
                            >
                                <span className={selectedDate ? 'text-white' : 'text-gray-600'}>
                                    {selectedDate ? formatDate(selectedDate) : "dd-mm-yyyy"}
                                </span>
                                <ChevronDown className={`text-gray-500 transition-transform duration-300 ${isCalendarOpen ? 'rotate-180' : ''}`} size={16} />
                            </button>

                            {isCalendarOpen && (
                                <div
                                    className="absolute top-full left-0 mt-2 w-full bg-zinc-900 border border-white/10 rounded-xl shadow-2xl p-4 z-[999] animate-in fade-in slide-in-from-top-2 duration-200"
                                    onMouseDown={(e) => e.stopPropagation()}
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <button type="button" onClick={prevMonth} className="p-2 hover:bg-white/10 rounded-full text-zinc-400">
                                            <ChevronLeft size={20} />
                                        </button>
                                        <span className="text-sm font-bold text-white tracking-widest uppercase">
                                            {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                                        </span>
                                        <button type="button" onClick={nextMonth} className="p-2 hover:bg-white/10 rounded-full text-zinc-400">
                                            <ChevronRight size={20} />
                                        </button>
                                    </div>
                                    <div className="grid grid-cols-7 gap-1 mb-2">
                                        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                                            <div key={day} className="text-[10px] font-bold text-gold-600 uppercase text-center">
                                                {day}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="grid grid-cols-7 gap-1">
                                        {renderCalendar()}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

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
