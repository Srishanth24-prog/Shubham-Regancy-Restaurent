import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Clock, Send, CheckCircle2 } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { SectionHeader } from '../components/common/SectionHeader';
import { GoldButton } from '../components/common/GoldButton';

export const LocationContactSection: React.FC = () => {
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'General',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <section id="contact" className="py-28 lg:py-32 px-4 md:px-8 bg-charcoal relative">
      <div className="max-w-7xl mx-auto space-y-16">
        <SectionHeader
          number="08 — LOCATION & CONTACT"
          title="WE'D LOVE TO WELCOME YOU"
          subtitle="Reach out to us for reservations, banquet events, dining or directions"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Easy-to-Scan Location & Quick Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Location Card */}
            <div className="p-8 rounded-3xl bg-burgundy-950/90 border border-gold-500/40 shadow-xl space-y-5">
              <div className="flex items-center gap-4 text-gold-300">
                <div className="w-12 h-12 rounded-full bg-burgundy-900 border border-gold-400 flex items-center justify-center shadow-gold-subtle">
                  <MapPin className="w-6 h-6 text-gold-400" />
                </div>
                <div>
                  <h4 className="font-serif text-2xl text-ivory">OUR LOCATION</h4>
                  <span className="text-xs text-gold-400 font-sans tracking-widest uppercase font-semibold">
                    SHUBHAM REGENCY FACADE
                  </span>
                </div>
              </div>

              <div className="text-sm text-ivory/85 space-y-1.5 font-sans leading-relaxed">
                <p className="font-bold text-ivory text-base">{BUSINESS_CONFIG.contact.address}</p>
                <p>{BUSINESS_CONFIG.contact.city}</p>
                <p className="text-gold-300 font-medium">{BUSINESS_CONFIG.contact.locationLandmark}</p>
              </div>

              <div className="pt-2">
                <GoldButton
                  size="md"
                  variant="primary"
                  className="w-full shadow-gold-subtle"
                  href={BUSINESS_CONFIG.urls.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="w-4 h-4" />
                  <span>GET DIRECTIONS ON GOOGLE MAPS →</span>
                </GoldButton>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={BUSINESS_CONFIG.urls.phoneCall}
                className="flex items-center justify-center gap-2.5 p-4 sm:p-5 rounded-2xl bg-burgundy-900/90 border border-gold-500/40 text-ivory hover:border-gold-400 hover:bg-burgundy-800 transition-all font-sans font-bold text-xs tracking-wider uppercase text-center shadow-md"
              >
                <Phone className="w-4 h-4 text-gold-400" />
                <span>CALL NOW</span>
              </a>

              <a
                href={BUSINESS_CONFIG.urls.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 p-4 sm:p-5 rounded-2xl bg-emerald-950/90 border border-emerald-500/50 text-emerald-300 hover:bg-emerald-900 transition-all font-sans font-bold text-xs tracking-wider uppercase text-center shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WHATSAPP</span>
              </a>
            </div>

            {/* Operating Hours Summary */}
            <div className="p-6 rounded-3xl bg-charcoal-card border border-gold-500/30 space-y-3 text-sm text-ivory/85">
              <div className="flex items-center gap-2 text-gold-300 font-serif font-semibold text-base">
                <Clock className="w-5 h-5" />
                <span>OPERATING HOURS SUMMARY</span>
              </div>
              <div className="space-y-1.5 font-sans leading-relaxed">
                <p>• Restaurant Dining: {BUSINESS_CONFIG.hours.restaurant.timing}</p>
                <p>• Banquet Desk: {BUSINESS_CONFIG.hours.banquet.timing}</p>
                <p>• Hotel Front Desk: {BUSINESS_CONFIG.hours.rooms.desk}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Simple Enquiry Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-burgundy-950/50 border border-gold-500/40 shadow-2xl">
            {formSent ? (
              <div className="py-16 text-center space-y-5">
                <div className="w-16 h-16 rounded-full bg-gold-500/20 border border-gold-400 flex items-center justify-center text-gold-400 mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl text-ivory">MESSAGE RECEIVED</h3>
                <p className="text-sm text-ivory/80 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to Shubham Regency. We have received your inquiry and our desk team will respond promptly.
                </p>
                <div className="pt-4">
                  <GoldButton size="sm" onClick={() => setFormSent(false)}>
                    SEND ANOTHER MESSAGE
                  </GoldButton>
                </div>
              </div>
            ) : (
              <div>
                <span className="text-xs font-sans font-bold tracking-[0.35em] text-gold-400 uppercase block mb-1">
                  DIRECT ENQUIRY FORM
                </span>
                <h3 className="font-serif text-3xl text-ivory mb-6 font-normal">
                  Send Us A Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold tracking-widest text-gold-300 uppercase mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 rounded-xl bg-burgundy-950/90 border border-gold-500/40 text-ivory text-sm focus:outline-none focus:border-gold-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold tracking-widest text-gold-300 uppercase mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Enter phone number"
                        className="w-full px-4 py-3 rounded-xl bg-burgundy-950/90 border border-gold-500/40 text-ivory text-sm focus:outline-none focus:border-gold-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold tracking-widest text-gold-300 uppercase mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Enter email address"
                        className="w-full px-4 py-3 rounded-xl bg-burgundy-950/90 border border-gold-500/40 text-ivory text-sm focus:outline-none focus:border-gold-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold tracking-widest text-gold-300 uppercase mb-1.5">
                        Service Interest
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-burgundy-950/90 border border-gold-500/40 text-ivory text-sm focus:outline-none focus:border-gold-400 transition-colors"
                      >
                        <option value="General">General Inquiry</option>
                        <option value="Dine">Restaurant Dining</option>
                        <option value="Celebrate">Banquet / Events</option>
                        <option value="Stay">Hotel Room Stay</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold tracking-widest text-gold-300 uppercase mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your questions or event notes here..."
                      className="w-full px-4 py-3 rounded-xl bg-burgundy-950/90 border border-gold-500/40 text-ivory text-sm focus:outline-none focus:border-gold-400 resize-none transition-colors"
                    />
                  </div>

                  <div className="pt-2">
                    <GoldButton type="submit" variant="primary" className="w-full shadow-gold-subtle">
                      <Send className="w-4 h-4" />
                      <span>SEND ENQUIRY →</span>
                    </GoldButton>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
