import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../images/pairsai.png';
import { Send, Linkedin, Twitter, Mail} from 'lucide-react';


const footerLinks = {
  Products: ['Dr. Astan', 'Sarthi', 'Shelf'],
  Solutions: ['Supermarkets', 'Hypermarkets', 'Convenience Stores', 'Pharmacies'],
  Resources: ['Documentation', 'API Reference', 'Case Studies', 'Blog'],
  Company: ['About Us', 'Careers', 'Press', 'Contact']
};

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/company/pairsindia/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/PairsAi', label: 'Twitter' },
  { icon: Mail, href:'mailto:pairs.india.official@gmail.com', label: 'Mail' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-3">
                Stay Ahead of Retail Innovation
              </h3>
              <p className="text-gray-400">
                Get weekly insights on AI in retail, industry trends, and product updates.
              </p>
            </div>
            <div>
              {subscribed ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 text-emerald-400"
                >
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <Send className="w-5 h-5" />
                  </div>
                  <span className="font-medium">Thanks for subscribing!</span>
                </motion.div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-3">
                  <div className="flex-1">
                    {/* Replaced <Input> with standard <input> */}
                    <input
                      type="email"
                      required
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full h-12 px-4 bg-white/5 border border-white/10 text-white placeholder:text-gray-500 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    />
                  </div>
                  {/* Replaced <Button> with standard <button> */}
                  <button
                    type="submit"
                    className="h-12 px-6 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-xl font-semibold transition-all shadow-lg shadow-blue-500/20"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
                <img src={logo} alt="logo" className='w-14 h-12 flex items-center justify-center'/>
              <span className="text-xl font-bold">Pairs</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-xs">
              AI-powered retail intelligence platform helping businesses understand customers and optimize operations.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center transition-colors"
                >
                  <social.icon className="w-5 h-5 text-gray-400" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2025 Pairs India. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}