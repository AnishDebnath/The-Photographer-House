import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Globe } from 'lucide-react';

export const ContactInfo: React.FC = () => {
    return (
        <div className="lg:w-1/3 space-y-12">
            <div>
                <h3 className="font-serif text-3xl text-gray-900 dark:text-white mb-6">Get in Touch</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                    We are thrilled to hear from you. Whether it's a grand wedding or an intimate portrait session, tell us your vision, and we'll make it happen.
                </p>
                <div className="w-20 h-1 bg-gold-500"></div>
            </div>

            <div className="space-y-8">
                <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-black transition-colors">
                        <MapPin size={20} />
                    </div>
                    <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Studio Address</p>
                        <p className="text-gray-900 dark:text-white font-serif text-lg">2, P.O, 49, Ashok Nagar, Regent Park, Kolkata, West Bengal 700040</p>
                    </div>
                </div>

                <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-black transition-colors">
                        <Phone size={20} />
                    </div>
                    <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Phone</p>
                        <a href="tel:+918910092451" className="text-gray-900 dark:text-white font-serif text-lg hover:text-gold-500 transition-colors">
                            +91 89100 92451
                        </a>
                        <p className="text-gray-500 text-sm">Mon - Sun, 09am - 09pm</p>
                    </div>
                </div>

                <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-black transition-colors">
                        <Mail size={20} />
                    </div>
                    <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Email</p>
                        <a href="mailto:okimarphotography@gmail.com" className="text-gray-900 dark:text-white font-serif text-lg hover:text-gold-500 transition-colors break-all md:break-normal">
                            okimarphotography@gmail.com
                        </a>
                    </div>
                </div>
            </div>

            {/* Studio Map Location */}
            <div className="w-full rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-lg h-64">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.384355883026!2d88.34344511116477!3d22.489758079465624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0271e32d3f95cf%3A0xdba0959d5d39f738!2sThe%20Photographer%20House%20-%20Best%20Weeding%20Photography%20%26%20Videography%20service%20in%20Kolkata%20%7C%20Product%20Photoshoot%20%7C%20Portfolio%20Shoot%20%7C!5e0!3m2!1sen!2sin!4v1767126224042!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                    title="Studio Location"
                ></iframe>
            </div>

            <div className="pt-8 border-t border-gray-200 dark:border-white/10">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Follow Us</p>
                <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full border border-gray-300 dark:border-white/20 flex items-center justify-center text-gray-500 hover:border-gold-500 hover:text-gold-500 transition-all"><Instagram size={18} /></a>
                    <a href="#" className="w-10 h-10 rounded-full border border-gray-300 dark:border-white/20 flex items-center justify-center text-gray-500 hover:border-gold-500 hover:text-gold-500 transition-all"><Facebook size={18} /></a>
                    <a href="#" className="w-10 h-10 rounded-full border border-gray-300 dark:border-white/20 flex items-center justify-center text-gray-500 hover:border-gold-500 hover:text-gold-500 transition-all"><Twitter size={18} /></a>
                    <a href="#" className="w-10 h-10 rounded-full border border-gray-300 dark:border-white/20 flex items-center justify-center text-gray-500 hover:border-gold-500 hover:text-gold-500 transition-all"><Globe size={18} /></a>
                </div>
            </div>
        </div>
    );
};




