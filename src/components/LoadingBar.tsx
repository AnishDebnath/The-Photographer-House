import React, { useEffect, useState } from 'react';

interface LoadingBarProps {
    isNavigating: boolean;
}

export const LoadingBar: React.FC<LoadingBarProps> = ({ isNavigating }) => {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
        let interval: any;

        if (isNavigating) {
            setIsVisible(true);
            setShouldAnimate(true);
            setProgress(0);

            // Initial jump
            setTimeout(() => setProgress(10), 50);

            interval = setInterval(() => {
                setProgress((prev) => {
                    if (prev >= 90) {
                        clearInterval(interval);
                        return 90;
                    }
                    // Slow down as it approaches 90
                    const increment = Math.max(0.5, (90 - prev) / 10) * Math.random();
                    return prev + increment;
                });
            }, 100);
        } else {
            setProgress(100);
            const timer = setTimeout(() => {
                setIsVisible(false);
                // Reset after fade out
                setTimeout(() => setProgress(0), 300);
            }, 500);
            return () => {
                clearTimeout(timer);
                clearInterval(interval);
            };
        }

        return () => clearInterval(interval);
    }, [isNavigating]);

    if (!isVisible) return null;

    return (
        <div
            className={`fixed top-0 left-0 h-1.5 z-[9999] transition-all duration-500 ease-out bg-gold-500 shadow-[0_0_20px_rgba(197,160,40,0.8)]`}
            style={{
                width: `${progress}%`,
                opacity: progress === 100 ? 0 : 1,
            }}
        >
            {/* Animated shimmer effect */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="h-full w-[200%] bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    style={{
                        animation: 'shimmer 2s infinite linear',
                        backgroundSize: '50% 100%'
                    }}
                ></div>
            </div>

            {/* Glow at the leading edge */}
            <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-r from-transparent to-gold-400 blur-md"></div>
            <div className="absolute right-0 top-0 h-full w-6 bg-white blur-[2px] opacity-80"></div>
        </div>
    );
};
