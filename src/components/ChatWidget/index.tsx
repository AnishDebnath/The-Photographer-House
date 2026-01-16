import React, { useState } from 'react';
import { MessageCircle, Phone, MapPin, X, ChevronDown, MessageSquare, Plus, Send, HelpCircle, Instagram } from 'lucide-react';
import logo from '../../assets/logo/logo.png';

export const ChatWidget: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<'chat' | 'faq'>('chat');

    const toggleOpen = () => setIsOpen(!isOpen);

    const channels = [
        {
            icon: Phone,
            label: 'Phone',
            color: 'bg-green-500',
            action: () => window.open('tel:+919830693939', '_self')
        },
        {
            icon: MessageCircle,
            label: 'WhatsApp',
            color: 'bg-green-500',
            action: () => window.open('https://wa.me/919830693939', '_blank')
        },
        {
            icon: MapPin,
            label: 'Google Maps',
            color: 'bg-blue-500',
            action: () => window.open('https://maps.app.goo.gl/YourMapLink', '_blank')
        }
    ];

    return (
        <div className="fixed bottom-6 right-6 z-[200] font-sans">
            {/* Widget Container */}
            <div className={`absolute bottom-20 right-0 w-[350px] bg-white dark:bg-zinc-900 rounded-[2rem] shadow-2xl transition-all duration-300 origin-bottom-right overflow-hidden border border-gray-100 dark:border-white/10 ${isOpen ? 'scale-100 opacity-100 translate-y-0 pointer-events-auto' : 'scale-90 opacity-0 translate-y-10 pointer-events-none'}`}>

                {/* Header with Close Button */}
                <div className="bg-[#1e1f24] p-6 text-white relative">
                    <button
                        onClick={toggleOpen}
                        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
                    >
                        <X size={20} />
                    </button>

                    <h3 className="text-xl font-bold mb-6 pr-8">👋 Our Team is Here For You</h3>

                    {/* Status Card */}
                    <div className="bg-white text-gray-900 rounded-2xl p-4 shadow-lg flex flex-col items-center text-center relative z-10">
                        <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-green-50 px-2 py-0.5 rounded-full border border-green-100">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            <span className="text-[10px] font-bold text-green-600 uppercase tracking-wide">Online</span>
                        </div>

                        <div className="w-16 h-16 rounded-full bg-black mb-3 border-4 border-white shadow-sm overflow-hidden p-1">
                            <img src={logo} alt="Logo" className="w-full h-full object-contain" />
                        </div>

                        <p className="font-medium text-gray-900 mb-4">Hi, how can we help?</p>

                        <button
                            onClick={() => window.open('https://wa.me/919830693939', '_blank')}
                            className="w-full bg-[#1e1f24] text-white rounded-lg py-3 px-4 flex items-center justify-between group hover:bg-black transition-colors"
                        >
                            <span className="font-medium text-sm">Start a new chat</span>
                            <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Channels Grid */}
                <div className="p-4 bg-gray-50 dark:bg-black/20">

                    <div className="bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-white/5">
                        {channels.map((channel, idx) => (
                            <button
                                key={idx}
                                onClick={channel.action}
                                className={`w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-zinc-700/50 transition-colors group ${idx !== channels.length - 1 ? 'border-b border-gray-100 dark:border-white/5' : ''}`}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${channel.label === 'WhatsApp' ? 'bg-[#25D366]' :
                                        channel.label === 'Phone' ? 'bg-green-500' :
                                            channel.label === 'Instagram' ? 'bg-gradient-to-tr from-yellow-500 via-purple-500 to-blue-500' :
                                                'bg-blue-500'
                                        }`}>
                                        <channel.icon size={16} strokeWidth={2} />
                                    </div>
                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{channel.label}</span>
                                </div>
                                <ArrowUpRightMini />
                            </button>
                        ))}
                    </div>

                </div>
            </div>

            {/* Toggle Button */}
            <button
                onClick={toggleOpen}
                className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 z-[210] ${isOpen ? 'bg-[#1e1f24] text-white rotate-180' : 'bg-[#1e1f24] text-white hover:bg-black'}`}
                aria-label="Open chat widget"
            >
                {isOpen ? (
                    <ChevronDown size={28} />
                ) : (
                    <div className="relative">
                        <MessageSquare size={26} />
                        <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-[#1e1f24]"></span>
                    </div>
                )}
            </button>
        </div>
    );
};

const ArrowUpRightMini = () => (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
        <line x1="7" y1="17" x2="17" y2="7"></line>
        <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
);
