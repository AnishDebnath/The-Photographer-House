import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

export const footerLinks = {
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

export const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Youtube, href: '#', label: 'Youtube' },
    { icon: Twitter, href: '#', label: 'Twitter' },
];
