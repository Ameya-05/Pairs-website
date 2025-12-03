import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Shield, 
  LayoutDashboard, 
  Smartphone, 
  Plug, 
  Zap,
  Eye,
  Lock,
  Settings,
  Bell,
  Database,
  Cloud
} from 'lucide-react';

const benefits = [
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Instant insights from live data streams. Make decisions based on what\'s happening now, not yesterday.',
    color: 'bg-blue-500'
  },
  {
    icon: Shield,
    title: 'Privacy-First Design',
    description: 'GDPR & CCPA compliant. All data is anonymized and encrypted. Your customers\' privacy is paramount.',
    color: 'bg-emerald-500'
  },
  {
    icon: LayoutDashboard,
    title: 'Admin Dashboards',
    description: 'Beautiful, intuitive dashboards for every role. From store managers to C-suite executives.',
    color: 'bg-violet-500'
  },
  {
    icon: Smartphone,
    title: 'Mobile Companion App',
    description: 'Stay connected on the go. Real-time alerts, quick actions, and full visibility from your phone.',
    color: 'bg-orange-500'
  },
  {
    icon: Plug,
    title: 'POS & ERP Integrations',
    description: 'Seamless connections to your existing systems. SAP, Oracle, Shopify, and 50+ more integrations.',
    color: 'bg-pink-500'
  },
  {
    icon: Zap,
    title: 'Instant Deployment',
    description: 'Go live in days, not months. Our team handles everything from setup to training.',
    color: 'bg-cyan-500'
  }
];

const features = [
  { icon: Eye, label: 'Customer tracking' },
  { icon: Lock, label: 'Data encryption' },
  { icon: Settings, label: 'Custom workflows' },
  { icon: Bell, label: 'Smart alerts' },
  { icon: Database, label: 'Data warehouse' },
  { icon: Cloud, label: 'Cloud-native' }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Benefits() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.03),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-sm font-semibold mb-4">
            Features & Benefits
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">
              Succeed
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Enterprise-grade features with startup simplicity. Get powerful tools that just work.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="group p-6 lg:p-8 bg-white rounded-2xl border border-gray-100 shadow-lg shadow-gray-900/5 hover:shadow-xl hover:shadow-gray-900/10 transition-all duration-300"
            >
              <div className={`w-12 h-12 ${benefit.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all cursor-default"
            >
              <feature.icon className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-gray-700">{feature.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Integration Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-sm text-gray-500 mb-6">Integrates seamlessly with your existing stack</p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-50">
            {['SAP', 'Oracle', 'Shopify', 'Square', 'Salesforce', 'Microsoft'].map((brand) => (
              <span key={brand} className="text-xl font-bold text-gray-400">{brand}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}