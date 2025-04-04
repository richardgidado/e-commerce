import { SingleStatisicCard } from './single-statistics-card';

// Define a TypeScript interface for furniture items
interface FurnitureItem {
  id: number;
  name: string;
  price: string;
  image: string;
}

// Furniture-specific data
const furnitureItems: FurnitureItem[] = [
  {
    id: 17,
    name: 'Wooden Dining Chair',
    price: '$49.99',
    image: '/images/dining-chair.jpg',
  },
  {
    id: 18,
    name: 'Modern Sofa',
    price: '$299.99',
    image: '/images/sofa.jpg',
  },
  {
    id: 19,
    name: 'Glass Coffee Table',
    price: '$129.99',
    image: '/images/coffee-table.jpg',
  },
  {
    id: 20,
    name: 'Bookshelf',
    price: '$89.99',
    image: '/images/bookshelf.jpg',
  },
  {
    id: 21,
    name: 'King Size Bed',
    price: '$499.99',
    image: '/images/bed.jpg',
  },
  {
    id: 22,
    name: 'Floor Lamp',
    price: '$39.99',
    image: '/images/lamp.jpg',
  },
  {
    id: 23,
    name: 'Wardrobe Closet',
    price: '$249.99',
    image: '/images/wardrobe.jpg',
  },
  {
    id: 24,
    name: 'Window Blinds',
    price: '$39.99',
    image: '/images/window1.jpg',
  },
];

export function FurnitureCardList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-0">
      {furnitureItems.map((item) => (
        <SingleStatisicCard data={item} key={item.id} />
      ))}
    </div>
  );
}