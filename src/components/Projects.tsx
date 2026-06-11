import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { projects } from '../data';
import { Project } from '../types';
import { ExternalLink, X, Github, Code } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section 
      id="projects" 
      className="px-6 max-w-6xl mx-auto py-24 scroll-mt-20"
    >
      {/* Header Container */}
      <div id="projects-header" className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-sans text-2xl sm:text-3xl font-semibold mb-2 text-white"
          >
            Featured <span className="bg-gradient-to-r from-[#c3c0ff] to-[#ffb695] bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#c7c4d8] text-sm sm:text-base"
          >
            Turning mathematical theories into functional software.
          </motion.p>
        </div>
        
        {/* Link Label */}
        <motion.div 
          initial={{ opacity: 0, x: 15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs sm:text-sm font-mono text-[#c3c0ff] hover:underline cursor-pointer flex items-center gap-1"
          onClick={() => window.open('https://github.com/nasyw4', '_blank')}
        >
          View All Research • GitHub
        </motion.div>
      </div>

      {/* Grid of Projects */}
      <div id="projects-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj, index) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            onClick={() => setSelectedProject(proj)}
            id={`project-card-${proj.id}`}
            className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden group hover:border-[#c3c0ff]/40 hover:-translate-y-2 hover:shadow-[0_10px_35px_rgba(195,192,255,0.12)] transition-all duration-350 cursor-pointer flex flex-col h-full"
          >
            {/* Project Image */}
            <div className="relative overflow-hidden h-48 w-full select-none bg-slate-900">
              {proj.status && (
                <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-[#0b1326]/85 backdrop-blur-md border border-white/10 flex items-center gap-1.5 shadow-lg">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffb695] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#ffb695]"></span>
                  </span>
                  <span className="text-[9px] font-mono font-bold tracking-widest text-[#dae2fd] uppercase">
                    {proj.status}
                  </span>
                </div>
              )}
              <img 
                src={proj.image} 
                alt={proj.title} 
                referrerPolicy="no-referrer"
                id={`project-thumb-${proj.id}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1326] via-transparent to-transparent opacity-80"></div>
            </div>

            {/* Project Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="font-sans text-lg font-bold text-white mb-2 group-hover:text-[#c3c0ff] transition-colors">
                {proj.title}
              </h3>
              <p className="text-[#c7c4d8] text-xs sm:text-sm mb-6 flex-grow line-clamp-3">
                {proj.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded bg-[#c3c0ff]/10 border border-[#c3c0ff]/5 text-[#c3c0ff]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modern interactive inspection modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop filter blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-[#060e20]/80 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="relative w-full max-w-2xl bg-[#0b1326] border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[90vh]"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={16} />
              </button>

              {/* Banner Image */}
              <div className="relative h-60 sm:h-72 w-full bg-slate-950">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1326] via-transparent to-transparent"></div>
              </div>

              {/* Scrollable details */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {selectedProject.title}
                    </h3>
                    {selectedProject.status && (
                      <span className="px-2.5 py-0.5 rounded-full bg-[#ffb695]/10 border border-[#ffb695]/20 text-[#ffb695] font-mono text-[10px] font-semibold uppercase tracking-wider">
                        {selectedProject.status}
                      </span>
                    )}
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] sm:text-xs font-mono px-3 py-0.5 rounded bg-[#c3c0ff]/10 border border-[#c3c0ff]/5 text-[#c3c0ff]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-[#dae2fd] mb-2 font-mono">
                    Overview
                  </h4>
                  <p className="text-[#c7c4d8] text-sm sm:text-base leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {(selectedProject.githubUrl || selectedProject.demoUrl) && (
                  <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/5">
                    {selectedProject.githubUrl && (
                      <button 
                        onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                        className="flex-1 py-3 px-5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#c3c0ff]/30 text-white font-mono text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                      >
                        <Github size={14} /> View Sources
                      </button>
                    )}
                    {selectedProject.demoUrl && (
                      <button 
                        onClick={() => window.open(selectedProject.demoUrl, '_blank')}
                        className="flex-1 py-3 px-5 rounded-xl bg-[#c3c0ff] hover:bg-[#c3c0ff]/90 text-[#1d00a5] font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
                      >
                        <ExternalLink size={14} /> {selectedProject.status === "IEEE Published" ? "View Paper" : "Full Demo"}
                      </button>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
