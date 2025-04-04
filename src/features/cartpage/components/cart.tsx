
"use client"
// pages/cart.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import { useCartStore } from '@/lib/cartStore';
import Image from 'next/image';

const CartPage: NextPage = () => {
  const { items, updateQuantity, removeItem } = useCartStore();

  // Calculate total
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <Head>
        <title>Shopping Cart | Your Store</title>
      </Head>
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8 text-center">Your Cart</h1>

          {items.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">Your cart is empty</p>
              <a
                href="/dashboard/home"
                className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                Continue Shopping
              </a>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-3">
              {/* Cart Items */}
              <div className="md:col-span-2">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center bg-white p-4 rounded-lg shadow mb-4"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded mr-4"
                    />
                    <div className="flex-1">
                      <h2 className="text-lg font-semibold">{item.name}</h2>
                      <p className="text-gray-600">${item.price.toFixed(2)}</p>
                      <div className="flex items-center mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="bg-gray-200 px-2 py-1 rounded-l hover:bg-gray-300"
                        >
                          -
                        </button>
                        <span className="px-4 py-1 bg-gray-100">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="bg-gray-200 px-2 py-1 rounded-r hover:bg-gray-300"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="ml-4 text-red-600 hover:text-red-800"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <p className="font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="bg-white p-6 rounded-lg shadow h-fit">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>TBD</span>
                  </div>
                  <div className="flex justify-between font-semibold pt-2 border-t">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                <button className="w-full mt-6 bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartPage;