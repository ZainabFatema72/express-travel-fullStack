import React, { useState, useMemo, useEffect } from 'react';
import { supabase } from '../supabaseClient'; 
import { 
  Users, Zap, Star, Search, X, 
  ShieldCheck, ChevronRight, CheckCircle2, 
  User, Phone, Calendar 
} from 'lucide-react';


// Hero background vahi rakhenge
import HERO_BG from '../assets/clients/hero_bg.jpeg';
const LuxuryCar = () => {
  const [cars, setCars] = useState([]); // Database se aayengi
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All Cars');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCar, setSelectedCar] = useState(null);
  const [bookingStep, setBookingStep] = useState('details'); 
  const [formData, setFormData] = useState({ name: '', phone: '', date: '' });

  const categories = ["All Cars", "Luxury Cars", "Premium Cars", "Economy Cars", "EVs", "Luxury Van", "Mini Coach", "Large Bus"];
// --- DATABASE SE CARS LENE KA LOGIC ---
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const { data, error } = await supabase
          .from('cars')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setCars(data || []);
      } catch (error) {
        console.error('Error fetching cars:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

 // Filter Logic (Same as before)
  const filteredCars = useMemo(() => {
    return cars.filter(car => {
      const matchesCategory = activeCategory === 'All Cars' || car.category === activeCategory;
      const matchesSearch = car.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery, cars]);

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    // Yahan aapka purana Google Script wala Fetch logic bhi daal sakte hain
    setBookingStep('success');
  };

  const closeModal = () => {
    setSelectedCar(null);
    setBookingStep('details');
    setFormData({ name: '', phone: '', date: '' });
  };

   if (loading) return <div className="text-center py-20 font-black">LOADING FLEET...</div>;


  return (
    /* Added fleet-section ID for scroll logic */
    <div id="fleet-section" className="min-h-screen bg-[#f8f9fa] pb-20 selection:bg-blue-100">
      <div 
        className="relative text-center pt-28 pb-20 bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      >
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]"></div>
        <div className="relative z-10 px-6">
          <p className="text-blue-400 font-bold text-xs tracking-[0.4em] uppercase mb-4 drop-shadow-md">Premium Mobility</p>
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter drop-shadow-xl">
            DEDICATED TO <span className="text-blue-400 italic">COMFORT</span>
          </h1>
          <div className="max-w-2xl mx-auto mt-10">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input type="text" placeholder="Search by brand or model..." 
                className="w-full pl-12 pr-6 py-5 rounded-none bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all shadow-2xl text-sm"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12">
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-none text-[10px] font-black tracking-widest uppercase transition-all duration-300 ${activeCategory === cat ? 'bg-blue-600 text-white shadow-xl scale-105 border-blue-600' : 'bg-white border border-gray-100 text-slate-500 hover:border-blue-300'}`}>
              {cat}
            </button>
          ))}
        </div>
{/* Car Grid - Dynamic Rendering */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredCars.map(car => (
            <div key={car.id} className="group bg-white rounded-none border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 p-3">
              <div className="relative h-60 w-full overflow-hidden rounded-none bg-gray-50 flex items-center justify-center p-6">
                {/* Image URL will now come from Database */}
                <img src={car.image_url} alt={car.name} className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110" style={{ mixBlendMode: 'multiply' }} />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-none flex items-center gap-1.5 shadow-sm">
                  <Star size={12} className="text-yellow-500 fill-yellow-500" />
                  <span className="font-black text-[10px] text-slate-800">{car.rating || '5.0'}</span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-blue-600 text-[10px] font-black uppercase tracking-widest mb-1">{car.category}</p>
                <h3 className="text-xl font-bold text-slate-900 mb-6 uppercase">{car.name}</h3>
                <div className="flex justify-between items-center border-t border-gray-50 pt-4">
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-slate-400" />
                    <span className="text-[9px] font-black text-slate-500 uppercase">{car.seats} SEATS</span>
                  </div>
                  <button onClick={() => setSelectedCar(car)} className="bg-slate-900 text-white px-6 py-3 rounded-none hover:bg-blue-600 transition-all shadow-lg active:scale-90 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
                    <Zap size={14} fill="currentColor"/> Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCar && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-md" onClick={closeModal}></div>
          <div className="relative bg-white w-full max-w-5xl rounded-none overflow-hidden shadow-2xl flex flex-col md:flex-row">
            <button onClick={closeModal} className="absolute top-6 right-6 z-50 bg-white hover:bg-gray-100 p-2 rounded-none shadow-lg border border-gray-100">
              <X size={24} className="text-slate-800" />
            </button>
            <div className={`relative md:w-1/2 min-h-[400px] flex items-center justify-center p-12 transition-colors duration-500 ${bookingStep === 'success' ? 'bg-green-500' : 'bg-gray-50'}`}>
              {bookingStep !== 'success' ? (
                <>
                  <img src={selectedCar.image} alt={selectedCar.name} className="relative z-10 w-full h-full object-contain drop-shadow-2xl" style={{ mixBlendMode: 'multiply' }} />
                  <div className="absolute inset-0 opacity-5 font-black text-9xl flex items-center justify-center select-none uppercase tracking-tighter text-slate-900">
                    {selectedCar.name.split(' ')[0]}
                  </div>
                </>
              ) : (
                <div className="text-white text-center">
                  <CheckCircle2 size={120} className="mx-auto mb-6" />
                  <h2 className="text-4xl font-black uppercase tracking-tighter">Reservation<br/>Confirmed!</h2>
                </div>
              )}
            </div>
            <div className="md:w-1/2 p-10 md:p-14 flex flex-col justify-center bg-white border-l border-gray-100">
              {bookingStep === 'details' && (
                <div>
                  <div className="flex items-center gap-2 mb-4 text-blue-600 font-black text-xs uppercase tracking-widest"><ShieldCheck size={18} /> Verified Fleet Premium</div>
                  <h2 className="text-4xl font-black text-slate-900 mb-4 uppercase leading-none">{selectedCar.name}</h2>
                  <p className="text-slate-500 text-lg mb-8 italic leading-relaxed">"{selectedCar.description}"</p>
                  <div className="space-y-4 mb-10">
                    {selectedCar.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-3 text-slate-700 font-bold text-sm"><div className="w-2 h-2 bg-blue-600 rounded-none" /> {f}</div>
                    ))}
                  </div>
                  <div className="flex items-center justify-end pt-8 border-t border-gray-100">
                    <button onClick={() => setBookingStep('form')} className="bg-blue-600 text-white px-8 py-5 rounded-none font-black text-xs uppercase tracking-[0.2em] hover:bg-slate-900 transition-all shadow-xl flex items-center gap-2">Reserve Now <ChevronRight size={18}/></button>
                  </div>
                </div>
              )}
              {bookingStep === 'form' && (
                <form onSubmit={handleBookingSubmit}>
                  <h3 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tight">Booking Details</h3>
                  <div className="space-y-5 mb-10">
                    <div className="relative"><User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} /><input required type="text" placeholder="Full Name" className="w-full pl-12 pr-4 py-4 bg-slate-50 rounded-none outline-none ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500 transition-all" onChange={(e) => setFormData({...formData, name: e.target.value})} /></div>
                    <div className="relative"><Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} /><input required type="tel" placeholder="Phone Number" className="w-full pl-12 pr-4 py-4 bg-slate-50 rounded-none outline-none ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500 transition-all" onChange={(e) => setFormData({...formData, phone: e.target.value})} /></div>
                    <div className="relative"><Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} /><input required type="date" className="w-full pl-12 pr-4 py-4 bg-slate-50 rounded-none outline-none ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500 transition-all" onChange={(e) => setFormData({...formData, date: e.target.value})} /></div>
                  </div>
                  <div className="flex gap-4">
                    <button type="button" onClick={() => setBookingStep('details')} className="px-6 py-5 rounded-none bg-slate-100 font-bold text-slate-500 uppercase text-[10px]">Back</button>
                    <button type="submit" className="flex-1 bg-slate-900 text-white py-5 rounded-none font-black text-xs uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl">Confirm & Reserve</button>
                  </div>
                </form>
              )}
              {bookingStep === 'success' && (
                <div className="text-center">
                  <h3 className="text-3xl font-black text-slate-900 mb-4 uppercase">Success, {formData.name.split(' ')[0]}!</h3>
                  <p className="text-slate-500 mb-8 leading-relaxed">We've received your request for the <span className="text-slate-900 font-bold">{selectedCar.name}</span>. Our concierge will call you at <span className="text-slate-900 font-bold">{formData.phone}</span> shortly.</p>
                  <button onClick={closeModal} className="w-full bg-slate-900 text-white py-5 rounded-none font-black text-xs uppercase tracking-widest hover:bg-blue-600 transition-all">Return to Fleet</button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LuxuryCar;
