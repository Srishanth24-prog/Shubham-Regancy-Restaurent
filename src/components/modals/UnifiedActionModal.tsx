import React from 'react';
import { X, UtensilsCrossed, Calendar, BedDouble, ExternalLink, Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/businessConfig';

interface UnifiedActionModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: 'Dine' | 'Celebrate' | 'Stay';
  onOpenBanquetEnquiry: () => void;
  onOpenRoomEnquiry: () => void;
  onOpenMenu: () => void;
}

export const UnifiedActionModal: React.FC<UnifiedActionModalProps> = ({
  isOpen,
  onClose,
  initialCategory = 'Dine',
  onOpenBanquetEnquiry,
  onOpenRoomEnquiry,
  onOpenMenu,
}) => {
  const [category, setCategory] = React.useState<'Dine' | 'Celebrate' | 'Stay'>(initialCategory);

  React.useEffect(() => {
    setCategory(initialCategory);
  }, [initialCategory]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-charcoal-card border border-gold-500/40 rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden text-ivory">
        {/* Decorative Gold Header Bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gold-gradient" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-gold-400 hover:text-ivory hover:bg-burgundy-900/60 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <span className="font-display-luxury text-gold-400 text-xs tracking-[0.3em] uppercase block mb-1">
            SHUBHAM REGENCY
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-ivory">
            BOOK & ORDER SERVICES
          </h3>
          <p className="text-xs text-ivory/70 font-sans tracking-wide mt-1">
            Select your preferred hospitality experience below
          </p>
        </div>

        {/* Category Tabs */}
        <div className="grid grid-cols-3 gap-2 mb-6 p-1 bg-burgundy-950/80 rounded-xl border border-gold-500/20">
          <button
            onClick={() => setCategory('Dine')}
            className={`py-2.5 px-3 rounded-lg text-xs font-semibold tracking-wider flex items-center justify-center gap-2 transition-all ${
              category === 'Dine'
                ? 'bg-gold-gradient text-burgundy-950 shadow-gold-subtle'
                : 'text-ivory/70 hover:text-gold-300'
            }`}
          >
            <UtensilsCrossed className="w-4 h-4" />
            <span>DINE</span>
          </button>

          <button
            onClick={() => setCategory('Celebrate')}
            className={`py-2.5 px-3 rounded-lg text-xs font-semibold tracking-wider flex items-center justify-center gap-2 transition-all ${
              category === 'Celebrate'
                ? 'bg-gold-gradient text-burgundy-950 shadow-gold-subtle'
                : 'text-ivory/70 hover:text-gold-300'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>CELEBRATE</span>
          </button>

          <button
            onClick={() => setCategory('Stay')}
            className={`py-2.5 px-3 rounded-lg text-xs font-semibold tracking-wider flex items-center justify-center gap-2 transition-all ${
              category === 'Stay'
                ? 'bg-gold-gradient text-burgundy-950 shadow-gold-subtle'
                : 'text-ivory/70 hover:text-gold-300'
            }`}
          >
            <BedDouble className="w-4 h-4" />
            <span>STAY</span>
          </button>
        </div>

        {/* Category Specific Actions */}
        <div className="space-y-4">
          {category === 'Dine' && (
            <div className="space-y-3 animate-fadeIn">
              <div className="p-4 rounded-xl bg-burgundy-950/60 border border-gold-500/20">
                <h4 className="font-serif text-lg text-gold-300 mb-1">
                  Dine-In & Food Delivery
                </h4>
                <p className="text-xs text-ivory/70 mb-4 leading-relaxed">
                  Enjoy authentic flavours prepared fresh. Order food online or explore our full restaurant menu.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={BUSINESS_CONFIG.urls.zomato}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-lg bg-burgundy-900/80 border border-gold-500/30 text-ivory hover:border-gold-400 hover:bg-burgundy-800 transition-all group"
                  >
                    <span className="font-bold text-xs tracking-wider">ORDER ON ZOMATO</span>
                    <ExternalLink className="w-4 h-4 text-gold-400 group-hover:translate-x-0.5 transition-transform" />
                  </a>

                  <a
                    href={BUSINESS_CONFIG.urls.swiggy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-lg bg-burgundy-900/80 border border-gold-500/30 text-ivory hover:border-gold-400 hover:bg-burgundy-800 transition-all group"
                  >
                    <span className="font-bold text-xs tracking-wider">ORDER ON SWIGGY</span>
                    <ExternalLink className="w-4 h-4 text-gold-400 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>

                <div className="mt-3 text-center">
                  <button
                    onClick={() => {
                      onClose();
                      onOpenMenu();
                    }}
                    className="text-xs font-semibold text-gold-400 hover:text-gold-300 underline tracking-wider cursor-pointer"
                  >
                    OR VIEW RESTAURANT MENU →
                  </button>
                </div>
              </div>
            </div>
          )}

          {category === 'Celebrate' && (
            <div className="space-y-3 animate-fadeIn">
              <div className="p-4 rounded-xl bg-burgundy-950/60 border border-gold-500/20">
                <h4 className="font-serif text-lg text-gold-300 mb-1">
                  Banquet & Event Bookings
                </h4>
                <p className="text-xs text-ivory/70 mb-4 leading-relaxed">
                  Host grand weddings, birthday parties, or business events with customized setups and catering.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={() => {
                      onClose();
                      onOpenBanquetEnquiry();
                    }}
                    className="flex items-center justify-between p-3.5 rounded-lg bg-gold-gradient text-burgundy-950 font-bold text-xs tracking-wider hover:opacity-95 transition-all"
                  >
                    <span>ENQUIRE BANQUET HALL</span>
                    <Calendar className="w-4 h-4" />
                  </button>

                  <a
                    href={BUSINESS_CONFIG.urls.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-lg bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-900 font-bold text-xs tracking-wider transition-all"
                  >
                    <span>WHATSAPP ENQUIRY</span>
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>

                <div className="mt-3 flex justify-center">
                  <a
                    href={BUSINESS_CONFIG.urls.phoneCall}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-gold-400 hover:text-gold-300"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>CALL FRONT DESK</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {category === 'Stay' && (
            <div className="space-y-3 animate-fadeIn">
              <div className="p-4 rounded-xl bg-burgundy-950/60 border border-gold-500/20">
                <h4 className="font-serif text-lg text-gold-300 mb-1">
                  Hotel Accommodation & Stay
                </h4>
                <p className="text-xs text-ivory/70 mb-4 leading-relaxed">
                  Book peaceful rooms online via Agoda or contact our reservation desk directly.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={BUSINESS_CONFIG.urls.agoda}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-lg bg-gold-gradient text-burgundy-950 font-bold text-xs tracking-wider hover:opacity-95 transition-all group"
                  >
                    <span>BOOK ON AGODA →</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => {
                      onClose();
                      onOpenRoomEnquiry();
                    }}
                    className="flex items-center justify-between p-3.5 rounded-lg bg-burgundy-900/80 border border-gold-500/30 text-ivory hover:border-gold-400 hover:bg-burgundy-800 font-bold text-xs tracking-wider transition-all"
                  >
                    <span>DIRECT ROOM ENQUIRY</span>
                    <BedDouble className="w-4 h-4 text-gold-400" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Note */}
        <div className="mt-6 pt-4 border-t border-gold-500/20 flex items-center justify-between text-[11px] text-ivory/50">
          <span>Need immediate assistance?</span>
          <a href={BUSINESS_CONFIG.urls.phoneCall} className="text-gold-400 hover:underline">
            Call: {BUSINESS_CONFIG.contact.phone}
          </a>
        </div>
      </div>
    </div>
  );
};
