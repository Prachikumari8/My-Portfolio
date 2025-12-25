import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Github, ExternalLink, Layers, ArrowLeft, Terminal, Box, Globe, Shield } from 'lucide-react';

const allProjects = [
  { 
    title: 'KL DESK', 
    cat: 'Enterprise Architecture', 
    desc: 'An enterprise-grade appointment management system for faculty-student scheduling, optimizing academic resource allocation.', 
    tech: ['Spring Boot', 'React', 'MySQL', 'JWT'],
    img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2670&auto=format&fit=crop',
    github: 'https://github.com/Prachikumari8',
    demo: '#',
    icon: <Terminal className="w-5 h-5 text-accent" />
  },
  { 
    title: 'PADHAI XPRESS', 
    cat: 'E-Commerce Ecosystem', 
    desc: 'End-to-end booking platform for educational resources with real-time inventory tracking and secure payment simulation.', 
    tech: ['React', 'Node.js', 'PostgreSQL', 'Redux'],
    img: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2574&auto=format&fit=crop',
    github: 'https://github.com/Prachikumari8',
    demo: '#',
    icon: <Box className="w-5 h-5 text-accent" />
  },
  { 
    title: 'Algo Vision', 
    cat: 'Algorithm Engineering', 
    desc: 'High-performance dashboard visualizing technical interview performance metrics and complexity analysis benchmarks.', 
    tech: ['TypeScript', 'D3.js', 'Tailwind', 'Vite'],
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
    github: 'https://github.com/Prachikumari8',
    demo: '#',
    icon: <Globe className="w-5 h-5 text-accent" />
  },
  { 
    title: 'CloudSync Hub', 
    cat: 'Cloud Utility', 
    desc: 'Lightweight distributed file management utility focused on low-latency data synchronization and secure storage protocols.', 
    tech: ['Java', 'AWS S3', 'Spring Cloud', 'Redis'],
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop',
    github: 'https://github.com/Prachikumari8',
    demo: '#',
    icon: <Shield className="w-5 h-5 text-accent" />
  }
];

const AllProjectsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-onyx pt-24 pb-20 px-6 transition-colors duration-500">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 lg:mb-20">
          <div className="reveal reveal-slide-left active">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-[9px] font-black tracking-[0.4em] text-accent mb-6 uppercase group hover:gap-3 transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> BACK_TO_SYSTEMS
            </Link>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.9] text-slate-900 dark:text-white">
              PROJECT <br/><span className="text-slate-200 dark:text-gray-800">ARCHIVE.</span>
            </h1>
          </div>
          <div className="mt-8 md:mt-0 md:text-right reveal reveal-slide-right active">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-full mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[8px] font-black uppercase tracking-widest text-slate-400 dark:text-gray-500">ACTIVE_REPOSITORY</span>
            </div>
            <p className="text-slate-500 dark:text-gray-500 max-w-[280px] text-[12px] font-medium leading-relaxed">
              Detailed technical overview of all engineering assets and software modules.
            </p>
          </div>
        </div>

        {/* Full Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {allProjects.map((p, i) => (
            <div 
              key={i} 
              className="group bg-slate-50 dark:bg-surface rounded-3xl overflow-hidden border border-black/5 dark:border-white/5 hover:border-accent/30 transition-all duration-700 reveal reveal-zoom active flex flex-col h-full hover:shadow-xl"
            >
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 flex items-center justify-center gap-4 backdrop-blur-sm">
                   <a href={p.github} target="_blank" className="w-11 h-11 rounded-xl bg-white text-black flex items-center justify-center hover:bg-accent hover:text-white transition-all shadow-lg active:scale-95"><Github className="w-5 h-5" /></a>
                   <a href={p.demo} target="_blank" className="w-11 h-11 rounded-xl bg-accent text-white flex items-center justify-center hover:scale-105 transition-all shadow-lg active:scale-95"><ExternalLink className="w-5 h-5" /></a>
                </div>
                <img src={p.img} className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-expo" alt={p.title}/>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    {p.icon}
                  </div>
                  <div>
                    <div className="text-[8px] font-black tracking-[0.2em] text-accent uppercase mb-0.5">{p.cat}</div>
                    <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight leading-none">{p.title}</h3>
                  </div>
                </div>

                <p className="text-slate-500 dark:text-gray-400 text-sm mb-8 font-medium leading-relaxed">
                  {p.desc}
                </p>

                <div className="mt-auto pt-6 border-t border-black/5 dark:border-white/5 flex flex-wrap gap-2">
                  {p.tech.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-white dark:bg-white/5 border border-black/5 dark:border-white/5 text-[8px] font-black tracking-widest uppercase text-slate-400 dark:text-gray-500">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 lg:mt-32 text-center p-12 lg:p-20 bg-slate-50 dark:bg-surface rounded-[3rem] border border-black/5 dark:border-white/5">
           <div className="text-accent text-[10px] font-black tracking-[0.5em] mb-6 uppercase">END_OF_LIST</div>
           <h3 className="text-3xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-white mb-8 uppercase">HAVE A CUSTOM<br/><span className="text-slate-300 dark:text-gray-800">REQUIREMENT?</span></h3>
           <Link 
             to={{ pathname: "/", hash: "#contact" }} 
             className="inline-flex items-center gap-4 px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-black text-[11px] font-black tracking-[0.4em] uppercase rounded-full hover:bg-accent dark:hover:bg-accent hover:text-white transition-all shadow-xl active:scale-95"
           >
             LET'S COLLABORATE
           </Link>
        </div>
      </div>
    </div>
  );
};

export default AllProjectsPage;