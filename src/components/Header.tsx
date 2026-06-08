import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#0b1326]/70 backdrop-blur-md border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.2)] py-4' 
        : 'bg-[#0b1326]/30 backdrop-blur-sm border-b border-white/10 py-5'
    }`}>
      <div id="nav-container" className="flex justify-between items-center px-6 md:px-12 max-w-7xl mx-auto">
        {/* Logo */}
        <div 
          id="nav-logo"
          className="font-sans text-2xl font-bold text-[#c3c0ff] cursor-pointer tracking-wider hover:scale-105 transition-transform"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          {portfolioData.shortName}
        </div>

        {/* Desktop Links */}
        <div id="desktop-menu" className="hidden md:flex gap-10 items-center">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-[#c7c4d8] hover:text-[#c3c0ff] transition-colors duration-300 font-medium text-xs tracking-widest uppercase cursor-pointer"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Connect Button */}
        <div className="hidden md:block">
          <a
            href={`mailto:${portfolioData.email}`}
            id="desktop-connect-btn"
            className="group relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xs font-semibold uppercase tracking-widest text-[#dad7ff] rounded-full group bg-gradient-to-br from-[#c3c0ff] to-[#ffb695] hover:text-white focus:ring-4 focus:outline-none focus:ring-indigo-800 transition duration-300 cursor-pointer"
          >
            <span className="relative px-6 py-2 transition-all ease-in duration-75 bg-[#0b1326] rounded-full group-hover:bg-opacity-0">
              Connect
            </span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          id="mobile-menu-toggle"
          className="md:hidden text-[#dae2fd] hover:text-[#c3c0ff] transition-colors focus:outline-none cursor-pointer p-1"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer menu */}
      {isOpen && (
        <div id="mobile-menu-drawer" className="md:hidden absolute top-full left-0 w-full bg-[#131b2e]/98 backdrop-blur-lg border-b border-white/5 py-6 px-6 flex flex-col gap-5 animate-fade-in">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-left text-[#dae2fd] hover:text-[#c3c0ff] font-semibold text-sm tracking-wider uppercase py-2 border-b border-white/5 cursor-pointer"
            >
              {link.name}
            </button>
          ))}
          <a
            href={`mailto:${portfolioData.email}`}
            id="mobile-connect-btn"
            className="flex items-center justify-center gap-2 bg-[#4f46e5] text-white py-3 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-[#4f46e5]/80 transition-all text-center mt-2"
          >
            Connect <ArrowRight size={14} />
          </a>
        </div>
      )}
    </nav>
  );
}
