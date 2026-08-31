import React from 'react';

interface OrnamentalDividerProps {
  className?: string;
  variant?: 'gold' | 'subtle';
}

export const OrnamentalDivider: React.FC<OrnamentalDividerProps> = ({
  className = '',
  variant = 'gold',
}) => {
  return (
    <div className={`flex items-center justify-center my-6 gap-3 ${className}`}>
      <div
        className={`h-[1px] w-12 sm:w-20 ${
          variant === 'gold'
            ? 'bg-gradient-to-r from-transparent to-gold-500/60'
            : 'bg-gradient-to-r from-transparent to-ivory/20'
        }`}
      />
      
      {/* Decorative Gold Emblem Center */}
      <div className="flex items-center gap-1">
        <span className="w-1.5 h-1.5 rotate-45 border border-gold-400/80 bg-burgundy-950" />
        <span className="w-2.5 h-2.5 rotate-45 bg-gold-400/90 shadow-gold-subtle" />
        <span className="w-1.5 h-1.5 rotate-45 border border-gold-400/80 bg-burgundy-950" />
      </div>

      <div
        className={`h-[1px] w-12 sm:w-20 ${
          variant === 'gold'
            ? 'bg-gradient-to-l from-transparent to-gold-500/60'
            : 'bg-gradient-to-l from-transparent to-ivory/20'
        }`}
      />
    </div>
  );
};
