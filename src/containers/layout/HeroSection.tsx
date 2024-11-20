'use client';
import { motion } from 'framer-motion';
import React from 'react';

const HeroSection = () => {
  return (
    <section
      className="relative md:mb-20  bg-cover bg-center h-screen"
      style={{ backgroundImage: 'url("/carContact.jpg")' }} // Replace with your image URL
    >
      {/* Overlay for darkening the background */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Main Content */}
      <div className="relative flex flex-col items-center justify-center text-center h-4/5 px-6 text-white">
        {/* Subtitle */}
        <motion.h2
          className="text-lg font-semibold text-red-500 uppercase tracking-wider mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Professional Mobile Tire & Brake Services
        </motion.h2>

        {/* Main Title */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Fast, Reliable, and Convenient Auto Care at Your Doorstep
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-lg sm:text-xl mb-8 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          We provide hassle-free mobile tire and brake services at your home,
          office, or anywhere you need us. Save time and avoid the stress of
          visiting a shop.
        </motion.p>

        {/* Call-to-action buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a
            href="#services"
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300"
          >
            Book a Service
          </a>
          <a
            href="#contact"
            className="bg-red-500 hover:bg-red-600 text-white py-3 px-8 rounded-full text-lg transition duration-300"
          >
            Contact Us
          </a>
        </motion.div>
      </div>

      {/* Additional Section */}
      <div className="relative hidden md:block py-10 px-6 z-10 mx-20 sm:px-16 lg:px-24 text-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {/* Left Content */}
          <div className="flex flex-col p-10 bg-yellow-300 items-center justify-center">
            <h3 className="text-xl font-bold text-black mb-4">
              Build Your Dream
            </h3>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-4">
              25 Years Of Undefeated Success
            </h2>
            <p className="text-gray-700 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo,
              lacinia eget consectetur sed, convallis at tellus.
            </p>
            <a
              href="#"
              className="bg-black text-white hover:bg-gray-800 py-3 px-6 rounded-full font-bold transition duration-300"
            >
              Work With Us
            </a>
          </div>

          {/* Right Content */}
          <div className="grid grid-cols-1 bg-white p-10">
            <video 
              src="/vanDisplay.mp4"
              className="w-screen h-full object-cover"
              controls
              playsInline
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
