import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Offerings', href: '#offerings' },
  { label: 'Clients', href: '#clients' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Container */}
        <div className="flex flex-col group cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          <div className={`font-logo text-3xl md:text-4xl tracking-[0.2em] transition-colors duration-500 leading-none text-stone-800`}>
            LUMINA
          </div>
          <div className={`text-[0.6rem] md:text-[0.7rem] tracking-[0.35em] font-sans font-medium uppercase mt-2 pl-1 transition-colors duration-500 text-stone-600`}>
            Presence. Poise. Power.
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className={`text-xs uppercase tracking-widest font-bold transition-colors duration-300 text-stone-800 hover:text-stone-500`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden transition-colors duration-300 text-stone-800`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} className="text-stone-800" /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-stone-100 p-6 md:hidden flex flex-col items-center space-y-4 shadow-xl">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm uppercase tracking-widest font-bold text-stone-800"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;