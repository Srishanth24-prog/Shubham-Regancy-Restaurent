import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryItem } from '../../types';
import { PlaceholderImage } from '../common/PlaceholderImage';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: GalleryItem[];
  currentIndex: number;
  onNavigate: (newIndex: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  items,
  currentIndex,
  onNavigate,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, items.length]);

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex];

  const handlePrev = () => {
    const prev = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    onNavigate(prev);
  };

  const handleNext = () => {
    const next = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    onNavigate(next);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl animate-fadeIn">
      {/* Top Bar with counter & close button */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
        <div className="flex items-center gap-3">
          <span className="font-display-luxury text-gold-400 text-xs tracking-widest uppercase bg-burgundy-950/80 px-3 py-1 rounded-full border border-gold-500/30">
            {currentItem.category} ({currentIndex + 1} / {items.length})
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-3 rounded-full bg-burgundy-900/80 border border-gold-500/40 text-gold-400 hover:text-ivory hover:bg-burgundy-800 transition-all"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Prev / Next Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-burgundy-950/80 border border-gold-500/40 text-gold-400 hover:text-ivory hover:scale-110 transition-all"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-burgundy-950/80 border border-gold-500/40 text-gold-400 hover:text-ivory hover:scale-110 transition-all"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Content Area */}
      <div className="max-w-4xl w-full flex flex-col items-center justify-center space-y-4 z-10 px-8">
        <div className="relative w-full rounded-2xl overflow-hidden border border-gold-500/40 shadow-2xl bg-charcoal-card max-h-[75vh] flex items-center justify-center">
          {currentItem.isPlaceholderImage ? (
            <PlaceholderImage
              alt={currentItem.title}
              category={currentItem.category}
              isPlaceholder={true}
              aspectRatio="aspect-video"
              className="w-full h-full min-h-[350px]"
            />
          ) : (
            <img
              src={currentItem.image}
              alt={currentItem.title}
              className="w-full max-h-[70vh] object-contain"
            />
          )}
        </div>

        {/* Caption */}
        <div className="text-center max-w-xl space-y-1">
          <h3 className="font-serif text-xl sm:text-2xl text-ivory">
            {currentItem.title}
          </h3>
          <p className="text-xs text-ivory/70 font-sans leading-relaxed">
            {currentItem.caption}
          </p>
        </div>
      </div>
    </div>
  );
};
