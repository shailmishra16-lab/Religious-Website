import React, { useState, useEffect } from 'react';
import { Sparkles, MessageSquare } from 'lucide-react';
import { NavTab, Destination, UpcomingTrip } from './types';
import { 
  destinationsData, 
  upcomingTripsData, 
  dailySlokasData, 
  spiritualCalendarData, 
  sacredRoutesData 
} from './data/spiritualData';

import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ExploreBento } from './components/ExploreBento';
import { AiPlannerPreview } from './components/AiPlannerPreview';
import { DestinationGrid } from './components/DestinationGrid';
import { ExploreView } from './components/ExploreView';
import { DashboardView } from './components/DashboardView';
import { FestivalsView } from './components/FestivalsView';
import { RoutesView } from './components/RoutesView';
import { DestinationDetailModal } from './components/DestinationDetailModal';
import { AskAiModal } from './components/AskAiModal';
import { PlanYatraWizardModal } from './components/PlanYatraWizardModal';
import { Footer } from './components/Footer';

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavTab>('home');
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [isAskAiOpen, setIsAskAiOpen] = useState<boolean>(false);
  const [askAiPrompt, setAskAiPrompt] = useState<string | undefined>(undefined);
  const [isPlannerOpen, setIsPlannerOpen] = useState<boolean>(false);
  const [plannerDest, setPlannerDest] = useState<Destination | null>(null);
  
  // Local storage backed state
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('yatra_favorites');
      return saved ? JSON.parse(saved) : ['varanasi', 'kedarnath'];
    } catch {
      return ['varanasi', 'kedarnath'];
    }
  });

  const [upcomingTrips, setUpcomingTrips] = useState<UpcomingTrip[]>(() => {
    try {
      const saved = localStorage.getItem('yatra_trips');
      return saved ? JSON.parse(saved) : upcomingTripsData;
    } catch {
      return upcomingTripsData;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('yatra_favorites', JSON.stringify(favorites));
    } catch (e) {
      console.error(e);
    }
  }, [favorites]);

  useEffect(() => {
    try {
      localStorage.setItem('yatra_trips', JSON.stringify(upcomingTrips));
    } catch (e) {
      console.error(e);
    }
  }, [upcomingTrips]);

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const handleOpenAskAi = (prompt?: string) => {
    setAskAiPrompt(prompt);
    setIsAskAiOpen(true);
  };

  const handleOpenPlanner = (dest?: Destination | null) => {
    setPlannerDest(dest || null);
    setIsPlannerOpen(true);
  };

  const handleSaveTrip = (trip: UpcomingTrip) => {
    setUpcomingTrips(prev => [trip, ...prev]);
  };

  const varanasi = destinationsData.find(d => d.id === 'varanasi');

  return (
    <div className="min-h-screen bg-[#0C0A09] text-[#F5F5F4] flex flex-col selection:bg-orange-500 selection:text-white">
      {/* Top Sticky Navbar */}
      <Navbar
        currentTab={currentTab}
        activeTab={currentTab}
        setActiveTab={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onSelectTab={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenAskAi={() => handleOpenAskAi()}
        onOpenPlanner={() => handleOpenPlanner(null)}
        favoritesCount={favorites.length}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* VIEW 1: HOME LANDING */}
        {currentTab === 'home' && (
          <div className="space-y-0">
            {/* Screen 1 Top Hero with interactive planner */}
            <HeroSection
              onOpenPlanner={() => handleOpenPlanner(null)}
              onOpenAskAi={() => handleOpenAskAi()}
              onSelectDestination={(dest) => setSelectedDestination(dest)}
              destinations={destinationsData}
            />

            {/* Screen 1 Bento Grid Showcase: 12 Jyotirlingas, Daily Panchang, Senior AI, Vedic Music */}
            <ExploreBento
              onSelectCategory={(cat) => {
                setCurrentTab('explore');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onSelectDestination={(dest) => setSelectedDestination(dest)}
              destinations={destinationsData}
            />

            {/* AI Interactive Itinerary Synthesis Preview (Screen 1 & 2 Preview) */}
            <AiPlannerPreview
              onOpenPlanner={() => handleOpenPlanner(null)}
              onSelectDestination={(dest) => setSelectedDestination(dest)}
              varanasiDest={varanasi}
            />

            {/* Sacred Anchors of India Grid (Screen 8 & 1) */}
            <DestinationGrid
              destinations={destinationsData}
              onSelectDestination={(dest) => setSelectedDestination(dest)}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
              onOpenPlannerForDest={(dest) => handleOpenPlanner(dest)}
            />
          </div>
        )}

        {/* VIEW 2: EXPLORE / SEARCH (Screen 3) */}
        {currentTab === 'explore' && (
          <ExploreView
            destinations={destinationsData}
            onSelectDestination={(dest) => setSelectedDestination(dest)}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
            onOpenPlannerForDest={(dest) => handleOpenPlanner(dest)}
            onOpenAskAi={() => handleOpenAskAi()}
          />
        )}

        {/* VIEW 3: SPIRITUAL DASHBOARD & MY TRIPS (Screen 4) */}
        {currentTab === 'dashboard' && (
          <DashboardView
            upcomingTrips={upcomingTrips}
            onOpenPlanner={() => handleOpenPlanner(null)}
            onSelectDestination={(dest) => setSelectedDestination(dest)}
            destinations={destinationsData}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
            dailySlokas={dailySlokasData}
            calendarEvents={spiritualCalendarData}
          />
        )}

        {/* VIEW 4: SPIRITUAL CALENDAR & FESTIVALS */}
        {currentTab === 'festivals' && (
          <FestivalsView
            events={spiritualCalendarData}
            onOpenPlannerForEvent={(event) => {
              handleOpenPlanner(null);
            }}
            destinations={destinationsData}
            onSelectDestination={(dest) => setSelectedDestination(dest)}
          />
        )}

        {/* VIEW 5: SACRED ROUTES & CIRCUITS */}
        {currentTab === 'routes' && (
          <RoutesView
            routes={sacredRoutesData}
            onOpenPlannerForRoute={(route) => {
              handleOpenPlanner(null);
            }}
            destinations={destinationsData}
            onSelectDestination={(dest) => setSelectedDestination(dest)}
          />
        )}
      </main>

      {/* Floating AI Concierge FAB */}
      <button
        id="fab-ask-ai"
        onClick={() => handleOpenAskAi()}
        className="fixed bottom-6 right-6 z-40 px-5 py-3 bg-gradient-to-r from-orange-600 to-amber-500 text-stone-950 border border-amber-300/40 hover:border-amber-200 shadow-xl shadow-orange-600/30 hover:scale-105 transition-all duration-300 flex items-center gap-3 group text-[11px] uppercase tracking-[0.2em] font-bold"
        title="Ask YatraAI Concierge"
      >
        <Sparkles className="w-4 h-4 text-stone-950 animate-pulse" />
        <span className="hidden sm:inline">AI Concierge</span>
      </button>

      {/* MODAL 1: Destination Detail View (Screen 2) */}
      <DestinationDetailModal
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
        isFavorite={selectedDestination ? favorites.includes(selectedDestination.id) : false}
        onToggleFavorite={toggleFavorite}
        onOpenPlanner={(dest, options) => {
          setSelectedDestination(null);
          handleOpenPlanner(dest);
        }}
        onOpenAskAi={(prompt) => {
          setSelectedDestination(null);
          handleOpenAskAi(prompt);
        }}
      />

      {/* MODAL 2: Conversational Ask AI Assistant (Gemini Powered) */}
      <AskAiModal
        isOpen={isAskAiOpen}
        onClose={() => setIsAskAiOpen(false)}
        initialPrompt={askAiPrompt}
        onOpenPlanner={(destName) => {
          setIsAskAiOpen(false);
          const matched = destinationsData.find(d => d.name.toLowerCase().includes((destName || '').toLowerCase()));
          handleOpenPlanner(matched || null);
        }}
      />

      {/* MODAL 3: Full AI Pilgrimage Planner Wizard */}
      <PlanYatraWizardModal
        isOpen={isPlannerOpen}
        onClose={() => {
          setIsPlannerOpen(false);
          setPlannerDest(null);
        }}
        preselectedDest={plannerDest}
        onSaveTrip={handleSaveTrip}
      />

      {/* Footer */}
      <Footer
        onSelectNav={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onSelectDestination={(dest) => setSelectedDestination(dest)}
        destinations={destinationsData}
      />
    </div>
  );
}
