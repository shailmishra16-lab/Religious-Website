import React, { useState } from 'react';
import { Star, MapPin, Clock, Heart, ArrowRight, Sparkles } from 'lucide-react';
import { Destination } from '../types';

interface DestinationGridProps {
  destinations: Destination[];
  onSelectDestination: (dest: Destination) => void;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  onOpenPlannerForDest: (dest: Destination) => void;
}

export const DestinationGrid: React.FC<DestinationGridProps> = ({
  destinations,
  onSelectDestination,
  favorites,
  onToggleFavorite,
  onOpenPlannerForDest,
}) => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Jyotirlinga' | 'Char Dham' | 'Heritage' | 'Ashram'>('All');

  const filterTabs = [
    { label: 'All Sanctums', value: 'All' },
    { label: '12 Jyotirlingas', value: 'Jyotirlinga' },
    { label: 'Char Dham', value: 'Char Dham' },
    { label: 'Ancient Heritage', value: 'Heritage' },
    { label: 'Ashrams & Silence', value: 'Ashram' },
  ];

  const filteredDestinations = destinations.filter((dest) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Char Dham') {
      return dest.tags.some(t => t.toLowerCase().includes('char dham'));
    }
    return dest.category === activeFilter;
  });

  return (
    <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-amber-900/30 gap-4">
        <div>
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-amber-400 mb-1">
            <div className="w-1.5 h-1.5 bg-amber-400 rotate-45"></div>
            <span>Sanctum Inventory</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-light text-stone-100">
            Sacred Anchors of the Subcontinent
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-2 md:pb-0">
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveFilter(tab.value as any)}
              className={`px-3.5 py-1.5 text-[10px] uppercase tracking-[0.15em] font-medium whitespace-nowrap transition-all ${
                activeFilter === tab.value
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 font-bold shadow-sm'
                  : 'border border-amber-500/20 text-amber-200/70 hover:text-white hover:border-amber-400 hover:bg-amber-500/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-amber-950/40">
        {filteredDestinations.map((dest, idx) => {
          const isFav = favorites.includes(dest.id);
          const categoryColors: Record<string, string> = {
            'Jyotirlinga': 'border-orange-500/40 text-orange-300 bg-orange-950/60',
            'Char Dham': 'border-sky-500/40 text-sky-300 bg-sky-950/60',
            'Heritage': 'border-amber-500/40 text-amber-300 bg-amber-950/60',
            'Shakti Peetha': 'border-rose-500/40 text-rose-300 bg-rose-950/60',
            'Ashram': 'border-teal-500/40 text-teal-300 bg-teal-950/60',
          };
          const badgeClass = categoryColors[dest.category] || 'border-amber-500/30 text-amber-300 bg-amber-950/40';

          return (
            <div
              key={dest.id}
              id={`dest-card-${dest.id}`}
              className="group bg-[#140F0D] hover:bg-[#1A1411] transition-all duration-300 flex flex-col justify-between p-6 relative overflow-hidden border border-amber-900/20 hover:border-amber-500/40"
            >
              {/* Corner brackets */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-amber-500/30 group-hover:border-amber-400 transition-colors"></div>
              <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-amber-500/30 group-hover:border-amber-400 transition-colors"></div>
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-amber-500/30 group-hover:border-amber-400 transition-colors"></div>
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-amber-500/30 group-hover:border-amber-400 transition-colors"></div>

              {/* Card Image Area in Glorious Full Color */}
              <div className="relative h-56 overflow-hidden cursor-pointer bg-stone-950" onClick={() => onSelectDestination(dest)}>
                <img
                  src={dest.imageUrl}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#140F0D] via-transparent to-black/30" />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                  <span className={`px-2.5 py-0.5 border text-[9px] uppercase font-mono tracking-widest backdrop-blur-sm ${badgeClass}`}>
                    {dest.category}
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleFavorite(dest.id);
                    }}
                    className={`w-7 h-7 border flex items-center justify-center transition-all ${
                      isFav
                        ? 'bg-rose-500 text-white border-rose-400 shadow-md shadow-rose-500/30'
                        : 'bg-black/60 text-stone-200 border-amber-500/30 hover:border-amber-400 hover:text-white'
                    }`}
                    title={isFav ? 'Remove from favorites' : 'Save to favorites'}
                  >
                    <Heart className={`w-3.5 h-3.5 ${isFav ? 'fill-white' : ''}`} />
                  </button>
                </div>

                {/* Bottom Image Stats */}
                <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-white text-[10px] z-10 font-mono">
                  <div className="flex items-center gap-1 text-amber-200">
                    <MapPin className="w-3 h-3 text-amber-400" />
                    <span>{dest.state}</span>
                  </div>
                  <div className="flex items-center gap-1 bg-black/60 px-1.5 py-0.5 border border-amber-500/20">
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                    <span className="font-bold text-amber-300">{dest.rating}</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="pt-5 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[9px] uppercase tracking-[0.2em] text-amber-400/70 font-mono">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-400/60" />
                      <span>{dest.duration}</span>
                    </span>
                    <span className="border border-amber-500/20 px-1.5 py-0.5 text-amber-200/80 bg-amber-950/30">
                      {dest.crowdLevel} Density
                    </span>
                  </div>

                  <h3 
                    onClick={() => onSelectDestination(dest)}
                    className="font-serif text-xl font-light text-stone-100 group-hover:text-amber-200 cursor-pointer transition-colors"
                  >
                    {dest.name}
                  </h3>
                  <p className="text-xs text-stone-300 line-clamp-2 leading-relaxed">
                    {dest.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {dest.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 border border-amber-900/40 bg-amber-950/20 text-amber-300/80 text-[9px] uppercase tracking-wider font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom Action Footer */}
                <div className="pt-4 border-t border-amber-900/30 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectDestination(dest)}
                    className="text-[10px] uppercase tracking-[0.2em] font-medium text-amber-300 hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <span>Sanctum Spec</span>
                    <ArrowRight className="w-3 h-3 text-amber-400" />
                  </button>

                  <button
                    onClick={() => onOpenPlannerForDest(dest)}
                    className="px-3.5 py-1.5 bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 text-[9px] uppercase tracking-[0.2em] font-bold hover:from-amber-400 hover:to-orange-400 shadow-sm transition-all flex items-center gap-1"
                  >
                    <span>Plan Yatra</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

