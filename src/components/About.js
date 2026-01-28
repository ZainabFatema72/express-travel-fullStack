import React from 'react';
import { Globe, Smartphone, ShieldCheck, Phone, LayoutGrid, Car, Shield } from 'lucide-react';
import bgImage from '../assets/About.jpeg';
import MyImage1 from '../assets/tariff.jpeg'; 
import MyImage2 from '../assets/whychooseus.jpeg';

import iatoLogo from '../assets/Certifications/1.jpg';
import ittaLogo from '../assets/Certifications/2.jpg';
import skalLogo from '../assets/Certifications/3.png';
import ccAvenueLogo from '../assets/Certifications/cc.jpg';

const About = () => {
  const objectives = [
    { 
      icon: <Globe size={24} />, 
      title: "PAN India Coverage", 
      desc: "ETC offers PAN India services with branch offices in Chennai, Bangalore, Hyderabad, New Delhi, Bhopal, and Pune. We also operate in major cities like Mumbai, Kolkata, Puducherry, Nagpur and throughout India." 
    },
    { 
      icon: <LayoutGrid size={24} />, 
      title: "Tier 2 & 3 Expansion", 
      desc: "Looking at the growing demand in tier 2 and tier 3 cities, we have effectively expanded our services for commercial and ground transportation needs for more than 120 cities" 
    },
    { 
      icon: <Car size={24} />, 
      title: "Technology Driven", 
      desc: "ETC is equipped with in-house technology and a new-age mobile tool app to cater to corporate employees and travel managers. Our technology delivers cost-effective, transparent, and reliable travel experiences." 
    },
  ];

  const carouselLogos = [
  { src: iatoLogo, alt: "IATO" },
  { src: ittaLogo, alt: "ITTA" },
  { src: skalLogo, alt: "SKAL" },
  { src: ccAvenueLogo, alt: "CC Avenue" },
  { src: iatoLogo, alt: "IATO" },
  { src: ittaLogo, alt: "ITTA" },
  { src: skalLogo, alt: "SKAL" },
  { src: ccAvenueLogo, alt: "CC Avenue" }
];

  return (
    <div className="bg-white font-sans text-slate-900 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section 
        className="relative bg-cover bg-fixed bg-center pt-40 pb-24 px-6 text-center text-white border-b border-white/5"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-[#0a1128]/85 z-0"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-blue-400 font-bold tracking-[0.4em] uppercase text-[10px] mb-4 italic">Established Since 1999</p>
          <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter leading-tight">
            About <span className="text-blue-500 italic">Express Travel</span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed italic max-w-2xl mx-auto border-l-2 border-blue-600/30 pl-6 text-left">
            "Clients are our Prime Assets. We nurture a culture founded on TRUST, PRIDE and TEAM WORK."
          </p>
        </div>
      </section>

      {/* 2. CONTENT SECTION: ABOUT US */}
      <section className="max-w-6xl mx-auto py-10 px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE: Images - Yahan apni images set karein */}
        <div className="relative h-[400px] w-full">
          {/* Pehli Image */}
          <div className="absolute top-0 right-4 w-3/4 h-3/4 rounded-xl overflow-hidden border-5 border-[#001233] shadow-2xl z-20">
            <img 
              src={MyImage1} 
              className="w-full h-full object-cover" 
              alt="Express Travel Fleet" 
            />
          </div>
          
          {/* Dusri Image */}
          <div className="absolute bottom-0 left-4 w-1/2 h-1/2 rounded-xl overflow-hidden border-4 border-[#001233] shadow-2xl z-20">
            <img 
              src={MyImage2} 
              className="w-full h-full object-cover" 
              alt="Express Travel Service" 
            />
          </div>
        </div>

        {/* RIGHT SIDE: Content (Jaisa aapne bataya tha) */}
        <div className="space-y-6">
          <div className="flex flex-col gap-1">
            <p className="text-blue-600 font-bold uppercase text-[12px] tracking-[0.2em]">
              About Express Travel Corporate Services
            </p>
            <h2 className="text-5xl font-black text-[#001233] uppercase leading-none tracking-tighter">
              About Us
            </h2>
          </div>

          <div className="space-y-4">
            <div className="space-y-1">
              <h3 className="text-xl font-black text-slate-900 leading-tight uppercase">
               DRIVE IN INDIA  <br /> & OVERSEAS
              </h3>
              <p className="text-blue-600 font-bold text-[11px] uppercase tracking-widest">
                A CAR FOR EVERY NEED
              </p>
            </div>

            <div className="text-slate-600 text-[15px] leading-relaxed space-y-4">
              <p className="italic font-semibold text-slate-800 border-l-4 border-blue-600 pl-4 py-1 bg-blue-50/50">
                "We have a range of cars, so something will perfectly fit your trip"
              </p>
              
              <p className="text-justify font-medium">
                <span className="font-bold text-[#001233]">Express Travel Corporate Services Pvt Ltd</span> (recognized by the Government of India, Ministry of Tourism), referred to as ETC, was established in 1999 to provide MNCs and large organizations with a superior travel experience that enhances the daily commute. ETC offers secure, convenient, enjoyable, and connected travel. ETC has evolved into a highly successful business, specializing in luxury car services for Corporate Clients, VVIP’s, Events, Consulates, and MICE, with a strong focus on the travel industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION & OBJECTIVES */}
      <div 
        className="relative bg-cover bg-fixed bg-center py-20 px-6" 
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/85 z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10 shadow-xl">
              <h3 className="text-xl font-bold text-blue-400 mb-3 italic">"Our Mission"</h3>
              <p className="text-gray-300 text-sm leading-relaxed">To provide safe, reliable, and cost-effective travel solutions through innovation and customer-centricity.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10 shadow-xl">
              <h3 className="text-xl font-bold text-blue-400 mb-3 italic">"Our Vision"</h3>
              <p className="text-gray-300 text-sm leading-relaxed">To be the most preferred travel partner globally by setting benchmarks in service quality with technology</p>
            </div>
          </div>

          <div className="mb-12 text-center">
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter">Scope & <span className="text-blue-500">Objectives</span></h2>
            <div className="w-16 h-1 bg-blue-500 mx-auto mt-3 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectives.map((obj, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/10 group transition-all duration-300 hover:bg-white/20">
                <div className="mb-4 p-3 bg-blue-500/20 w-fit rounded-xl text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">{obj.icon}</div>
                <h3 className="text-lg font-black mb-2 uppercase text-white leading-tight">{obj.title}</h3>
  
                <p className="text-white text-sm font-bold leading-relaxed">{obj.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* --- WHITE SPACE / DIVIDER BETWEEN SECTIONS --- */}
      <div className="h-10 bg-white w-full"></div>


      {/* --- COMPACT LIGHT BLUE STATS SECTION --- */}
      <section className="bg-blue-50 py-12 px-6 border-y border-blue-100 rounded-xl mx-4 md:mx-10 shadow-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x-0 md:divide-x md:divide-blue-200">
            
            {/* Stat 1 */}
            <div className="text-center">
              <h2 className="text-5xl font-black text-[#001233] mb-1 tracking-tighter">
                1500+
              </h2>
              <p className="text-blue-600 font-extrabold text-[10px] uppercase tracking-widest">
                Fleet Vehicles
              </p>
            </div>

            {/* Stat 2 */}
            <div className="text-center">
              <h2 className="text-5xl font-black text-[#001233] mb-1 tracking-tighter">
                25+
              </h2>
              <p className="text-blue-600 font-extrabold text-[10px] uppercase tracking-widest">
                Years Experience
              </p>
            </div>

            {/* Stat 3 */}
            <div className="text-center">
              <h2 className="text-5xl font-black text-[#001233] mb-1 tracking-tighter">
               120+
              </h2>
              <p className="text-blue-600 font-extrabold text-[10px] uppercase tracking-widest">
                Cities Covered
              </p>
            </div>

            {/* Stat 4 */}
            <div className="text-center">
              <h2 className="text-5xl font-black text-[#001233] mb-1 tracking-tighter">
                1000+
              </h2>
              <p className="text-blue-600 font-extrabold text-[10px] uppercase tracking-widest">
                Happy Clients
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* --- WHITE SPACE DIVIDER (Before Story) --- */}
      <div className="h-10 bg-white w-full"></div>
      

    {/* 5. FOOTER CTA - Matched with Mission Section Style */}
      <footer 
        className="relative bg-cover bg-fixed bg-center py-12 px-6 text-white overflow-hidden" 
        style={{ 
          backgroundImage: `url(${bgImage})`,
          // Mission section se match karta hua clean clipPath
          clipPath: 'polygon(0 8%, 10% 0, 90% 0, 100% 8%, 100% 100%, 0 100%)' 
        }}
      >
        {/* Exact same overlay as Mission section (bg-black/85) */}
        <div className="absolute inset-0 bg-black/85 z-0"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          
          <div className="text-center mb-8">
            <h2 className="text-5xl font-extrabold uppercase tracking-tighter text-white">
              Our <span className="text-blue-500">Story</span>
            </h2>
            <h4>From humble beginnings to becoming a trusted name in luxury transportation</h4>
            <div className="w-16 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></div>
          </div>

          {/* 2 Column Grid with Larger Fonts */}
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            
            {/* Column 1 */}
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 text-center">
              <Globe className="mx-auto text-blue-400 mb-4" size={32} />
              <h4 className="text-xl font-bold uppercase tracking-tight text-white mb-3 italic">
                "Our Foundation"
              </h4>
              <p className="text-gray-200 text-base leading-relaxed font-medium">
               With dynamic leadership and hard work, our vision has enabled us to carve a special niche in the travel industry. We operate nearly 1500 fleets ranging from SEDAN to High End Luxury Cars.
              </p>
              <div className="mt-4">
                <p className="text-blue-400 font-black text-sm uppercase tracking-widest">Team Work</p>
                <p className="text-white/60 font-bold text-[10px] uppercase">Our core value</p>
              </div>
            </div>

            {/* Column 2 */}
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 text-center">
              <LayoutGrid className="mx-auto text-blue-400 mb-4" size={32} />
              <h4 className="text-xl font-bold uppercase tracking-tight text-white mb-3 italic">
                "Our Philosophy"
              </h4>
              <p className="text-gray-200 text-base leading-relaxed font-medium">
                Our business philosophy is based on our belief that clients are our prime assets. We nurture a culture founded on TRUST, PRIDE, and TEAM WORK.
              </p>
              <div className="mt-4">
                <p className="text-blue-400 font-black text-sm uppercase tracking-widest">GROWING NETWORK</p>
              </div>
            </div>

          </div>
        </div>
      </footer>

{/* --- INFINITE CAROUSEL SECTION --- */}
<section className="bg-white py-8 overflow-hidden"> {/* Section ki overall height control karne ke liye */}
  <div className="max-w-full relative">
    <p className="text-blue-600 font-bold tracking-[0.3em] uppercase text-[15px] mb-8 italic text-center">
      Memberships & Secure Payments
    </p>
    
    <div className="flex">
      <div className="flex animate-scroll whitespace-nowrap gap-10 py-2">
        {carouselLogos.map((logo, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 bg-white p-1 rounded-none border border-slate-100 flex items-center justify-center h-20 w-40 transition-transform hover:scale-105"
          >
            {/* p-4 ko p-1 kiya taaki logo ko andar jagah mile, h-20 balance height hai */}
            <img 
              src={logo.src} 
              alt={logo.alt} 
              className="max-h-[85%] max-w-[85%] object-contain" 
              /* image size ko 85% tak restrict kiya taaki wo sharp corners se chipke nahi */
            />
          </div>
        ))}
      </div>
    </div>
  </div>


        {/* CSS Animation - Isko aap global CSS mein bhi daal sakte hain ya isi file mein */}
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            display: flex;
            animation: scroll 25s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

    </div>
  );
};

export default About;