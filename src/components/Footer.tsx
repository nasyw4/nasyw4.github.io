import React from 'react';
import { portfolioData } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'LinkedIn', url: `https://${portfolioData.linkedin}` },
    { name: 'GitHub', url: `https://${portfolioData.github}` },
    { name: 'Twitter', url: `https://${portfolioData.twitter}` },
    { name: 'Mail', url: `mailto:${portfolioData.email}` }
  ];

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="w-full py-12 bg-[#060e20] border-t border-white/5 relative z-10">
      <div id="footer-container" className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 max-w-7xl mx-auto gap-8">
        
        {/* Left Side */}
        <div id="footer-brand" className="flex flex-col items-center md:items-start text-center md:text-left">
          <div 
            className="font-sans text-xl font-bold text-[#c3c0ff] mb-2 cursor-pointer hover:scale-105 transition-transform"
            onClick={handleBackToTop}
          >
            {portfolioData.shortName}
          </div>
          <p className="font-sans text-xs text-[#c7c4d8]/60">
            &copy; {currentYear} {portfolioData.name}. AI Engineer based in Indonesia.
          </p>
        </div>

        {/* Right Side Social links */}
        <div id="footer-socials" className="flex flex-wrap gap-6 justify-center">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="text-[#c7c4d8] hover:text-[#c3c0ff] text-xs font-mono uppercase tracking-widest transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
