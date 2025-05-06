import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <ScrollLink to="home" smooth duration={500} className="flex items-center space-x-2">
              <svg
                className="h-8 w-8 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v18m-6-6l6-6 6 6"
                />
              </svg>
              <span className="text-2xl font-extrabold text-white tracking-tight">
                Munroe Boating
              </span>
            </ScrollLink>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <ScrollLink
              to="home"
              smooth
              duration={500}
              className="text-gray-300 hover:text-white transition-colors duration-200 font-semibold cursor-pointer"
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="our-story"
              smooth
              duration={500}
              className="text-gray-300 hover:text-white transition-colors duration-200 font-semibold cursor-pointer"
            >
              About
            </ScrollLink>
            <ScrollLink
              to="services"
              smooth
              duration={500}
              className="text-gray-300 hover:text-white transition-colors duration-200 font-semibold cursor-pointer"
            >
              Services
            </ScrollLink>
            <ScrollLink
              to="packages"
              smooth
              duration={500}
              className="text-gray-300 hover:text-white transition-colors duration-200 font-semibold cursor-pointer"
            >
              Packages
            </ScrollLink>
            
            <ScrollLink
              to="contact"
              smooth
              duration={500}
              className="text-gray-300 hover:text-white transition-colors duration-200 font-semibold cursor-pointer"
            >
              Contact
            </ScrollLink>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="md:hidden bg-gray-900"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <ScrollLink
              to="home"
              smooth
              duration={500}
              className="block text-gray-300 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-base font-semibold transition-colors duration-200"
              onClick={toggleMenu}
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="our-story"
              smooth
              duration={500}
              className="block text-gray-300 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-base font-semibold transition-colors duration-200"
              onClick={toggleMenu}
            >
              About
            </ScrollLink>
            <ScrollLink
              to="services"
              smooth
              duration={500}
              className="block text-gray-300 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-base font-semibold transition-colors duration-200"
              onClick={toggleMenu}
            >
              Services
            </ScrollLink>
            <ScrollLink
              to="packages"
              smooth
              duration={500}
              className="block text-gray-300 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-base font-semibold transition-colors duration-200"
              onClick={toggleMenu}
            >
              Packages
            </ScrollLink>
            <ScrollLink
              to="booking"
              smooth
              duration={500}
              className="block text-gray-300 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-base font-semibold transition-colors duration-200"
              onClick={toggleMenu}
            >
              Booking
            </ScrollLink>
            <ScrollLink
              to="testimonials"
              smooth
              duration={500}
              className="block text-gray-300 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-base font-semibold transition-colors duration-200"
              onClick={toggleMenu}
            >
              Testimonials
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth
              duration={500}
              className="block text-gray-300 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-base font-semibold transition-colors duration-200"
              onClick={toggleMenu}
            >
              Contact
            </ScrollLink>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;