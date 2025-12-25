
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 md:py-12 px-6 bg-white dark:bg-onyx border-t border-black/5 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10">
        <div className="flex items-center gap-2.5 text-[8.5px] md:text-[9.5px] font-black tracking-[0.2em] md:tracking-[0.3em] text-slate-400 dark:text-gray-500 uppercase text-center md:text-left">
          <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse shrink-0"></div>
          © 2025 PRACHI KUMARI. ALL SYSTEMS OPERATIONAL.
        </div>
        <div className="flex gap-5 md:gap-8">
          {[
            { name: 'GITHUB', url: 'https://github.com/Prachikumari8' },
            { name: 'LINKEDIN', url: 'https://www.linkedin.com/in/prachi-kumari-31213b344' },
            { name: 'RESUME', url: '/resume.pdf' }
          ].map((link, i) => (
            <a 
              key={i} 
              href={link.url} 
              target="_blank" 
              className="text-[8.5px] md:text-[9.5px] font-black tracking-[0.2em] md:tracking-[0.3em] text-slate-400 dark:text-gray-600 hover:text-accent transition-all uppercase"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="text-[7.5px] md:text-[8.5px] font-bold text-slate-300 dark:text-gray-700 uppercase tracking-widest text-center">
          V1.2 // BUILT_WITH_PRECISION
        </div>
      </div>
    </footer>
  );
};

export default Footer;
