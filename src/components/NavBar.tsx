import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from './Button';
import logo from '../assets/logo/logo.png';

interface NavBarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  currentPage: string;
  onNavigate: (page: string, sectionId?: string) => void;
}

export const NavBar: React.FC<NavBarProps> = ({ isDarkMode, toggleTheme, currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, page: string, sectionId?: string) => {
    e.preventDefault();
    setIsOpen(false);
    onNavigate(page, sectionId);
  };

  const navLinks = [
    { name: 'Home', page: 'home', sectionId: 'root' },
    { name: 'Special Moments', page: 'special-moments', sectionId: '' },
    { name: 'Portfolio', page: 'portfolio', sectionId: '' },
    { name: 'Films', page: 'films', sectionId: '' },
    { name: 'Albums', page: 'albums', sectionId: '' },
    { name: 'Services', page: 'services', sectionId: '' },
    { name: 'About us', page: 'about-tph', sectionId: '' },
    { name: 'Reviews', page: 'reviews', sectionId: '' },
    { name: 'Blog', page: 'blog', sectionId: '' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 dark:bg-dark-900/95 backdrop-blur-md py-4 shadow-lg border-b border-gray-200 dark:border-white/5' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={(e) => handleNavClick(e, 'home')}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gold-400 blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <img
              src={logo}
              alt="The Photographer House Logo"
              className="w-10 h-10 object-contain relative z-10"
            />
          </div>
          <div className={`text-xl md:text-2xl font-serif tracking-tight ${isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'}`}>
            The Photographer <span className="text-gold-500 italic font-semibold">House</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.sectionId}`}
              onClick={(e) => handleNavClick(e, link.page, link.sectionId)}
              className={`text-xs uppercase tracking-widest hover:text-gold-500 transition-colors relative group ${isScrolled ? 'text-gray-600 dark:text-gray-300' : 'text-gray-300'}`}
            >
              {link.name}
              <span className={`absolute -bottom-2 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full ${currentPage === link.page ? 'w-full' : ''}`}></span>
            </a>
          ))}

          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${isScrolled ? 'hover:bg-gray-100 dark:hover:bg-white/10 text-gray-700 dark:text-gray-200' : 'hover:bg-white/10 text-white'}`}
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <Button
            variant="danger"
            size="sm"
            className="hover:scale-105 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-red-900/30 transition-all duration-500 ease-out"
            onClick={(e) => handleNavClick(e, 'booking')}
          >
            Book Now
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${isScrolled ? 'text-gray-700 dark:text-gray-200' : 'text-white'}`}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            className={`${isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-dark-900 border-t border-gray-200 dark:border-white/10 absolute w-full p-6 flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.sectionId}`}
              className="text-sm uppercase tracking-widest text-gray-600 dark:text-gray-300 hover:text-gold-500 transition-colors block py-2"
              onClick={(e) => handleNavClick(e, link.page, link.sectionId)}
            >
              {link.name}
            </a>
          ))}
          <Button variant="danger" className="w-full" onClick={(e) => handleNavClick(e, 'booking')}>Book Now</Button>
        </div>
      )}
    </nav>
  );
};