import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Updates', href: '#updates' },
    { name: 'Visa', href: '#visa' },
    { name: 'FAQs', href: '#faq' },
    { name: 'Contact', href: '#footer' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex-shrink-0 transition-opacity hover:opacity-90">
             <img 
               src="https://www.srilanka.travel/images/theames-new/sri-lanka.png" 
               alt="So Sri Lanka" 
               className={`h-12 md:h-16 w-auto object-contain transition-all duration-300 ${
                 !isScrolled ? 'brightness-0 invert drop-shadow-lg' : ''
               }`} 
             />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className={`text-sm font-bold transition-colors hover:text-ceylon-gold ${
                  isScrolled ? 'text-slate-600' : 'text-white/90'
                }`}
              >
                {link.name}
              </a>
            ))}
            <button className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg ${
              isScrolled 
                ? 'bg-ceylon-green text-white hover:bg-ceylon-green/90' 
                : 'bg-white text-ceylon-green hover:bg-white/90'
            }`}>
              Apply for Visa
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md ${isScrolled ? 'text-slate-800' : 'text-white'}`}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg animate-fade-in font-rounded">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-bold text-slate-700 hover:text-ceylon-green hover:bg-blue-50"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};