import React, { useState } from 'react';
import { X, CheckCircle2, ExternalLink } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/businessConfig';
import { GoldButton } from '../common/GoldButton';

interface RoomEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  roomName?: string;
}

export const RoomEnquiryModal: React.FC<RoomEnquiryModalProps> = ({
  isOpen,
  onClose,
  roomName = 'Executive Deluxe Room',
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    roomType: roomName,
    checkInDate: '',
    checkOutDate: '',
    guests: '1 Guest',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-charcoal-card border border-gold-500/40 rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden text-ivory">
        {/* Header Bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gold-gradient" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-gold-400 hover:text-ivory hover:bg-burgundy-900/60 transition-colors"
          aria-label="Close room modal"
        >
          <X className="w-6 h-6" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-gold-500/20 border border-gold-400 flex items-center justify-center text-gold-400 mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl text-ivory">ROOM ENQUIRY SENT</h3>
            <p className="text-xs text-ivory/70 max-w-sm mx-auto leading-relaxed">
              Thank you for contacting Shubham Regency Desk. We have received your request for {formData.roomType} and our team will contact you shortly to assist with your booking.
            </p>
            <div className="pt-4">
              <GoldButton size="sm" onClick={onClose}>
                CLOSE WINDOW
              </GoldButton>
            </div>
          </div>
        ) : (
          <div>
            <div className="text-center mb-6">
              <span className="font-display-luxury text-gold-400 text-xs tracking-[0.3em] uppercase block mb-1">
                STAY AT SHUBHAM REGENCY
              </span>
              <h3 className="font-serif text-2xl text-ivory">
                ROOM RESERVATION ENQUIRY
              </h3>
              <p className="text-xs text-ivory/60 mt-1">
                Direct booking assistance for comfortable accommodation.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold tracking-widest text-gold-300 uppercase mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2.5 rounded-lg bg-burgundy-950/80 border border-gold-500/30 text-ivory text-xs focus:outline-none focus:border-gold-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold tracking-widest text-gold-300 uppercase mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Enter phone number"
                    className="w-full px-4 py-2.5 rounded-lg bg-burgundy-950/80 border border-gold-500/30 text-ivory text-xs focus:outline-none focus:border-gold-400"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold tracking-widest text-gold-300 uppercase mb-1">
                    Room Category
                  </label>
                  <input
                    type="text"
                    readOnly
                    value={formData.roomType}
                    className="w-full px-4 py-2.5 rounded-lg bg-burgundy-950/40 border border-gold-500/20 text-gold-300 text-xs focus:outline-none cursor-not-allowed"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold tracking-widest text-gold-300 uppercase mb-1">
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    value={formData.checkInDate}
                    onChange={(e) => setFormData({ ...formData, checkInDate: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-burgundy-950/80 border border-gold-500/30 text-ivory text-xs focus:outline-none focus:border-gold-400"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold tracking-widest text-gold-300 uppercase mb-1">
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    value={formData.checkOutDate}
                    onChange={(e) => setFormData({ ...formData, checkOutDate: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-burgundy-950/80 border border-gold-500/30 text-ivory text-xs focus:outline-none focus:border-gold-400"
                  />
                </div>
              </div>

              <div className="pt-2">
                <GoldButton type="submit" variant="primary" className="w-full">
                  SEND DIRECT ENQUIRY →
                </GoldButton>
              </div>
            </form>

            <div className="mt-4 pt-3 border-t border-gold-500/20 flex items-center justify-between text-xs text-ivory/60">
              <span>Prefer Agoda online booking?</span>
              <a
                href={BUSINESS_CONFIG.urls.agoda}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-400 hover:underline flex items-center gap-1 font-semibold"
              >
                <span>BOOK ON AGODA</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
