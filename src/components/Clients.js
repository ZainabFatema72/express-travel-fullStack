import React from 'react';

const Clients = () => {
  // Common categories as per the website data
  const clientCategories = [
    {
      title: "Diplomatic Missions",
      list: ["British Deputy High Commission", "Consulate General of Japan", "Consulate General of Germany"]
    },
    {
      title: "Corporate Giants",
      list: ["Reliance Petro Marketing", "Birla Soft", "Oxford University Press", "Kenna Metal Widia"]
    },
    {
      title: "Luxury Hospitality",
      list: ["Taj Group of Hotels", "ITC Park Sheraton Hotels", "The Leela Palace"]
    }
  ];

  // For the moving slider effect
  const logos = [
    "Reliance", "Taj Hotels", "British Council", "Birla Soft", 
    "ITC Hotels", "Oxford", "Widia", "Dun & Bradstreet"
  ];

  return (
    <section id="clients" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h4 className="text-blue-600 font-bold uppercase tracking-[0.3em] text-sm mb-4">Our Partners</h4>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Trusted by <span className="text-blue-600">Global Leaders</span>
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Infinite Moving Slider Effect (CSS Animation) */}
        <div className="relative mb-24">
          <div className="flex space-x-12 animate-scroll whitespace-nowrap">
            {[...logos, ...logos].map((logo, index) => (
              <div 
                key={index} 
                className="text-3xl md:text-4xl font-black text-slate-200 uppercase tracking-tighter hover:text-blue-100 transition-colors cursor-default"
              >
                {logo}
              </div>
            ))}
          </div>
          {/* Fading Gradients for Slider */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
        </div>

        {/* Detailed Client Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clientCategories.map((cat, index) => (
            <div 
              key={index} 
              className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-500 group"
            >
              <div className="w-12 h-1 bg-blue-600 mb-6 group-hover:w-20 transition-all duration-500"></div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-wider">{cat.title}</h3>
              <ul className="space-y-4">
                {cat.list.map((item, idx) => (
                  <li key={idx} className="flex items-center text-slate-600 font-medium">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust Footer */}
        <div className="mt-20 text-center bg-slate-900 rounded-[2.5rem] p-12 text-white">
          <p className="text-xl md:text-2xl font-medium opacity-90">
            "Serving over <span className="text-blue-400 font-bold">200+ Corporate Clients</span> across India since 1999."
          </p>
        </div>
      </div>

      {/* Global CSS for the slider animation */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          width: calc(250px * 16);
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Clients;