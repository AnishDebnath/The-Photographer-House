import React, { useState, useEffect } from 'react';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../../components/Button';
import { ServiceData } from '../../types';

interface ServiceCardProps {
    service: ServiceData;
    onNavigate: (page: string, sectionId?: string) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onNavigate }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        if (!service.images || service.images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % service.images.length);
        }, 4000); // Change slide every 4 seconds

        return () => clearInterval(interval);
    }, [service.images]);

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % service.images.length);
    };

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + service.images.length) % service.images.length);
    };

    return (
        <div className={`flex flex-col ${service.alignment === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-8 xl:gap-12 lg:items-center`}>
            {/* Text Side */}
            <div className="lg:w-1/2">
                <div className="flex items-center gap-3 mb-3 md:mb-4 lg:mb-3 xl:mb-4">
                    <service.icon className="text-gold-500 w-4 h-4 md:w-5 md:h-5 lg:w-4 lg:h-4 xl:w-5 xl:h-5" />
                    <p className="text-gold-500 text-[10px] md:text-xs lg:text-[10px] xl:text-xs font-bold tracking-[0.2em] uppercase">{service.subtitle}</p>
                </div>
                <h3 className="font-serif text-3xl md:text-4xl lg:text-3xl xl:text-5xl text-gray-900 dark:text-white mb-3 md:mb-5 lg:mb-4 xl:mb-6 leading-tight">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-5 md:mb-6 lg:mb-6 xl:mb-8 leading-relaxed text-sm md:text-base lg:text-sm xl:text-lg">{service.description}</p>
                <ul className="space-y-2 md:space-y-3 lg:space-y-3 xl:space-y-4 mb-6 md:mb-8 lg:mb-8 xl:mb-10">
                    {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 md:gap-3">
                            <div className="mt-1 bg-green-500/10 p-0.5 rounded-full text-green-500"><Check size={14} className="w-3 h-3 md:w-4 md:h-4" /></div>
                            <span className="text-gray-700 dark:text-gray-300 text-sm md:text-base lg:text-sm xl:text-base">{feature}</span>
                        </li>
                    ))}
                </ul>
                <div className="flex flex-wrap gap-3 md:gap-4">
                    <Button variant="danger" onClick={() => onNavigate('booking')} className="text-xs md:text-sm px-4 md:px-6 py-2 md:py-3">Book a Session</Button>
                    <Button variant="outline" onClick={() => onNavigate(service.id === 'albums' ? 'albums' : 'portfolio')} className="text-xs md:text-sm px-4 md:px-6 py-2 md:py-3">View Our Work</Button>
                </div>
            </div>

            {/* Image Side with Manual Navigation */}
            <div className="lg:w-1/2">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group aspect-[4/3]">
                    {service.images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`${service.title} view ${index + 1}`}
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                        />
                    ))}

                    {/* Navigation Buttons */}
                    {service.images.length > 1 && (
                        <>
                            <button
                                onClick={handlePrev}
                                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
                                aria-label="Previous image"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button
                                onClick={handleNext}
                                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
                                aria-label="Next image"
                            >
                                <ChevronRight size={24} />
                            </button>

                            {/* Indicators */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-1.5">
                                {service.images.map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/40'}`}
                                    />
                                ))}
                            </div>
                        </>
                    )}

                    {/* Badge */}
                    <div className="absolute top-6 right-6 z-20">
                        <span className="bg-black/60 backdrop-blur-md text-white px-4 py-2 text-[10px] uppercase tracking-widest border border-white/20 rounded-full">
                            {service.subtitle}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};



