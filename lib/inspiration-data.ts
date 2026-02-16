export type Category =
  | 'all'
  | 'home-and-living'
  | 'gadgets-and-tech'
  | 'gifts-and-personalized'
  | 'art-and-decor'
  | 'cosplay-and-gaming'
  | 'functional-and-tools';

export interface CategoryMeta {
  slug: Category;
  name: string;
  color: string;
}

export interface InspirationItem {
  id: string;
  title: string;
  description: string;
  category: Exclude<Category, 'all'>;
  image: string;
  priceEstimate: { min: number; max: number };
  material: string;
}

export const categories: CategoryMeta[] = [
  { slug: 'all', name: 'All', color: '#36c1b3' },
  { slug: 'home-and-living', name: 'Home & Living', color: '#36c1b3' },
  { slug: 'gadgets-and-tech', name: 'Gadgets & Tech', color: '#6366f1' },
  { slug: 'gifts-and-personalized', name: 'Gifts & Personalized', color: '#f59e0b' },
  { slug: 'art-and-decor', name: 'Art & Decor', color: '#ec4899' },
  { slug: 'cosplay-and-gaming', name: 'Cosplay & Gaming', color: '#8b5cf6' },
  { slug: 'functional-and-tools', name: 'Functional & Tools', color: '#64748b' },
];

export const inspirationItems: InspirationItem[] = [
  {
    id: 'geometric-desk-planter',
    title: 'Geometric Desk Planter',
    description: 'Modern minimalist planter for succulents and small plants',
    category: 'home-and-living',
    image: '/images/trending/plant-pot.jpg',
    priceEstimate: { min: 50, max: 80 },
    material: 'PLA',
  },
  {
    id: 'articulated-dragon',
    title: 'Articulated Dragon',
    description: 'Fully poseable dragon with moving joints — a top seller worldwide',
    category: 'gifts-and-personalized',
    image: '/images/trending/articulated-dragon.png',
    priceEstimate: { min: 60, max: 100 },
    material: 'PLA',
  },
  {
    id: 'cable-management-clips',
    title: 'Cable Management Clips',
    description: 'Set of 6 adhesive cable organizers for a clean desk setup',
    category: 'gadgets-and-tech',
    image: '/images/trending/cable-clips.jpg',
    priceEstimate: { min: 30, max: 50 },
    material: 'PLA',
  },
  {
    id: 'phone-stand',
    title: 'Phone Stand with Charging Slot',
    description: 'Adjustable phone dock for desk or bedside — fits all phones',
    category: 'gadgets-and-tech',
    image: '/images/trending/phone-stand.jpg',
    priceEstimate: { min: 40, max: 60 },
    material: 'PLA',
  },
  {
    id: 'flexi-trex',
    title: 'Flexi T-Rex Fidget Toy',
    description: 'Articulated dinosaur with satisfying movement — kids love it',
    category: 'gifts-and-personalized',
    image: '/images/trending/flexi-trex.jpg',
    priceEstimate: { min: 40, max: 60 },
    material: 'PLA',
  },
  {
    id: 'headphone-hook',
    title: 'Headphone Hook (Desk Mount)',
    description: 'Clean desk aesthetic — mount under any desk edge',
    category: 'gadgets-and-tech',
    image: '/images/trending/headphone-stand.webp',
    priceEstimate: { min: 40, max: 60 },
    material: 'PLA',
  },
  {
    id: 'desk-organizer',
    title: 'Modular Desk Organizer',
    description: 'Stackable compartments for pens, cards, and small items',
    category: 'functional-and-tools',
    image: '/images/trending/desk-organizer.png',
    priceEstimate: { min: 50, max: 80 },
    material: 'PLA',
  },
  {
    id: 'keyboard-keycaps',
    title: 'Custom Keyboard Keycaps',
    description: 'Unique artisan keycaps for mechanical keyboard enthusiasts',
    category: 'gadgets-and-tech',
    image: '/images/trending/keyboard-keycaps.jpg',
    priceEstimate: { min: 30, max: 60 },
    material: 'Resin',
  },
  {
    id: 'low-poly-lion',
    title: 'Low-Poly Lion Sculpture',
    description: 'Geometric Namibian wildlife art piece for shelf or desk display',
    category: 'art-and-decor',
    image: '/images/gallery_sculpture.png',
    priceEstimate: { min: 60, max: 100 },
    material: 'PLA',
  },
  {
    id: 'darth-vader-display',
    title: 'Darth Vader Display Figurine',
    description: 'Premium collectible — the ultimate desk companion for fans',
    category: 'cosplay-and-gaming',
    image: '/images/figurines/darth-vader.jpg',
    priceEstimate: { min: 80, max: 120 },
    material: 'PLA',
  },
  {
    id: 'stormtrooper-figurine',
    title: 'Stormtrooper Figurine',
    description: 'Classic Star Wars collectible — premium quality print',
    category: 'cosplay-and-gaming',
    image: '/images/figurines/stormtrooper.jpg',
    priceEstimate: { min: 80, max: 120 },
    material: 'PLA',
  },
  {
    id: 'photo-trophy',
    title: 'Custom Photo Trophy',
    description: 'Transform any photo into a personalized 3D printed award',
    category: 'gifts-and-personalized',
    image: '/images/gallery/photo-trophy-1.jpg',
    priceEstimate: { min: 80, max: 150 },
    material: 'PLA',
  },
  {
    id: 'drill-dust-collector',
    title: 'Drill Dust Collector',
    description: 'Catches drill dust before it hits the floor — genius hack',
    category: 'functional-and-tools',
    image: '/images/products/sample-item-1/image1.jpg',
    priceEstimate: { min: 25, max: 40 },
    material: 'PLA',
  },
  {
    id: 'screw-measuring-tool',
    title: 'Screw Measuring Tool M2-M10',
    description: 'Instantly identify screw sizes — no more guessing at the hardware store',
    category: 'functional-and-tools',
    image: '/images/products/sample-item-2/image1.jpg',
    priceEstimate: { min: 35, max: 55 },
    material: 'PLA',
  },
  {
    id: 'gravity-towel-hook',
    title: 'Gravity Towel Hook',
    description: 'No-drill wall hook using gravity — no screws needed',
    category: 'home-and-living',
    image: '/images/products/sample-item-5/image1.jpg',
    priceEstimate: { min: 20, max: 30 },
    material: 'PLA',
  },
];
