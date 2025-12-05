import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatusDashboard } from './components/StatusDashboard';
import { NewsFeed } from './components/NewsFeed';
import { TikTokCarousel } from './components/TikTokCarousel';
import { AIAssistant } from './components/AIAssistant';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-sand-50 font-rounded text-slate-900 selection:bg-ceylon-gold selection:text-ceylon-green">
      <Navbar />
      <Hero />
      <main>
        <StatusDashboard />
        <TikTokCarousel />
        <NewsFeed />
        
        {/* Additional promotional section to break up text */}
        <section className="py-24 relative overflow-hidden group">
           <div className="absolute inset-0 bg-slate-900">
             <img 
               src="https://images.unsplash.com/photo-1540206276207-3fb25c0a471e?q=80&w=2070&auto=format&fit=crop" 
               className="w-full h-full object-cover opacity-50 mix-blend-overlay group-hover:scale-105 transition-transform duration-[2000ms]"
               alt="Misty Mountains of Sri Lanka"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-ceylon-green/80 to-transparent mix-blend-multiply"></div>
           </div>
           
           <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-10">
             <div className="text-left md:w-2/3">
               <span className="text-ceylon-gold font-bold tracking-widest uppercase text-sm mb-2 block">Discover the Untold</span>
               <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                 "So Sri Lanka"
               </h2>
               <p className="text-emerald-50 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl font-light">
                 Beyond the advisories lies an island of endless summer, ancient cities, and warm smiles. 
                 The waves are calling, and the tea is brewing. We are ready to welcome you back home.
               </p>
             </div>
             
             <div className="md:w-1/3 flex justify-center md:justify-end">
               <button className="px-10 py-4 bg-transparent border-2 border-ceylon-gold text-ceylon-gold font-bold text-lg rounded-full hover:bg-ceylon-gold hover:text-ceylon-green transition-all duration-300 shadow-[0_0_15px_rgba(241,196,15,0.3)] hover:shadow-[0_0_25px_rgba(241,196,15,0.6)]">
                 Explore Destinations
               </button>
             </div>
           </div>
        </section>
      </main>
      <Footer />
      <AIAssistant />
    </div>
  );
}

export default App;