export interface GalleryImage {
  src: string;
  alt: string;
  category: 'All' | 'Food' | 'Interiors' | 'Events' | 'Seaview';
}

export const galleryData: GalleryImage[] = [
  // Food
  { src: '/gallery_refined/authentic_dish_1.png', alt: 'Cheesy Quesadillas', category: 'Food' },
  { src: '/gallery_refined/authentic_dish_2.png', alt: 'Filipino Traditional Dish', category: 'Food' },
  { src: '/gallery_refined/authentic_dish_3.png', alt: 'Grilled Specialty', category: 'Food' },
  { src: '/gallery/authentic_dish_4.png', alt: 'Chef\'s Platter', category: 'Food' },
  { src: '/gallery/authentic_dish_5.png', alt: 'Seafood Platter', category: 'Food' },
  { src: '/gallery/authentic_dish_6.png', alt: 'Signature Appetizer', category: 'Food' },
  { src: '/gallery/authentic_dish_7.png', alt: 'Local Cebuano Flavors', category: 'Food' },
  { src: '/gallery/authentic_dish_8.png', alt: 'Premium Entree', category: 'Food' },
  { src: '/gallery/authentic_dish_9.png', alt: 'Delicious Sides', category: 'Food' },
  { src: '/gallery/authentic_dish_10.png', alt: 'Fresh Catch of the Day', category: 'Food' },
  { src: '/gallery/authentic_dish_11.png', alt: 'Gourmet Presentation', category: 'Food' },
  { src: '/gallery/authentic_dish_12.png', alt: 'Marina Special Dish', category: 'Food' },
  { src: '/gallery/authentic_dish_13.png', alt: 'Dahlia Chocolate Pairing', category: 'Food' },
  { src: '/gallery/authentic_dish_14.png', alt: 'Fresh Seafood Platter', category: 'Food' },
  { src: '/gallery/authentic_dish_16.png', alt: 'Authentic Filipino Dish', category: 'Food' },
  { src: '/gallery/authentic_dish_17.png', alt: 'Gourmet Seafood Choice', category: 'Food' },
  { src: '/gallery/authentic_dish_18.png', alt: 'Chef\'s Special Creation', category: 'Food' },
  
  // Events
  { src: '/gallery/event_1.png', alt: 'Wedding Reception Ceremony', category: 'Events' },
  { src: '/gallery/event_2.png', alt: 'Corporate Event Setup', category: 'Events' },
  { src: '/gallery/event_3.png', alt: 'Intimate Birthday Celebration', category: 'Events' },
  { src: '/gallery/event_4.png', alt: 'Grand Ballroom Layout', category: 'Events' },
  { src: '/gallery/event_5.png', alt: 'Wedding Banquet', category: 'Events' },
  { src: '/gallery/event_6.png', alt: 'Event Decorations', category: 'Events' },
  { src: '/gallery/event_7.png', alt: 'Outdoor Party Setup', category: 'Events' },
  { src: '/gallery/event_8.png', alt: 'Meeting Room Setup', category: 'Events' },
  { src: '/gallery/event_9.png', alt: 'Pavilion Event', category: 'Events' },

  // Interiors
  { src: '/gallery/interior_1.png', alt: 'Main Dining Hall', category: 'Interiors' },
  { src: '/gallery/interior_2.png', alt: 'Modern Restaurant Design', category: 'Interiors' },
  { src: '/gallery/interior_4.png', alt: 'Glass House Seating', category: 'Interiors' },
  { src: '/gallery/interior_5.png', alt: 'Cozy Dining Nook', category: 'Interiors' },
  { src: '/gallery/interior_6.png', alt: 'Elegant Indoor Decor', category: 'Interiors' },
  { src: '/gallery/interior_7.png', alt: 'Restaurant Entrance', category: 'Interiors' },
  { src: '/gallery/interior_8.png', alt: 'Table Setup Detail', category: 'Interiors' },
  { src: '/gallery/interior_9.png', alt: 'Kitchen & Service View', category: 'Interiors' },

  // Seaview
  { src: '/gallery/seaview_1.png', alt: 'Coastal Dining View', category: 'Seaview' },
  { src: '/gallery/seaview_2.png', alt: 'Sunset over the Ocean', category: 'Seaview' },
  { src: '/gallery/seaview_3.png', alt: 'Outdoor Terrace', category: 'Seaview' },
  { src: '/gallery/seaview_4.png', alt: 'Seaside Perspective', category: 'Seaview' },
  { src: '/gallery/seaview_5.png', alt: 'Aerial Marina View', category: 'Seaview' },
];
