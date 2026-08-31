import React from 'react';
import { MapPin, Phone, MessageSquare, ExternalLink } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessConfig';

export const FooterSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-burgundy-950 border-t border-gold-500/30 text-ivory pt-16 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Brand & Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/src/assets/shubham-logo.png"
                alt="Shubham Regency Logo"
                className="w-12 h-12 object-contain rounded-full border border-gold-400 p-0.5 bg-burgundy-900"
              />
              <div className="flex flex-col">
                <span className="font-display-luxury text-base font-bold text-ivory tracking-widest">
                  SHUBHAM
                </span>
                <span className="font-sans text-[10px] text-gold-400 tracking-[0.25em] font-semibold uppercase">
                  REGENCY
                </span>
              </div>
            </div>

            <p className="text-xs text-ivory/70 font-sans leading-relaxed">
              Where dining, celebration and unforgettable moments come together. Premier hospitality combining restaurant, banquet hall, and luxury accommodations.
            </p>

            <span className="inline-block text-[10px] font-bold tracking-widest text-gold-400 uppercase bg-burgundy-900/60 px-3 py-1 rounded-full border border-gold-500/30">
              DINE · CELEBRATE · STAY
            </span>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg text-gold-300 font-semibold border-b border-gold-500/20 pb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-ivory/70 font-sans">
              <li>
                <button onClick={() => scrollTo('dine')} className="hover:text-gold-300 transition-colors">
                  Dine — Restaurant & Cuisine
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('celebrate')} className="hover:text-gold-300 transition-colors">
                  Celebrate — Banquet Hall & Events
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('stay')} className="hover:text-gold-300 transition-colors">
                  Stay — Guest Accommodations
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('gallery')} className="hover:text-gold-300 transition-colors">
                  Gallery — Photography
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('contact')} className="hover:text-gold-300 transition-colors">
                  Contact — Location & Enquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Useful Partner Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg text-gold-300 font-semibold border-b border-gold-500/20 pb-2">
              Useful Actions
            </h4>
            <ul className="space-y-2 text-xs text-ivory/70 font-sans">
              <li>
                <a
                  href={BUSINESS_CONFIG.urls.zomato}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-300 transition-colors inline-flex items-center gap-1"
                >
                  <span>Order on Zomato</span>
                  <ExternalLink className="w-3 h-3 text-gold-400" />
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS_CONFIG.urls.swiggy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-300 transition-colors inline-flex items-center gap-1"
                >
                  <span>Order on Swiggy</span>
                  <ExternalLink className="w-3 h-3 text-gold-400" />
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS_CONFIG.urls.agoda}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-300 transition-colors inline-flex items-center gap-1"
                >
                  <span>Book on Agoda</span>
                  <ExternalLink className="w-3 h-3 text-gold-400" />
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS_CONFIG.urls.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-300 transition-colors inline-flex items-center gap-1"
                >
                  <span>Google Maps Location</span>
                  <MapPin className="w-3 h-3 text-gold-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg text-gold-300 font-semibold border-b border-gold-500/20 pb-2">
              Contact Desk
            </h4>
            <ul className="space-y-2 text-xs text-ivory/70 font-sans">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_CONFIG.contact.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={BUSINESS_CONFIG.urls.phoneCall} className="hover:text-gold-300">
                  {BUSINESS_CONFIG.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-gold-400 shrink-0" />
                <a
                  href={BUSINESS_CONFIG.urls.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-300"
                >
                  WhatsApp Enquiry
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-gold-500/20 flex flex-col sm:flex-row items-center justify-between text-[11px] text-ivory/50 space-y-2 sm:space-y-0">
          <p>© {new Date().getFullYear()} Shubham Regency. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted for Shubham Regency Hospitality</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
