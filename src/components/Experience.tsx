import React from 'react';
import { motion } from 'motion/react';
import { experiences } from '../data';
import { Calendar, Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section 
      id="experience" 
      className="px-6 max-w-4xl mx-auto py-24 scroll-mt-20"
    >
      {/* Title with vertical accent bar */}
      <motion.h2 
        initial={{ opacity: 0, x: -15 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        id="experience-heading"
        className="font-sans text-2xl sm:text-3xl font-semibold mb-12 border-l-4 border-[#c3c0ff] pl-4 text-white"
      >
        Work Experience
      </motion.h2>

      {/* Timeline flow */}
      <div id="experience-timeline" className="relative pl-8 md:pl-12 border-l-2 border-white/10 space-y-12 ml-4">
        {experiences.map((exp, index) => (
          <motion.div 
            key={exp.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            id={`experience-node-${exp.id}`}
            className="relative"
          >
            {/* Glowing Timeline Node Dot */}
            <div className="absolute -left-[45px] md:-left-[53px] top-1.5 w-6 h-6 rounded-full bg-[#c3c0ff] shadow-[0_0_15px_#c3c0ff] border-4 border-[#0b1326] flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1d00a5]"></span>
            </div>

            {/* Glass Card content */}
            <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 hover:border-[#c3c0ff]/30 transition-all duration-350">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-3">
                <div>
                  <h3 className="font-sans text-xl font-bold text-[#c3c0ff] tracking-tight">
                    {exp.company}
                  </h3>
                  <div className="text-[#dae2fd] text-sm font-semibold flex items-center gap-1.5 mt-1">
                    <Briefcase size={14} className="text-[#ffb695]" />
                    {exp.role}
                  </div>
                </div>

                {/* Period Badge */}
                <span className="inline-flex items-center gap-1.5 text-xs text-[#c7c4d8] bg-white/5 px-4 py-1.5 rounded-full border border-white/5 font-mono">
                  <Calendar size={12} className="text-[#c3c0ff]" />
                  {exp.period}
                </span>
              </div>

              {/* Accomplishments Bullet Points */}
              <ul className="space-y-3.5 text-[#c7c4d8] text-sm sm:text-base leading-relaxed">
                {exp.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start">
                    <span className="text-[#c3c0ff] mr-3 mt-1.5 select-none text-xs">◆</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
