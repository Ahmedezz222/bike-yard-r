'use client'

import { motion } from 'framer-motion'
import { Star, ShoppingCart, Heart, Eye } from 'lucide-react'
import Image from 'next/image'

interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  category: string
  rating: number
  reviews: number
  isNew?: boolean
  isSale?: boolean
}

const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Mountain Bike Pro X1',
    price: 1299.99,
    originalPrice: 1499.99,
    image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=500&h=300&fit=crop',
    category: 'Mountain Bikes',
    rating: 4.8,
    reviews: 124,
    isSale: true,
  },
  {
    id: '2',
    name: 'Road Bike Speed Master',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1544191696-102dbdaeeaa5?w=500&h=300&fit=crop',
    category: 'Road Bikes',
    rating: 4.9,
    reviews: 89,
    isNew: true,
  },
  {
    id: '3',
    name: 'City Cruiser Comfort',
    price: 599.99,
    image: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=500&h=300&fit=crop',
    category: 'City Bikes',
    rating: 4.7,
    reviews: 156,
  },
  {
    id: '4',
    name: 'Premium Bike Helmet',
    price: 89.99,
    originalPrice: 119.99,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop',
    category: 'Accessories',
    rating: 4.6,
    reviews: 203,
    isSale: true,
  },
  {
    id: '5',
    name: 'Cycling Jersey Pro',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=300&fit=crop',
    category: 'Clothing',
    rating: 4.5,
    reviews: 67,
  },
  {
    id: '6',
    name: 'Bike Repair Kit',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1587554800590-8c6b1a5c0c0c?w=500&h=300&fit=crop',
    category: 'Tools',
    rating: 4.8,
    reviews: 98,
  },
]

export default function ProductGrid() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our{' '}
            <span className="text-gradient">Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our premium selection of bikes, accessories, and gear for every type of cyclist
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden rounded-t-xl">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      New
                    </span>
                  )}
                  {product.isSale && (
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Sale
                    </span>
                  )}
                </div>

                {/* Quick Actions */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <Heart className="h-5 w-5 text-gray-600 hover:text-red-500 transition-colors duration-300" />
                  </button>
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <Eye className="h-5 w-5 text-gray-600 hover:text-primary-600 transition-colors duration-300" />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-sm text-primary-600 font-medium">
                    {product.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">
                    ({product.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-gray-900">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button className="w-full btn-primary group/btn">
                  <ShoppingCart className="h-5 w-5 mr-2 group-hover/btn:animate-bounce" />
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Products Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="btn-secondary">
            View All Products
          </button>
        </motion.div>
      </div>
    </section>
  )
}

