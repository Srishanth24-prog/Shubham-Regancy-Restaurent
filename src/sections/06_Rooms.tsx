import React from 'react';
import { CheckCircle2, ExternalLink, ShieldCheck, Clock, Wifi } from 'lucide-react';
import { ROOMS_DATA } from '../data/roomsData';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { SectionHeader } from '../components/common/SectionHeader';
import { PlaceholderImage } from '../components/common/PlaceholderImage';
import { GoldButton } from '../components/common/GoldButton';

interface RoomsProps {
  onOpenRoomEnquiry: (roomName?: string) => void;
}

export const RoomsSection: React.FC<RoomsProps> = ({ onOpenRoomEnquiry }) => {
  return (
    <section id="stay" className="py-28 lg:py-32 px-4 md:px-8 bg-charcoal relative">
      <div className="max-w-7xl mx-auto space-y-16">
        <SectionHeader
          number="06 — ACCOMMODATIONS"
          title="STAY"
          subtitle="Comfort designed around you."
        />

        {/* Room Showcase Grid with Larger Card Viewports */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
          {ROOMS_DATA.map((room) => (
            <div
              key={room.id}
              className="rounded-3xl bg-charcoal-card/95 border border-gold-500/40 overflow-hidden flex flex-col justify-between hover:border-gold-400 hover:shadow-gold-glow transition-all duration-300 group"
            >
              <div className="p-8 space-y-5">
                <PlaceholderImage
                  alt={room.name}
                  category="ACCOMMODATION"
                  isPlaceholder={true}
                  aspectRatio="aspect-[16/11]"
                  className="rounded-2xl border border-gold-500/30 shadow-md"
                />

                <div>
                  <span className="text-xs font-sans font-bold tracking-[0.25em] text-gold-400 uppercase block mb-1">
                    {room.tag}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-ivory font-semibold group-hover:text-gold-300 transition-colors">
                    {room.name}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-ivory/80 font-sans leading-relaxed">
                  {room.description}
                </p>

                {/* Features */}
                <div className="space-y-2.5 pt-4 border-t border-gold-500/15">
                  {room.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-sm text-ivory/90 font-sans">
                      <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Room Actions */}
              <div className="p-8 pt-0 space-y-3">
                <GoldButton
                  size="md"
                  variant="primary"
                  className="w-full shadow-gold-subtle"
                  href={BUSINESS_CONFIG.urls.agoda}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>BOOK ON AGODA →</span>
                  <ExternalLink className="w-4 h-4" />
                </GoldButton>

                <GoldButton
                  size="sm"
                  variant="outline"
                  className="w-full"
                  onClick={() => onOpenRoomEnquiry(room.name)}
                >
                  <span>DIRECT ROOM ENQUIRY</span>
                </GoldButton>
              </div>
            </div>
          ))}
        </div>

        {/* Stay Information Summary Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-8 rounded-3xl bg-burgundy-950/90 border border-gold-500/40 text-center shadow-xl">
          <div className="space-y-2">
            <Clock className="w-6 h-6 text-gold-400 mx-auto" />
            <span className="text-xs font-bold text-gold-300 tracking-wider block uppercase font-sans">
              CHECK-IN / CHECK-OUT
            </span>
            <p className="text-sm text-ivory/80">
              Check-in: {BUSINESS_CONFIG.hours.rooms.checkIn} | Check-out: {BUSINESS_CONFIG.hours.rooms.checkOut}
            </p>
          </div>

          <div className="space-y-2">
            <Wifi className="w-6 h-6 text-gold-400 mx-auto" />
            <span className="text-xs font-bold text-gold-300 tracking-wider block uppercase font-sans">
              IN-ROOM AMENITIES
            </span>
            <p className="text-sm text-ivory/80">
              High-Speed Wi-Fi, LED TV, Air Conditioning, Housekeeping
            </p>
          </div>

          <div className="space-y-2">
            <ShieldCheck className="w-6 h-6 text-gold-400 mx-auto" />
            <span className="text-xs font-bold text-gold-300 tracking-wider block uppercase font-sans">
              FRONT DESK SERVICE
            </span>
            <p className="text-sm text-ivory/80">
              {BUSINESS_CONFIG.hours.rooms.desk}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
