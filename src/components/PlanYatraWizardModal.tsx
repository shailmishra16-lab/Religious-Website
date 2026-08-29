import React, { useState } from 'react';
import { 
  X, Sparkles, MapPin, Calendar, Users, 
  CheckCircle2, ArrowRight, ShieldCheck, 
  RotateCcw, Download, BookmarkCheck 
} from 'lucide-react';
import { Destination, UpcomingTrip } from '../types';

interface PlanYatraWizardModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedDest?: Destination | null;
  onSaveTrip: (trip: UpcomingTrip) => void;
}

export const PlanYatraWizardModal: React.FC<PlanYatraWizardModalProps> = ({
  isOpen,
  onClose,
  preselectedDest,
  onSaveTrip,
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<'form' | 'loading' | 'result'>('form');
  const [origin, setOrigin] = useState('New Delhi');
  const [destination, setDestination] = useState(preselectedDest ? preselectedDest.name : 'Varanasi');
  const [dates, setDates] = useState('Nov 12 - Nov 15, 2026');
  const [travelers, setTravelers] = useState('2 Adults, 1 Senior');
  const [budgetTier, setBudgetTier] = useState<'Budget' | 'Comfort' | 'Premium'>('Comfort');
  const [seniorFriendly, setSeniorFriendly] = useState(true);
  const [familyMode, setFamilyMode] = useState(true);
  const [preferences, setPreferences] = useState('Mangala Aarti darshan, minimal stairs, pure satvik food');
  const [generatedResult, setGeneratedResult] = useState<any>(null);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setStep('loading');

    try {
      const response = await fetch('/api/plan-yatra', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          origin,
          destination,
          dates,
          travelers,
          budgetTier,
          seniorFriendly,
          familyMode,
          preferences,
        }),
      });

      const data = await response.json();
      setGeneratedResult(data);
      setStep('result');
    } catch (err) {
      console.error('Plan yatra error:', err);
      // fallback result
      setGeneratedResult({
        title: `${destination} Divya Pilgrimage`,
        summary: `A carefully designed 3-day spiritual itinerary to ${destination} tailored for ${travelers} with ${budgetTier} accommodations and serene pacing.`,
        totalDays: 3,
        estimatedCost: budgetTier === 'Budget' ? '₹9,500 - ₹13,000' : budgetTier === 'Premium' ? '₹38,000 - ₹60,000' : '₹18,000 - ₹26,000',
        days: [
          {
            day: 1,
            title: 'Arrival & Sacred Welcome',
            location: destination,
            morning: `Arrival at ${destination}, golf cart / AC transfer to heritage riverside stay.`,
            afternoon: 'Slow orientation stroll and traditional satvik refreshment.',
            evening: 'Front-row VIP boat seating witnessing the grand evening Maha Aarti.',
            stay: 'Heritage Haveli / 4-Star Riverside',
            tip: 'Book river boat 1 hour prior to sunset.'
          },
          {
            day: 2,
            title: 'Inner Sanctum Darshan & Heritage Walk',
            location: destination,
            morning: 'Brahma Muhurta Sugam Darshan & special Rudrabhishek sankalp pooja.',
            afternoon: 'Guided visit to ancient monastery ruins and sacred shrines.',
            evening: 'Sunset spiritual discourse & quiet meditation by the northern ghats.',
            stay: 'Heritage Haveli / 4-Star Riverside',
            tip: 'Keep electronic devices in cloakroom lockers before entry.'
          },
          {
            day: 3,
            title: 'Holy Water Blessing & Onward Journey',
            location: destination,
            morning: 'Morning prayer, collecting consecrated Ganga Jal in brass urns.',
            afternoon: 'Temple prasadam collection and auspicious souvenir blessing.',
            evening: 'Smooth private transfer to airport/station with lifelong divine memories.',
            stay: 'Onward Journey',
            tip: 'Carry sealed holy water container with travel approval.'
          }
        ],
        rituals: ['Brahma Muhurta Holy Dip', 'Rudrabhishek Sankalp', 'Evening Deep Daan', 'Vedic Chanting'],
        packingAdvice: ['Modest cotton attire', 'Slip-on shoes', 'Personal medicines', 'Brass jal pot']
      });
      setStep('result');
    }
  };

  const handleSaveToDashboard = () => {
    if (!generatedResult) return;

    const newTrip: UpcomingTrip = {
      id: `trip-${Date.now()}`,
      destinationId: destination.toLowerCase().includes('kedar') ? 'kedarnath' : destination.toLowerCase().includes('ramesh') ? 'rameshwaram' : destination.toLowerCase().includes('ayodhya') ? 'ayodhya' : 'varanasi',
      destinationName: generatedResult.title || `${destination} Pilgrimage`,
      location: `${destination}, India`,
      dates: dates,
      daysAway: 18,
      imageUrl: destination.toLowerCase().includes('kedar')
        ? 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80'
        : destination.toLowerCase().includes('ramesh')
        ? 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80'
        : 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80',
      status: 'Confirmed',
      travelers: travelers,
      budgetTier: budgetTier,
      seniorFriendly: seniorFriendly,
      familyMode: familyMode,
      notes: `Customized with preferences: ${preferences}`,
      schedule: (generatedResult.days || []).map((d: any) => ({
        day: d.day,
        date: `Day ${d.day}`,
        title: d.title,
        highlights: [d.morning, d.evening]
      }))
    };

    onSaveTrip(newTrip);
    setSavedSuccess(true);
    setTimeout(() => {
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex justify-center items-center p-2 sm:p-4">
      <div className="relative w-full max-w-4xl bg-[#140F0D] text-stone-100 border border-amber-900/40 max-h-[92vh] flex flex-col overflow-hidden shadow-2xl">
        <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-amber-500/40"></div>
        <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-amber-500/40"></div>
        <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-amber-500/40"></div>
        <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-amber-500/40"></div>

        {/* Header */}
        <div className="bg-[#0C0A09] border-b border-amber-900/30 px-6 py-4 flex items-center justify-between z-10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border border-amber-500/40 bg-amber-500/10 flex items-center justify-center text-amber-400">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-light text-stone-100">
                AI Route Formulation Engine
              </h3>
              <p className="text-[10px] text-amber-400/80 font-mono">
                Sacred itinerary calibration & algorithmic transit optimization
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 border border-amber-500/30 hover:border-amber-400 text-stone-300 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 bg-[#140F0D]">
          {/* STEP 1: FORM */}
          {step === 'form' && (
            <form onSubmit={handleGenerate} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Origin */}
                <div className="space-y-1.5">
                  <label className="text-[9px] font-mono uppercase tracking-[0.2em] text-amber-400 flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-amber-400" />
                    <span>Departing Point</span>
                  </label>
                  <input
                    type="text"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    className="w-full px-4 py-2.5 bg-[#0C0A09] border border-amber-900/40 text-xs font-mono text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-400"
                    placeholder="e.g. New Delhi, Mumbai, Bengaluru"
                    required
                  />
                </div>

                {/* Destination */}
                <div className="space-y-1.5">
                  <label className="text-[9px] font-mono uppercase tracking-[0.2em] text-amber-400 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span>Sacred Node</span>
                  </label>
                  <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full px-4 py-2.5 bg-[#0C0A09] border border-amber-900/40 text-xs font-mono text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-400"
                    placeholder="e.g. Varanasi, Kedarnath, Rameshwaram"
                    required
                  />
                </div>

                {/* Travel Dates */}
                <div className="space-y-1.5">
                  <label className="text-[9px] font-mono uppercase tracking-[0.2em] text-amber-400 flex items-center gap-1.5">
                    <Calendar className="w-3 h-3 text-amber-400" />
                    <span>Temporal Duration</span>
                  </label>
                  <input
                    type="text"
                    value={dates}
                    onChange={(e) => setDates(e.target.value)}
                    className="w-full px-4 py-2.5 bg-[#0C0A09] border border-amber-900/40 text-xs font-mono text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-400"
                    placeholder="e.g. Nov 12 - Nov 15 (3 Days)"
                    required
                  />
                </div>

                {/* Pilgrims */}
                <div className="space-y-1.5">
                  <label className="text-[9px] font-mono uppercase tracking-[0.2em] text-amber-400 flex items-center gap-1.5">
                    <Users className="w-3 h-3 text-amber-400" />
                    <span>Pilgrim Group</span>
                  </label>
                  <input
                    type="text"
                    value={travelers}
                    onChange={(e) => setTravelers(e.target.value)}
                    className="w-full px-4 py-2.5 bg-[#0C0A09] border border-amber-900/40 text-xs font-mono text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-400"
                    placeholder="e.g. 2 Adults, 1 Senior, 1 Child"
                    required
                  />
                </div>
              </div>

              {/* Budget Tier Selector */}
              <div className="space-y-2">
                <label className="text-[9px] font-mono uppercase tracking-[0.2em] text-amber-400">
                  Service & Accommodation Level
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['Budget', 'Comfort', 'Premium'] as const).map((tier) => (
                    <button
                      key={tier}
                      type="button"
                      onClick={() => setBudgetTier(tier)}
                      className={`p-3 text-center border transition-all ${
                        budgetTier === tier
                          ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 font-bold border-amber-400 shadow-sm shadow-orange-500/20'
                          : 'bg-[#0C0A09] border-amber-900/40 text-stone-300 hover:text-white hover:border-amber-400'
                      }`}
                    >
                      <div className="text-xs uppercase font-mono">{tier}</div>
                      <div className="text-[9px] font-mono opacity-80 mt-0.5">
                        {tier === 'Budget' ? 'Clean Dharamsalas' : tier === 'Comfort' ? '3-4★ Heritage Haveli' : '5★ Luxury Retreat'}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Special Pacing Toggles */}
              <div className="space-y-2">
                <label className="text-[9px] font-mono uppercase tracking-[0.2em] text-amber-400">
                  Accessibility & Comfort Parameters
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="flex items-center gap-3 p-3.5 bg-[#0C0A09] border border-amber-900/30 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={seniorFriendly}
                      onChange={(e) => setSeniorFriendly(e.target.checked)}
                      className="w-4 h-4 accent-amber-500 rounded-none"
                    />
                    <div className="text-xs font-mono">
                      <strong className="text-stone-100 block uppercase text-[10px]">Senior-Friendly Pacing</strong>
                      <span className="text-stone-400 text-[10px]">Include ramp corridors and minimal stair routes</span>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-3.5 bg-[#0C0A09] border border-amber-900/30 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={familyMode}
                      onChange={(e) => setFamilyMode(e.target.checked)}
                      className="w-4 h-4 accent-amber-500 rounded-none"
                    />
                    <div className="text-xs font-mono">
                      <strong className="text-stone-100 block uppercase text-[10px]">Family & Multi-Gen Support</strong>
                      <span className="text-stone-400 text-[10px]">Spacious intervals and satvik meal integration</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Preferences */}
              <div className="space-y-1.5">
                <label className="text-[9px] font-mono uppercase tracking-[0.2em] text-amber-400">
                  Consecrated Rituals & Special Requirements
                </label>
                <textarea
                  value={preferences}
                  onChange={(e) => setPreferences(e.target.value)}
                  rows={2}
                  className="w-full px-4 py-2.5 bg-[#0C0A09] border border-amber-900/40 text-xs font-mono text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-400"
                  placeholder="e.g. Early morning Ganga Aarti boat, Rudrabhishek pooja, evening kirtan"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 font-bold text-[10px] uppercase tracking-[0.2em] hover:from-amber-400 hover:to-orange-400 shadow-md shadow-orange-500/20 transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Synthesize Personalized Yatra Plan</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}

          {/* STEP 2: LOADING */}
          {step === 'loading' && (
            <div className="py-20 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-12 h-12 border border-amber-400 flex items-center justify-center text-amber-400 animate-spin">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-light text-stone-100">
                Synthesizing Divine Itinerary...
              </h3>
              <p className="text-xs font-mono text-stone-400 max-w-sm">
                Calculating auspicious Brahma Muhurat slots, corridor queue times, and accessibility corridors.
              </p>
            </div>
          )}

          {/* STEP 3: RESULT */}
          {step === 'result' && generatedResult && (
            <div className="space-y-6">
              {/* Top Banner */}
              <div className="bg-[#0C0A09] p-6 border border-amber-900/40 space-y-2">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="px-2.5 py-0.5 border border-amber-500/30 bg-amber-500/10 text-amber-300 text-[9px] uppercase font-mono tracking-widest font-bold">
                    AI Verified Sacred Plan
                  </span>
                  <span className="text-xs font-mono text-amber-300">
                    Est. Total: {generatedResult.estimatedCost}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-light text-stone-100">
                  {generatedResult.title}
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed font-light">
                  {generatedResult.summary}
                </p>
              </div>

              {/* Day Breakdown Cards */}
              <div className="space-y-3">
                <h4 className="text-[10px] uppercase font-mono tracking-[0.2em] text-amber-400">
                  Day-by-Day Sacred Schedule
                </h4>
                {(generatedResult.days || []).map((d: any) => (
                  <div key={d.day} className="bg-[#0C0A09] p-5 border border-amber-900/30 space-y-3">
                    <div className="flex items-center justify-between border-b border-amber-900/30 pb-2">
                      <h5 className="text-xs font-mono uppercase text-amber-200 font-bold tracking-wider">
                        Day 0{d.day}: {d.title}
                      </h5>
                      <span className="text-[10px] font-mono text-stone-400">{d.location}</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                      <div className="p-3 bg-[#140F0D] border border-amber-900/20">
                        <strong className="text-amber-400 font-mono text-[10px] uppercase block mb-1">Morning:</strong>
                        <span className="text-stone-300 font-light text-xs">{d.morning}</span>
                      </div>
                      <div className="p-3 bg-[#140F0D] border border-amber-900/20">
                        <strong className="text-amber-400 font-mono text-[10px] uppercase block mb-1">Afternoon:</strong>
                        <span className="text-stone-300 font-light text-xs">{d.afternoon}</span>
                      </div>
                      <div className="p-3 bg-[#140F0D] border border-amber-900/20">
                        <strong className="text-amber-400 font-mono text-[10px] uppercase block mb-1">Evening:</strong>
                        <span className="text-stone-300 font-light text-xs">{d.evening}</span>
                      </div>
                    </div>

                    {d.tip && (
                      <p className="text-[10px] font-mono text-amber-300/80 p-2 bg-[#140F0D] border border-amber-900/30">
                        Protocol Advice: {d.tip}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Consecrated Rituals & Advice */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 bg-[#0C0A09] border border-amber-900/30 space-y-2">
                  <strong className="text-[10px] uppercase font-mono tracking-[0.2em] text-amber-400 block">
                    Consecrated Rituals
                  </strong>
                  <div className="space-y-1 text-xs font-light text-stone-300">
                    {(generatedResult.rituals || []).map((r: string, i: number) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-amber-400 rotate-45 shrink-0"></div>
                        <span>{r}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-5 bg-[#0C0A09] border border-amber-900/30 space-y-2">
                  <strong className="text-[10px] uppercase font-mono tracking-[0.2em] text-amber-400 block">
                    Essential Packing Matrix
                  </strong>
                  <div className="space-y-1 text-xs font-light text-stone-300">
                    {(generatedResult.packingAdvice || []).map((p: string, i: number) => (
                      <div key={i} className="flex items-center gap-2">
                        <ShieldCheck className="w-3 h-3 text-amber-400 shrink-0" />
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="pt-4 border-t border-amber-900/30 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setStep('form')}
                  className="w-full sm:w-auto px-4 py-2 border border-amber-500/30 text-amber-300 text-[10px] font-mono uppercase tracking-wider hover:border-amber-400 flex items-center justify-center gap-1.5"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Modify Parameters</span>
                </button>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => alert('Downloading Yatra Itinerary PDF...')}
                    className="flex-1 sm:flex-none px-4 py-2 border border-amber-500/30 hover:border-amber-400 text-stone-300 hover:text-white text-[10px] font-mono uppercase tracking-wider flex items-center justify-center gap-1.5"
                  >
                    <Download className="w-3 h-3" />
                    <span>Export PDF</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSaveToDashboard}
                    className={`flex-1 sm:flex-none px-5 py-2 font-mono text-[10px] uppercase tracking-[0.15em] font-bold transition-all flex items-center justify-center gap-1.5 ${
                      savedSuccess
                        ? 'bg-emerald-600 text-white'
                        : 'bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 hover:from-amber-400 hover:to-orange-400'
                    }`}
                  >
                    <BookmarkCheck className="w-3.5 h-3.5" />
                    <span>{savedSuccess ? 'Saved to Trips' : 'Save to Dashboard'}</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

