import React from 'react';
import { motion } from 'framer-motion';



const About = () => {
  return (
    <section className="py-12 bg-black text-white min-h-fit ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex">
        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">
            About Munroe Boating
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            At Munroe Boating, we are passionate about connecting travelers with the tranquil beauty of Munroethuruthu’s backwaters. Our mission is to provide unforgettable boating experiences through sustainable and customer-focused services.
          </p>
        </motion.div>

        {/* History */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">
            Our Story
          </h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
            Founded in 2015, Munroe Boating began with a single houseboat and a vision to showcase the hidden gems of Munroethuruthu. Today, we offer a range of experiences, from luxurious houseboat tours to thrilling speedboat adventures, all while preserving the natural beauty of Kerala’s backwaters.
          </p>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
        </motion.div>
      </div>
    </section>
  );
};

export default About;