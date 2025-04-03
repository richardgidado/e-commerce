import { SingleStatisicCard } from './single-statistics-card';

// Define a TypeScript interface for electronic items
interface ElectronicItem {
  id: number;
  name: string;
  price: string;
  image: string;
}

// Electronics-specific data
const electronicItems: ElectronicItem[] = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: '$99.99',
    image: '/images/wireless-headphones.jpg',
  },
  {
    id: 2,
    name: 'Smart TV 55"',
    price: '$499.99',
    image: '/images/smart-tv.jpg',
  },
  {
    id: 3,
    name: 'Bluetooth Speaker',
    price: '$59.99',
    image: '/images/bluetooth-speaker.jpg',
  },
  {
    id: 4,
    name: 'Lenovo Legion Laptop 16GB RAM',
    price: '$899.99',
    image: '/images/laptop.jpg',
  },
  {
    id: 5,
    name: 'Smartwatch',
    price: '$199.99',
    image: '/images/smartwatch.jpg',
  },
  {
    id: 6,
    name: 'Portable Charger',
    price: '$29.99',
    image: '/images/portable-charger.jpg',
  },
  {
    id: 7,
    name: 'PS 5 Console',
    price: '$399.99',
    image: '/images/ps5.jpg',
  },
  {
    id: 8,
    name: 'Digital Camera',
    price: '$349.99',
    image: '/images/digital-camera.jpg',
  },
];

export function ElectronicsCardList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-0">
      {electronicItems.map((item) => (
        <SingleStatisicCard data={item} key={item.id} />
      ))}
    </div>
  );
}