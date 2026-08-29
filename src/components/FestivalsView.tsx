import React, { useState } from 'react';
import { Calendar, Sparkles, Clock, MapPin, Flame, CheckCircle2, ArrowRight } from 'lucide-react';
import { SpiritualCalendarEvent, Destination } from '../types';

interface FestivalsViewProps {
  events: SpiritualCalendarEvent[];
  onOpenPlannerForEvent: (event: SpiritualCalendarEvent) => void;
  destinations: Destination[];
  onSelectDestination: (dest: Destination) => void;
}

export const FestivalsView: React.FC<FestivalsViewProps> = ({
  events,
  onOpenPlannerForEvent,
  destinations,
  onSelectDestination,
}) => {
  const [filterType, setFilterType] = useState<string>('All');

  const filtered = events.filter((e) => {
    if (filterType === 'All') return true;
    return e.type === filterType;
  });

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-amber-400">
          <div className="w-1.5 h-1.5 bg-amber-400 rotate-45"></div>
          <span>Vedic Panchang & Muhurats</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-light text-stone-100">
          Spiritual Calendar & Sacred Tithis
        </h1>
        <p className="text-xs text-stone-300 max-w-xl mx-auto font-mono uppercase tracking-wider">
          Plan pilgrimages aligned with celestial transitions, temple mahotsavs, and consecrated bathing tithis.
        </p>

        {/* Filter Chips */}
        <div className="flex items-center justify-center gap-2 flex-wrap pt-2">
          {['All', 'Mahotsav', 'Purnima', 'Jayanti', 'Ekadashi'].map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-4 py-1.5 text-[10px] uppercase tracking-[0.15em] font-medium transition-all ${
                filterType === type
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 font-bold shadow-sm shadow-orange-500/30'
                  : 'border border-amber-500/20 bg-[#140F0D] text-stone-300 hover:text-white hover:border-amber-400'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((event) => (
          <div
            key={event.id}
            className="bg-[#140F0D] border border-amber-900/30 p-6 sm:p-8 flex flex-col justify-between hover:border-amber-500/40 hover:bg-[#1A1411] transition-all shadow-lg shadow-black/40"
          >
            <div className="space-y-4">
              {/* Event Header with Date Badge */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  {/* Calendar Date Block */}
                  <div className="w-14 h-14 border border-amber-500/40 bg-gradient-to-b from-amber-950/60 to-stone-950 text-amber-300 flex flex-col items-center justify-center shrink-0 shadow-inner">
                    <span className="text-[9px] font-mono uppercase tracking-wider text-amber-400/80">{event.month}</span>
                    <span className="text-xl font-mono font-bold leading-none text-white">{event.day}</span>
                  </div>
                  <div>
                    <span className="text-[9px] px-2.5 py-0.5 border border-amber-500/30 bg-amber-500/10 text-amber-300 font-mono uppercase font-bold">
                      {event.badgeText}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-light text-stone-100 mt-1 leading-tight">
                      {event.title}
                    </h3>
                  </div>
                </div>
              </div>

              <p className="text-xs text-amber-400 font-mono">
                {event.subtitle}
              </p>

              <p className="text-xs text-stone-300 leading-relaxed font-light">
                {event.description}
              </p>

              {/* Auspicious Muhurat & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-[#0C0A09] border border-amber-900/30 space-y-1">
                  <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-wider font-mono text-amber-400">
                    <Clock className="w-3 h-3 text-amber-400" />
                    <span>Auspicious Muhurat</span>
                  </div>
                  <p className="text-xs text-stone-200 font-mono">{event.muhurat}</p>
                </div>

                <div className="p-3 bg-[#0C0A09] border border-amber-900/30 space-y-1">
                  <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-wider font-mono text-amber-400">
                    <MapPin className="w-3 h-3 text-amber-400" />
                    <span>Prime Sanctums</span>
                  </div>
                  <p className="text-xs text-stone-200 font-mono">{event.location}</p>
                </div>
              </div>

              {/* Recommended Rituals */}
              <div className="space-y-2 pt-2">
                <span className="text-[9px] uppercase tracking-[0.2em] font-mono text-amber-400 flex items-center gap-1">
                  <Flame className="w-3 h-3 text-orange-400" />
                  <span>Consecrated Rituals</span>
                </span>
                <div className="space-y-1.5">
                  {event.recommendedRituals.map((r, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-stone-300 font-light">
                      <div className="w-1 h-1 bg-amber-400 rotate-45 shrink-0"></div>
                      <span>{r}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Action */}
            <div className="pt-6 border-t border-amber-900/30 mt-6 flex items-center justify-between">
              <span className="text-[9px] uppercase tracking-wider font-mono px-2.5 py-0.5 border border-amber-500/20 bg-amber-950/30 text-amber-300">
                {event.crowdLevel} Footfall Density
              </span>

              <button
                onClick={() => onOpenPlannerForEvent(event)}
                className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 text-[9px] uppercase tracking-[0.2em] font-bold hover:from-amber-400 hover:to-orange-400 shadow-md shadow-orange-500/20 transition-all flex items-center gap-1.5"
              >
                <span>Plan For Festival</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

