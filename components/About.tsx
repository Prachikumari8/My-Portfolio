
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto reveal">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div>
          <div className="flex items-center gap-6 mb-10">
            <img src="/photos/profile.jpeg" alt="Profile photo" className="w-24 h-24 rounded-full object-cover border-4 border-gray-200 dark:border-gray-700 shadow-lg" />
            <div className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">ABOUT STUDIO</div>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black tracking-tighter leading-[1] text-black dark:text-white mb-10">
            WE BRIDGE THE GAP<br/>
            BETWEEN <span className="text-gray-200">DESIGN</span><br/>
            AND <span className="text-gray-200">ENGINEERING.</span>
          </h2>
          <p className="text-[14px] leading-relaxed text-gray-500 max-w-md">
            Most developers treat code as an afterthought. I believe that technical excellence is the foundation of great design. I don't just build sites; I build scalable digital assets.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { v: '3rd', l: 'YEAR OF STUDY', d: 'KL University' },
            { v: '15+', l: 'PROJECTS BUILT', d: 'Enterprise Ready' },
            { v: '24/7', l: 'AVAILABILITY', d: 'Remote Support' },
            { v: '300+', l: 'DSA PROBLEMS', d: 'Leetcode Master' }
          ].map((stat, i) => (
            <div key={i} className="bg-gray-50 p-10 rounded-2xl border border-gray-100">
              <div className="text-4xl font-black text-black mb-2">{stat.v}</div>
              <div className="text-[9px] font-black tracking-widest text-gray-300 uppercase mb-4">{stat.l}</div>
              <div className="text-[10px] font-bold text-gray-400">{stat.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
