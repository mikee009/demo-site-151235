import React, { useRef, useState, useEffect } from 'react';
import WindowFrame from '../ui/WindowFrame';
import { Waves } from 'lucide-react';

const WanWidget: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const videoARef = useRef<HTMLVideoElement>(null);
  const videoBRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const interval = setInterval(() => { setShowResult(prev => !prev); }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    videoARef.current?.play().catch(() => {});
    videoBRef.current?.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    videoARef.current?.pause();
    videoBRef.current?.pause();
  };

  return (
    <WindowFrame 
      title="Wan_Phys.dll"
      icon={<Waves className="w-3 h-3 text-white" />}
      className="col-span-1 aspect-square"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-full h-full relative group bg-black">
        <video ref={videoARef} src="https://files.catbox.moe/3xcpcs.mp4" loop muted playsInline className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 grayscale ${showResult ? 'opacity-0' : 'opacity-100'}`} />
        <video ref={videoBRef} src="https://files.catbox.moe/gmf9fh.mp4" loop muted playsInline className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 grayscale ${showResult ? 'opacity-100' : 'opacity-0'}`} />
        
        <div className={`absolute inset-0 bg-white/60 backdrop-blur-xl z-20 flex flex-col items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
            <Waves className="w-8 h-8 text-black opacity-20 mb-2" />
            <span className="text-[9px] font-black text-black/50 uppercase tracking-[0.3em]">Simulation</span>
        </div>
      </div>
    </WindowFrame>
  );
};

export default WanWidget;