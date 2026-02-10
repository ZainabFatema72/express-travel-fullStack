import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Zap } from 'lucide-react'; // Icons ke liye

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      alert("Login Failed: " + error.message);
    } else {
      navigate('/admin/dashboard');
    }
    setLoading(false);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden font-sans">
      
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 scale-105"
        style={{ 
          backgroundImage: `url('https://wallpaperaccess.com/full/3580763.jpg')`, 
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-md px-6 text-center">
        
        {/* Welcome Text Section */}
        <div className="mb-10 animate-fade-in-down">
          <p className="text-white text-lg font-medium tracking-wide">Hi, Welcome to</p>
          <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-200 mt-2">
            Admin Access
          </h1>
        </div>

        {/* Glassmorphic Login Card */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-none p-8 shadow-2xl relative">
          <form onSubmit={handleLogin} className="mt-12 space-y-5">
            
            {/* Email Field */}
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50">
                <Mail size={20} />
              </span>
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-white/10 border border-white/10 p-4 pl-12 rounded-none text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-red-500/50 transition-all"
                 onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50">
                <Lock size={20} />
              </span>
              <input 
                type="password" 
                placeholder="Password" 
                className="w-full bg-white/10 border border-white/10 p-4 pl-12 rounded-none text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-red-500/50 transition-all"
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </div>

            {/* Buttons Row */}
            <div className="flex gap-3 pt-2"> 
              <button 
                type="submit" 
                disabled={loading}
                className="flex-1 bg-white/10 text-black py-3 rounded-none font-bold hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
              >
                {loading ? "Checking..." : (
                  <>
                    Login <Zap size={16} fill="currentColor" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;