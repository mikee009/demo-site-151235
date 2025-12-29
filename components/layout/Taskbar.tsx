import React, { useState, useEffect } from 'react';
import { Monitor, Cpu, Info, Search, Terminal } from 'lucide-react';

const Taskbar: React.FC = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 h-12 bg-white/60 backdrop-blur-3xl border-t border-black/5 z-50 flex items-center px-4 gap-4 shadow-[0_-10px_30px_rgba(0,0,0,0.03)]">
      {/* Start Button */}
      <button className="flex items-center justify-center w-8 h-8 bg-black rounded-sm group active:scale-95 transition-transform">
        <Terminal className="w-4 h-4 text-white" />
      </button>

      <div className="h-6 w-[1px] bg-black/5"></div>

      {/* App Tabs */}
      <div className="flex-1 flex gap-2">
        <div className="px-4 py-1.5 bg-black/10 border border-black/5 rounded-sm flex items-center gap-2 group cursor-pointer">
           <Monitor className="w-3.5 h-3.5 text-black" />
           <span className="text-[10px] font-black text-black tracking-widest uppercase">Studio.exe</span>
        </div>
        <div className="px-4 py-1.5 hover:bg-black/5 transition-colors rounded-sm flex items-center gap-2 group cursor-pointer opacity-30 hover:opacity-100">
           <Search className="w-3.5 h-3.5 text-black" />
           <span className="text-[10px] font-bold text-black tracking-widest uppercase">Search</span>
        </div>
      </div>

      <div className="h-6 w-[1px] bg-black/5"></div>

      {/* Tray */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 text-[10px] font-black text-black/40">
           <Cpu className="w-3.5 h-3.5" />
           <span>CPU_LOAD: 12%</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] font-black text-black">
           <span className="font-mono">{time}</span>
        </div>
        <button className="w-8 h-8 flex items-center justify-center opacity-30 hover:opacity-100 transition-opacity">
           <Info className="w-4 h-4 text-black" />
        </button>
      </div>
    </div>
  );
};

export default Taskbar;