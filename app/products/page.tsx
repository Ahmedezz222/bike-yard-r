'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, Star, ShoppingCart, Heart, Eye } from 'lucide-react'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getAllProducts, ShopifyProduct } from '@/lib/shopify'

const categories = ['All', 'Mountain Bikes', 'Road Bikes', 'City Bikes', 'Electric Bikes', 'Accessories', 'Clothing', 'Tools']

export default function ProductsPage() {
  const [products, setProducts] = useState<ShopifyProduct[]>([])
  const [allProducts, setAllProducts] = useState<ShopifyProduct[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('featured')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch products from Shopify
  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true)
        const shopifyProducts = await getAllProducts()
        setAllProducts(shopifyProducts)
        setProducts(shopifyProducts)
      } catch (err) {
        console.error('Error fetching products:', err)
        setError('Failed to load products. Please check your Shopify configuration.')
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  useEffect(() => {
    let filtered = allProducts

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.productType.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.productType === selectedCategory)
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => parseFloat(a.variants[0]?.price || '0') - parseFloat(b.variants[0]?.price || '0'))
        break
      case 'price-high':
        filtered.sort((a, b) => parseFloat(b.variants[0]?.price || '0') - parseFloat(a.variants[0]?.price || '0'))
        break
      case 'rating':
        // Note: Shopify doesn't include ratings by default, so we'll sort by title
        filtered.sort((a, b) => a.title.localeCompare(b.title))
        break
      case 'newest':
        // Note: Shopify doesn't include creation date by default, so we'll sort by title
        filtered.sort((a, b) => a.title.localeCompare(b.title))
        break
      default:
        // Keep original order for 'featured'
        break
    }

    setProducts(filtered)
  }, [searchTerm, selectedCategory, sortBy, allProducts])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading products...</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                <strong className="font-bold">Error: </strong>
                <span className="block sm:inline">{error}</span>
              </div>
              <p className="text-gray-600 mb-4">
                Please make sure you have:
              </p>
              <ul className="text-left max-w-md mx-auto text-gray-600 space-y-2">
                <li>• Created a `.env.local` file with your Shopify credentials</li>
                <li>• Set up your Shopify store domain</li>
                <li>• Generated a Storefront API access token</li>
                <li>• Added products to your Shopify store</li>
              </ul>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

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
                  <option value="rating">Name A-Z</option>
                  <option value="newest">Name Z-A</option>
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
                  className="card group border border-gray-100 hover:border-primary-600 hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 relative"
                >
                  {/* Product Image */}
                  <div className="relative overflow-hidden rounded-t-xl">
                    <Image
                      src={product.images[0]?.src || '/placeholder-product.jpg'}
                      alt={product.images[0]?.altText || product.title}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                      {product.tags.includes('new') && (
                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow">New</span>
                      )}
                      {product.variants[0]?.compareAtPrice && (
                        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow">Sale</span>
                      )}
                      {!product.variants[0]?.available && (
                        <span className="bg-gray-400 text-white px-3 py-1 rounded-full text-xs font-medium shadow">Out of Stock</span>
                      )}
                    </div>
                    {/* Quick Actions */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
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
                        {product.productType}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300 line-clamp-1">
                      {product.title}
                    </h3>
                    {/* Description */}
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2 prose prose-sm">
                      {product.description}
                    </p>
                    {/* Rating (mock, since Shopify doesn't provide) */}
                    <div className="flex items-center mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'} drop-shadow-sm`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500 ml-2">(N/A)</span>
                    </div>
                    {/* Price */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-gray-900">
                          ${product.variants[0]?.price || '0.00'}
                        </span>
                        {product.variants[0]?.compareAtPrice && (
                          <span className="text-lg text-gray-500 line-through">
                            ${product.variants[0].compareAtPrice}
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-gray-500">
                        {product.vendor}
                      </span>
                    </div>
                    {/* Add to Cart Button */}
                    <button 
                      className={`w-full btn-primary group/btn ${!product.variants[0]?.available ? 'opacity-50 cursor-not-allowed' : ''}`}
                      disabled={!product.variants[0]?.available}
                    >
                      <ShoppingCart className="h-5 w-5 mr-2 group-hover/btn:animate-bounce" />
                      {product.variants[0]?.available ? 'Add to Cart' : 'Out of Stock'}
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

