import React from 'react';
import { Sparkles } from 'lucide-react';
import { GoldButton } from '../components/common/GoldButton';

interface FinalCTAProps {
  onOpenActionModal: () => void;
}

export const FinalCTASection: React.FC<FinalCTAProps> = ({ onOpenActionModal }) => {
  return (
    <section className="relative py-28 px-4 md:px-8 bg-burgundy-950 overflow-hidden text-center">
      {/* Background Graphic Vignette */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-burgundy-900/60 via-burgundy-950 to-charcoal opacity-90" />

      {/* Gold Frame Border Decorative Lines */}
      <div className="absolute inset-6 border border-gold-500/20 rounded-3xl pointer-events-none z-10" />

      <div className="relative z-10 max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-burgundy-900/60 border border-gold-500/30">
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span className="font-display-luxury text-gold-300 text-xs tracking-[0.3em] font-semibold uppercase">
            SHUBHAM REGENCY
          </span>
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
        </div>

        <h2 className="font-display-luxury text-3xl sm:text-5xl md:text-6xl text-ivory tracking-widest font-extrabold leading-tight">
          COME. DINE. CELEBRATE. STAY.
        </h2>

        <p className="font-serif italic text-xl sm:text-2xl text-gold-300 max-w-2xl mx-auto">
          "Let every moment be unforgettable."
        </p>

        <div className="pt-6">
          <GoldButton
            size="lg"
            variant="primary"
            className="!px-10 !py-4 shadow-gold-glow"
            onClick={onOpenActionModal}
          >
            <span>BOOK / ORDER NOW →</span>
          </GoldButton>
        </div>
      </div>
    </section>
  );
};
