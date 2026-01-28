import React from 'react';
import { Quote } from 'lucide-react';
import mohanImg from '../assets/mohan.jpg';
import alagarImg from '../assets/alagarswamy.jpg';

const Team = () => {
  const teamMembers = [
    {
      name: "Mohan Ramadass",
      role: "Founder & Managing Director",
      image: mohanImg, 
      bio: "He stands as a beacon of entrepreneurial spirit and resilience, having elevated ETC from humble beginnings over the past 25 years. Through visionary leadership and steadfast determination, he has not only navigated challenges but also defined industry standards.",
      vision: "With a deep passion for travel, looking in the future, He is focused on driving further innovation and expanding the company's services to enhance the car travel experience.",
      experience: "25+ Years"
    },
    {
      name: "Alagarsamy",
      role: "Chief Operating Officer",
      image: alagarImg,
      bio: "Alagarswamy with 23-year journey in the car rental industry, starting from the ground up, worked across car rental industry like AVIS, Car Club & Carzonrent.",
      vision: "Responsible for leading the ETC business in all verticals, operations, driving profitability, deliver exceptional results, strategic planning, and team development.",
      experience: "23+ Years"
    }
  ];

  return (
    <section id="team" className="py-24 bg-[#fafafa]">
      <div className="container mx-auto px-4 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h4 className="text-blue-600 font-bold uppercase tracking-[0.3em] text-sm mb-4">Leadership</h4>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Our <span className="text-blue-600">Experts</span>
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Side-by-Side Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-[2rem] p-8 shadow-lg border border-gray-100 flex flex-col h-full hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start mb-6">
                {/* Image Container */}
                <div className="w-full md:w-2/5 shrink-0">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-600 rounded-2xl rotate-2"></div>
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="relative z-10 w-full h-64 object-cover rounded-2xl shadow-md grayscale hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute -bottom-3 -right-3 z-20 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg">
                      <p className="text-xs font-bold uppercase tracking-tighter">Exp: {member.experience}</p>
                    </div>
                  </div>
                </div>

                {/* Name and Role */}
                <div className="w-full md:w-3/5">
                  <h3 className="text-2xl font-black text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-bold uppercase text-xs tracking-wider mb-4">{member.role}</p>
                  
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-4 w-6 h-6 text-blue-100 -z-0" />
                    <p className="text-gray-600 text-sm leading-relaxed italic relative z-10">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>

              {/* Vision Box - Pushed to bottom */}
              <div className="mt-auto bg-slate-50 p-5 rounded-xl border-l-4 border-blue-600">
                <p className="text-slate-700 text-sm font-medium leading-relaxed">
                  {member.vision}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;