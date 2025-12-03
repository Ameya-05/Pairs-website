import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, ShoppingCart, Users, BarChart3, Sparkles } from 'lucide-react';

export default function Hero({ onRequestDemo, onWatchDemo }) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-white pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-cyan-300/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/2 -left-40 w-80 h-80 bg-gradient-to-br from-teal-400/20 to-emerald-300/20 rounded-full blur-3xl"
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6"
            >
              <Sparkles className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-blue-700">AI-Powered Retail Intelligence</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Transform Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-teal-500 bg-clip-text text-transparent">
                Retail Experience
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-lg">
              Harness AI to understand customers, optimize layouts, and boost revenue with real-time insights that drive results.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              {/* Replaced <Button> with standard <button> */}
              <button
                onClick={onRequestDemo}
                className="group bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-6 rounded-2xl text-lg font-semibold shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center"
              >
                Request Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              {/* Replaced <Button> with standard <button> */}
              <button
                onClick={onWatchDemo}
                className="group px-8 py-6 rounded-2xl text-lg font-semibold border-2 border-gray-200 hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-300 flex items-center justify-center text-gray-700"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/30">
                  <Play className="w-4 h-4 text-white ml-0.5" fill="white" />
                </div>
                Watch Demo
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <p className="text-sm text-gray-500 mb-4">Trusted by leading retailers</p>
              <div className="flex flex-wrap gap-8 items-center opacity-60">
                {['Carrefour', 'Walmart', 'Tesco', 'Kroger'].map((brand) => (
                  <span key={brand} className="text-lg font-semibold text-gray-400">{brand}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-blue-900/10 border border-white/50 p-6 lg:p-8"
              >
                {/* Store Visualization */}
                <div className="aspect-[4/3] bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl overflow-hidden relative">
                  {/* Grid Floor */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:30px_30px]" />
                  
                  {/* Store Aisles */}
                  <div className="absolute inset-4 grid grid-cols-3 gap-3">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="bg-gradient-to-b from-blue-100/50 to-blue-200/50 rounded-lg"
                      />
                    ))}
                  </div>

                  {/* Animated Shoppers */}
                  <motion.div
                    animate={{ x: [0, 100, 50, 150, 0], y: [0, 30, 60, 30, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/4 left-1/4"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow-lg shadow-blue-500/30 flex items-center justify-center">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ x: [100, 0, 50, 0, 100], y: [50, 80, 20, 80, 50] }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 right-1/4"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full shadow-lg shadow-teal-500/30 flex items-center justify-center">
                      <ShoppingCart className="w-4 h-4 text-white" />
                    </div>
                  </motion.div>
                </div>

                {/* Stats Bar */}
                <div className="mt-6 grid grid-cols-3 gap-4">
                  {[
                    { label: 'Visitors Today', value: '2,847', icon: Users },
                    { label: 'Conversion', value: '34.2%', icon: BarChart3 },
                    { label: 'Avg. Basket', value: '$67', icon: ShoppingCart },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                      className="text-center p-3 bg-gradient-to-br from-slate-50 to-white rounded-xl border border-gray-100"
                    >
                      <stat.icon className="w-5 h-5 text-blue-500 mx-auto mb-2" />
                      <p className="text-lg font-bold text-gray-900">{stat.value}</p>
                      <p className="text-xs text-gray-500">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl shadow-blue-900/10 p-4 border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-teal-500 flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">+23%</p>
                    <p className="text-xs text-gray-500">Revenue</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -3, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl shadow-blue-900/10 p-4 border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">AI Active</p>
                    <p className="text-xs text-gray-500">Real-time</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}