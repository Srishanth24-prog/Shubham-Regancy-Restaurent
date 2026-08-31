import React, { useState, useEffect } from 'react';
import { MapPin, Menu, X, UtensilsCrossed, Calendar, BedDouble, ChevronRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/businessConfig';
import { GoldButton } from './GoldButton';

interface FloatingNavbarProps {
  activeSection: string;
  onOpenActionModal: (service?: 'Dine' | 'Celebrate' | 'Stay') => void;
}

export const FloatingNavbar: React.FC<FloatingNavbarProps> = ({
  activeSection,
  onOpenActionModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'experiences', label: 'EXPERIENCES' },
    { id: 'dine', label: 'DINE' },
    { id: 'celebrate', label: 'CELEBRATE' },
    { id: 'stay', label: 'STAY' },
    { id: 'gallery', label: 'GALLERY' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8 flex justify-center pointer-events-none">
      <nav
        className={`pointer-events-auto transition-all duration-500 ease-out flex items-center justify-between w-full max-w-6xl rounded-full px-5 py-2.5 md:px-7 md:py-3 ${
          isScrolled
            ? 'bg-burgundy-950/95 border border-gold-400/60 shadow-capsule backdrop-blur-xl scale-[0.98]'
            : 'bg-burgundy-950/60 border border-gold-500/40 shadow-lg backdrop-blur-md'
        }`}
      >
        {/* Brand & Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 group text-left cursor-pointer"
        >
          <div className="relative w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border border-gold-400 p-0.5 bg-burgundy-950 transition-transform duration-300 group-hover:scale-105 shadow-gold-subtle">
            <img
              src="/src/assets/shubham-logo.png"
              alt="Shubham Regency Logo"
              className="w-full h-full object-contain rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display-luxury text-sm md:text-base font-bold text-ivory tracking-widest leading-none group-hover:text-gold-300 transition-colors">
              SHUBHAM
            </span>
            <span className="font-sans text-[9px] md:text-[10px] text-gold-400 tracking-[0.25em] font-bold uppercase leading-tight">
              REGENCY
            </span>
          </div>
        </button>

        {/* Desktop Nav Links — Refined Spacing */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`relative text-xs font-sans font-bold tracking-[0.15em] transition-all duration-300 py-1 uppercase cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'text-gold-300'
                    : 'text-ivory/80 hover:text-gold-300'
                }`}
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shadow-gold-glow animate-pulse" />
                )}
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold-gradient rounded-full shadow-gold-subtle" />
                )}
              </button>
            );
          })}
        </div>

        {/* Action CTAs & Google Maps Location Icon */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={BUSINESS_CONFIG.urls.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            title="Directions on Google Maps"
            className="w-9 h-9 rounded-full bg-burgundy-900/80 border border-gold-500/50 flex items-center justify-center text-gold-400 hover:text-gold-200 hover:border-gold-400 hover:bg-burgundy-800 transition-all duration-300 shadow-gold-subtle"
          >
            <MapPin className="w-4 h-4" />
          </a>

          <GoldButton
            size="sm"
            variant="primary"
            onClick={() => onOpenActionModal()}
          >
            BOOK / ORDER
          </GoldButton>
        </div>

        {/* Mobile Navbar Buttons */}
        <div className="flex sm:hidden items-center gap-2">
          <GoldButton
            size="sm"
            variant="primary"
            className="!px-3 !py-1.5 !text-[10px]"
            onClick={() => onOpenActionModal()}
          >
            BOOK
          </GoldButton>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full text-gold-400 hover:text-ivory bg-burgundy-900/80 border border-gold-500/40"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-0 z-40 bg-burgundy-950/98 backdrop-blur-2xl p-6 flex flex-col justify-between sm:hidden animate-fadeIn pointer-events-auto border-b border-gold-500/40">
          <div className="flex items-center justify-between pt-4 pb-6 border-b border-gold-500/20">
            <div className="flex items-center gap-3">
              <img
                src="/src/assets/shubham-logo.png"
                alt="Shubham Regency"
                className="w-10 h-10 object-contain rounded-full border border-gold-400"
              />
              <div className="flex flex-col">
                <span className="font-display-luxury text-base font-bold text-ivory tracking-widest">
                  SHUBHAM
                </span>
                <span className="text-[10px] text-gold-400 tracking-widest uppercase">
                  REGENCY
                </span>
              </div>
            </div>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full text-gold-400 bg-burgundy-900 border border-gold-500/40"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col gap-4 py-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="flex items-center justify-between text-left text-lg font-serif text-ivory hover:text-gold-300 py-2.5 border-b border-gold-500/10"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-gold-400" />
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-4 border-t border-gold-500/20">
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenActionModal('Dine');
                }}
                className="p-3 rounded-lg bg-burgundy-900/60 border border-gold-500/30 flex flex-col items-center gap-1 text-center text-xs font-semibold text-gold-300"
              >
                <UtensilsCrossed className="w-4 h-4" />
                <span>Dine</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenActionModal('Celebrate');
                }}
                className="p-3 rounded-lg bg-burgundy-900/60 border border-gold-500/30 flex flex-col items-center gap-1 text-center text-xs font-semibold text-gold-300"
              >
                <Calendar className="w-4 h-4" />
                <span>Celebrate</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenActionModal('Stay');
                }}
                className="p-3 rounded-lg bg-burgundy-900/60 border border-gold-500/30 flex flex-col items-center gap-1 text-center text-xs font-semibold text-gold-300"
              >
                <BedDouble className="w-4 h-4" />
                <span>Stay</span>
              </button>
            </div>

            <a
              href={BUSINESS_CONFIG.urls.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-3.5 rounded-full bg-burgundy-900 border border-gold-500/40 text-gold-300 text-xs font-bold tracking-wider uppercase"
            >
              <MapPin className="w-4 h-4" />
              <span>GET DIRECTIONS ON GOOGLE MAPS</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
