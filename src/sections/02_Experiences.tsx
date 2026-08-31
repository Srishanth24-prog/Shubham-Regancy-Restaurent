import React, { useState } from 'react';
import { UtensilsCrossed, Calendar, BedDouble } from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { PlaceholderImage } from '../components/common/PlaceholderImage';
import { GoldButton } from '../components/common/GoldButton';

interface ExperiencesProps {
  onSelectDine: () => void;
  onSelectCelebrate: () => void;
  onSelectStay: () => void;
}

export const ExperiencesSection: React.FC<ExperiencesProps> = ({
  onSelectDine,
  onSelectCelebrate,
  onSelectStay,
}) => {
  const [activePanel, setActivePanel] = useState<'DINE' | 'CELEBRATE' | 'STAY'>('DINE');

  const experiences = [
    {
      id: 'dine',
      key: 'DINE' as const,
      number: '01',
      title: 'DINE',
      subtitle: 'RESTAURANT & CULINARY EXPERIENCES',
      tagline: 'Flavours crafted for every occasion.',
      description:
        'Indulge in authentic regional delicacies, classic Indian specialties, and handcrafted dishes prepared fresh in a welcoming atmosphere.',
      icon: UtensilsCrossed,
      actionText: 'EXPLORE RESTAURANT →',
      onAction: onSelectDine,
    },
    {
      id: 'celebrate',
      key: 'CELEBRATE' as const,
      number: '02',
      title: 'CELEBRATE',
      subtitle: 'BANQUETS & PRIVATE EVENTS',
      tagline: 'Elegant spaces for weddings, parties & special moments.',
      description:
        'Transform your landmark events into unforgettable memories with customized banquet layouts, stage decor, and dedicated event coordination.',
      icon: Calendar,
      actionText: 'EXPLORE BANQUET HALL →',
      onAction: onSelectCelebrate,
    },
    {
      id: 'stay',
      key: 'STAY' as const,
      number: '03',
      title: 'STAY',
      subtitle: 'ACCOMMODATIONS & ROOMS',
      tagline: 'Comfortable rooms for a relaxing and peaceful stay.',
      description:
        'Unwind in thoughtfully appointed guest rooms with modern room amenities, climate control, fast Wi-Fi, and 24/7 guest support.',
      icon: BedDouble,
      actionText: 'EXPLORE ROOMS →',
      onAction: onSelectStay,
    },
  ];

  return (
    <section id="experiences" className="py-28 lg:py-32 px-4 md:px-8 bg-charcoal relative overflow-hidden">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-burgundy-900/20 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-14">
        <SectionHeader
          number="02 — THE SHUBHAM EXPERIENCE"
          title="EXPERIENCES CRAFTED FOR YOU"
          subtitle="Discover our three pillars of hospitality excellence"
        />

        {/* Signature Category Indicator Bar */}
        <div className="flex justify-center items-center gap-3 sm:gap-6 flex-wrap">
          {experiences.map((exp) => {
            const isActive = activePanel === exp.key;
            const Icon = exp.icon;
            return (
              <button
                key={exp.key}
                onClick={() => setActivePanel(exp.key)}
                className={`relative px-6 sm:px-9 py-3.5 rounded-full flex items-center gap-3 transition-all duration-500 cursor-pointer ${
                  isActive
                    ? 'bg-burgundy-950 border border-gold-400 text-gold-300 shadow-gold-glow scale-105 font-bold'
                    : 'bg-burgundy-950/50 border border-gold-500/30 text-ivory/70 hover:text-gold-300 hover:border-gold-500/50'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-gold-400' : 'text-ivory/60'}`} />
                <span className="font-display-luxury text-xs sm:text-sm tracking-widest uppercase">
                  {exp.title}
                </span>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-gold-400 shadow-gold-glow animate-pulse" />
                )}
              </button>
            );
          })}
        </div>

        {/* Experience Cards Grid with Generous Padding & Font Scaling */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
          {experiences.map((exp) => {
            const isActive = activePanel === exp.key;
            const Icon = exp.icon;

            return (
              <div
                key={exp.key}
                onMouseEnter={() => setActivePanel(exp.key)}
                className={`relative rounded-3xl overflow-hidden transition-all duration-500 ease-out flex flex-col justify-between p-8 sm:p-10 ${
                  isActive
                    ? 'bg-burgundy-950/95 border-2 border-gold-400 shadow-gold-glow scale-[1.02] z-20'
                    : 'bg-charcoal-card/90 border border-gold-500/30 opacity-90 hover:opacity-100 hover:border-gold-400 z-10'
                }`}
              >
                {/* Header & Category Title */}
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="font-display-luxury text-gold-400 text-2xl font-bold tracking-widest">
                      {exp.number}
                    </span>
                    <div className="w-12 h-12 rounded-full bg-burgundy-900/80 border border-gold-400/60 flex items-center justify-center text-gold-300 shadow-gold-subtle">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <div>
                    <span className="text-xs font-sans font-bold tracking-[0.25em] text-gold-400 uppercase block mb-1">
                      {exp.subtitle}
                    </span>
                    <h3 className="font-serif text-3xl sm:text-4xl text-ivory tracking-wide font-normal">
                      {exp.title}
                    </h3>
                  </div>

                  {/* Placeholder Visual Card */}
                  <PlaceholderImage
                    alt={`${exp.title} Experience`}
                    category={exp.subtitle}
                    isPlaceholder={true}
                    aspectRatio="aspect-[16/10]"
                    className="rounded-2xl border border-gold-500/40 shadow-lg my-4"
                  />

                  {/* Tagline & Scaled Up Body Text */}
                  <p className="font-serif text-xl text-gold-300 italic leading-snug">
                    "{exp.tagline}"
                  </p>
                  <p className="text-sm sm:text-base text-ivory/80 font-sans leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                {/* Action CTA Button */}
                <div className="pt-8 mt-6 border-t border-gold-500/20">
                  <GoldButton
                    size="md"
                    variant={isActive ? 'primary' : 'outline'}
                    className="w-full"
                    onClick={exp.onAction}
                  >
                    <span>{exp.actionText}</span>
                  </GoldButton>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
