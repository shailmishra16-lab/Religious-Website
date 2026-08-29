import React from 'react';
import { NavigationTab } from '../types';
import { Compass, Sparkles, MapPin, Calendar, Heart, Search, User } from 'lucide-react';

interface NavbarProps {
  currentTab?: NavigationTab;
  activeTab?: NavigationTab;
  onSelectTab?: (tab: NavigationTab) => void;
  setActiveTab?: (tab: NavigationTab) => void;
  onOpenAskAi: () => void;
  onOpenPlanner: () => void;
  favoritesCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  activeTab,
  onSelectTab,
  setActiveTab,
  onOpenAskAi,
  onOpenPlanner,
  favoritesCount = 0,
}) => {
  const current = currentTab || activeTab || 'home';
  const handleSelect = (tab: NavigationTab) => {
    if (onSelectTab) onSelectTab(tab);
    if (setActiveTab) setActiveTab(tab);
  };

  return (
    <>
      {/* Desktop & Tablet Top Navigation */}
      <header className="sticky top-0 z-40 w-full bg-[#0C0A09]/95 backdrop-blur-md border-b border-amber-900/30 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          {/* Logo & Geometric Emblem */}
          <div 
            id="brand-logo"
            onClick={() => handleSelect('home')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-7 h-7 border-2 border-amber-500 rotate-45 flex items-center justify-center group-hover:rotate-90 transition-transform duration-300 bg-amber-500/10">
              <div className="w-2 h-2 bg-gradient-to-tr from-amber-500 to-orange-500"></div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg tracking-tight text-white">YATRA<span className="text-amber-400">AI</span></span>
                <span className="text-[9px] uppercase font-mono tracking-widest px-1.5 py-0.5 border border-amber-500/30 text-amber-300/80 bg-amber-500/5">VEDIC PILGRIMAGE</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links with wide uppercase tracking */}
          <nav className="hidden md:flex items-center space-x-8 text-[11px] uppercase tracking-[0.25em] font-medium">
            <button
              id="nav-tab-home"
              onClick={() => handleSelect('home')}
              className={`transition-colors py-1 relative ${
                current === 'home'
                  ? 'text-amber-400 font-bold border-b-2 border-amber-500'
                  : 'text-stone-300 hover:text-amber-300'
              }`}
            >
              Overview
            </button>
            <button
              id="nav-tab-explore"
              onClick={() => handleSelect('explore')}
              className={`transition-colors py-1 relative flex items-center gap-1.5 ${
                current === 'explore'
                  ? 'text-amber-400 font-bold border-b-2 border-amber-500'
                  : 'text-stone-300 hover:text-amber-300'
              }`}
            >
              Explore
            </button>
            <button
              id="nav-tab-dashboard"
              onClick={() => handleSelect('dashboard')}
              className={`transition-colors py-1 relative flex items-center gap-1.5 ${
                current === 'dashboard'
                  ? 'text-amber-400 font-bold border-b-2 border-amber-500'
                  : 'text-stone-300 hover:text-amber-300'
              }`}
            >
              Pilgrimage Pass
            </button>
            <button
              id="nav-tab-festivals"
              onClick={() => handleSelect('festivals')}
              className={`transition-colors py-1 relative flex items-center gap-1.5 ${
                current === 'festivals'
                  ? 'text-amber-400 font-bold border-b-2 border-amber-500'
                  : 'text-stone-300 hover:text-amber-300'
              }`}
            >
              Tithis
            </button>
            <button
              id="nav-tab-routes"
              onClick={() => handleSelect('routes')}
              className={`transition-colors py-1 relative flex items-center gap-1.5 ${
                current === 'routes'
                  ? 'text-amber-400 font-bold border-b-2 border-amber-500'
                  : 'text-stone-300 hover:text-amber-300'
              }`}
            >
              Circuits
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              id="btn-ask-ai-nav"
              onClick={onOpenAskAi}
              className="px-4 py-2 border border-amber-500/40 bg-amber-500/5 text-amber-200 hover:text-white hover:border-amber-400 text-[10px] uppercase tracking-[0.2em] transition-all flex items-center gap-2"
              title="Ask AI Pilgrimage Concierge"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" />
              <span>AI Concierge</span>
            </button>

            <button
              id="btn-plan-yatra-nav"
              onClick={onOpenPlanner}
              className="hidden lg:flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 hover:from-amber-400 hover:to-orange-400 text-[10px] uppercase tracking-[0.2em] font-bold shadow-md shadow-orange-500/20 transition-all"
            >
              <span>Plan Yatra</span>
            </button>

            {favoritesCount > 0 && (
              <button
                id="btn-favorites-nav"
                onClick={() => handleSelect('dashboard')}
                className="relative p-2 border border-rose-500/30 bg-rose-500/10 text-rose-400 hover:border-rose-400 transition-colors"
                title={`${favoritesCount} Saved destinations`}
              >
                <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-rose-500 text-white text-[9px] font-bold flex items-center justify-center rounded-full">
                  {favoritesCount}
                </span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation Bar */}
      <nav aria-label="Mobile Navigation" className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0C0A09]/95 backdrop-blur-md border-t border-amber-900/30 px-2 py-2.5 flex items-center justify-around">
        <button
          id="mobile-nav-home"
          onClick={() => handleSelect('home')}
          className={`flex flex-col items-center gap-1 p-1 text-[10px] uppercase tracking-wider transition-colors ${
            current === 'home' ? 'text-amber-400 font-bold' : 'text-stone-400'
          }`}
        >
          <Compass className="w-4 h-4" />
          <span>Home</span>
        </button>
        <button
          id="mobile-nav-explore"
          onClick={() => handleSelect('explore')}
          className={`flex flex-col items-center gap-1 p-1 text-[10px] uppercase tracking-wider transition-colors ${
            current === 'explore' ? 'text-amber-400 font-bold' : 'text-stone-400'
          }`}
        >
          <Search className="w-4 h-4" />
          <span>Explore</span>
        </button>
        <button
          id="mobile-nav-ai"
          onClick={onOpenAskAi}
          className="flex flex-col items-center gap-1 -mt-4 p-2.5 bg-gradient-to-tr from-amber-500 to-orange-500 text-stone-950 border border-amber-300 shadow-lg shadow-orange-500/30 rounded-none"
        >
          <Sparkles className="w-4 h-4" />
        </button>
        <button
          id="mobile-nav-calendar"
          onClick={() => handleSelect('festivals')}
          className={`flex flex-col items-center gap-1 p-1 text-[10px] uppercase tracking-wider transition-colors ${
            current === 'festivals' ? 'text-amber-400 font-bold' : 'text-stone-400'
          }`}
        >
          <Calendar className="w-4 h-4" />
          <span>Tithis</span>
        </button>
        <button
          id="mobile-nav-dashboard"
          onClick={() => handleSelect('dashboard')}
          className={`flex flex-col items-center gap-1 p-1 text-[10px] uppercase tracking-wider transition-colors ${
            current === 'dashboard' ? 'text-amber-400 font-bold' : 'text-stone-400'
          }`}
        >
          <User className="w-4 h-4" />
          <span>Passes</span>
        </button>
      </nav>
    </>
  );
};

