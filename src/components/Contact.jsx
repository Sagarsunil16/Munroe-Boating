import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import { User, Mail, MessageSquare, Send, Phone, MapPin, Anchor } from 'lucide-react';

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: (values) => {
      console.log('Contact form submitted:', values);
      formik.resetForm();
    },
  });

  return (
    <section id="contact" className="py-20 bg-black text-white min-h-screen relative overflow-hidden">
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
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-12 text-center"
        >
          <div className="flex justify-center mb-6">
            <Anchor size={40} className="text-gray-300" aria-hidden="true" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-200 leading-relaxed max-w-4xl mx-auto">
            Have questions or need assistance? Contact Munroe Boating, and let us help you plan your perfect backwater adventure.
          </p>
        </motion.div>
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          <form
            onSubmit={formik.handleSubmit}
            className="bg-gray-800 text-white p-8 rounded-lg shadow-lg border border-gray-700 hover:border-gray-500 transition-all duration-300 max-w-lg mx-auto"
          >
            {/* Name */}
            <div className="mb-6 relative">
              <label htmlFor="name" className="block text-sm font-semibold text-gray-200 mb-2">
                Name
              </label>
              <div className="relative">
                <User
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                  aria-hidden="true"
                />
                <input
                  type="text"
                  id="name"
                  name="name"
                  {...formik.getFieldProps('name')}
                  className={`block w-full pl-12 pr-4 py-3 rounded-md border-gray-600 bg-gray-900 text-white shadow-sm focus:border-gray-500 focus:ring-gray-500 transition-colors ${
                    formik.touched.name && formik.errors.name ? 'border-red-500' : ''
                  }`}
                />
              </div>
              {formik.touched.name && formik.errors.name && (
                <p className="mt-2 text-sm text-red-500">{formik.errors.name}</p>
              )}
            </div>
            {/* Email */}
            <div className="mb-6 relative">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-200 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                  aria-hidden="true"
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  {...formik.getFieldProps('email')}
                  className={`block w-full pl-12 pr-4 py-3 rounded-md border-gray-600 bg-gray-900 text-white shadow-sm focus:border-gray-500 focus:ring-gray-500 transition-colors ${
                    formik.touched.email && formik.errors.email ? 'border-red-500' : ''
                  }`}
                />
              </div>
              {formik.touched.email && formik.errors.email && (
                <p className="mt-2 text-sm text-red-500">{formik.errors.email}</p>
              )}
            </div>
            {/* Message */}
            <div className="mb-6 relative">
              <label htmlFor="message" className="block text-sm font-semibold text-gray-200 mb-2">
                Message
              </label>
              <div className="relative">
                <MessageSquare
                  className="absolute left-3 top-4 text-gray-400"
                  size={20}
                  aria-hidden="true"
                />
                <textarea
                  id="message"
                  name="message"
                  {...formik.getFieldProps('message')}
                  rows="6"
                  className={`block w-full pl-12 pr-4 py-3 rounded-md border-gray-600 bg-gray-900 text-white shadow-sm focus:border-gray-500 focus:ring-gray-500 transition-colors ${
                    formik.touched.message && formik.errors.message ? 'border-red-500' : ''
                  }`}
                ></textarea>
              </div>
              {formik.touched.message && formik.errors.message && (
                <p className="mt-2 text-sm text-red-500">{formik.errors.message}</p>
              )}
            </div>
            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={formik.isSubmitting}
              className={`w-full px-6 py-3 bg-gray-700 text-white font-semibold rounded-md shadow-md hover:bg-gray-600 transition-all duration-200 ${
                formik.isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <Send size={20} className="inline mr-2" />
              {formik.isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>
        </motion.div>
        {/* Contact Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          className="mt-12 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-6 tracking-tight">
            Other Ways to Reach Us
          </h2>
          <ul className="space-y-4 text-gray-300 text-base sm:text-lg max-w-md mx-auto">
            <li className="flex items-center justify-center">
              <Mail size={18} className="mr-2 text-gray-400" aria-hidden="true" />
              <a href="mailto:info@munroeboating.com" className="hover:text-gray-100 transition-colors">
                info@munroeboating.com
              </a>
            </li>
            <li className="flex items-center justify-center">
              <Phone size={18} className="mr-2 text-gray-400" aria-hidden="true" />
              <a href="tel:+918138804905" className="hover:text-gray-100 transition-colors">
                +91 813-880-4905
              </a>
            </li>
            <li className="flex items-center justify-center">
              <MapPin size={18} className="mr-2 text-gray-400" aria-hidden="true" />
              <span>Plavaravayalil, Munroethuruthu, Kerala, India</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;