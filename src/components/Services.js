import React from 'react';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Luxury Car Rental',
      image: 'https://cdn.i-scmp.com/sites/default/files/d8/images/methode/2020/02/12/f7c86e68-4c08-11ea-9b4e-9c10402c07b7_972x_125528.jpg',
    },
    {
      title: 'Corporate Travel Services',
      image: 'https://www.silvertaxitoairport.com.au/wp-content/uploads/2024/11/Corporate-Travel-inner-image.jpg',
    },
    {
      title: 'Airport Transfers',
      image: 'https://azureprivatehire.com/wp-content/uploads/2022/11/Perfect-Airport-Transfer-for-Your-Travel-Needs-1000x620.jpg',
    },
    {
      title: 'VIP Concierge Services',
      image: 'https://veronikasadventure.com/wp-content/uploads/2024/07/2_private-transfer-from-luxor-hotel-to-the-airport-or-vice-versa.jpg',
    },
    {
      title: 'Event Car Rental',
      image: 'https://www.fabcars.in/assets/images/blog/luxury-car-rental-in-mumbai-for-weddings-body.webp',
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <section id="Services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-xl text-gray-500">Comprehensive transportation solutions designed for corporates, VIPs, events, airport transfers & luxury travel needs.</p>
          </div>
        </div>
        </section>
      

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Background Image */}
              <img 
                src={service.image} 
                alt={service.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <h3 className="text-2xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {service.title}
                </h3>
                <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <span className="text-sm font-medium">Explore Details</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;