import React, { useState } from 'react';
import { Sparkles, MapPin, Calendar, Users, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { Destination } from '../types';

interface HeroSectionProps {
  onPlanQuick?: (plan: { origin: string; destination: string; dates: string; travelers: string }) => void;
  onOpenPlanner?: () => void;
  onSelectDestination: (dest: Destination) => void;
  destinations: Destination[];
  onOpenAskAi: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onPlanQuick,
  onOpenPlanner,
  onSelectDestination,
  destinations,
  onOpenAskAi,
}) => {
  const [origin, setOrigin] = useState('New Delhi');
  const [destinationInput, setDestinationInput] = useState('Varanasi');
  const [travelDates, setTravelDates] = useState('Nov 12 - Nov 16');
  const [travelers, setTravelers] = useState('2 Adults • Senior Friendly');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onPlanQuick) {
      onPlanQuick({
        origin,
        destination: destinationInput,
        dates: travelDates,
        travelers,
      });
    } else if (onOpenPlanner) {
      onOpenPlanner();
    }
  };

  const handleQuickChip = (destName: string) => {
    setDestinationInput(destName);
    const match = destinations.find(d => d.name.toLowerCase().includes(destName.toLowerCase()));
    if (match) {
      onSelectDestination(match);
    }
  };

  return (
    <section className="relative w-full border-b border-amber-900/30 bg-[#0C0A09] overflow-hidden">
      {/* Geometric Grid Background */}
      <div className="absolute inset-0 geo-grid-pattern pointer-events-none opacity-60"></div>
      {/* Radial Saffron Ambience */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-600/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-px bg-amber-950/30">
        {/* Left Column: Monolith Hero Display (8 Cols) */}
        <div className="lg:col-span-8 bg-[#130E0B] p-8 sm:p-12 lg:p-16 relative flex flex-col justify-between group overflow-hidden">
          {/* Subtle Background Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            <span className="text-[200px] font-black text-amber-500/[0.04] tracking-tighter">ॐ</span>
          </div>

          {/* Corner brackets */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-amber-500/40"></div>
          <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-amber-500/40"></div>
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-amber-500/40"></div>
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-amber-500/40"></div>

          {/* Top Tag & Number */}
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-medium text-amber-400">
              <div className="w-2 h-2 bg-gradient-to-tr from-amber-500 to-orange-500 rotate-45"></div>
              <span>Sanctum Architecture & Vedic AI Guidance</span>
            </div>
            <span className="text-[10px] font-mono tracking-widest text-amber-500/70 border border-amber-500/30 px-2 py-0.5 bg-amber-500/5">01 // PLATFORM</span>
          </div>

          {/* Hero Typography */}
          <div className="py-12 z-10 space-y-6">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-[1.05] font-serif text-stone-100">
              Sacred Sanctuaries <br />
              <span className="italic font-light bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200 bg-clip-text text-transparent">& Divine Intelligence</span>
            </h1>
            <p className="text-sm sm:text-base text-stone-300 max-w-xl font-light leading-relaxed">
              Explore timeless Vedic sanctums, synthesize personalized pilgrimages with senior-friendly pacing, and synchronize with auspicious Muhurats.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                id="btn-hero-view-planner"
                onClick={onOpenPlanner || onOpenAskAi}
                className="px-8 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 text-[10px] uppercase tracking-[0.2em] font-bold hover:from-amber-400 hover:to-orange-400 shadow-lg shadow-orange-500/25 border border-amber-300/50 transition-all"
              >
                Plan Pilgrimage
              </button>
              <button
                id="btn-hero-ask-ai"
                onClick={onOpenAskAi}
                className="px-8 py-3.5 bg-amber-500/10 text-amber-200 text-[10px] uppercase tracking-[0.2em] font-medium border border-amber-500/40 hover:bg-amber-500/20 hover:border-amber-400 hover:text-white transition-all flex items-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Spiritual Concierge</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Bottom Specifications Bar */}
          <div className="z-10 pt-8 border-t border-amber-900/30 flex flex-wrap items-center justify-between gap-4 text-[10px] uppercase tracking-[0.25em] text-amber-300/70 font-mono">
            <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span> 150+ Sanctums Mapped</div>
            <div>•</div>
            <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span> 12 Jyotirlingas</div>
            <div>•</div>
            <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span> Brahma Muhurat Calibrated</div>
          </div>
        </div>

        {/* Right Column: Technical Specification & Planning Module (4 Cols) */}
        <div className="lg:col-span-4 bg-[#191310] p-8 sm:p-10 flex flex-col justify-between border-l border-amber-900/20">
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-amber-900/30 pb-4">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-amber-400">Yatra Configuration</span>
              <span className="text-[10px] px-2 py-0.5 border border-amber-500/40 text-amber-300 font-mono bg-amber-500/10 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping"></span>
                LIVE AI
              </span>
            </div>

            <form onSubmit={handleSearchSubmit} className="space-y-4">
              {/* Origin */}
              <div className="p-3 bg-[#0C0A09] border border-amber-900/40 focus-within:border-amber-400 transition-colors">
                <label className="text-[9px] uppercase tracking-[0.2em] text-amber-400/70 block">01 / Departing Point</label>
                <input
                  id="input-hero-origin"
                  type="text"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  placeholder="e.g. New Delhi, Mumbai"
                  className="w-full mt-1 bg-transparent text-xs text-stone-100 focus:outline-none placeholder-stone-500"
                />
              </div>

              {/* Destination */}
              <div className="p-3 bg-[#0C0A09] border border-amber-900/40 focus-within:border-amber-400 transition-colors">
                <label className="text-[9px] uppercase tracking-[0.2em] text-amber-400/70 block">02 / Target Sanctum</label>
                <input
                  id="input-hero-destination"
                  type="text"
                  value={destinationInput}
                  onChange={(e) => setDestinationInput(e.target.value)}
                  placeholder="e.g. Varanasi, Kedarnath"
                  className="w-full mt-1 bg-transparent text-xs text-stone-100 focus:outline-none placeholder-stone-500"
                />
              </div>

              {/* Travel Dates */}
              <div className="p-3 bg-[#0C0A09] border border-amber-900/40 focus-within:border-amber-400 transition-colors">
                <label className="text-[9px] uppercase tracking-[0.2em] text-amber-400/70 block">03 / Window</label>
                <input
                  id="input-hero-dates"
                  type="text"
                  value={travelDates}
                  onChange={(e) => setTravelDates(e.target.value)}
                  placeholder="e.g. Nov 12 - Nov 16"
                  className="w-full mt-1 bg-transparent text-xs text-stone-100 focus:outline-none placeholder-stone-500"
                />
              </div>

              {/* Travelers */}
              <div className="p-3 bg-[#0C0A09] border border-amber-900/40 focus-within:border-amber-400 transition-colors">
                <label className="text-[9px] uppercase tracking-[0.2em] text-amber-400/70 block">04 / Devotees & Pacing</label>
                <input
                  id="input-hero-travelers"
                  type="text"
                  value={travelers}
                  onChange={(e) => setTravelers(e.target.value)}
                  placeholder="e.g. 2 Adults, Senior Friendly"
                  className="w-full mt-1 bg-transparent text-xs text-stone-100 focus:outline-none placeholder-stone-500"
                />
              </div>

              <button
                id="btn-hero-plan-submit"
                type="submit"
                className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 text-[10px] uppercase tracking-[0.2em] font-bold hover:from-amber-400 hover:to-orange-400 shadow-md shadow-orange-500/20 transition-all flex items-center justify-center gap-2"
              >
                <span>Synthesize Itinerary</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

          {/* Quick Select Grid */}
          <div className="pt-6 border-t border-amber-900/30 mt-6">
            <div className="text-[9px] uppercase tracking-[0.3em] text-amber-400/70 mb-3 font-mono">Popular Pilgrimages</div>
            <div className="grid grid-cols-3 gap-1.5 text-[10px]">
              {[
                { name: 'Varanasi', color: 'hover:border-amber-400 hover:text-amber-300' },
                { name: 'Kedarnath', color: 'hover:border-sky-400 hover:text-sky-300' },
                { name: 'Rameshwaram', color: 'hover:border-teal-400 hover:text-teal-300' },
                { name: 'Ayodhya', color: 'hover:border-orange-400 hover:text-orange-300' },
                { name: 'Rishikesh', color: 'hover:border-emerald-400 hover:text-emerald-300' },
                { name: 'Madurai', color: 'hover:border-rose-400 hover:text-rose-300' },
              ].map(({ name, color }) => (
                <button
                  key={name}
                  type="button"
                  onClick={() => handleQuickChip(name)}
                  className={`p-2 border border-amber-900/40 bg-[#0C0A09] text-left text-stone-300 transition-colors uppercase tracking-wider text-[9px] ${color}`}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

