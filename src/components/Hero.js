import React, { useState, useEffect ,useCallback} from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ChevronLeft, ChevronRight, X, CheckCircle2 ,ChevronDown
} from 'lucide-react';

// --- APNI IMAGES YAHAN IMPORT KAREIN ---
import hero1 from '../assets/hero/carwithjet.jpg'; 
import hero2 from '../assets/hero/road-blue.jpg';
import hero3 from '../assets/hero/san-luis.webp';
import hero4 from '../assets/hero/corporate.avif';
import hero5 from '../assets/hero/bmw.jpg';
import hero6 from '../assets/hero/bus.jpg';

const Hero = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingStep, setBookingStep] = useState('form');

   const categories = ["Luxury Cars", "Premium Cars", "Economy Cars", "EVs", "Luxury Van", "Mini Coach", "Large Bus"];

  const slides = [
    {
      title: 'GLOBAL CHAUFFEUR & MOBILITY SOLUTIONS',
      subtitle: 'Premium executive transportation for MNCs and international delegations across major global hubs.',
      bg: hero1
    },
    {
      title: 'ELITE CORPORATE CONCIERGE SINCE 1999',
      subtitle: 'Experience unparalleled luxury and reliability trusted by Fortune 500 companies worldwide.',
      bg: hero2
    },
    {
      title: 'VVIP DIPLOMATIC & SUMMIT MOVEMENTS',
      subtitle: 'High-security luxury fleet services for international summits, consulates, and VIP transitions.',
      bg: hero3
    },
    {
      title: 'DRIVE IN INDIA AND OVERSEAS',
      subtitle: 'A car for every need—extending our excellence to 120+ cities with precision and safety.',
      bg: hero4
    },
    {
      title: 'TECHNOLOGY DRIVEN TRAVEL EXPERIENCE',
      subtitle: 'Seamless bookings and transparent travel management through our new-age mobile tools.',
      bg: hero5
    },
    {
      title: 'ESTABLISHED LEGACY OF TRUST',
      subtitle: 'Recognized by the Ministry of Tourism, we nurture a culture founded on Pride and Teamwork.',
      bg: hero6
    }
  ];

 const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative h-[60vh] md:h-[100vh] w-full overflow-hidden group bg-black font-sans">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 transform ${
            index === currentSlide ? 'opacity-100 z-20' : 'opacity-0 z-10'
          }`}
        >
          <div className="absolute inset-0 bg-black/50 md:bg-black/40 z-10" />
          
          <img 
            src={slide.bg} 
            alt={slide.title} 
            className="w-full h-full object-cover object-center" 
          />
          
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white px-4 md:px-6">
            <div className="flex items-center gap-2 mb-2">
               <span className="h-[1px] w-4 md:w-8 bg-blue-500"></span>
               <p className="text-blue-400 font-bold tracking-[0.2em] text-[8px] md:text-xs uppercase">Since 1999 | Global Excellence</p>
               <span className="h-[1px] w-4 md:w-8 bg-blue-500"></span>
            </div>
            
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-black mb-3 text-center tracking-tighter max-w-5xl uppercase italic leading-tight">
              {slide.title}
            </h1>
            
            <p className="text-[20px] md:text-lg mb-6 max-w-2xl text-center text-gray-300 font-medium leading-relaxed">
              {slide.subtitle}
            </p>
            
            <div className="flex flex-row gap-3 relative z-50"> 
              <button 
                onClick={() => setShowBookingModal(true)}
                className="px-5 py-3 md:px-8 md:py-4 bg-blue-600 hover:bg-blue-700 text-white font-black uppercase text-[10px] tracking-widest transition-all rounded-none"
              >
                Book Now
              </button>
              
              <button 
                onClick={() => navigate('/luxury-car')}
                className="px-5 py-3 md:px-8 md:py-4 bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white hover:text-black text-white font-black uppercase text-[10px] tracking-widest transition-all rounded-none"
              >
                Our Fleet
              </button>
            </div>
          </div>
        </div>
      ))}

      <button onClick={prevSlide} className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-40 p-2 md:p-3 bg-black/30 text-white border border-white/10 hover:bg-blue-600 transition-all opacity-0 group-hover:opacity-100">
        <ChevronLeft size={20} className="md:w-6 md:h-6" />
      </button>
      <button onClick={nextSlide} className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-40 p-2 md:p-3 bg-black/30 text-white border border-white/10 hover:bg-blue-600 transition-all opacity-0 group-hover:opacity-100">
        <ChevronRight size={20} className="md:w-6 md:h-6" />
      </button>

       {/* COMPACT MODAL FORM */}
      {showBookingModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-hidden">
          <div className="absolute inset-0 bg-[#0a1128]/90 backdrop-blur-md" onClick={() => setShowBookingModal(false)}></div>
          <div className="relative bg-white w-full max-w-[360px] max-h-[90vh] flex flex-col rounded-none shadow-2xl overflow-hidden border border-white/10">
            
            <div className="bg-[#0a1128] py-3 px-6 flex justify-between items-center border-b border-blue-500/30 shrink-0">
              <h3 className="text-white text-[10px] font-black uppercase tracking-[0.2em]">Request Quote</h3>
              <button onClick={() => setShowBookingModal(false)} className="text-white/60 hover:text-white transition-all">
                <X size={18} />
              </button>
            </div>

            <div className="p-6 md:p-8 overflow-y-auto">
              {bookingStep === 'form' ? (
                <form onSubmit={(e) => { e.preventDefault(); setBookingStep('success'); }} className="space-y-3">
                   <div className="space-y-0.5">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Full Name</label>
                     <input required type="text" placeholder="YOUR NAME" className="w-full p-2.5 bg-gray-50 border border-slate-200 outline-none focus:border-blue-600 text-[10px] font-bold uppercase rounded-none" />
                   </div>

                   <div className="space-y-0.5">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Contact Number</label>
                     <input required type="tel" placeholder="+91" className="w-full p-2.5 bg-gray-50 border border-slate-200 outline-none focus:border-blue-600 text-[10px] font-bold rounded-none" />
                   </div>

                   <div className="space-y-0.5">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email Address</label>
                     <input required type="email" placeholder="EMAIL@COMPANY.COM" className="w-full p-2.5 bg-gray-50 border border-slate-200 outline-none focus:border-blue-600 text-[10px] font-bold uppercase rounded-none" />
                   </div>
                   
                   {/* Dropdown with Arrow Icon */}
                   <div className="space-y-0.5 text-left relative">
                     <label className="text-[8px] font-black text-slate-400 uppercase tracking-widest block">Vehicle Category</label>
                     <div className="relative">
                       <select required className="w-full p-2.5 bg-gray-50 border border-slate-200 outline-none focus:border-blue-600 text-[10px] font-black uppercase rounded-none cursor-pointer appearance-none pr-10">
                          <option value="" disabled selected>Select Category</option>
                          {categories.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
                       </select>
                       <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                     </div>
                   </div>

                   <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-0.5">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Start Date</label>
                          <input required type="date" className="w-full p-2 bg-gray-50 border border-slate-200 outline-none focus:border-blue-600 text-[9px] font-bold rounded-none" />
                        </div>
                        <div className="space-y-0.5">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">End Date</label>
                          <input required type="date" className="w-full p-2 bg-gray-50 border border-slate-200 outline-none focus:border-blue-600 text-[9px] font-bold rounded-none" />
                        </div>
                   </div>
                   
                   <button type="submit" className="w-full bg-blue-600 hover:bg-[#0a1128] text-white py-3.5 mt-2 font-black text-[10px] uppercase tracking-[0.2em] transition-all rounded-none shadow-lg active:scale-95">
                      Confirm Request
                   </button>
                </form>
              ) : (
                <div className="text-center py-6">
                  <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} className="text-green-500" />
                  </div>
                  <h4 className="font-black uppercase text-xs tracking-tight mb-1 leading-none">Request Received</h4>
                  <p className="text-[9px] text-slate-500 font-bold uppercase mb-6">Our concierge will contact you shortly.</p>
                  <button onClick={() => { setShowBookingModal(false); setBookingStep('form'); }} className="w-full border-2 border-[#0a1128] py-3 font-black text-[9px] uppercase rounded-none hover:bg-[#0a1128] hover:text-white transition-all">Close</button>
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