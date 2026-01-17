import { useEffect } from 'react';
import Lenis from 'lenis';

export const SmoothScroll = () => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        (window as any).lenis = lenis;

        requestAnimationFrame(raf);

        // Integrate with React Router
        // This ensures Lenis updates when the page content changes
        const observer = new ResizeObserver(() => {
            lenis.resize();
        });
        observer.observe(document.body);

        return () => {
            lenis.destroy();
            observer.disconnect();
        };
    }, []);

    return null;
};
