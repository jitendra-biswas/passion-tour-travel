import package1 from './assets/images/packege-1.jpg';
import package2 from './assets/images/packege-2.jpg';
import package3 from './assets/images/packege-3.jpg';
import popular1 from './assets/images/popular-1.jpg';
import popular2 from './assets/images/popular-2.jpg';
import popular3 from './assets/images/popular-3.jpg';
import img8 from './assets/images/img8.jpg';
import img9 from './assets/images/img9.jpg';
import gallery1 from './assets/images/gallery-1.jpg';
import gallery2 from './assets/images/gallery-2.jpg';
import gallery3 from './assets/images/gallery-3.jpg';
import gallery4 from './assets/images/gallery-4.jpg';
import gallery5 from './assets/images/gallery-5.jpg';

// Tour Packages Data
export const packagesData = [
  {
    id: 1,
    title: 'Experience The Great Holiday On Beach',
    image: package1,
    location: 'Langkawi, Malaysia',
    duration: '7D/6N',
    pax: 'pax: 10',
    price: 750,
    reviews: '(25 reviews)',
    description: 'Pristine white-sand coastlines, azure waters, and secluded beachfront villas crafted for an indulgent retreat in style.',
  },
  {
    id: 2,
    title: 'Summer Holiday To The Oxolotan River',
    image: package2,
    location: 'Chiapas, Mexico',
    duration: '6D/5N',
    pax: 'pax: 10',
    price: 520,
    reviews: '(20 reviews)',
    description: 'Immerse in lush rainforest riverbanks, guided boat cruises, and encounters with rich native biodiversity.',
  },
  {
    id: 3,
    title: "Santorini Island's Weekend Vacation",
    image: package3,
    location: 'Cyclades, Greece',
    duration: '5D/4N',
    pax: 'pax: 8',
    price: 660,
    reviews: '(40 reviews)',
    description: 'Iconic whitewashed cliffside suites, Aegean sunset cruises, and private wine-tasting tours overlooking the caldera.',
  },
  {
    id: 4,
    title: 'Himalayan Panorama & Annapurna Circuit',
    image: img8,
    location: 'Annapurna, Nepal',
    duration: '10D/9N',
    pax: 'pax: 12',
    price: 890,
    reviews: '(48 reviews)',
    description: 'Breathtaking sunrise viewpoints over 8000m Himalayan peaks, sacred monasteries, and warm local hospitality.',
  },
  {
    id: 5,
    title: 'Imperial Kyoto & Tokyo Discovery',
    image: img9,
    location: 'Tokyo & Kyoto, Japan',
    duration: '8D/7N',
    pax: 'pax: 10',
    price: 1150,
    reviews: '(34 reviews)',
    description: 'Harmonious blend of centuries-old Shinto shrines, bamboo groves, bullet trains, and modern Japanese culture.',
  },
  {
    id: 6,
    title: 'Dubai Desert Safari & Modern City',
    image: popular2,
    location: 'Dubai, UAE',
    duration: '5D/4N',
    pax: 'pax: 14',
    price: 680,
    reviews: '(31 reviews)',
    description: 'Luxury marina cruises, 4x4 dune bashing, Burj Khalifa view decks, and world-class luxury stays.',
  },
];

// Featured Destinations Data
export const destinationsData = [
  {
    id: 1,
    title: 'San Miguel Heritage',
    country: 'Italy',
    image: popular1,
    price: 580,
    description: 'Explore timeless cobblestone alleys, classical architecture, and authentic regional culinary traditions.',
  },
  {
    id: 2,
    title: 'Modern Dubai & Desert Safari',
    country: 'United Arab Emirates',
    image: popular2,
    price: 680,
    description: 'Experience iconic architectural marvels, world-class luxury stays, and private sunset desert excursions.',
  },
  {
    id: 3,
    title: 'Ancient Kyoto Sanctum',
    country: 'Japan',
    image: popular3,
    price: 950,
    description: 'Immerse in meditative zen gardens, revered mountain shrines, and timeless ceremonial tea traditions.',
  },
  {
    id: 4,
    title: 'Annapurna Mountain Majesty',
    country: 'Nepal',
    image: img8,
    price: 720,
    description: 'Majestic snowy peaks, sacred Buddhist monasteries, and world-renowned alpine trekking circuits.',
  },
  {
    id: 5,
    title: 'Santorini Aegean Caldera',
    country: 'Greece',
    image: package3,
    price: 660,
    description: 'Whitewashed villages clinging to volcanic cliffs overlooking breathtaking Aegean sunsets.',
  },
  {
    id: 6,
    title: 'Tropical Langkawi Island',
    country: 'Malaysia',
    image: package1,
    price: 540,
    description: 'Pristine rainforest islands, turquoise lagoons, mangrove boat safaris, and luxury beach hideaways.',
  },
];

// Gallery Images
export const galleryData = [
  { id: 1, src: gallery1, title: 'Himalayan Trekking', location: 'Nepal' },
  { id: 2, src: gallery2, title: 'Santorini Sunset', location: 'Greece' },
  { id: 3, src: gallery3, title: 'Kyoto Temple Garden', location: 'Japan' },
  { id: 4, src: gallery4, title: 'Langkawi Rainforest', location: 'Malaysia' },
  { id: 5, src: gallery5, title: 'Arabian Desert Dunes', location: 'Dubai' },
];
