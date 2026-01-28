import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Navigation ke liye import
import { 
  ChevronLeft, ChevronRight, X, ShieldCheck, 
  User, Phone, Calendar, CheckCircle2 
} from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate(); // Navigation function initialize kiya
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Modal states
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingStep, setBookingStep] = useState('form');
  const [formData, setFormData] = useState({ name: '', phone: '', date: '' });

  const slides = [
    {
      title: 'Premium Corporate Travel & Luxury Car Services',
      subtitle: 'Trusted by India\'s top organizations',
      bg: 'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?cs=srgb&dl=automobile-car-clouds-707046.jpg&fm=jpg'
    },
    {
      title: 'EXCELLENCE IN MOBILITY',
      subtitle: 'Express Travel Corporate Services delivers unparalleled luxury fleet services and premium mobility across major Indian cities.',
      bg: 'https://cdn.pixabay.com/photo/2016/11/22/23/55/car-1851299_1280.jpg'
    },
    {
      title: 'VIP CONCIERGE & EVENTS',
      subtitle: 'Seamless transportation for large-scale corporate delegations and VVIP movements.',
      bg: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=80'
    }
  ];

  // OUR FLEET Click Handler - Ye direct page change karega
  const goToFleet = () => {
    // Agar aapke App.js mein path '/luxury-car' hai toh ye work karega
    navigate('/luxury-car');
    window.scrollTo(0, 0); // Naye page par upar se start ho
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((p) => (p + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingStep('success');
  };

  const closeModal = () => {
    setShowBookingModal(false);
    setBookingStep('form');
    setFormData({ name: '', phone: '', date: '' });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden group">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 transform ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
          }`}
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img src={slide.bg} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white px-4">
            <h1 className="text-4xl md:text-7xl font-bold mb-6 text-center tracking-tight max-w-5xl">
              {slide.title}
            </h1>
            <p className="text-lg md:text-2xl mb-8 max-w-2xl text-center text-gray-200">
              {slide.subtitle}
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => setShowBookingModal(true)}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30"
              >
                Book Now
              </button>
              
              {/* Updated OUR FLEET Button */}
              <button 
                onClick={goToFleet}
                className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white rounded-xl font-bold transition-all"
              >
                Our Fleet
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button onClick={prevSlide} className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-xl bg-white/10 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-white/20 active:scale-90">
        <ChevronLeft size={32} />
      </button>
      <button onClick={nextSlide} className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-xl bg-white/10 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-white/20 active:scale-90">
        <ChevronRight size={32} />
      </button>

      {/* BOOKING MODAL */}
      {showBookingModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-md" onClick={closeModal}></div>
          <div className="relative bg-white w-full max-w-xl rounded-none overflow-hidden shadow-2xl">
            <button onClick={closeModal} className="absolute top-6 right-6 z-50 bg-white hover:bg-gray-100 p-2 border border-gray-100">
              <X size={24} className="text-slate-800" />
            </button>
            
            <div className="p-8 md:p-12">
              {bookingStep === 'form' && (
                <form onSubmit={handleBookingSubmit}>
                  <div className="flex items-center gap-2 mb-2 text-blue-600 font-black text-xs uppercase tracking-widest">
                    <ShieldCheck size={18} /> Direct Inquiry
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-6 uppercase">Book Your Service</h3>
                  
                  <div className="space-y-4 mb-8">
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input required type="text" placeholder="Name" className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500" 
                        onChange={(e) => setFormData({...formData, name: e.target.value})} />
                    </div>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input required type="tel" placeholder="Phone Number" className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500" 
                        onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                    </div>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input required type="date" className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500" 
                        onChange={(e) => setFormData({...formData, date: e.target.value})} />
                    </div>
                  </div>
                  <button type="submit" className="w-full bg-slate-900 text-white py-4 font-black text-xs uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl">
                    Request Call Back
                  </button>
                </form>
              )}

              {bookingStep === 'success' && (
                <div className="text-center py-6">
                  <CheckCircle2 size={70} className="mx-auto mb-4 text-green-500" />
                  <h3 className="text-2xl font-black text-slate-900 mb-2 uppercase">Thank You, {formData.name}!</h3>
                  <p className="text-slate-500 mb-6">Hamara team aapko {formData.phone} par jald hi contact karega.</p>
                  <button onClick={closeModal} className="w-full bg-slate-900 text-white py-4 font-black text-xs uppercase tracking-widest hover:bg-blue-600">
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;