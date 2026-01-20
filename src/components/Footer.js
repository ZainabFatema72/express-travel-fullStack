import React from 'react';
import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin, MapPin, MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        {/* Reach Us / Seller Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 border-b border-slate-800 pb-16 mb-16">
          <div className="flex items-center space-x-6">
            <div className="bg-blue-600 p-4 rounded-2xl">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Do you have something to sell through us?</h3>
              <p className="text-slate-400">Collaborate with Express Travel Corporate Services.</p>
            </div>
          </div>
          <div className="flex lg:justify-end items-center">
            <button className="px-10 py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-gray-100 transition-all">
              Reach Us
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-blue-400">Express Travel Corporate Services Private Limited</h4>
            <div className="space-y-4 text-slate-400">
              <div className="flex items-start space-x-3">
                <MapPin className="w-6 h-6 text-blue-500 shrink-0" />
                <p>3rd No.20, Dandebury Street, Nungambakkam, Chennai-600034</p>
              </div>
            </div>
          </div>

          {/* Information Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Information</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#!" className="hover:text-white transition-colors">Luxury Car</a></li>
              <li><a href="#!" className="hover:text-white transition-colors">Team</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="text-xl font-bold mb-6">Contact Info</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-blue-400 font-semibold">Phone Numbers</p>
                <div className="flex items-center space-x-2 text-slate-300">
                  <Phone className="w-4 h-4" />
                  <span>044-44 2827 2279 / 4203 7171</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-300 font-bold">
                  <Phone className="w-4 h-4" />
                  <span>+91 98410 98410</span>
                </div>
                <p className="text-blue-400 font-semibold mt-4">Mobile No</p>
                <div className="text-slate-300">
                  <p>Whatsapp @ +91 98410 98410</p>
                  <p>+91 81111278 / +91-9786629662</p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-blue-400 font-semibold">Email Addresses</p>
                <div className="flex items-center space-x-2 text-slate-300">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:anbuarjun@expresstravelcorp.com" className="hover:text-white text-sm">anbuarjun@expresstravelcorp.com</a>
                </div>
                <div className="flex items-center space-x-2 text-slate-300">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:booking@expresstravelcorp.com" className="hover:text-white text-sm">booking@expresstravelcorp.com</a>
                </div>
                
                <p className="text-blue-400 font-semibold mt-4">Follow Us</p>
                <div className="flex space-x-4">
                  <a href="#!" className="p-2 bg-slate-800 rounded-lg hover:bg-blue-600 transition-all"><Facebook className="w-5 h-5" /></a>
                  <a href="#!" className="p-2 bg-slate-800 rounded-lg hover:bg-blue-400 transition-all"><Twitter className="w-5 h-5" /></a>
                  <a href="#!" className="p-2 bg-slate-800 rounded-lg hover:bg-pink-600 transition-all"><Instagram className="w-5 h-5" /></a>
                  <a href="#!" className="p-2 bg-slate-800 rounded-lg hover:bg-blue-700 transition-all"><Linkedin className="w-5 h-5" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 text-center text-slate-500 text-sm">
          <p>© 2026 Express Travel Corporate Services Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;