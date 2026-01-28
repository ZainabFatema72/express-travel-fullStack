import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; 
import logo from '../assets/LOGO.jpg'; 

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); 

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'SERVICES', path: '/services' },
    { name: 'LUXURY CAR', path: '/luxury-car' },
    { name: 'CLIENTS', path: '/clients' },
    { name: 'TEAM', path: '/team' },
    { name: 'BRANCHES', path: '/branches' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[1000] px-4 md:px-8">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-b-3xl border-x border-b border-slate-100 px-6 py-4 flex items-center justify-between relative">
        
        {/* 1. Logo Section */}
        <Link to="/" className="flex items-center group z-[1001]">
          <img 
            src={logo} 
            alt="ETC Logo" 
            className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105" 
          />
        </Link>

        {/* 2. Desktop Navigation (Hidden on Mobile) */}
        <div className="hidden lg:flex gap-8 items-center ml-auto">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path} 
              className={`text-[14px] font-black tracking-tight transition-all hover:text-[#1C4D8D] ${
                location.pathname === link.path ? 'text-[#1C4D8D]' : 'text-black'
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          {/* Contact Button for Desktop */}
          <Link 
            to="/contact" 
            className="bg-[#1C4D8D] text-white ml-4 px-8 py-3 rounded-none font-black text-[12px] tracking-widest hover:bg-black transition-all shadow-md uppercase"
          >
            Contact Us
          </Link>
        </div>

        {/* 3. Mobile Menu Toggle Button (3 Lines) */}
        <button 
          className="lg:hidden p-2 text-[#1C4D8D] z-[1001]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* 4. Mobile Menu Overlay (Hidden on Desktop) */}
        <div className={`
          lg:hidden fixed inset-0 bg-white z-[1000] transition-all duration-500 ease-in-out flex flex-col items-end px-10 pt-32 gap-6
          ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}
        `}>
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path} 
              onClick={() => setIsOpen(false)}
              className={`text-2xl font-black tracking-tighter ${
                location.pathname === link.path ? 'text-[#1C4D8D]' : 'text-slate-900'
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          {/* Merged Contact Us Button in Mobile Menu */}
          <Link 
            to="/contact" 
            onClick={() => setIsOpen(false)}
            className="mt-4 bg-[#1C4D8D] text-white w-full py-5 rounded-2xl text-center font-black text-lg tracking-[0.2em] uppercase shadow-xl"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;