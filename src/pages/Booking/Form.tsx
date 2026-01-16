import React, { useState } from 'react';
import { Camera, MapPin, Clock } from 'lucide-react';
import { Button } from '../../components/Button';

export const Form: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        isMultiDay: false,
        date: '',
        fromDate: '',
        toDate: '',
        shootType: 'Wedding Photography',
        location: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        let { name, value } = e.target;

        if (name === 'phone') {
            value = value.replace(/[^0-9]/g, '');
            if (value.length > 10) value = value.slice(0, 10);
        }

        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, isMultiDay: e.target.checked }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Construct Message
        const dateStr = formData.isMultiDay
            ? `From ${formData.fromDate} to ${formData.toDate}`
            : `On ${formData.date}`;

        const messageBody = `
*New Booking Inquiry*
------------------------
*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Type:* ${formData.shootType}
*Location:* ${formData.location}
*Date:* ${dateStr}
------------------------
*Message:*
${formData.message}
    `.trim();

        const encodedMessage = encodeURIComponent(messageBody);

        // Trigger WhatsApp
        const whatsappUrl = `https://wa.me/919876543210?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');

        // Trigger Email (using setTimeout to allow UI to respond if needed, though mailto is instant)
        setTimeout(() => {
            window.location.href = `mailto:contact@photographerhouse.com?subject=Booking Inquiry: ${formData.shootType} - ${formData.name}&body=${encodedMessage}`;
        }, 1000);
    };

    return (
        <div className="lg:w-2/3">
            <div className="bg-white dark:bg-dark-800 rounded-[2rem] p-8 md:p-12 shadow-2xl border border-gray-100 dark:border-white/5 transition-colors duration-300">
                <h3 className="font-serif text-2xl text-gray-900 dark:text-white mb-8">Send an Inquiry</h3>

                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Personal Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="group relative">
                            <label className="block text-[10px] uppercase tracking-widest text-gold-500 mb-2 font-bold">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 px-4 py-3 text-gray-900 dark:text-white outline-none focus:border-gold-500 transition-colors rounded-lg"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="group relative">
                            <label className="block text-[10px] uppercase tracking-widest text-gold-500 mb-2 font-bold">Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                pattern="[0-9]*"
                                maxLength={10}
                                className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 px-4 py-3 text-gray-900 dark:text-white outline-none focus:border-gold-500 transition-colors rounded-lg"
                                placeholder="10-digit Phone Number"
                            />
                        </div>
                    </div>

                    <div className="group relative">
                        <label className="block text-[10px] uppercase tracking-widest text-gold-500 mb-2 font-bold">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 px-4 py-3 text-gray-900 dark:text-white outline-none focus:border-gold-500 transition-colors rounded-lg"
                            placeholder="john@example.com"
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
                            />
                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gold-500/30 dark:peer-focus:ring-gold-500/20 rounded-full peer dark:bg-white/10 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gold-500 shadow-inner"></div>
                            <span className="ms-3 text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gold-500 transition-colors">Multi-day event</span>
                        </label>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {!formData.isMultiDay ? (
                            <div className="group relative">
                                <label className="block text-[10px] uppercase tracking-widest text-gold-500 mb-2 font-bold">Event Date</label>
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 px-4 py-3 text-gray-900 dark:text-white outline-none focus:border-gold-500 transition-colors rounded-lg [color-scheme:light] dark:[color-scheme:dark]"
                                />
                            </div>
                        ) : (
                            <>
                                <div className="group relative">
                                    <label className="block text-[10px] uppercase tracking-widest text-gold-500 mb-2 font-bold">From Date</label>
                                    <input
                                        type="date"
                                        name="fromDate"
                                        value={formData.fromDate}
                                        onChange={handleChange}
                                        className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 px-4 py-3 text-gray-900 dark:text-white outline-none focus:border-gold-500 transition-colors rounded-lg [color-scheme:light] dark:[color-scheme:dark]"
                                    />
                                </div>
                                <div className="group relative">
                                    <label className="block text-[10px] uppercase tracking-widest text-gold-500 mb-2 font-bold">To Date</label>
                                    <input
                                        type="date"
                                        name="toDate"
                                        value={formData.toDate}
                                        onChange={handleChange}
                                        className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 px-4 py-3 text-gray-900 dark:text-white outline-none focus:border-gold-500 transition-colors rounded-lg [color-scheme:light] dark:[color-scheme:dark]"
                                    />
                                </div>
                            </>
                        )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="group relative">
                            <label className="block text-[10px] uppercase tracking-widest text-gold-500 mb-2 font-bold">Type of Shoot</label>
                            <div className="relative">
                                <select
                                    name="shootType"
                                    value={formData.shootType}
                                    onChange={handleChange}
                                    className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 px-4 py-3 text-gray-900 dark:text-white outline-none focus:border-gold-500 transition-colors rounded-lg appearance-none cursor-pointer"
                                >
                                    <option className="bg-white dark:bg-dark-900">Wedding Photography</option>
                                    <option className="bg-white dark:bg-dark-900">Pre-Wedding Shoot</option>
                                    <option className="bg-white dark:bg-dark-900">Engagement / Roka</option>
                                    <option className="bg-white dark:bg-dark-900">Fashion / Portfolio</option>
                                    <option className="bg-white dark:bg-dark-900">Product Photography</option>
                                    <option className="bg-white dark:bg-dark-900">Maternity / Baby</option>
                                    <option className="bg-white dark:bg-dark-900">Event Coverage</option>
                                </select>
                                <Camera size={18} className="absolute right-4 top-3.5 text-gray-400 pointer-events-none" />
                            </div>
                        </div>
                        <div className="group relative">
                            <label className="block text-[10px] uppercase tracking-widest text-gold-500 mb-2 font-bold">Location</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="location"
                                    required
                                    value={formData.location}
                                    onChange={handleChange}
                                    className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 px-4 py-3 text-gray-900 dark:text-white outline-none focus:border-gold-500 transition-colors rounded-lg pr-10"
                                    placeholder="e.g. Goa, India"
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
                            className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 px-4 py-3 text-gray-900 dark:text-white outline-none focus:border-gold-500 transition-colors rounded-lg min-h-[120px]"
                            placeholder="Tell us more about your event, specific requirements, or any questions you have..."
                        ></textarea>
                    </div>

                    <div className="pt-6 border-t border-gray-100 dark:border-white/5 mt-8">
                        <div className="flex flex-col md:flex-row items-center justify-end gap-4 md:gap-8">
                            <div className="flex items-center gap-2 text-gold-600 dark:text-gold-400">
                                <Clock size={16} />
                                <p className="text-xs font-bold uppercase tracking-widest">
                                    We respond within 24 hours
                                </p>
                            </div>
                            <Button variant="primary" size="lg" className="px-10 w-full md:w-auto shadow-lg shadow-gold-500/20" type="submit">
                                Submit Inquiry
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};




