import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import ContactForm from './ContactForm';

const contactInfo = [
  { icon: MapPin, label: 'Visit Us', value: 'Pune, Maharashtra' },
  { icon: Mail, label: 'Email Us', value: 'pairs.india.official@gmail.com' },
  { icon: Phone, label: 'Call Us', value: '7843065224' },
  { icon: Clock, label: 'Hours', value: 'Mon-Fri 9AM-6PM IST' }
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(59,130,246,0.05),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-4">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ready to Transform{' '}
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                Your Retail?
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              Schedule a personalized demo with our team. We'll show you exactly how Pairs can drive growth for your specific retail environment.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-lg shadow-gray-900/5 border border-gray-100 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{item.label}</p>
                    <p className="font-medium text-gray-900">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl shadow-2xl shadow-gray-900/10 border border-gray-100 p-8 lg:p-10">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Request Your Demo</h3>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}