import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Anchor, Sailboat } from 'lucide-react';

const About = () => {
  return (
    <section className="py-16 bg-black text-white min-h-screen relative overflow-hidden">
      {/* Subtle Wave Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"%3E%3Cpath fill="%23FFFFFF" fill-opacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"%3E%3C/path%3E%3C/svg%3E')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-12 text-center"
        >
          <div className="flex justify-center mb-6">
            <Anchor size={40} className="text-gray-300" aria-hidden="true" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight text-white">
            About Munroe Boating
          </h1>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 hover:border-gray-500 transition-all duration-300 max-w-4xl mx-auto">
            <p className="text-xl text-gray-200 leading-relaxed">
              Munroe Boating is dedicated to delivering exceptional boating experiences that showcase the serene beauty of Munroethuruthu’s backwaters. Our commitment to sustainability, customer satisfaction, and authentic exploration ensures every journey is memorable and meaningful.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="mt-8"
          >
            <Link
              to="/booking"
              className="inline-block px-8 py-4 bg-gray-700 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-gray-600 transition-all duration-300"
              aria-label="Book your boating experience"
            >
              Plan Your Journey
            </Link>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-600 opacity-50 my-12"></div>

        {/* History */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          className="mb-12"
        >
          <div className="flex justify-center mb-6">
            <Sailboat size={40} className="text-gray-300" aria-hidden="true" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-white">
            Our Heritage
          </h2>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 hover:border-gray-500 transition-all duration-300 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-700 text-white flex items-center justify-center font-semibold">
                  2015
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-white">Our Founding</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Established with a single houseboat, Munroe Boating was born from a vision to share the tranquil splendor of Munroethuruthu’s waterways with the world.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-700 text-white flex items-center justify-center font-semibold">
                  Today
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-white">Our Present</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Today, we provide a diverse fleet of luxurious houseboats and dynamic speedboats, offering eco-conscious adventures that preserve the pristine beauty of Kerala’s backwaters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;