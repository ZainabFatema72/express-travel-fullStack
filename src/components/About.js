import React from "react";
import { Check, Car, Shield, Award, Globe } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">

        <h1 className="text-5xl font-bold text-center mb-12">
          About Us
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          <strong>EXPRESS TRAVEL CORPORATE SERVICES LLP</strong> has been delivering
          premium corporate car rental services since 1999, trusted by top
          organizations across India.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="flex gap-4">
            <Car className="text-blue-600" />
            <p>Fleet ranging from Tata Indica to Mercedes Benz E-Class</p>
          </div>
          <div className="flex gap-4">
            <Shield className="text-blue-600" />
            <p>Trusted by government & multinational corporates</p>
          </div>
          <div className="flex gap-4">
            <Award className="text-blue-600" />
            <p>25+ years of industry experience</p>
          </div>
          <div className="flex gap-4">
            <Globe className="text-blue-600" />
            <p>PAN India presence</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
