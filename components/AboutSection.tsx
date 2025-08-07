'use client'

import { motion } from 'framer-motion'
import { Bike, Wrench, Coffee, Users } from 'lucide-react'

export default function AboutSection() {
  const features = [
    {
      icon: Bike,
      title: 'Quality Bikes',
      description: 'Premium selection of mountain, road, and city bikes from top brands',
      color: 'text-primary-600',
      bgColor: 'bg-primary-50',
    },
    {
      icon: Wrench,
      title: 'Expert Service',
      description: 'Professional maintenance and repair services by certified technicians',
      color: 'text-accent-600',
      bgColor: 'bg-accent-50',
    },
    {
      icon: Coffee,
      title: 'Cafe & Community',
      description: 'Relax in our cafe while we service your bike and connect with fellow cyclists',
      color: 'text-secondary-600',
      bgColor: 'bg-secondary-50',
    },
    {
      icon: Users,
      title: 'Cycling Community',
      description: 'Join our vibrant community of cycling enthusiasts and participate in group rides',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                About{' '}
                <span className="text-gradient">Bike Yard</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                At Bike Yard Shop, we are passionate about cycling. Our mission is to provide 
                top-quality bikes, gear, and accessories to cyclists of all levels.
              </p>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              Founded with a vision to create more than just a bike shop, Bike Yard has become 
              a community hub where cycling enthusiasts gather, share stories, and fuel their 
              passion for the sport. We believe that cycling is not just a mode of transportation 
              or a sport—it's a lifestyle that brings people together.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">10+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-600">1000+</div>
                <div className="text-gray-600">Bikes Sold</div>
              </div>
            </div>

            <div className="pt-4">
              <button className="btn-primary">
                Learn More About Us
              </button>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${feature.bgColor} p-6 rounded-xl hover:shadow-lg transition-all duration-300 group`}
              >
                <div className={`${feature.color} mb-4`}>
                  <feature.icon className="h-8 w-8 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed">
              To inspire and empower people to discover the joy of cycling by providing 
              exceptional products, expert service, and a welcoming community where every 
              rider feels at home.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

