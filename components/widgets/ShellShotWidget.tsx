import React, { useRef, useState } from 'react';
import WindowFrame from '../ui/WindowFrame';
import { Clapperboard } from 'lucide-react';

const ShellShotWidget: React.FC = () => {
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
      title="ShellShot_Renderer.sys" 
      icon={<Clapperboard className="w-3 h-3 text-white" />}
      className="col-span-1 md:col-span-2 aspect-video group/card overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src="https://files.catbox.moe/5qwc4i.mp4"
        loop
        muted
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 grayscale ${isHovered ? 'scale-105 opacity-100 grayscale-0' : 'scale-100 opacity-20 blur-[1px]'}`}
      />
      
      {/* Monochrome HUD */}
      <div className={`absolute top-4 right-4 transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
         <div className="px-2 py-0.5 bg-black text-[9px] font-black text-white border border-white/20 uppercase">Source: LIVE_FEED</div>
      </div>

      <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${isHovered ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}>
        <div className="w-14 h-14 bg-black flex items-center justify-center shadow-2xl animate-float-slow">
            <Clapperboard className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-[10px] font-black text-black uppercase tracking-[0.5em] mt-6 opacity-40">Ad Generator</h3>
      </div>

      <div className={`absolute bottom-6 left-6 transition-all duration-500 delay-100 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <p className="text-4xl font-black text-white italic tracking-tighter drop-shadow-lg leading-none">HIGH OUTPUT</p>
        <p className="text-[9px] font-black text-white/60 tracking-[0.3em] uppercase mt-1">Batch ID: #880-922</p>
      </div>
    </WindowFrame>
  );
};

export default ShellShotWidget;