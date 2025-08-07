'use client'

import { motion } from 'framer-motion'
import { Coffee, Clock, MapPin, Phone, Star } from 'lucide-react'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useState } from 'react'

interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  category: string
  image: string
  isPopular?: boolean
}

const menuItems: MenuItem[] = [
  // Coffee & Drinks
  {
    id: '1',
    name: 'Espresso',
    description: 'Rich and bold single shot of espresso',
    price: 3.50,
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=300&h=200&fit=crop',
  },
  {
    id: '2',
    name: 'Cappuccino',
    description: 'Perfectly balanced espresso with steamed milk and foam',
    price: 4.50,
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=300&h=200&fit=crop',
    isPopular: true,
  },
  {
    id: '3',
    name: 'Latte',
    description: 'Smooth espresso with velvety steamed milk',
    price: 4.75,
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=300&h=200&fit=crop',
  },
  {
    id: '4',
    name: 'Cold Brew',
    description: 'Smooth and refreshing 12-hour cold brewed coffee',
    price: 4.25,
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=200&fit=crop',
  },
  // Food
  {
    id: '5',
    name: 'Avocado Toast',
    description: 'Sourdough toast with fresh avocado, cherry tomatoes, and microgreens',
    price: 8.50,
    category: 'Food',
    image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=300&h=200&fit=crop',
    isPopular: true,
  },
  {
    id: '6',
    name: 'Breakfast Burrito',
    description: 'Scrambled eggs, black beans, cheese, and salsa in a flour tortilla',
    price: 9.75,
    category: 'Food',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop',
  },
  {
    id: '7',
    name: 'Greek Yogurt Bowl',
    description: 'Creamy Greek yogurt with granola, berries, and honey',
    price: 7.25,
    category: 'Food',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300&h=200&fit=crop',
  },
  {
    id: '8',
    name: 'Grilled Cheese',
    description: 'Classic grilled cheese with tomato soup',
    price: 8.00,
    category: 'Food',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=300&h=200&fit=crop',
  },
  // Smoothies
  {
    id: '9',
    name: 'Berry Blast Smoothie',
    description: 'Mixed berries, banana, and almond milk',
    price: 6.50,
    category: 'Smoothies',
    image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=300&h=200&fit=crop',
  },
  {
    id: '10',
    name: 'Green Power Smoothie',
    description: 'Spinach, kale, apple, and coconut water',
    price: 6.75,
    category: 'Smoothies',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=300&h=200&fit=crop',
  },
]

const categories = ['All', 'Coffee', 'Food', 'Smoothies']

export default function CafePage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredItems = selectedCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-accent-600 to-accent-700 text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <Coffee className="h-16 w-16 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Bike Yard{' '}
                <span className="text-yellow-300">Cafe</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Fuel your ride with our premium coffee and delicious food. 
                The perfect pit stop for cyclists and coffee lovers alike.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>Open Daily 7AM - 7PM</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>123 Bike Street</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>+1 234 567 8900</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Menu Section */}
        <section className="py-20">
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
                <span className="text-gradient">Menu</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From artisanal coffee to healthy meals, we've got everything you need to refuel and recharge.
              </p>
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center mb-12"
            >
              <div className="flex flex-wrap gap-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-primary-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Menu Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card group"
                >
                  {/* Item Image */}
                  <div className="relative overflow-hidden rounded-t-xl">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {item.isPopular && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                          <Star className="h-4 w-4 mr-1 fill-current" />
                          Popular
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Item Info */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                        {item.name}
                      </h3>
                      <span className="text-2xl font-bold text-primary-600">
                        ${item.price}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-primary-600 font-medium">
                        {item.category}
                      </span>
                      <button className="btn-primary text-sm py-2 px-4">
                        Order Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cafe Features */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Why Choose Our{' '}
                <span className="text-gradient">Cafe</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Premium Coffee',
                  description: 'Sourced from the finest beans and expertly roasted for the perfect cup every time.',
                  icon: Coffee,
                },
                {
                  title: 'Cycling Community',
                  description: 'Connect with fellow cyclists while enjoying your coffee and sharing ride stories.',
                  icon: MapPin,
                },
                {
                  title: 'Healthy Options',
                  description: 'Fresh, locally-sourced ingredients for nutritious meals that fuel your adventures.',
                  icon: Star,
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

