import { SingleStatisicCard } from './single-statistics-card';

// Define a TypeScript interface for beverage items
interface BeverageItem {
  id: number;
  name: string;
  price: string;
  image: string;
}

// Beverages-specific data
const beverageItems: BeverageItem[] = [
  {
    id: 41,
    name: 'Budweiser',
    price: '$4.99',
    image:'/images/budw.jpg', 
  },
  {
    id: 42,
    name: 'Milo',
    price: '$2.99',
    image: '/images/milo.jpg',
  },
  {
    id: 43,
    name: 'Skippy',
    price: '$3.49',
    image: '/images/skippy.jpg',
  },
  {
    id: 44,
    name: 'Golden Morn',
    price: '$6.99',
    image: '/images/morn.jpg',
  },
  {
    id: 45,
    name: 'Coco Pops',
    price: '$3.99',
    image: '/images/cocopops.jpg',
  },
  {
    id: 46,
    name: 'Cola',
    price: '$1.99',
    image: '/images/cola.jpg',
  },
  {
    id: 47,
    name: 'Red Wine',
    price: '$19.99',
    image: '/images/red-wine.jpg',
  },
  {
    id: 48,
    name: 'Strawberry Jam',
    price: '$7.49',
    image: '/images/lemonade.jpg',
  },
];

export function BeveragesCardList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-0">
      {beverageItems.map((item) => (
        <SingleStatisicCard data={item} key={item.id} />
      ))}
    </div>
  );
}