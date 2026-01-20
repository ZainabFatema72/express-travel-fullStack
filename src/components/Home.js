import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  MapPin,
  Car,
  Users,
  Award,
  Star,
} from "lucide-react";

const Home = () => {
  const [feedbacks, setFeedbacks] = useState([
    {
      name: "Jestin Mathew",
      text:
        "The overall experience was awesome, well coordinated and the hotel stay was fabulous.",
      rating: 5,
    },
    {
      name: "Santosh Krinsky",
      text:
        "We were very pleased with your service, the vehicle and the driver exceeded expectations.",
      rating: 5,
    },
    {
      name: "Mori Yoshiro",
      text: "Professional handling, punctual service and premium vehicles.",
      rating: 4,
    },
  ]);

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !message || rating === 0) return;

    setFeedbacks([
      ...feedbacks,
      { name: name.trim(), text: message.trim(), rating },
    ]);

    setName("");
    setMessage("");
    setRating(0);
  };

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
            alt="Luxury Car"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6 pt-28 pb-20 max-w-6xl">
          <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 text-blue-400 px-4 py-2 rounded-full mb-8">
            <ShieldCheck size={18} />
            <span className="text-xs font-bold uppercase tracking-widest">
              India’s Trusted Corporate Travel Partner
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white mb-8">
            Premium Mobility <br />
            <span className="text-blue-600">For Modern Business</span>
          </h1>

          <p className="text-xl text-slate-300 mb-12 max-w-2xl">
            Seamless corporate ground transportation solutions across India.
          </p>

          <div className="flex gap-6 flex-wrap mb-20">
            <Link
              to="/contact"
              className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black hover:bg-white hover:text-blue-600 transition flex items-center gap-3"
            >
              Book Your Ride <ArrowRight />
            </Link>

            <Link
              to="/services"
              className="px-10 py-5 border-2 border-white/20 text-white rounded-2xl font-black hover:bg-white/10 transition"
            >
              View Our Services
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-10 border-t border-white/10 pt-14">
            <Feature icon={<Clock />} title="24/7 Operations" text="Always available" />
            <Feature icon={<MapPin />} title="PAN India" text="15+ cities covered" />
            <Feature icon={<ShieldCheck />} title="Verified Chauffeurs" text="Safety first" />
          </div>

          <div className="grid sm:grid-cols-3 gap-8 mt-20">
            <Stat icon={<Car />} value="50+" label="Premium Fleet" />
            <Stat icon={<Users />} value="100+" label="Corporate Clients" />
            <Stat icon={<Award />} value="25+ Years" label="Experience" />
          </div>
        </div>
      </section>

      {/* ================= FEEDBACK (HOME STYLE) ================= */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        {/* glow */}
        <div className="absolute right-[-15%] bottom-[-20%] w-[450px] h-[450px] bg-blue-600/20 rounded-full blur-[140px]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-black text-white text-center mb-16">
            Client Experiences
          </h2>

          {/* feedback cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {feedbacks.slice(0, 3).map((fb, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6"
              >
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  “{fb.text}”
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-white font-semibold text-sm">
                    {fb.name}
                  </span>
                  <div className="flex text-yellow-400">
                    {[...Array(fb.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* add feedback */}
          <div className="max-w-md mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-black text-white text-center mb-6">
              Share Your Experience
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg bg-slate-900 border border-white/10 text-white text-sm outline-none focus:border-blue-500"
              />

              <textarea
                rows="3"
                placeholder="Your Feedback"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg bg-slate-900 border border-white/10 text-white text-sm outline-none focus:border-blue-500"
              />

              <div className="flex justify-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    size={22}
                    onClick={() => setRating(s)}
                    className={`cursor-pointer ${
                      s <= rating ? "text-yellow-400" : "text-gray-500"
                    }`}
                    fill={s <= rating ? "currentColor" : "none"}
                  />
                ))}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-bold hover:bg-blue-700 transition text-sm"
              >
                Submit Feedback
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

/* ================= COMPONENTS ================= */

const Feature = ({ icon, title, text }) => (
  <div className="flex items-center gap-4">
    <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center text-blue-500">
      {icon}
    </div>
    <div>
      <p className="text-white font-bold">{title}</p>
      <p className="text-slate-400 text-sm">{text}</p>
    </div>
  </div>
);

const Stat = ({ icon, value, label }) => (
  <div className="bg-white/5 rounded-2xl p-6 text-center">
    <div className="text-blue-500 mb-4 flex justify-center">{icon}</div>
    <h3 className="text-3xl font-black text-white">{value}</h3>
    <p className="text-slate-400 mt-2">{label}</p>
  </div>
);

export default Home;
