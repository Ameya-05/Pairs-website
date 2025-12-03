import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Bot, Package, ArrowRight, Check } from 'lucide-react';

const products = [
  {
    id: 'dr-astan',
    name: 'Dr. Astan',
    tagline: 'Customer Behavior Analytics',
    description: 'Analyze customer behaviour & buying patterns to optimize layout, promotions, and SKU placement.',
    icon: Brain,
    color: 'from-violet-500 to-purple-600',
    shadowColor: 'shadow-violet-500/25',
    bgGlow: 'bg-violet-500/10',
    features: [
      'Heat maps & traffic flow analysis',
      'Purchase pattern recognition',
      'Shelf optimization recommendations'
    ],
    cta: 'Learn More'
  },
  {
    id: 'ai-butler',
    name: 'Sarthi',
    tagline: 'In-Store Customer Guide',
    description: 'Real-time in-store guidance: navigate customers to aisles, promos, and personalized suggestions.',
    icon: Bot,
    color: 'from-blue-500 to-cyan-500',
    shadowColor: 'shadow-blue-500/25',
    bgGlow: 'bg-blue-500/10',
    features: [
      'Personalized shopping assistance',
      'Promotion & deal notifications',
      'Indoor navigation & wayfinding'
    ],
    cta: 'Request Trial'
  },
  {
    id: 'inventory',
    name: 'Shelf',
    tagline: 'Smart Stock Control',
    description: 'Automated stock tracking, demand forecasts and low-stock alerts to reduce shrinkage.',
    icon: Package,
    color: 'from-teal-500 to-emerald-500',
    shadowColor: 'shadow-teal-500/25',
    bgGlow: 'bg-teal-500/10',
    features: [
      'Real-time inventory tracking',
      'AI-powered demand forecasting',
      'Automated reorder triggers'
    ],
    cta: 'Learn More'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function Products() {
  return (
    <section id="products" className="py-24 lg:py-32 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-4">
            Our Products
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Intelligent Solutions for{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Modern Retail
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Three powerful AI-driven products working together to transform every aspect of your retail operations.
          </p>
        </motion.div>

        {/* Product Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group relative"
            >
              <div className={`absolute inset-0 ${product.bgGlow} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative h-full bg-white rounded-3xl border border-gray-100 p-8 shadow-lg shadow-gray-900/5 hover:shadow-2xl hover:shadow-gray-900/10 transition-all duration-500 overflow-hidden flex flex-col">
                {/* Decorative Corner */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${product.color} opacity-5 rounded-bl-[100px]`} />
                
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.color} ${product.shadowColor} shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <product.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-4 flex-grow">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{product.name}</h3>
                    <p className="text-sm font-medium text-blue-600">{product.tagline}</p>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 pt-4">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${product.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA - Replaced <Button> with standard HTML button */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <button
                    className="group/btn w-full flex items-center justify-between px-0 py-2 bg-transparent hover:bg-transparent transition-colors cursor-pointer"
                  >
                    <span className="font-semibold text-gray-900 group-hover/btn:text-blue-600 transition-colors">
                      {product.cta}
                    </span>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover/btn:text-blue-600 group-hover/btn:translate-x-1 transition-all" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}