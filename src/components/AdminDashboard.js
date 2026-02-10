import React, { useState, useEffect, useCallback } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';
import { 
  Car, Users, MessageSquare, 
  LogOut, PlusCircle, Trash2, ShieldCheck 
} from 'lucide-react';
import logo from '../assets/LOGO.jpg';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('cars');
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const [form, setForm] = useState({
    name: '', category: '', seats: '', rating: 5, description: '', features: '', 
    text: '', initials: '', image: null
  });

  const fetchData = useCallback(async () => {
    const { data, error } = await supabase
      .from(activeTab)
      .select('*')
      .order('created_at', { ascending: false });
    if (!error) setDataList(data);
  }, [activeTab]);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) navigate('/admin/login');
    };
    checkUser();
    fetchData();
  }, [activeTab, navigate, fetchData]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };
  const handleDelete = async (id) => {
  if (!window.confirm("Are you sure you want to remove this item?")) return;

  try {
    const { error } = await supabase
      .from(activeTab)
      .delete()
      .eq('id', id);

    if (error) throw error;

    alert("Item removed successfully!");
    fetchData(); // List ko refresh karne ke liye
  } catch (err) {
    alert("Error deleting: " + err.message);
  }
};

  const handleUpload = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let publicUrl = '';
      if (form.image) {
        const bucketName = activeTab === 'clients' ? 'client' : 'car';
        const fileExt = form.image.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `${fileName}`;

        const { error: sErr } = await supabase.storage
          .from(bucketName)
          .upload(filePath, form.image);
          
        if (sErr) throw new Error(`Storage Error: ${sErr.message}`);

        const { data: urlData } = supabase.storage.from(bucketName).getPublicUrl(filePath);
        publicUrl = urlData.publicUrl;
      }

      let insertData = {};
      if (activeTab === 'cars') {
        insertData = { 
          name: form.name, 
          category: form.category, 
          seats: parseInt(form.seats) || 0, 
          rating: parseFloat(form.rating) || 5, 
          description: form.description, 
          image_url: publicUrl 
        };
      } else if (activeTab === 'clients') {
        insertData = { name: form.name, logo_url: publicUrl };
      } else if (activeTab === 'testimonials') {
        insertData = { name: form.name, initials: form.initials, text: form.text };
      }

      const { error: dbErr } = await supabase.from(activeTab).insert([insertData]);
      if (dbErr) throw dbErr;

      alert("Data successfully deployed to site!");
      setForm({ name: '', category: '', seats: '', rating: 5, description: '', features: '', text: '', initials: '', image: null });
      fetchData();
    } catch (err) {
      alert("System Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 font-sans overflow-hidden">
      
      {/* --- SIDEBAR --- */}
      <aside className="w-64 bg-[#0a1128] text-white flex flex-col h-full shadow-2xl z-30">
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-2">
             <div className="bg-blue-600 p-1.5 rounded-none">
                <ShieldCheck size={20} />
             </div>
             <h1 className="text-xl font-black tracking-tighter uppercase">TravelExpress</h1>
          </div>
          <p className="text-[10px] text-blue-400 font-bold uppercase tracking-[2px] mt-1 ml-9">Authorized Only</p>
        </div>

        <nav className="flex-1 p-4 space-y-2 mt-4">
          <button onClick={() => setActiveTab('cars')} 
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-none transition-all ${activeTab === 'cars' ? 'bg-blue-600 shadow-lg shadow-blue-600/20 text-white' : 'text-gray-400 hover:bg-white/5'}`}>
            <Car size={18} /> <span className="font-bold text-sm">Cars Fleet</span>
          </button>
          
          <button onClick={() => setActiveTab('clients')} 
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-none transition-all ${activeTab === 'clients' ? 'bg-blue-600 shadow-lg shadow-blue-600/20 text-white' : 'text-gray-400 hover:bg-white/5'}`}>
            <Users size={18} /> <span className="font-bold text-sm">Our Clients</span>
          </button>

          <button onClick={() => setActiveTab('testimonials')} 
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-none transition-all ${activeTab === 'testimonials' ? 'bg-blue-600 shadow-lg shadow-blue-600/20 text-white' : 'text-gray-400 hover:bg-white/5'}`}>
            <MessageSquare size={18} /> <span className="font-bold text-sm">Testimonials</span>
          </button>
        </nav>

        <div className="p-4 border-t border-white/10">
          <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-none transition-all group">
            <LogOut size={18} className="group-hover:rotate-12 transition-transform" /> 
            <span className="font-bold text-xs uppercase tracking-widest">Logout System</span>
          </button>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <div className="flex-1 flex flex-col h-full relative">
        
        {/* --- FIXED HEADER --- */}
        <header className="h-20 bg-white border-b border-gray-200 px-8 flex justify-between items-center shadow-sm sticky top-0 z-20 w-full shrink-0">
          <div className="flex items-center gap-4">
            {/* Logo Image Placeholder */}
            <div className="flex items-center justify-center bg-transparent w-13 h-12 overflow-hidden">
               <img 
                 src= { logo }
                 alt="Logo" 
                 className="w-full h-full object-contain"
                 onError={(e) => { e.target.src = "https://via.placeholder.com/50?text=LOGO" }} // Fallback agar image na mile
               />
            </div>
            <div className="h-8 w-[1px] bg-gray-200 mx-1"></div>
            <div>
              <h2 className="text-xl font-black text-gray-800 uppercase tracking-tight flex items-center gap-2">
                Admin <span className="text-blue-600 italic">Dashboard</span>
              </h2>
              <p className="text-[9px] font-bold text-gray-400 uppercase tracking-[3px]">Control Center v2.0</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-none border border-gray-100">
             <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
             </span>
             <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Server Online</p>
          </div>
        </header>

        {/* --- SCROLLABLE CONTENT --- */}
        <main className="flex-1 overflow-y-auto p-8 bg-gray-50">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-[1600px] mx-auto">
            
           {/* Form Section */}
<div className="lg:col-span-1">
  {/* p-3 ko p-2 kiya aur gap kam kiya */}
  <div className="bg-white p-2 rounded-none shadow-sm border border-gray-200 sticky top-2">
    <div className="flex items-center gap-1 mb-1 text-blue-600">
      <PlusCircle size={16} /> {/* Icon thoda chota kiya */}
      <h3 className="font-black uppercase text-[10px] tracking-widest">Add New {activeTab.slice(0, -1)}</h3>
    </div>
    
    {/* space-y-4 ko space-y-2 kiya taaki elements chipak jayein */}
    <form onSubmit={handleUpload} className="space-y-2">
      <div className="space-y-0.5">
        <label className="text-[9px] font-bold uppercase text-gray-400 ml-1">Title / Name</label>
        {/* p-3 ko p-2 kiya */}
        <input type="text" className="w-full bg-gray-50 border-gray-200 border p-2 rounded-none text-xs focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="Enter name..." required
          value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
      </div>

      {activeTab === 'cars' && (
        <>
          <input type="text" placeholder="Category" className="w-full bg-gray-50 border-gray-200 border p-2 rounded-none text-xs"
            value={form.category} onChange={e => setForm({...form, category: e.target.value})} />
          <input type="number" placeholder="Seats" className="w-full bg-gray-50 border-gray-200 border p-2 rounded-none text-xs"
            value={form.seats} onChange={e => setForm({...form, seats: e.target.value})} />
          {/* h-24 ko h-16 kiya */}
          <textarea placeholder="Description..." className="w-full bg-gray-50 border-gray-200 border p-2 rounded-none text-xs h-16 resize-none"
            value={form.description} onChange={e => setForm({...form, description: e.target.value})} />
        </>
      )}

      {activeTab === 'testimonials' && (
        <>
          <input type="text" placeholder="User Initials" className="w-full bg-gray-50 border-gray-200 border p-2 rounded-none text-xs"
            value={form.initials} onChange={e => setForm({...form, initials: e.target.value})} />
          <textarea placeholder="Feedback..." className="w-full bg-gray-50 border-gray-200 border p-2 rounded-none text-xs h-16 resize-none"
            value={form.text} onChange={e => setForm({...form, text: e.target.value})} />
        </>
      )}

      {activeTab !== 'testimonials' && (
        /* padding p-4 ko p-2 kiya */
        <div className="p-2 border-2 border-dashed border-gray-200 rounded-none bg-gray-50 group hover:border-blue-400 transition-colors">
          <label className="block text-[9px] font-bold uppercase text-gray-500 mb-1">Media</label>
          <input type="file" className="text-[10px] w-full file:mr-2 file:py-1 file:px-3 file:rounded-none file:border-0 file:text-[10px] file:font-bold file:bg-blue-600 file:text-white" 
            onChange={e => setForm({...form, image: e.target.files[0]})} />
        </div>
      )}

      {/* py-4 ko py-2.5 kiya aur margin top kam kiya */}
      <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white font-black py-2.5 rounded-none hover:bg-blue-700 transition-all shadow-md shadow-blue-100 uppercase text-[10px] tracking-[1px] mt-1">
        {loading ? "Uploading..." : "Deploy"}
      </button>
    </form>
  </div>
</div>

            {/* Table Section */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
                <table className="w-full text-left">
                  <thead className="bg-gray-50/50 border-b border-gray-100">
                    <tr>
                      <th className="p-5 text-[10px] font-black uppercase text-gray-400 tracking-widest">Active {activeTab}</th>
                      <th className="p-5 text-[10px] font-black uppercase text-gray-400 text-right tracking-widest">Manage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {dataList.map(item => (
                      <tr key={item.id} className="hover:bg-blue-50/30 transition-colors group">
                        <td className="p-5">
                          <div className="flex items-center gap-4">
                            {(item.image_url || item.logo_url) ? (
                              <img src={item.image_url || item.logo_url} className="h-14 w-14 rounded-xl object-cover border border-gray-100 shadow-sm group-hover:scale-105 transition-transform" alt="" />
                            ) : (
                              <div className="h-14 w-14 rounded-none bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">
                                 {item.initials || item.name[0]}
                              </div>
                            )}
                            <div>
                              <p className="font-black text-gray-800 uppercase text-sm tracking-tight">{item.name}</p>
                              <p className="text-[10px] text-blue-500 font-bold uppercase tracking-tighter mt-0.5">{item.category || 'Verified Entry'}</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-5 text-right">
  <button 
    onClick={() => handleDelete(item.id)} // Yahan change kiya
    className="p-2.5 text-red-400 hover:bg-red-50 hover:text-red-600 rounded-none transition-all inline-flex items-center gap-2"
  >
    <Trash2 size={16} /> 
    <span className="text-[10px] font-black uppercase">Remove</span>
  </button>
</td>
                      </tr>
                    ))}
                    {dataList.length === 0 && (
                      <tr>
                         <td colSpan="2" className="p-20 text-center text-gray-300 font-bold uppercase tracking-widest text-xs">No data found in {activeTab}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;











