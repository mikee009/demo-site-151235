import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full pt-24 pb-12 flex flex-col items-center justify-center">
        <div className="z-10 text-center space-y-4">
            {/* Liquid Chrome Graphite Title */}
            <h1 
                className="text-8xl md:text-[11rem] font-black tracking-tighter text-white select-none italic leading-none"
                style={{
                    filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.15))',
                    background: 'linear-gradient(180deg, #444 0%, #000 45%, #666 55%, #111 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: '-0.1em'
                }}
            >
                Myshell
            </h1>
            
            <div className="flex items-center justify-center gap-6">
                <div className="h-[1px] w-12 bg-black/10"></div>
                <p className="text-[10px] md:text-xs font-black text-black tracking-[0.8em] uppercase opacity-40">
                   Industrial Video Engine v.1.0
                </p>
                <div className="h-[1px] w-12 bg-black/10"></div>
            </div>
        </div>
        
        {/* Subtle glass reflection ray */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white to-transparent opacity-20 pointer-events-none" />
    </div>
  );
};

export default Hero;