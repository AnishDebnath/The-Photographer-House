import React from 'react';
import { SectionHeader } from './SectionHeader';
import { contactInfo } from './data';

export const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-24 bg-gray-50 dark:bg-dark-900 transition-colors duration-300" aria-labelledby="contact-heading">
            <SectionHeader subtitle="Get In Touch" title="Contact Us" />
            <h2 id="contact-heading" className="sr-only">Contact Information</h2>

            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row gap-0 bg-[#1A1A1A] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
                    {/* Map Side (Left) */}
                    <div className="w-full lg:w-1/2 relative min-h-[350px] md:min-h-[450px] p-4 md:p-6 lg:p-8">
                        <div className="w-full h-full rounded-[1.5rem] md:rounded-[2rem] overflow-hidden relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.384355883026!2d88.34344511116477!3d22.489758079465624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0271e32d3f95cf%3A0xdba0959d5d39f738!2sThe%20Photographer%20House%20-%20Best%20Weeding%20Photography%20%26%20Videography%20service%20in%20Kolkata%20%7C%20Product%20Photoshoot%20%7C%20Portfolio%20Shoot%20%7C!5e0!3m2!1sen!2sin!4v1767126224042!5m2!1sen!2sin"
                                className="w-full h-full"
                                style={{ border: 0, minHeight: '350px' }}
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>

                    {/* Text Side (Right) */}
                    <div className="w-full lg:w-1/2 p-8 md:p-14 lg:p-16 flex flex-col justify-center text-left">
                        <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-white mb-6">We'd love to hear from you</h3>
                        <p className="text-gray-400 mb-8 md:mb-10 leading-relaxed font-light text-sm md:text-base">
                            We are so passionate about making incredible photo & video stories for our couples and this just shines through in our images. Contact us and let's together discuss & plan your iconic cinematic wedding.
                        </p>

                        <div className="space-y-6 md:space-y-8">
                            {contactInfo.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-4 md:gap-5 group">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gold-900/20 flex items-center justify-center text-gold-500 shrink-0 mt-1 group-hover:bg-gold-500 group-hover:text-black transition-colors duration-300">
                                        <item.icon size={18} className="md:w-5 md:h-5" />
                                    </div>
                                    <div className="flex-grow">
                                        <p className="text-[10px] md:text-xs text-gold-500 font-bold uppercase tracking-widest mb-1">{item.label}</p>
                                        <p className="text-gray-300 text-sm md:text-base break-all md:break-normal">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
