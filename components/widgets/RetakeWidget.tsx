import React, { useRef, useState } from 'react';
import WindowFrame from '../ui/WindowFrame';
import { Scissors, MoveHorizontal } from 'lucide-react';

const RetakeWidget: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
      setSliderPosition((x / rect.width) * 100);
    }
  };

  const playVideoSafe = (video: HTMLVideoElement | null) => {
    video?.play().catch(err => { if (err.name !== 'AbortError') console.error(err); });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    playVideoSafe(video1Ref.current);
    playVideoSafe(video2Ref.current);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    video1Ref.current?.pause();
    video2Ref.current?.pause();
  };

  return (
    <WindowFrame 
      title="Retake_Diff_Viewer.sys"
      icon={<Scissors className="w-3 h-3" />}
      className="col-span-1 md:col-span-2 aspect-[21/9] cursor-col-resize"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={containerRef} onMouseMove={handleMouseMove} className="relative w-full h-full">
        <video ref={video1Ref} src="https://files.catbox.moe/3589ia.mp4" loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}>
          <video ref={video2Ref} src="https://files.catbox.moe/mksop1.mp4" loop muted playsInline className="absolute inset-0 w-full h-full object-cover" />
        </div>
        
        {/* Visual Cues */}
        <div className={`absolute inset-0 pointer-events-none flex flex-col items-center justify-center transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
            <MoveHorizontal className="w-12 h-12 text-slate-400 opacity-20 mb-2" />
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">A/B Frame Comparison</p>
        </div>

        <div className={`absolute top-0 bottom-0 w-0.5 bg-white shadow-xl z-30 pointer-events-none transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} style={{ left: `${sliderPosition}%` }}>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white/90 backdrop-blur shadow-lg border border-slate-200 flex items-center justify-center">
              <div className="w-1 h-3 bg-slate-300 rounded-full" />
           </div>
        </div>
      </div>
    </WindowFrame>
  );
};

export default RetakeWidget;