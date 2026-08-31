import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { GALLERY_DATA } from '../data/galleryData';
import { SectionHeader } from '../components/common/SectionHeader';
import { PlaceholderImage } from '../components/common/PlaceholderImage';

interface GalleryProps {
  onOpenLightbox: (index: number) => void;
}

export const GallerySection: React.FC<GalleryProps> = ({ onOpenLightbox }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Property', 'Restaurant', 'Food', 'Banquet', 'Rooms'];

  const filteredItems =
    activeCategory === 'All'
      ? GALLERY_DATA
      : GALLERY_DATA.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-28 lg:py-32 px-4 md:px-8 bg-burgundy-950/70 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        <SectionHeader
          number="07 — PHOTOGRAPHY"
          title="A GLIMPSE OF SHUBHAM REGENCY"
          subtitle="Explore our dining, banquet spaces, guest rooms & property facade"
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 max-w-3xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-widest transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-gold-gradient text-burgundy-950 shadow-gold-subtle scale-105'
                  : 'bg-burgundy-950/90 text-ivory/80 border border-gold-500/30 hover:text-gold-300 hover:border-gold-400'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Visual Editorial Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredItems.map((item) => {
            const originalIndex = GALLERY_DATA.findIndex((g) => g.id === item.id);

            return (
              <div
                key={item.id}
                onClick={() => onOpenLightbox(originalIndex)}
                className="group relative rounded-2xl overflow-hidden border border-gold-500/40 bg-charcoal-card shadow-xl cursor-pointer hover:border-gold-400 hover:shadow-gold-glow transition-all duration-500"
              >
                {item.isPlaceholderImage ? (
                  <PlaceholderImage
                    alt={item.title}
                    category={item.category}
                    isPlaceholder={true}
                    aspectRatio="aspect-[4/3]"
                  />
                ) : (
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                )}

                {/* Clean Hover Detail Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950/95 via-burgundy-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-between">
                  <div className="flex justify-end">
                    <div className="w-9 h-9 rounded-full bg-gold-500/20 border border-gold-400 flex items-center justify-center text-gold-300 shadow-md">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-sans font-bold tracking-widest text-gold-400 uppercase block">
                      {item.category}
                    </span>
                    <h4 className="font-serif text-lg text-ivory font-semibold">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
