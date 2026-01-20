import React, { useState } from 'react';

const LuxuryCar = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCar, setSelectedCar] = useState(null);

  const categories = [
    { id: 'all', name: 'All Cars' },
    { id: 'luxury', name: 'Luxury Sedans' },
    { id: 'suv', name: 'Luxury SUVs' },
    { id: 'sports', name: 'Sports Cars' },
    { id: 'premium', name: 'Premium Fleet' }
  ];

  const luxuryCars = [
    {
      id: 1,
      name: 'Mercedes Benz S-Class',
      category: 'premium',
      image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/48067/s-class-exterior-right-front-three-quarter-10.png?isig=0&q=80',
      price: '₹15,500',
      rating: 5.0,
      description: 'The ultimate definition of luxury and class.',
      features: ['Massage Seats', 'Ambient Lighting', 'Soft Close Doors']
    },
    {
      id: 2,
      name: 'Lamborghini Urus',
      category: 'sports',
      image: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=1000&auto=format&fit=crop',
      price: '₹45,000',
      rating: 4.9,
      description: 'The soul of a super sports car with the functionality of an SUV.',
      features: ['V8 Bi-turbo', 'Carbon Brakes', 'Alcantara Interior']
    },
    {
      id: 3,
      name: 'Rolls Royce Cullinan',
      category: 'premium',
      image: 'https://www.topgear.com/sites/default/files/2024/01/1%20Rolls-Royce%20Cullinan%20review.jpg',
      price: '₹65,000',
      rating: 5.0,
      description: 'Effortless everywhere. The most luxurious SUV ever built.',
      features: ['Spirit of Ecstasy', 'Starlight Headliner', 'Privacy Suite']
    },
    {
      id: 4,
      name: 'Range Rover Autobiography',
      category: 'suv',
      image: 'https://imgd.aeplcdn.com/664x374/ec/7F/84/18599/img/m/Land-Rover-Range-Rover-LWB-Right-Front-Three-Quarter-51378_ol.jpg?t=173325477&t=173325477&q=80',
      price: '₹18,000',
      rating: 4.8,
      description: 'Peerless refinement and luxury for every terrain.',
      features: ['Terrain Response', 'Executive Rear Seating', 'Pivi Pro']
    },
    {
      id: 5,
      name: 'Porsche 911 Carrera',
      category: 'sports',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000&auto=format&fit=crop',
      price: '₹25,000',
      rating: 4.9,
      description: 'The timeless sports car with iconic design and power.',
      features: ['Launch Control', 'Sport Chrono', 'BOSE Sound']
    },
    {
      id: 6,
      name: 'BMW 7 Series',
      category: 'luxury',
      image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/132513/new-7-series-exterior-right-front-three-quarter.jpeg?isig=0&q=80',
      price: '₹12,000',
      rating: 4.7,
      description: 'Masterfully crafted for the modern visionary.',
      features: ['Theatre Screen', 'Sky Lounge', 'iDrive 8']
    }
  ];

  const filteredCars = selectedCategory === 'all' 
    ? luxuryCars 
    : luxuryCars.filter(car => car.category === selectedCategory);

  return (
    <section id="luxury" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Luxury Car</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-xl text-gray-500 mt-4">Choose from our premium collection of world-class automobiles.</p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-8 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === cat.id 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredCars.map(car => (
            <div key={car.id} className="group bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500">
              <div className="relative overflow-hidden">
                <img 
                  src={car.image} 
                  alt={car.name} 
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                  <span className="text-yellow-500 text-lg">★</span>
                  <span className="font-bold text-gray-800">{car.rating}</span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{car.name}</h3>
                <p className="text-sm text-gray-500 uppercase tracking-widest mb-4 font-semibold">{car.category}</p>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-2xl font-black text-blue-600">{car.price}</span>
                    <span className="text-gray-500 text-sm ml-1">/day</span>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <button 
                    onClick={() => setSelectedCar(car)} 
                    className="flex-1 border-2 border-gray-900 text-gray-900 py-3 rounded-xl font-bold hover:bg-gray-900 hover:text-white transition-all"
                  >
                    View Details
                  </button>
                  <button className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 shadow-md shadow-blue-100 transition-all">
                    Rent Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal (Popup) */}
        {selectedCar && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-[9999]">
            <div className="bg-white rounded-[2.5rem] max-w-4xl w-full overflow-hidden relative">
              <button 
                onClick={() => setSelectedCar(null)} 
                className="absolute top-6 right-6 z-10 bg-white/50 backdrop-blur hover:bg-white w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-lg transition-all"
              >
                ✕
              </button>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <img src={selectedCar.image} className="w-full h-full object-cover min-h-[400px]" alt={selectedCar.name} />
                </div>
                <div className="md:w-1/2 p-10">
                  <h2 className="text-4xl font-black text-gray-900 mb-2">{selectedCar.name}</h2>
                  <div className="flex gap-2 mb-6">
                    {selectedCar.features.map((f, i) => (
                      <span key={i} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full font-bold">
                        {f}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-8">{selectedCar.description}</p>
                  <div className="mb-8">
                    <p className="text-gray-400 text-sm mb-1 uppercase tracking-widest">Price per Day</p>
                    <p className="text-4xl font-black text-blue-600">{selectedCar.price}</p>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-100">
                    Confirm Rental
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default LuxuryCar;