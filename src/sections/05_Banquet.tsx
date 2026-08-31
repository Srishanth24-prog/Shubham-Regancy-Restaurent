import React from 'react';
import { Calendar, MessageSquare, CheckCircle2 } from 'lucide-react';
import { BANQUET_DATA } from '../data/banquetData';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { SectionHeader } from '../components/common/SectionHeader';
import { PlaceholderImage } from '../components/common/PlaceholderImage';
import { GoldButton } from '../components/common/GoldButton';

interface BanquetProps {
  onOpenEnquiry: (eventType?: string) => void;
}

export const BanquetSection: React.FC<BanquetProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="celebrate" className="py-28 lg:py-32 px-4 md:px-8 bg-burgundy-950/70 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        <SectionHeader
          number="05 — BANQUET HALL & EVENTS"
          title="CELEBRATE"
          subtitle="Spaces made for moments that matter."
        />

        {/* Categories Grid with Increased Card Spacing & Larger Fonts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {BANQUET_DATA.map((event) => (
            <div
              key={event.id}
              className="rounded-3xl bg-charcoal-card/95 border border-gold-500/40 overflow-hidden flex flex-col justify-between hover:border-gold-400 hover:shadow-gold-glow transition-all duration-300 group"
            >
              <div className="p-8 space-y-5">
                <PlaceholderImage
                  alt={event.name}
                  category="BANQUET & EVENTS"
                  isPlaceholder={true}
                  aspectRatio="aspect-[16/10]"
                  className="rounded-2xl border border-gold-500/30 shadow-md"
                />

                <div>
                  <span className="text-xs font-sans font-bold tracking-[0.25em] text-gold-400 uppercase block mb-1">
                    {event.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-ivory font-semibold group-hover:text-gold-300 transition-colors">
                    {event.name}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-ivory/80 font-sans leading-relaxed">
                  {event.description}
                </p>

                {/* Features List */}
                <div className="space-y-2.5 pt-4 border-t border-gold-500/15">
                  {event.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-sm text-ivory/90 font-sans">
                      <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="p-8 pt-0">
                <GoldButton
                  size="md"
                  variant="outline"
                  className="w-full"
                  onClick={() => onOpenEnquiry(event.name)}
                >
                  <span>ENQUIRE FOR {event.name.split(' ')[0].toUpperCase()}</span>
                </GoldButton>
              </div>
            </div>
          ))}
        </div>

        {/* Prominent Global Enquiry Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-burgundy-950 border-2 border-gold-400/60 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left max-w-2xl">
            <span className="text-xs font-sans font-bold tracking-[0.35em] text-gold-400 uppercase">
              PLAN YOUR EVENT AT SHUBHAM REGENCY
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-ivory leading-tight font-normal">
              Need assistance planning your wedding, reception, or corporate function?
            </h3>
            <p className="text-sm sm:text-base text-ivory/80 font-sans leading-relaxed">
              Our dedicated banquet team will help customize seating, stage lighting, and catering menus tailored to your event requirements.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto shrink-0">
            <GoldButton
              size="lg"
              variant="primary"
              className="w-full sm:w-auto shadow-gold-glow"
              onClick={() => onOpenEnquiry('General Event')}
            >
              <Calendar className="w-5 h-5" />
              <span>ENQUIRE NOW</span>
            </GoldButton>

            <a
              href={BUSINESS_CONFIG.urls.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-emerald-950/90 border border-emerald-500/50 text-emerald-300 hover:bg-emerald-900 font-bold text-xs tracking-widest uppercase transition-all shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WHATSAPP</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
