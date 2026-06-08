/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import NeuralNetworkBackground from './components/NeuralNetworkBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0b1326] text-[#dae2fd] overflow-x-hidden selection:bg-[#c3c0ff]/30 selection:text-white">
      {/* Dynamic Background */}
      <NeuralNetworkBackground />

      {/* Navigation */}
      <Header />

      {/* Main Container */}
      <main className="relative">
        {/* Intro */}
        <Hero />

        {/* Bio Narrative */}
        <About />

        {/* Technical Arsenal / Competencies */}
        <Skills />

        {/* Professional Accomplishments */}
        <Experience />

        {/* Featured Projects with Modals */}
        <Projects />

        {/* Project Contact form */}
        <Contact />
      </main>

      {/* Footer copyright and outbound hooks */}
      <Footer />
    </div>
  );
}

