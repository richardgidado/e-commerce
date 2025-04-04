import { SingleStatisicCard } from './single-statistics-card';

// Define a TypeScript interface for phone items
interface PhoneItem {
  id: number;
  name: string;
  price: string;
  image: string;
}

// Phones-specific data
const phoneItems: PhoneItem[] = [
  {
    id: 9,
    name: 'iPhone 14 Pro',
    price: '$999.99',
    image: '/images/iphone-14-pro.jpg',
  },
  {
    id: 10,
    name: 'Samsung Galaxy S23',
    price: '$799.99',
    image: '/images/galaxy-s23.jpg',
  },
  {
    id: 11,
    name: 'Google Pixel 8',
    price: '$699.99',
    image: '/images/pixel-8.jpg',
  },
  {
    id: 12,
    name: 'OnePlus 11',
    price: '$649.99',
    image: '/images/oneplus-11.jpg',
  },
  {
    id: 13,
    name: 'Xiaomi 13',
    price: '$599.99',
    image: '/images/xiaomi-13.jpg',
  },
  {
    id: 14,
    name: 'Nokia G50',
    price: '$249.99',
    image: '/images/nokia-g50.jpg',
  },
  {
    id: 15,
    name: 'Sony Xperia 1 V',
    price: '$899.99',
    image: '/images/xperia-1-v.jpg',
  },
  {
    id: 16,
    name: 'Motorola Edge 40',
    price: '$549.99',
    image: '/images/moto-edge-40.jpg',
  },
];

export function PhonesCardList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-0">
      {phoneItems.map((item) => (
        <SingleStatisicCard data={item} key={item.id} />
      ))}
    </div>
  );
}