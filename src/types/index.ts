export interface Section {
  id: string;
  label: string;
}

export interface RoomCategory {
  id: string;
  name: string;
  description: string;
  tag: string;
  features: string[];
  image: string;
  isPlaceholderImage: boolean;
}

export interface BanquetCategory {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  suitableFor: string[];
  features: string[];
  image: string;
  isPlaceholderImage: boolean;
}

export interface MenuItem {
  id: string;
  name: string;
  category: 'Starters' | 'Main Course' | 'Biryanis' | 'Breads & Rice' | 'Desserts & Beverages';
  type: 'veg' | 'non-veg';
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Property' | 'Restaurant' | 'Food' | 'Banquet' | 'Rooms';
  image: string;
  caption: string;
  isPlaceholderImage: boolean;
}

export interface ContactFormInput {
  name: string;
  phone: string;
  email?: string;
  service: 'Dine' | 'Celebrate' | 'Stay' | 'General';
  message: string;
  date?: string;
  guestCount?: string;
}
