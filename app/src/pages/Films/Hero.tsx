import React, { useState, useEffect } from 'react';

export const Hero: React.FC = () => {
    const [videoUrl, setVideoUrl] = useState('/assets/home/video-background.webm');

    useEffect(() => {
        fetch('/api/banners/films-hero')
            .then(res => res.json())
            .then(data => {
                if (data && data.asset_url) {
                    setVideoUrl(data.asset_url);
                }
            })
            .catch(console.error);
    }, []);

    return (
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-100"
                >
                    <source src={videoUrl} type="video/webm" />
                    Your browser does not support the video tag.
                </video>
                {/* <img
                    src="/assets/booking banner.jpg"
                    alt="Films Hero"
                    className="w-full h-full object-cover"
                /> */}
                <div className="absolute inset-0 bg-black/50"></div>
            </div>
            <div className="relative z-10 text-center px-4 pt-20">
                <p className="text-gold-500 text-sm font-bold tracking-[0.2em] uppercase mb-4 animate-fade-in-up">
                    Cinematic Experience
                </p>
                <h1 className="font-serif text-5xl md:text-7xl text-white mb-6">
                    Stories in <span className="italic text-gold-500">Motion</span>
                </h1>
                <p className="text-gray-200 max-w-lg mx-auto font-light text-lg mb-8">
                    We don't just capture events; we bottle emotions. Experience the laughter, tears, and joy through our cinematic lens.
                </p>
            </div>
        </section>
    );
};



