import React from 'react';
import { Phone, MapPin, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Emergency Banner */}
        <div id="emergency" className="bg-ceylon-gold rounded-3xl p-8 flex flex-col md:flex-row justify-between items-center relative -top-32 shadow-2xl border border-yellow-500/30">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-ceylon-green font-black text-2xl uppercase tracking-wider">Emergency Hotlines</h3>
            <p className="text-ceylon-green/80 font-bold">Available 24/7 for tourists in distress</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-3 bg-ceylon-green/10 p-3 rounded-2xl border border-ceylon-green/20">
              <div className="bg-ceylon-green text-white p-3 rounded-xl shadow-lg">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs font-bold text-ceylon-green uppercase opacity-70">Tourist Police</span>
                <span className="block text-2xl font-black text-ceylon-green">1912</span>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-ceylon-green/10 p-3 rounded-2xl border border-ceylon-green/20">
              <div className="bg-ceylon-green text-white p-3 rounded-xl shadow-lg">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs font-bold text-ceylon-green uppercase opacity-70">Ambulance</span>
                <span className="block text-2xl font-black text-ceylon-green">1990</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 -mt-10">
          <div className="col-span-1 md:col-span-1">
            <span className="text-2xl font-extrabold tracking-wide text-white mb-6 block">
              Sri Lanka<span className="text-ceylon-gold">.travel</span>
            </span>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
              The official portal of the Sri Lanka Tourism Promotion Bureau. Discover the wonder of Asia with confidence and ease.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors bg-slate-800 p-2 rounded-full hover:bg-ceylon-green"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors bg-slate-800 p-2 rounded-full hover:bg-ceylon-green"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors bg-slate-800 p-2 rounded-full hover:bg-ceylon-green"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-ceylon-gold">Quick Links</h4>
            <ul className="space-y-3 text-sm text-slate-400 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Electronic Travel Auth (ETA)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Health Guidelines</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Registered Tour Operators</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Attractions Map</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-ceylon-gold">Contact Us</h4>
            <ul className="space-y-4 text-sm text-slate-400 font-medium">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-ceylon-teal flex-shrink-0" />
                <span>No. 80, Galle Road,<br/>Colombo 03, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-ceylon-teal flex-shrink-0" />
                <span>info@srilanka.travel</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-ceylon-gold">Newsletter</h4>
            <p className="text-slate-400 text-sm mb-4 font-medium">Subscribe for weekly travel inspiration and updates.</p>
            <div className="flex flex-col gap-3">
              <input type="email" placeholder="Your email address" className="bg-slate-800 border-none rounded-xl px-4 py-3 text-sm text-white focus:ring-2 focus:ring-ceylon-gold outline-none font-bold placeholder-slate-500" />
              <button className="bg-ceylon-gold hover:bg-yellow-500 text-ceylon-green font-bold py-3 px-4 rounded-xl text-sm transition-colors shadow-lg">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 font-medium">
          <p>&copy; {new Date().getFullYear()} Sri Lanka Tourism Promotion Bureau. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};