import { useFormik } from "formik"
import { motion } from "framer-motion"
import { DatePicker } from "@mantine/dates"
import * as Yup from 'yup'
import 'dayjs/locale/en'
import { Mail, User, Users, Calendar, Package, } from "lucide-react"
const Booking = () => {
    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            phone:'',
            date:null,
            packages:'',
            guests:1,
            message:''
        },
        validationSchema: Yup.object({
            name:Yup.string().required('Full name is required'),
            email:Yup.string().email('Invalid email address').required('Email is required'),
            phone:Yup.string().matches(/^[0-9]{10}$/,'Phone number must be 10 digits').required('Phone number is required'),
            date:Yup.date().nullable().required('Booking date is required'),
            package:Yup.string().required('Please select a package'),
            guests:Yup.number()
            .min(1,'At least 1 Guest is required')
            .required('Number of guest is required'),
            message:Yup.string(),
        }),
        onSubmit: (values)=>{
            console.log('Booking Submitted',values)
            formik.resetForm()
        }
    })
  return (
    <section className="py-12 bg-black min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-center text-white mb-10 tracking-tight"
        >
          Plan Your Boating Journey
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-6 lg:gap-12">
          {/* Left: Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <form
              onSubmit={formik.handleSubmit}
              className="bg-white shadow-xl rounded-xl p-6 max-w-sm mx-auto md:mx-0 border border-gray-300 transition-all duration-300 hover:border-teal-500"
            >
              {/* Name */}
              <div className="mb-4 relative">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Full Name
                </label>
                <div className="relative">
                  <User
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    size={18}
                    aria-hidden="true"
                  />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    {...formik.getFieldProps('name')}
                    className={`mt-1 block w-full pl-10 rounded-md border-gray-300 bg-white text-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500 transition-colors duration-200 ${
                      formik.touched.name && formik.errors.name
                        ? 'border-red-500'
                        : ''
                    }`}
                  />
                </div>
                {formik.touched.name && formik.errors.name && (
                  <p className="mt-1 text-sm text-red-500">
                    {formik.errors.name}
                  </p>
                )}
              </div>
              {/* Email */}
              <div className="mb-4 relative">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Email
                </label>
                <div className="relative">
                  <Mail
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    size={18}
                    aria-hidden="true"
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    {...formik.getFieldProps('email')}
                    className={`mt-1 block w-full pl-10 rounded-md border-gray-300 bg-white text-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500 transition-colors duration-200 ${
                      formik.touched.email && formik.errors.email
                        ? 'border-red-500'
                        : ''
                    }`}
                  />
                </div>
                {formik.touched.email && formik.errors.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {formik.errors.email}
                  </p>
                )}
              </div>
              {/* Date */}
              <div className="mb-4 relative">
                <label
                  htmlFor="date"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Booking Date
                </label>
                <div className="relative">
                  <Calendar
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
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
                    className={`mt-1 block w-full pl-10 rounded-md border-gray-300 bg-white text-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500 transition-colors duration-200 ${
                      formik.touched.date && formik.errors.date
                        ? 'border-red-500'
                        : ''
                    }`}
                  />
                </div>
                {formik.touched.date && formik.errors.date && (
                  <p className="mt-1 text-sm text-red-500">
                    {formik.errors.date}
                  </p>
                )}
              </div>
              {/* Package */}
              <div className="mb-4 relative">
                <label
                  htmlFor="package"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Package
                </label>
                <div className="relative">
                  <Package
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    size={18}
                    aria-hidden="true"
                  />
                  <select
                    id="package"
                    name="package"
                    {...formik.getFieldProps('package')}
                    className={`mt-1 block w-full pl-10 rounded-md border-gray-300 bg-white text-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500 transition-colors duration-200 ${
                      formik.touched.package && formik.errors.package
                        ? 'border-red-500'
                        : ''
                    }`}
                  >
                    <option value="">Select a Package</option>
                    <option value="houseboat">Houseboat Tour</option>
                    <option value="speedboat">Speedboat Adventure</option>
                    <option value="fishing">Fishing Trip</option>
                  </select>
                </div>
                {formik.touched.package && formik.errors.package && (
                  <p className="mt-1 text-sm text-red-500">
                    {formik.errors.package}
                  </p>
                )}
              </div>
              {/* Guests */}
              <div className="mb-4 relative">
                <label
                  htmlFor="guests"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Number of Guests
                </label>
                <div className="relative">
                  <Users
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    size={18}
                    aria-hidden="true"
                  />
                  <input
                    type="number"
                    id="guests"
                    name="guests"
                    {...formik.getFieldProps('guests')}
                    min="1"
                    className={`mt-1 block w-full pl-10 rounded-md border-gray-300 bg-white text-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500 transition-colors duration-200 ${
                      formik.touched.guests && formik.errors.guests
                        ? 'border-red-500'
                        : ''
                    }`}
                  />
                </div>
                {formik.touched.guests && formik.errors.guests && (
                  <p className="mt-1 text-sm text-red-500">
                    {formik.errors.guests}
                  </p>
                )}
              </div>
              {/* Submit Button */}
              <div className="text-center">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(13, 148, 136, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  disabled={formik.isSubmitting}
                  className={`inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-md shadow-lg hover:from-teal-600 hover:to-teal-700 transition-all duration-200 ${
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
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full md:w-1/2 flex items-center"
          >
            <div className="text-white space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Embark on a Nautical Escape
              </h3>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Experience the tranquil beauty of Munroethuruthu’s backwaters with
                Munroe Boating. From luxurious houseboat cruises to thrilling
                speedboat adventures, our curated packages promise unforgettable
                moments on the water.
              </p>
              <motion.a
                href="#packages"
                whileHover={{ scale: 1.05 }}
                className="inline-block px-4 py-2 bg-transparent border border-teal-500 text-teal-500 rounded-md font-semibold hover:bg-teal-500 hover:text-white transition-colors duration-200"
              >
                Explore Our Packages
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Booking
