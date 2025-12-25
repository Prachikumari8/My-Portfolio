
import React from 'react';

const techs = [
  'JAVA', 'SPRING BOOT', 'MYSQL', 'REACT', 'NEXT.JS', 'DOCKER', 'NODE.JS', 'TAILWIND', 'AWS', 'POSTGRES', 'REDIS', 'MONGODB', 'TYPESCRIPT'
];

const TechStack: React.FC = () => {
  return (
    <section className="py-12 md:py-14 overflow-hidden border-t border-b border-black/5 dark:border-white/5 bg-white dark:bg-onyx transition-colors duration-500">
      <div className="marquee-wrapper">
        <div className="marquee-content">
          {techs.map((tech, i) => (
            <span key={`t1-${i}`} className="text-2xl lg:text-5xl font-black tracking-tighter text-slate-100 dark:text-white/5 hover:text-accent dark:hover:text-accent transition-all duration-700 cursor-default select-none px-8">
              {tech}
            </span>
          ))}
        </div>
        <div className="marquee-content" aria-hidden="true">
          {techs.map((tech, i) => (
            <span key={`t2-${i}`} className="text-2xl lg:text-5xl font-black tracking-tighter text-slate-100 dark:text-white/5 hover:text-accent dark:hover:text-accent transition-all duration-700 cursor-default select-none px-8">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
