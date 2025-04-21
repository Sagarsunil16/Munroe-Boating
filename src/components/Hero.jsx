import Slider from 'react-slick';
import { Button } from '../components/ui/button';
import { Link } from 'react-scroll';

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
      image: '/images/MunroeIsland-canoeing.jpg',
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
    <section id="home" className="h-screen relative">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-screen">
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
           <div className="absolute inset-0 bg-black flex items-center justify-center text-white text-center">
              <div className="px-4">
                <h1 className="text-5xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                <p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto">{slide.description}</p>
                <Link to="booking" smooth duration={500}>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg">
                    Book Your Adventure
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Hero;