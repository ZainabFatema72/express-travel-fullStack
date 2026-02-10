import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import LuxuryCar from './components/LuxuryCar';
import Team from './components/Team';
import Clients from './components/Clients';
import Branches from './components/Branches';
import ContactUs from './components/ContactUs';
import InquiryForm from './components/InquiryForm';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import FloatingControls from './components/home/FloatingControls';

// 1. Scroll to top on page change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// 2. Layout Wrapper: Jo Header/Footer ko Admin pages par hide karega
const LayoutWrapper = ({ children }) => {
  const location = useLocation();
  
  // Agar path '/admin' se start hota hai toh true hoga
  const isAdminPage = location.pathname.startsWith('/admin');

  const contactInfo = {
    phoneNumber: "9791111275",
    whatsappNumber: "9791111275"
  };

  return (
    <>
      {/* Agar Admin page NAHI hai, tabhi Header dikhao */}
      {!isAdminPage && <Header />}
      
      <div className={isAdminPage ? "min-h-screen" : "min-h-screen pt-0"}>
        {children}
      </div>

      {/* Agar Admin page NAHI hai, tabhi Floating Controls aur Footer dikhao */}
      {!isAdminPage && (
        <>
          <FloatingControls 
            phoneNumber={contactInfo.phoneNumber} 
            whatsappNumber={contactInfo.whatsappNumber} 
          />
          <Footer />
        </>
      )}
    </>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <LayoutWrapper>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/luxury-car" element={<LuxuryCar />} />
          <Route path="/team" element={<Team />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/inquiry" element={<InquiryForm />} /> 

          {/* Admin Routes (No Header/Footer here) */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />

          {/* 404 Redirect */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </LayoutWrapper>
    </Router>
  );
}

export default App;