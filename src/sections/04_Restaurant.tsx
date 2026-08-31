import React from 'react';
import { Clock, ExternalLink, Menu as MenuIcon } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { SectionHeader } from '../components/common/SectionHeader';
import { PlaceholderImage } from '../components/common/PlaceholderImage';
import { GoldButton } from '../components/common/GoldButton';

interface RestaurantProps {
  onOpenMenu: () => void;
}

export const RestaurantSection: React.FC<RestaurantProps> = ({ onOpenMenu }) => {
  return (
    <section id="dine" className="py-28 lg:py-32 px-4 md:px-8 bg-charcoal relative">
      <div className="max-w-7xl mx-auto space-y-16">
        <SectionHeader
          number="04 — RESTAURANT"
          title="DINE"
          subtitle="Flavours crafted for every occasion."
        />

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Prominent Food Photo Collage Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-5 sm:gap-6">
            <PlaceholderImage
              alt="Signature Tandoori & Flame Specialties"
              category="RESTAURANT CUISINE"
              isPlaceholder={true}
              aspectRatio="aspect-[4/3]"
              className="rounded-2xl border border-gold-500/40 shadow-xl hover:border-gold-400 transition-all duration-300"
            />
            <PlaceholderImage
              alt="Authentic Indian Curries & Fragrant Biryanis"
              category="RESTAURANT CUISINE"
              isPlaceholder={true}
              aspectRatio="aspect-[4/3]"
              className="rounded-2xl border border-gold-500/40 shadow-xl mt-8 hover:border-gold-400 transition-all duration-300"
            />
            <PlaceholderImage
              alt="Dine-in Restaurant Hall & Dining Ambiance"
              category="RESTAURANT AMBIANCE"
              isPlaceholder={true}
              aspectRatio="aspect-[4/3]"
              className="rounded-2xl border border-gold-500/40 shadow-xl -mt-8 hover:border-gold-400 transition-all duration-300"
            />
            <PlaceholderImage
              alt="Handcrafted Artisanal Desserts & Sweets"
              category="RESTAURANT DESSERTS"
              isPlaceholder={true}
              aspectRatio="aspect-[4/3]"
              className="rounded-2xl border border-gold-500/40 shadow-xl hover:border-gold-400 transition-all duration-300"
            />
          </div>

          {/* Right Column: Restaurant Narrative & Action CTAs */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-sans font-bold tracking-[0.35em] text-gold-400 uppercase block">
                CULINARY EXCELLENCE
              </span>

              <h3 className="font-serif text-3xl sm:text-4xl text-ivory font-normal leading-tight">
                Authentic Taste, Warm Hospitality
              </h3>

              <p className="text-base sm:text-lg text-ivory/85 leading-relaxed font-sans font-light">
                Our restaurant offers a rich menu of Indian soups, tandoori starters, aromatic biryanis, classic main courses, and indulgent desserts. Prepared fresh using quality ingredients, every meal is served with care.
              </p>
            </div>

            {/* Opening Hours Box */}
            <div className="p-6 rounded-2xl bg-burgundy-950/80 border border-gold-500/40 space-y-4 shadow-xl">
              <div className="flex items-center gap-3 text-gold-300">
                <Clock className="w-5 h-5" />
                <span className="font-serif font-bold text-lg">Opening Hours</span>
              </div>
              <div className="text-sm text-ivory/90 space-y-2 font-sans">
                <div className="flex justify-between border-b border-gold-500/15 pb-2">
                  <span>Operating Days:</span>
                  <span className="font-semibold text-gold-300">{BUSINESS_CONFIG.hours.restaurant.days}</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span>Dining Hours:</span>
                  <span className="font-semibold text-gold-300">{BUSINESS_CONFIG.hours.restaurant.timing}</span>
                </div>
              </div>
            </div>

            {/* Restaurant Actions */}
            <div className="space-y-4 pt-2">
              <GoldButton size="lg" variant="primary" className="w-full shadow-gold-subtle" onClick={onOpenMenu}>
                <MenuIcon className="w-5 h-5" />
                <span>VIEW RESTAURANT MENU</span>
              </GoldButton>

              <div className="grid grid-cols-2 gap-4">
                <a
                  href={BUSINESS_CONFIG.urls.zomato}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-4 rounded-xl bg-burgundy-900/90 border border-gold-500/40 text-ivory hover:border-gold-400 hover:bg-burgundy-800 transition-all font-sans font-bold text-xs tracking-wider uppercase text-center shadow-md"
                >
                  <span>ORDER ON ZOMATO</span>
                  <ExternalLink className="w-4 h-4 text-gold-400" />
                </a>

                <a
                  href={BUSINESS_CONFIG.urls.swiggy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-4 rounded-xl bg-burgundy-900/90 border border-gold-500/40 text-ivory hover:border-gold-400 hover:bg-burgundy-800 transition-all font-sans font-bold text-xs tracking-wider uppercase text-center shadow-md"
                >
                  <span>ORDER ON SWIGGY</span>
                  <ExternalLink className="w-4 h-4 text-gold-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
