import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '../../components/Button';
import { faqs } from './data';

interface FaqProps {
    onNavigate: (page: string) => void;
}

export const Faq: React.FC<FaqProps> = ({ onNavigate }) => {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-gray-50 dark:bg-dark-900 transition-colors duration-300 relative overflow-hidden" aria-labelledby="faq-heading">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-gold-500/5 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-gold-500 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Help Center</span>
                        <h2 id="faq-heading" className="font-serif text-4xl md:text-5xl text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
                        <p className="text-gray-600 dark:text-gray-400 font-light text-lg">Detailed answers to your most common concerns.</p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`group rounded-2xl transition-all duration-300 ease-out border-l-4 ${openFaqIndex === index
                                    ? 'bg-white dark:bg-dark-800 shadow-xl border-gold-500 scale-[1.02]'
                                    : 'bg-white/50 dark:bg-white/5 border-transparent hover:bg-white dark:hover:bg-white/10'
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                                    aria-expanded={openFaqIndex === index}
                                >
                                    <span className={`font-serif text-lg md:text-xl transition-colors duration-300 ${openFaqIndex === index ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white'}`}>
                                        {faq.q}
                                    </span>
                                    <div className={`shrink-0 ml-4 p-2 rounded-full transition-all duration-300 ${openFaqIndex === index ? 'bg-gold-500 text-black rotate-180 shadow-lg shadow-gold-500/30' : 'bg-gray-100 dark:bg-white/10 text-gray-500 group-hover:bg-gold-500/20 group-hover:text-gold-500'}`}>
                                        <ChevronDown size={20} className={`transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180' : ''}`} />
                                    </div>
                                </button>

                                <div
                                    className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${openFaqIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="p-6 md:p-8 pt-0 text-gray-600 dark:text-gray-400 leading-relaxed text-base md:text-lg font-light">
                                            <div className="w-10 h-0.5 bg-gray-200 dark:bg-white/10 mb-6"></div>
                                            {faq.a}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-gray-500 text-sm mb-4">Still have questions?</p>
                        <Button variant="outline" onClick={() => onNavigate('booking')}>Contact Support</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};



