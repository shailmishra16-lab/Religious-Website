import React, { useState } from 'react';
import { Search, Mic, Sparkles, Star, MapPin, Clock, Heart, ArrowRight, Flame, Landmark, Flower2 } from 'lucide-react';
import { Destination } from '../types';

interface ExploreViewProps {
  destinations: Destination[];
  onSelectDestination: (dest: Destination) => void;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  onOpenPlannerForDest: (dest: Destination) => void;
  onOpenAskAi: () => void;
}

export const ExploreView: React.FC<ExploreViewProps> = ({
  destinations,
  onSelectDestination,
  favorites,
  onToggleFavorite,
  onOpenPlannerForDest,
  onOpenAskAi,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [seniorOnly, setSeniorOnly] = useState(false);

  const categories = [
    { label: 'All Sanctums', value: 'All' },
    { label: '12 Jyotirlingas', value: 'Jyotirlinga' },
    { label: 'Char Dham', value: 'Char Dham' },
    { label: 'Shakti Peethas', value: 'Shakti Peetha' },
    { label: 'Ancient Heritage', value: 'Heritage' },
    { label: 'Ashrams & Silence', value: 'Ashram' },
  ];

  const filtered = destinations.filter((d) => {
    const matchesSearch =
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory =
      selectedCategory === 'All'
        ? true
        : selectedCategory === 'Char Dham'
        ? d.tags.some(t => t.toLowerCase().includes('char dham'))
        : d.category === selectedCategory;

    const matchesSenior = seniorOnly ? d.seniorFriendly : true;

    return matchesSearch && matchesCategory && matchesSenior;
  });

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Title and Search Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/50">
          <div className="w-1.5 h-1.5 bg-white rotate-45"></div>
          <span>Sanctum Registry & Search</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-light text-white">
          Sacred Coordinates
        </h1>
        <p className="text-xs text-white/50 max-w-xl mx-auto font-mono uppercase tracking-wider">
          Query ancient sanctums, revered Jyotirlingas, and hermitage retreat coordinates with Vedic intelligence.
        </p>

        {/* Search Bar with Mic */}
        <div className="pt-2">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input
              id="input-explore-search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by deity, region, ritual (e.g. 'Varanasi', 'Kedar', 'Ganga Aarti')..."
              className="w-full pl-11 pr-12 py-3.5 bg-[#0E0E0E] border border-white/20 text-white text-xs font-mono placeholder:text-white/30 focus:outline-none focus:border-white transition-colors"
            />
            <button
              type="button"
              onClick={onOpenAskAi}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 border border-white/20 hover:border-white text-white/60 hover:text-white transition-colors"
              title="Speak or Ask AI"
            >
              <Mic className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-1.5 flex-wrap pt-2">
          {categories.map((c) => (
            <button
              key={c.value}
              onClick={() => setSelectedCategory(c.value)}
              className={`px-3.5 py-1.5 text-[10px] uppercase tracking-[0.15em] font-medium transition-all ${
                selectedCategory === c.value
                  ? 'bg-white text-black font-bold'
                  : 'border border-white/20 text-white/60 hover:text-white hover:border-white'
              }`}
            >
              {c.label}
            </button>
          ))}

          <button
            onClick={() => setSeniorOnly(!seniorOnly)}
            className={`px-3.5 py-1.5 text-[10px] uppercase tracking-[0.15em] font-mono border transition-all ${
              seniorOnly
                ? 'bg-white text-black border-white font-bold'
                : 'border-white/20 text-white/60 hover:border-white hover:text-white'
            }`}
          >
            [✓ SENIOR ACCESSIBLE]
          </button>
        </div>
      </div>

      {/* Featured Banner */}
      <div className="relative border border-white/20 bg-[#0E0E0E] text-white p-8 sm:p-12 overflow-hidden">
        <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-white/40"></div>
        <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-white/40"></div>
        <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-white/40"></div>
        <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-white/40"></div>

        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-white/60 font-mono">
            <Flame className="w-3.5 h-3.5 text-white" />
            <span>Sacred Confluence • Maha Kumbh Prayagraj</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-light leading-tight text-white">
            The Greatest Spiritual Confluence on Earth
          </h2>

          <p className="text-xs text-white/60 leading-relaxed font-light">
            Witness the sacred Triveni Sangam where the Ganga, Yamuna, and mystical Saraswati meet. Millions of sadhus and devotees gather for auspicious Royal Snan (Shahi Snan) dates.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => {
                const varanasi = destinations.find(d => d.id === 'varanasi');
                if (varanasi) onSelectDestination(varanasi);
              }}
              className="px-5 py-2.5 bg-white text-black text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-white/90 transition-all flex items-center gap-2"
            >
              <span>Explore Sangam Spec</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={onOpenAskAi}
              className="px-5 py-2.5 border border-white/30 hover:border-white text-white text-[10px] uppercase tracking-[0.2em] font-mono transition-all flex items-center gap-2"
            >
              <Sparkles className="w-3 h-3 text-white" />
              <span>Query Muhurat Matrix</span>
            </button>
          </div>
        </div>
      </div>

      {/* Two Thematic Bento Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#222]">
        {/* Card 1: Seek Inner Peace */}
        <div 
          onClick={() => {
            const rishikesh = destinations.find(d => d.id === 'rishikesh');
            if (rishikesh) onSelectDestination(rishikesh);
          }}
          className="group relative p-8 bg-[#0E0E0E] hover:bg-[#141414] cursor-pointer min-h-[240px] flex flex-col justify-between transition-all"
        >
          <div className="flex items-center justify-between text-white">
            <span className="px-2 py-0.5 border border-white/20 text-white/70 text-[9px] uppercase font-mono tracking-widest">
              Yoga & Ashrams
            </span>
            <Flower2 className="w-4 h-4 text-white/50" />
          </div>

          <div className="text-white space-y-1 pt-6">
            <h3 className="font-serif text-xl font-light text-white">
              Seek Inner Peace & Hermitage
            </h3>
            <p className="text-xs text-white/50 leading-relaxed font-light">
              Tranquil Himalayan river retreats, morning Vedic chanting, and silent cave meditation.
            </p>
            <div className="pt-2 text-[10px] uppercase tracking-[0.2em] font-mono text-white/70 flex items-center gap-1">
              <span>View Rishikesh Sanctum</span>
              <span>→</span>
            </div>
          </div>
        </div>

        {/* Card 2: Discover Heritage */}
        <div 
          onClick={() => {
            const madurai = destinations.find(d => d.id === 'madurai');
            if (madurai) onSelectDestination(madurai);
          }}
          className="group relative p-8 bg-[#0E0E0E] hover:bg-[#141414] cursor-pointer min-h-[240px] flex flex-col justify-between transition-all"
        >
          <div className="flex items-center justify-between text-white">
            <span className="px-2 py-0.5 border border-white/20 text-white/70 text-[9px] uppercase font-mono tracking-widest">
              Living Heritage
            </span>
            <Landmark className="w-4 h-4 text-white/50" />
          </div>

          <div className="text-white space-y-1 pt-6">
            <h3 className="font-serif text-xl font-light text-white">
              Discover Monolithic Temple Architecture
            </h3>
            <p className="text-xs text-white/50 leading-relaxed font-light">
              Dravidian 1,000-pillar mandapams, musical stone columns, and nightly deity processions.
            </p>
            <div className="pt-2 text-[10px] uppercase tracking-[0.2em] font-mono text-white/70 flex items-center gap-1">
              <span>View Madurai Sanctum</span>
              <span>→</span>
            </div>
          </div>
        </div>
      </div>

      {/* Destination Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <h3 className="font-serif text-xl font-light text-white">
            Matching Sanctum Coordinates ({filtered.length})
          </h3>
          {searchQuery && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="text-[10px] uppercase tracking-wider font-mono text-white/60 hover:text-white"
            >
              [RESET FILTERS]
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#222]">
          {filtered.map((dest) => {
            const isFav = favorites.includes(dest.id);
            return (
              <div
                key={dest.id}
                className="group bg-[#0E0E0E] hover:bg-[#141414] transition-all duration-300 p-6 relative overflow-hidden flex flex-col justify-between"
              >
                {/* Image */}
                <div 
                  className="relative h-52 overflow-hidden cursor-pointer bg-black"
                  onClick={() => onSelectDestination(dest)}
                >
                  <img
                    src={dest.imageUrl}
                    alt={dest.name}
                    className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-transparent to-black/40" />

                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                    <span className="px-2 py-0.5 bg-[#0A0A0A] border border-white/20 text-white/80 text-[9px] uppercase font-mono tracking-widest">
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
                          ? 'bg-white text-black border-white'
                          : 'bg-black/60 text-white/70 border-white/20 hover:border-white hover:text-white'
                      }`}
                    >
                      <Heart className={`w-3.5 h-3.5 ${isFav ? 'fill-black' : ''}`} />
                    </button>
                  </div>

                  <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-white text-[10px] z-10 font-mono">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-white/60" />
                      <span>{dest.state}</span>
                    </div>
                    <div className="flex items-center gap-1 text-white/80">
                      <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                      <span className="font-bold">{dest.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="pt-4 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[9px] uppercase tracking-[0.2em] font-mono text-white/40">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-white/40" />
                        <span>{dest.duration}</span>
                      </span>
                      {dest.seniorFriendly && (
                        <span className="border border-white/20 px-1.5 py-0.5 text-white/60">
                          Senior Pass Ready
                        </span>
                      )}
                    </div>

                    <h4 
                      onClick={() => onSelectDestination(dest)}
                      className="font-serif text-xl font-light text-white group-hover:text-white cursor-pointer transition-colors"
                    >
                      {dest.name}
                    </h4>
                    <p className="text-xs text-white/50 line-clamp-2 leading-relaxed">
                      {dest.description}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                    <button
                      onClick={() => onSelectDestination(dest)}
                      className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/70 hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <span>Sanctum Spec</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>

                    <button
                      onClick={() => onOpenPlannerForDest(dest)}
                      className="px-3 py-1.5 bg-white text-black text-[9px] uppercase tracking-[0.2em] font-bold hover:bg-white/90 transition-all flex items-center gap-1"
                    >
                      <span>Plan Yatra</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

