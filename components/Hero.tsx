import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Cpu, ChevronRight, Activity, Code2, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || window.innerWidth < 1024) return;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 2 - 1;
      const y = ((e.clientY - top) / height) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const bgX = mousePos.x * -20;
  const bgY = mousePos.y * -20;
  const cardX = mousePos.x * 12;
  const cardY = mousePos.y * 12;

  return (
    <section 
      id="home"
      ref={containerRef}
      className="relative min-h-screen pt-28 md:pt-32 lg:pt-0 pb-12 lg:pb-16 px-6 md:px-12 w-full flex flex-col justify-center overflow-hidden bg-white dark:bg-onyx select-none"
    >
      {/* Parallax Background Blobs */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none transition-transform duration-[2000ms] ease-out"
        style={{ transform: `translate(${bgX}px, ${bgY}px)` }}
      >
        <div className="absolute top-[5%] right-[10%] w-[250px] md:w-[450px] h-[250px] md:h-[450px] bg-accent/10 dark:bg-accent/10 blur-[80px] md:blur-[120px] rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-[0%] left-[5%] w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-indigo-500/5 dark:bg-indigo-500/5 blur-[70px] md:blur-[100px] rounded-full animate-float"></div>
      </div>

      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none z-[1]"></div>
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-white dark:from-onyx via-transparent to-white dark:to-onyx"></div>

      <div className="max-w-[1200px] xl:max-w-[1400px] mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            <h1 className="w-full text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black leading-[1.15] tracking-tight text-slate-900 dark:text-white uppercase mb-4 md:mb-5 xl:mb-6 whitespace-normal break-words">
              <span className={`block transition-all duration-1000 delay-100 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                TURNING IDEAS
              </span>
              <span className={`block text-slate-200 dark:text-gray-800 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                INTO REAL
              </span>
              <span className={`block text-gradient transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                WEB APPLICATIONS.
              </span>
            </h1>

            <div className={`max-w-xl xl:max-w-2xl transition-all duration-1000 delay-[800ms] transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <p className="text-[14px] sm:text-base md:text-[16px] lg:text-[16px] xl:text-[18px] leading-relaxed text-slate-500 dark:text-gray-400 font-medium mb-6 md:mb-7 xl:mb-8">
                I am <span className="text-slate-900 dark:text-white font-bold relative inline-block group cursor-default">
                  Prachi Kumari
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-accent/40 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </span>, a <span className="text-slate-900 dark:text-white font-bold">Computer Science student</span> passionate about <span className="text-accent">web development</span> and <span className="text-slate-900 dark:text-white">problem-solving</span>. I am dedicated to learning modern technologies and building efficient software solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-3.5 md:gap-5 items-center w-full sm:w-auto">
                <a 
                  href="#projects" 
                  onClick={(e) => handleScroll(e, 'projects')}
                  className="w-full sm:w-auto group relative px-8 md:px-10 py-3.5 md:py-4.5 xl:py-5 bg-slate-900 dark:bg-white text-white dark:text-black text-[9px] xl:text-[10px] font-black tracking-[0.3em] uppercase overflow-hidden hover:text-white dark:hover:text-white transition-all duration-500 text-center active:scale-95"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2.5">
                    FEATURED ASSETS <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-expo"></div>
                </a>
                
                <a 
                  href="#contact" 
                  onClick={(e) => handleScroll(e, 'contact')}
                  className="w-full sm:w-auto px-8 md:px-10 py-3.5 md:py-4.5 xl:py-5 border border-black/10 dark:border-white/10 text-slate-900 dark:text-white text-[9px] xl:text-[10px] font-black tracking-[0.3em] uppercase hover:bg-slate-50 dark:hover:bg-white/5 transition-all duration-500 text-center active:scale-95 flex items-center justify-center gap-2 group"
                >
                  LET'S CONNECT
                  <div className="w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-150 transition-transform"></div>
                </a>
              </div>
            </div>
          </div>

          {/* Redesigned Status Card */}
          <div 
            className={`lg:col-span-4 hidden lg:flex justify-end transition-all duration-[1500ms] delay-1000 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
            style={{ transform: `translate(${cardX}px, ${cardY}px)` }}
          >
            <div className="relative w-full max-w-[280px] xl:max-w-[340px] aspect-[4/5] group/card">
               {/* Floating Performance Indicator */}
               <div className="absolute -top-4 -right-4 xl:-top-6 xl:-right-6 w-28 h-28 xl:w-32 xl:h-32 bg-white/60 dark:bg-black/40 backdrop-blur-3xl rounded-2xl xl:rounded-3xl z-20 flex flex-col items-center justify-center animate-float border border-black/5 dark:border-white/10 shadow-2xl group-hover/card:scale-105 transition-transform duration-700">
                  <div className="w-9 h-9 xl:w-10 xl:h-10 rounded-full bg-accent/10 flex items-center justify-center mb-2 border border-accent/20">
                     <Sparkles className="w-4 h-4 xl:w-5 xl:h-5 text-accent animate-pulse" />
                  </div>
                  <div className="text-[7px] xl:text-[8px] font-black tracking-widest text-slate-400 dark:text-gray-500 uppercase">VELOCITY</div>
                  <div className="text-sm xl:text-base font-black text-slate-900 dark:text-white tracking-tighter">Accelerated</div>
               </div>

               {/* Main Skill Dashboard */}
               <div className="absolute inset-0 bg-slate-50/50 dark:bg-surface/50 rounded-[1.5rem] xl:rounded-[2rem] p-6 xl:p-10 border border-black/5 dark:border-white/5 shadow-2xl flex flex-col justify-between overflow-hidden backdrop-blur-2xl transition-all duration-700 hover:border-accent/20">
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-6 xl:mb-9">
                       <Terminal className="w-5 h-5 text-accent" />
                       <div className="flex gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500/30"></div>
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-500/30"></div>
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/30"></div>
                       </div>
                    </div>
                    
                    <div className="space-y-4 xl:space-y-5">
                       <div className="text-[8px] xl:text-[9px] font-black tracking-[0.3em] text-slate-400 dark:text-gray-500 uppercase flex items-center gap-2">
                         <div className="w-4 h-[1px] bg-black/5 dark:bg-white/10"></div>
                         CORE_ABILITIES
                       </div>
                       {[
                         { name: 'Backend_Systems', icon: <Cpu className="w-3 h-3" /> },
                         { name: 'API_Architecture', icon: <Code2 className="w-3 h-3" /> },
                         { name: 'Data_Handling', icon: <Activity className="w-3 h-3" /> },
                         { name: 'Algorithmic_Logic', icon: <Terminal className="w-3 h-3" /> }
                       ].map((item, i) => (
                         <div key={i} className="flex items-center justify-between group/item cursor-default">
                            <div className="flex items-center gap-2">
                               <span className="text-slate-300 dark:text-gray-700 group-hover/item:text-accent transition-colors">{item.icon}</span>
                               <span className="text-[10px] xl:text-[11px] font-bold text-slate-500 dark:text-gray-400 group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-all duration-300">{item.name}</span>
                            </div>
                            <div className="w-12 xl:w-16 h-[1px] bg-black/5 dark:bg-white/5 relative overflow-hidden">
                               <div className="absolute inset-0 bg-accent w-0 group-hover/card:w-full transition-all duration-[1200ms] ease-expo" style={{ transitionDelay: `${i * 100}ms` }}></div>
                            </div>
                         </div>
                       ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-black/5 dark:border-white/5">
                     <div className="text-[7px] xl:text-[8px] font-black text-slate-400 dark:text-gray-600 uppercase tracking-widest mb-1.5 ml-0.5">CURRENT_PHASE</div>
                     <div className="flex items-center gap-2 text-[9px] xl:text-[10px] font-black text-emerald-600 dark:text-emerald-400 tracking-widest animate-soft-pulse group/status cursor-default">
                        <div className="relative flex items-center justify-center">
                          <div className="absolute w-3 h-3 bg-emerald-500/30 rounded-full animate-ping"></div>
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 relative z-10"></div>
                        </div>
                        OPEN_TO_ROLES
                     </div>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        @keyframes soft-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(0.98); }
        }
        .animate-float { animation: float 7s ease-in-out infinite; }
        .animate-soft-pulse { animation: soft-pulse 3s ease-in-out infinite; }
        .text-gradient {
          background: linear-gradient(to right, #6366f1, #818cf8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </section>
  );
};

export default Hero;