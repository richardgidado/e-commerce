import { SingleStatisicCard } from './single-statistics-card';

// Define a TypeScript interface for fashion items
interface FashionItem {
  id: number;
  name: string;
  price: string;
  image: string;
}

// Fashion-specific data
const fashionItems: FashionItem[] = [
  {
    id: 25,
    name: 'Denim Jacket',
    price: '$59.99',
    image: '/images/denim.jpg',
  },
  {
    id: 26,
    name: 'Leather Boots',
    price: '$89.99',
    image: '/images/boots.jpg',
  },
  {
    id: 27,
    name: 'Silk Scarf',
    price: '$29.99',
    image: '/images/scarf.jpg',
  },
  {
    id: 28,
    name: 'Slim Fit Jeans',
    price: '$49.99',
    image: '/images/slim-jeans.jpg',
  },
  {
    id: 29,
    name: 'Sunglasses',
    price: '$39.99',
    image: '/images/sunglasses.jpg',
  },
  {
    id: 30,
    name: 'Cotton T-Shirt',
    price: '$19.99',
    image: '/images/t-shirt.jpg',
  },
  {
    id: 31,
    name: 'Wool Coat',
    price: '$129.99',
    image: '/images/wool-coat.jpg',
  },
  {
    id: 32,
    name: 'Leather Belt',
    price: '$24.99',
    image: '/images/leather-belt.jpg',
  },
];

export function FashionCardList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-0">
      {fashionItems.map((item) => (
        <SingleStatisicCard data={item} key={item.id} />
      ))}
    </div>
  );
}