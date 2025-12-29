import React from 'react';
import Hero from './components/hero/Hero';
import AgentGrid from './components/AgentGrid';
import Taskbar from './components/layout/Taskbar';
import { Monitor } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen pb-20 font-sans selection:bg-black selection:text-white">
      <Hero />
      <main className="relative z-10">
        <AgentGrid />
      </main>
      <Taskbar />
      
      {/* Decorative desktop elements in Industrial Palette */}
      <div className="fixed top-12 left-12 opacity-40 hover:opacity-100 transition-opacity cursor-pointer group select-none">
         <div className="w-14 h-14 bg-white/40 border border-black/5 flex items-center justify-center shadow-sm group-active:translate-y-0.5">
            <Monitor className="w-8 h-8 text-black/60" />
         </div>
         <p className="text-[10px] font-black text-black/40 mt-3 text-center tracking-widest uppercase">My_Workstation</p>
      </div>

      <div className="fixed top-40 left-12 opacity-10 pointer-events-none">
        <div className="text-[120px] font-black text-black leading-none">01</div>
        <p className="text-xs font-black uppercase tracking-[1em] ml-2">System_State</p>
      </div>
    </div>
  );
};

export default App;