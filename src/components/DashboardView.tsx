import React, { useState } from 'react';
import { 
  Sparkles, Calendar, MapPin, Clock, Heart, Plus, 
  ArrowRight, ShieldCheck, Volume2, Bookmark, CheckCircle2,
  Trash2, Download, Share2
} from 'lucide-react';
import { UpcomingTrip, Destination, DailySloka, SpiritualCalendarEvent } from '../types';

interface DashboardViewProps {
  upcomingTrips: UpcomingTrip[];
  onOpenPlanner: () => void;
  onSelectDestination: (dest: Destination) => void;
  destinations: Destination[];
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  dailySlokas: DailySloka[];
  calendarEvents: SpiritualCalendarEvent[];
  onDeleteTrip?: (id: string) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  upcomingTrips,
  onOpenPlanner,
  onSelectDestination,
  destinations,
  favorites,
  onToggleFavorite,
  dailySlokas,
  calendarEvents,
  onDeleteTrip,
}) => {
  const [activeSlokaIndex, setActiveSlokaIndex] = useState(0);
  const [isPlayingSloka, setIsPlayingSloka] = useState(false);
  const [selectedTripDetails, setSelectedTripDetails] = useState<UpcomingTrip | null>(upcomingTrips[0] || null);

  const currentSloka = dailySlokas[activeSlokaIndex] || dailySlokas[0];
  const favoriteDestinations = destinations.filter(d => favorites.includes(d.id));

  const handlePlayAudio = () => {
    setIsPlayingAudio(!isPlayingSloka);
  };

  const setIsPlayingAudio = (val: boolean) => {
    setIsPlayingSloka(val);
  };

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-amber-900/30 pb-6">
        <div>
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-amber-400 mb-1">
            <div className="w-1.5 h-1.5 bg-amber-400 rotate-45"></div>
            <span>Pilgrim Control Terminal</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-light text-stone-100">
            Namaste, Seeker.
          </h1>
          <p className="text-xs text-amber-300/70 mt-1 font-mono uppercase tracking-wider">
            Active Pilgrimage Passes • Auspicious Windows • Daily Vedic Invocations
          </p>
        </div>

        <button
          id="btn-dashboard-new-journey"
          onClick={onOpenPlanner}
          className="self-start md:self-auto px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 text-[10px] uppercase tracking-[0.2em] font-bold hover:from-amber-400 hover:to-orange-400 shadow-md shadow-orange-500/20 transition-all flex items-center gap-2"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Plan Pilgrimage</span>
        </button>
      </div>

      {/* SECTION 1: MY UPCOMING TRIPS */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-amber-900/30 pb-3">
          <h2 className="font-serif text-xl font-light text-stone-100 flex items-center gap-3">
            <span>Pilgrimage Passes</span>
            <span className="text-[10px] px-2 py-0.5 border border-amber-500/30 bg-amber-950/40 text-amber-300 font-mono">
              {upcomingTrips.length} ACTIVE
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Active Trip Cards */}
          {upcomingTrips.map((trip) => (
            <div
              key={trip.id}
              className="bg-[#140F0D] hover:bg-[#1A1411] border border-amber-900/30 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between p-6 relative overflow-hidden group"
            >
              {/* Corner brackets */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-amber-500/30 group-hover:border-amber-400 transition-colors"></div>
              <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-amber-500/30 group-hover:border-amber-400 transition-colors"></div>
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-amber-500/30 group-hover:border-amber-400 transition-colors"></div>
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-amber-500/30 group-hover:border-amber-400 transition-colors"></div>

              <div>
                <div className="relative h-44 overflow-hidden bg-stone-950">
                  <img
                    src={trip.imageUrl}
                    alt={trip.destinationName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#140F0D] via-transparent to-black/30" />

                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2 py-0.5 bg-black/70 border border-emerald-500/40 text-emerald-300 text-[9px] uppercase font-mono tracking-widest flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span>{trip.status}</span>
                    </span>
                    <span className="px-2.5 py-0.5 bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 text-[9px] font-bold font-mono uppercase tracking-wider">
                      T-{trip.daysAway} Days
                    </span>
                  </div>

                  <div className="absolute bottom-2 left-3 right-3 text-white">
                    <div className="flex items-center gap-1 text-[10px] font-mono text-amber-200">
                      <MapPin className="w-3 h-3 text-amber-400" />
                      <span>{trip.location}</span>
                    </div>
                    <h3 className="font-serif text-lg font-light text-white leading-tight">
                      {trip.destinationName}
                    </h3>
                  </div>
                </div>

                {/* Trip Metadata */}
                <div className="pt-4 space-y-2 text-[10px] font-mono text-stone-300">
                  <div className="flex items-center justify-between p-2 border border-amber-900/30 bg-[#0C0A09]">
                    <span className="text-amber-400/70">WINDOW:</span>
                    <strong className="text-stone-100 font-normal">{trip.dates}</strong>
                  </div>
                  <div className="flex items-center justify-between p-2 border border-amber-900/30 bg-[#0C0A09]">
                    <span className="text-amber-400/70">PARTY:</span>
                    <strong className="text-stone-100 font-normal">{trip.travelers} • {trip.budgetTier}</strong>
                  </div>
                  {trip.notes && (
                    <p className="text-[10px] text-stone-400 italic p-2 border border-amber-900/30 bg-[#0C0A09]">
                      SPEC: {trip.notes}
                    </p>
                  )}
                </div>
              </div>

              <div className="pt-4 mt-4 flex items-center justify-between gap-2 border-t border-amber-900/30">
                <button
                  onClick={() => {
                    const dest = destinations.find(d => d.id === trip.destinationId);
                    if (dest) onSelectDestination(dest);
                  }}
                  className="text-[10px] uppercase tracking-[0.2em] font-medium text-amber-300 hover:text-white flex items-center gap-1"
                >
                  <span>Sanctum Spec</span>
                  <ArrowRight className="w-3 h-3 text-amber-400" />
                </button>

                <button
                  onClick={() => {
                    alert(`Exporting Yatra Pass protocol for ${trip.destinationName}...`);
                  }}
                  className="p-2 border border-amber-500/30 hover:border-amber-400 text-amber-200/80 hover:text-white transition-colors"
                  title="Download Pilgrimage Pass"
                >
                  <Download className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}

          {/* Create New Trip Dashed Card */}
          <div
            onClick={onOpenPlanner}
            className="group bg-[#0C0A09] hover:bg-[#140F0D] p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 min-h-[280px] relative border border-dashed border-amber-500/30 hover:border-amber-400"
          >
            <div className="w-10 h-10 border border-amber-500/40 bg-amber-500/10 rotate-45 group-hover:rotate-90 flex items-center justify-center transition-all">
              <Plus className="w-4 h-4 text-amber-400" />
            </div>
            <h3 className="font-serif text-lg font-light text-stone-100 mt-6">
              Synthesize New Yatra
            </h3>
            <p className="text-[10px] text-stone-400 mt-1 max-w-xs font-mono uppercase tracking-wider">
              Calibrate with Vedic timings, senior-friendly pacing, and sanctum access protocols.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 2: AI RECOMMENDATIONS & DAILY VEDIC SLOKA */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left 6 Cols: AI Recommendations */}
        <div className="lg:col-span-6 bg-[#140F0D] border border-amber-900/30 p-6 sm:p-8 space-y-4">
          <div className="flex items-center justify-between border-b border-amber-900/30 pb-3">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-amber-400">AI Guidance Synthesis</span>
            <span className="text-[9px] px-2 py-0.5 border border-amber-500/30 bg-amber-500/10 text-amber-300 font-mono">CALIBRATED</span>
          </div>

          <div className="space-y-3">
            {/* Rishikesh Retreat Card */}
            <div className="p-4 bg-[#0C0A09] border border-amber-900/30 flex flex-col sm:flex-row items-center gap-4 hover:border-amber-500/40 transition-colors">
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=400&q=80"
                alt="Rishikesh Yoga Retreat"
                className="w-full sm:w-28 h-24 object-cover"
              />
              <div className="space-y-1 flex-1">
                <span className="text-[9px] font-mono text-teal-400 uppercase tracking-widest">
                  Hermitage & Silence
                </span>
                <h3 className="font-serif text-base font-light text-stone-100">
                  Rishikesh Ganga Ashram Retreat
                </h3>
                <p className="text-xs text-stone-400 line-clamp-2">
                  Serene spiritual rejuvenation with morning Pranayama, Parmarth Ganga Aarti, and Vedic meditation.
                </p>
                <div className="pt-1 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-amber-400">4.9 ★ (13.9k)</span>
                  <button
                    onClick={() => {
                      const rishikesh = destinations.find(d => d.id === 'rishikesh');
                      if (rishikesh) onSelectDestination(rishikesh);
                    }}
                    className="text-[10px] uppercase tracking-[0.15em] text-amber-300 hover:text-white flex items-center gap-1 font-mono font-bold"
                  >
                    <span>View Sanctum</span>
                    <ArrowRight className="w-3 h-3 text-amber-400" />
                  </button>
                </div>
              </div>
            </div>

            {/* Kedarnath Season Window Card */}
            <div className="p-4 bg-[#0C0A09] border border-amber-900/30 flex flex-col sm:flex-row items-center gap-4 hover:border-amber-500/40 transition-colors">
              <img
                src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=400&q=80"
                alt="Kedarnath Darshan"
                className="w-full sm:w-28 h-24 object-cover"
              />
              <div className="space-y-1 flex-1">
                <span className="text-[9px] font-mono text-orange-400 uppercase tracking-widest">
                  Jyotirlinga Darshan
                </span>
                <h3 className="font-serif text-base font-light text-stone-100">
                  Kedarnath High Himalayan Trek
                </h3>
                <p className="text-xs text-stone-400 line-clamp-2">
                  Highest Shiva shrine standing amidst Himalayan snow peaks. Helicopter and pony slots mapped.
                </p>
                <div className="pt-1 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-amber-400">5.0 ★ (19.4k)</span>
                  <button
                    onClick={() => {
                      const kedar = destinations.find(d => d.id === 'kedarnath');
                      if (kedar) onSelectDestination(kedar);
                    }}
                    className="text-[10px] uppercase tracking-[0.15em] text-amber-300 hover:text-white flex items-center gap-1 font-mono font-bold"
                  >
                    <span>View Sanctum</span>
                    <ArrowRight className="w-3 h-3 text-amber-400" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right 6 Cols: Daily Vedic Sloka & Contemplation */}
        <div className="lg:col-span-6 bg-[#140F0D] border border-amber-900/30 p-6 sm:p-8 space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-amber-900/30 pb-3">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-amber-400">Daily Sloka Contemplation</span>
              <div className="flex items-center gap-1 font-mono text-[10px]">
                {dailySlokas.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveSlokaIndex(i)}
                    className={`px-2 py-0.5 border transition-all ${
                      activeSlokaIndex === i ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 font-bold border-amber-400' : 'border-amber-500/20 text-stone-400'
                    }`}
                  >
                    0{i + 1}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-mono text-amber-400/80 uppercase tracking-widest">
                    {currentSloka.source}
                  </span>
                  <h4 className="font-serif text-lg font-light text-stone-100">
                    {currentSloka.deity} Invocation
                  </h4>
                </div>

                <button
                  onClick={handlePlayAudio}
                  className={`p-2 border transition-all ${
                    isPlayingSloka
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 border-amber-400 font-bold'
                      : 'border-amber-500/30 text-amber-300 hover:border-amber-400 hover:text-white'
                  }`}
                  title="Listen to Vedic Chanting"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Sanskrit Text */}
              <div className="p-4 bg-[#0C0A09] border border-amber-900/30 text-center space-y-2">
                <p className="font-serif text-lg sm:text-xl font-light text-amber-200 leading-relaxed whitespace-pre-line">
                  {currentSloka.sanskrit}
                </p>
                <p className="text-[10px] text-stone-400 font-mono italic">
                  {currentSloka.transliteration}
                </p>
              </div>

              {/* English Meaning & Contemplation */}
              <div className="space-y-2 text-xs text-stone-300 leading-relaxed font-light">
                <p>
                  <strong className="text-amber-300 font-medium">Translation: </strong>
                  {currentSloka.translation}
                </p>
                <p className="text-[10px] text-amber-400/80 border-t border-amber-900/30 pt-2 font-mono">
                  SIGNIFICANCE: {currentSloka.significance}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: SAVED SHRINES */}
      {favoriteDestinations.length > 0 && (
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between border-b border-amber-900/30 pb-3">
            <h2 className="font-serif text-xl font-light text-stone-100 flex items-center gap-3">
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
              <span>Saved Sacred Sanctums</span>
              <span className="text-[10px] px-2 py-0.5 border border-amber-500/30 bg-amber-950/40 text-amber-300 font-mono">
                {favoriteDestinations.length} SAVED
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {favoriteDestinations.map((dest) => (
              <div
                key={dest.id}
                onClick={() => onSelectDestination(dest)}
                className="group bg-[#140F0D] hover:bg-[#1A1411] border border-amber-900/30 hover:border-amber-500/40 transition-all p-5 cursor-pointer flex flex-col justify-between"
              >
                <div className="relative h-36 overflow-hidden bg-stone-950">
                  <img
                    src={dest.imageUrl}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleFavorite(dest.id);
                      }}
                      className="p-1.5 bg-black/80 border border-rose-500/40 text-rose-400"
                    >
                      <Heart className="w-3.5 h-3.5 fill-rose-500" />
                    </button>
                  </div>
                </div>
                <div className="pt-3 space-y-1">
                  <span className="text-[9px] uppercase font-mono tracking-widest text-amber-400">
                    {dest.state}
                  </span>
                  <h4 className="font-serif text-base font-light text-stone-100 group-hover:text-amber-200 transition-colors">
                    {dest.name}
                  </h4>
                  <p className="text-[10px] text-stone-400 line-clamp-1 font-mono">
                    {dest.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

