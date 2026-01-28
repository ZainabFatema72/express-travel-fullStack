import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Headphones, X, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const locations = [
  { 
    id: 'chennai', 
    name: 'Chennai (Regd. Office)', 
    address: 'No.20, Duraisamy Street, Nungambakkam, Chennai-600034', 
    email: 'info@expresstravelcorp.com', 
    phone: '+91-44-2827 2279 / 4203 7171',
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.583563456801!2d80.24032047587784!3d13.06216891289139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52664213756209%3A0x633458448f2203d7!2s20%2C%20Duraisamy%20St%2C%20Nungambakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600034!5e0!3m2!1sen!2sin!4v1710324567890!5m2!1sen!2sin" 
  },
  { 
    id: 'bangalore', 
    name: 'Bangalore', 
    address: 'No.37/17 Meanee Avenue Tank Road, Ulsoor, Bangalore 560 042 | GST: 29AAICE1721D1ZY', 
    email: 'blr@expresstravelcorp.com', 
    phone: '+91 7200091167',
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.654!2d77.62!3d12.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzEyLjAiTiA3N8KwMzcnMTIuMCJF!5e0!3m2!1sen!2sin!4v1710324567891"
  },
  { 
    id: 'bhopal', 
    name: 'Bhopal', 
    address: 'F-05, Shri Ram Complex, Shri Ram Colony, Hoshangabad Road, Bhopal Madhya Pradesh 462026 | GST: 23AAICE1721D1ZA', 
    email: 'bhopal@expresstravelcorp.com', 
    phone: '+91 7200091168',
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.123!2d77.44!3d23.21!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDEyJzM2LjAiTiA3N8KwMjYnMjQuMCJF!5e0!3m2!1sen!2sin!4v1710324567892"
  },
  { 
    id: 'new-delhi', 
    name: 'New Delhi', 
    address: 'Plot No. A-17 House, No.101 UG Floor, Block A, Pochanpur Ext. Sector 23 Dwarka New Delhi 110 077 | GST: 07AAICE1721D1Z4', 
    email: 'delhi@expresstravelcorp.com', 
    phone: '+91 7845103222',
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.123!2d77.06!3d28.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM0JzQ4LjAiTiA3N8KwMDMnMzYuMCJF!5e0!3m2!1sen!2sin!4v1710324567893"
  },
  { 
    id: 'hyderabad', 
    name: 'Hyderabad', 
    address: '1st Floor Plot No. 20 VIP Hills, Lane beside LOT Mobile Building, Capital Park Road, Madhapur, R R District, Hyderabad 500081 | GST: 36AAICE1721D1Z3', 
    email: 'hyd@expresstravelcorp.com', 
    phone: '+91-97-9111-1275',
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.123!2d78.39!3d17.44!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI2JzI0LjAiTiA3OMKwMjMnMjQuMCJF!5e0!3m2!1sen!2sin!4v1710324567894"
  },
  { 
    id: 'nagpur', 
    name: 'Nagpur', 
    address: '24, Flat No.C/2, Opp. RTO Office, Amravati Road, Giripeth Nagpur, Maharashtra 440010 | GST: 27AAICE1721D1Z2', 
    email: 'nagpur@expresstravelcorp.com', 
    phone: '+91-97-9111-1275',
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.123!2d79.07!3d21.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDA5JzAwLjAiTiA3OcKwMDQnMTEuMCJF!5e0!3m2!1sen!2sin!4v1710324567895"
  },
  { 
    id: 'puducherry', 
    name: 'Puducherry', 
    address: 'Flat No.: NO 109, VILLIANUR MAI ROAD, Reddiarpalayam Puducherry 605010 | GST: 34AAICE1721D1Z7', 
    email: 'pondy@expresstravelcorp.com', 
    phone: '+91-97-9111-1275',
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.123!2d79.79!3d11.93!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDU1JzQ4LjAiTiA3OcKwNDcnMjQuMCJF!5e0!3m2!1sen!2sin!4v1710324567896"
  }
];

