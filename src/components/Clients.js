import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient'; // Ensure this path is correct
import CLIENT_BG from '../assets/clients/hero_bg.jpeg';

const Clients = () => {
  const [clientLogos, setClientLogos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Database se data lane ka function
  const fetchClients = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('clients') // Table ka naam check karein
        .select('*')
        .order('order_index', { ascending: true });

      if (error) {
        console.error('Supabase Error:', error.message);
      } else {
        setClientLogos(data || []);
      }
    } catch (err) {
      console.error('Fetch Error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <section id="clients" className="bg-white pt-0 overflow-hidden">
      {/* Hero Section with Background */}
      <div 
        className="relative pt-32 pb-20 bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${CLIENT_BG})` }}
      >
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

      {/* Logos Grid Section */}
      <div className="container mx-auto px-4 md:px-12 py-20">
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <span className="ml-3 text-slate-600 font-medium">Loading amazing clients...</span>
          </div>
        ) : clientLogos.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {clientLogos.map((client, index) => (
              <div 
                key={client.id || index} 
                className="bg-white p-6 rounded-none border border-slate-100 shadow-sm flex items-center justify-center h-40 transition-transform hover:scale-105 hover:shadow-md"
              >
                <img 
                  src={client.logo_url} 
                  alt={client.name || 'Client Logo'} 
                  className="max-h-full max-w-full object-contain" 
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/150?text=Logo+Missing'; // Fallback image
                  }}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-slate-500 py-10">
            No clients found in the database.
          </div>
        )}
      </div>
    </section>
  );
};

export default Clients;