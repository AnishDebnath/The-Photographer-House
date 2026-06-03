import React from 'react';

export const Hero: React.FC = () => {
    return (
        <section className="relative h-[40vh] min-h-[350px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1920"
                    alt="Reviews Hero"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60"></div>
            </div>
            <div className="relative z-10 text-center px-4 pt-10">
                <p className="text-gold-500 text-sm font-bold tracking-[0.2em] uppercase mb-4 animate-fade-in-up">
                    Kind Words
                </p>
                <h1 className="font-serif text-5xl md:text-6xl text-white mb-6">
                    Client <span className="italic text-gold-500">Love</span>
                </h1>
                <p className="text-gray-200 max-w-lg mx-auto font-light text-lg">
                    Don't just take our word for it. Hear from the people whose stories we've had the honor of telling.
                </p>
            </div>
        </section>
    );
};



