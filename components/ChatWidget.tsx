
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Terminal } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/gemini';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: "Hello! I'm Prachi's virtual assistant. Ask me about her technical skills, Java expertise, or academic background.",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      role: 'user',
      text: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(messages, userMessage.text);
      const botMessage: ChatMessage = {
        role: 'model',
        text: responseText,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[110] flex flex-col items-end">
      {isOpen && (
        <div className="bg-white dark:bg-surface w-[320px] sm:w-[400px] h-[500px] sm:h-[600px] rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.2)] dark:shadow-[0_30px_100px_rgba(0,0,0,0.8)] border border-black/5 dark:border-white/5 flex flex-col mb-6 overflow-hidden transition-all duration-700 animate-fade-in-up">
          <div className="bg-slate-50 dark:bg-black/40 backdrop-blur-xl p-6 sm:p-8 flex justify-between items-center border-b border-black/5 dark:border-white/5">
            <div className="flex items-center space-x-4">
               <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/20 rounded-2xl flex items-center justify-center border border-accent/20">
                  <Terminal className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
               </div>
               <div>
                  <div className="font-black text-xs uppercase tracking-widest text-slate-900 dark:text-white">Prachi-AI</div>
                  <div className="text-[10px] text-accent font-black flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span> SYSTEM_LIVE
                  </div>
               </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors p-2"><X className="w-6 h-6" /></button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 sm:space-y-8 bg-white dark:bg-surface">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 sm:p-5 rounded-[2rem] text-[13px] sm:text-[14px] leading-relaxed font-medium ${msg.role === 'user' ? 'bg-accent text-white rounded-br-none shadow-lg shadow-accent/20' : 'bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-gray-300 rounded-bl-none border border-black/5 dark:border-white/5'}`}>
                   {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                 <div className="bg-slate-100 dark:bg-white/5 text-accent p-4 rounded-2xl text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-3">
                    <Sparkles className="w-3 h-3 animate-spin" /> THINKING_LOGIC...
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-6 sm:p-8 bg-slate-50 dark:bg-black/20 border-t border-black/5 dark:border-white/5 backdrop-blur-xl">
            <div className="flex items-center gap-3 bg-white dark:bg-white/5 p-2 rounded-2xl border border-black/10 dark:border-white/5 focus-within:border-accent transition-all shadow-sm">
               <input 
                 type="text" 
                 value={input}
                 onChange={(e) => setInput(e.target.value)}
                 onKeyDown={handleKeyPress}
                 className="flex-1 bg-transparent px-4 sm:px-5 py-3 sm:py-4 text-[13px] sm:text-[14px] focus:outline-none text-slate-900 dark:text-white font-medium placeholder:text-slate-400"
                 placeholder="Search system documentation..."
               />
               <button onClick={handleSend} disabled={isLoading} className="bg-accent text-white p-3 sm:p-4 rounded-xl hover:brightness-110 transition-all disabled:opacity-50 active:scale-95"><Send className="w-4 h-4 sm:w-5 sm:h-5" /></button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full transition-all duration-500 shadow-2xl hover:scale-110 active:scale-90 ${isOpen ? 'bg-slate-900 dark:bg-white text-white dark:text-black' : 'bg-accent text-white'}`}
      >
        {isOpen ? <X className="w-7 h-7 sm:w-8 sm:h-8" /> : <MessageSquare className="w-7 h-7 sm:w-8 sm:h-8" />}
      </button>
    </div>
  );
};

export default ChatWidget;
