import React from 'react';
import { 
  Database, 
  Layout, 
  Server, 
  Sparkles, 
  Code2, 
  Cpu, 
  Layers, 
  Globe, 
  Terminal, 
  Cloud,
  Workflow
} from 'lucide-react';

const skillCategories = [
  {
    title: 'FRONTEND ARCHITECTURE',
    icon: <Layout className="w-4.5 h-4.5 xl:w-5 xl:h-5" />,
    description: 'Specializing in reactive UIs that prioritize user experience and performance.',
    skills: [
      { name: 'React', icon: <Code2 className="w-3 h-3 xl:w-3.5 xl:h-3.5" /> },
      { name: 'Next.js', icon: <Layers className="w-3 h-3 xl:w-3.5 xl:h-3.5" /> },
      { name: 'TypeScript', icon: <Workflow className="w-3 h-3 xl:w-3.5 xl:h-3.5" /> },
      { name: 'Tailwind CSS', icon: <Sparkles className="w-3 h-3 xl:w-3.5 xl:h-3.5" /> },
      { name: 'Redux', icon: <Layers className="w-3 h-3 xl:w-3.5 xl:h-3.5" /> },
    ],
    accent: 'from-blue-500/20 to-indigo-500/20',
    borderHover: 'hover:border-blue-500/50',
    delay: 'delay-100'
  },
  {
    title: 'BACKEND ECOSYSTEM',
    icon: <Server className="w-4.5 h-4.5 xl:w-5 xl:h-5" />,
    description: 'Building robust, scalable server-side logic and secure microservices.',
    skills: [
      { name: 'Java', icon: <Cpu className="w-3 h-3 xl:w-3.5 xl:h-3.5" /> },
      { name: 'Spring Boot', icon: <Workflow className="w-3 h-3 xl:w-3.5 xl:h-3.5" /> },
      { name: 'Node.js', icon: <Terminal className="w-3 h-3 xl:w-3.5 xl:h-3.5" /> },
      { name: 'Express', icon: <Server className="w-3 h-3 xl:w-3.5 xl:h-3.5" /> },
      { name: 'REST APIs', icon: <Globe className="w-3 h-3 xl:w-3.5 xl:h-3.5" /> },
    ],
    accent: 'from-purple-500/20 to-pink-500/20',
    borderHover: 'hover:border-purple-500/50',
    delay: 'delay-300'
  },
  {
    title: 'CLOUD & INFRA',
    icon: <Database className="w-4.5 h-4.5 xl:w-5 xl:h-5" />,
    description: 'Managing relational systems and cloud-native deployments for availability.',
    skills: [
      { name: 'MySQL', icon: <Database className="w-3 h-3 xl:w-3.5 xl:h-3.5" /> },
      { name: 'PostgreSQL', icon: <Database className="w-3 h-3 xl:w-3.5 xl:h-3.5" /> },
      { name: 'Docker', icon: <Layers className="w-3 h-3 xl:w-3.5 xl:h-3.5" /> },
      { name: 'AWS', icon: <Cloud className="w-3 h-3 xl:w-3.5 xl:h-3.5" /> },
      { name: 'Git/CI-CD', icon: <Workflow className="w-3 h-3 xl:w-3.5 xl:h-3.5" /> },
    ],
    accent: 'from-emerald-500/20 to-teal-500/20',
    borderHover: 'hover:border-emerald-500/50',
    delay: 'delay-500'
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 md:py-20 xl:py-28 bg-white dark:bg-onyx px-6 relative overflow-hidden transition-colors duration-500">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-[1200px] xl:max-w-7xl mx-auto relative z-10">
        <div className="mb-10 md:mb-14 xl:mb-16 reveal reveal-slide-left">
          <div className="flex items-center gap-2.5 xl:gap-3 mb-4 xl:mb-5">
            <div className="h-[1px] w-6 xl:w-10 bg-accent"></div>
            <span className="text-[8px] xl:text-[9px] font-black tracking-[0.5em] text-accent uppercase">ABILITIES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-slate-900 dark:text-white tracking-tighter uppercase leading-[0.95] mb-4 xl:mb-6 whitespace-normal break-words">
            TECH<br/>
            <span className="text-slate-200 dark:text-gray-800">EXP_ZONE.</span>
          </h2>
          <p className="text-slate-500 dark:text-gray-500 max-w-lg text-[13px] sm:text-sm xl:text-[16px] font-medium leading-relaxed">
            A comprehensive overview of my technical arsenal, categorized by domain and specialized focus.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-6">
          {skillCategories.map((cat, i) => (
            <div 
              key={i} 
              className={`group relative bg-slate-50 dark:bg-surface rounded-[1.5rem] xl:rounded-[2rem] p-6 xl:p-9 border border-black/5 dark:border-white/5 transition-all duration-700 reveal reveal-slide-up ${cat.delay} ${cat.borderHover} hover:shadow-lg flex flex-col`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[1.5rem] xl:rounded-[2rem]`}></div>
              
              <div className="relative z-10">
                <div className="w-10 h-10 xl:w-14 xl:h-14 rounded-xl xl:rounded-2xl bg-white dark:bg-white/5 flex items-center justify-center mb-6 xl:mb-8 border border-black/5 dark:border-white/5 shadow-sm">
                  {cat.icon}
                </div>
                
                <h3 className="text-base sm:text-lg xl:text-xl font-black mb-3 xl:mb-4 uppercase tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
                  {cat.title}
                </h3>
                
                <p className="text-slate-500 dark:text-gray-500 text-[12px] sm:text-sm xl:text-[14px] leading-relaxed mb-6 xl:mb-8 font-medium group-hover:text-slate-700 dark:group-hover:text-gray-300 transition-colors">
                  {cat.description}
                </p>
                
                <div className="space-y-2.5 xl:space-y-3 mt-auto">
                  <div className="text-[7.5px] xl:text-[8px] font-black text-slate-400 dark:text-gray-600 uppercase tracking-[0.2em] mb-2 xl:mb-3">ACTIVE_STACK</div>
                  <div className="flex flex-wrap gap-1.5 xl:gap-2">
                    {cat.skills.map((skill, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-center gap-1.5 xl:gap-2 px-2.5 xl:px-3 py-1 xl:py-1.5 bg-white dark:bg-white/5 rounded-lg xl:rounded-xl border border-black/5 dark:border-white/5 hover:border-accent transition-all hover:scale-105 group/skill shadow-sm"
                      >
                        <span className="text-slate-400 dark:text-gray-500 group-hover/skill:text-accent transition-colors">
                          {skill.icon}
                        </span>
                        <span className="text-[8px] xl:text-[10px] font-bold text-slate-500 dark:text-gray-400 group-hover/skill:text-slate-900 dark:group-hover/skill:text-white transition-colors uppercase tracking-widest">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;