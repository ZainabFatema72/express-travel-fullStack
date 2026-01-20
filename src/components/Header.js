import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../assets/LOGO.jpg";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Luxury Car", path: "/luxury-car" },
    { name: "Team", path: "/team" },
    { name: "Clients", path: "/clients" },
    { name: "Branches", path: "/branches" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-0">
      <div className="w-full px-4 md:px-12">
        <div className="flex justify-between items-center h-14">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="w-24 h-12 flex items-center justify-start">
                <img
                  src={Logo}
                  alt="ETC Logo"
                  className="h-full w-auto object-contain scale-110"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-800 hover:text-blue-600 transition-all"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Contact Button */}
            <Link
              to="/contact"
              className="px-6 py-2 rounded text-[11px] font-black uppercase tracking-widest bg-blue-600 text-white hover:bg-blue-700 transition-all"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="xl:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-slate-900" />
            ) : (
              <Menu className="w-6 h-6 text-slate-900" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-slate-900 transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xl font-bold text-white hover:text-blue-500 uppercase tracking-widest"
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-blue-600 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
