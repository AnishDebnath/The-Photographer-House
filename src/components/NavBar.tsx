import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';
import logo from '../assets/logo/logo.png';

import { navLinks } from './data';

interface NavBarProps {
  currentPage: string;
  onNavigate: (page: string, sectionId?: string) => void;
}

export const NavBar: React.FC<NavBarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled ? 'bg-white/95 dark:bg-dark-900/95 backdrop-blur-md py-4 shadow-lg border-b border-gray-200 dark:border-white/5' : 'bg-transparent py-6'}`}>
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
            <div className={`text-md lg:text-lg xl:text-xl 2xl:text-2xl font-serif tracking-tight ${isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'}`}>
              The Photographer <span className="text-gold-500 italic font-semibold">House</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center lg:gap-2 xl:gap-4 2xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.sectionId}`}
                onClick={(e) => handleNavClick(e, link.page, link.sectionId)}
                className={`lg:text-[9px] xl:text-[10px] 2xl:text-xs uppercase tracking-widest hover:text-gold-500 transition-colors relative group ${isScrolled ? 'text-gray-600 dark:text-gray-300' : 'text-gray-300'}`}
              >
                {link.name}
                <span className={`absolute -bottom-2 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full ${currentPage === link.page ? 'w-full' : ''}`}></span>
              </a>
            ))}

            <Button
              variant="danger"
              size="sm"
              className="lg:px-2 xl:px-4 2xl:px-6 hover:scale-105 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-red-900/30 transition-all duration-500 ease-out lg:text-[10px] 2xl:text-xs"
              onClick={(e) => handleNavClick(e, 'booking')}
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              className={`${isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Moved outside <nav> to avoid clipping from backdrop-filter */}
      <div className={`lg:hidden fixed inset-0 z-[110] transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-md"
          onClick={() => setIsOpen(false)}
        ></div>
        <div className={`absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white dark:bg-dark-900 shadow-2xl transition-transform duration-500 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col p-8 overflow-y-auto`}>
          <div className="flex justify-between items-center mb-10">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
              <span className="font-serif text-md text-gray-900 dark:text-white">The Photographer <span className="text-gold-500 italic font-semibold">House</span></span>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 text-gray-500 hover:text-gold-500">
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.sectionId}`}
                className={`text-sm uppercase tracking-[0.15em] font-bold py-4 border-b border-gray-100 dark:border-white/5 transition-colors ${currentPage === link.page ? 'text-gold-500' : 'text-gray-600 dark:text-gray-300'}`}
                onClick={(e) => handleNavClick(e, link.page, link.sectionId)}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-8">
            <Button variant="danger" className="w-full py-4 text-xs tracking-widest uppercase font-bold" onClick={(e) => handleNavClick(e, 'booking')}>
              Book Now
            </Button>
            <p className="text-center text-[9px] text-gray-400 mt-6 uppercase tracking-[0.2em]">Premium Photography Since 2010</p>
          </div>
        </div>
      </div>
    </>
  );
};