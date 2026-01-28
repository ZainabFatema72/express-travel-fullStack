import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, CheckCircle2, PhoneCall, User, Phone, Calendar, MailCheck, ShieldCheck } from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState(null);
  const [bookingStep, setBookingStep] = useState('details'); // details, form, success
  const [formData, setFormData] = useState({ name: '', phone: '', date: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (activeService) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [activeService]);

  const services = [
    { title: 'Luxury Car Rental', image: 'https://cdn.i-scmp.com/sites/default/files/d8/images/methode/2020/02/12/f7c86e68-4c08-11ea-9b4e-9c10402c07b7_972x_125528.jpg', 
      description: 'Experience the ultimate comfort and style with our premium fleet of luxury sedans and SUVs.', features: ['Chauffeur Driven', 'Latest Models', 'GPS Tracking', 'Events and Weddings'] },
    { title: 'Corporate Travel', image: 'https://www.silvertaxitoairport.com.au/wp-content/uploads/2024/11/Corporate-Travel-inner-image.jpg',
       description: 'Tailored mobility solutions for businesses, ensuring your executives travel with punctuality and class.', features: ['Tech enabled mobility', 'Priority Booking', '24/7', 'Professional Attire Drivers'] },
   { title: 'Overseas', image: 'https://cdn-gijjp.nitrocdn.com/LIXYzdApuuJORXspMjtQwacGTtiSwhBg/assets/images/optimized/rev-e22c25e/rangerguard.net/wp-content/uploads/2024/11/shutterstock_768847708.jpg', 
    description: 'Specialized security-integrated transportation for dignitaries and high-net-worth individuals.', features: ['Armed/Unarmed Guards', 'Discreet Operations', 'Route Survey', 'Bulletproof Vehicle Option'] },
 { title: 'Employee Transport', image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1000&auto=format&fit=crop',
   description: 'Safe and efficient daily commute solutions for your entire workforce with real-time tracking.', features: ['Women Safety', 'Panic Button Enabled', 'Tech enabled functions', '24/7 Control Room'] },
   { title: 'Airport Transfers', image: 'https://azureprivatehire.com/wp-content/uploads/2022/11/Perfect-Airport-Transfer-for-Your-Travel-Needs-1000x620.jpg',
     description: 'Reliable pick-and-drop services to ensure you never miss a flight or wait at the arrivals.', features: ['Flight Monitoring', 'Meet & Greet', 'Luggage Assistance', 'On-time Guarantee'] },
     { title: 'VIP Concierge', image: 'https://veronikasadventure.com/wp-content/uploads/2024/07/2_private-transfer-from-luxor-hotel-to-the-airport-or-vice-versa.jpg',
       description: 'High-end personalized assistance for VVIPs, celebrities, and diplomats.', features: ['Security Detail', 'Discreet Service', 'Red Carpet Arrival', 'Personal Coordinator'] },
    { title: 'Events Logistics', image: 'https://www.fabcars.in/assets/images/blog/luxury-car-rental-in-mumbai-for-weddings-body.webp',
       description: 'End-to-end fleet management for large-scale conferences and weddings.', features: ['On-site Coordinator', 'Help Desk Setup', 'Multiple Car Options', 'Custom Branding'] },
    { title: 'Intercity Trips', image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000&auto=format&fit=crop', 
      description: 'Comfortable and safe long-distance travel across India with experienced highway drivers.', features: ['Inter-city Permits', 'Well-rested Drivers', 'Luxury Coaches', 'Flexible Itinerary'] }
  ];

  const closeModal = () => {
    setActiveService(null);
    setBookingStep('details');
    setFormData({ name: '', phone: '', date: '' });
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbznfkqObCZtcJcDiiNCDdKFrypZ1_Fe5G9O8mCYppffXrqmLb8kINuJftyuwOoPEPJybw/exec"; 

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          carName: activeService.title,
          category: 'General Service Inquiry',
          price: 'On Request',
          recipient: "mrunal.royalswebtech@gmail.com" //
        })
      });
      setBookingStep('success'); 
    } catch (error) {
      setBookingStep('success');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-50 scroll-mt-20 overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-16">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-black text-gray-900 mb-6 uppercase tracking-tighter">
          Our <span className="text-blue-600">Services</span>
        </motion.h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto italic leading-relaxed">Redefining corporate and luxury travel with safety, comfort, and elite standards.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {services.map((service, index) => (
          <motion.div key={index} whileHover={{ y: -10 }} onClick={() => setActiveService(service)} className="group relative h-[450px] overflow-hidden cursor-pointer shadow-xl bg-white">
            <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">{service.title}</h3>
              <p className="text-gray-300 text-xs mb-6 opacity-0 group-hover:opacity-100 transition-all font-medium">{service.description}</p>
              <div className="flex items-center space-x-2 text-blue-400 font-black text-[10px] uppercase tracking-widest bg-white/10 w-fit px-4 py-2 rounded-none backdrop-blur-md">
                <span>Explore Service</span> <ArrowRight size={14} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* --- MODAL SECTION WITH BOOKING DETAILS --- */}
      <AnimatePresence>
        {activeService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-slate-900/70 backdrop-blur-md" onClick={closeModal} />
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="relative bg-white w-full max-w-4xl rounded-none overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[450px]">
              <button onClick={closeModal} className="absolute top-6 right-6 z-50 p-2 bg-slate-50 rounded-none text-slate-400 hover:text-blue-600 transition-all"><X size={20} /></button>

              {/* Left Side (Visual) */}
              <div className={`relative md:w-1/2 min-h-[300px] flex items-center justify-center p-12 transition-colors duration-500 ${bookingStep === 'success' ? 'bg-[#1C4D8D]' : 'bg-gray-50'}`}>
                {bookingStep !== 'success' ? (
                  <img src={activeService.image} alt={activeService.title} className="relative z-10 w-full h-full object-cover rounded-none shadow-2xl" />
                ) : (
                  <div className="text-white text-center">
                    <div className="w-24 h-24 bg-white/20 rounded-none flex items-center justify-center mx-auto mb-6"><MailCheck size={60} /></div>
                    <h2 className="text-4xl font-black uppercase tracking-tighter">Enquiry Sent!</h2>
                  </div>
                )}
              </div>

              {/* Right Side (Content/Form) */}
              <div className="md:w-1/2 p-10 flex flex-col justify-center bg-white">
                {bookingStep === 'details' && (
                  <div>
                    <div className="flex items-center gap-2 mb-4 text-blue-600 font-black text-xs uppercase tracking-widest"><ShieldCheck size={18} /> Premium Corporate Solution</div>
                    <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tighter leading-none">{activeService.title}</h2>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">{activeService.description}</p>
                    <div className="space-y-3 mb-8">
                      {activeService.features.map((f, i) => (
                        <div key={i} className="flex items-center gap-3"><div className="w-2 h-2 bg-blue-600 rounded-none" /><span className="text-slate-700 font-bold text-xs uppercase">{f}</span></div>
                      ))}
                    </div>
                    <div className="flex items-center gap-4">
                      <button onClick={() => setBookingStep('form')} 
                      className="flex-1 bg-slate-900 text-white py-5 rounded-none font-black text-xs uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl">
                        Book Service</button>
                      <a href="tel:+919791111275" className="p-4 rounded-none border-9 border-slate-100 text-slate-900 hover:border-blue-900 transition-all"><PhoneCall size={18} /></a>
                    </div>
                  </div>
                )}

                {bookingStep === 'form' && (
                  <form onSubmit={handleBookingSubmit}>
                    <h3 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tight">Booking Details</h3>
                    <div className="space-y-5 mb-10">
                      <div className="relative"><User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input required type="text" placeholder="Full Name" className="w-full pl-12 pr-4 py-4 bg-slate-50 rounded-none outline-none ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500 transition-all" onChange=
                      {(e) => setFormData({...formData, name: e.target.value})} /></div>
                      <div className="relative"><Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input required type="tel" placeholder="Phone Number" className="w-full pl-12 pr-4 py-4 bg-slate-50 rounded-none outline-none ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500 transition-all" onChange=
                      {(e) => setFormData({...formData, phone: e.target.value})} /></div>
                      <div className="relative"><Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input required type="date" className="w-full pl-12 pr-4 py-4 bg-slate-50 rounded-none outline-none ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500 transition-all" onChange=
                      {(e) => setFormData({...formData, date: e.target.value})} /></div>
                    </div>
                    <div className="flex gap-4">
                      <button type="button" onClick={() => setBookingStep('details')} className="px-6 py-5 rounded-none bg-slate-100 font-bold text-slate-500 uppercase text-[10px]">Back</button>
                      <button type="submit" disabled={isSubmitting} className="flex-1 bg-slate-900 text-white py-5 rounded-none font-black text-xs uppercase tracking-widest hover:bg-[#1C4D8D] shadow-none disabled:bg-gray-900">
                        {isSubmitting ? 'Processing...' : 'Confirm & Reserve'}
                      </button>

                      
                    </div>
                  </form>
                )}

                {bookingStep === 'success' && (
                  <div className="text-center animate-in fade-in duration-700">
                    <h3 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">Success!</h3>
                    <p className="text-slate-500 mb-8 leading-relaxed italic font-medium">Thank you, {formData.name.split(' ')[0]}. Your enquiry for {activeService.title} has been submitted. Our team will contact you at {formData.phone} shortly.</p>
                    <button onClick={closeModal} className="w-full bg-[#1C4D8D] text-white py-5 rounded-none font-black text-xs uppercase tracking-widest hover:bg-slate-900 transition-all shadow-lg">Back to Services</button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;