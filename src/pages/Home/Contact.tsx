import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import { SectionHeader } from '../../components/SectionHeader';

export const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-24 bg-gray-50 dark:bg-dark-900 transition-colors duration-300" aria-labelledby="contact-heading">
            <SectionHeader subtitle="Get In Touch" title="Contact Us" />
            <h2 id="contact-heading" className="sr-only">Contact Information</h2>

            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-0 bg-[#1A1A1A] rounded-[3rem] overflow-hidden shadow-2xl">
                    {/* Map Side (Left) */}
                    <div className="md:w-1/2 relative min-h-[400px] md:min-h-full p-4 md:p-6 lg:p-8">
                        <div className="w-full h-full rounded-[2rem] overflow-hidden relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.384355883026!2d88.34344511116477!3d22.489758079465624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0271e32d3f95cf%3A0xdba0959d5d39f738!2sThe%20Photographer%20House%20-%20Best%20Weeding%20Photography%20%26%20Videography%20service%20in%20Kolkata%20%7C%20Product%20Photoshoot%20%7C%20Portfolio%20Shoot%20%7C!5e0!3m2!1sen!2sin!4v1767126224042!5m2!1sen!2sin"
                                className="w-full h-full"
                                style={{ border: 0, minHeight: '400px' }}
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>

                    {/* Text Side (Right) */}
                    <div className="md:w-1/2 p-10 md:p-14 lg:p-16 flex flex-col justify-center text-left">
                        <h3 className="font-serif text-3xl md:text-4xl text-white mb-6">We'd love to hear from you</h3>
                        <p className="text-gray-400 mb-10 leading-relaxed font-light">
                            We are so passionate about making incredible photo & video stories for our couples and this just shines through in our images. Contact us and let's together discuss & plan your iconic cinematic wedding.
                        </p>

                        <div className="space-y-8">
                            {/* Address */}
                            <div className="flex items-start gap-5 group">
                                <div className="w-12 h-12 rounded-full bg-gold-900/20 flex items-center justify-center text-gold-500 shrink-0 mt-1 group-hover:bg-gold-500 group-hover:text-black transition-colors duration-300">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-gold-500 font-bold uppercase tracking-widest mb-1">Address</p>
                                    <p className="text-gray-300">Kolkata, West Bengal, 700126</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-5 group">
                                <div className="w-12 h-12 rounded-full bg-gold-900/20 flex items-center justify-center text-gold-500 shrink-0 mt-1 group-hover:bg-gold-500 group-hover:text-black transition-colors duration-300">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-gold-500 font-bold uppercase tracking-widest mb-1">Email Us</p>
                                    <p className="text-gray-300">hello@photographerhouse.com</p>
                                </div>
                            </div>

                            {/* Call */}
                            <div className="flex items-start gap-5 group">
                                <div className="w-12 h-12 rounded-full bg-gold-900/20 flex items-center justify-center text-gold-500 shrink-0 mt-1 group-hover:bg-gold-500 group-hover:text-black transition-colors duration-300">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-gold-500 font-bold uppercase tracking-widest mb-1">Call Us</p>
                                    <p className="text-gray-300">+91 98306 93939</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
