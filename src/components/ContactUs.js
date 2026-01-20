import React, { useState } from 'react';
import { Send, PhoneCall, MessageSquare, Mail, MapPin, Clock } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Corporate Rental',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for form submission
    console.log("Form Submitted:", formData);
    alert("Thank you! Our travel expert will contact you shortly.");
  };

  return (
    <section id="ContactUs" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h4 className="text-blue-600 font-bold uppercase tracking-[0.3em] text-sm mb-4">Get In Touch</h4>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Ready to <span className="text-blue-600">Travel?</span>
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT SIDE: Contact Info (5 Columns) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6">Contact Information</h3>
                <p className="text-slate-400 mb-10 leading-relaxed">
                  Have a specific requirement? Our dedicated corporate desk is available 24/7 to assist you.
                </p>

                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-500 border border-blue-600/30">
                      <PhoneCall size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase">Call for Booking</p>
                      <p className="text-xl font-bold">+91 44 4203 7171</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-500 border border-blue-600/30">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase">Email Us</p>
                      <p className="text-xl font-bold">info@expresstravelcorp.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-500 border border-blue-600/30">
                      <Clock size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase">Response Time</p>
                      <p className="text-xl font-bold">Under 15 Minutes</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Circle */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
            </div>

            {/* Quick WhatsApp Support */}
            <a 
              href="https://wa.me/919840012345" 
              className="flex items-center justify-between p-6 bg-green-50 rounded-3xl border-2 border-green-100 group hover:border-green-500 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="bg-green-500 text-white p-3 rounded-2xl">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-green-900">Chat on WhatsApp</h4>
                  <p className="text-sm text-green-700">Instant support for on-road duties</p>
                </div>
              </div>
              <Send className="text-green-500 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>

          {/* RIGHT SIDE: Contact Form (7 Columns) */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-sm">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name"
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Work Email</label>
                  <input 
                    type="email" 
                    placeholder="name@company.com"
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91 00000 00000"
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Service Required</label>
                  <select className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none font-medium">
                    <option>Corporate Fleet</option>
                    <option>Airport Transfers</option>
                    <option>Luxury Rental</option>
                    <option>Event Management</option>
                  </select>
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Your Requirements</label>
                  <textarea 
                    rows="4"
                    placeholder="Tell us about your travel needs..."
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none resize-none"
                  ></textarea>
                </div>

                <div className="md:col-span-2 mt-4">
                  <button 
                    type="submit"
                    className="w-full bg-blue-600 text-white py-5 rounded-[1.5rem] font-black text-lg hover:bg-slate-900 transition-all shadow-xl shadow-blue-100 flex items-center justify-center gap-3 group"
                  >
                    Request a Quote
                    <Send size={20} className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;