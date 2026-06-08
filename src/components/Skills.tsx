import React from 'react';
import { motion } from 'motion/react';
import { Brain, Code2, Layers, Database } from 'lucide-react';
import { skillGroups } from '../data';

// Map icon strings to Lucide icon components
const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Brain,
  Code2,
  Layers,
  Database
};

export default function Skills() {
  return (
    <section 
      id="skills" 
      className="px-6 max-w-6xl mx-auto py-24 scroll-mt-20"
    >
      {/* Heading */}
      <div id="skills-heading-container" className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-sans text-2xl sm:text-3xl font-semibold mb-3 text-white"
        >
          Technical <span className="text-[#c3c0ff]">Arsenal</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[#c7c4d8] text-sm sm:text-base max-w-xl mx-auto"
        >
          My toolkit for building the future of intelligence.
        </motion.p>
      </div>

      {/* Grid of skill categories */}
      <div id="skills-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillGroups.map((group, index) => {
          const IconComp = iconMap[group.icon] || Brain;
          
          return (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              id={`skill-card-${group.id}`}
              className={`relative bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-6 overflow-hidden group transition-all duration-350 cursor-default ${group.borderColorClass} hover:-translate-y-2`}
            >
              {/* Highlight gradient line on top */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${group.gradientClass} opacity-50`}></div>

              {/* Icon Container */}
              <div 
                id={`skill-icon-${group.id}`}
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center mb-6 text-[#c3c0ff] group-hover:text-white transition-colors"
              >
                <IconComp size={24} className="transition-transform group-hover:scale-110 duration-300" />
              </div>

              {/* Title */}
              <h3 className="font-sans text-lg font-semibold text-white mb-4">
                {group.name}
              </h3>

              {/* Tags */}
              <div id={`skill-tags-${group.id}`} className="flex flex-wrap gap-2">
                {group.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[#c7c4d8] group-hover:border-white/10 group-hover:text-white font-mono text-xs transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
