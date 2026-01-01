import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'text' | 'danger' | 'dark-outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center transition-all duration-300 uppercase tracking-widest font-sans text-xs font-bold rounded-full";
  
  const variants = {
    primary: "bg-gold-500 text-black border border-transparent hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:border-black dark:hover:border-gold-500",
    outline: "border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black",
    text: "text-gold-500 hover:text-black dark:hover:text-white underline-offset-4 hover:underline",
    danger: "bg-red-900 text-white border border-red-900 hover:bg-white hover:text-red-900 hover:border-red-900",
    // dark-outline tailored for hero section which remains dark usually, but adaptable
    "dark-outline": "bg-red-900/40 border border-red-500/20 text-red-50 hover:bg-red-900/60 hover:border-red-500/40 hover:text-white backdrop-blur-md"
  };

  const sizes = {
    sm: "px-4 py-2",
    md: "px-8 py-3",
    lg: "px-10 py-4 text-sm"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};