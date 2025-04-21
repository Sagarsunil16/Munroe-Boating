
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'react-scroll';

const services = [
  {
    title: 'Munroe Island Canoeing Tours',
    description: 'Paddle through the tranquil backwaters of Munroethuruthu, surrounded by lush greenery and vibrant wildlife.',
    image: '/images/MunroeIsland-canoeing.jpg',
    alt: 'Canoeing tour in Munroe Island, Munroethuruthu',
  },
  {
    title: 'Munroe Island Sunset Cruises',
    description: 'Enjoy a romantic boat ride as the sun sets over the serene backwaters, creating unforgettable memories.',
    image: '/images/MunroeIsland-canoeing.jpg',
    alt: 'Sunset cruise in Munroe Island, Munroethuruthu',
  },
  {
    title: 'Munroe Island Fishing Trips',
    description: 'Join local fishermen for an authentic fishing experience, learning traditional techniques in the heart of Munroethuruthu.',
    image: '/images/MunroeIsland-canoeing.jpg',
    alt: 'Fishing trip in Munroe Island, Munroethuruthu',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
          Our Boating Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader>
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-48 object-cover rounded-t-lg"
                  loading="lazy"
                  onError={(e) => (e.target.src = '/images/fallback.jpg')}
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-semibold text-blue-900 mb-2">
                  {service.title}
                </CardTitle>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link to="booking" smooth duration={500}>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Book Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
