import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Placeholder images (replace with actual URLs or local assets)
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
    <section className="py-12 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-center text-white mb-10 tracking-tight"
        >
          Our Boating Packages
        </motion.h2>
        <Slider {...sliderSettings} className="mx-[-8px]">
          {packages.map((pkg) => (
            <div key={pkg.id} className="px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: pkg.id * 0.1 }}
                className="bg-white shadow-xl rounded-xl overflow-hidden border border-gray-300 transition-all duration-300 hover:border-teal-500"
              >
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {pkg.title}
                  </h3>
                  <p className="text-gray-700 text-sm mb-4">
                    {pkg.description}
                  </p>
                  <p className="text-teal-500 font-semibold mb-4">
                    {pkg.price}
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* <Link
                      to={`/booking?package=${pkg.slug}`}
                      className="inline-block px-4 py-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-md shadow-lg hover:from-teal-600 hover:to-teal-700 transition-all duration-200"
                    >
                      Book Now
                    </Link> */}
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
