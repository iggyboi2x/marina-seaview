export interface EventSpace {
  id: string;
  name: string;
  image: string;
  description: string;
  tags: string[];
}

export const eventSpacesData: EventSpace[] = [
  {
    id: 'seaview-pavilion',
    name: 'Seaview Pavilion',
    image: '/venue_refined/refined_seaview_pavillion.png',
    description: 'Open-air venue with hanging lights and panoramic coastal views.',
    tags: ['Outdoor', 'Weddings', 'Receptions']
  },
  {
    id: 'the-ballroom',
    name: 'The Ballroom',
    image: '/venue_refined/refined_seaview_ballroom.png',
    description: 'Grand air-conditioned venue with elegant chandeliers.',
    tags: ['Indoor', 'Weddings', 'Debuts', 'Corporate']
  },
  {
    id: 'glass-house',
    name: 'Glass House',
    image: '/venue_refined/refined_seaview_glasshouse.png',
    description: 'Sunlit garden venue enclosed in glass — bright and airy.',
    tags: ['Outdoor', 'Birthdays', 'Intimate Events']
  },
  {
    id: 'meeting-room',
    name: 'Meeting Room',
    image: '/venue_refined/refined_seaview_meetingroom.png',
    description: 'Sophisticated space for corporate meetings and seminars.',
    tags: ['Indoor', 'Corporate', 'Seminars']
  },
  {
    id: 'main-dining',
    name: 'Main Dining',
    image: '/venue_refined/refined_seaview_maindining.png',
    description: 'Signature dining space with warm golden lighting.',
    tags: ['Indoor', 'Private Dining', 'All Events']
  },
  {
    id: 'the-salty-wharf',
    name: 'The Salty Wharf',
    image: '/venue_refined/refined_seaview_thesaltywharf.png',
    description: 'Marina Seaview\'s cocktail bar for after-dinner drinks.',
    tags: ['Bar', 'Cocktails', 'Casual']
  }
];
