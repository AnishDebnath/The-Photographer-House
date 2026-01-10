import React from 'react';
import { Button } from '../../components/Button';

export const Newsletter: React.FC = () => {
    return (
        <section className="pt-0 pb-12 px-6">
            <div className="container mx-auto">
                <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-gray-900 to-black text-white p-12 md:p-16 text-center shadow-2xl border border-white/10">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="font-serif text-3xl md:text-5xl mb-6">
                            Have a story to tell?
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 font-light">
                            Subscribe to our newsletter for weekly photography insights, or join our community of writers to share your own experiences.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full sm:w-auto min-w-[300px] px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 focus:bg-white/20 transition-all"
                            />
                            <Button variant="primary">Subscribe</Button>
                        </div>
                        <p className="mt-6 text-xs text-gray-600">
                            Are you a photographer? <button className="text-gold-500 hover:underline underline-offset-4">Write for us</button>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};



