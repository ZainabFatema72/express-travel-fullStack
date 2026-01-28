import React from 'react';

// Purane Imports
import thryveLogo from '../assets/clients/image1.png';
import iitLogo from '../assets/clients/image2.png';
import eqLogo from '../assets/clients/image3.png';
import grtLogo from '../assets/clients/image4.png';
import parryLogo from '../assets/clients/image5.png';
import ralliLogo from '../assets/clients/image6.png';
import simpsonLogo from '../assets/clients/image7.png';
import siscolLogo from '../assets/clients/image8.png';
import tvsLogo from '../assets/clients/image9.png';
import wexLogo from '../assets/clients/image10.png';
import img3 from '../assets/clients/3.jpg';
import img5 from '../assets/clients/5.jpg';
import img9 from '../assets/clients/9.jpg';
import img10 from '../assets/clients/10.jpg';
import img11 from '../assets/clients/11.jpg';
import img12 from '../assets/clients/12.jpg';
import img17 from '../assets/clients/17.jpg';
import img18 from '../assets/clients/18.jpeg';
import img19 from '../assets/clients/19.jpeg';
import img20 from '../assets/clients/20.png';
import img21 from '../assets/clients/21.webp';
import img22 from '../assets/clients/22.jpg';
import img23 from '../assets/clients/23.png';
import img24 from '../assets/clients/24.jpg';
import img25 from '../assets/clients/25.png';
import img26 from '../assets/clients/26.jpeg';
import img27 from '../assets/clients/27.png';
import img28 from '../assets/clients/28.webp';
import img29 from '../assets/clients/29.png';
import img30 from '../assets/clients/30.png';
import img31 from '../assets/clients/31.jpeg';
import img32 from '../assets/clients/32.png';
import img33 from '../assets/clients/33.jpg';
import img34 from '../assets/clients/34.png';
import img35 from '../assets/clients/35.png';
import img36 from '../assets/clients/36.png';
import img37 from '../assets/clients/37.jpeg';
import img39 from '../assets/clients/39.png';
import img40 from '../assets/clients/40.png';
import img41 from '../assets/clients/41.png';
import img42 from '../assets/clients/42.png';
import img43 from '../assets/clients/43.jpg';
import img44 from '../assets/clients/44.jpeg';
import img45 from '../assets/clients/45.png';
import img46 from '../assets/clients/46.jpeg';
import img47 from '../assets/clients/47.png';
import img48 from '../assets/clients/48.jpg';
import img49 from '../assets/clients/49.png';
import img50 from '../assets/clients/50.jpg';
import img51 from '../assets/clients/51.png';

// New Logos Imports
import agsLogo from '../assets/clients/New/AGS.jpeg';
import ajubaLogo from '../assets/clients/New/ajuba_solutions_india_pvt_ltd_logo.jpeg';
import axlesLogo from '../assets/clients/New/Axles-India-logo.webp';
import icuLogo from '../assets/clients/New/ICU.png';
import infinityLogo from '../assets/clients/New/INFINITY.jpeg';
import isuzuLogo from '../assets/clients/New/Isuzu.svg.png';
import itcLogo from '../assets/clients/New/ITC.jpg';
import omegaLogo from '../assets/clients/New/Omega.png';
import birlaSoftLogo from '../assets/clients/New/BIRLASOFT.jpg';
import cholaMsLogo from '../assets/clients/New/Chola-MS-Insura11876.jpg';
import itpcLogo from '../assets/clients/New/ITPC.png';
import starHealthLogo from '../assets/clients/New/STAR.jpeg';
import recodeLogo from '../assets/clients/New/recode_solutions_logo.jpeg';
import tmtlLogo from '../assets/clients/New/TMTL LOGO.jpg';
import transunionLogo from '../assets/clients/New/Transunion.png';
import dinexLogo from '../assets/clients/New/DINEX.jpeg';
import gigamonLogo from '../assets/clients/New/Gigamon.png';
import kennametalLogo from '../assets/clients/New/Kennametal.png';
import kumaranLogo from '../assets/clients/New/KUMARAN.jpeg';
import agpLogo from '../assets/clients/New/logo_1.png';
import usConsulateLogo from '../assets/clients/New/US CONSULATE.jpg';

// Background Image Import
import CLIENT_BG from '../assets/clients/hero_bg.jpeg'; // Use the uploaded background image

const Clients = () => {
  const clientLogos = [
    { src: thryveLogo }, { src: iitLogo }, { src: eqLogo }, { src: grtLogo }, { src: parryLogo }, 
    { src: ralliLogo }, { src: simpsonLogo }, { src: siscolLogo }, { src: tvsLogo }, { src: wexLogo },
    { src: img3 }, { src: img5 }, { src: img9 }, { src: img10 }, { src: img11 }, { src: img12 }, 
    { src: img17 }, { src: img18 }, { src: img19 }, { src: img20 }, { src: img21 }, { src: img22 }, 
    { src: img23 }, { src: img24 }, { src: img25 }, { src: img26 }, { src: img27 }, { src: img28 }, 
    { src: img29 }, { src: img30 }, { src: img31 }, { src: img32 }, { src: img33 }, { src: img34 }, 
    { src: img35 }, { src: img36 }, { src: img37 }, { src: img39 }, { src: img40 }, { src: img41 }, 
    { src: img42 }, { src: img43 }, { src: img44 }, { src: img45 }, { src: img46 }, { src: img47 }, 
    { src: img48 }, { src: img49 }, { src: img50 }, { src: img51 },
    { src: agsLogo }, { src: ajubaLogo }, { src: axlesLogo }, { src: icuLogo }, { src: infinityLogo }, 
    { src: isuzuLogo }, { src: itcLogo }, { src: omegaLogo }, { src: birlaSoftLogo }, { src: cholaMsLogo }, 
    { src: itpcLogo }, { src: starHealthLogo }, { src: recodeLogo }, { src: tmtlLogo }, { src: transunionLogo }, 
    { src: dinexLogo }, { src: gigamonLogo }, { src: kennametalLogo }, { src: kumaranLogo }, { src: agpLogo }, 
    { src: usConsulateLogo }
  ];

  return (
    <section id="clients" className="bg-white pt-0 overflow-hidden">
      {/* Background image section with overlay */}
      <div 
        className="relative pt-32 pb-20 bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${CLIENT_BG})` }}
      >
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter text-white drop-shadow-xl">
            Our <span className="text-blue-400">Trusted Clients</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-200 text-sm md:text-base leading-relaxed font-medium italic drop-shadow-md">
            A Quarter Century of Reliable Partnerships and Premium Service.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-12 py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {clientLogos.map((client, index) => (
            <div 
              key={`logo-${index}`} 
              className="bg-white p-6 rounded-none border border-slate-100 shadow-sm flex items-center justify-center h-40 transition-transform hover:scale-105"
            >
              <img 
                src={client.src} 
                alt={`Client Logo ${index + 1}`} 
                className="max-h-full max-w-full object-contain" 
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;