import React from 'react';

export const Hero: React.FC = () => {
    return (
        <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1511285560982-1351cdeb9821?auto=format&fit=crop&q=80&w=1920"
                    alt="Booking Hero"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60"></div>
            </div>
            <div className="relative z-10 text-center px-6 pt-20">
                <p className="text-gold-500 text-[10px] md:text-sm font-bold tracking-[0.2em] uppercase mb-4 animate-fade-in-up">
                    Start Your Journey
                </p>
                <h1 className="font-serif text-4xl md:text-6xl text-white mb-6 leading-tight">
                    Book A <span className="italic text-gold-500">Session</span>
                </h1>
            </div>
        </section>
    );
};




