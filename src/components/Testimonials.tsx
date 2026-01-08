import React from 'react';
import { Quote, Star, MapPin, ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { SectionHeader } from './SectionHeader';
import { testimonials } from '../pages/About/data';

interface TestimonialsProps {
    onNavigate: (page: string) => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onNavigate }) => {

    return (
        <section className="py-24 bg-white dark:bg-dark-800 border-t border-gray-100 dark:border-white/5 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <SectionHeader
                    subtitle="Client Love"
                    title="Words from the Heart"
                    description="We don't just take photos; we build relationships. Here is what our families have to say."
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    {testimonials.map((testimonial, idx) => (
                        <div key={idx} className="bg-gray-50 dark:bg-dark-900/50 p-8 rounded-[2rem] border border-gray-100 dark:border-white/5 relative group hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-xl dark:shadow-none">
                            <Quote className="absolute top-8 right-8 text-gold-500/10 w-12 h-12 rotate-180 group-hover:text-gold-500/20 transition-colors" />

                            {/* Rating */}
                            <div className="flex gap-1 mb-6">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <Star key={i} size={14} className="fill-gold-500 text-gold-500" />
                                ))}
                            </div>

                            <blockquote className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 font-light text-lg italic">
                                "{testimonial.quote}"
                            </blockquote>

                            <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-200 dark:border-white/5">
                                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover border border-gold-500/30" />
                                <div>
                                    <h4 className="font-serif text-gray-900 dark:text-white text-lg leading-none mb-1">{testimonial.name}</h4>
                                    <p className="text-xs text-gold-500 uppercase tracking-wider flex items-center gap-1">
                                        <MapPin size={10} className="fill-gold-500 text-gold-500" />
                                        {testimonial.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Button variant="text" onClick={() => onNavigate('reviews')}>Read More Stories <ArrowRight size={14} className="ml-2" /></Button>
                </div>
            </div>
        </section>
    );
};
