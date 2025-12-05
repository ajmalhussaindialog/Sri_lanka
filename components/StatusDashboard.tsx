import React from 'react';
import { Plane, Zap, Droplet, Shield, Bus, Utensils, CheckCircle2, AlertTriangle, Activity } from 'lucide-react';
import { StatusItem } from '../types';

const statusData: StatusItem[] = [
  { id: '1', category: 'Airport Operations', status: 'Normal', description: 'Bandaranaike International Airport (BIA) is fully operational with standard security protocols.', iconName: 'Plane' },
  { id: '2', category: 'Public Security', status: 'Normal', description: 'Countrywide situation is calm. Tourist police are active in all major zones.', iconName: 'Shield' },
  { id: '3', category: 'Fuel Supply', status: 'Normal', description: 'Fuel is widely available. Tourists have priority access via the Tourist Fuel Pass.', iconName: 'Droplet' },
  { id: '4', category: 'Public Transport', status: 'Normal', description: 'Trains and buses operating on schedule.', iconName: 'Bus' },
  { id: '5', category: 'Power Supply', status: 'Normal', description: 'Uninterrupted power supply for tourist zones.', iconName: 'Zap' },
  { id: '6', category: 'Hotels & Dining', status: 'Normal', description: 'Hotels, restaurants, and shops open as usual.', iconName: 'Utensils' },
];

const getIcon = (name: string, className = "w-6 h-6") => {
  switch (name) {
    case 'Plane': return <Plane className={className} />;
    case 'Shield': return <Shield className={className} />;
    case 'Droplet': return <Droplet className={className} />;
    case 'Bus': return <Bus className={className} />;
    case 'Zap': return <Zap className={className} />;
    case 'Utensils': return <Utensils className={className} />;
    default: return <Shield className={className} />;
  }
};

const StatusCard: React.FC<{ item: StatusItem }> = ({ item }) => (
  <div className="relative overflow-hidden bg-white rounded-[2rem] p-8 shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 group flex flex-col h-full">
    {/* Decorative Background Element */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-ceylon-green/5 rounded-bl-[4rem] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
    
    <div className="relative z-10 flex flex-col h-full justify-between">
      <div className="flex justify-between items-start mb-6">
        <div className={`p-4 rounded-2xl ${
          item.status === 'Normal' ? 'bg-emerald-50 text-emerald-600' : 'bg-yellow-50 text-yellow-600'
        }`}>
          {getIcon(item.iconName, "w-8 h-8")}
        </div>
        
        {/* Live Indicator */}
        <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
           <span className="relative flex h-2.5 w-2.5">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${item.status === 'Normal' ? 'bg-emerald-500' : 'bg-yellow-500'}`}></span>
              <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${item.status === 'Normal' ? 'bg-emerald-500' : 'bg-yellow-500'}`}></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Live</span>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-extrabold text-slate-800 mb-2">{item.category}</h3>
        <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6">{item.description}</p>
      </div>

      <div className={`flex items-center gap-2 mt-auto pt-4 border-t border-slate-100 ${
        item.status === 'Normal' ? 'text-emerald-600' : 'text-yellow-600'
      }`}>
        {item.status === 'Normal' ? <CheckCircle2 className="w-5 h-5" /> : <AlertTriangle className="w-5 h-5" />}
        <span className="font-extrabold text-lg tracking-tight uppercase">
          Status: {item.status === 'Normal' ? 'Operational' : item.status}
        </span>
      </div>
    </div>
  </div>
);

export const StatusDashboard: React.FC = () => {
  const criticalItems = statusData.slice(0, 3);
  const secondaryItems = statusData.slice(3);

  return (
    <section id="status-dashboard" className="py-20 px-4 max-w-7xl mx-auto -mt-24 relative z-20">
      <div className="bg-white/90 backdrop-blur-xl rounded-[3rem] p-6 md:p-12 shadow-2xl border border-white/50">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-100 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Activity className="w-5 h-5 text-ceylon-green" />
              <span className="text-ceylon-green font-bold tracking-wider uppercase text-xs">Real-time Dashboard</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800">Situation Report</h2>
          </div>
          <div className="mt-4 md:mt-0 text-right">
             <p className="text-slate-500 text-sm font-bold">Last Updated: Just now</p>
             <p className="text-emerald-600 text-xs font-bold uppercase tracking-wide">All Systems Operational</p>
          </div>
        </div>
        
        {/* Critical Grid */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-slate-400 uppercase tracking-widest mb-6 text-sm">Critical Infrastructure</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {criticalItems.map(item => (
              <StatusCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Secondary Grid */}
        <div>
           <h3 className="text-lg font-bold text-slate-400 uppercase tracking-widest mb-6 text-sm">Essential Services</h3>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {secondaryItems.map(item => (
              <StatusCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Info Banner */}
        <div className="mt-12 p-1 bg-gradient-to-r from-ceylon-green to-sky-500 rounded-3xl">
           <div className="bg-white rounded-[1.4rem] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                 <div className="p-3 bg-ceylon-green/10 rounded-full text-ceylon-green mt-1">
                   <Droplet className="w-6 h-6" />
                 </div>
                 <div>
                    <h4 className="font-extrabold text-slate-800 text-lg">Tourist Fuel Pass</h4>
                    <p className="text-slate-500 font-medium text-sm mt-1 max-w-lg">
                      International visitors are guaranteed fuel availability through the designated Tourist Fuel Pass system. No queues, no hassle.
                    </p>
                 </div>
              </div>
              <button className="whitespace-nowrap px-8 py-3 bg-ceylon-green hover:bg-sky-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Register for Pass
              </button>
           </div>
        </div>
      </div>
    </section>
  );
};