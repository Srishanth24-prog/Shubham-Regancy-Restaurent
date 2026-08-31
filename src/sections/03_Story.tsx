import React from 'react';
import { Sparkles, ShieldCheck, HeartHandshake, Award } from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { GoldButton } from '../components/common/GoldButton';

interface StoryProps {
  onContactClick: () => void;
}

export const StorySection: React.FC<StoryProps> = ({ onContactClick }) => {
  return (
    <section id="story" className="py-28 lg:py-32 px-4 md:px-8 bg-burgundy-950/70 relative overflow-hidden">
      {/* Decorative Gold Dividers Top/Bottom */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto space-y-16">
        <SectionHeader
          number="03 — OUR STORY"
          title="MORE THAN A DESTINATION. A PLACE TO COME TOGETHER."
          subtitle="Indian Heritage × Modern Luxury × Warm Hospitality"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Prominent Building Facade Photograph */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-gold-400/60 shadow-2xl group">
              <img
                src="/src/assets/shubham-building.jpg"
                alt="Shubham Regency Exterior Elevation"
                className="w-full h-[380px] sm:h-[480px] lg:h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950/90 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-burgundy-950/90 backdrop-blur-md border border-gold-400/60 flex items-center justify-between">
                <div>
                  <span className="font-display-luxury text-gold-300 text-sm font-bold tracking-widest block">
                    SHUBHAM REGENCY
                  </span>
                  <span className="text-xs text-ivory/80 tracking-wider uppercase font-sans">
                    Official Property Facade
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-400 border border-gold-400/40">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Overlapping Gold Frame Detail */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-36 h-36 border-b-2 border-r-2 border-gold-400/70 pointer-events-none rounded-br-3xl" />
          </div>

          {/* Right Column: Editorial Narrative & Readability */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-5">
              <span className="text-xs font-sans font-bold tracking-[0.35em] text-gold-400 uppercase block">
                WELCOME TO SHUBHAM REGENCY
              </span>

              <h3 className="font-serif text-3xl sm:text-4xl text-ivory font-normal leading-tight">
                Crafting moments of togetherness through exceptional dining, grand celebrations, and serene accommodation.
              </h3>

              <p className="text-base sm:text-lg text-ivory/85 leading-relaxed font-sans font-light">
                Shubham Regency brings together three essential experiences under one landmark destination. Designed to reflect the warmth of traditional hospitality alongside contemporary comforts, we cater to guests seeking memorable meals, grand event venues, and peaceful stays.
              </p>

              <p className="text-base text-ivory/75 leading-relaxed font-sans font-light">
                Whether you are joining us for a family dinner, hosting a wedding reception, or staying overnight, our team is dedicated to providing warm, intuitive service and high-quality experiences.
              </p>
            </div>

            {/* Quality Pillars Overview */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gold-500/20">
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 text-gold-400">
                  <ShieldCheck className="w-5 h-5" />
                  <span className="font-serif font-bold text-base">Quality</span>
                </div>
                <p className="text-xs text-ivory/70 font-sans">Fresh cuisine & spotless rooms</p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 text-gold-400">
                  <HeartHandshake className="w-5 h-5" />
                  <span className="font-serif font-bold text-base">Service</span>
                </div>
                <p className="text-xs text-ivory/70 font-sans">Warm intuitive hospitality</p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 text-gold-400">
                  <Award className="w-5 h-5" />
                  <span className="font-serif font-bold text-base">Ambiance</span>
                </div>
                <p className="text-xs text-ivory/70 font-sans">Refined luxury environment</p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <GoldButton size="lg" variant="primary" onClick={onContactClick}>
                <span>OUR JOURNEY →</span>
              </GoldButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
