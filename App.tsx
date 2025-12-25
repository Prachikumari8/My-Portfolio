import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import BentoProfile from './components/BentoProfile';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Services';
import Work from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AllProjectsPage from './components/AllProjectsPage';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const scroll = () => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

      // Slight delay to ensure the target page has rendered
      const timeoutId = setTimeout(scroll, 150);
      return () => clearTimeout(timeoutId);
    }
  }, [pathname, hash]);

  return null;
};

const SectionDivider = () => (
  <div className="w-full bg-white dark:bg-onyx overflow-hidden transition-colors duration-500">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-slate-200 dark:via-white/5 to-transparent"></div>
    </div>
  </div>
);

const HomePage = () => (
  <div className="flex flex-col bg-white dark:bg-onyx transition-colors duration-500">
    <Hero />
    <TechStack />
    <SectionDivider />
    <BentoProfile />
    <SectionDivider />
    <Skills />
    <SectionDivider />
    <Work />
    <SectionDivider />
    <Education />
    <SectionDivider />
    <Experience />
    <SectionDivider />
    <Contact />
  </div>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen text-slate-900 dark:text-white bg-white dark:bg-onyx selection:bg-accent selection:text-white relative flex flex-col font-sans overflow-x-hidden transition-colors duration-500">
        <ScrollToTop />
        <Navbar />
        <main className="relative z-0 flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<AllProjectsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;