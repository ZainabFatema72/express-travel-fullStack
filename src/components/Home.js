import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from './Hero';
import whyChooseUsImg from '../assets/whychooseus.jpeg';
import clientBgImg from '../assets/clientfeedback.jpeg';

import { 
  ChevronRight, ArrowRight, Quote, 
  HeartHandshake, Users, Sparkles, ChevronLeft 
} from 'lucide-react';

const Home = () => {
  const [activeFeedback, setActiveFeedback] = useState(1); 

  const testimonials = [
    { id: 0, name: "Jestin Mathew", role: "Director", initials: "JM", text: "We would like to appreciate your good office for arranging travel trip to Maldives for our Director. The experience was coordinated perfectly." },
    { id: 1, name: "Mr. D.Venkateswaran", role: "Corporate Lead", initials: "DV", text: "The professional approach of Express Travel is commendable. Their fleet quality and punctuality were exactly what we were looking for." },
    { id: 2, name: "Ramesh Babu", role: "Executive VP", initials: "RB", text: "Chauffeur Mr. Parameswaran reported to duty on time and picked up all the dignitaries with utmost care and safety." },
    { id: 3, name: "Santosh Krinsky", role: "International Traveler", initials: "SK", text: "Thank you for your efforts to make our 2 week tour successful. Highly pleased with the service and drivers." }
  ];

  const services = [
    { title: 'Luxury Car Rental', image: 'https://cdn.i-scmp.com/sites/default/files/d8/images/methode/2020/02/12/f7c86e68-4c08-11ea-9b4e-9c10402c07b7_972x_125528.jpg' },
    { title: 'Corporate Travel Services', image: 'https://www.silvertaxitoairport.com.au/wp-content/uploads/2024/11/Corporate-Travel-inner-image.jpg' },
    { title: 'Airport Transfers', image: 'https://azureprivatehire.com/wp-content/uploads/2022/11/Perfect-Airport-Transfer-for-Your-Travel-Needs-1000x620.jpg' },
    { title: 'VIP Concierge Services', image: 'https://veronikasadventure.com/wp-content/uploads/2024/07/2_private-transfer-from-luxor-hotel-to-the-airport-or-vice-versa.jpg' },
    { title: 'Event Car Rental', image: 'https://www.fabcars.in/assets/images/blog/luxury-car-rental-in-mumbai-for-weddings-body.webp' }
  ];

  return (
    <main className="bg-white antialiased relative">
      <Hero />

      {/* 1. Discovery Section - Compact py-8 */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#1C4D8D] font-bold tracking-[0.2em] uppercase text-[10px] mb-2 italic">Since 1999</p>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-4 uppercase tracking-tighter">
            Excellence in Corporate <span className="text-[#1C4D8D] italic">Mobility.</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Driven by expertise and a genuine personal touch, the team at Express Travel (ETC) consistently delivers seamless, customized journeys.
          </p>
        </div>
      </section>

      {/* 2. Home About Section - Compact py-8 */}
      <section className="py-8 px-6 bg-slate-50 overflow-hidden text-left">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2 relative group">
            <div className="rounded-none overflow-hidden shadow-xl relative z-10">
              <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1200" alt="ETC Service" className="w-full h-[350px] object-cover" />
            </div>
          </div>
          <div className="lg:w-1/2 space-y-4">
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter leading-none">
              Your Trusted Mobility <br/><span className="text-[#1C4D8D]">Partner Since 1999</span>
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">Express Travel Corporate Services (ETC) was established to provide MNCs and large organizations with a superior travel experience through dynamic leadership and a belief that clients are our prime assets.</p>
            <Link to="/about" className="inline-flex items-center gap-2 bg-[#1C4D8D] text-white px-8 py-3 rounded-none font-bold text-[10px] tracking-widest uppercase shadow-lg hover:bg-slate-900 transition-all">
              Discover Our Story <ChevronRight size={14}/>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Services Grid - Compact py-8 & Linked to /services */}
      <section className="py-8 bg-white px-6">
        <div className="max-w-7xl mx-auto text-center mb-6">
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">Our Premium Services</h2>
            <div className="w-12 h-1 bg-[#1C4D8D] mx-auto mt-2"></div>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {services.map((service, index) => (
                <Link to="/services" key={index} className="group relative h-[250px] rounded-none overflow-hidden shadow-md block">
                    <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C4D8D]/40 via-[#1C4D8D]/20 to-transparent" />
                    <div className="absolute inset-0 p-4 flex flex-col justify-end text-white text-left">

                        <h2 className="text-[11px] font-black uppercase tracking-tight mb-2 leading-tight">{service.title}</h2>

                        <div className="flex items-center gap-1 text-[9px] font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                          View Details <ArrowRight size={12} className="text-blue-300" />
                        </div>
                    </div>
                </Link>
            ))}
        </div>
      </section>

      {/* 4. WHY CHOOSE US - Compact py-8 */}
      <section className="relative h-auto py-8 lg:h-[450px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url(${whyChooseUsImg})` }}>
          <div className="absolute inset-0 bg-black/65"></div> 
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center text-white">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center">
              <ChevronRight className="w-8 h-8 text-blue-400 mb-2" />
              <h3 className="text-[15px] font-black uppercase mb-3 border-b border-white/20 pb-2 w-full tracking-tight">Various Services</h3>
              <ul className="text-[12px] text-gray-200 uppercase space-y-1 opacity-90"><li>Airport Transfers</li><li>Corporate Services</li><li>Conference & MICE</li></ul>
            </div>
            <div className="flex flex-col items-center">
              <HeartHandshake className="w-8 h-8 text-blue-400 mb-2" />
              <h3 className="text-[15px] font-black uppercase mb-3 border-b border-white/20 pb-2 w-full tracking-tight">Value Added</h3>
              <ul className="text-[12px] text-gray-200 uppercase space-y-1 opacity-90"><li>24/7 Availability</li><li>Mobile App</li><li>Safety Kits</li></ul>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-8 h-8 text-blue-400 mb-2" />
              <h3 className="text-[15px] font-black uppercase mb-3 border-b border-white/20 pb-2 w-full tracking-tight">Driver Profile</h3>
              <ul className="text-[12px] text-gray-200 uppercase space-y-1 opacity-90"><li>Strict Punctuality</li><li>Well-Groomed</li><li>Local Knowledge</li></ul>
            </div>
            <div className="flex flex-col items-center">
              <Sparkles className="w-8 h-8 text-blue-400 mb-2" />
              <h3 className="text-[15px] font-black uppercase mb-3 border-b border-white/20 pb-2 w-full tracking-tight">Salient Features</h3>
              <ul className="text-[12px] text-gray-200 uppercase space-y-1 opacity-90"><li>Hotel Booking</li><li>All Credit Cards</li><li>100% Sanitized</li></ul>
            </div>
          </div>
        </div>
      </section>

     


     {/* 5. CLIENT FEEDBACK - Compact py-8 */}
      <section className="py-8 px-6 overflow-hidden relative bg-white">
        <div className="absolute inset-0 bg-cover bg-center z-0 opacity-5" style={{ backgroundImage: `url(${clientBgImg})` }}></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase mb-8 tracking-tighter">What Our <span className="text-[#1C4D8D] italic">Clients Say</span></h2>
          <div className="relative flex items-center justify-center mb-8 gap-6">
            <button onClick={() => setActiveFeedback(activeFeedback === 0 ? 3 : activeFeedback - 1)} className="p-1 text-[#1C4D8D] border border-[#1C4D8D]/20 rounded-full hover:bg-[#1C4D8D] hover:text-white transition-all"><ChevronLeft size={18}/></button>
            <div className="flex items-center gap-3">
              {testimonials.map((item, index) => (
                <div key={item.id} onClick={() => setActiveFeedback(index)} className={`cursor-pointer rounded-full flex items-center justify-center font-black shadow-md transition-all duration-300 ${index === activeFeedback ? 'w-14 h-14 border-[3px] border-[#1C4D8D] scale-105' : 'w-10 h-10 opacity-30 grayscale' } bg-[#1C4D8D] text-white text-sm`}>{item.initials}</div>
              ))}
            </div>
            <button onClick={() => setActiveFeedback(activeFeedback === 3 ? 0 : activeFeedback + 1)} className="p-1 text-[#1C4D8D] border border-[#1C4D8D]/20 rounded-full hover:bg-[#1C4D8D] hover:text-white transition-all"><ChevronRight size={18}/></button>
          </div>
          <div className="bg-slate-50 p-6 md:p-8 rounded- xl shadow-lg text-center border border-slate-100 relative">
            <Quote className="text-[#1C4D8D] mx-auto mb-4 opacity-40" size={32} />
            <p className="text-slate-600 text-sm md:text-base leading-relaxed italic font-medium mb-4">"{testimonials[activeFeedback].text}"</p>
            <div className="w-8 h-0.5 bg-blue-500 mx-auto mb-3"></div>
            <p className="font-black text-[#1C4D8D] uppercase tracking-tighter text-base">{testimonials[activeFeedback].name}</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;