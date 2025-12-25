import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FileDown, Menu, X, Sun, Moon } from 'lucide-react';

const ThemeSwitch: React.FC<{ isDark: boolean; toggle: () => void; size?: 'sm' | 'md' }> = ({ isDark, toggle, size = 'md' }) => {
  const isSm = size === 'sm';
  return (
    <button
      onClick={toggle}
      className={`relative rounded-full transition-all duration-500 ease-expo flex items-center p-1 group overflow-hidden
        ${isDark 
          ? 'bg-white/10 border-white/10 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)]' 
          : 'bg-black/5 border-black/5 hover:shadow-[0_8px_15px_rgba(0,0,0,0.05)]'} 
        border backdrop-blur-md
        ${isSm ? 'w-9 h-5.5' : 'w-12 h-7 md:w-14 md:h-8'}`}
      aria-label="Toggle Theme"
    >
      <div 
        className={`absolute rounded-full transition-all duration-700 cubic-bezier(0.19, 1, 0.22, 1) flex items-center justify-center shadow-lg
          ${isDark ? 'bg-accent translate-x-full' : 'bg-white translate-x-0'}
          ${isSm ? 'w-3.5 h-3.5' : 'w-5 h-5 md:w-6 md:h-6'}`}
        style={{ 
          transform: isDark 
            ? `translateX(${isSm ? '14px' : 'calc(100% + 4px)'})` 
            : 'translateX(0px)' 
        }}
      >
        {isDark ? (
          <Moon className={`${isSm ? 'w-2 h-2' : 'w-2.5 h-2.5 md:w-3 md:h-3'} text-white fill-white/20`} />
        ) : (
          <Sun className={`${isSm ? 'w-2 h-2' : 'w-2.5 h-2.5 md:w-3 md:h-3'} text-slate-900 fill-amber-400/20`} />
        )}
      </div>
      <div className="w-full h-full flex justify-between items-center px-1 opacity-40 group-hover:opacity-100 transition-opacity">
        <Sun className={`${isSm ? 'w-2 h-2' : 'w-2.5 h-2.5'} ${isDark ? 'text-white/20' : 'text-slate-400'}`} />
        <Moon className={`${isSm ? 'w-2 h-2' : 'w-2.5 h-2.5'} ${isDark ? 'text-white/20' : 'text-slate-400'}`} />
      </div>
    </button>
  );
};

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const links = [
    { name: 'ABOUT', path: '#about' },
    { name: 'EXPERTISE', path: '#skills' },
    { name: 'PROJECTS', path: '#projects' },
    { name: 'EDUCATION', path: '#education' },
    { name: 'CONTACT', path: '#contact' }
  ];

  const closeMenu = () => setIsMobileMenuOpen(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    const targetId = path.startsWith('#') ? path.substring(1) : path;
    
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      closeMenu();
    } else {
      // If we are on /projects, we navigate to home first with the hash
      closeMenu();
      // Let standard routing happen, or use navigate if special logic needed
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'h-12 md:h-14 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-black/5 dark:border-white/5' : 'h-16 lg:h-18 bg-transparent'}`}>
        <div className="max-w-[1200px] mx-auto px-6 h-full flex justify-between items-center">
          <Link to="/" onClick={(e) => { 
            if (location.pathname === '/') {
              e.preventDefault(); 
              window.scrollTo({ top: 0, behavior: 'smooth' }); 
            }
            closeMenu(); 
          }} className="text-[12px] font-black tracking-[0.4em] text-slate-900 dark:text-white flex items-center gap-2">
            <img src="/photos/logo.png" alt="Logo" className="h-7 w-auto" />
            P R A C H I
          </Link>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {links.map((link) => (
              <Link 
                key={link.name}
                to={`/${link.path}`}
                onClick={(e) => handleNavClick(e, link.path)}
                className="group relative text-[9px] lg:text-[10px] font-bold tracking-[0.2em] text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <div className="h-4 w-[1px] bg-black/5 dark:bg-white/10 mx-1"></div>
            <ThemeSwitch isDark={isDark} toggle={toggleTheme} />
            <a 
              href="/resume.pdf" 
              target="_blank"
              className="flex items-center gap-2 px-4 py-1.5 border border-black/10 dark:border-white/10 text-slate-900 dark:text-white text-[9px] font-black tracking-[0.2em] rounded-full hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition-all active:scale-95 shadow-sm dark:shadow-none"
            >
              <FileDown className="w-3 h-3" />
              RESUME
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeSwitch isDark={isDark} toggle={toggleTheme} size="sm" />
            <button 
              className={`w-9 h-9 flex items-center justify-center rounded-full transition-all active:scale-90 ${isScrolled ? 'bg-black/5 dark:bg-white/5' : 'bg-black/10 dark:bg-white/10'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Open Menu"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4 text-slate-900 dark:text-white" /> : <Menu className="w-4 h-4 text-slate-900 dark:text-white" />}
            </button>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 z-[99] md:hidden transition-all duration-700 ease-expo ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-white/95 dark:bg-black/95 backdrop-blur-2xl flex flex-col justify-center items-center p-12 space-y-8">
           <div className="flex flex-col items-center gap-3 mb-2">
              <span className="text-[9px] font-black tracking-widest text-slate-400 dark:text-gray-600 uppercase">SYSTEM_THEME</span>
              <ThemeSwitch isDark={isDark} toggle={toggleTheme} />
           </div>
           {links.map((link) => (
             <Link 
               key={link.name} 
               to={`/${link.path}`}
               onClick={(e) => handleNavClick(e, link.path)}
               className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter hover:text-accent transition-colors"
             >
               {link.name}
             </Link>
           ))}
           <div className="w-10 h-[1px] bg-black/10 dark:bg-white/10"></div>
           <a 
             href="/resume.pdf" 
             target="_blank"
             onClick={closeMenu}
             className="flex items-center gap-3 px-8 py-4 bg-accent text-white rounded-full text-[11px] font-black tracking-widest shadow-xl shadow-accent/20 active:scale-95"
           >
             <FileDown className="w-4 h-4" /> DOWNLOAD RESUME
           </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;