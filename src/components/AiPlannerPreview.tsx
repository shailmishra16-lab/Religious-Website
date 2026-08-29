import React, { useState } from 'react';
import { Sparkles, CheckCircle2, UserCheck, HeartHandshake, Shield, Clock, ArrowRight, Bot } from 'lucide-react';
import { Destination } from '../types';

interface AiPlannerPreviewProps {
  onOpenPlanner: () => void;
  onSelectDestination: (dest: Destination) => void;
  varanasiDest?: Destination;
}

export const AiPlannerPreview: React.FC<AiPlannerPreviewProps> = ({
  onOpenPlanner,
  onSelectDestination,
  varanasiDest,
}) => {
  const [seniorFriendly, setSeniorFriendly] = useState(true);
  const [familyMode, setFamilyMode] = useState(true);
  const [satvikDining, setSatvikDining] = useState(true);

  return (
    <section className="py-20 bg-[#0C0A09] border-y border-amber-900/30 text-stone-100 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/5 blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-amber-500/40 bg-amber-500/10 text-amber-300 text-[10px] font-mono uppercase tracking-[0.2em]">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>AI Itinerary Synthesis</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-stone-100 tracking-tight">
            Tailored for Every Devotee
          </h2>
          <p className="text-sm font-light text-stone-300">
            Every pilgrimage is unique. YatraAI dynamically calibrates walking distances, temple crowd muhurats, and rest breaks according to your sacred intent.
          </p>
        </div>

        {/* Two-Column Interactive AI Preview Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: AI Prompt & Filter Calibrations */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative bg-[#140F0D] p-6 sm:p-8 border border-amber-900/30 space-y-6 flex-1">
              <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-amber-500/40"></div>
              <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-amber-500/40"></div>

              {/* Simulated Prompt Box */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[10px] font-mono text-amber-400 uppercase tracking-[0.2em]">
                  <Bot className="w-3.5 h-3.5 text-amber-400" />
                  <span>Devotee Natural Language Input</span>
                </div>
                <div className="p-4 bg-[#0C0A09] border border-amber-900/40 text-xs text-stone-200 font-light flex items-start gap-3">
                  <div className="w-6 h-6 border border-amber-500/40 bg-amber-500/10 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-mono text-amber-300 font-bold">
                    P
                  </div>
                  <p className="leading-relaxed font-mono text-xs text-stone-200">
                    “Plan a 3-day quiet pilgrimage to <strong className="text-amber-300 font-bold underline decoration-amber-500/50 underline-offset-4">Varanasi</strong> for my 70-year-old parents. Minimize heavy stairs, book VIP Sugam darshan, and include satvik dining.”
                  </p>
                </div>
              </div>

              {/* Dynamic Preference Toggles */}
              <div className="space-y-3 pt-2">
                <div className="text-[10px] font-mono text-amber-400/80 uppercase tracking-[0.2em]">
                  Dynamic Constraint Calibrations
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-amber-950/40">
                  {/* Senior Mode */}
                  <button
                    type="button"
                    onClick={() => setSeniorFriendly(!seniorFriendly)}
                    className={`p-3 text-left transition-all flex flex-col justify-between border border-amber-900/30 ${
                      seniorFriendly
                        ? 'bg-gradient-to-tr from-amber-500 to-orange-500 text-stone-950 font-bold shadow-md shadow-orange-500/20'
                        : 'bg-[#0C0A09] text-stone-300 hover:text-white hover:bg-[#1A1411]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <UserCheck className="w-3.5 h-3.5" />
                      <CheckCircle2 className={`w-3.5 h-3.5 ${seniorFriendly ? 'text-stone-950' : 'opacity-20'}`} />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider">Senior Pacing</span>
                    <span className="text-[9px] opacity-80 mt-0.5 font-mono">E-rickshaw & ramps</span>
                  </button>

                  {/* Family Mode */}
                  <button
                    type="button"
                    onClick={() => setFamilyMode(!familyMode)}
                    className={`p-3 text-left transition-all flex flex-col justify-between border border-amber-900/30 ${
                      familyMode
                        ? 'bg-gradient-to-tr from-amber-500 to-orange-500 text-stone-950 font-bold shadow-md shadow-orange-500/20'
                        : 'bg-[#0C0A09] text-stone-300 hover:text-white hover:bg-[#1A1411]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <HeartHandshake className="w-3.5 h-3.5" />
                      <CheckCircle2 className={`w-3.5 h-3.5 ${familyMode ? 'text-stone-950' : 'opacity-20'}`} />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider">Family Pacing</span>
                    <span className="text-[9px] opacity-80 mt-0.5 font-mono">Spacious havelis</span>
                  </button>

                  {/* Satvik Meals */}
                  <button
                    type="button"
                    onClick={() => setSatvikDining(!satvikDining)}
                    className={`p-3 text-left transition-all flex flex-col justify-between border border-amber-900/30 ${
                      satvikDining
                        ? 'bg-gradient-to-tr from-amber-500 to-orange-500 text-stone-950 font-bold shadow-md shadow-orange-500/20'
                        : 'bg-[#0C0A09] text-stone-300 hover:text-white hover:bg-[#1A1411]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Shield className="w-3.5 h-3.5" />
                      <CheckCircle2 className={`w-3.5 h-3.5 ${satvikDining ? 'text-stone-950' : 'opacity-20'}`} />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider">Pure Satvik</span>
                    <span className="text-[9px] opacity-80 mt-0.5 font-mono">No onion/garlic</span>
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  id="btn-ai-preview-generate"
                  onClick={onOpenPlanner}
                  className="w-full sm:w-auto flex-1 px-5 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 font-mono text-[10px] uppercase font-bold tracking-[0.15em] hover:from-amber-400 hover:to-orange-400 shadow-md shadow-orange-500/20 transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Synthesize Custom Yatra</span>
                </button>
                {varanasiDest && (
                  <button
                    onClick={() => onSelectDestination(varanasiDest)}
                    className="w-full sm:w-auto px-4 py-3.5 bg-[#0C0A09] hover:bg-amber-500/10 border border-amber-500/30 text-amber-200 text-[10px] font-mono uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>View Varanasi Node</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Synthesized Itinerary Timeline Preview */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative bg-[#140F0D] border border-amber-900/30 p-6 sm:p-8 space-y-6 flex-1">
              <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-amber-500/40"></div>
              <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-amber-500/40"></div>

              {/* Header of Itinerary Card */}
              <div className="flex items-start justify-between border-b border-amber-900/30 pb-5">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-[9px] font-mono text-amber-400 uppercase tracking-[0.2em]">
                    <Clock className="w-3 h-3 text-amber-400" />
                    <span>AI Generated Schedule • Day 01</span>
                  </div>
                  <h3 className="font-serif text-2xl font-light text-stone-100 mt-1">
                    Arrival & Sunset Ganga Aarti
                  </h3>
                  <p className="text-xs font-mono text-amber-300/70 mt-0.5">
                    Optimized for: 2 Adults + 1 Senior • Minimal Stair Incline
                  </p>
                </div>
                <span className="px-2 py-0.5 border border-emerald-500/40 bg-emerald-950/40 text-emerald-300 text-[9px] font-mono uppercase tracking-widest">
                  98% Match
                </span>
              </div>

              {/* Timeline Items */}
              <div className="space-y-4">
                {/* Item 1 */}
                <div className="p-3.5 bg-[#0C0A09] border border-amber-900/40 flex items-start gap-4">
                  <div className="px-2.5 py-1 border border-amber-500/30 bg-amber-500/10 text-[10px] font-mono text-amber-300 shrink-0 font-bold">
                    07:00
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-xs font-mono text-stone-100 uppercase font-bold tracking-wider">
                        Riverside Haveli Check-In
                      </h4>
                      <span className="text-[8px] font-mono uppercase px-1.5 py-0.5 border border-amber-500/20 text-amber-300/80 bg-amber-950/30">
                        Ramp Access
                      </span>
                    </div>
                    <p className="text-xs text-stone-300 font-light leading-relaxed">
                      Direct Godowlia electric cart transfer to gate. Served fresh herbal ginger-tulsi decoction upon sacred arrival.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="p-3.5 bg-[#0C0A09] border border-amber-900/40 flex items-start gap-4">
                  <div className="px-2.5 py-1 border border-amber-500/30 bg-amber-500/10 text-[10px] font-mono text-amber-300 shrink-0 font-bold">
                    10:30
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-xs font-mono text-stone-100 uppercase font-bold tracking-wider">
                        Heritage Silk Weavers Guild
                      </h4>
                      <span className="text-[8px] font-mono uppercase px-1.5 py-0.5 border border-amber-500/20 text-amber-300/80 bg-amber-950/30">
                        Slow Pacing
                      </span>
                    </div>
                    <p className="text-xs text-stone-300 font-light leading-relaxed">
                      Shaded courtyard stroll through the master looms of Kashi with sitting demonstrations and satvik refreshments.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="p-3.5 bg-[#0C0A09] border border-amber-900/40 flex items-start gap-4">
                  <div className="px-2.5 py-1 border border-amber-500/30 bg-amber-500/10 text-[10px] font-mono text-amber-300 shrink-0 font-bold">
                    17:30
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-xs font-mono text-stone-100 uppercase font-bold tracking-wider">
                        Private River Boat & Front-Row Aarti
                      </h4>
                      <span className="text-[8px] font-mono uppercase px-1.5 py-0.5 border border-orange-500/30 text-orange-300 bg-orange-950/30">
                        VIP Reserved
                      </span>
                    </div>
                    <p className="text-xs text-stone-300 font-light leading-relaxed">
                      Reserved cushioned seating on sacred Ganga avoiding all shore crowds. Synchronized brass lamps glowing across 84 ghats.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-4 border-t border-amber-900/30 flex items-center justify-between">
                <div className="text-[10px] font-mono text-stone-400">
                  Day Budget: <strong className="text-amber-300 font-mono">₹4,200</strong> (All-inclusive VIP transit)
                </div>
                <button
                  onClick={onOpenPlanner}
                  className="text-[10px] font-mono uppercase tracking-wider text-amber-300 hover:text-white flex items-center gap-1 font-bold"
                >
                  <span>Customize Route</span>
                  <ArrowRight className="w-3 h-3 text-amber-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

