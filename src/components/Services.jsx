import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Anchor } from 'lucide-react';

const services = [
  {
    title: 'Munroe Island Canoeing Tours',
    description: 'Paddle through the tranquil backwaters of Munroethuruthu, surrounded by lush greenery and vibrant wildlife.',
    image: '/images/munroeIsland-boating.jpg',
    alt: 'Canoeing tour in Munroe Island, Munroethuruthu',
  },
  {
    title: 'Munroe Island Sunset Cruises',
    description: 'Enjoy a romantic boat ride as the sun sets over the serene backwaters, creating unforgettable memories.',
    image: '/images/munroeIsland-boating5.jpg',
    alt: 'Sunset cruise in Munroe Island, Munroethuruthu',
  },
  {
    title: 'Munroe Island Fishing Trips',
    description: 'Join local fishermen for an authentic fishing experience, learning traditional techniques in the heart of Munroethuruthu.',
    image: '/images/munroeIsland-fishing.jpg',
    alt: 'Fishing trip in Munroe Island, Munroethuruthu',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-black text-white relative overflow-hidden">
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
            Our Premier Experiences
          </h2>
          <p className="text-xl text-gray-200 leading-relaxed max-w-4xl mx-auto">
            Discover the unparalleled beauty of Munroethuruthu’s backwaters with our curated selection of unforgettable boating adventures.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * (index + 1), ease: 'easeOut' }}
            >
              <Card className="bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700 hover:border-gray-500">
                <CardHeader className="p-0">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-48 object-cover rounded-t-lg"
                    loading="lazy"
                    onError={(e) => (e.target.src = '/images/fallback.jpg')}
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl font-semibold text-white mb-2">
                    {service.title}
                  </CardTitle>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <Link to="booking" smooth duration={500}>
                    <Button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-md font-semibold transition-colors duration-200">
                      Book Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;