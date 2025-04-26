import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-teal-500" aria-hidden="true" />
                <a href="mailto:info@munroeboating.com" className="hover:text-teal-500 transition-colors">
                  info@munroeboating.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-teal-500" aria-hidden="true" />
                <a href="tel:+911234567890" className="hover:text-teal-500 transition-colors">
                  +91 123-456-7890
                </a>
              </li>
              <li className="flex items-center">
                <MapPin size={18} className="mr-2 text-teal-500" aria-hidden="true" />
                <span>Munroethuruthu, Kerala, India</span>
              </li>
            </ul>
          </div>
          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-teal-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/booking" className="hover:text-teal-500 transition-colors">
                  Book Now
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-teal-500 transition-colors">
                  Packages
                </Link>
              </li>
            </ul>
          </div>
          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <motion.a
                href="https://instagram.com/munroeboating"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: '#0D9488' }}
                aria-label="Follow us on Instagram"
              >
                <Instagram size={24} />
              </motion.a>
              <motion.a
                href="https://facebook.com/munroeboating"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: '#0D9488' }}
                aria-label="Follow us on Facebook"
              >
                <Facebook size={24} />
              </motion.a>
              <motion.a
                href="https://twitter.com/munroeboating"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: '#0D9488' }}
                aria-label="Follow us on Twitter"
              >
                <Twitter size={24} />
              </motion.a>
            </div>
          </div>
        </motion.div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Munroe Boating. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;