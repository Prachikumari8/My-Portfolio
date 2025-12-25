import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'MVP SPRINT',
    price: '$15k+',
    desc: 'Perfect for startups needing a rapid, high-quality launch.',
    features: ['4-6 Weeks Delivery', 'Custom Design System', 'Next.js + CMS Integration', 'Basic SEO & Analytics', '1 Month Support']
  },
  {
    name: 'DIGITAL PRODUCT',
    price: '$40k+',
    desc: 'Full-scale web applications for growing businesses.',
    features: ['8-12 Weeks Delivery', 'Advanced UX/UI Design', 'Database & API Architecture', 'Payment Gateway Integration', 'Admin Dashboard', '3 Months Support']
  },
  {
    name: 'ENTERPRISE',
    price: 'CUSTOM',
    desc: 'Digital transformation for large-scale organizations.',
    features: ['Scalable Microservices', 'Legacy System Migration', 'AI/ML Integration', 'Dedicated DevOps', 'SLA & 24/7 Priority Support', 'Dedicated Team']
  }
];

const Pricing: React.FC = () => {
  return (
    <section className="py-40 bg-black text-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl lg:text-7xl font-black tracking-tighter mb-6 uppercase">ENGAGEMENT <span className="text-gray-800">MODELS.</span></h2>
          <p className="text-gray-500 text-[14px] max-w-xl mx-auto font-medium">Transparent pricing for world-class engineering. We offer flexible engagement models tailored to your stage of growth.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((p, i) => (
            <div key={i} className="p-12 rounded-[2rem] border border-gray-800 bg-gray-900/50 flex flex-col h-full hover:border-gray-700 transition-all">
              <div className="text-[10px] font-bold tracking-widest text-gray-400 mb-2 uppercase">{p.name}</div>
              <div className="text-5xl font-black mb-6">{p.price}</div>
              <p className="text-gray-500 text-sm mb-12 flex-1">{p.desc}</p>
              
              <ul className="space-y-4 mb-12">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-xs font-bold text-gray-400 uppercase tracking-tight">
                    <Check className="w-3 h-3 text-white" /> {f}
                  </li>
                ))}
              </ul>

              <button className="w-full py-4 bg-white text-black text-[10px] font-black tracking-[0.2em] rounded-md uppercase hover:bg-gray-200 transition-colors">GET STARTED</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;