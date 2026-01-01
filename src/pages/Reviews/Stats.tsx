import React from 'react';
import { Star } from 'lucide-react';

export const Stats: React.FC = () => {
    const renderStars = (count: number) => {
        return [...Array(5)].map((_, i) => (
            <Star
                key={i}
                size={14}
                className={`${i < count ? 'fill-gold-500 text-gold-500' : 'fill-gray-200 text-gray-200 dark:fill-gray-700 dark:text-gray-700'}`}
            />
        ));
    };

    return (
        <section className="container mx-auto px-6 -mt-10 relative z-20 mb-20">
            <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-white/5 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-white/10 transition-colors duration-300">
                <div>
                    <div className="text-5xl font-serif text-gray-900 dark:text-white mb-2">4.9</div>
                    <div className="flex justify-center gap-1 mb-2">
                        {renderStars(5)}
                    </div>
                    <p className="text-xs uppercase tracking-widest text-gray-500">Average Rating</p>
                </div>
                <div>
                    <div className="text-5xl font-serif text-gray-900 dark:text-white mb-2">150+</div>
                    <p className="text-gold-500 text-sm mb-2">Weddings & Events</p>
                    <p className="text-xs uppercase tracking-widest text-gray-500">Captured Globally</p>
                </div>
                <div>
                    <div className="text-5xl font-serif text-gray-900 dark:text-white mb-2">100%</div>
                    <p className="text-gold-500 text-sm mb-2">Recommended</p>
                    <p className="text-xs uppercase tracking-widest text-gray-500">Client Satisfaction</p>
                </div>
            </div>
        </section>
    );
};