const Branches = () => {
  const [activeTab, setActiveTab] = useState('chennai');
  const [showSupportModal, setShowSupportModal] = useState(false);
  const current = locations.find(l => l.id === activeTab);

  return (
    <section className="py-24 px-4 bg-white max-w-7xl mx-auto pt-32 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div>
          <p className="text-blue-600 font-bold text-xs tracking-widest uppercase mb-2">Our Presence</p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter">
            Our Strategic <span className="text-blue-600 italic font-medium lowercase">Network</span>
          </h2>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2 bg-blue-50 px-5 py-3 rounded-none text-blue-600 font-black text-xs border border-blue-100 shadow-sm">
            <MapPin size={16}/> PAN INDIA
          </div>
          <button 
            onClick={() => setShowSupportModal(true)} 
            className="flex items-center gap-2 bg-slate-900 px-5 py-3 rounded-none text-white font-black text-xs shadow-lg hover:bg-blue-600 transition-all uppercase"
          >
            <Headphones size={16}/> 24/7 Support
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Sidebar: Tabs + Support Block (Wapas yahan le aaye) */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="space-y-2 overflow-y-auto max-h-[500px] pr-2 scrollbar-hide">
            {locations.map((loc) => (
              <button 
                key={loc.id} 
                onClick={() => setActiveTab(loc.id)}
                className={`w-full flex items-center gap-4 p-5 rounded-none border transition-all duration-300 ${
                  activeTab === loc.id 
                  ? 'bg-blue-600 border-blue-600 text-white shadow-xl translate-x-1' 
                  : 'bg-gray-50 border-gray-100 text-slate-600 hover:bg-white'
                }`}
              >
                <MapPin size={18} className={activeTab === loc.id ? 'text-white' : 'text-blue-600'} />
                <div className="text-left">
                  <p className="font-black text-sm uppercase tracking-tight leading-none">{loc.name}</p>
                </div>
              </button>
            ))}
          </div>

          {/* 24/7 Support Block in Sidebar */}
          <div 
            onClick={() => setShowSupportModal(true)}
            className="p-8 bg-[#0a1128] rounded-none text-white relative overflow-hidden group cursor-pointer border border-white/10 hover:border-blue-500 transition-all"
          >
            <Headphones className="text-blue-500 mb-6" size={32} />
            <h4 className="text-xl font-black uppercase tracking-tight">24/7 Dedicated Support</h4>
            <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest italic leading-relaxed">Centralized helpdesk for emergency travel needs across all branches.</p>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="lg:col-span-8 bg-white border border-gray-100 shadow-2xl rounded-none overflow-hidden flex flex-col">
          <div className="p-10 flex-grow">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
              <div>
                <p className="text-blue-600 font-bold text-[10px] uppercase tracking-[0.3em] mb-2">Location Profile</p>
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter uppercase leading-none">{current.name}</h3>
              </div>
              <a href={`mailto:${current.email}`} className="bg-blue-600 text-white px-8 py-3 rounded-none font-black text-xs tracking-widest hover:bg-slate-900 transition-all uppercase">
                Send Enquiry
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-6">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin size={20} className="text-blue-600 shrink-0" />
                  <p className="text-xs font-bold text-slate-600 leading-relaxed uppercase">{current.address}</p>
                </div>
                <div className="flex gap-4">
                  <Phone size={20} className="text-blue-600 shrink-0" />
                  <div>
                    <p className="text-[9px] text-gray-400 font-black uppercase mb-1">Direct Line</p>
                    <p className="text-sm font-black text-slate-900">{current.phone}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Mail size={20} className="text-blue-600 shrink-0" />
                  <div>
                    <p className="text-[9px] text-gray-400 font-black uppercase mb-1">Official Email</p>
                    <p className="text-sm font-black text-slate-900">{current.email}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock size={20} className="text-blue-600 shrink-0" />
                  <div>
                    <p className="text-[9px] text-gray-400 font-black uppercase mb-1">Status</p>
                    <p className="text-sm font-black text-green-600 uppercase">Operational 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[400px] w-full bg-gray-100 grayscale hover:grayscale-0 transition-all duration-700">
            <iframe title={current.name} width="100%" height="100%" style={{ border: 0 }} src={current.map} allowFullScreen="" loading="lazy"></iframe>
          </div>
        </div>
      </div>

      {/* Pop-up Modal */}
      <AnimatePresence>
        {showSupportModal && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={() => setShowSupportModal(false)} />
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative bg-white w-full max-w-md p-10 rounded-none shadow-2xl text-center border-t-4 border-blue-600">
              <button onClick={() => setShowSupportModal(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-900"><X size={24}/></button>
              <div className="w-16 h-16 bg-blue-50 flex items-center justify-center mx-auto mb-6"><Headphones size={32} className="text-blue-600" /></div>
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-2">Emergency Helpdesk</h3>
              <p className="text-slate-500 text-xs mb-8 font-medium">Connect with our specialized team for immediate assistance across India.</p>
              <a href="tel:+919791111275" className="flex items-center justify-center gap-3 w-full bg-blue-600 text-white py-4 rounded-none font-black text-xs uppercase tracking-widest hover:bg-slate-900 shadow-xl transition-all">
                <PhoneCall size={18} /> Call Helpline Now
              </a>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Branches;