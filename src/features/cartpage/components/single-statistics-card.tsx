"use client"
// single-statistics-card.tsx
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { useCartStore } from '@/lib/cartStore'
import { useState } from 'react'

interface ProductProps {
  data: {
    id: number
    name: string
    price: string
    image: string
  }
}

export function SingleStatisicCard({ data }: ProductProps) {
  const {addItem}= useCartStore();
  const [isAdding, setIsAdding] = useState(false); // Optional: for visual feedback

  const handleAddToCart = (e:React.MouseEvent) => {
    // Convert the price string to a number and prepare cart item
    const priceNumber = parseFloat(data.price.replace('$', ''));
    
    const cartItem = {
      id: data.id,
      name: data.name,
      price: priceNumber,
      image: data.image,
      quantity: 1, // Initial quantity when adding to cart
    };

    setIsAdding(true);
    addItem(cartItem);
    
    // Optional: Reset the adding state after a short delay for visual feedback
    setTimeout(() => setIsAdding(false), 500);
  };
  return (
    <Card className="group relative overflow-hidden hover:shadow-lg transition-shadow">
      {/* Product Image */}
      <CardHeader className="relative p-0 aspect-square">
        <Image
          src={data.image}
          alt={data.name}
          fill
          className="object-cover"        
        />
      </CardHeader>

      {/* Price and Add to Cart */}
      <CardContent className="">
        <div className="flex justify-between items-center">
          
          <span className="text-lg font-bold">{data.price}</span>
          <button 
            className={`p-2 rounded-full bg-gray-100 hover:bg-indigo-100 text-gray-600 hover:text-indigo-600 transition-colors ${isAdding 
              ? 'bg-green-100 text-green-600' 
              : 'bg-gray-100 hover:bg-indigo-100 text-gray-600 hover:text-indigo-600'}`}
            aria-label="Add to cart"    onClick={(e) => handleAddToCart(e)}
          >
            <ShoppingCartIcon className="h-5 w-5" />
          </button>
        </div>
        <p className="text-lg font-bold">{data.name}</p>
      </CardContent>
    </Card>
  )
}