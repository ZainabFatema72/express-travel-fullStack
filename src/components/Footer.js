import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, Instagram,  MapPin, ChevronRight,FileText, Download, Phone, Mail, MessageSquare 
} from 'lucide-react';
import rwtlogo from '../assets/rwtlogo.png'; 

// 1. Pehle PDF ko import karein
import panPDF from '../assets/pan.pdf'; 

const Footer = () => {
  const infoLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Clients', path: '/clients' },
    { name: 'Branches', path: '/branches' },
    { name: 'Contact Us', path: '/contact' }
  ];

  // 2. Updated Download Logic
  const handleDownloadTariff = () => {
    const link = document.createElement("a");
    link.href = panPDF; // Yahan imported file ka use hoga
    link.download = "ETC_Tariff_Details.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer className="bg-[#0a1128] text-white pt-10 pb-3 relative overflow-hidden font-sans border-t border-white/10">
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-screen"
        style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/world-map.png')",
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* 1. BRAND & IDENTITY */}
          <div className="space-y-6 text-left">
            <div className="h-12 w-48 mb-4">
               <img 
                 src="https://www.etconline.in/images/logo.png" 
                 alt="ETC Logo" 
                 className="h-full object-contain brightness-0 invert" 
               />
            </div>
            <p className="text-white text-sm font-black uppercase tracking-widest leading-relaxed">
              Express Travel Corporate <br /> Services Private Limited
            </p>
            
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 text-white">
                <MapPin className="w-5 h-5 text-[#60A5FA] shrink-0 mt-1" />
                <p className="text-sm leading-relaxed font-bold">
                  Regd. Office <br></br>Express Building <br></br>No.20, Duraisamy Street, <br></br>Nungambakkam, Chennai-600034
                </p>
              </div>
            </div>
          </div>

          {/* 2. INFORMATION */}
          <div className="space-y-6 text-left">
            <h4 className="text-[#60A5FA] font-black text-lg md:text-xl uppercase tracking-widest border-l-4 border-[#60A5FA] pl-3 drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]">
              Information
            </h4>
            <ul className="grid grid-cols-1 gap-3">
              {infoLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-white hover:text-[#60A5FA] text-sm font-bold uppercase tracking-widest transition-all flex items-center group">
                    <ChevronRight size={16} className="text-[#60A5FA] mr-2 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. CONTACT & TARIFF */}
          <div className="space-y-6 text-left">
            <h4 className="text-[#60A5FA] font-black text-lg md:text-xl uppercase tracking-widest border-l-4 border-[#60A5FA] pl-3 drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]">
              Tariff & Contact
            </h4>
            <div className="space-y-4">
              <button 
                onClick={handleDownloadTariff}
                className="bg-[#1C4D8D] text-white px-5 py-3 rounded-none flex items-center gap-3 animate-pulse border border-blue-400/30 hover:scale-105 transition-transform"
              >
                <FileText size={20} />
                <div className="text-left">
                  <p className="text-[10px] font-black uppercase tracking-tighter leading-none">Download</p>
                  <p className="text-sm font-black uppercase">Tariff 2026</p>
                </div>
                <Download size={14} className="ml-1" />
              </button>

              <div className="pt-2 space-y-4">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-[#60A5FA]" />
                    <p className="text-white text-sm font-black tracking-tight">+91 44 2822 4413 <br></br>+91 44 2827 2279 <br></br>+91 97 9111 1275</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-[#60A5FA]" />
                  <p className="text-white text-sm font-bold lowercase tracking-wide">enquiry@expresstravelcorp.com </p>
                </div>
              </div>
            </div>
          </div>

          {/* 4. CONNECT */}
          <div className="space-y-6 text-left">
            <h4 className="text-[#60A5FA] font-black text-lg md:text-xl uppercase tracking-widest border-l-4 border-[#60A5FA] pl-3 drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]">
              Connect
            </h4>
            <div className="flex flex-row items-center gap-2">
              <a href="https://www.facebook.com/share/r/1HyKdVtRCN/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 border border-white/10 rounded-none text-white hover:bg-[#60A5FA] transition-all">
                <Facebook size={16} />
              </a>
              <a href="https://www.facebook.com/share/1F642eNLSg/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 border border-white/10 rounded-none text-white hover:bg-[#60A5FA] transition-all">
                <MessageSquare size={16} />
              </a>
              <a href="https://www.instagram.com/p/DP1NcqLAQVE/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 border border-white/10 rounded-none text-white hover:bg-[#60A5FA] transition-all">
                <Instagram size={16} />
              </a>
            </div>
            <div className="flex items-center gap-2 text-[#60A5FA] text-xs font-black uppercase italic">
                <div className="w-2 h-2 bg-[#60A5FA] rounded-full animate-ping" />
                Since 1999
            </div>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="pt-5 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 font-black text-[10px] uppercase tracking-[0.2em]">
          <p>© 2026 Express Travel Corporate Services. All Rights Reserved.</p>
          
          <div className="flex items-center gap-3">
            <span className="text-[8px] text-gray-500 uppercase tracking-widest">Powered By</span>
            <img 
              src={rwtlogo} 
              alt="RWT Logo" 
              className="h-8 w-auto object-contain opacity-80" 
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;