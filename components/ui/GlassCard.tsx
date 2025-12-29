import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  style?: React.CSSProperties;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', onMouseEnter, onMouseLeave, style }) => {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={style}
      className={`
        relative overflow-hidden transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1)
        bg-gradient-to-br from-white/70 via-white/50 to-white/30
        backdrop-blur-[20px]
        border border-white/60
        shadow-[0_8px_32px_0_rgba(31,38,135,0.05),_inset_0_0_0_1px_rgba(255,255,255,0.4)]
        hover:shadow-[0_20px_40px_0_rgba(0,0,0,0.1),_inset_0_0_0_1px_rgba(255,255,255,0.8)]
        hover:scale-[1.01] hover:-translate-y-1
        group
        rounded-[2rem]
        ${className}
      `}
    >
      {/* Glossy Highlight Overlay - Improved for "Liquid" feel */}
      <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20 rotate-12" />
      
      {/* Inner Content */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default GlassCard;