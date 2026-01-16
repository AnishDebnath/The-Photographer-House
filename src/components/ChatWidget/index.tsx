import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Phone, MapPin, X, ChevronDown, MessageSquare, Send, ArrowLeft, MoreVertical } from 'lucide-react';
import logo from '../../assets/logo/logo.png';

interface Message {
    id: number;
    text: string;
    sender: 'user' | 'team';
    timestamp: Date;
}

export const ChatWidget: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [view, setView] = useState<'entry' | 'chatting'>('entry');
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            text: "Hi there! 👋 Welcome to The Photographer House. How can we help you today?",
            sender: 'team',
            timestamp: new Date()
        }
    ]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (view === 'chatting') {
            scrollToBottom();
        }
    }, [messages, view]);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            // Optional: reset view to entry when opening if you prefer
            // setView('entry');
        }
    };

    const handleStartChat = () => {
        setView('chatting');
    };

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const newMessage: Message = {
            id: Date.now(),
            text: input,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, newMessage]);
        setInput('');

        // Simulate auto-reply
        setTimeout(() => {
            const reply: Message = {
                id: Date.now() + 1,
                text: "Thank you for reaching out! One of our team members will get back to you shortly. For immediate assistance, feel free to call us at +91 98306 93939.",
                sender: 'team',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, reply]);
        }, 1500);
    };

    const channels = [
        {
            icon: Phone,
            label: 'Phone',
            action: () => window.open('tel:+918910092451', '_self')
        },
        {
            icon: MessageCircle,
            label: 'WhatsApp',
            action: () => window.open('https://wa.me/918910092451', '_blank')
        },
        {
            icon: MapPin,
            label: 'Google Maps',
            action: () => window.open('https://maps.app.goo.gl/2cKa7FpTpz2MnqQ97', '_blank')
        }
    ];

    return (
        <div className="fixed bottom-6 right-6 z-[200]">
            {/* Widget Container */}
            <div className={`absolute bottom-20 right-0 w-[350px] bg-white dark:bg-zinc-950 rounded-[2rem] shadow-2xl transition-all duration-300 origin-bottom-right overflow-hidden border border-gray-100 dark:border-white/10 ${isOpen ? 'scale-100 opacity-100 translate-y-0 pointer-events-auto' : 'scale-90 opacity-0 translate-y-10 pointer-events-none'}`}>

                {view === 'entry' ? (
                    <>
                        {/* Entry View Header */}
                        <div className="bg-zinc-950 p-6 text-white relative border-b border-white/5">
                            <button
                                onClick={toggleOpen}
                                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>

                            <h3 className="text-xl font-serif mb-6 pr-8">👋 Our Team is Here For You</h3>

                            {/* Status Card */}
                            <div className="bg-zinc-900 border border-white/10 text-white rounded-2xl p-4 shadow-lg flex flex-col items-center text-center relative z-10 transition-colors hover:border-gold-500/30">
                                <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-green-500/10 px-2 py-0.5 rounded-full border border-green-500/20">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                    <span className="text-[10px] font-bold text-green-500 uppercase tracking-wide">Online</span>
                                </div>

                                <div className="w-16 h-16 rounded-full bg-black mb-3 border-2 border-gold-500/50 shadow-sm overflow-hidden p-1">
                                    <img src={logo} alt="Logo" className="w-full h-full object-contain" />
                                </div>

                                <p className="font-medium text-white mb-4 font-serif">Hi, how can we help?</p>

                                {/*chat Support for website*/}
                                {/* <button
                                    onClick={handleStartChat}
                                    className="w-full bg-gold-500 text-black hover:bg-white rounded-lg py-3 px-4 flex items-center justify-between group transition-all duration-300 shadow-lg shadow-gold-500/10"
                                >
                                    <span className="font-bold text-sm tracking-wide uppercase">Start a new chat</span>
                                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button> */}
                            </div>
                        </div>

                        {/* Channels Grid */}
                        <div className="p-4 bg-gray-50 dark:bg-black/40">
                            <div className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-white/5">
                                {channels.map((channel, idx) => (
                                    <button
                                        key={idx}
                                        onClick={channel.action}
                                        className={`w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors group ${idx !== channels.length - 1 ? 'border-b border-gray-100 dark:border-white/5' : ''}`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white shadow-md ${channel.label === 'WhatsApp' ? 'bg-[#25D366]' :
                                                channel.label === 'Phone' ? 'bg-gold-500' : 'bg-blue-500'
                                                }`}>
                                                <channel.icon size={16} strokeWidth={2} />
                                            </div>
                                            <span className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover:text-gold-500 transition-colors">{channel.label}</span>
                                        </div>
                                        <ArrowUpRightMini />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </>
                ) : (
                    /* Chatting View */
                    <div className="flex flex-col h-[500px] bg-white dark:bg-zinc-950">
                        {/* Chat Header */}
                        <div className="bg-zinc-950 p-4 text-white flex items-center justify-between border-b border-white/10 shadow-lg">
                            <div className="flex items-center gap-3">
                                <button onClick={() => setView('entry')} className="p-1 hover:bg-white/10 rounded-full transition-colors">
                                    <ArrowLeft size={20} />
                                </button>
                                <div className="relative">
                                    <div className="w-10 h-10 rounded-full bg-black border border-gold-500/50 overflow-hidden p-1">
                                        <img src={logo} alt="Logo" className="w-full h-full object-contain" />
                                    </div>
                                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-zinc-950"></span>
                                </div>
                                <div>
                                    <h4 className="font-serif text-sm font-bold">TPH Support</h4>
                                    <p className="text-[10px] text-green-500 uppercase tracking-widest font-bold">Online Now</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button onClick={toggleOpen} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                                    <X size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50 dark:bg-black/20 scrollbar-hide">
                            {messages.map((msg) => (
                                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.sender === 'user'
                                        ? 'bg-gold-500 text-black rounded-tr-none shadow-md'
                                        : 'bg-zinc-800 text-white rounded-tl-none border border-white/5'
                                        }`}>
                                        <p className="leading-relaxed">{msg.text}</p>
                                        <p className={`text-[9px] mt-1 opacity-50 ${msg.sender === 'user' ? 'text-black/70' : 'text-white/70'}`}>
                                            {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </p>
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSendMessage} className="p-4 bg-white dark:bg-zinc-950 border-t border-gray-100 dark:border-white/10">
                            <div className="relative flex items-center gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Type your message..."
                                    className="w-full bg-gray-100 dark:bg-zinc-900 border-none rounded-full py-3 px-5 pr-12 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-gold-500/50 transition-all"
                                />
                                <button
                                    type="submit"
                                    className={`absolute right-1 w-10 h-10 rounded-full flex items-center justify-center transition-all ${input.trim() ? 'bg-gold-500 text-black scale-100' : 'bg-gray-200 dark:bg-zinc-800 text-gray-400 scale-90'}`}
                                    disabled={!input.trim()}
                                >
                                    <Send size={18} />
                                </button>
                            </div>
                            <p className="text-[9px] text-center text-gray-400 mt-2 uppercase tracking-widest font-bold">Typically replies in a few minutes</p>
                        </form>
                    </div>
                )}
            </div>

            {/* Toggle Button */}
            <button
                onClick={toggleOpen}
                className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 hover:scale-110 active:scale-95 z-[210] border border-white/10 relative ${isOpen ? 'bg-black text-gold-500 rotate-180 shadow-black/50' : 'bg-gold-500 text-black shadow-gold-500/40'}`}
                aria-label="Open chat widget"
            >
                {!isOpen && (
                    <span className="absolute inset-0 rounded-full bg-gold-500/20 animate-ping pointer-events-none"></span>
                )}
                {isOpen ? (
                    <ChevronDown size={28} />
                ) : (
                    <div className="relative">
                        <MessageSquare size={24} />
                        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-black"></span>
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
