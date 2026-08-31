import type { RoomCategory } from '../types';

export const ROOMS_DATA: RoomCategory[] = [
  {
    id: 'deluxe-room',
    name: 'Executive Deluxe Room',
    tag: 'COMFORT & ELEGANCE',
    description: 'Refined accommodation designed for business and leisure travellers seeking modern comfort and tranquility.',
    features: [
      'Air Conditioning & Climate Control',
      'High-Speed Wi-Fi',
      'LED Smart TV',
      'En-suite Bathroom with Modern Amenities',
      'Work Desk & Ergonomic Seating',
      '24/7 Room Service & Housekeeping',
    ],
    image: '/assets/placeholders/room-deluxe.jpg',
    isPlaceholderImage: true,
  },
  {
    id: 'premium-suite',
    name: 'Luxury Regency Suite',
    tag: 'SPACIOUS & LUXURIOUS',
    description: 'Expansive suite featuring premium furnishings, dedicated living area, and elevated luxury touches.',
    features: [
      'Spacious Bedroom with King-size Bed',
      'Separate Seating / Living Area',
      'Premium Toiletries & Plush Linen',
      'Complimentary Bottled Water & Tea/Coffee Maker',
      'In-room Safe',
      'Daily Express Laundry Service',
    ],
    image: '/assets/placeholders/room-suite.jpg',
    isPlaceholderImage: true,
  },
  {
    id: 'family-room',
    name: 'Family Executive Suite',
    tag: 'FAMILY & GROUP STAY',
    description: 'Generously proportioned room tailored for families requiring modern hospitality and restful ambiance.',
    features: [
      'Multiple Bed Configurations',
      'Spacious Seating Area',
      'Flat-screen Television',
      'In-room Dining Facilities',
      'Modern Attached Bathrooms',
      '24-Hour Front Desk Support',
    ],
    image: '/assets/placeholders/room-family.jpg',
    isPlaceholderImage: true,
  },
];
