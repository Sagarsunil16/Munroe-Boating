import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    review: 'The houseboat tour was unforgettable! The serene backwaters and excellent service made it a perfect getaway.',
    rating: 5,
    avatar: 'https://via.placeholder.com/50?text=JD',
  },
  {
    id: 2,
    name: 'Sarah Smith',
    review: 'Thrilling speedboat adventure! The guide was fantastic, and the views of Munroethuruthu were stunning.',
    rating: 4,
    avatar: 'https://via.placeholder.com/50?text=SS',
  },
  {
    id: 3,
    name: 'Michael Lee',
    review: 'Our fishing trip was relaxing and fun. Caught some fish and enjoyed the peaceful waters. Highly recommend!',
    rating: 5,
    avatar: 'https://via.placeholder.com/50?text=ML',
  },
];

const Testimonials = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
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
    <section className="py-12 bg-black ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-center text-white mb-10 tracking-tight"
        >
          What Our Customers Say
        </motion.h2>
        <Slider {...sliderSettings} className="mx-[-8px]">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: testimonial.id * 0.1 }}
                className="bg-white shadow-xl rounded-xl p-6 border border-gray-300 transition-all duration-300 hover:border-teal-500"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={`${testimonial.name}'s avatar`}
                    className="w-12 h-12 rounded-full mr-3"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={
                            i < testimonial.rating
                              ? 'text-yellow-500 fill-yellow-500'
                              : 'text-gray-300'
                          }
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">
                  {testimonial.review}
                </p>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;