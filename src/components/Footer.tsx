import React from 'react';
import { Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import logo from '../assets/logo/logo.png';

interface FooterProps {
    onNavigate: (page: string, sectionId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        company: [
            { name: 'About us', page: 'about-tph' },
            { name: 'Our Team', page: 'about-tph' },
            { name: 'Reviews', page: 'reviews' },
            { name: 'Journal', page: 'blog' },
            { name: 'Contact', page: 'booking' },
        ],
        services: [
            { name: 'Wedding Photography', page: 'services' },
            { name: 'Cinematography', page: 'films' },
            { name: 'Special Moments', page: 'special-moments' },
            { name: 'Photo Albums', page: 'albums' },
            { name: 'Commercial', page: 'services' },
        ],
        experience: [
            { name: 'Portfolio', page: 'portfolio' },
            { name: 'Real Stories', page: 'home', sectionId: 'stories' },
            { name: 'FAQ', page: 'home', sectionId: 'faq' },
            { name: 'Investment', page: 'services' },
            { name: 'Booking', page: 'booking' },
        ]
    };

    const socialLinks = [
        { icon: Instagram, href: '#', label: 'Instagram' },
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Youtube, href: '#', label: 'Youtube' },
        { icon: Twitter, href: '#', label: 'Twitter' },
    ];

    return (
        <footer className="bg-white dark:bg-zinc-950 pt-24 pb-12 border-t border-gray-100 dark:border-white/5 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

                    {/* Brand Info */}
                    <div className="lg:col-span-4 max-w-sm">
                        <div className="flex items-center gap-3 mb-8 cursor-pointer group" onClick={() => onNavigate('home')}>
                            <img src={logo} alt="The Photographer House Logo" className="w-12 h-12 object-contain" />
                            <div className="text-2xl font-serif tracking-tight text-gray-900 dark:text-white">
                                The Photographer <span className="text-gold-500 italic font-semibold">House</span>
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-8">
                            Documenting the art of human connection. We specialize in luxury wedding photography and cinematic storytelling for sophisticated couples worldwide.
                        </p>
                        <div className="flex items-center gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-400 hover:text-gold-500 hover:bg-gold-500/10 transition-all duration-300 border border-gray-100 dark:border-white/10"
                                    aria-label={social.label}
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Sections */}
                    <div className="lg:col-span-2">
                        <h4 className="text-gray-900 dark:text-white font-serif text-lg mb-6">Company</h4>
                        <ul className="space-y-4">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <button
                                        onClick={() => onNavigate(link.page)}
                                        className="text-sm text-gray-500 dark:text-gray-400 hover:text-gold-500 transition-colors duration-300 flex items-center group"
                                    >
                                        {link.name}
                                        <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 ml-1 transition-all duration-300 -translate-x-1 group-hover:translate-x-0" />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="text-gray-900 dark:text-white font-serif text-lg mb-6">Services</h4>
                        <ul className="space-y-4">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <button
                                        onClick={() => onNavigate(link.page)}
                                        className="text-sm text-gray-500 dark:text-gray-400 hover:text-gold-500 transition-colors duration-300 flex items-center group"
                                    >
                                        {link.name}
                                        <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 ml-1 transition-all duration-300 -translate-x-1 group-hover:translate-x-0" />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="text-gray-900 dark:text-white font-serif text-lg mb-6">Experience</h4>
                        <ul className="space-y-4">
                            {footerLinks.experience.map((link) => (
                                <li key={link.name}>
                                    <button
                                        onClick={() => onNavigate(link.page, link.sectionId)}
                                        className="text-sm text-gray-500 dark:text-gray-400 hover:text-gold-500 transition-colors duration-300 flex items-center group"
                                    >
                                        {link.name}
                                        <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 ml-1 transition-all duration-300 -translate-x-1 group-hover:translate-x-0" />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-2">
                        <h4 className="text-gray-900 dark:text-white font-serif text-lg mb-6">Connect</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-gold-500 shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-500 dark:text-gray-400 font-light leading-snug">
                                    123 Luxury Avenue,<br />New Delhi, India
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-gold-500 shrink-0" />
                                <a href="tel:+919876543210" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gold-500 transition-colors truncate">
                                    +91 98765 43210
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-gold-500 shrink-0" />
                                <a href="mailto:hello@thephotographerhouse.com" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gold-500 transition-colors truncate">
                                    hello@tph.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-gray-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs text-gray-500 dark:text-gray-500 tracking-wider">
                        © {currentYear} THE PHOTOGRAPHER HOUSE. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex items-center gap-8">
                        <button className="text-[10px] uppercase tracking-[0.2em] text-gray-400 hover:text-gold-500 transition-colors">Privacy Policy</button>
                        <button className="text-[10px] uppercase tracking-[0.2em] text-gray-400 hover:text-gold-500 transition-colors">Terms of Service</button>
                        <button className="text-[10px] uppercase tracking-[0.2em] text-gray-400 hover:text-gold-500 transition-colors">Cookies</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};
