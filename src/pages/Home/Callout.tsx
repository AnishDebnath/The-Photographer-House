import React from 'react';
import { Button } from '../../components/Button';

interface CalloutProps {
    onNavigate: (page: string) => void;
}

export const Callout: React.FC<CalloutProps> = ({ onNavigate }) => {
    return (
        <section id="about" className="py-20 bg-gray-50 dark:bg-dark-900 border-b border-gray-200 dark:border-white/5 transition-colors duration-300" aria-label="Unique Selling Proposition">
            <div className="container mx-auto px-6 text-center">
                <p className="text-gold-500 text-xs font-bold tracking-[0.2em] mb-4">WANT TO KNOW WHAT'S POSSIBLE?</p>
                <h2 className="font-serif text-3xl md:text-5xl text-gray-900 dark:text-amber-50 mb-8 transition-colors duration-300">
                    "Grand, Creative & Unique?"
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 font-light italic transition-colors duration-300">
                    "Not just a claim. It's our way of life. <br />
                    We offer bespoke, breathtaking & elite wedding photography services across the globe."
                </p>
                <Button variant="outline" size="sm" onClick={() => onNavigate('about-tph')}>Read Our Story</Button>
            </div>
        </section>
    );
};



