import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Building2, Rocket, Crown, Star } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    description: 'Perfect for small stores getting started with AI',
    price: '₹499',
    period: '/month',
    icon: Rocket,
    color: 'from-blue-500 to-blue-600',
    features: [
      '1 store location',
      'Basic analytics dashboard',
      'Customer flow tracking',
      'Email support',
      '30-day data retention'
    ],
    cta: 'Start Free Trial',
    popular: false
  },
  {
    name: 'Professional',
    description: 'For growing retailers with multiple locations',
    price: '₹1,299',
    period: '/month',
    icon: Star,
    color: 'from-violet-500 to-purple-600',
    features: [
      'Up to 10 store locations',
      'Advanced AI analytics',
      'All three product modules',
      'Priority support',
      '1-year data retention',
      'Custom integrations',
      'Mobile app access'
    ],
    cta: 'Start Free Trial',
    popular: true
  },
  {
    name: 'Enterprise',
    description: 'Custom solutions for large retail operations',
    price: 'Custom',
    period: '',
    icon: Crown,
    color: 'from-teal-500 to-emerald-500',
    features: [
      'Unlimited locations',
      'White-label options',
      'Dedicated success manager',
      '24/7 phone support',
      'Custom AI model training',
      'On-premise deployment',
      'SLA guarantee',
      'Advanced security'
    ],
    cta: 'Contact Sales',
    popular: false
  }
];

export default function Pricing({ onRequestDemo }) {
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.08),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-4">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Plans That{' '}
            <span className="bg-gradient-to-r from-blue-600 to-violet-500 bg-clip-text text-transparent">
              Scale With You
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Start small and grow. All plans include a 14-day free trial with no credit card required.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-3xl p-8 ${
                tier.popular 
                  ? 'bg-gradient-to-b from-violet-600 to-purple-700 text-white shadow-2xl shadow-violet-500/30 scale-105 z-10' 
                  : 'bg-white border border-gray-100 shadow-xl shadow-gray-900/5'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 bg-gradient-to-r from-amber-400 to-orange-400 text-white text-sm font-semibold rounded-full shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${tier.color} flex items-center justify-center mb-6 ${
                tier.popular ? 'shadow-lg shadow-white/20' : 'shadow-lg'
              }`}>
                <tier.icon className="w-7 h-7 text-white" />
              </div>

              {/* Header */}
              <h3 className={`text-2xl font-bold mb-2 ${tier.popular ? 'text-white' : 'text-gray-900'}`}>
                {tier.name}
              </h3>
              <p className={`text-sm mb-6 ${tier.popular ? 'text-white/80' : 'text-gray-600'}`}>
                {tier.description}
              </p>

              {/* Price */}
              <div className="mb-8">
                <span className={`text-4xl font-bold ${tier.popular ? 'text-white' : 'text-gray-900'}`}>
                  {tier.price}
                </span>
                <span className={tier.popular ? 'text-white/70' : 'text-gray-500'}>
                  {tier.period}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      tier.popular ? 'bg-white/20' : 'bg-blue-100'
                    }`}>
                      <Check className={`w-3 h-3 ${tier.popular ? 'text-white' : 'text-blue-600'}`} />
                    </div>
                    <span className={`text-sm ${tier.popular ? 'text-white/90' : 'text-gray-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button (Replaced imports with standard button) */}
              <button
                onClick={onRequestDemo}
                className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center ${
                  tier.popular
                    ? 'bg-white text-violet-600 hover:bg-gray-100 shadow-lg'
                    : 'bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 shadow-lg shadow-blue-500/25'
                }`}
              >
                {tier.cta}
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Enterprise CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-50 rounded-2xl border border-gray-100">
            <Building2 className="w-5 h-5 text-gray-500" />
            <span className="text-gray-600">Need a custom solution?</span>
            <button 
              onClick={onRequestDemo}
              className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              Talk to our team →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}