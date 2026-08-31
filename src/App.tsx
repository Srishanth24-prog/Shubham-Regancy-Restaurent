import { useState, useEffect } from 'react';
import { FloatingNavbar } from './components/common/FloatingNavbar';
import { HeroSection } from './sections/01_Hero';
import { ExperiencesSection } from './sections/02_Experiences';
import { StorySection } from './sections/03_Story';
import { RestaurantSection } from './sections/04_Restaurant';
import { BanquetSection } from './sections/05_Banquet';
import { RoomsSection } from './sections/06_Rooms';
import { GallerySection } from './sections/07_Gallery';
import { LocationContactSection } from './sections/08_LocationContact';
import { FinalCTASection } from './sections/09_FinalCTA';
import { FooterSection } from './sections/10_Footer';

// Modals
import { UnifiedActionModal } from './components/modals/UnifiedActionModal';
import { MenuModal } from './components/modals/MenuModal';
import { BanquetEnquiryModal } from './components/modals/BanquetEnquiryModal';
import { RoomEnquiryModal } from './components/modals/RoomEnquiryModal';
import { LightboxModal } from './components/modals/LightboxModal';

// Data
import { GALLERY_DATA } from './data/galleryData';

export function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Modal States
  const [unifiedModalOpen, setUnifiedModalOpen] = useState(false);
  const [unifiedModalCategory, setUnifiedModalCategory] = useState<'Dine' | 'Celebrate' | 'Stay'>('Dine');

  const [menuModalOpen, setMenuModalOpen] = useState(false);

  const [banquetModalOpen, setBanquetModalOpen] = useState(false);
  const [banquetModalEventType, setBanquetModalEventType] = useState('Wedding Ceremony');

  const [roomModalOpen, setRoomModalOpen] = useState(false);
  const [roomModalRoomName, setRoomModalRoomName] = useState('Executive Deluxe Room');

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Scroll active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['hero', 'experiences', 'story', 'dine', 'celebrate', 'stay', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openActionModal = (service?: 'Dine' | 'Celebrate' | 'Stay') => {
    if (service) {
      setUnifiedModalCategory(service);
    }
    setUnifiedModalOpen(true);
  };

  const openBanquetModal = (eventType?: string) => {
    if (eventType) setBanquetModalEventType(eventType);
    setBanquetModalOpen(true);
  };

  const openRoomModal = (roomName?: string) => {
    if (roomName) setRoomModalRoomName(roomName);
    setRoomModalOpen(true);
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-charcoal text-ivory flex flex-col font-sans selection:bg-gold-500 selection:text-burgundy-950">
      {/* Floating Luxury Capsule Navbar */}
      <FloatingNavbar
        activeSection={activeSection}
        onOpenActionModal={openActionModal}
      />

      {/* Main Homepage Flow */}
      <main className="flex-1">
        {/* 01 — Hero */}
        <div id="hero">
          <HeroSection
            onExploreClick={() => scrollTo('experiences')}
            onGalleryClick={() => scrollTo('gallery')}
          />
        </div>

        {/* 02 — The Shubham Experience */}
        <ExperiencesSection
          onSelectDine={() => scrollTo('dine')}
          onSelectCelebrate={() => scrollTo('celebrate')}
          onSelectStay={() => scrollTo('stay')}
        />

        {/* 03 — Our Story */}
        <StorySection onContactClick={() => scrollTo('contact')} />

        {/* 04 — Restaurant */}
        <RestaurantSection onOpenMenu={() => setMenuModalOpen(true)} />

        {/* 05 — Banquet Hall */}
        <BanquetSection onOpenEnquiry={openBanquetModal} />

        {/* 06 — Rooms */}
        <RoomsSection onOpenRoomEnquiry={openRoomModal} />

        {/* 07 — Gallery */}
        <GallerySection onOpenLightbox={openLightbox} />

        {/* 08 — Location & Contact */}
        <LocationContactSection />

        {/* 09 — Final CTA */}
        <FinalCTASection onOpenActionModal={() => openActionModal('Dine')} />
      </main>

      {/* 10 — Footer */}
      <FooterSection />

      {/* Interactive Modals */}
      <UnifiedActionModal
        isOpen={unifiedModalOpen}
        onClose={() => setUnifiedModalOpen(false)}
        initialCategory={unifiedModalCategory}
        onOpenBanquetEnquiry={() => openBanquetModal('General Event')}
        onOpenRoomEnquiry={() => openRoomModal('Executive Deluxe Room')}
        onOpenMenu={() => setMenuModalOpen(true)}
      />

      <MenuModal
        isOpen={menuModalOpen}
        onClose={() => setMenuModalOpen(false)}
      />

      <BanquetEnquiryModal
        isOpen={banquetModalOpen}
        onClose={() => setBanquetModalOpen(false)}
        defaultEvent={banquetModalEventType}
      />

      <RoomEnquiryModal
        isOpen={roomModalOpen}
        onClose={() => setRoomModalOpen(false)}
        roomName={roomModalRoomName}
      />

      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={GALLERY_DATA}
        currentIndex={lightboxIndex}
        onNavigate={(newIndex) => setLightboxIndex(newIndex)}
      />
    </div>
  );
}
