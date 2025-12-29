import React from 'react';
import { Minus, Square, X } from 'lucide-react';

interface WindowFrameProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  icon?: React.ReactNode;
}

const WindowFrame: React.FC<WindowFrameProps> = ({ title, children, className = '', onMouseEnter, onMouseLeave, icon }) => {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`
        relative flex flex-col
        industrial-glass rounded-sm
        transition-all duration-500 ease-in-out
        group/window
        ${className}
      `}
    >
      {/* Obsidian Title Bar */}
      <div className="flex items-center justify-between p-1.5 px-3 obsidian-title-bar select-none">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 flex items-center justify-center bg-white/10 rounded-sm border border-white/10">
            {icon ? icon : <div className="w-1.5 h-1.5 bg-white rounded-full" />}
          </div>
          <span className="text-[10px] font-black text-white/90 tracking-[0.2em] uppercase drop-shadow-sm">
            {title}
          </span>
        </div>
        
        {/* Win98 Style Buttons in Monochrome */}
        <div className="flex gap-1">
          <button className="w-5 h-5 bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20">
            <Minus className="w-3 h-3 text-white/70" />
          </button>
          <button className="w-5 h-5 bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20">
            <Square className="w-2 h-2 text-white/70" />
          </button>
          <button className="w-5 h-5 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-500 transition-colors ml-1">
            <X className="w-3 h-3 text-white/70" />
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="relative flex-1 m-1 bg-black/5 overflow-hidden border border-black/5">
        {children}
      </div>

      {/* Status Bar */}
      <div className="flex items-center justify-between px-3 py-1 bg-black/5 text-[9px] font-bold text-slate-500 tracking-widest uppercase font-mono">
        <div className="flex items-center gap-2">
          <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />
          SYSTEM_IDLE
        </div>
        <div className="opacity-40">LOC: 0x442-99</div>
      </div>
    </div>
  );
};

export default WindowFrame;