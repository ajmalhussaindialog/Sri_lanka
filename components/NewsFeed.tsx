import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { NewsItem } from '../types';

const newsData: NewsItem[] = [
  {
    id: '101',
    date: 'October 15, 2023',
    title: 'Free Tourist Visa for 7 Countries',
    summary: 'Sri Lanka Cabinet approves free tourist visas for visitors from India, China, Russia, Malaysia, Japan, Indonesia, and Thailand.',
    type: 'Visa'
  },
  {
    id: '102',
    date: 'October 10, 2023',
    title: 'New Ferry Service Launched',
    summary: 'Passenger ferry service between Nagapattinam, India and Kankesanthurai, Sri Lanka has commenced operations.',
    type: 'Transport'
  },
  {
    id: '103',
    date: 'September 28, 2023',
    title: 'Fuel Quota Increased for Tourists',
    summary: 'The weekly fuel quota for registered tourist vehicles has been increased to ensure smooth travel experiences.',
    type: 'General'
  }
];

export const NewsFeed: React.FC = () => {
  return (
    <section id="updates" className="py-20 px-4 bg-sand-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-200 pb-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ceylon-green">Official Announcements</h2>
            <p className="text-slate-500 mt-2 font-medium">Latest verified updates from the Tourism Bureau.</p>
          </div>
          <a href="#" className="hidden md:flex items-center text-ceylon-teal font-bold hover:text-ceylon-green transition-colors mt-4 md:mt-0 bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md">
            View Archive <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Main Feature */}
          <div className="relative group overflow-hidden rounded-3xl shadow-xl h-96">
            <img 
              src="https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=2036&auto=format&fit=crop" 
              alt="Coconut Tree Hill Mirissa" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-10">
              <span className="inline-block px-3 py-1 bg-ceylon-gold text-ceylon-green text-xs font-extrabold uppercase tracking-wider rounded-lg mb-3 w-fit shadow-md">
                Highlight
              </span>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2 leading-tight">Sri Lanka Named Top Nature Destination for 2024</h3>
              <p className="text-gray-200 line-clamp-2 text-sm md:text-base font-medium">Leading travel publications recognize the island's recovery and pristine biodiversity, inviting world travelers back to paradise.</p>
            </div>
          </div>

          {/* List */}
          <div className="space-y-4">
            {newsData.map((news) => (
              <div key={news.id} className="flex gap-5 group cursor-pointer p-5 rounded-3xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-slate-100">
                <div className="flex-shrink-0 w-16 text-center pt-1">
                  <div className="text-xs font-bold text-gray-400 uppercase">{news.date.split(' ')[0]}</div>
                  <div className="text-2xl font-black text-ceylon-green">{news.date.split(' ')[1].replace(',', '')}</div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-bold text-white bg-ceylon-teal px-2 py-1 rounded-full uppercase tracking-wide">{news.type}</span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-ceylon-green transition-colors">{news.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">{news.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-8 text-center md:hidden">
           <a href="#" className="inline-flex items-center text-ceylon-teal font-bold hover:text-ceylon-green transition-colors bg-white px-6 py-3 rounded-full shadow-sm">
            View Archive <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};