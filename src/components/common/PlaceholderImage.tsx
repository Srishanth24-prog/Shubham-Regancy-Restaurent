import React from 'react';
import { Image as ImageIcon, Sparkles } from 'lucide-react';

interface PlaceholderImageProps {
  src?: string;
  alt: string;
  category?: string;
  isPlaceholder?: boolean;
  className?: string;
  aspectRatio?: string;
  children?: React.ReactNode;
}

export const PlaceholderImage: React.FC<PlaceholderImageProps> = ({
  src,
  alt,
  category = 'HOTEL & HOSPITALITY',
  isPlaceholder = true,
  className = '',
  aspectRatio = 'aspect-video',
  children,
}) => {
  // If it's a real image (like the official building photo shubham-building.jpg)
  if (!isPlaceholder && src) {
    return (
      <div className={`relative overflow-hidden group ${aspectRatio} ${className}`}>
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        {children}
      </div>
    );
  }

  // Elegant Luxury Placeholder Box for photos not yet provided
  return (
    <div
      className={`placeholder-image-box group overflow-hidden ${aspectRatio} ${className}`}
    >
      <div className="absolute inset-0 bg-mandala-pattern opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950/90 via-charcoal/80 to-transparent" />
      
      <div className="relative z-10 p-6 flex flex-col items-center justify-center text-center space-y-3 max-w-md">
        <div className="w-12 h-12 rounded-full bg-burgundy-900/80 border border-gold-500/40 flex items-center justify-center text-gold-400 group-hover:border-gold-400 group-hover:scale-110 transition-all duration-300">
          <ImageIcon className="w-6 h-6" />
        </div>
        
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-[10px] uppercase font-bold tracking-widest text-gold-300">
          <Sparkles className="w-3 h-3 text-gold-400" />
          <span>REPLACEABLE PHOTO PLACEHOLDER</span>
        </div>

        <h4 className="font-serif text-lg text-ivory tracking-wide font-normal">
          {alt}
        </h4>

        <p className="text-xs font-sans text-ivory/60 tracking-wider uppercase">
          {category}
        </p>
      </div>

      {children}
    </div>
  );
};
