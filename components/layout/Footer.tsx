import React from 'react';
import { Twitter, Github, Globe, Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-10 mt-12 border-t border-white/40 bg-white/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-slate-500 gap-4">
        
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-sm font-medium tracking-tight text-center md:text-left">
          <span>© 2025 Myshell.ai</span>
          <span className="hidden md:inline w-1 h-1 rounded-full bg-slate-300"></span>
          <span className="flex items-center gap-1.5 text-slate-400 bg-white/50 px-3 py-1 rounded-full border border-white/50 shadow-sm">
             <Sparkles className="w-3 h-3" />
             Mockup by <span className="text-slate-600 font-semibold">Kiyoki (12zzz22_)</span>
          </span>
        </div>
        
        <div className="flex gap-4">
          <a href="#" className="text-slate-400 hover:text-slate-800 transition-all hover:scale-110 p-2 rounded-full hover:bg-white/60">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="text-slate-400 hover:text-slate-800 transition-all hover:scale-110 p-2 rounded-full hover:bg-white/60">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="text-slate-400 hover:text-slate-800 transition-all hover:scale-110 p-2 rounded-full hover:bg-white/60">
            <Globe className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;