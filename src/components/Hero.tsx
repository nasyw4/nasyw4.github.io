import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../data';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('projects');
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

  return (
    <section 
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 max-w-5xl mx-auto pt-24 py-16"
    >
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        id="hero-badge"
        className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8"
      >
        <span className="text-[#c3c0ff] font-mono text-xs tracking-wider uppercase">
          {portfolioData.role}
        </span>
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        id="hero-title"
        className="font-sans text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 max-w-4xl tracking-tight leading-tight text-white"
      >
        Building Intelligent Systems with{' '}
        <span className="bg-gradient-to-r from-[#c3c0ff] via-[#e2dfff] to-[#ffb695] bg-clip-text text-transparent inline-block">
          AI, Machine Learning, and Data
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        id="hero-desc-wrapper"
        className="flex flex-col items-center gap-4 mb-12 select-none"
      >
        <span className="text-[#ffb695] font-mono text-xs sm:text-sm tracking-widest uppercase font-semibold">
          AI Systems • Data Science • Intelligent Automation
        </span>
        <p className="font-sans text-base sm:text-lg md:text-xl text-[#c7c4d8] max-w-3xl leading-relaxed">
          Building AI-powered products that transform complex data into actionable insights and scalable business solutions.
        </p>
      </motion.div>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        id="hero-actions"
        className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full sm:w-auto"
      >
        <a
          href="#projects"
          onClick={handleScrollToProjects}
          id="hero-btn-projects"
          className="w-full sm:w-auto bg-[#c3c0ff] text-[#1d00a5] font-semibold text-xs tracking-widest uppercase px-8 py-4 rounded-full hover:shadow-[0_0_25px_rgba(195,192,255,0.45)] transform hover:scale-103 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
        >
          View Projects <ArrowRight size={14} />
        </a>
        <a
          href={portfolioData.cvUrl}
          download="Nasywa Raihanah_DS-ML-AI Engineer.pdf"
          id="hero-btn-cv"
          className="w-full sm:w-auto border border-[#c3c0ff]/60 text-[#c3c0ff] hover:bg-[#c3c0ff]/10 font-semibold text-xs tracking-widest uppercase px-8 py-4 rounded-full transform hover:scale-103 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
        >
          Download CV <Download size={14} />
        </a>
      </motion.div>
    </section>
  );
}
