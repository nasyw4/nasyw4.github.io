import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Linkedin, Send, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    
    // Simulate API pipeline transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      
      // Auto dismiss message badge after some seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section 
      id="contact" 
      className="px-6 max-w-6xl mx-auto py-24 scroll-mt-20 mb-12"
    >
      <div 
        id="contact-wrapper"
        className="glass-card bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 lg:p-16 grid md:grid-cols-2 gap-12 items-center overflow-hidden relative"
      >
        {/* Glow node */}
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#c3c0ff]/20 blur-3xl rounded-full pointer-events-none"></div>

        {/* Left narrative content */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-sans text-3xl sm:text-4xl font-semibold mb-3 text-white leading-tight">
            Let's Build the <span className="text-[#c3c0ff]">Next Big Thing</span>
          </h2>
          <p className="text-[#c7c4d8] text-sm sm:text-base mb-10 max-w-md leading-relaxed">
            I am currently looking for full-time opportunities or research collaborations in the AI space.
          </p>

          <div id="contact-infos" className="space-y-6">
            {/* Email item */}
            <a 
              href={`mailto:${portfolioData.email}`}
              className="flex items-center gap-4 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#c3c0ff]/20 group-hover:border-[#c3c0ff]/30 transition-all">
                <Mail size={18} className="text-[#c3c0ff]" />
              </div>
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-[#c7c4d8]">Email Me</div>
                <div className="font-sans text-sm sm:text-base text-white hover:text-[#c3c0ff] transition-colors">{portfolioData.email}</div>
              </div>
            </a>

            {/* LinkedIn item */}
            <a 
              href={`https://${portfolioData.linkedin}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#c3c0ff]/20 group-hover:border-[#c3c0ff]/30 transition-all">
                <Linkedin size={18} className="text-[#c3c0ff]" />
              </div>
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-[#c7c4d8]">LinkedIn</div>
                <div className="font-sans text-sm sm:text-base text-white hover:text-[#c3c0ff] transition-colors">{portfolioData.linkedin}</div>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Right Form container */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          {/* Form component */}
          <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input 
                type="text"
                name="name"
                value={formState.name}
                onChange={handleInputChange}
                required
                placeholder="NAME"
                className="bg-white/5 border border-white/10 text-white rounded-xl focus:ring-2 focus:ring-[#c3c0ff]/50 focus:border-[#c3c0ff] w-full p-4 font-mono text-xs placeholder-[#c7c4d8]/40 focus:outline-none transition-all"
              />
              <input 
                type="email"
                name="email"
                value={formState.email}
                onChange={handleInputChange}
                required
                placeholder="EMAIL"
                className="bg-white/5 border border-white/10 text-white rounded-xl focus:ring-2 focus:ring-[#c3c0ff]/50 focus:border-[#c3c0ff] w-full p-4 font-mono text-xs placeholder-[#c7c4d8]/40 focus:outline-none transition-all"
              />
            </div>
            
            <textarea 
              name="message"
              value={formState.message}
              onChange={handleInputChange}
              required
              placeholder="MESSAGE"
              rows={4}
              className="bg-white/5 border border-white/10 text-white rounded-xl focus:ring-2 focus:ring-[#c3c0ff]/50 focus:border-[#c3c0ff] w-full p-4 font-mono text-xs placeholder-[#c7c4d8]/40 focus:outline-none transition-all resize-none"
            ></textarea>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-[#c3c0ff] text-[#1d00a5] rounded-xl font-mono text-xs font-bold uppercase tracking-widest hover:shadow-[0_0_20px_rgba(195,192,255,0.4)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <span>Transmitting...</span>
              ) : (
                <>
                  <span>Send Transmission</span>
                  <Send size={12} />
                </>
              )}
            </button>
          </form>

          {/* Inline alert notifications box */}
          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="absolute inset-0 z-20 flex items-center justify-center bg-[#0b1326]/90 rounded-2xl p-6 text-center"
              >
                <div className="flex flex-col items-center gap-3">
                  <CheckCircle size={44} className="text-[#a7f3d0]" />
                  <h3 className="text-base sm:text-lg font-bold text-white">Transmission Received</h3>
                  <p className="text-xs sm:text-sm text-[#c7c4d8] max-w-xs">
                    Your message has been secure-ly sent. Nasywa will get back to you shortly!
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-xs text-[#c3c0ff] hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
