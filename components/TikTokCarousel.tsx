import React, { useRef } from 'react';
import { Play, Heart, MessageCircle, Share2, ChevronRight, ChevronLeft } from 'lucide-react';

const tikTokData = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1546522512-c24c2543c72b?q=80&w=2070&auto=format&fit=crop",
    user: "@travelwithme",
    desc: "The famous train ride from Kandy to Ella 🚂 #srilanka #travel",
    likes: "124K"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1588673756184-c5a53823758f?q=80&w=1968&auto=format&fit=crop",
    user: "@islandlife",
    desc: "Sunrise surfing in Arugam Bay 🏄‍♂️ #surf #goodvibes",
    likes: "89K"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1620619767323-b95a89183081?q=80&w=2070&auto=format&fit=crop",
    user: "@historybuff",
    desc: "Climbing Sigiriya Lion Rock! 🦁 The view is insane.",
    likes: "210K"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1506038634483-04a4591d1d14?q=80&w=2076&auto=format&fit=crop",
    user: "@wildsrilanka",
    desc: "Met this gentle giant today at Udawalawe 🐘 #safari",
    likes: "156K"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1590089808386-814ae8e7a0da?q=80&w=2070&auto=format&fit=crop",
    user: "@foodie_lka",
    desc: "Best Hopper in town! Spicy & crispy 🥥🌶️ #streetfood",
    likes: "45K"
  }
];

export const TikTokCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 300;
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ceylon-green tracking-tight">Trending in Sri Lanka</h2>
            <p className="text-slate-500 mt-2 font-medium">See what travelers are sharing right now on TikTok</p>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => scroll('left')} 
              className="p-3 rounded-full bg-slate-100 hover:bg-ceylon-green hover:text-white transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => scroll('right')} 
              className="p-3 rounded-full bg-slate-100 hover:bg-ceylon-green hover:text-white transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory"
        >
          {tikTokData.map((item) => (
            <div 
              key={item.id} 
              className="flex-shrink-0 w-[280px] h-[500px] relative rounded-3xl overflow-hidden shadow-xl snap-center group cursor-pointer"
            >
              <img 
                src={item.url} 
                alt={item.desc}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/80"></div>
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
              </div>

              {/* UI Elements */}
              <div className="absolute right-4 bottom-24 flex flex-col items-center gap-6 text-white">
                <div className="flex flex-col items-center">
                   <div className="p-2 bg-white/10 backdrop-blur-sm rounded-full mb-1 hover:bg-white/20 transition-colors">
                     <Heart className="w-6 h-6 fill-white/80" />
                   </div>
                   <span className="text-xs font-bold">{item.likes}</span>
                </div>
                <div className="flex flex-col items-center">
                   <div className="p-2 bg-white/10 backdrop-blur-sm rounded-full mb-1 hover:bg-white/20 transition-colors">
                     <MessageCircle className="w-6 h-6 fill-white/80" />
                   </div>
                   <span className="text-xs font-bold">1.2K</span>
                </div>
                <div className="flex flex-col items-center">
                   <div className="p-2 bg-white/10 backdrop-blur-sm rounded-full mb-1 hover:bg-white/20 transition-colors">
                     <Share2 className="w-6 h-6 fill-white/80" />
                   </div>
                   <span className="text-xs font-bold">Share</span>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <h4 className="font-bold text-base mb-1">{item.user}</h4>
                <p className="text-sm font-medium leading-snug opacity-90 line-clamp-2">{item.desc}</p>
              </div>
            </div>
          ))}
          
          {/* View More Card */}
          <div className="flex-shrink-0 w-[280px] h-[500px] relative rounded-3xl overflow-hidden border-2 border-dashed border-slate-300 bg-slate-50 flex flex-col items-center justify-center text-center p-6 snap-center">
            <div className="w-16 h-16 bg-ceylon-green/10 rounded-full flex items-center justify-center mb-4 text-ceylon-green">
              <Play className="w-8 h-8 fill-current" />
            </div>
            <h3 className="text-xl font-bold text-slate-800">Watch More</h3>
            <p className="text-slate-500 mt-2 text-sm">Follow us on TikTok for daily updates</p>
            <button className="mt-6 px-6 py-2 bg-black text-white rounded-full text-sm font-bold">
              @srilankatravel
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};