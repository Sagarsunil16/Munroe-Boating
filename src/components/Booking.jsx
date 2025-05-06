import React from 'react';
import { useFormik } from 'formik';
import { motion } from 'framer-motion';
import * as Yup from 'yup';
import { Mail, User, Users, Calendar, Package } from 'lucide-react';

const Booking = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      date: null,
      package: '',
      guests: 1,
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Full name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      phone: Yup.string().matches(/^[0-9]{10}$/, 'Phone number must be 10 digits').required('Phone number is required'),
      date: Yup.date().nullable().required('Booking date is required'),
      package: Yup.string().required('Please select a package'),
      guests: Yup.number()
        .min(1, 'At least 1 Guest is required')
        .required('Number of guests is required'),
      message: Yup.string(),
    }),
    onSubmit: (values) => {
      console.log('Booking Submitted', values);
      formik.resetForm();
    },
  });

  return (
    <section id="booking" className="py-20 bg-black text-white min-h-screen relative overflow-hidden flex items-center">
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
            <Calendar size={40} className="text-gray-300" aria-hidden="true" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Plan Your Boating Journey
          </h2>
          <p className="text-xl text-gray-200 leading-relaxed max-w-4xl mx-auto">
            Reserve your adventure with Munroe Boating and experience the serene beauty of Munroethuruthu’s backwaters.
          </p>
        </motion.div>
        <div className="flex flex-col md:flex-row gap-6 lg:gap-12">
          {/* Left: Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="w-full md:w-1/2"
          >
            <form
              onSubmit={formik.handleSubmit}
              className="bg-gray-800 shadow-lg rounded-lg p-6 max-w-sm mx-auto md:mx-0 border border-gray-700 hover:border-gray-500 transition-all duration-300"
            >
              {/* Name */}
              <div className="mb-4 relative">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-200">
                  Full Name
                </label>
                <div className="relative">
                  <User
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={18}
                    aria-hidden="true"
                  />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    {...formik.getFieldProps('name')}
                    className={`mt-1 block w-full pl-10 rounded-md border-gray-600 bg-gray-900 text-white shadow-sm focus:border-gray-500 focus:ring-gray-500 transition-colors duration-200 ${
                      formik.touched.name && formik.errors.name ? 'border-red-500' : ''
                    }`}
                  />
                </div>
                {formik.touched.name && formik.errors.name && (
                  <p className="mt-1 text-sm text-red-500">{formik.errors.name}</p>
                )}
              </div>
              {/* Email */}
              <div className="mb-4 relative">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-200">
                  Email
                </label>
                <div className="relative">
                  <Mail
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={18}
                    aria-hidden="true"
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    {...formik.getFieldProps('email')}
                    className={`mt-1 block w-full pl-10 rounded-md border-gray-600 bg-gray-900 text-white shadow-sm focus:border-gray-500 focus:ring-gray-500 transition-colors duration-200 ${
                      formik.touched.email && formik.errors.email ? 'border-red-500' : ''
                    }`}
                  />
                </div>
                {formik.touched.email && formik.errors.email && (
                  <p className="mt-1 text-sm text-red-500">{formik.errors.email}</p>
                )}
              </div>
              {/* Date */}
              <div className="mb-4 relative">
                <label htmlFor="date" className="block text-sm font-semibold text-gray-200">
                  Booking Date
                </label>
                <div className="relative">
                  <Calendar
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={18}
                    aria-hidden="true"
                  />
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formik.values.date || ''}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    min={new Date().toISOString().split('T')[0]}
                    className={`mt-1 block w-full pl-10 rounded-md border-gray-600 bg-gray-900 text-white shadow-sm focus:border-gray-500 focus:ring-gray-500 transition-colors duration-200 ${
                      formik.touched.date && formik.errors.date ? 'border-red-500' : ''
                    }`}
                  />
                </div>
                {formik.touched.date && formik.errors.date && (
                  <p className="mt-1 text-sm text-red-500">{formik.errors.date}</p>
                )}
              </div>
              {/* Package */}
              <div className="mb-4 relative">
                <label htmlFor="package" className="block text-sm font-semibold text-gray-200">
                  Package
                </label>
                <div className="relative">
                  <Package
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={18}
                    aria-hidden="true"
                  />
                  <select
                    id="package"
                    name="package"
                    {...formik.getFieldProps('package')}
                    className={`mt-1 block w-full pl-10 rounded-md border-gray-600 bg-gray-900 text-white shadow-sm focus:border-gray-500 focus:ring-gray-500 transition-colors duration-200 ${
                      formik.touched.package && formik.errors.package ? 'border-red-500' : ''
                    }`}
                  >
                    <option value="">Select a Package</option>
                    <option value="houseboat">Houseboat Tour</option>
                    <option value="speedboat">Speedboat Adventure</option>
                    <option value="fishing">Fishing Trip</option>
                  </select>
                </div>
                {formik.touched.package && formik.errors.package && (
                  <p className="mt-1 text-sm text-red-500">{formik.errors.package}</p>
                )}
              </div>
              {/* Guests */}
              <div className="mb-4 relative">
                <label htmlFor="guests" className="block text-sm font-semibold text-gray-200">
                  Number of Guests
                </label>
                <div className="relative">
                  <Users
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={18}
                    aria-hidden="true"
                  />
                  <input
                    type="number"
                    id="guests"
                    name="guests"
                    {...formik.getFieldProps('guests')}
                    min="1"
                    className={`mt-1 block w-full pl-10 rounded-md border-gray-600 bg-gray-900 text-white shadow-sm focus:border-gray-500 focus:ring-gray-500 transition-colors duration-200 ${
                      formik.touched.guests && formik.errors.guests ? 'border-red-500' : ''
                    }`}
                  />
                </div>
                {formik.touched.guests && formik.errors.guests && (
                  <p className="mt-1 text-sm text-red-500">{formik.errors.guests}</p>
                )}
              </div>
              {/* Submit Button */}
              <div className="text-center">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={formik.isSubmitting}
                  className={`inline-flex items-center px-6 py-3 bg-gray-700 text-white font-semibold rounded-md shadow-md hover:bg-gray-600 transition-all duration-200 ${
                    formik.isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {formik.isSubmitting ? 'Submitting...' : 'Reserve Now'}
                </motion.button>
              </div>
            </form>
          </motion.div>
          {/* Right: Interesting Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
            className="w-full md:w-1/2 flex items-center"
          >
            <div className="text-white space-y-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Embark on a Nautical Escape
              </h3>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Experience the tranquil beauty of Munroethuruthu’s backwaters with Munroe Boating. From luxurious houseboat cruises to thrilling speedboat adventures, our curated packages promise unforgettable moments on the water.
              </p>
              <motion.a
                href="#packages"
                whileHover={{ scale: 1.05 }}
                className="inline-block px-6 py-3 bg-transparent border border-gray-500 text-gray-200 rounded-md font-semibold hover:bg-gray-600 hover:text-white transition-colors duration-200"
              >
                Explore Our Packages
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Booking;