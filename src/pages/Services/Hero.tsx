import React from 'react';

export const Hero: React.FC = () => {
    return (
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
                <img src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover" alt="Services Hero" />
                <div className="absolute inset-0 bg-black/70"></div>
            </div>
            <div className="relative z-10 text-center px-6 pt-20">
                <p className="text-gold-500 text-[10px] md:text-sm font-bold tracking-[0.2em] uppercase mb-4 animate-fade-in-up">Professional Photography Studio</p>
                <h1 className="font-serif text-3xl sm:text-4xl md:text-7xl text-white mb-6 leading-tight">Services Tailored to <br /><span className="italic text-gold-500">Your Vision</span></h1>
                <p className="text-gray-200 max-w-2xl mx-auto font-light text-sm md:text-lg">From intimate portraits to grand corporate events, we provide professional photography services designed to capture the essence of every moment.</p>
            </div>
        </section>
    );
};



