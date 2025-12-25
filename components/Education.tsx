import React from 'react';
import { GraduationCap, MapPin, BookOpen, Microscope } from 'lucide-react';

const educationData = [
  {
    title: 'B.TECH COMPUTER SCIENCE',
    location: 'KL University, AP',
    status: '3rd Year Student',
    period: '2023 - 2027',
    highlights: ['DBMS', 'Operating Systems', 'Data Structures'],
    icon: <GraduationCap className="w-5 h-5" />,
    description: 'Focusing on distributed systems and software architecture. Actively engaged in development clubs and technical research.',
    delay: 'delay-100'
  },
  {
    title: 'HIGHER SECONDARY (XII)',
    location: 'Sahu Jain School, Bihar',
    status: 'PCM Stream',
    period: '2020 — 2022',
    highlights: ['Mathematics', 'Physics', 'Logic'],
    icon: <Microscope className="w-5 h-5" />,
    description: 'Secured high honors in the Science stream, developing a solid analytical foundation for engineering studies.',
    delay: 'delay-200'
  },
  {
    title: 'SECONDARY SCHOOL (X)',
    location: 'Doon Sr Sec School, Bihar',
    status: 'General Education',
    period: '2018 — 2020',
    highlights: ['Foundations', 'Computers'],
    icon: <BookOpen className="w-5 h-5" />,
    description: 'Discovered passion for computer science through early exposure to programming and algorithmic logic.',
    delay: 'delay-300'
  }
];

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto bg-white dark:bg-onyx border-t border-black/5 dark:border-white/5 transition-colors duration-500">
      <div className="mb-14 md:mb-20 reveal reveal-slide-left">
        <div className="text-[8.5px] font-black uppercase tracking-[0.5em] text-accent mb-5 block">ACADEMIC_LOG</div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.9] font-black tracking-tighter text-slate-900 dark:text-white uppercase whitespace-normal break-words">
          LEARNING<br/>
          <span className="text-slate-200 dark:text-gray-700">JOURNEY.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {educationData.map((item, index) => (
          <div 
            key={index} 
            className={`group p-8 lg:p-10 rounded-[2.5rem] bg-slate-50 dark:bg-surface border border-black/5 dark:border-white/5 hover:border-accent/30 transition-all duration-700 ease-expo flex flex-col h-full reveal reveal-slide-up ${item.delay} shadow-sm hover:shadow-xl`}
          >
            <div className="w-12 lg:w-14 h-12 lg:h-14 rounded-2xl bg-white dark:bg-white/5 flex items-center justify-center mb-8 border border-black/5 dark:border-white/5 group-hover:bg-accent group-hover:text-white transition-all shadow-sm">
              {item.icon}
            </div>

            <div className="flex-1">
              <h3 className="text-xl lg:text-2xl font-black mb-3 text-slate-900 dark:text-white uppercase leading-tight tracking-tight">
                {item.title}
              </h3>
              
              <div className="flex items-center gap-2 text-accent text-[9px] font-black uppercase tracking-widest mb-6">
                <MapPin className="w-3.5 h-3.5" />
                <span className="truncate">{item.location}</span>
              </div>

              <p className="text-slate-500 dark:text-gray-400 mb-10 text-sm sm:text-base font-medium leading-relaxed group-hover:text-slate-700 dark:group-hover:text-gray-400 transition-colors">
                {item.description}
              </p>
            </div>

            <div className="pt-8 border-t border-black/5 dark:border-white/5">
              <div className="text-[8px] font-black uppercase tracking-[0.3em] text-slate-400 dark:text-gray-600 mb-4 group-hover:text-accent transition-colors">SPEC_FOCUS</div>
              <div className="flex flex-wrap gap-2">
                {item.highlights.map((highlight, idx) => (
                  <span 
                    key={idx} 
                    className="text-[8px] font-black px-3.5 py-1.5 rounded-xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/5 text-slate-400 dark:text-gray-500 uppercase tracking-widest group-hover:text-slate-900 dark:group-hover:text-white group-hover:bg-accent/20 transition-all"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;