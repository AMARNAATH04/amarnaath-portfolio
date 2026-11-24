import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutGrid from './components/AboutGrid';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import StatsBanner from './components/StatsBanner';
import TimelineSection from './components/TimelineSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="portfolio-app">
      {/* Top Navbar */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* 2x2 About & Story Mosaic Grid */}
        <AboutGrid />

        {/* 8-Circle Feature Skills Section */}
        <SkillsSection />

        {/* Portfolio / Projects Mosaic Showcase */}
        <ProjectsSection />

        {/* Vibrant Orange Stats Banner */}
        <StatsBanner />

        {/* Academic & Certifications Timeline */}
        <TimelineSection />

        {/* Contact Section with Cityscape */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
