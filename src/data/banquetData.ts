import type { BanquetCategory } from '../types';

export const BANQUET_DATA: BanquetCategory[] = [
  {
    id: 'weddings',
    name: 'Weddings & Grand Receptions',
    subtitle: 'CELEBRATE YOUR SPECIAL DAY IN ELEGANCE',
    description: 'A grand setting crafted for magnificent wedding ceremonies and wedding receptions, complete with customized seating and festive decor setups.',
    suitableFor: ['Wedding Ceremonies', 'Reception Parties', 'Sangeet & Mehendi Functions'],
    features: [
      'Flexible Hall Layouts & Stage Setups',
      'Dedicated Dining & Catering Area',
      'Advanced Lighting & Audio Setup',
      'Air-Conditioned Comfort',
      'Dedicated Event Coordination Support',
    ],
    image: '/assets/placeholders/banquet-wedding.jpg',
    isPlaceholderImage: true,
  },
  {
    id: 'engagements-birthdays',
    name: 'Engagements & Private Parties',
    subtitle: 'MEMORABLE GATHERINGS WITH LOVED ONES',
    description: 'Ideal space for intimate engagement ceremonies, milestone birthday celebrations, anniversary parties, and family reunions.',
    suitableFor: ['Engagement Ceremonies', 'Birthday Parties', 'Anniversary Celebrations', 'Family Gatherings'],
    features: [
      'Customizable Seating Configurations',
      'Special Banquet Dining Menus',
      'Ambient Lighting & Music System',
      'Stage & Backdrop Options',
      'On-site Hospitality Staff',
    ],
    image: '/assets/placeholders/banquet-party.jpg',
    isPlaceholderImage: true,
  },
  {
    id: 'corporate-events',
    name: 'Corporate Conferences & Meetings',
    subtitle: 'PROFESSIONAL VENUE FOR BUSINESS EVENTS',
    description: 'Equipped for corporate seminars, product launches, executive meetings, and business banquets.',
    suitableFor: ['Corporate Seminars', 'Product Launches', 'Business Luncheons', 'Executive Meetings'],
    features: [
      'High-Speed Wi-Fi & AV Presentation Setup',
      'Cluster, Theatre, or U-Shape Seating',
      'Executive Buffet & High-Tea Options',
      'Quiet & Professional Ambiance',
      'Dedicated Service Team',
    ],
    image: '/assets/placeholders/banquet-corporate.jpg',
    isPlaceholderImage: true,
  },
];
