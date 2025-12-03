import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react'; // Removed 'Play' icon as it's no longer needed
import ContactForm from './ContactForm';
import video from '../video/demo.mp4';

export default function DemoModal({ isOpen, onClose, type = 'request' }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="flex-none px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-white rounded-t-3xl">
              <h2 className="text-xl font-bold text-gray-900">
                {type === 'video' ? 'Watch Demo' : 'Request a Demo'}
              </h2>
              
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500 hover:text-gray-700 outline-none focus:ring-2 focus:ring-blue-500/20"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 lg:p-8">
              {type === 'video' ? (
                // --- VIDEO SECTION STARTS HERE ---
                <div className="aspect-video bg-gray-800 rounded-2xl overflow-hidden shadow-lg relative">
                  <video 
                    className="w-full h-full object-contain" // object-contain ensures the whole video is visible without cropping
                    controls 
                    autoPlay
                    src={video}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
                // --- VIDEO SECTION ENDS HERE ---
              ) : (
                <ContactForm />
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}