// statistics-card-list.tsx
import { SingleStatisicCard } from './single-statistics-card'

const products = [
  {
    id: 1,
    name: 'Rolex',
    price: '$129.99',
    image: '/images/rolly.jpg'
  },
  {
    id: 2,
    name: 'Baseball Cap for Men',
    price: '$199.99',
    image: '/images/cap1.jpg'
  },
  {
    id: 3,
    name: 'Joggers for Men',
    price: '$89.99',
    image: '/images/trousers1.jpg'
  },
  {
    id: 4,
    name: 'JBL Extreme 3',
    price: '$139.99',
    image: '/images/jbl.jpg'
  },
  {
    id: 5,
    name: 'Chocolate Milo',
    price: '$9.99',
    image: '/images/milo.jpg'
  }, {
    id: 6,
    name: 'Golden Morn',
    price: '$19.99',
    image: '/images/morn.jpg'
  }, {
    id: 7,
    name: 'Chair',
    price: '$39.99',
    image: '/images/chair1.jpg'
  }, {
    id: 8,
    name: 'Window Blinds',
    price: '$39.99',
    image: '/images/window1.jpg'
  }
]

export function StatisticsCardList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-0">
      {products.map((product) => (
        <SingleStatisicCard data={product} key={product.id} />
      ))}
    </div>
  )
}