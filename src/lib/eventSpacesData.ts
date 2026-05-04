export interface EventSpace {
  id: string;
  name: string;
  image: string;
  description: string;
  capacity: string;
  tags: string[];
}

export const eventSpacesData: EventSpace[] = [
  {
    id: 'seaview-pavilion',
    name: 'Seaview Pavilion',
    image: '/venue/Seaview Pavillion.webp',
    description: 'Open-air venue with hanging lights and panoramic coastal views.',
    capacity: 'Up to 150 guests',
    tags: ['Outdoor', 'Weddings', 'Receptions']
  },
  {
    id: 'the-ballroom',
    name: 'The Ballroom',
    image: '/venue/Seaview Ballroom.webp',
    description: 'Grand air-conditioned venue with elegant chandeliers.',
    capacity: 'Up to 300 guests',
    tags: ['Indoor', 'Weddings', 'Debuts', 'Corporate']
  },
  {
    id: 'glass-house',
    name: 'Glass House',
    image: '/venue/Seaview Glass House.webp',
    description: 'Sunlit garden venue enclosed in glass — bright and airy.',
    capacity: 'Up to 80 guests',
    tags: ['Outdoor', 'Birthdays', 'Intimate Events']
  },
  {
    id: 'meeting-room',
    name: 'Meeting Room',
    image: '/venue/Seaview Meeting Room.webp',
    description: 'Sophisticated space for corporate meetings and seminars.',
    capacity: 'Up to 30 guests',
    tags: ['Indoor', 'Corporate', 'Seminars']
  },
  {
    id: 'main-dining',
    name: 'Main Dining',
    image: '/venue/Seaview Main Dining.webp',
    description: 'Signature dining space with warm golden lighting.',
    capacity: 'Up to 200 guests',
    tags: ['Indoor', 'Private Dining', 'All Events']
  },
  {
    id: 'the-salty-wharf',
    name: 'The Salty Wharf',
    image: '/venue/Seaview The Salty Wharf.webp',
    description: 'Marina Seaview\'s cocktail bar for after-dinner drinks.',
    capacity: 'Bar seating available',
    tags: ['Bar', 'Cocktails', 'Casual']
  }
];
