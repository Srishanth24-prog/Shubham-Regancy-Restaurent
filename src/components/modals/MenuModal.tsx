import React, { useState } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { MENU_DATA } from '../../data/menuData';
import { BUSINESS_CONFIG } from '../../config/businessConfig';
import { GoldButton } from '../common/GoldButton';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MenuModal: React.FC<MenuModalProps> = ({ isOpen, onClose }) => {
  const [activeCategory, setActiveCategory] = useState<string>('Starters');

  const categories = ['Starters', 'Main Course', 'Biryanis', 'Breads & Rice', 'Desserts & Beverages'];

  if (!isOpen) return null;

  const filteredItems = MENU_DATA.filter((item) => item.category === activeCategory);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-charcoal-card border border-gold-500/40 rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden text-ivory max-h-[90vh] flex flex-col">
        {/* Header Bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gold-gradient" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-gold-400 hover:text-ivory hover:bg-burgundy-900/60 transition-colors"
          aria-label="Close menu modal"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-6 shrink-0">
          <span className="font-display-luxury text-gold-400 text-xs tracking-[0.3em] uppercase block mb-1">
            RESTAURANT SELECTION
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-ivory">
            DINE-IN & TAKEAWAYS MENU
          </h3>
          <p className="text-xs text-ivory/60 font-sans mt-1">
            Curated authentic culinary selections for every taste
          </p>
        </div>

        {/* Category Selector */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-6 border-b border-gold-500/20 shrink-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-gold-gradient text-burgundy-950 shadow-gold-subtle'
                  : 'bg-burgundy-950/60 text-ivory/70 hover:text-gold-300 border border-gold-500/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="overflow-y-auto space-y-4 pr-1 grow">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="p-4 rounded-xl bg-burgundy-950/40 border border-gold-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:border-gold-500/40 transition-all"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-3 h-3 rounded-full border ${
                      item.type === 'veg'
                        ? 'border-emerald-500 bg-emerald-500/20'
                        : 'border-rose-500 bg-rose-500/20'
                    }`}
                  />
                  <h4 className="font-serif text-lg text-ivory font-semibold">
                    {item.name}
                  </h4>
                </div>
                <p className="text-xs text-ivory/70 leading-relaxed pl-5">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Order Actions */}
        <div className="mt-6 pt-4 border-t border-gold-500/20 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-ivory/60">
            <span>Ready to order delivery?</span>
          </div>

          <div className="flex items-center gap-2">
            <GoldButton
              size="sm"
              variant="outline"
              href={BUSINESS_CONFIG.urls.zomato}
              target="_blank"
              rel="noopener noreferrer"
            >
              ZOMATO <ExternalLink className="w-3 h-3 ml-1" />
            </GoldButton>

            <GoldButton
              size="sm"
              variant="primary"
              href={BUSINESS_CONFIG.urls.swiggy}
              target="_blank"
              rel="noopener noreferrer"
            >
              SWIGGY <ExternalLink className="w-3 h-3 ml-1" />
            </GoldButton>
          </div>
        </div>
      </div>
    </div>
  );
};
