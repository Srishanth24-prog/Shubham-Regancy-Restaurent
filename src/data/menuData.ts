import type { MenuItem } from '../types';

export const MENU_DATA: MenuItem[] = [
  // Starters
  {
    id: 's1',
    name: 'Paneer Tikka Royale',
    category: 'Starters',
    type: 'veg',
    description: 'Cottage cheese cubes marinated in rich Indian spices, cooked in tandoor with bell peppers.',
  },
  {
    id: 's2',
    name: 'Hara Bhara Kebab',
    category: 'Starters',
    type: 'veg',
    description: 'Crispy spinach and green pea patties subtly seasoned with aromatic herbs.',
  },
  {
    id: 's3',
    name: 'Tandoori Murgh Special',
    category: 'Starters',
    type: 'non-veg',
    description: 'Tender chicken marinated in yogurt and traditional house spices, flame-roasted.',
  },
  {
    id: 's4',
    name: 'Apollo Fish Deluxe',
    category: 'Starters',
    type: 'non-veg',
    description: 'Crispy fried boneless fish tossed in spicy curry leaf garlic sauce.',
  },

  // Main Course
  {
    id: 'm1',
    name: 'Paneer Butter Masala',
    category: 'Main Course',
    type: 'veg',
    description: 'Soft cottage cheese simmered in a velvety tomato, butter, and cashew gravy.',
  },
  {
    id: 'm2',
    name: 'Dal Tadka Special',
    category: 'Main Course',
    type: 'veg',
    description: 'Yellow lentils tempered with ghee, cumin, garlic, and fresh coriander.',
  },
  {
    id: 'm3',
    name: 'Butter Chicken Royale',
    category: 'Main Course',
    type: 'non-veg',
    description: 'Classic succulent tandoori chicken cooked in rich tomato butter sauce.',
  },
  {
    id: 'm4',
    name: 'Mutton Rogan Josh',
    category: 'Main Course',
    type: 'non-veg',
    description: 'Tender mutton cooked slowly in aromatic Kashmiri spices and rich gravy.',
  },

  // Biryanis
  {
    id: 'b1',
    name: 'Shubham Special Veg Biryani',
    category: 'Biryanis',
    type: 'veg',
    description: 'Aromatic basmati rice layered with fresh vegetables and fragrant biryani spices.',
  },
  {
    id: 'b2',
    name: 'Hyderabadi Chicken Dum Biryani',
    category: 'Biryanis',
    type: 'non-veg',
    description: 'Traditional slow-cooked dum biryani with marinated tender chicken and basmati rice.',
  },
  {
    id: 'b3',
    name: 'Special Mutton Dum Biryani',
    category: 'Biryanis',
    type: 'non-veg',
    description: 'Rich, flavorful mutton dum biryani crafted with select spices.',
  },

  // Breads & Rice
  {
    id: 'r1',
    name: 'Butter Naan & Garlic Naan',
    category: 'Breads & Rice',
    type: 'veg',
    description: 'Freshly baked tandoori breads brushed with butter or garlic.',
  },
  {
    id: 'r2',
    name: 'Jeera Rice & Steamed Rice',
    category: 'Breads & Rice',
    type: 'veg',
    description: 'Long-grain basmati rice tempered with cumin or served steamed hot.',
  },

  // Desserts
  {
    id: 'd1',
    name: 'Gulab Jamun with Ice Cream',
    category: 'Desserts & Beverages',
    type: 'veg',
    description: 'Warm golden milk dumplings served alongside vanilla ice cream.',
  },
  {
    id: 'd2',
    name: 'Fresh Fruit Salad & Desserts',
    category: 'Desserts & Beverages',
    type: 'veg',
    description: 'Assorted seasonal fruits served chilled.',
  },
];
