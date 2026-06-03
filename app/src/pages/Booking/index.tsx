import React from 'react';

import { Hero } from './Hero';
import { ContactInfo } from './ContactInfo';
import { Form } from './Form';

export const BookingPage: React.FC = () => {
    return (
        <div className="bg-white dark:bg-dark-900 min-h-screen transition-colors duration-300 animate-in fade-in">
            <div id="booking-hero">
                <Hero />
            </div>

            <div className="container mx-auto px-6 py-20">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                    <ContactInfo />
                    <Form />
                </div>
            </div>
        </div>
    );
};
