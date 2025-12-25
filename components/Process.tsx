import React from 'react';

const steps = [
  { 
    id: '01', 
    title: 'Discovery', 
    desc: 'Deep-dive into your infrastructure and business logic. We define the technical landscape and set clear, measurable engineering goals that align with your long-term vision.', 
    deliver: ['Infrastructure Audit', 'Tech-Stack Selection', 'System Requirements', 'Success Metrics'] 
  },
  { 
    id: '02', 
    title: 'Strategy & Arch', 
    desc: 'Blueprint for scale. I design the database schemas, API contracts, and high-fidelity interfaces that serve as our source of truth before a single line of code is written.', 
    deliver: ['Database Schema', 'System Architecture', 'UI/UX Prototypes', 'Development Sprint Map'] 
  },
  { 
    id: '03', 
    title: 'Execution', 
    desc: 'Clean, maintainable code implementation. Using React and Java, I build features in focused sprints with continuous integration and real-time progress tracking.', 
    deliver: ['Frontend Implementation', 'Backend API', 'Security Hardening', 'End-to-End Testing'] 
  }
];

const Process: React.FC = () => {
  return (
    <section id="method" className="py-60 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
        
        {/* Sticky Header Section */}
        <div className="lg:col-span-5 h-fit lg:sticky lg:top-40">
          <div className="text-[10px] font-bold tracking-[0.5em] text-gray-400 mb-8 uppercase">METHODOLOGY</div>
          <h2 className="text-5xl lg:text-7xl font-extrabold tracking-tighter leading-[0.9] mb-10 uppercase text-black">
            ENGINEERED<br/>
            <span className="text-gray-300">PRECISION.</span>
          </h2>
          <p className="text-[16px] leading-relaxed text-gray-500 max-w-sm mb-12 font-medium">
            A systematic approach to building robust software. We prioritize architecture and security from day one to ensure long-term stability.
          </p>
          <div className="flex items-center gap-6">
            <a href="#contact" className="px-8 py-4 bg-black text-white text-[10px] font-bold tracking-[0.3em] rounded-md hover:bg-gray-800 transition-all uppercase">
              GET IN TOUCH
            </a>
            <div className="hidden md:block w-12 h-[1px] bg-gray-100"></div>
            <span className="hidden md:block text-[9px] font-bold text-gray-300 uppercase tracking-widest">PHASE-BY-PHASE</span>
          </div>
        </div>

        {/* Scrolling Content Section */}
        <div className="lg:col-span-7 space-y-32">
          {steps.map((s, i) => (
            <div key={i} className="reveal group">
              {/* Refined Phase Indicator */}
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-8 bg-gray-100"></div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em]">PHASE {s.id}</span>
              </div>
              
              <h3 className="text-4xl lg:text-5xl font-extrabold text-black mb-6 uppercase tracking-tight leading-none group-hover:translate-x-1 transition-transform duration-500">
                {s.title}
              </h3>
              
              <p className="text-[16px] leading-relaxed text-gray-500 mb-12 max-w-xl font-medium">
                {s.desc}
              </p>
              
              {/* Elegant Deliverables Card */}
              <div className="relative p-10 lg:p-14 rounded-[2.5rem] bg-white border border-gray-100 group-hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.03)] group-hover:border-black/5 transition-all duration-700">
                <div className="text-[9px] font-bold tracking-[0.5em] text-gray-300 uppercase mb-8 flex items-center gap-4">
                   <span className="w-1.5 h-1.5 rounded-full bg-black/10"></span>
                   KEY DELIVERABLES
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-8">
                  {s.deliver.map((d, j) => (
                    <div key={j} className="flex items-start gap-4 group/item">
                      <div className="mt-1.5 w-1 h-1 rounded-full bg-gray-200 group-hover/item:bg-black transition-all duration-300"></div>
                      <div className="flex flex-col gap-1">
                        <div className="text-[13px] font-bold text-black uppercase tracking-tight transition-colors">
                          {d}
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-green-500/20"></div>
                          <div className="text-[8px] font-bold text-gray-300 uppercase tracking-widest">VERIFIED ASSET</div>
                        </div>
                      </div>
                    </div>
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

export default Process;