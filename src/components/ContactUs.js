import React from 'react';
import { Phone, Mail, Clock } from 'lucide-react';

const ContactUs = () => {
  return (
    <section className="py-24 px-4 bg-white max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-black text-slate-900">Ready to <span className="text-blue-600">Travel?</span></h2>
        <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full"></div>
      </div>

      <div className="flex flex-col lg:flex-row bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 min-h-[600px]">
        <div className="lg:w-1/3 bg-[#0a1128] p-12 text-white flex flex-col justify-between">
          <div>
            <h3 className="text-4xl font-bold mb-6">Contact Information</h3>
            <p className="text-gray-400 mb-12 leading-relaxed">Have a specific requirement? Our dedicated corporate desk is available 24/7 to assist you.</p>
            <div className="space-y-10">
              <div className="flex items-center gap-5">
                <div className="bg-blue-600/20 p-4 rounded-2xl border border-blue-500/30 text-blue-400"><Phone size={24} /></div>
                <div><p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Call for booking</p><p className="text-xl font-bold">+91 44 2822 4413 ,<br></br>+91 44 2827 2279 ,<br></br>+91 97 9111 1275</p></div>
              </div>
              <div className="flex items-center gap-5">
                <div className="bg-blue-600/20 p-4 rounded-2xl border border-blue-500/30 text-blue-400"><Mail size={24} /></div>
                <div><p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Email Us</p><p className="text-xl font-bold">enquiry@expresstravelcorp.com</p></div>
              </div>
              <div className="flex items-center gap-5">
                <div className="bg-blue-600/20 p-4 rounded-2xl border border-blue-500/30 text-blue-400"><Clock size={24} /></div>
                <div><p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Response Time</p><p className="text-xl font-bold text-green-400 tracking-tight">Approximate 15 Minutes</p></div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-2/3 p-12 bg-gray-50/50">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Full Name</label>
              <input type="text" placeholder="Enter your name" className="w-full p-5 rounded-2xl border border-gray-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 bg-white transition-all outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Work Email</label>
              <input type="email" placeholder="name@company.com" className="w-full p-5 rounded-2xl border border-gray-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 bg-white transition-all outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Phone Number</label>
              <input type="tel" placeholder="+91 00000 00000" className="w-full p-5 rounded-2xl border border-gray-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 bg-white transition-all outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Service Required</label>
              <select className="w-full p-5 rounded-2xl border border-gray-200 bg-white appearance-none cursor-pointer focus:border-blue-500 outline-none">
                <option>Corporate Fleet</option>
                <option>Luxury Rental</option>
              </select>
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-bold text-slate-700">Your Requirements</label>
              <textarea rows="4" placeholder="Tell us about your travel needs..." className="w-full p-5 rounded-2xl border border-gray-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 bg-white transition-all outline-none resize-none"></textarea>
            </div>
            <button className="md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white font-black py-5 rounded-2xl shadow-xl shadow-blue-200 transition-all active:scale-95 uppercase tracking-widest text-sm">Send Request</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;