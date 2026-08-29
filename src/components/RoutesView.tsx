import React, { useState } from 'react';
import { MapPin, Sparkles, Clock, Compass, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SacredRoute, Destination } from '../types';

interface RoutesViewProps {
  routes: SacredRoute[];
  onOpenPlannerForRoute: (route: SacredRoute) => void;
  onSelectDestination: (dest: Destination) => void;
  destinations: Destination[];
}

export const RoutesView: React.FC<RoutesViewProps> = ({
  routes,
  onOpenPlannerForRoute,
  onSelectDestination,
  destinations,
}) => {
  const [selectedRouteId, setSelectedRouteId] = useState(routes[0]?.id || 'char-dham-circuit');
  const activeRoute = routes.find(r => r.id === selectedRouteId) || routes[0];

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-amber-400">
          <div className="w-1.5 h-1.5 bg-amber-400 rotate-45"></div>
          <span>Circuit Progressions & Parikramas</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-light text-stone-100">
          Sacred Pilgrimage Circuits
        </h1>
        <p className="text-xs text-stone-300 max-w-xl mx-auto font-mono uppercase tracking-wider">
          Multi-sanctum circuits organized by geographic continuity, spiritual harmony, and pacing parameters.
        </p>

        {/* Route Selector Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap pt-2">
          {routes.map((r) => (
            <button
              key={r.id}
              onClick={() => setSelectedRouteId(r.id)}
              className={`px-4 py-2 text-[10px] uppercase tracking-[0.15em] font-medium transition-all ${
                selectedRouteId === r.id
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 font-bold shadow-sm shadow-orange-500/30'
                  : 'border border-amber-500/20 bg-[#140F0D] text-stone-300 hover:text-white hover:border-amber-400'
              }`}
            >
              {r.title}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Route Hero Showcase */}
      {activeRoute && (
        <div className="bg-[#140F0D] border border-amber-900/30 relative overflow-hidden shadow-2xl">
          <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-amber-500/40"></div>
          <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-amber-500/40"></div>
          <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-amber-500/40"></div>
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-amber-500/40"></div>

          {/* Banner */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-stone-950">
            <img
              src={activeRoute.imageUrl}
              alt={activeRoute.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#140F0D] via-black/50 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2 font-mono text-[9px] uppercase tracking-widest">
                  <span className="px-2.5 py-0.5 bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 font-bold">
                    {activeRoute.totalDays}
                  </span>
                  <span className="px-2.5 py-0.5 bg-black/70 border border-amber-500/30 text-amber-200">
                    {activeRoute.stopsCount} Sacred Stops
                  </span>
                  <span className="px-2.5 py-0.5 border border-amber-500/30 bg-black/50 text-amber-300">
                    {activeRoute.difficulty} Pace
                  </span>
                </div>
                <h2 className="font-serif text-2xl sm:text-4xl font-light text-white">
                  {activeRoute.title}
                </h2>
                <p className="text-xs text-amber-300/80 font-mono">
                  {activeRoute.subtitle}
                </p>
              </div>

              <button
                onClick={() => onOpenPlannerForRoute(activeRoute)}
                className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 text-[10px] uppercase tracking-[0.2em] font-bold hover:from-amber-400 hover:to-orange-400 shadow-md shadow-orange-500/20 transition-all flex items-center justify-center gap-2 self-start sm:self-auto"
              >
                <span>Synthesize Full Route</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Route Content Grid */}
          <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left: Stops Timeline */}
            <div className="lg:col-span-7 bg-[#0C0A09] border border-amber-900/30 p-6 space-y-6">
              <div className="flex items-center justify-between border-b border-amber-900/30 pb-3">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-amber-400">Progression Sequence</span>
                <span className="text-[9px] font-mono text-amber-400/70">{activeRoute.stops.length} STAGES</span>
              </div>

              <div className="space-y-4 relative before:absolute before:left-[15px] before:top-4 before:bottom-4 before:w-px before:bg-amber-500/30">
                {activeRoute.stops.map((stop, i) => (
                  <div key={i} className="flex items-start gap-4 relative">
                    <div className="w-8 h-8 border border-amber-500/40 bg-[#140F0D] flex items-center justify-center shrink-0 text-[10px] font-mono font-bold text-amber-300 z-10">
                      0{stop.day}
                    </div>
                    <div className="space-y-1 bg-[#140F0D] p-4 border border-amber-900/30 flex-1 hover:border-amber-500/40 transition-colors">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-amber-200">
                          Stage {stop.day}: {stop.name}
                        </h4>
                        {stop.altitude && (
                          <span className="text-[9px] px-2 py-0.5 border border-amber-500/20 bg-amber-950/40 text-amber-300 font-mono">
                            Alt: {stop.altitude}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-stone-300 leading-relaxed font-light">
                        {stop.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Key Highlights & Logistics */}
            <div className="lg:col-span-5 bg-[#0C0A09] border border-amber-900/30 p-6 space-y-6 flex flex-col justify-between">
              {/* Highlights Box */}
              <div className="space-y-4">
                <div className="border-b border-amber-900/30 pb-3">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-amber-400">Circuit Highlights</span>
                </div>
                <div className="space-y-2">
                  {activeRoute.highlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-stone-200 font-light">
                      <div className="w-1.5 h-1.5 bg-amber-400 rotate-45 mt-1.5 shrink-0"></div>
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Transit & Season Box */}
              <div className="space-y-4 pt-4 border-t border-amber-900/30">
                <div className="border-b border-amber-900/30 pb-2">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-amber-400">Travel Logistics Matrix</span>
                </div>
                <div className="space-y-2 text-xs font-mono text-stone-300">
                  <div className="p-3 border border-amber-900/30 bg-[#140F0D]">
                    <span className="text-[9px] uppercase tracking-wider text-amber-400 block mb-0.5">Transport Mode:</span>
                    <span className="text-stone-100">{activeRoute.transportMode}</span>
                  </div>
                  <div className="p-3 border border-amber-900/30 bg-[#140F0D]">
                    <span className="text-[9px] uppercase tracking-wider text-amber-400 block mb-0.5">Optimal Window:</span>
                    <span className="text-stone-100">{activeRoute.season}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

