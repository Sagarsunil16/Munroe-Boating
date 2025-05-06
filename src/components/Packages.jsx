import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Anchor } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const packages = [
  {
    id: 1,
    title: 'Houseboat Tour',
    description: 'Cruise through Munroethuruthu’s serene backwaters on a luxurious houseboat.',
    price: '$150/day',
    image: 'https://via.placeholder.com/400x300?text=Houseboat',
    slug: 'houseboat',
  },
  {
    id: 2,
    title: 'Speedboat Adventure',
    description: 'Feel the thrill of speeding across the waters with our guided adventure.',
    price: '$100/hour',
    image: 'https://via.placeholder.com/400x300?text=Speedboat',
    slug: 'speedboat',
  },
  {
    id: 3,
    title: 'Fishing Trip',
    description: 'Enjoy a relaxing day fishing in the tranquil backwaters.',
    price: '$80/day',
    image: 'https://via.placeholder.com/400x300?text=Fishing',
    slug: 'fishing',
  },
];

const Packages = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="packages" className="py-20 bg-black text-white relative overflow-hidden">
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
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-12 text-center"
        >
          <div className="flex justify-center mb-6">
            <Anchor size={40} className="text-gray-300" aria-hidden="true" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Our Boating Packages
          </h2>
          <p className="text-xl text-gray-200 leading-relaxed max-w-4xl mx-auto">
            Explore Munroethuruthu’s backwaters with our carefully crafted boating packages, designed for adventure and relaxation.
          </p>
        </motion.div>

        {/* Slider */}
        <Slider {...sliderSettings} className="mx-[-8px]">
          {packages.map((pkg) => (
            <div key={pkg.id} className="px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: pkg.id * 0.1, ease: 'easeOut' }}
                className="bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700 hover:border-gray-500"
              >
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {pkg.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {pkg.description}
                  </p>
                  <p className="text-gray-200 font-semibold mb-4">
                    {pkg.price}
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={`/booking?package=${pkg.slug}`}
                      className="inline-block px-6 py-3 bg-gray-700 text-white font-semibold rounded-md shadow-md hover:bg-gray-600 transition-all duration-200"
                    >
                      Book Now
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Packages;