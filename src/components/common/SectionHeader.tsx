import React from 'react';
import { OrnamentalDivider } from './OrnamentalDivider';

interface SectionHeaderProps {
  number?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  title,
  subtitle,
  centered = true,
  className = '',
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      {number && (
        <span className="block font-display-luxury text-gold-400/70 text-xs md:text-sm tracking-[0.3em] uppercase mb-2">
          {number}
        </span>
      )}
      
      <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-ivory tracking-wide font-normal leading-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 font-sans text-gold-300/80 text-sm md:text-base tracking-widest uppercase max-w-2xl mx-auto font-medium">
          {subtitle}
        </p>
      )}

      <OrnamentalDivider />
    </div>
  );
};
