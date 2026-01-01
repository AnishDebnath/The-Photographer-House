import React from 'react';

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  subtitle, 
  title, 
  description, 
  centered = true,
  light = false
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'} max-w-4xl mx-auto px-4`}>
      <span className="block text-gold-500 text-xs font-bold tracking-[0.2em] uppercase mb-3">
        {subtitle}
      </span>
      {/* 
         If 'light' prop is true (forced light text on dark bg), keep white.
         Otherwise, use dark text in light mode and light text in dark mode.
      */}
      <h2 className={`font-serif text-3xl md:text-5xl mb-6 ${light ? 'text-white' : 'text-gray-900 dark:text-amber-50'} leading-tight transition-colors duration-300`}>
        {title}
      </h2>
      {description && (
        <p className={`font-light leading-relaxed max-w-2xl mx-auto transition-colors duration-300 ${light ? 'text-gray-400' : 'text-gray-600 dark:text-gray-400'}`}>
          {description}
        </p>
      )}
      <div className={`mt-6 w-16 h-0.5 bg-gold-500 ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};