import React from 'react';
import { ArrowUpRight, Landmark, Flame, Sparkles, Flower2 } from 'lucide-react';
import { Destination } from '../types';

interface ExploreBentoProps {
  onSelectCategory: (category: string) => void;
  onSelectDestination: (dest: Destination) => void;
  destinations: Destination[];
}

export const ExploreBento: React.FC<ExploreBentoProps> = ({
  onSelectCategory,
  onSelectDestination,
  destinations,
}) => {
  const categories = [
    {
      id: 'heritage',
      number: '01',
      title: 'Ancient Temples',
      subtitle: 'Living Sanctuaries of Stone',
      count: '150+ Shrines',
      description: 'Centuries of devotion sculpted in monolithic granite and pink sandstone, resonating with continuous daily chants.',
      tag: 'Heritage & Darshan',
      icon: Landmark,
      accentColor: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
      badgeColor: 'border-amber-500/30 text-amber-300 bg-amber-950/40',
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
      destId: 'madurai',
    },
    {
      id: 'jyotirlinga',
      number: '02',
      title: '12 Jyotirlingas',
      subtitle: 'Pillars of Infinite Light',
      count: '12 Holy Abodes',
      description: 'The supreme cosmic manifestation of Lord Shiva, from Kedarnath in snow peaks to seaside Rameshwaram.',
      tag: 'Shiva Supreme',
      icon: Flame,
      accentColor: 'text-orange-400 border-orange-500/30 bg-orange-500/10',
      badgeColor: 'border-orange-500/30 text-orange-300 bg-orange-950/40',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',
      destId: 'kedarnath',
    },
    {
      id: 'shakti',
      number: '03',
      title: 'Shakti Peethas',
      subtitle: 'Seats of Cosmic Energy',
      count: '51 Sacred Seats',
      description: 'Where the parts of Sati fell, radiating the supreme feminine power, maternal protection, and spiritual grace.',
      tag: 'Devi Shrines',
      icon: Sparkles,
      accentColor: 'text-rose-400 border-rose-500/30 bg-rose-500/10',
      badgeColor: 'border-rose-500/30 text-rose-300 bg-rose-950/40',
      image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80',
      destId: 'varanasi',
    },
    {
      id: 'ashram',
      number: '04',
      title: 'Meditation & Ashrams',
      subtitle: 'Sanctuaries of Inner Peace',
      count: '80+ Hermitages',
      description: 'Tranquil Himalayan riverbanks, Ayurvedic healing retreats, and sacred hermitages for profound silence.',
      tag: 'Inner Awakening',
      icon: Flower2,
      accentColor: 'text-teal-400 border-teal-500/30 bg-teal-500/10',
      badgeColor: 'border-teal-500/30 text-teal-300 bg-teal-950/40',
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
      destId: 'rishikesh',
    },
  ];

  const handleCardClick = (cat: typeof categories[0]) => {
    const dest = destinations.find(d => d.id === cat.destId);
    if (dest) {
      onSelectDestination(dest);
    } else {
      onSelectCategory(cat.title);
    }
  };

  return (
    <section className="py-14 sm:py-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header with Geometric Typography */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-amber-900/30 gap-4">
        <div>
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-amber-400 mb-1">
            <div className="w-1.5 h-1.5 bg-amber-400 rotate-45"></div>
            <span>Classification Matrix</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-light text-stone-100">
            Traditions & Sacred Classifications
          </h2>
        </div>

        <button
          onClick={() => onSelectCategory('all')}
          className="self-start md:self-auto text-[10px] uppercase tracking-[0.2em] font-medium text-amber-300 hover:text-white flex items-center gap-2 transition-colors border border-amber-500/30 px-4 py-2 hover:border-amber-400 hover:bg-amber-500/10"
        >
          <span>View All Sanctums</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Bento Grid with hairline dividers */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-amber-950/40">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <div
              key={cat.id}
              id={`bento-card-${cat.id}`}
              onClick={() => handleCardClick(cat)}
              className="group relative bg-[#140F0D] hover:bg-[#1C1512] cursor-pointer flex flex-col justify-between h-[380px] p-6 transition-all duration-300 overflow-hidden border border-amber-900/20 hover:border-amber-500/40"
            >
              {/* Corner brackets */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-amber-500/30 group-hover:border-amber-400 transition-colors"></div>
              <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-amber-500/30 group-hover:border-amber-400 transition-colors"></div>
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-amber-500/30 group-hover:border-amber-400 transition-colors"></div>
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-amber-500/30 group-hover:border-amber-400 transition-colors"></div>

              {/* Card Background Image with Vibrant Full Color & Rich Overlay */}
              <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0A09] via-[#0C0A09]/75 to-transparent" />
              </div>

              {/* Top Meta Badges */}
              <div className="relative z-10 flex items-center justify-between">
                <span className={`text-[10px] font-mono tracking-widest uppercase border px-2 py-0.5 ${cat.badgeColor}`}>
                  {cat.number} // {cat.count}
                </span>
                <div className="w-7 h-7 border border-amber-500/30 flex items-center justify-center text-amber-300 group-hover:border-amber-400 group-hover:text-stone-950 group-hover:bg-amber-400 transition-all">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Bottom Content */}
              <div className="relative z-10 space-y-2">
                <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-[0.2em] font-mono">
                  <span className={`p-1 border flex items-center gap-1 ${cat.accentColor}`}>
                    <Icon className="w-3 h-3" />
                    <span>{cat.tag}</span>
                  </span>
                </div>
                <h3 className="font-serif text-xl font-light text-stone-100 group-hover:text-amber-200 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-xs text-stone-300 line-clamp-2 leading-relaxed">
                  {cat.description}
                </p>
                <div className="pt-2 text-[9px] uppercase tracking-[0.2em] text-amber-400 font-mono flex items-center gap-1 group-hover:translate-x-1 transition-transform font-bold">
                  <span>Explore Pilgrimage</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

