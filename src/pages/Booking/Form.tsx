import React, { useState, useRef, useEffect } from 'react';
import { Camera, MapPin, Clock, ChevronDown, ChevronLeft, ChevronRight, Calendar as CalendarIcon, AlertCircle } from 'lucide-react';
import { Button } from '../../components/Button';
import { eventTypes } from '../../components/data';
import { sendBookingInquiry } from '../../services/emailBooking';

export const Form: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        isMultiDay: false,
        date: null as Date | null,
        fromDate: null as Date | null,
        toDate: null as Date | null,
        shootType: eventTypes[0],
        location: '',
        message: ''
    });

    const [errors, setErrors] = useState<string[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    // Dropdown & Calendar States
    const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false);
    const [activeCalendar, setActiveCalendar] = useState<'single' | 'from' | 'to' | null>(null);
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const formRef = useRef<HTMLDivElement>(null);
    const typeRef = useRef<HTMLDivElement>(null);
    const dateRef = useRef<HTMLDivElement>(null);

    // Close dropdowns on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;
            if (typeRef.current && !typeRef.current.contains(target)) {
                setIsTypeDropdownOpen(false);
            }
            if (dateRef.current && !dateRef.current.contains(target)) {
                setActiveCalendar(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        let { name, value } = e.target;

        if (name === 'phone') {
            value = value.replace(/[^0-9]/g, '');
            if (value.length > 10) value = value.slice(0, 10);
        }

        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear errors when user types
        setErrors([]);
        setSubmitStatus('idle');
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            isMultiDay: e.target.checked,
            date: null,
            fromDate: null,
            toDate: null
        }));
        setErrors([]);
        setSubmitStatus('idle');
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

        if (activeCalendar === 'single') {
            setFormData(prev => ({ ...prev, date }));
        } else if (activeCalendar === 'from') {
            setFormData(prev => {
                const newState = { ...prev, fromDate: date };
                if (prev.toDate && date > prev.toDate) {
                    newState.toDate = null;
                }
                return newState;
            });
        } else if (activeCalendar === 'to') {
            if (formData.fromDate && date < formData.fromDate) {
                return;
            }
            setFormData(prev => ({ ...prev, toDate: date }));
        }
        setActiveCalendar(null);
        setErrors([]);
        setSubmitStatus('idle');
    };

    const formatDate = (date: Date | null) => {
        if (!date) return "Select Date";
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
            let isSelected = false;
            let isDisabled = false;
            const isPast = date < today;

            if (activeCalendar === 'single') {
                isSelected = formData.date?.toDateString() === date.toDateString();
                if (isPast) isDisabled = true;
            } else if (activeCalendar === 'from') {
                isSelected = formData.fromDate?.toDateString() === date.toDateString();
                if (isPast) isDisabled = true;
            } else if (activeCalendar === 'to') {
                isSelected = formData.toDate?.toDateString() === date.toDateString();
                // Disable if past OR before fromDate
                if (isPast || (formData.fromDate && date < formData.fromDate)) {
                    isDisabled = true;
                }
            }

            const isTodayDate = today.toDateString() === date.toDateString();

            days.push(
                <button
                    key={d}
                    type="button"
                    disabled={isDisabled}
                    onClick={() => handleDateSelect(d)}
                    className={`h-8 w-8 md:h-10 md:w-10 rounded-full flex items-center justify-center text-xs md:text-sm transition-all duration-200
                        ${isSelected ? 'bg-gold-500 text-black font-bold shadow-lg shadow-gold-500/20' :
                            isDisabled ? 'opacity-10 cursor-not-allowed grayscale' :
                                isTodayDate ? 'border border-gold-500/50 text-gold-500' : 'text-zinc-600 dark:text-zinc-400 hover:bg-gold-500/10 hover:text-gold-500'}`}
                >
                    {d}
                </button>
            );
        }

        return days;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validation
        const newErrors: string[] = [];
        if (!formData.name.trim()) newErrors.push("Full Name is required");

        if (formData.email.trim()) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                newErrors.push("Please enter a valid email address (e.g., example@gmail.com)");
            }
        }

        if (!formData.phone.trim() || formData.phone.length < 10) newErrors.push("Valid 10-digit Phone Number is required");
        if (!formData.location.trim()) newErrors.push("Location is required");

        if (formData.isMultiDay) {
            if (!formData.fromDate) newErrors.push("Start Date is required");
            if (!formData.toDate) newErrors.push("End Date is required");
        } else {
            if (!formData.date) newErrors.push("Event Date is required");
        }

        if (newErrors.length > 0) {
            setErrors(newErrors);
            formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');

        const dateStr = formData.isMultiDay
            ? `From ${formatDate(formData.fromDate)} to ${formatDate(formData.toDate)}`
            : `On ${formatDate(formData.date)}`;

        try {
            // 1. Submit via EmailJS
            await sendBookingInquiry({
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                shootType: formData.shootType,
                location: formData.location,
                dateStr: dateStr,
                message: formData.message
            });

            setSubmitStatus('success');

        } catch (error) {
            setSubmitStatus('error');
            console.error('Submission failed:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="lg:w-2/3" ref={formRef}>
            {/* Custom Scrollbar Styles for the Dropdown */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(0, 0, 0, 0.05);
                    border-radius: 10px;
                }
                .dark .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.05);
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #d4af37;
                    border-radius: 10px;
                }
                
                /* Prevent Autofill Background Color Change */
                input:-webkit-autofill,
                input:-webkit-autofill:hover, 
                input:-webkit-autofill:focus, 
                input:-webkit-autofill:active {
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: inherit !important;
                    transition: background-color 5000s ease-in-out 0s;
                    box-shadow: inset 0 0 20px 20px transparent;
                }

                .dark input:-webkit-autofill,
                .dark input:-webkit-autofill:hover, 
                .dark input:-webkit-autofill:focus, 
                .dark input:-webkit-autofill:active {
                    -webkit-text-fill-color: white !important;
                }
            `}} />

            <div className="bg-white dark:bg-dark-800 rounded-[2rem] p-8 md:p-12 shadow-2xl border border-gray-100 dark:border-white/5 transition-colors duration-300 relative overflow-visible">
                <h3 className="font-serif text-2xl text-gray-900 dark:text-white mb-4">Send an Inquiry</h3>

                {/* Error Summary */}
                {errors.length > 0 && (
                    <div className="mb-8 p-4 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 rounded-xl animate-in fade-in slide-in-from-top-4">
                        <div className="flex items-center gap-2 text-red-600 dark:text-red-400 mb-2">
                            <AlertCircle size={18} />
                            <span className="font-bold text-sm uppercase tracking-wider">Required Fields Missing</span>
                        </div>
                        <ul className="list-disc list-inside space-y-1">
                            {errors.map((error, idx) => (
                                <li key={idx} className="text-xs text-red-500 dark:text-red-400/80">{error}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Success Message */}
                {submitStatus === 'success' && (
                    <div className="mb-8 p-4 bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 rounded-xl animate-in fade-in slide-in-from-top-4 text-green-600 dark:text-green-400 text-sm font-medium">
                        Thank you! Your inquiry has been sent successfully.
                    </div>
                )}

                {/* Error Global Message */}
                {submitStatus === 'error' && (
                    <div className="mb-8 p-4 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 rounded-xl animate-in fade-in slide-in-from-top-4 text-red-600 dark:text-red-400 text-sm font-medium">
                        Something went wrong. Please try again or contact us on WhatsApp or Call.
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                    {/* Personal Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="group relative">
                            <label className="block text-[10px] uppercase tracking-widest text-gold-500 mb-2 font-bold">
                                Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                disabled={isSubmitting}
                                className={`w-full bg-gray-50 dark:bg-black/20 border ${errors.some(e => e.includes("Name")) ? 'border-red-500/50' : 'border-gray-200 dark:border-white/10'} px-4 py-3 text-gray-900 dark:text-white outline-none focus:border-gold-500 transition-colors rounded-lg disabled:opacity-50`}
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="group relative">
                            <label className="block text-[10px] uppercase tracking-widest text-gold-500 mb-2 font-bold">
                                Phone Number <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                disabled={isSubmitting}
                                pattern="[0-9]*"
                                maxLength={10}
                                className={`w-full bg-gray-50 dark:bg-black/20 border ${errors.some(e => e.includes("Phone")) ? 'border-red-500/50' : 'border-gray-200 dark:border-white/10'} px-4 py-3 text-gray-900 dark:text-white outline-none focus:border-gold-500 transition-colors rounded-lg disabled:opacity-50`}
                                placeholder="10-digit Phone Number"
                            />
                        </div>
                    </div>

                    <div className="group relative">
                        <label className="block text-[10px] uppercase tracking-widest text-gold-500 mb-2 font-bold">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            className={`w-full bg-gray-50 dark:bg-black/20 border ${errors.some(e => e.includes("Email")) ? 'border-red-500/50' : 'border-gray-200 dark:border-white/10'} px-4 py-3 text-gray-900 dark:text-white outline-none focus:border-gold-500 transition-colors rounded-lg disabled:opacity-50`}
                            placeholder="john@example.com (Optional)"
                        />
                    </div>

                    {/* Event Details */}
                    <div className="space-y-4">
                        <label className="block text-[10px] uppercase tracking-widest text-gold-500 font-bold">Event Duration</label>
                        <label className="inline-flex items-center cursor-pointer group">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={formData.isMultiDay}
                                onChange={handleCheckboxChange}
                                disabled={isSubmitting}
                            />
                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gold-500/30 dark:peer-focus:ring-gold-500/20 rounded-full peer dark:bg-white/10 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gold-500 shadow-inner"></div>
                            <span className="ms-3 text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gold-500 transition-colors">Multi-day event</span>
                        </label>
                    </div>

                    {/* Date Pickers */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8" ref={dateRef}>
                        {!formData.isMultiDay ? (
                            <div className="group relative">
                                <label className="block text-[10px] uppercase tracking-widest text-gold-500 mb-2 font-bold">
                                    Event Date <span className="text-red-500">*</span>
                                </label>
                                <button
                                    type="button"
                                    disabled={isSubmitting}
                                    onClick={() => { setActiveCalendar(activeCalendar === 'single' ? null : 'single'); setIsTypeDropdownOpen(false); }}
                                    className={`w-full flex items-center justify-between bg-gray-50 dark:bg-black/20 border ${errors.some(e => e.includes("Event Date")) ? 'border-red-500/50' : 'border-gray-200 dark:border-white/10'} px-4 py-3 text-gray-900 dark:text-white outline-none hover:border-gold-500 transition-colors rounded-lg text-left disabled:opacity-50`}
                                >
                                    <span className={formData.date ? 'opacity-100' : 'opacity-40'}>{formatDate(formData.date)}</span>
                                    <CalendarIcon size={18} className="text-gray-400" />
                                </button>
                                {activeCalendar === 'single' && (
                                    <div className="absolute top-[calc(100%+10px)] left-0 w-[300px] bg-white dark:bg-zinc-900 border border-gray-200 dark:border-white/10 rounded-2xl shadow-2xl p-5 z-[500] animate-in fade-in slide-in-from-top-4 duration-300" onMouseDown={e => e.stopPropagation()}>
                                        <div className="flex items-center justify-between mb-4 px-1">
                                            <button type="button" onClick={prevMonth} className="p-1 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full text-zinc-400 hover:text-gold-500 transition-colors">
                                                <ChevronLeft size={20} />
                                            </button>
                                            <span className="text-sm font-bold text-gray-900 dark:text-white tracking-widest uppercase">
                                                {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                                            </span>
                                            <button type="button" onClick={nextMonth} className="p-1 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full text-zinc-400 hover:text-gold-500 transition-colors">
                                                <ChevronRight size={20} />
                                            </button>
                                        </div>
                                        <div className="grid grid-cols-7 gap-1 mb-2">
                                            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                                                <div key={day} className="text-[10px] font-bold text-gold-600 uppercase text-center p-1">{day}</div>
                                            ))}
                                        </div>
                                        <div className="grid grid-cols-7 gap-1">{renderCalendar()}</div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <>
                                <div className="group relative">
                                    <label className="block text-[10px] uppercase tracking-widest text-gold-500 mb-2 font-bold">
                                        From Date <span className="text-red-500">*</span>
                                    </label>
                                    <button
                                        type="button"
                                        disabled={isSubmitting}
                                        onClick={() => { setActiveCalendar(activeCalendar === 'from' ? null : 'from'); setIsTypeDropdownOpen(false); }}
                                        className={`w-full flex items-center justify-between bg-gray-50 dark:bg-black/20 border ${errors.some(e => e.includes("Start Date")) ? 'border-red-500/50' : 'border-gray-200 dark:border-white/10'} px-4 py-3 text-gray-900 dark:text-white outline-none hover:border-gold-500 transition-colors rounded-lg text-left disabled:opacity-50`}
                                    >
                                        <span className={formData.fromDate ? 'opacity-100' : 'opacity-40'}>{formatDate(formData.fromDate)}</span>
                                        <CalendarIcon size={18} className="text-gray-400" />
                                    </button>
                                    {activeCalendar === 'from' && (
                                        <div className="absolute top-[calc(100%+10px)] left-0 w-[300px] bg-white dark:bg-zinc-900 border border-gray-200 dark:border-white/10 rounded-2xl shadow-2xl p-5 z-[500] animate-in fade-in slide-in-from-top-4 duration-300" onMouseDown={e => e.stopPropagation()}>
                                            <div className="flex items-center justify-between mb-4 px-1">
                                                <button type="button" onClick={prevMonth} className="p-1 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full text-zinc-400 hover:text-gold-500 transition-colors">
                                                    <ChevronLeft size={20} />
                                                </button>
                                                <span className="text-sm font-bold text-gray-900 dark:text-white tracking-widest uppercase">{months[currentMonth.getMonth()]} {currentMonth.getFullYear()}</span>
                                                <button type="button" onClick={nextMonth} className="p-1 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full text-zinc-400 hover:text-gold-500 transition-colors">
                                                    <ChevronRight size={20} />
                                                </button>
                                            </div>
                                            <div className="grid grid-cols-7 gap-1 mb-2">
                                                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                                                    <div key={day} className="text-[10px] font-bold text-gold-600 uppercase text-center p-1">{day}</div>
                                                ))}
                                            </div>
                                            <div className="grid grid-cols-7 gap-1">{renderCalendar()}</div>
                                        </div>
                                    )}
                                </div>
                                <div className="group relative">
                                    <label className="block text-[10px] uppercase tracking-widest text-gold-500 mb-2 font-bold">
                                        To Date <span className="text-red-500">*</span>
                                    </label>
                                    <button
                                        type="button"
                                        disabled={isSubmitting}
                                        onClick={() => { setActiveCalendar(activeCalendar === 'to' ? null : 'to'); setIsTypeDropdownOpen(false); }}
                                        className={`w-full flex items-center justify-between bg-gray-50 dark:bg-black/20 border ${errors.some(e => e.includes("End Date")) ? 'border-red-500/50' : 'border-gray-200 dark:border-white/10'} px-4 py-3 text-gray-900 dark:text-white outline-none hover:border-gold-500 transition-colors rounded-lg text-left disabled:opacity-50`}
                                    >
                                        <span className={formData.toDate ? 'opacity-100' : 'opacity-40'}>{formatDate(formData.toDate)}</span>
                                        <CalendarIcon size={18} className="text-gray-400" />
                                    </button>
                                    {activeCalendar === 'to' && (
                                        <div className="absolute top-[calc(100%+10px)] left-0 w-[300px] bg-white dark:bg-zinc-900 border border-gray-200 dark:border-white/10 rounded-2xl shadow-2xl p-5 z-[500] animate-in fade-in slide-in-from-top-4 duration-300" onMouseDown={e => e.stopPropagation()}>
                                            <div className="flex items-center justify-between mb-4 px-1">
                                                <button type="button" onClick={prevMonth} className="p-1 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full text-zinc-400 hover:text-gold-500 transition-colors">
                                                    <ChevronLeft size={20} />
                                                </button>
                                                <span className="text-sm font-bold text-gray-900 dark:text-white tracking-widest uppercase">{months[currentMonth.getMonth()]} {currentMonth.getFullYear()}</span>
                                                <button type="button" onClick={nextMonth} className="p-1 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full text-zinc-400 hover:text-gold-500 transition-colors">
                                                    <ChevronRight size={20} />
                                                </button>
                                            </div>
                                            <div className="grid grid-cols-7 gap-1 mb-2">
                                                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                                                    <div key={day} className="text-[10px] font-bold text-gold-600 uppercase text-center p-1">{day}</div>
                                                ))}
                                            </div>
                                            <div className="grid grid-cols-7 gap-1">{renderCalendar()}</div>
                                        </div>
                                    )}
                                </div>
                            </>
                        )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Type of Shoot Dropdown */}
                        <div className="group relative" ref={typeRef}>
                            <label className="block text-[10px] uppercase tracking-widest text-gold-500 mb-2 font-bold">
                                Type of Shoot <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <button
                                    type="button"
                                    disabled={isSubmitting}
                                    onClick={() => { setIsTypeDropdownOpen(!isTypeDropdownOpen); setActiveCalendar(null); }}
                                    className="w-full flex items-center justify-between bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 px-4 py-3 text-gray-900 dark:text-white outline-none hover:border-gold-500 transition-colors rounded-lg text-left disabled:opacity-50"
                                >
                                    <span>{formData.shootType}</span>
                                    <ChevronDown size={18} className={`text-gray-400 transition-transform duration-300 ${isTypeDropdownOpen ? 'rotate-180' : ''}`} />
                                </button>
                                {isTypeDropdownOpen && (
                                    <div className="absolute top-[calc(100%+10px)] left-0 w-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-white/10 rounded-xl shadow-2xl overflow-hidden z-[500] animate-in fade-in slide-in-from-top-2 duration-200" onMouseDown={e => e.stopPropagation()}>
                                        <div className="max-h-60 overflow-y-auto py-2 custom-scrollbar">
                                            {eventTypes.map(type => (
                                                <button
                                                    key={type}
                                                    type="button"
                                                    onClick={() => { setFormData(prev => ({ ...prev, shootType: type })); setIsTypeDropdownOpen(false); setErrors([]); setSubmitStatus('idle'); }}
                                                    className={`w-full text-left px-5 py-3 text-sm transition-colors hover:bg-gold-500 hover:text-black ${formData.shootType === type ? 'text-gold-500 bg-gray-50 dark:bg-white/5' : 'text-gray-700 dark:text-zinc-300'}`}
                                                >
                                                    {type}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="group relative">
                            <label className="block text-[10px] uppercase tracking-widest text-gold-500 mb-2 font-bold">
                                Location <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                    className={`w-full bg-gray-50 dark:bg-black/20 border ${errors.some(e => e.includes("Location")) ? 'border-red-500/50' : 'border-gray-200 dark:border-white/10'} px-4 py-3 text-gray-900 dark:text-white outline-none focus:border-gold-500 transition-colors rounded-lg pr-10 disabled:opacity-50`}
                                    placeholder="City, Venue"
                                />
                                <MapPin size={18} className="absolute right-4 top-3.5 text-gray-400 pointer-events-none" />
                            </div>
                        </div>
                    </div>

                    <div className="group relative">
                        <label className="block text-[10px] uppercase tracking-widest text-gold-500 mb-2 font-bold">Message / Details</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 px-4 py-3 text-gray-900 dark:text-white outline-none focus:border-gold-500 transition-colors rounded-lg min-h-[120px] disabled:opacity-50"
                            placeholder="Tell us more about your event, specific requirements, or any questions you have..."
                        ></textarea>
                    </div>

                    <div className="pt-6 border-t border-gray-100 dark:border-white/5 mt-8">
                        <div className="flex flex-col md:flex-row items-center justify-end gap-4 md:gap-8">
                            <div className="flex items-center gap-2 text-gold-600 dark:text-gold-400">
                                <Clock size={16} />
                                <p className="text-xs font-bold uppercase tracking-widest">
                                    {isSubmitting ? 'Sending inquiry...' : 'We respond within 24 hours'}
                                </p>
                            </div>
                            <Button
                                variant="primary"
                                size="lg"
                                className="px-10 w-full md:w-auto shadow-lg shadow-gold-500/20 disabled:grayscale disabled:opacity-50"
                                type="submit"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
