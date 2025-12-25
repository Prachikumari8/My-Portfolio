import React from 'react';

const reviews = [
  { quote: "Prachi didn't just build us a website; she engineered a digital ecosystem that scaled with our growth.", author: "Marcus Thorne", role: "CEO, Apex Finance" },
  { quote: "Her code quality is unmatched. The speed of delivery combined with technical rigor was impressive.", author: "Elena Rodriguez", role: "CTO, Lumina Retail" },
  { quote: "A partner who understands complex data structures and visualizes them beautifully.", author: "David Chen", role: "Product Lead, Vortex Systems" }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-40 bg-studio px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[10vw] font-black tracking-tighter text-black mb-24 uppercase">CLIENT <span className="text-gray-200">STORIES.</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="p-12 bg-white rounded-[2rem] flex flex-col justify-between border border-gray-100 hover:shadow-xl hover:shadow-black/5 transition-all">
               <div>
                  <div className="text-4xl text-gray-200 font-serif mb-6">“</div>
                  <p className="text-xl font-medium leading-tight text-black mb-12 italic">{r.quote}</p>
               </div>
               <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                  <div>
                    <div className="text-[11px] font-black uppercase tracking-widest">{r.author}</div>
                    <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">{r.role}</div>
                  </div>
               </div>
            </div>
          ))}
        </div>

        <div className="mt-40 bg-white rounded-[3rem] p-20 text-center reveal">
           <h3 className="text-6xl font-black tracking-tighter text-black mb-8 uppercase">HAVE AN IDEA?<br/><span className="text-gray-300">LET'S BUILD IT.</span></h3>
           <p className="text-gray-500 mb-12 max-w-lg mx-auto font-medium text-[14px]">I am currently accepting new partnerships for Q1 2025. Reach out to discuss your website, app, or growth strategy.</p>
           <div className="flex flex-wrap justify-center gap-4">
              <button className="px-10 py-5 bg-black text-white text-[10px] font-bold tracking-widest rounded-md">START A PROJECT</button>
              <button className="px-10 py-5 bg-white border border-gray-100 text-black text-[10px] font-bold tracking-widest rounded-md">+91 (800) 123-4567</button>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;