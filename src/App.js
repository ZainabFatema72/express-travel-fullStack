import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Clients from "./components/Clients";
import Team from "./components/Team";
import LuxuryCar from "./components/LuxuryCar";
import Branches from "./components/Branches";
import ContactUs from "./components/ContactUs";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      {/* spacing for fixed header */}
      <main className="pt-20 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/team" element={<Team />} />
          <Route path="/luxury-car" element={<LuxuryCar />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
