'use client';
import { motion } from 'framer-motion';
import React from 'react';

const HeroSection = () => {
  return (
    <section
      className="relative  bg-cover bg-center h-screen"
      style={{ backgroundImage: 'url("/tiremachines2.jpg")' }}
    >
      {/* Overlay for darkening the background */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Main Content */}
      <div className="relative mt-20 flex flex-col justify-center h-4/5 px-6 text-white max-w-7xl mx-auto">
        {/* Main Title */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-5xl font-black leading-tight mb-6 max-w-3xl font-sans"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Fast, Reliable, and{' '}
          <span className="text-[#F74231]  italic">Convenient</span>{' '}
          <span className="bg-gradient-to-r from-[#F78731] to-[#F74231] text-transparent bg-clip-text">
            Auto Care
          </span>{' '}
          at Your Doorstep
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-lg sm:text-xl mb-8 max-w-2xl font-light tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          We provide hassle-free mobile tire and brake services at your home,
          office, or anywhere you need us. Save time and avoid the stress of
          visiting a shop.
        </motion.p>

        {/* Call-to-action button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a
            href="#contact"
            className="inline-block bg-transparent hover:bg-[#F78731] text-white py-4 px-12 rounded-full text-lg transition-all duration-300 border-2 border-[#F74231] hover:border-[#F78731] transform hover:scale-105 hover:shadow-lg text-center"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
