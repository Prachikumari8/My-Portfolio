import React from 'react';
import { Calendar, Briefcase, ChevronRight, Zap, Code2, Cpu } from 'lucide-react';

const history = [
  {
    type: 'DEVELOPMENT_TRACK',
    title: 'Full-Stack Projects',
    org: 'VARIOUS PLATFORMS',
    period: '2023 — PRESENT',
    desc: 'Building performance-optimized web apps using React and Java. Focused on clean architecture.',
    delay: 'delay-100',
    icon: <Code2 className="w-5 h-5" />
  },
  {
    type: 'LOGIC_ENGINEERING',
    title: 'Competitive Coding',
    org: 'LEETCODE / HACKERRANK',
    period: '2022 — PRESENT',
    desc: '300+ challenges solved. Expert in algorithmic efficiency and data structures.',
    delay: 'delay-300',
    icon: <Cpu className="w-5 h-5" />
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-12 md:py-16 px-6 md:px-12 max-w-[1100px] xl:max-w-6xl mx-auto bg-white dark:bg-onyx border-t border-black/5 dark:border-white/5 transition-colors duration-500">
       <div className="flex flex-col md:flex-row justify-between md:items-end gap-5 xl:gap-8 mb-10 md:mb-12 reveal reveal-slide-left">
          <div className="max-w-xl xl:max-w-2xl">
            <div className="text-[8px] font-black uppercase tracking-[0.5em] text-accent mb-3 xl:mb-4 block">HISTORY_LOG</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[42px] xl:text-5xl font-black tracking-tighter leading-[0.9] text-slate-900 dark:text-white uppercase whitespace-normal break-words">
               SKILLS <br/><span className="text-slate-200 dark:text-gray-700">& GROWTH.</span>
            </h2>
          </div>
          <p className="text-slate-500 dark:text-gray-500 max-w-xs text-[12px] xl:text-sm font-medium leading-relaxed">
            Continuous evolution through hands-on development and problem-solving.
          </p>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {history.map((item, i) => (
             <div key={i} className={`p-5 xl:p-7 rounded-[1.25rem] xl:rounded-[1.75rem] bg-slate-50 dark:bg-surface border border-black/5 dark:border-white/5 hover:border-accent/30 transition-all duration-700 ease-expo group relative overflow-hidden reveal reveal-slide-up ${item.delay} shadow-sm hover:shadow-lg flex flex-col h-full`}>
                <div className="absolute top-0 left-0 w-1 bg-accent h-0 group-hover:h-full transition-all duration-500"></div>
                <div className="flex items-center gap-3 xl:gap-4 mb-4 xl:mb-6">
                   <div className="w-10 h-10 xl:w-11 xl:h-11 rounded-xl xl:rounded-xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/5 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all shadow-sm">
                      {item.icon}
                   </div>
                   <div className="text-[7.5px] xl:text-[8px] font-black uppercase tracking-widest text-accent/50">{item.type}</div>
                </div>
                <div className="flex-1 flex flex-col">
                  <h3 className="text-lg xl:text-xl font-black mb-1 text-slate-900 dark:text-white uppercase leading-tight tracking-tight">{item.title}</h3>
                  <div className="text-sm xl:text-base text-slate-400 dark:text-gray-500 font-bold mb-4 xl:mb-5">{item.org}</div>
                  <div className="inline-flex w-fit items-center gap-2 text-[7.5px] xl:text-[8px] font-black text-white uppercase tracking-widest bg-accent px-3 py-1.5 xl:px-4 xl:py-1.5 rounded-full mb-5 xl:mb-6 shadow-md">
                     <Calendar className="w-3 h-3" /> {item.period}
                  </div>
                  <p className="text-slate-500 dark:text-gray-400 text-[12px] xl:text-[14px] leading-relaxed font-medium transition-colors">{item.desc}</p>
                </div>
             </div>
          ))}
          
          <div className="p-6 xl:p-8 rounded-[1.25rem] xl:rounded-[1.75rem] border-2 border-dashed border-black/5 dark:border-white/5 flex flex-col items-center justify-center text-center group hover:border-accent hover:bg-slate-50 transition-all duration-700 min-h-[220px] xl:min-h-[250px] md:col-span-2 lg:col-span-1">
             <div className="w-10 h-10 xl:w-12 xl:h-12 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center mb-3 xl:mb-4 group-hover:bg-accent transition-all duration-700">
                <Zap className="w-4 xl:w-5 h-4 xl:w-5 text-slate-300 dark:text-gray-700 group-hover:text-white transition-all" />
             </div>
             <h3 className="text-base xl:text-lg font-black text-slate-300 dark:text-gray-700 group-hover:text-slate-900 dark:group-hover:text-white transition-all uppercase">Future Role?</h3>
             <p className="text-slate-400 dark:text-gray-600 text-[11px] xl:text-[12px] mt-2 xl:mt-3 transition-all font-medium max-w-[160px] xl:max-w-[180px]">Interested in internship opportunities for 2025.</p>
          </div>
       </div>
    </section>
  );
};

export default Experience;