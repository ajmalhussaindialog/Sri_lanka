import React from 'react';
import { ChevronDown, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToContent = () => {
    const element = document.getElementById('status-dashboard');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-slate-900 font-sans">
      {/* Static Background Image */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: `url("https://images.unsplash.com/photo-1667890159613-b0780fbe5ec5?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")` }}
        >
           {/* Gradient Overlay */}
           <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-ceylon-green/90"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-5xl mx-auto mt-10">
        <div className="mb-8 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/30 backdrop-blur-md border border-emerald-400/30 text-emerald-50 animate-fade-in-down shadow-lg">
          <ShieldCheck className="w-5 h-5 text-ceylon-gold" />
          <span className="text-sm font-bold tracking-wide uppercase font-sans">Country Status: Open & Safe</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif font-bold text-white mb-6 drop-shadow-2xl tracking-tight leading-none">
          Sri Lanka <br/> Awaits You
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-100 max-w-2xl mb-10 font-light leading-relaxed drop-shadow-lg font-sans">
          Explore the pearl of the Indian Ocean. From misty tea gardens to wild safaris, your journey begins here.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 font-sans">
          <button 
            onClick={scrollToContent}
            className="px-8 py-4 bg-ceylon-gold hover:bg-yellow-400 text-ceylon-green font-bold text-lg rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Check Situation Update
          </button>
          <a 
            href="#emergency"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-medium text-lg rounded-full border border-white/30 transition-all duration-300 hover:-translate-y-1"
          >
            Emergency Contacts
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-20" onClick={scrollToContent}>
        <ChevronDown className="w-10 h-10 text-white/80" />
      </div>
    </div>
  );
};