import React, { useState, useEffect } from 'react';
import { ChevronDown, ShieldCheck } from 'lucide-react';

const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1586618175024-3450c2688048?q=80&w=2070&auto=format&fit=crop",
    alt: "Golden Beaches of Southern Sri Lanka"
  },
  {
    url: "https://images.unsplash.com/photo-1546522512-c24c2543c72b?q=80&w=2070&auto=format&fit=crop",
    alt: "Lush Tea Plantations in Nuwara Eliya"
  },
  {
    url: "https://images.unsplash.com/photo-1585217830217-1f9e200c8b6b?q=80&w=2070&auto=format&fit=crop",
    alt: "Wild Elephants at Minneriya National Park"
  },
  {
    url: "https://images.unsplash.com/photo-1622303037920-5c66cb17e69f?q=80&w=2070&auto=format&fit=crop",
    alt: "Majestic Waterfalls of the Hill Country"
  },
  {
    url: "https://images.unsplash.com/photo-1620619767323-b95a89183081?q=80&w=2070&auto=format&fit=crop",
    alt: "Ancient Fortress of Sigiriya"
  },
   {
    url: "https://images.unsplash.com/photo-1579489225078-27977a775272?q=80&w=2070&auto=format&fit=crop",
    alt: "Leopards in Yala National Park"
  }
];

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(timer);
  }, []);

  const scrollToContent = () => {
    const element = document.getElementById('status-dashboard');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-slate-900 font-sans">
      {/* Background Slideshow */}
      {heroImages.map((img, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transform transition-transform duration-[10000ms] ease-linear ${index === currentSlide ? 'scale-110' : 'scale-100'}`}
            style={{ backgroundImage: `url("${img.url}")` }}
          >
             {/* Gradient updated to new color via ceylon-green class mapping */}
             <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-ceylon-green/90"></div>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 shadow-sm ${
              index === currentSlide 
                ? 'bg-ceylon-gold w-8' 
                : 'bg-white/50 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
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