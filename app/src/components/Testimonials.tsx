import React from 'react';
import { Quote, Star, MapPin, ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { SectionHeader } from './SectionHeader';
import { testimonials } from './data';

const GoogleIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.24.81-.6z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.46 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
);

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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
                    {testimonials.map((testimonial, idx) => (
                        <div key={idx} className="bg-white/40 dark:bg-white/[0.02] backdrop-blur-xl p-6 md:p-8 rounded-[2rem] border border-gray-200/50 dark:border-white/[0.05] relative group hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-gold-500/5 dark:hover:shadow-black/40 overflow-hidden">
                            {/* Refined Background Symbol (Watermark) */}
                            <Quote size={160} className="absolute -bottom-10 -right-10 text-gold-500/[0.03] dark:text-white/[0.02] rotate-12 transition-all duration-700 group-hover:rotate-0 group-hover:scale-110 pointer-events-none" />

                            {/* Subtle Background Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-gold-500/[0.02] dark:from-white/[0.02] dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="flex justify-between items-center mb-4 md:mb-6">
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={12} className={i < testimonial.rating ? "fill-gold-500 text-gold-500" : "fill-gray-200 text-gray-200 dark:fill-gray-800 dark:text-gray-800"} />
                                    ))}
                                </div>

                                {testimonial.reviewLink && (
                                    <a
                                        href={testimonial.reviewLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 py-1.5 px-3 rounded-full bg-white/50 dark:bg-white/[0.03] border border-gray-200/50 dark:border-white/[0.05] shadow-sm hover:shadow-md hover:bg-white dark:hover:bg-white/[0.08] transition-all duration-300 group/google z-10"
                                        title="View on Google"
                                    >
                                        <GoogleIcon className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover/google:scale-110 transition-transform duration-300" />
                                        <span className="text-[10px] md:text-xs font-bold text-gray-600 dark:text-gray-300 group-hover/google:text-blue-600 dark:group-hover/google:text-white transition-colors uppercase tracking-tight">Review</span>
                                    </a>
                                )}
                            </div>

                            <blockquote className="text-gray-700 dark:text-gray-200 leading-relaxed mb-8 md:mb-10 font-normal text-base md:text-lg italic relative z-10 line-clamp-3">
                                {"" + testimonial.quote + ""}
                            </blockquote>

                            <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-200/50 dark:border-white/10 relative z-10">
                                <div className="relative group/avatar">
                                    <img src={testimonial.image} alt={testimonial.name} className="w-11 h-11 md:w-13 md:h-13 rounded-full object-cover border-2 border-gold-500/20 group-hover/avatar:border-gold-500 transition-colors duration-500" />
                                    <div className="absolute inset-0 rounded-full shadow-inner pointer-events-none" />
                                </div>
                                <div>
                                    <h4 className="font-serif text-gray-900 dark:text-white text-base md:text-lg font-bold leading-tight mb-0.5">{testimonial.name}</h4>
                                    <p className="text-[10px] text-gold-600 dark:text-gold-500 uppercase tracking-[0.1em] font-semibold flex items-center gap-1.5">
                                        <MapPin size={10} className="fill-gold-500/20 text-gold-500" />
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
