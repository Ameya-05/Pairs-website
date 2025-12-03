import React from 'react';
import { motion } from 'framer-motion';
import { Database, Cpu, Zap, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Collect',
    description: 'Seamlessly gather data from cameras, sensors, POS systems, and mobile apps without disrupting operations.',
    icon: Database,
    color: 'from-blue-500 to-blue-600',
    details: ['Camera feeds', 'POS transactions', 'Sensor data', 'Mobile app usage']
  },
  {
    number: '02',
    title: 'Analyze',
    description: 'Our AI processes data in real-time, identifying patterns, predicting trends, and generating actionable insights.',
    icon: Cpu,
    color: 'from-violet-500 to-purple-600',
    details: ['Pattern recognition', 'Trend prediction', 'Anomaly detection', 'Customer segmentation']
  },
  {
    number: '03',
    title: 'Act',
    description: 'Receive automated recommendations, alerts, and optimizations that drive immediate business impact.',
    icon: Zap,
    color: 'from-teal-500 to-emerald-500',
    details: ['Smart alerts', 'Auto-adjustments', 'Staff notifications', 'Customer engagement']
  }
];

export default function HowItWorks() {
  return (
    <section id="solutions" className="py-24 lg:py-10 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-100/50 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-24"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-50 text-purple-600 text-sm font-semibold mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Simple Process,{' '}
            <span className="bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent">
              Powerful Results
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            From data collection to actionable insights in three seamless steps.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-teal-200 -translate-y-1/2 z-0" />
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                {/* Card */}
                <div className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-900/5 border border-gray-100 hover:shadow-2xl hover:shadow-gray-900/10 transition-all duration-500 group">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8">
                    <span className="text-6xl font-black text-gray-100 group-hover:text-blue-100 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} shadow-lg flex items-center justify-center mb-6`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{step.description}</p>

                  {/* Details */}
                  <div className="space-y-2">
                    {step.details.map((detail, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="flex items-center gap-2 text-sm text-gray-500"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${step.color}`} />
                        {detail}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Arrow - Mobile/Tablet */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center py-6">
                    <ArrowRight className="w-6 h-6 text-gray-300 rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Animated Flow Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="hidden lg:flex justify-center mt-16"
        >
          <div className="flex items-center gap-4 px-6 py-3 bg-white rounded-full shadow-lg border border-gray-100">
            <motion.div
              animate={{ 
                x: [0, 100, 200, 200, 100, 0],
                opacity: [1, 1, 1, 0, 0, 1]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600"
            />
            <span className="text-sm text-gray-500">Data flows continuously through our AI pipeline</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}