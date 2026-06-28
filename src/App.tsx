import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Yantras from './components/Yantras';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useLanguage } from './LanguageContext';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const { language } = useLanguage();

  useEffect(() => {
    const formattedTitle = language === 'te'
      ? 'శ్రీ ఆస్ట్రోపరాశర | ఎమ్. చంద్ర మోహన్ సిద్ధాంతి'
      : 'Sri AstroParashara | M. Chandra Mohan Siddhanthi';
    document.title = formattedTitle;
  }, [language]);

  return (
    <div className={`min-h-screen bg-cosmic-950 text-slate-100 flex flex-col selection:bg-gold-500/30 selection:text-gold-200 ${language === 'te' ? 'lang-te' : 'lang-en'}`}>
      
      {/* Sticky Header Navigation */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Structured Single-Page Layout */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Yantras />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
