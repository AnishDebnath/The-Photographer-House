import React, { useState, useEffect, useRef } from 'react';

interface StatCounterProps {
  value: number;
  label: string;
  suffix?: string;
  duration?: number;
  className?: string;
  valueClassName?: string;
  labelClassName?: string;
}

export const StatCounter: React.FC<StatCounterProps> = ({ 
  value, 
  label, 
  suffix = '', 
  duration = 2000,
  className = '',
  valueClassName = "text-4xl font-serif text-gray-900 dark:text-white mb-2 tabular-nums transition-colors duration-300",
  labelClassName = "text-gold-500 text-xs uppercase tracking-widest"
}) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          let startTime: number | null = null;
          
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            
            // Ease out quart: 1 - (1 - x)^4
            const easeProgress = 1 - Math.pow(1 - progress, 4);
            
            setCount(Math.floor(easeProgress * value));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 } // Trigger when 20% visible
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [value, duration]);

  return (
    <div ref={elementRef} role="listitem" className={className}>
      <h3 className={valueClassName}>
        {count}{suffix}
      </h3>
      <p className={labelClassName}>{label}</p>
    </div>
  );
};