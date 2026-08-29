import React from 'react';
import { Sparkles, Heart, Compass, Shield, MapPin, Mail, Phone } from 'lucide-react';
import { Destination } from '../types';

interface FooterProps {
  onSelectNav: (tab: any) => void;
  onSelectDestination: (dest: Destination) => void;
  destinations: Destination[];
}

export const Footer: React.FC<FooterProps> = ({
  onSelectNav,
  onSelectDestination,
  destinations,
}) => {
  return (
    <footer className="bg-[#0C0A09] text-stone-300 border-t border-amber-900/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 border-2 border-amber-500 rotate-45 flex items-center justify-center bg-amber-500/20 shadow-sm shadow-amber-500/30">
                <div className="w-1.5 h-1.5 bg-amber-400"></div>
              </div>
              <span className="font-bold text-lg tracking-tight text-white">
                YATRA<span className="text-amber-400">AI</span>
              </span>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              The premier spiritual intelligence companion. Seamlessly bridging timeless Vedic traditions, holy sanctum rituals, and modern accessible pilgrimage planning.
            </p>

            <div className="pt-2 flex items-center gap-3 text-[10px] uppercase tracking-widest text-amber-400/70 font-mono">
              <div>Vedic Architecture</div>
              <div>•</div>
              <div>Muhurat Calibrated</div>
            </div>
          </div>

          {/* Col 2: Divine Shrines */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber-400 font-mono">
              Sanctums
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              {destinations.slice(0, 5).map((dest) => (
                <li key={dest.id}>
                  <button
                    onClick={() => onSelectDestination(dest)}
                    className="hover:text-amber-300 transition-colors text-left"
                  >
                    {dest.name} ({dest.state})
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Pilgrimage Circuits */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber-400 font-mono">
              Circuits
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button onClick={() => onSelectNav('routes')} className="hover:text-amber-300 transition-colors">
                  12 Jyotirlinga Circuit
                </button>
              </li>
              <li>
                <button onClick={() => onSelectNav('routes')} className="hover:text-amber-300 transition-colors">
                  Chhota Char Dham Yatra
                </button>
              </li>
              <li>
                <button onClick={() => onSelectNav('routes')} className="hover:text-amber-300 transition-colors">
                  Grand Dravidian Trail
                </button>
              </li>
              <li>
                <button onClick={() => onSelectNav('festivals')} className="hover:text-amber-300 transition-colors">
                  Maha Kumbh Snan Muhurats
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Spiritual Services */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber-400 font-mono">
              Devotee Services
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button onClick={() => onSelectNav('dashboard')} className="hover:text-amber-300 transition-colors">
                  Pilgrimage Passes
                </button>
              </li>
              <li>
                <button onClick={() => onSelectNav('festivals')} className="hover:text-amber-300 transition-colors">
                  Vedic Panchang & Tithis
                </button>
              </li>
              <li>
                <button onClick={() => onSelectNav('explore')} className="hover:text-amber-300 transition-colors">
                  Senior Wheelchair Routes
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-amber-900/30 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-stone-400 uppercase tracking-[0.2em] font-mono">
          <p>© {new Date().getFullYear()} YatraAI • All Sacred Coordinates Preserved</p>
          <div className="flex items-center gap-4 text-amber-400/80">
            <span>Satyam Shivam Sundaram</span>
            <span>•</span>
            <span>Vasudhaiva Kutumbakam</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
