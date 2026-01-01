import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '../../components/Button';
import { SectionHeader } from '../../components/SectionHeader';
import { services } from '../../data';

interface ServicesProps {
    onNavigate: (page: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
    return (
        <section id="services-preview" className="py-32 bg-zinc-50 dark:bg-black transition-colors duration-300" aria-labelledby="services-heading">
            <SectionHeader
                subtitle="Expertise"
                title="Our Premium Services"
                description="Tailored photography solutions crafted for those who seek the extraordinary. From intimate moments to grand celebrations."
            />
            <h2 id="services-heading" className="sr-only">Services Offered</h2>

            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, idx) => (
                    <div
                        key={idx}
                        className="group relative p-0.5 rounded-[2rem] bg-gradient-to-br from-transparent via-transparent to-transparent hover:from-gold-500 hover:via-gold-600 hover:to-gold-500 transition-all duration-500"
                        role="article"
                        onClick={() => onNavigate('services')}
                    >
                        <div className="relative h-full bg-white dark:bg-dark-900 rounded-[1.9rem] p-10 border border-zinc-200 dark:border-white/10 group-hover:border-transparent transition-all duration-300 overflow-hidden flex flex-col items-start text-left">

                            {/* Background Decoration Icon */}
                            <div className="absolute -bottom-4 -right-4 opacity-[0.03] dark:opacity-[0.05] group-hover:opacity-10 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-all duration-500 transform rotate-12">
                                <service.icon size={160} />
                            </div>

                            {/* Top Icon */}
                            <div className="w-16 h-16 bg-zinc-50 dark:bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-gray-900 dark:text-white group-hover:bg-gold-500 group-hover:text-black transition-all duration-300 shadow-sm">
                                <service.icon size={28} strokeWidth={1.5} />
                            </div>

                            <h3 className="font-serif text-2xl text-gray-900 dark:text-white mb-4 group-hover:text-gold-600 dark:group-hover:text-gold-500 transition-colors relative z-10">{service.title}</h3>

                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-8 relative z-10 flex-grow">
                                {service.description}
                            </p>

                            <div className="flex items-center text-xs font-bold uppercase tracking-widest text-gold-600 dark:text-gold-500 group-hover:translate-x-2 transition-transform duration-300 relative z-10 mt-auto">
                                <span>Discover More</span>
                                <ChevronRight size={14} className="ml-2" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-20">
                <Button variant="outline" onClick={() => onNavigate('services')}>
                    View Comprehensive Pricing
                </Button>
            </div>
        </section>
    );
};



