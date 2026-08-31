import React, { useState } from 'react';
import { X, CheckCircle2, MessageSquare } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/businessConfig';
import { GoldButton } from '../common/GoldButton';

interface BanquetEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultEvent?: string;
}

export const BanquetEnquiryModal: React.FC<BanquetEnquiryModalProps> = ({
  isOpen,
  onClose,
  defaultEvent = 'Wedding Ceremony',
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: defaultEvent,
    eventDate: '',
    guestCount: '',
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
          aria-label="Close enquiry modal"
        >
          <X className="w-6 h-6" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-gold-500/20 border border-gold-400 flex items-center justify-center text-gold-400 mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl text-ivory">ENQUIRY RECEIVED</h3>
            <p className="text-xs text-ivory/70 max-w-sm mx-auto leading-relaxed">
              Thank you for contacting Shubham Regency Banquet Events team. We have received your enquiry for {formData.eventType || 'your event'} and our team will get back to you shortly.
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
                CELEBRATE AT SHUBHAM REGENCY
              </span>
              <h3 className="font-serif text-2xl text-ivory">
                BANQUET HALL ENQUIRY
              </h3>
              <p className="text-xs text-ivory/60 mt-1">
                Fill in your details below for customized event planning & packages.
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
                  placeholder="Enter your name"
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
                    Event Type
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-burgundy-950/80 border border-gold-500/30 text-ivory text-xs focus:outline-none focus:border-gold-400"
                  >
                    <option value="Wedding Ceremony">Wedding Ceremony</option>
                    <option value="Reception Party">Reception Party</option>
                    <option value="Engagement Ceremony">Engagement Ceremony</option>
                    <option value="Birthday Celebration">Birthday Celebration</option>
                    <option value="Corporate Seminar">Corporate Seminar</option>
                    <option value="Other Function">Other Function</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold tracking-widest text-gold-300 uppercase mb-1">
                    Tentative Date
                  </label>
                  <input
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-burgundy-950/80 border border-gold-500/30 text-ivory text-xs focus:outline-none focus:border-gold-400"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold tracking-widest text-gold-300 uppercase mb-1">
                    Estimated Guests
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 100 - 300"
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-burgundy-950/80 border border-gold-500/30 text-ivory text-xs focus:outline-none focus:border-gold-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold tracking-widest text-gold-300 uppercase mb-1">
                  Additional Notes
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Mention catering or specific setup requirements..."
                  className="w-full px-4 py-2.5 rounded-lg bg-burgundy-950/80 border border-gold-500/30 text-ivory text-xs focus:outline-none focus:border-gold-400 resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <GoldButton type="submit" variant="primary" className="w-full">
                  SUBMIT BANQUET ENQUIRY →
                </GoldButton>
              </div>
            </form>

            <div className="mt-4 pt-3 border-t border-gold-500/20 flex items-center justify-between text-xs text-ivory/60">
              <span>Or connect instantly via WhatsApp:</span>
              <a
                href={BUSINESS_CONFIG.urls.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:underline flex items-center gap-1 font-semibold"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
