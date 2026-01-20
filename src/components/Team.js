import React, { useState } from 'react';
import { ChevronRight, Quote, Linkedin, ExternalLink } from 'lucide-react';

const Team = () => {
  const [activeTab, setActiveTab] = useState(0);

  const teamMembers = [
    {
      name: "Mohan Ramadass",
      role: "Founder & Managing Director",
      image: "https://www.etconline.in/images/mohan.jpg", 
      bio: "He stands as a beacon of entrepreneurial spirit and resilience, having elevated ETC from humble beginnings over the past 25 years. Through visionary leadership and steadfast determination, he has not only navigated challenges but also defined industry standards.",
      vision: "With a deep passion for travel, looking in the future, He is focused on driving further innovation and expanding the company's services to enhance the car travel experience.",
      experience: "25+ Years"
    },
    {
      name: "Alagarsamy",
      role: "Chief Operating Officer",
      image: "https://www.etconline.in/images/alagarswamy.jpg",
      bio: "Alagarswamy with 23-year journey in the car rental industry, starting from the ground up, worked across car rental industry like AVIS, Car Club & Carzonrent.",
      vision: "Responsible for leading the ETC business in all verticals, operations, driving profitability, deliver exceptional results, strategic planning, and team development.",
      experience: "23+ Years"
    }
  ];

  return (
    <section id="team" className="py-24 bg-[#fafafa] overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h4 className="text-blue-600 font-bold uppercase tracking-[0.3em] text-sm mb-4">Leadership</h4>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Our <span className="text-blue-600">Experts</span>
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* LEFT SIDE: Interactive Navigation */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            {teamMembers.map((member, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`group relative flex items-center justify-between p-6 rounded-2xl transition-all duration-500 ${
                  activeTab === index 
                  ? 'bg-white shadow-[0_20px_50px_rgba(37,99,235,0.1)] scale-[1.02] border-l-8 border-blue-600' 
                  : 'bg-transparent border border-gray-200 hover:border-blue-300'
                }`}
              >
                <div className="flex flex-col items-start text-left">
                  <span className={`text-xs uppercase tracking-widest font-bold mb-1 ${activeTab === index ? 'text-blue-600' : 'text-gray-400'}`}>
                    {member.role}
                  </span>
                  <span className={`text-xl font-black ${activeTab === index ? 'text-slate-900' : 'text-gray-500'}`}>
                    {member.name}
                  </span>
                </div>
                <div className={`p-2 rounded-full transition-all ${activeTab === index ? 'bg-blue-600 text-white rotate-90' : 'bg-gray-100 text-gray-400'}`}>
                  <ChevronRight className="w-5 h-5" />
                </div>
              </button>
            ))}
          </div>

          {/* RIGHT SIDE: Profile Showcase */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-[0_40px_100px_rgba(0,0,0,0.05)] border border-gray-50 relative overflow-hidden">
              
              <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
                <Quote className="w-64 h-64 text-slate-900" />
              </div>

              <div className="flex flex-col xl:flex-row gap-12 relative z-10">
                
                {/* Image Section */}
                <div className="w-full xl:w-2/5">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-blue-600 rounded-3xl rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
                    <img 
                      src={teamMembers[activeTab].image} 
                      alt={teamMembers[activeTab].name} /* Pehle yahan 'member.name' tha jo galat tha */
                      className="relative z-10 w-full h-[450px] object-cover rounded-3xl shadow-2xl transition-all duration-700 grayscale hover:grayscale-0"
                    />
                    <div className="absolute -bottom-6 -right-6 z-20 bg-white p-6 rounded-2xl shadow-xl hidden md:block border border-gray-100">
                      <p className="text-blue-600 font-black text-3xl">{teamMembers[activeTab].experience}</p>
                      <p className="text-gray-500 text-xs uppercase font-bold tracking-tighter">Experience</p>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full xl:w-3/5 flex flex-col justify-center">
                  <div className="mb-8">
                    <h3 className="text-4xl font-black text-slate-900 mb-2">{teamMembers[activeTab].name}</h3>
                    <p className="text-blue-600 font-bold tracking-[0.2em] uppercase text-sm">{teamMembers[activeTab].role}</p>
                  </div>

                  <div className="relative mb-8">
                    <Quote className="absolute -top-4 -left-6 w-10 h-10 text-blue-100 -z-10" />
                    <p className="text-gray-600 text-lg leading-relaxed italic">
                      {teamMembers[activeTab].bio}
                    </p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-blue-600 mb-8">
                    <p className="text-slate-800 font-medium text-md leading-relaxed">
                      {teamMembers[activeTab].vision}
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <button className="bg-slate-900 text-white p-4 rounded-xl hover:bg-blue-600 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </button>
                    <button className="flex items-center gap-2 border-2 border-slate-900 text-slate-900 px-6 py-4 rounded-xl font-bold hover:bg-slate-900 hover:text-white transition-all shadow-lg shadow-gray-200">
                      View Profile <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Team;