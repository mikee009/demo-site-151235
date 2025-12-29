import React, { useState } from 'react';
import WindowFrame from '../ui/WindowFrame';
import { Users } from 'lucide-react';

const ScailWidget: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <WindowFrame 
      title="Scail_Mass.exe"
      icon={<Users className="w-3 h-3" />}
      className="col-span-1 aspect-square"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`absolute inset-0 transition-all duration-700 ${isHovered ? 'opacity-100 scale-110' : 'opacity-20'}`}>
         <img src="https://files.catbox.moe/epxze4.webp" alt="SCAIL" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80" />
      </div>

      <div className={`absolute inset-0 flex flex-col items-center justify-center z-20 transition-all duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
        <Users className="w-10 h-10 text-slate-400 opacity-30 mb-2" />
        <h3 className="text-[10px] font-bold text-slate-500 tracking-widest uppercase">Crowd Engine</h3>
      </div>
    </WindowFrame>
  );
};

export default ScailWidget;