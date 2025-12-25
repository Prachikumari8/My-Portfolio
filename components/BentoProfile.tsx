import React from 'react';
import { GraduationCap, Code, Trophy, MapPin, Github, Linkedin, Binary, User } from 'lucide-react';

const BentoProfile: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-20 xl:py-24 px-6 max-w-[1200px] xl:max-w-7xl mx-auto bg-white dark:bg-onyx scroll-mt-24">
      <div className="mb-8 md:mb-10 xl:mb-14 reveal reveal-slide-left">
        <div className="text-[8.5px] font-black tracking-[0.5em] text-accent mb-3 xl:mb-4 uppercase flex items-center gap-2.5">
          <Binary className="w-3.5 h-3.5" /> IDENTITY_CORE
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-6xl font-black tracking-tighter uppercase leading-[1] text-slate-900 dark:text-white whitespace-normal">
          THE <span className="text-slate-200 dark:text-gray-700">PROFILE</span> MODULE.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-6">
        
        {/* Main Bio - Large */}
        <div className="md:col-span-2 lg:col-span-2 bg-slate-50 dark:bg-surface border border-black/5 dark:border-white/5 rounded-[1.5rem] xl:rounded-[2rem] p-6 xl:p-8 flex flex-col justify-start reveal reveal-zoom delay-100 group relative overflow-hidden transition-all duration-300 hover:shadow-lg min-h-[400px] xl:min-h-[450px]">
          <div className="absolute top-0 right-0 w-32 xl:w-48 h-32 xl:h-48 bg-accent/5 dark:bg-accent/10 blur-[40px] xl:blur-[60px] rounded-full -translate-y-1/2 translate-x-1/2 transition-transform duration-700"></div>
          
          <div className="flex justify-between items-start relative z-10">
             <div className="w-9 h-9 xl:w-10 xl:h-10 bg-white dark:bg-white/5 rounded-xl xl:rounded-2xl flex items-center justify-center border border-black/5 dark:border-white/10 group-hover:bg-accent group-hover:text-white transition-all shadow-sm">
               <Code className="w-4.5 h-4.5 xl:w-5 xl:h-5" />
             </div>
             <div className="px-2 py-0.5 xl:px-2.5 xl:py-1 bg-accent/10 text-accent rounded-full text-[7.5px] xl:text-[8px] font-black tracking-widest border border-accent/20 uppercase transition-all duration-300">ENG_MODE_ACTIVE</div>
          </div>

          <div className="mt-4 xl:mt-5 relative z-10 space-y-4 xl:space-y-6">
            <h3 className="text-xl md:text-2xl xl:text-3xl font-black tracking-tight uppercase text-slate-900 dark:text-white leading-none">
              About <br/> <span className="text-accent group-hover:tracking-widest transition-all duration-500">the dev.</span>
            </h3>
            
            <div className="space-y-3 xl:space-y-4">
              <p className="text-slate-700 dark:text-gray-300 font-medium leading-relaxed text-[13px] sm:text-sm xl:text-[17px] transition-colors duration-300 group-hover:text-slate-900 dark:group-hover:text-white max-w-2xl">
                I am <span className="text-slate-900 dark:text-white font-bold">Prachi Kumari</span>, a Computer Science student with a strong interest in building <span className="text-accent">practical, real-world software solutions</span>. I enjoy transforming ideas into well-structured applications by focusing on clean code, thoughtful design, and efficient problem-solving.
              </p>
              <p className="text-slate-500 dark:text-gray-500 font-medium leading-relaxed text-[12px] sm:text-[13px] xl:text-base transition-colors duration-300 group-hover:text-slate-700 dark:group-hover:text-gray-400 max-w-2xl">
                My learning journey is centered around strengthening core CS fundamentals, practicing <span className="text-slate-800 dark:text-gray-200 font-semibold">data structures and algorithms</span>, and developing <span className="text-accent/80 font-semibold">full-stack projects</span> that reflect real use cases. I believe consistency, clarity, and attention to detail are key to writing software that scales and lasts.
              </p>
              <p className="text-slate-500 dark:text-gray-500 font-medium leading-relaxed text-[12px] sm:text-[13px] xl:text-base transition-colors duration-300 group-hover:text-slate-700 dark:group-hover:text-gray-400 max-w-2xl">
                I am eager to work in environments where learning, collaboration, and technical growth are valued. I’m actively seeking opportunities where I can contribute my skills, learn from experienced engineers, and continue growing as a <span className="text-slate-900 dark:text-white font-semibold">software developer</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Profile Photo - Square */}
        <div className="md:col-span-1 lg:col-span-1 bg-white dark:bg-surface rounded-[1.5rem] xl:rounded-[2rem] p-3 flex flex-col justify-center items-center reveal reveal-zoom delay-200 group relative overflow-hidden border border-black/5 dark:border-accent/20 hover:border-accent transition-all duration-500 min-h-[260px] xl:min-h-[300px] shadow-sm hover:shadow-xl hover:shadow-accent/5">
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div className="relative z-10 w-full h-full overflow-hidden rounded-[1.25rem] xl:rounded-[1.75rem] border border-black/5 dark:border-white/5">
            <img 
              src="/photos/profile.jpeg" 
              alt="Prachi Kumari" 
              className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
            />
            {/* Status Indicator */}
            <div className="absolute bottom-3 left-3 px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-full border border-white/10 flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-[7.5px] xl:text-[8px] font-black text-white tracking-widest uppercase">AVAILABLE_FOR_HIRE</span>
            </div>
          </div>
        </div>

        {/* DSA Progress */}
        <div className="md:col-span-1 lg:col-span-1 bg-slate-50 dark:bg-surface rounded-[1.5rem] xl:rounded-[2rem] p-6 xl:p-8 border border-black/5 dark:border-white/5 reveal reveal-zoom delay-300 group relative overflow-hidden transition-all duration-300 hover:bg-slate-100 dark:hover:bg-accent/5 hover:border-accent/40 flex flex-col justify-center min-h-[160px] xl:min-h-[200px]">
          <div className="flex items-center gap-2.5 mb-3 xl:mb-4">
            <div className="p-2 bg-white dark:bg-white/5 rounded-xl border border-black/5 dark:border-white/10 group-hover:text-amber-500 transition-colors">
              <Trophy className="w-3.5 h-3.5 xl:w-4 xl:h-4 group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <span className="text-[7.5px] xl:text-[9px] font-black uppercase tracking-widest text-slate-400 dark:text-gray-500">ALGO_STREAK</span>
          </div>
          <div className="text-2xl xl:text-4xl font-black text-slate-900 dark:text-white mb-1.5 group-hover:text-accent transition-colors">300+</div>
          <p className="text-[8.5px] xl:text-[10px] font-bold text-slate-400 dark:text-gray-600 uppercase tracking-widest leading-tight">Solved challenges across platforms.</p>
        </div>

        {/* Social Bridge */}
        <div className="md:col-span-1 lg:col-span-1 bg-slate-50 dark:bg-surface rounded-[1.5rem] xl:rounded-[2rem] p-6 xl:p-8 border border-black/5 dark:border-white/5 reveal reveal-slide-up delay-400 flex flex-col justify-between group transition-all duration-300 hover:bg-slate-100 dark:hover:bg-accent/5 hover:border-accent/40 flex flex-col min-h-[160px] xl:min-h-[200px]">
           <div className="flex justify-between items-center">
             <div className="p-2 bg-white dark:bg-white/5 rounded-xl border border-black/5 dark:border-white/10">
              <MapPin className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-accent" />
             </div>
             <div className="flex gap-2 relative z-20">
               <a href="https://github.com/Prachikumari8" target="_blank" className="p-2 bg-white dark:bg-white/5 rounded-xl hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition-all shadow-sm"><Github className="w-3.5 h-3.5 xl:w-4 xl:h-4" /></a>
               <a href="https://www.linkedin.com/in/prachi-kumari-31213b344" target="_blank" className="p-2 bg-white dark:bg-white/5 rounded-xl hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition-all shadow-sm"><Linkedin className="w-3.5 h-3.5 xl:w-4 xl:h-4" /></a>
             </div>
           </div>
           <div>
             <div className="text-[8px] xl:text-[9px] font-black text-slate-400 dark:text-gray-500 uppercase tracking-widest mb-0.5">LOCATION</div>
             <div className="text-lg xl:text-xl font-black text-slate-900 dark:text-white tracking-tight">Vijayawada, India</div>
             <div className="w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-700 mt-1"></div>
           </div>
        </div>

        {/* Academic Anchor */}
        <div className="md:col-span-1 lg:col-span-1 bg-slate-50 dark:bg-surface border border-black/5 dark:border-white/5 rounded-[1.5rem] xl:rounded-[2rem] p-6 xl:p-8 flex flex-col justify-between reveal reveal-slide-up delay-500 group relative overflow-hidden transition-all duration-300 hover:bg-slate-100 min-h-[160px] xl:min-h-[200px]">
          <div className="p-2 bg-white dark:bg-white/5 rounded-xl border border-black/5 dark:border-white/10 w-fit">
            <GraduationCap className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-purple-400 transition-transform duration-300" />
          </div>
          <div>
            <div className="text-[7.5px] xl:text-[8px] font-black text-purple-600 dark:text-purple-400 mb-0.5 uppercase tracking-[0.2em]">KLU // UNIVERSE</div>
            <h4 className="text-base xl:text-lg font-black text-slate-900 dark:text-white uppercase leading-none tracking-tighter">Computer Science</h4>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-[8.5px] xl:text-[9px] font-bold text-slate-400 dark:text-gray-600 tracking-[0.1em] uppercase">2023 - 2027</span>
              <div className="w-2.5 xl:w-3 h-[1px] bg-slate-200 dark:bg-white/10 group-hover:w-5 transition-all duration-500"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BentoProfile;