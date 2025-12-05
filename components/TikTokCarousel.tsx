import React, { useRef } from 'react';
import { Play, Heart, MessageCircle, Share2, ChevronRight, ChevronLeft, ExternalLink } from 'lucide-react';

const tikTokData = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?q=80&w=600&auto=format&fit=crop", 
    user: "@visit_srilanka",
    desc: "Experience the most scenic train ride in the world! 🚂⛰️ #Ella #SriLanka #Travel",
    likes: "45.2K",
    comments: "1.2K"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1588258219511-64eb629cb833?q=80&w=600&auto=format&fit=crop",
    user: "@ceylon_explorer",
    desc: "Waiting for the train at Nine Arches Bridge. Magical vibes ✨ #Demodara #Architecture",
    likes: "32.8K",
    comments: "856"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=600&auto=format&fit=crop",
    user: "@island_life",
    desc: "Sunset swings at Unawatuna. Paradise found 🌅🌴 #BeachLife #Galle",
    likes: "28.5K",
    comments: "643"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1620619767323-b95a89183081?q=80&w=600&auto=format&fit=crop",
    user: "@history_buff",
    desc: "Climbing the 8th wonder of the world. Worth every step! 🦁 #Sigiriya #History",
    likes: "51.2K",
    comments: "2.1K"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=600&auto=format&fit=crop",
    user: "@wanderlust_sl",
    desc: "Palms on palms on palms. The famous Coconut Tree Hill 🥥 #Mirissa #InstaSpot",
    likes: "19.4K",
    comments: "420"
  }
];

export const TikTokCarousel: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="p-1.5 bg-black text-white rounded-md text-xs font-bold">TikTok</span>
            <span className="text-slate-500 font-bold uppercase text-xs tracking-wider">Trending Now</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800">Traveler Moments</h2>
        </div>
        <div className="flex gap-2">
          <button onClick={() => scroll('left')} className="p-3 rounded-full border border-slate-200 hover:bg-slate-100 transition-colors">
            <ChevronLeft className="w-5 h-5 text-slate-600" />
          </button>
          <button onClick={() => scroll('right')} className="p-3 rounded-full border border-slate-200 hover:bg-slate-100 transition-colors">
            <ChevronRight className="w-5 h-5 text-slate-600" />
          </button>
        </div>
      </div>

      <div 
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {tikTokData.map((item) => (
          <div 
            key={item.id} 
            className="flex-shrink-0 w-72 h-[480px] relative rounded-3xl overflow-hidden snap-center group shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <img 
              src={item.url} 
              alt="Sri Lanka Travel Moment" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/80"></div>
            
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
               <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                 <Play className="w-6 h-6 text-white fill-white ml-1" />
               </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
              <div className="flex items-center gap-2 mb-3">
                 <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-red-500 p-[1px]">
                   <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-[10px] font-bold">
                     {item.user.substring(1,3).toUpperCase()}
                   </div>
                 </div>
                 <span className="font-bold text-sm shadow-black drop-shadow-md">{item.user}</span>
              </div>
              
              <p className="text-sm font-medium mb-4 line-clamp-2 leading-relaxed opacity-90">{item.desc}</p>
              
              <div className="flex items-center justify-between border-t border-white/20 pt-3">
                 <div className="flex items-center gap-4">
                   <div className="flex items-center gap-1">
                     <Heart className="w-4 h-4" />
                     <span className="text-xs font-bold">{item.likes}</span>
                   </div>
                   <div className="flex items-center gap-1">
                     <MessageCircle className="w-4 h-4" />
                     <span className="text-xs font-bold">{item.comments}</span>
                   </div>
                 </div>
                 <button className="text-white hover:text-ceylon-gold transition-colors">
                   <Share2 className="w-4 h-4" />
                 </button>
              </div>
            </div>
          </div>
        ))}
        
        <div className="flex-shrink-0 w-72 h-[480px] relative rounded-3xl overflow-hidden snap-center bg-slate-900 flex flex-col items-center justify-center text-center p-6 border-2 border-dashed border-slate-700">
           <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-6 animate-pulse">
             <ExternalLink className="w-8 h-8 text-ceylon-gold" />
           </div>
           <h3 className="text-2xl font-bold text-white mb-2">See More on TikTok</h3>
           <p className="text-slate-400 text-sm mb-6">Discover thousands of traveler stories from Sri Lanka.</p>
           <a 
             href="#" 
             className="px-6 py-3 bg-white text-slate-900 font-bold rounded-full hover:bg-ceylon-gold transition-colors w-full"
           >
             Open TikTok
           </a>
        </div>
      </div>
    </section>
  );
};