import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Globe, Navigation, Award, Users } from 'lucide-react';

const Branches = () => {
  const [activeBranch, setActiveBranch] = useState(0);

  const branchData = [
    {
      city: "Chennai (HO)",
      address: "No.20, Duraisamy Street, Nungambakkam, Chennai-600034",
      phone: "+91-44-2827 2279 / 4203 7171",
      email: "chennai@expresstravelcorp.com",
      timing: "24/7 Operations",
      // Adding actual embed links for unique feel
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.570000000000!2d80.24!3d13.06!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAzJzM2LjAiTiA4MMKwMTQnMjQuMCJF!5e0!3m2!1sen!2sin!4v1"
    },
    {
      city: "Bangalore",
      address: "St. Johns Church Road, Near Coles Park, Bangalore-560005",
      phone: "+91-80-4123 4567",
      email: "blr@expresstravelcorp.com",
      timing: "24/7 Operations",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8!2d77.6!3d12.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzAwLjAiTiA3N8KwMzYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
    },
    {
      city: "Hyderabad",
      address: "Begumpet, Near Metro Station, Hyderabad-500016",
      phone: "+91-40-6678 9012",
      email: "hyd@expresstravelcorp.com",
      timing: "24/7 Operations",
      mapEmbed: "" 
    },
    {
      city: "New Delhi",
      address: "Connaught Place, New Delhi-110001",
      phone: "+91-11-2345 6789",
      email: "delhi@expresstravelcorp.com",
      timing: "24/7 Operations",
      mapEmbed: ""
    }
  ];

  return (
    <section id="branches" className="py-24 bg-[#f8fafc] overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        
        {/* Header with Stats */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl text-left">
            <h4 className="text-blue-600 font-bold uppercase tracking-[0.4em] text-sm mb-4 flex items-center gap-2">
               <span className="w-8 h-px bg-blue-600"></span> Global Presence
            </h4>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight">
              Our Strategic <span className="text-blue-600 italic underline decoration-blue-200">Network</span>
            </h2>
          </div>
          
          <div className="flex gap-6">
             <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
                <div className="bg-blue-50 p-3 rounded-xl text-blue-600"><Navigation className="w-6 h-6"/></div>
                <div><p className="text-2xl font-black text-slate-900">15+</p><p className="text-xs text-slate-500 font-bold uppercase">Cities</p></div>
             </div>
             <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
                <div className="bg-blue-50 p-3 rounded-xl text-blue-600"><Users className="w-6 h-6"/></div>
                <div><p className="text-2xl font-black text-slate-900">500+</p><p className="text-xs text-slate-500 font-bold uppercase">Staff</p></div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: City Selector (4 Columns) */}
          <div className="lg:col-span-4 space-y-4">
            {branchData.map((branch, index) => (
              <div 
                key={index}
                onClick={() => setActiveBranch(index)}
                className={`cursor-pointer group relative p-6 rounded-[2rem] transition-all duration-500 border-2 ${
                  activeBranch === index 
                  ? 'bg-white border-blue-600 shadow-2xl shadow-blue-100 -translate-y-1' 
                  : 'bg-transparent border-slate-200 hover:border-blue-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${activeBranch === index ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-500'}`}>
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className={`text-xl font-black ${activeBranch === index ? 'text-slate-900' : 'text-slate-500'}`}>{branch.city}</h4>
                      <p className="text-xs font-bold text-blue-500/70 uppercase">Regional Hub</p>
                    </div>
                  </div>
                  {activeBranch === index && <div className="w-2 h-2 bg-blue-600 rounded-full animate-ping"></div>}
                </div>
              </div>
            ))}

            {/* Support Highlight Box */}
            <div className="mt-10 p-8 rounded-[2rem] bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
               <div className="relative z-10">
                 <Award className="text-blue-400 w-10 h-10 mb-4" />
                 <h4 className="text-xl font-bold mb-2">24/7 Dedicated Support</h4>
                 <p className="text-slate-400 text-sm leading-relaxed">Centralized helpdesk for all branches ensuring seamless travel management.</p>
               </div>
               <div className="absolute -right-4 -bottom-4 opacity-10"><Globe className="w-32 h-32"/></div>
            </div>
          </div>

          {/* RIGHT: Detailed Dashboard (8 Columns) */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-[3rem] shadow-xl border border-slate-100 h-full overflow-hidden flex flex-col">
              
              {/* Info Bar */}
              <div className="p-8 md:p-12">
                <div className="flex flex-wrap justify-between items-start gap-6 mb-12">
                   <div>
                     <span className="bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">Selected Location</span>
                     <h3 className="text-4xl font-black text-slate-900 mt-3">{branchData[activeBranch].city}</h3>
                   </div>
                   <button className="flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-900 transition-all shadow-lg shadow-blue-100">
                     Contact Branch <Phone className="w-4 h-4" />
                   </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <ContactItem icon={<MapPin />} label="Address" value={branchData[activeBranch].address} />
                    <ContactItem icon={<Phone />} label="Phone" value={branchData[activeBranch].phone} />
                  </div>
                  <div className="space-y-6">
                    <ContactItem icon={<Mail />} label="Email" value={branchData[activeBranch].email} />
                    <ContactItem icon={<Clock />} label="Support" value={branchData[activeBranch].timing} />
                  </div>
                </div>
              </div>

              {/* Map Preview Area */}
              <div className="flex-grow bg-slate-100 min-h-[300px] relative">
                 {branchData[activeBranch].mapEmbed ? (
                   <iframe 
                    src={branchData[activeBranch].mapEmbed}
                    className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                    allowFullScreen=""
                    loading="lazy"
                   ></iframe>
                 ) : (
                   <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 p-12 text-center">
                      <Globe className="w-16 h-16 mb-4 opacity-20" />
                      <p className="font-bold">Map Preview for {branchData[activeBranch].city} is loading...</p>
                   </div>
                 )}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// Sub-component for clean code
const ContactItem = ({ icon, label, value }) => (
  <div className="flex items-start gap-4 group">
    <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
      {React.cloneElement(icon, { size: 18 })}
    </div>
    <div>
      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{label}</p>
      <p className="text-slate-700 font-bold leading-snug">{value}</p>
    </div>
  </div>
);

export default Branches;