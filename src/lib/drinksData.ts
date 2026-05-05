export interface DrinkItem {
  name: string;
  price?: string;
  description?: string;
  isNew?: boolean;
}

export interface DrinkCategory {
  id: string;
  title: string;
  image?: string;
  items: DrinkItem[];
}

export const drinksData: DrinkCategory[] = [
  {
    id: 'fresh-juices',
    title: 'Fresh Juices',
    image: '/gallery_refined/marina_seaview_4.png',
    items: [
      { name: 'Calamansi Juice', price: '₱240' },
      { name: 'Watermelon / Pineapple / Buko / Mango / Green Mango / Four Seasons', price: '₱260' },
      { name: 'Healthy Drink', description: 'Watermelon, mint leaves', price: '₱260' }
    ]
  },
  {
    id: 'shakes',
    title: 'Shakes',
    items: [
      { name: 'Chocolate / Banana / Watermelon / Mango / Green Mango / Cookies & Cream / Buko Pandan / Mango Banana', price: '₱260' }
    ]
  },
  {
    id: 'smoothies',
    title: 'Smoothies',
    items: [
      { name: 'Strawberry / Strawberry Banana / Mango / Green Matcha', price: '₱275' }
    ]
  },
  {
    id: 'signature-lemonade',
    title: 'Signature Lemonade',
    items: [
      { name: 'Rose / Blueberry / Peach / Cucumber / Raspberry / Passion Fruit', price: '₱180' }
    ]
  },
  {
    id: 'coffee',
    title: 'Coffee',
    items: [
      { name: 'Espresso', price: '₱130' },
      { name: 'Cafe Americano', price: '₱160' },
      { name: 'Cafe Latte / Cappuccino / Iced Cappuccino / Affogato / Cafe Mocha / Iced Cafe Mocha', price: '₱190' },
      { name: 'Caramel Macchiato', price: '₱235' },
      { name: 'Iced Caramel Macchiato', price: '₱275' }
    ]
  },
  {
    id: 'tea',
    title: 'Tea',
    items: [
      { name: 'Fresh Ginger / Pure Green / Greentea & Lemon / Jasmine / Peppermint / Chamomile / Forest Berry / English Breakfast', price: '₱190' }
    ]
  },
  {
    id: 'frappe',
    title: 'Frappé',
    items: [
      { name: 'Chocolate Java Chip', price: '₱275' },
      { name: 'Caramel Popcorn / Dark Chocolate Mint', price: '₱280' }
    ]
  },
  {
    id: 'chilled-beverages',
    title: 'Chilled Beverages',
    items: [
      { name: 'Bottled Water', price: '₱95' },
      { name: 'Iced Tea / Soda Water / Tonic Water', price: '₱160' },
      { name: 'Coke / Sprite / Royal / Coke Light-Zero', price: '₱180' },
      { name: 'Ginger Ale', price: '₱245' },
      { name: 'Perrier Sparkling Water / RedBull', price: '₱275' }
    ]
  },
  {
    id: 'beers',
    title: 'Beers',
    items: [
      { name: 'San Miguel Light / Pale Pilsen / Apple / Lemon', price: '₱190' },
      { name: 'Smirnoff Mule', price: '₱200' },
      { name: 'Heineken / San Miguel Super Dry', price: '₱270' },
      { name: 'Nipa Brew Drop Zone', price: '₱320' },
      { name: 'Corona', price: '₱330' },
      { name: 'Sapporo', price: '₱345' },
      { name: 'Engkanto Mango Nation / Engkanto Ube', price: '₱375' }
    ]
  },
  {
    id: 'signature-cocktails',
    title: 'Signature Cocktails',
    image: '/gallery_refined/marina_seaview_2.png',
    items: [
      { name: 'Khaleesi', description: 'Tequila infused red chili, mezcal, lime, passion fruit, sugar syrup, dried chili, chili flakes', price: '₱420', isNew: true },
      { name: 'Molten Spice', description: 'Bayou spice rum, honey & cinnamon cordial, lemon, chamomile tea, lemon & chamomile caviar, tuile', price: '₱420', isNew: true },
      { name: 'Make It John', description: 'Johnnie Walker Black, sweet potato-strawberry cordial, soda water, strawberry tincture, fondant icing', price: '₱420' },
      { name: '"Lumay"', description: 'Butterfly pea infused Tanqueray gin, Gayuma liqueur, pink grapefruit syrup, sweet beetroot liquid, chrysanthemum', price: '₱420' },
      { name: 'Garden of Eden', description: 'Nordes gin, Mancino dry vermouth, lemon, elderflower & lavender bitters', price: '₱420' },
      { name: 'Smokey Margo', description: 'Patron silver tequila, Sebusca mezcal, Walsh triple sec, lime, sugar syrup, sea salt foam', price: '₱420' },
      { name: 'The Galicia\'s Wind', description: 'Botanicals, orange liqueur, super juice, cucumber, lavender', price: '₱420' },
      { name: 'Ube Cubano', description: 'Ube creme, coconut rum, white rum, milk, young coconut, vanilla', price: '₱420' },
      { name: 'Rosita\'s Pink Life', description: 'Patron tequila blanco, rose syrup, lemon & lime soda, fire water tincture & egg', price: '₱420' },
      { name: 'Molotov', description: 'Plantation white rum, Plantation dark rum, Malibu, young coconut, passion fruit & lime', price: '₱420' },
      { name: 'Go Hit on the Road Jack', description: 'Jack Daniels whiskey, Campari, Vermouth, chocolate bitters & oak wood', price: '₱420' },
      { name: 'Dulce', description: 'Patron Reposado tequila, grapefruit-lime cordial, soda water, grapefruit candy & powder', price: '₱420' }
    ]
  }
];
