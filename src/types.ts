export type NavigationTab = 'home' | 'explore' | 'dashboard' | 'festivals' | 'routes';
export type NavTab = NavigationTab;

export interface Destination {
  id: string;
  name: string;
  subtitle: string;
  state: string;
  category: 'Jyotirlinga' | 'Shakti Peetha' | 'Char Dham' | 'Heritage' | 'Ashram' | 'Sangam';
  rating: number;
  reviewsCount: number;
  duration: string;
  distanceFromAirport: string;
  description: string;
  fullStory: string;
  imageUrl: string;
  bannerUrl?: string;
  tags: string[];
  bestTimeToVisit: string;
  timings: string;
  dressCode: string;
  seniorFriendly: boolean;
  wheelchairAccessible: boolean;
  audioGuideAvailable: boolean;
  significance: string[];
  rituals: string[];
  crowdLevel: 'Low' | 'Moderate' | 'High' | 'Very High' | 'Peak';
  budgetEstimate: {
    budget: { amount: string; description: string };
    comfort: { amount: string; description: string };
    premium: { amount: string; description: string };
  };
  sampleItinerary: {
    day: number;
    title: string;
    description: string;
    activities: {
      time: string;
      title: string;
      description: string;
      tag: string;
    }[];
  }[];
  packingChecklist: string[];
}

export interface UpcomingTrip {
  id: string;
  destinationId: string;
  destinationName: string;
  location: string;
  dates: string;
  daysAway: number;
  imageUrl: string;
  status: 'Confirmed' | 'Planning' | 'Completed';
  travelers: string;
  budgetTier: 'Budget' | 'Comfort' | 'Premium';
  seniorFriendly: boolean;
  familyMode: boolean;
  notes: string;
  schedule: {
    day: number;
    date: string;
    title: string;
    highlights: string[];
  }[];
}

export interface SpiritualCalendarEvent {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  month: string;
  day: string;
  crowdLevel: 'Low' | 'Moderate' | 'High' | 'Peak';
  type: 'Mahotsav' | 'Purnima' | 'Jayanti' | 'Ekadashi' | 'Mela';
  badgeText: string;
  description: string;
  location: string;
  recommendedRituals: string[];
  muhurat: string;
}

export interface SacredRoute {
  id: string;
  title: string;
  subtitle: string;
  totalDays: string;
  stopsCount: number;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  season: string;
  imageUrl: string;
  stops: {
    name: string;
    day: number;
    description: string;
    altitude?: string;
  }[];
  highlights: string[];
  transportMode: string;
}

export interface DailySloka {
  id: string;
  sanskrit: string;
  transliteration: string;
  translation: string;
  source: string;
  deity: string;
  significance: string;
}

export interface AiChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  suggestions?: string[];
  quickActions?: { label: string; action: () => void }[];
}
