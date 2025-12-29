import React, { useRef, useState } from 'react';
import WindowFrame from '../ui/WindowFrame';
import { Sparkles } from 'lucide-react';

const KlingWidget: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    videoRef.current?.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    videoRef.current?.pause();
  };

  return (
    <WindowFrame 
      title="Kling_O1_Agent.app"
      icon={<Sparkles className="w-3 h-3 text-white" />}
      className="col-span-1 row-span-2 aspect-[9/16] h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src="https://files.catbox.moe/0h0zon.mp4"
        loop
        muted
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-[2000ms] grayscale-0 ${isHovered ? 'scale-105' : 'scale-100'}`}
      />

      {/* Frosted Monochrome Overlay */}
      <div className={`absolute inset-0 z-20 transition-all duration-1000 ${isHovered ? 'opacity-0' : 'opacity-100 bg-white/60 backdrop-blur-xl'}`}>
        <div className="flex flex-col items-center justify-center h-full">
           <div className="w-12 h-12 bg-black flex items-center justify-center mb-6">
              <Sparkles className="w-5 h-5 text-white animate-pulse" />
           </div>
           <p className="text-[9px] font-black text-black/50 uppercase tracking-[0.4em]">Synthetic Creator</p>
        </div>
      </div>
      
       <div className={`absolute bottom-0 left-0 w-full p-4 transition-all duration-700 z-30 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="bg-black/80 backdrop-blur-md p-4 rounded-sm border border-white/10 shadow-2xl">
            <p className="text-[8px] font-black text-white uppercase mb-2 tracking-widest">Compiling Video Data...</p>
            <div className="w-full h-0.5 bg-white/10">
                <div className="h-full bg-white w-1/3 animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
            </div>
        </div>
      </div>
    </WindowFrame>
  );
};

export default KlingWidget;