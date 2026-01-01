import React from 'react';

export const Hero: React.FC = () => {
    return (
        <section className="relative h-[45vh] min-h-[400px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?auto=format&fit=crop&q=80&w=1920"
                    alt="Blog Hero"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60"></div>
            </div>
            <div className="relative z-10 text-center px-4 pt-10">
                <p className="text-gold-500 text-sm font-bold tracking-[0.2em] uppercase mb-4 animate-fade-in-up">
                    The Journal
                </p>
                <h1 className="font-serif text-5xl md:text-7xl text-white mb-6">
                    Stories & <span className="italic text-gold-500">Insights</span>
                </h1>
                <p className="text-gray-200 max-w-lg mx-auto font-light text-lg">
                    Tips, tales, and tutorials from behind the lens.
                </p>
            </div>
        </section>
    );
};



