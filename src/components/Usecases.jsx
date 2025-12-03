import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Store, Building2, Coffee, Heart, ArrowUpRight, TrendingUp, Users, DollarSign } from 'lucide-react';

const useCases = [
  {
    id: 'supermarket',
    name: 'Supermarkets',
    icon: Store,
    image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&auto=format&fit=crop&q=80',
    description: 'Optimize store layouts, track customer journeys, and boost basket sizes with intelligent insights.',
    stats: [
      { label: 'Revenue Increase', value: '+28%', icon: DollarSign },
      { label: 'Customer Retention', value: '+45%', icon: Users },
      { label: 'Shrinkage Reduction', value: '-32%', icon: TrendingUp }
    ],
    caseSnippet: '"Pairs helped us increase average transaction value by 28% within 6 months through optimized product placement."',
    company: 'Metro Fresh Markets'
  },
  {
    id: 'hypermarket',
    name: 'Hypermarkets',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=800&auto=format&fit=crop&q=80',
    description: 'Manage large-scale operations with real-time analytics across departments and zones.',
    stats: [
      { label: 'Operational Efficiency', value: '+40%', icon: TrendingUp },
      { label: 'Staff Productivity', value: '+35%', icon: Users },
      { label: 'Inventory Accuracy', value: '99.2%', icon: DollarSign }
    ],
    caseSnippet: '"The AI-powered inventory management alone saved us over $2M annually in reduced waste and stockouts."',
    company: 'Global Mart International'
  },
  {
    id: 'convenience',
    name: 'Convenience Stores',
    icon: Coffee,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=80',
    description: 'Quick insights for fast-paced environments. Optimize limited space for maximum impact.',
    stats: [
      { label: 'Queue Time Reduced', value: '-60%', icon: TrendingUp },
      { label: 'Daily Transactions', value: '+25%', icon: DollarSign },
      { label: 'Customer Satisfaction', value: '4.8★', icon: Users }
    ],
    caseSnippet: '"With AI Butler, our customers find what they need 3x faster. Wait times dropped dramatically."',
    company: 'QuickStop Chain'
  },
  {
    id: 'pharmacy',
    name: 'Pharmacies',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&auto=format&fit=crop&q=80',
    description: 'Compliance-ready inventory tracking with sensitive item management and customer privacy.',
    stats: [
      { label: 'Compliance Rate', value: '100%', icon: TrendingUp },
      { label: 'Stock Accuracy', value: '99.9%', icon: DollarSign },
      { label: 'Wait Time Reduced', value: '-50%', icon: Users }
    ],
    caseSnippet: '"Pairs ensures we never run out of critical medications while maintaining strict compliance standards."',
    company: 'HealthFirst Pharmacy Group'
  }
];

export default function UseCases() {
  const [activeCase, setActiveCase] = useState(useCases[0]);

  return (
    <section id="usecases" className="py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-50 text-teal-600 text-sm font-semibold mb-4">
            Use Cases
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Built for Every{' '}
            <span className="bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">
              Retail Format
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            From corner stores to mega hypermarkets, Pairs adapts to your unique retail environment.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Industry Tabs */}
          <div className="lg:col-span-4 space-y-3">
            {useCases.map((useCase) => (
              <motion.button
                key={useCase.id}
                onClick={() => setActiveCase(useCase)}
                whileHover={{ x: 4 }}
                className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 text-left ${
                  activeCase.id === useCase.id
                    ? 'bg-white shadow-lg shadow-blue-900/10 border border-blue-100'
                    : 'hover:bg-white/50 border border-transparent'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  activeCase.id === useCase.id
                    ? 'bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/30'
                    : 'bg-gray-100'
                }`}>
                  <useCase.icon className={`w-6 h-6 ${activeCase.id === useCase.id ? 'text-white' : 'text-gray-500'}`} />
                </div>
                <div>
                  <h3 className={`font-semibold transition-colors ${
                    activeCase.id === useCase.id ? 'text-gray-900' : 'text-gray-600'
                  }`}>
                    {useCase.name}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-1">{useCase.description}</p>
                </div>
                {activeCase.id === useCase.id && (
                  <ArrowUpRight className="w-5 h-5 text-blue-500 ml-auto" />
                )}
              </motion.button>
            ))}
          </div>

          {/* Case Content */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCase.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-3xl shadow-xl shadow-gray-900/5 border border-gray-100 overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-64 lg:h-80 overflow-hidden">
                  <img
                    src={activeCase.image}
                    alt={activeCase.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <activeCase.icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{activeCase.name}</h3>
                    </div>
                    <p className="text-white/80">{activeCase.description}</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 divide-x divide-gray-100 border-b border-gray-100">
                  {activeCase.stats.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="p-6 text-center"
                    >
                      <p className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                        {stat.value}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Case Snippet */}
                <div className="p-6 lg:p-8">
                  <blockquote className="text-gray-700 italic text-lg leading-relaxed">
                    {activeCase.caseSnippet}
                  </blockquote>
                  <p className="mt-4 text-sm font-semibold text-gray-500">
                    — {activeCase.company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}