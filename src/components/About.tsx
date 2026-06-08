import React from 'react';
import { motion } from 'motion/react';
import { portfolioData, stats } from '../data';

export default function About() {
  return (
    <section 
      id="about" 
      className="px-6 max-w-6xl mx-auto py-24 scroll-mt-20"
    >
      <div id="about-container" className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Profile Image Column */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          id="about-image-wrapper"
          className="relative group"
        >
          {/* Ambient Glow */}
          <div className="absolute inset-0 bg-[#c3c0ff]/20 blur-3xl rounded-full opacity-30 group-hover:opacity-45 transition-opacity duration-700"></div>
          
          <img 
            src={portfolioData.profileImage}
            alt={portfolioData.name}
            referrerPolicy="no-referrer"
            id="about-profile-img"
            className="relative rounded-2xl border border-white/10 shadow-2xl hover:scale-[1.02] hover:border-[#c3c0ff]/30 transition-all duration-500 w-full aspect-square object-cover" 
          />
        </motion.div>

        {/* Text Story Column */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          id="about-text-card"
          className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-10 hover:border-[#c3c0ff]/30 transition-all duration-350"
        >
          <h2 className="font-sans text-2xl sm:text-3xl font-semibold mb-6 text-white leading-snug">
            Fresh Perspective, <span className="text-[#ffb695]">{portfolioData.aboutHeading.split(', ')[1] || 'Deep Tech'}</span>
          </h2>
          <p className="text-[#c7c4d8] text-sm sm:text-base mb-8 leading-relaxed">
            {portfolioData.aboutText}
          </p>

          <div id="about-stats-grid" className="grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-xl bg-white/[0.04] border border-white/5 hover:border-white/10 transition-colors"
              >
                <div className="text-[#c3c0ff] text-2xl sm:text-3xl font-sans font-bold mb-1">
                  {stat.value}
                </div>
                <div className="text-[#c7c4d8] text-xs uppercase tracking-wider font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
