import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Link } from 'react-scroll';
import { Anchor } from 'lucide-react';

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    lazyLoad: 'ondemand',
  };

  const slides = [
    {
      image: '/images/munroe-boating1.jpg',
      alt: 'Munroe Island houseboat tour in Munroethuruthu',
      title: 'Discover Munroe Island Boating',
      description: 'Sail through the serene backwaters of Munroethuruthu, Kerala’s hidden gem.',
    },
    {
      image: '/images/munroeIsland1-wallpaper.jpg',
      alt: 'Sunset cruise in Munroethuruthu backwaters',
      title: 'Unforgettable Sunset Cruises',
      description: 'Experience breathtaking sunsets on our exclusive Munroe Island boat tours.',
    },
    {
      image: '/images/munroeIsland-wallpaper.jpeg',
      alt: 'Fishing trip in Munroe Island, Munroethuruthu',
      title: 'Authentic Fishing Adventures',
      description: 'Join local fishermen for a unique Munroethuruthu boating experience.',
    },
  ];

  return (
    <section id="home" className="h-screen relative bg-black text-white">
      {/* Subtle Wave Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"%3E%3Cpath fill="%23FFFFFF" fill-opacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"%3E%3C/path%3E%3C/svg%3E')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-screen">
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover opacity-50"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center text-center z-10">
              <div className="px-4 max-w-6xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                  className="flex justify-center mb-6"
                >
                  <Anchor size={40} className="text-gray-300" aria-hidden="true" />
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
                  className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight"
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
                  className="text-xl md:text-2xl text-gray-200 mb-6 max-w-2xl mx-auto"
                >
                  {slide.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 }}
                >
                  <Link to="booking" smooth duration={500}>
                    <Button className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-md shadow-md transition-all duration-200">
                      Book Your Adventure
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Hero;