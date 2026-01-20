import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MousePointer2 } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Premium Corporate Travel & Luxury Car Servicess',
      subtitle: 'Trusted by India\'s top organizations',
      bg: 'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?cs=srgb&dl=automobile-car-clouds-707046.jpg&fm=jpg'
    },
    {
      subtitle: 'Express Travel Corporate Services delivers unparalleled luxury fleet services, comprehensive corporate travel solutions, VVIP transportation, event logistics, and premium mobility across major Indian cities. Experience excellence in corporate transportation.',
      bg: 'https://cdn.pixabay.com/photo/2016/11/22/23/55/car-1851299_1280.jpg'
    },
    {
      title: 'VIP CONCIERGE & EVENTS',
      subtitle: 'Seamless transportation for large-scale corporate delegations.',
      bg: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=80'
    }
  ];

  // Manual Navigation Functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    // 5000 se badha kar 8000 kar diya hai (8 seconds)
    const timer = setInterval(() => {
      setCurrentSlide((p) => (p + 1) % slides.length);
    }, 8000); 
    
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden group">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 transform ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
          }`}
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          
          <img 
            src={slide.bg} 
            alt={slide.title} 
            className="w-full h-full object-cover" 
          />
          
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center tracking-tight">
              {slide.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl text-center text-gray-200">
              {slide.subtitle}
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all transform hover:scale-105">
                Book Now
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white rounded-full font-bold transition-all">
                Our Fleet
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Left Arrow */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/10 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20 active:scale-90"
      >
        <ChevronLeft size={40} />
      </button>

      {/* Right Arrow */}
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/10 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20 active:scale-90"
      >
        <ChevronRight size={40} />
      </button>
      
      {/* Scroll Now Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 text-white flex flex-col items-center animate-bounce">
        <span className="text-xs mb-2 uppercase tracking-[0.3em] font-light">Scroll Now</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
};

export default Hero;