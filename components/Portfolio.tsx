import React from 'react';
import { Link } from 'react-router-dom';
import { Github, ExternalLink, Layers, Zap, ArrowRight } from 'lucide-react';

const projects = [
  { 
    id: '01', 
    title: 'KL DESK', 
    cat: 'Enterprise Architecture', 
    desc: 'An enterprise-grade appointment management system for faculty-student scheduling, optimizing academic resource allocation.', 
    tech: ['Spring Boot', 'React', 'MySQL', 'JWT'],
    img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2670&auto=format&fit=crop',
    github: 'https://github.com/Prachikumari8',
    demo: '#',
    delay: 'delay-100'
  },
  { 
    id: '02', 
    title: 'PADHAI XPRESS', 
    cat: 'E-Commerce Ecosystem', 
    desc: 'End-to-end booking platform for educational resources with real-time inventory tracking and secure payment simulation.', 
    tech: ['React', 'Node.js', 'PostgreSQL', 'Redux'],
    img: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2574&auto=format&fit=crop',
    github: 'https://github.com/Prachikumari8',
    demo: '#',
    delay: 'delay-200'
  },
  { 
    id: '03', 
    title: 'Algo Vision', 
    cat: 'Algorithm Engineering', 
    desc: 'High-performance dashboard visualizing technical interview performance metrics and complexity analysis benchmarks.', 
    tech: ['TypeScript', 'D3.js', 'Tailwind', 'Vite'],
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
    github: 'https://github.com/Prachikumari8',
    demo: '#',
    delay: 'delay-300'
  },
  { 
    id: '04', 
    title: 'CloudSync Hub', 
    cat: 'Cloud Utility', 
    desc: 'Lightweight distributed file management utility focused on low-latency data synchronization and secure storage protocols.', 
    tech: ['Java', 'AWS S3', 'Spring Cloud', 'Redis'],
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop',
    github: 'https://github.com/Prachikumari8',
    demo: '#',
    delay: 'delay-400'
  }
];

const Work: React.FC = () => {
  return (
    <section id="projects" className="py-12 md:py-16 bg-white dark:bg-onyx text-slate-900 dark:text-white px-6 relative transition-colors duration-500">
      <div className="absolute top-0 left-1/4 w-[200px] xl:w-[300px] h-[200px] xl:h-[300px] bg-accent/5 blur-[80px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1100px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-10 reveal reveal-slide-left">
          <div className="max-w-xl">
            <div className="text-[7.5px] lg:text-[8px] font-black tracking-[0.5em] text-accent mb-2 uppercase flex items-center gap-2">
               <Zap className="w-3 h-3 fill-accent" /> ASSET_DEPOT
            </div>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tighter uppercase leading-[0.9] mb-2 whitespace-normal break-words">
              FEATURED<br/>
              <span className="text-slate-200 dark:text-gray-800">PROJECTS.</span>
            </h2>
          </div>
          
          <div className="md:text-right mt-6 md:mt-0">
            <Link 
              to="/projects"
              className="group relative inline-flex items-center gap-4 px-8 py-3.5 bg-slate-900 dark:bg-white text-white dark:text-black text-[10px] font-black tracking-[0.3em] uppercase rounded-full overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-accent/20 active:scale-95 border border-transparent hover:border-accent/40"
            >
              <span className="relative z-10 flex items-center gap-2">
                SEE ALL PROJECTS <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-expo"></div>
            </Link>
          </div>
        </div>

        {/* Grid Container with equal spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 items-stretch">
          {projects.map((p, i) => (
            <div 
              key={i} 
              className={`group relative bg-slate-50 dark:bg-surface rounded-2xl lg:rounded-3xl overflow-hidden border border-black/5 dark:border-white/5 hover:border-accent/40 transition-all duration-700 reveal reveal-zoom ${p.delay} shadow-sm hover:shadow-md flex flex-col h-full`}
              style={{ minHeight: '380px' }} 
            >
              
              <div className="relative h-44 lg:h-48 overflow-hidden">
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 flex items-center justify-center gap-3 backdrop-blur-[2px] px-4 text-center">
                   <a 
                     href={p.github} 
                     target="_blank" 
                     className="w-9 h-9 rounded-lg bg-white text-black flex items-center justify-center hover:bg-accent hover:text-white transition-all shadow-md active:scale-95"
                     title="Source Code"
                   >
                     <Github className="w-4 h-4" />
                   </a>
                   <a 
                     href={p.demo} 
                     target="_blank" 
                     className="w-9 h-9 rounded-lg bg-accent text-white flex items-center justify-center hover:scale-105 transition-all shadow-md active:scale-95"
                     title="Live Preview"
                   >
                     <ExternalLink className="w-4 h-4" />
                   </a>
                </div>

                <img 
                  src={p.img} 
                  className="w-full h-full object-cover grayscale brightness-90 dark:brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-expo"
                  alt={p.title}
                />
              </div>
              
              <div className="p-5 lg:p-6 flex flex-col flex-grow">
                <div className="mb-3">
                  <div className="flex items-center gap-1.5 mb-1">
                     <Layers className="w-2.5 h-2.5 text-accent" />
                     <div className="text-[7px] lg:text-[7.5px] font-black tracking-[0.2em] text-accent uppercase truncate">{p.cat}</div>
                  </div>
                  <h3 className="text-lg lg:text-xl font-black tracking-tight text-slate-900 dark:text-white uppercase leading-none">
                    {p.title}
                  </h3>
                </div>

                <p className="text-slate-500 dark:text-gray-400 text-[11px] lg:text-[12px] mb-4 font-medium leading-relaxed line-clamp-3">
                  {p.desc}
                </p>

                <div className="mt-auto pt-4 border-t border-black/5 dark:border-white/5 flex flex-wrap gap-1.5">
                  {p.tech.map((t, idx) => (
                    <span key={idx} className="px-2.5 py-0.5 rounded-md bg-white dark:bg-white/5 border border-black/5 dark:border-white/5 text-[7px] lg:text-[7.5px] font-black tracking-widest uppercase text-slate-400 dark:text-gray-500">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;