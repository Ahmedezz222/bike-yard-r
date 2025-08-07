'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, Star, ShoppingCart, Heart, Eye } from 'lucide-react'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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

const allProducts: Product[] = [
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
  {
    id: '7',
    name: 'Electric Mountain Bike',
    price: 2499.99,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop',
    category: 'Electric Bikes',
    rating: 4.9,
    reviews: 45,
    isNew: true,
  },
  {
    id: '8',
    name: 'Cycling Shorts',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=300&fit=crop',
    category: 'Clothing',
    rating: 4.4,
    reviews: 89,
  },
]

const categories = ['All', 'Mountain Bikes', 'Road Bikes', 'City Bikes', 'Electric Bikes', 'Accessories', 'Clothing', 'Tools']

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>(allProducts)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('featured')

  useEffect(() => {
    let filtered = allProducts

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory)
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case 'newest':
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
        break
      default:
        // Keep original order for 'featured'
        break
    }

    setProducts(filtered)
  }, [searchTerm, selectedCategory, sortBy])

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-16">
        {/* Page Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our{' '}
                <span className="text-gradient">Products</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover our complete collection of premium bikes, accessories, and cycling gear
              </p>
            </motion.div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative w-full lg:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-600" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div className="flex items-center space-x-2">
                <span className="text-gray-600">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {products.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card group"
                >
                  {/* Product Image */}
                  <div className="relative overflow-hidden rounded-t-xl">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
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
                  <div className="p-4">
                    <div className="mb-2">
                      <span className="text-sm text-primary-600 font-medium">
                        {product.category}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
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
                        ({product.reviews})
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-gray-900">
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
          )}

          {/* Results Count */}
          <div className="mt-8 text-center text-gray-600">
            Showing {products.length} of {allProducts.length} products
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

