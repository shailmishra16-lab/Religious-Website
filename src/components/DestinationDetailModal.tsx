import React, { useState } from 'react';
import { 
  X, Star, MapPin, Clock, Heart, Volume2, ShieldCheck, 
  Sparkles, CheckCircle2, ChevronRight, UserCheck, 
  HeartHandshake, Share2, Printer, Compass, Flame, Info
} from 'lucide-react';
import { Destination } from '../types';

interface DestinationDetailModalProps {
  destination: Destination | null;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onOpenPlanner: (dest: Destination, options?: any) => void;
  onOpenAskAi: (promptContext?: string) => void;
}

export const DestinationDetailModal: React.FC<DestinationDetailModalProps> = ({
  destination,
  onClose,
  isFavorite,
  onToggleFavorite,
  onOpenPlanner,
  onOpenAskAi,
}) => {
  if (!destination) return null;

  const [activeTab, setActiveTab] = useState<'overview' | 'itinerary' | 'rituals' | 'practical'>('overview');
  const [budgetTier, setBudgetTier] = useState<'budget' | 'comfort' | 'premium'>('comfort');
  const [selectedDay, setSelectedDay] = useState(1);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const toggleCheck = (item: string) => {
    setCheckedItems(prev => ({ ...prev, [item]: !prev[item] }));
  };

  const handlePlayAudio = () => {
    setIsPlayingAudio(!isPlayingAudio);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-[#140F0D] text-stone-100 border border-amber-900/40 my-auto overflow-hidden shadow-2xl">
        <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-amber-500/50"></div>
        <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-amber-500/50"></div>
        <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-amber-500/50"></div>
        <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-amber-500/50"></div>

        {/* Sticky Top Close & Actions Bar */}
        <div className="sticky top-0 z-30 bg-[#140F0D]/95 backdrop-blur-md border-b border-amber-900/30 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 border border-amber-500/40 bg-amber-500/10 text-amber-300 text-[9px] uppercase font-mono tracking-widest">
              {destination.category}
            </span>
            <span className="text-[10px] uppercase font-mono text-amber-200/70 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-amber-400" />
              {destination.state}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleFavorite(destination.id)}
              className={`p-2 border transition-all ${
                isFavorite
                  ? 'bg-rose-500 text-white border-rose-400 shadow-sm shadow-rose-500/30'
                  : 'bg-black/60 text-stone-300 border-amber-500/30 hover:border-amber-400 hover:text-white'
              }`}
              title={isFavorite ? 'Saved to Favorites' : 'Save to Favorites'}
            >
              <Heart className={`w-3.5 h-3.5 ${isFavorite ? 'fill-white' : ''}`} />
            </button>

            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: destination.name,
                    text: destination.description,
                    url: window.location.href,
                  }).catch(() => {});
                } else {
                  alert('Link copied to clipboard!');
                }
              }}
              className="p-2 border border-amber-500/30 hover:border-amber-400 text-amber-200/80 hover:text-white transition-colors"
              title="Share guide"
            >
              <Share2 className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={onClose}
              className="p-2 border border-amber-500/30 hover:border-amber-400 text-amber-200/80 hover:text-white transition-colors"
              title="Close modal"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Hero Banner with Audio Guide */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-stone-950">
          <img
            src={destination.bannerUrl || destination.imageUrl}
            alt={destination.name}
            className="w-full h-full object-cover brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#140F0D] via-stone-950/30 to-black/30" />

          {/* Banner Details */}
          <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-amber-300">
                <div className="flex items-center gap-1 border border-amber-500/40 px-2 py-0.5 bg-black/70">
                  <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                  <span className="text-amber-300 font-bold">{destination.rating}</span>
                  <span className="text-stone-400">({destination.reviewsCount.toLocaleString()})</span>
                </div>
                <span>•</span>
                <span className="text-stone-200">{destination.duration} REC</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl font-light tracking-tight text-white">
                {destination.name}
              </h1>
              <p className="text-xs text-amber-200/90 font-mono">
                {destination.subtitle}
              </p>
            </div>

            {/* Audio Guide Player Box */}
            <div className="bg-[#140F0D]/95 border border-amber-500/40 p-2.5 flex items-center gap-3 backdrop-blur-md">
              <button
                onClick={handlePlayAudio}
                className={`w-8 h-8 border flex items-center justify-center transition-all ${
                  isPlayingAudio
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 border-amber-400 animate-pulse font-bold'
                    : 'bg-black text-amber-300 border-amber-500/30 hover:border-amber-400'
                }`}
                title="Play Audio Chanting & Guide"
              >
                <Volume2 className="w-4 h-4" />
              </button>
              <div className="text-left font-mono">
                <div className="text-[10px] uppercase tracking-wider text-amber-300 flex items-center gap-1.5 font-bold">
                  <span>Vedic Audio Spec</span>
                  {isPlayingAudio && <span className="w-1.5 h-1.5 bg-amber-400 animate-ping" />}
                </div>
                <div className="text-[9px] text-stone-400">
                  {isPlayingAudio ? 'Transmitting Chants & History...' : 'Sacred Mantras & Lore (18m)'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="border-b border-amber-900/30 bg-[#0C0A09] px-6">
          <div className="flex items-center gap-6 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-3.5 text-[10px] uppercase tracking-[0.2em] font-medium whitespace-nowrap border-b-2 transition-all ${
                activeTab === 'overview'
                  ? 'border-amber-400 text-amber-300 font-bold'
                  : 'border-transparent text-stone-400 hover:text-stone-200'
              }`}
            >
              The Sacred Essence
            </button>
            <button
              onClick={() => setActiveTab('itinerary')}
              className={`py-3.5 text-[10px] uppercase tracking-[0.2em] font-medium whitespace-nowrap border-b-2 transition-all flex items-center gap-1.5 ${
                activeTab === 'itinerary'
                  ? 'border-amber-400 text-amber-300 font-bold'
                  : 'border-transparent text-stone-400 hover:text-stone-200'
              }`}
            >
              <Sparkles className="w-3 h-3 text-amber-400" />
              AI Itinerary (3 Days)
            </button>
            <button
              onClick={() => setActiveTab('rituals')}
              className={`py-3.5 text-[10px] uppercase tracking-[0.2em] font-medium whitespace-nowrap border-b-2 transition-all ${
                activeTab === 'rituals'
                  ? 'border-amber-400 text-amber-300 font-bold'
                  : 'border-transparent text-stone-400 hover:text-stone-200'
              }`}
            >
              Rituals & Sanctum Etiquette
            </button>
            <button
              onClick={() => setActiveTab('practical')}
              className={`py-3.5 text-[10px] uppercase tracking-[0.2em] font-medium whitespace-nowrap border-b-2 transition-all ${
                activeTab === 'practical'
                  ? 'border-amber-400 text-amber-300 font-bold'
                  : 'border-transparent text-stone-400 hover:text-stone-200'
              }`}
            >
              Senior Comfort & Checklist
            </button>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[60vh] overflow-y-auto">
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: Story & Significance */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-3">
                  <h2 className="font-serif text-xl font-light text-stone-100">
                    Spiritual Origin & Significance
                  </h2>
                  <p className="text-xs text-stone-300 leading-relaxed font-light whitespace-pre-line">
                    {destination.fullStory}
                  </p>
                </div>

                {/* Key Pillars */}
                <div className="space-y-3 pt-2">
                  <h3 className="text-[10px] uppercase font-mono tracking-[0.2em] text-amber-400/80">
                    Sacred Highlights Matrix
                  </h3>
                  <div className="grid grid-cols-1 gap-px bg-amber-950/40">
                    {destination.significance.map((sig, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 bg-[#0C0A09] border border-amber-900/30 flex items-start gap-3"
                      >
                        <div className="w-5 h-5 border border-amber-500/40 bg-amber-500/10 text-amber-300 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-mono font-bold">
                          0{idx + 1}
                        </div>
                        <p className="text-xs text-stone-200 leading-relaxed font-light">
                          {sig}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Best Season & Timings */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-amber-950/40 pt-2">
                  <div className="p-4 bg-[#0C0A09] border border-amber-900/30 space-y-1">
                    <div className="flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-wider text-amber-400">
                      <Clock className="w-3 h-3 text-amber-400" />
                      <span>Best Season to Visit</span>
                    </div>
                    <p className="text-xs text-stone-200 font-mono">
                      {destination.bestTimeToVisit}
                    </p>
                  </div>

                  <div className="p-4 bg-[#0C0A09] border border-amber-900/30 space-y-1">
                    <div className="flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-wider text-amber-400">
                      <Flame className="w-3 h-3 text-amber-400" />
                      <span>Sanctum Timings</span>
                    </div>
                    <p className="text-xs text-stone-200 font-mono">
                      {destination.timings}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: AI Budget & Quick Booking Box */}
              <div className="lg:col-span-5 space-y-6">
                <div className="p-6 border border-amber-900/40 bg-[#0C0A09] space-y-5">
                  <div className="flex items-center justify-between border-b border-amber-900/30 pb-4">
                    <div>
                      <div className="text-[9px] uppercase tracking-[0.2em] font-mono text-amber-400">
                        AI Cost Calibration
                      </div>
                      <h4 className="font-serif text-lg font-light text-stone-100">
                        Budget Calibration
                      </h4>
                    </div>
                    <Sparkles className="w-4 h-4 text-amber-400" />
                  </div>

                  {/* Budget Selector Tabs */}
                  <div className="grid grid-cols-3 gap-px bg-amber-950/40">
                    {(['budget', 'comfort', 'premium'] as const).map((tier) => (
                      <button
                        key={tier}
                        type="button"
                        onClick={() => setBudgetTier(tier)}
                        className={`py-2 text-[10px] uppercase font-mono tracking-wider transition-all ${
                          budgetTier === tier
                            ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 font-bold'
                            : 'bg-[#140F0D] text-stone-400 hover:text-stone-200'
                        }`}
                      >
                        {tier}
                      </button>
                    ))}
                  </div>

                  {/* Selected Tier Details */}
                  <div className="p-4 border border-amber-900/30 bg-[#140F0D] space-y-2">
                    <div className="flex items-baseline justify-between font-mono">
                      <span className="text-[10px] text-amber-400/80 uppercase tracking-wider">Estimated 3-Day Cost</span>
                      <span className="text-lg font-bold text-amber-300">
                        {destination.budgetEstimate[budgetTier].amount}
                      </span>
                    </div>
                    <p className="text-xs text-stone-300 leading-relaxed font-light">
                      {destination.budgetEstimate[budgetTier].description}
                    </p>
                  </div>

                  {/* Quick CTAs */}
                  <div className="space-y-2 pt-2">
                    <button
                      onClick={() => onOpenPlanner(destination, { budgetTier })}
                      className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 font-bold text-[10px] uppercase tracking-[0.2em] hover:from-amber-400 hover:to-orange-400 transition-all flex items-center justify-center gap-2 shadow-md shadow-orange-500/20"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Generate Custom Route</span>
                    </button>

                    <button
                      onClick={() => onOpenAskAi(`Tell me more about VIP Darshan and elderly comfort in ${destination.name}`)}
                      className="w-full py-2.5 border border-amber-500/30 hover:border-amber-400 hover:bg-amber-500/10 text-amber-200 text-[10px] uppercase tracking-[0.2em] font-mono transition-all flex items-center justify-center gap-2"
                    >
                      <span>Query AI Concierge</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ITINERARY */}
          {activeTab === 'itinerary' && (
            <div className="space-y-6">
              {/* Day Switcher */}
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-2">
                {destination.sampleItinerary.map((day) => (
                  <button
                    key={day.day}
                    onClick={() => setSelectedDay(day.day)}
                    className={`px-4 py-2 text-[10px] uppercase tracking-[0.15em] font-mono transition-all ${
                      selectedDay === day.day
                        ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 font-bold'
                        : 'border border-amber-500/20 text-amber-200/70 hover:text-white hover:border-amber-400'
                    }`}
                  >
                    Day 0{day.day}: {day.title.split('&')[0]}
                  </button>
                ))}
              </div>

              {/* Day Details */}
              {destination.sampleItinerary
                .filter((d) => d.day === selectedDay)
                .map((day) => (
                  <div key={day.day} className="bg-[#0C0A09] border border-amber-900/30 p-6 sm:p-8 space-y-6">
                    <div className="border-b border-amber-900/30 pb-4">
                      <span className="text-[9px] uppercase tracking-[0.2em] font-mono text-amber-400">
                        Day 0{day.day} Sequence Breakdown
                      </span>
                      <h3 className="font-serif text-xl font-light text-stone-100 mt-0.5">
                        {day.title}
                      </h3>
                      <p className="text-xs text-stone-300 font-light mt-1">
                        {day.description}
                      </p>
                    </div>

                    {/* Timeline */}
                    <div className="space-y-4 relative before:absolute before:left-[15px] before:top-4 before:bottom-4 before:w-px before:bg-amber-500/30">
                      {day.activities.map((act, i) => (
                        <div key={i} className="flex items-start gap-4 relative">
                          <div className="w-8 h-8 border border-amber-500/40 bg-[#140F0D] flex items-center justify-center shrink-0 text-[9px] font-mono font-bold text-amber-300 z-10">
                            {act.time.split(' ')[0]}
                          </div>
                          <div className="space-y-1 bg-[#140F0D] p-4 border border-amber-900/30 flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="text-xs font-mono uppercase tracking-wider text-amber-200 font-bold">
                                {act.title}
                              </h4>
                              <span className="text-[9px] px-1.5 py-0.5 border border-amber-500/20 text-amber-300/80 bg-amber-950/40 font-mono">
                                {act.tag}
                              </span>
                            </div>
                            <p className="text-xs text-stone-300 leading-relaxed font-light">
                              {act.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 flex items-center justify-between border-t border-amber-900/30">
                      <button
                        onClick={() => onOpenPlanner(destination)}
                        className="text-[10px] uppercase tracking-[0.2em] font-mono text-amber-300 hover:text-white flex items-center gap-1 font-bold"
                      >
                        <Sparkles className="w-3 h-3 text-amber-400" />
                        <span>[CUSTOMIZE THIS DAY WITH AI]</span>
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          )}

          {/* TAB 3: RITUALS & ETIQUETTE */}
          {activeTab === 'rituals' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Sacred Rituals */}
              <div className="bg-[#0C0A09] border border-amber-900/30 p-6 space-y-4">
                <div className="flex items-center gap-2 text-amber-300">
                  <Flame className="w-4 h-4 text-orange-400" />
                  <h3 className="font-serif text-lg font-light text-stone-100">Recommended Rituals</h3>
                </div>
                <p className="text-xs text-stone-400">
                  Key spiritual practices consecrated for pilgrims visiting {destination.name}.
                </p>
                <div className="space-y-2">
                  {destination.rituals.map((r, i) => (
                    <div key={i} className="p-3 bg-[#140F0D] border border-amber-900/30 flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 bg-amber-400 rotate-45 mt-1.5 shrink-0"></div>
                      <span className="text-xs text-stone-200 font-light leading-relaxed">{r}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Temple Dress Code & Etiquette */}
              <div className="bg-[#0C0A09] border border-amber-900/30 p-6 space-y-4">
                <div className="flex items-center gap-2 text-amber-300">
                  <Info className="w-4 h-4 text-amber-400" />
                  <h3 className="font-serif text-lg font-light text-stone-100">Sanctum Guidelines</h3>
                </div>
                <div className="space-y-2 text-xs text-stone-300 font-light leading-relaxed">
                  <div className="p-3 bg-[#140F0D] border border-amber-900/30 space-y-1">
                    <strong className="text-amber-300 font-mono uppercase text-[9px] block">Dress Code:</strong>
                    <span>{destination.dressCode}</span>
                  </div>
                  <div className="p-3 bg-[#140F0D] border border-amber-900/30 space-y-1">
                    <strong className="text-amber-300 font-mono uppercase text-[9px] block">Footwear & Electronic Devices:</strong>
                    <span>Deposit phones, smart watches, and leather belts at official temple locker cloakrooms before queueing.</span>
                  </div>
                  <div className="p-3 bg-[#140F0D] border border-amber-900/30 space-y-1">
                    <strong className="text-amber-300 font-mono uppercase text-[9px] block">Photography Rules:</strong>
                    <span>Strictly prohibited inside inner sanctum sanctorum (Garbhagriha); permissible in outer courtyards.</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: ACCESSIBILITY & CHECKLIST */}
          {activeTab === 'practical' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Senior-Friendly Accessibility */}
              <div className="bg-[#0C0A09] border border-amber-900/30 p-6 space-y-4">
                <div className="flex items-center gap-2 text-amber-300">
                  <UserCheck className="w-4 h-4 text-amber-400" />
                  <h3 className="font-serif text-lg font-light text-stone-100">Senior Accessibility Matrix</h3>
                </div>
                <div className="space-y-2 text-xs font-mono text-stone-300">
                  <div className="flex items-center justify-between p-3 bg-[#140F0D] border border-amber-900/30">
                    <span>Wheelchair & Ramp Access</span>
                    <span className="px-2 py-0.5 border border-amber-500/30 bg-amber-950/40 text-amber-300 font-bold">
                      {destination.wheelchairAccessible ? 'Available' : 'Limited (Trek)'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-[#140F0D] border border-amber-900/30">
                    <span>VIP Sugam Darshan Queue</span>
                    <span className="px-2 py-0.5 border border-emerald-500/30 bg-emerald-950/40 text-emerald-300 font-bold">
                      Pre-bookable
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-[#140F0D] border border-amber-900/30">
                    <span>Electric Cart Shuttles</span>
                    <span className="px-2 py-0.5 border border-amber-500/30 bg-amber-950/40 text-amber-300 font-bold">
                      Available
                    </span>
                  </div>
                </div>
              </div>

              {/* Packing Checklist */}
              <div className="bg-[#0C0A09] border border-amber-900/30 p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-amber-300">
                    <ShieldCheck className="w-4 h-4 text-amber-400" />
                    <h3 className="font-serif text-lg font-light text-stone-100">Packing Matrix</h3>
                  </div>
                  <span className="text-[9px] font-mono text-amber-400/80">
                    {Object.values(checkedItems).filter(Boolean).length} / {destination.packingChecklist.length} CHECKED
                  </span>
                </div>
                <div className="space-y-1.5">
                  {destination.packingChecklist.map((item, i) => (
                    <div
                      key={i}
                      onClick={() => toggleCheck(item)}
                      className={`p-3 border transition-all cursor-pointer flex items-center justify-between ${
                        checkedItems[item]
                          ? 'bg-[#1A1411] border-amber-900/40 text-stone-500 line-through'
                          : 'bg-[#140F0D] border-amber-900/30 text-stone-200 hover:border-amber-500/40'
                      }`}
                    >
                      <span className="text-xs font-mono">{item}</span>
                      <CheckCircle2 className={`w-3.5 h-3.5 ${checkedItems[item] ? 'text-amber-400' : 'text-stone-600'}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Fixed CTA */}
        <div className="border-t border-amber-900/30 bg-[#0C0A09] px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-stone-400 text-center sm:text-left font-mono">
            Custom parameters required? Query YatraAI to synthesize a sacred path.
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => onOpenAskAi(`Give me personalized travel advice for ${destination.name}`)}
              className="flex-1 sm:flex-none px-4 py-2 border border-amber-500/30 hover:border-amber-400 hover:bg-amber-500/10 text-amber-200 text-[10px] uppercase tracking-[0.2em] font-mono transition-colors"
            >
              Ask AI Spec
            </button>
            <button
              onClick={() => onOpenPlanner(destination)}
              className="flex-1 sm:flex-none px-5 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 text-[10px] uppercase tracking-[0.2em] font-bold hover:from-amber-400 hover:to-orange-400 shadow-md shadow-orange-500/20 transition-all flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-3 h-3" />
              <span>Plan This Yatra</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

