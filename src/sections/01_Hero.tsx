import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { GoldButton } from '../components/common/GoldButton';

interface HeroProps {
  onExploreClick: () => void;
  onGalleryClick: () => void;
}

export const HeroSection: React.FC<HeroProps> = ({
  onExploreClick,
  onGalleryClick,
}) => {
  return (
    <section className="relative min-h-screen w-full bg-burgundy-950 flex items-center justify-center pt-24 pb-12 lg:py-0 overflow-hidden">
      {/* 100% Full-Bleed Edge-to-Edge Building Photograph */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/shubham-building.jpg"
          alt="Shubham Regency Exterior Property"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-[12000ms] ease-out hover:scale-110"
        />
        
        {/* Left Gradient Overlay: Ensures typography is 100% readable while building shines on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-burgundy-950 via-burgundy-950/85 to-transparent z-10 pointer-events-none" />

        {/* Top & Bottom Subtle Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950 via-transparent to-burgundy-950/60 z-10 pointer-events-none" />
      </div>

      {/* Hero Content Container (Positioned on the Left) */}
      <div className="relative z-20 max-w-7xl w-full mx-auto px-6 sm:px-8 lg:px-12 min-h-[85vh] lg:min-h-screen flex items-center">
        <div className="max-w-2xl space-y-6 sm:space-y-7 text-left py-12">
          
          {/* Eyebrow Label Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-burgundy-900/80 border border-gold-500/40 shadow-gold-subtle backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span className="font-display-luxury text-gold-300 text-xs tracking-[0.3em] font-bold uppercase">
              {BUSINESS_CONFIG.heroLabel}
            </span>
          </div>

          {/* Large Brand Typography */}
          <div className="space-y-1">
            <h1 className="font-display-luxury text-6xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-9xl text-ivory font-extrabold tracking-widest leading-none drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]">
              SHUBHAM
            </h1>
            <h2 className="font-serif italic text-3xl sm:text-5xl md:text-6xl lg:text-6xl text-gold-400 font-semibold tracking-[0.2em] drop-shadow-lg">
              REGENCY
            </h2>
          </div>

          {/* Decorative Gold Accent Line */}
          <div className="flex items-center gap-3 py-1">
            <div className="h-[2px] w-24 sm:w-36 bg-gradient-to-r from-gold-400 to-transparent" />
            <div className="w-2.5 h-2.5 rotate-45 bg-gold-400 shadow-gold-glow" />
          </div>

          {/* Tagline Statement */}
          <p className="font-serif text-xl sm:text-2xl lg:text-2xl text-ivory-light leading-relaxed italic max-w-xl font-normal drop-shadow-md">
            "{BUSINESS_CONFIG.tagline}"
          </p>

          {/* Primary Experiences Label */}
          <p className="font-sans text-xs sm:text-sm tracking-[0.4em] uppercase text-gold-300 font-bold drop-shadow-sm">
            {BUSINESS_CONFIG.experiencesLabel}
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-md">
            <GoldButton
              size="lg"
              variant="primary"
              className="shadow-gold-glow"
              onClick={onExploreClick}
            >
              <span>EXPLORE SHUBHAM REGENCY</span>
              <ArrowRight className="w-4 h-4" />
            </GoldButton>

            <GoldButton
              size="lg"
              variant="outline"
              onClick={onGalleryClick}
            >
              <span>EXPLORE GALLERY</span>
            </GoldButton>
          </div>

        </div>
      </div>

      {/* Bottom Scroll Down Indicator */}
      <div className="hidden lg:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
        <span className="text-[9px] uppercase font-sans tracking-[0.3em] text-gold-300 font-bold">
          SCROLL TO DISCOVER
        </span>
        <div className="w-4 h-7 rounded-full border border-gold-400/50 flex items-start justify-center p-1 bg-burgundy-950/50 backdrop-blur-sm">
          <div className="w-1 h-2 rounded-full bg-gold-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
};
