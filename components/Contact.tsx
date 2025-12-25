import React, { useState, useRef } from 'react';
import { Mail, Linkedin, Github, FileDown, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'sent' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const getEnv = (key: string): string => {
    try {
      if (typeof process !== 'undefined' && process.env && process.env[key]) {
        return process.env[key] as string;
      }
      if ((window as any)._env_ && (window as any)._env_[key]) {
        return (window as any)._env_[key];
      }
    } catch (e) {
      console.warn(`Environment variable ${key} detection failed.`);
    }
    return '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setFormState('submitting');
    const serviceId = getEnv('EMAILJS_SERVICE_ID');
    const templateId = getEnv('EMAILJS_TEMPLATE_ID');
    const publicKey = getEnv('EMAILJS_PUBLIC_KEY');

    if (!serviceId || !templateId || !publicKey) {
      const formData = new FormData(formRef.current);
      const name = formData.get('from_name');
      const email = formData.get('reply_to');
      const subject = formData.get('subject');
      const message = formData.get('message');
      const body = `From: ${name} (${email})\n\nMessage:\n${message}`;
      const mailtoUrl = `mailto:k.prachi1508@gmail.com?subject=${encodeURIComponent(subject as string || 'New Inquiry')}&body=${encodeURIComponent(body)}`;
      setTimeout(() => {
        window.location.href = mailtoUrl;
        setFormState('sent');
        formRef.current?.reset();
        setTimeout(() => setFormState('idle'), 5000);
      }, 800);
      return;
    }

    try {
      const result = await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      if (result.status === 200) {
        setFormState('sent');
        formRef.current.reset();
        setTimeout(() => setFormState('idle'), 5000);
      } else {
        throw new Error('Transmission failed');
      }
    } catch (error) {
      console.error("Transmission Error:", error);
      setFormState('error');
      setTimeout(() => setFormState('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-20 xl:py-24 px-6 md:px-12 bg-white dark:bg-onyx text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-500">
      <div className="absolute top-0 right-0 w-[200px] xl:w-[450px] h-[200px] xl:h-[450px] bg-accent/5 dark:bg-accent/5 blur-[80px] xl:blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>

      <div className="max-w-[1100px] xl:max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-start">
          
          {/* Contact Information (On Left) */}
          <div className="lg:col-span-5 flex flex-col space-y-6 xl:space-y-8 md:sticky md:top-28">
            <div className="reveal reveal-slide-left">
              <div className="text-[7.5px] xl:text-[8px] font-black uppercase tracking-[0.5em] text-accent mb-3 xl:mb-4">CONTACT_NODE</div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.9] text-slate-900 dark:text-white mb-4 xl:mb-6 uppercase whitespace-normal">
                START <span className="text-slate-200 dark:text-gray-800">CONVERSATION.</span>
              </h2>
              <p className="text-slate-500 dark:text-gray-400 text-[13px] xl:text-[17px] font-medium leading-relaxed max-w-sm xl:max-w-md mb-6 xl:mb-8">
                Seeking opportunities in software engineering. Let's discuss a vision.
              </p>
              
              <div className="group relative inline-block reveal reveal-zoom delay-200 w-full sm:w-auto mb-6">
                <a 
                  href="/resume.pdf" 
                  target="_blank"
                  className="relative z-10 flex items-center gap-3 xl:gap-4 px-5 xl:px-6 py-3.5 xl:py-4 bg-slate-50 dark:bg-surface border border-black/5 dark:border-white/10 rounded-[1.25rem] xl:rounded-[1.5rem] hover:border-accent/40 transition-all duration-500 shadow-sm"
                >
                  <div className="w-8 h-8 xl:w-10 xl:h-10 bg-accent/10 rounded-lg xl:rounded-xl flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-500">
                    <FileDown className="w-4 h-4 xl:w-4.5 xl:h-4.5" />
                  </div>
                  <div>
                    <div className="text-[6.5px] xl:text-[7.5px] font-black text-slate-400 dark:text-gray-500 uppercase tracking-widest mb-0.5">VIEW_FILE</div>
                    <div className="text-[12px] xl:text-[14px] font-bold text-slate-900 dark:text-white uppercase tracking-tight">RESUME_2025</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-2 xl:gap-3 reveal reveal-slide-up delay-400">
              {[
                { icon: <Github className="w-4 h-4 xl:w-5 xl:h-5" />, label: 'GITHUB', url: 'https://github.com/Prachikumari8' },
                { icon: <Linkedin className="w-4 h-4 xl:w-5 xl:h-5" />, label: 'LINKEDIN', url: 'https://www.linkedin.com/in/prachi-kumari-31213b344' },
                { icon: <Mail className="w-4 h-4 xl:w-5 xl:h-5" />, label: 'EMAIL', url: 'mailto:k.prachi1508@gmail.com' }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.url}
                  target="_blank"
                  className="flex items-center gap-2.5 px-4 py-2.5 xl:px-5 xl:py-3.5 bg-slate-50 dark:bg-white/[0.03] border border-black/10 dark:border-white/20 rounded-xl hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-black hover:border-accent dark:hover:border-white transition-all group shadow-sm"
                  aria-label={social.label}
                >
                  <span className="group-hover:scale-110 transition-transform text-slate-600 dark:text-gray-300 group-hover:text-inherit">
                    {social.icon}
                  </span>
                  <span className="text-[7.5px] xl:text-[8.5px] font-black tracking-widest uppercase">{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Direct Message Box (On Right) */}
          <div className="lg:col-span-7 reveal reveal-slide-right delay-300">
            <div className="p-6 xl:p-9 bg-slate-50 dark:bg-surface border border-black/5 dark:border-white/5 rounded-[1.5rem] xl:rounded-[2rem] shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-30"></div>
              <h3 className="text-base xl:text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight mb-6 xl:mb-8">Direct Message</h3>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 xl:space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[7.5px] xl:text-[8px] font-black text-slate-400 dark:text-gray-600 uppercase tracking-widest ml-1">NAME</label>
                    <input name="from_name" required type="text" placeholder="John Doe" className="w-full bg-white dark:bg-white/[0.04] border border-black/5 dark:border-white/10 rounded-lg xl:rounded-xl px-4 xl:px-5 py-2.5 xl:py-3.5 text-slate-900 dark:text-white focus:outline-none focus:border-accent/50 transition-all font-medium text-[13px] xl:text-[14px] shadow-sm placeholder:text-slate-300 dark:placeholder:text-gray-700"/>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[7.5px] xl:text-[8px] font-black text-slate-400 dark:text-gray-600 uppercase tracking-widest ml-1">EMAIL</label>
                    <input name="reply_to" required type="email" placeholder="name@email.com" className="w-full bg-white dark:bg-white/[0.04] border border-black/5 dark:border-white/10 rounded-lg xl:rounded-xl px-4 xl:px-5 py-2.5 xl:py-3.5 text-slate-900 dark:text-white focus:outline-none focus:border-accent/50 transition-all font-medium text-[13px] xl:text-[14px] shadow-sm placeholder:text-slate-300 dark:placeholder:text-gray-700"/>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[7.5px] xl:text-[8px] font-black text-slate-400 dark:text-gray-600 uppercase tracking-widest ml-1">MESSAGE</label>
                  <textarea name="message" required rows={3} xl:rows={4} placeholder="How can I help you today?" className="w-full bg-white dark:bg-white/[0.04] border border-black/5 dark:border-white/10 rounded-lg xl:rounded-xl px-4 xl:px-5 py-2.5 xl:py-3.5 text-slate-900 dark:text-white focus:outline-none focus:border-accent/50 transition-all font-medium resize-none text-[13px] xl:text-[14px] shadow-sm placeholder:text-slate-300 dark:placeholder:text-gray-700"></textarea>
                </div>
                <button 
                  type="submit"
                  disabled={formState === 'submitting'}
                  className="w-full rounded-xl xl:rounded-2xl py-3.5 xl:py-4.5 font-black text-[8px] xl:text-[9.5px] uppercase tracking-[0.3em] xl:tracking-[0.4em] bg-slate-900 dark:bg-white text-white dark:text-black hover:bg-accent dark:hover:bg-accent transition-all shadow-lg active:scale-95"
                >
                  <span className="flex items-center justify-center gap-2 xl:gap-3">
                    {formState === 'submitting' ? 'SENDING...' : 'TRANSMIT MESSAGE'} <Send className="w-3.5 xl:w-4 h-3.5 xl:h-4" />
                  </span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;