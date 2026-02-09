
import React, { useState } from 'react';
import { GAMES, CATEGORIES } from '../data.js';
import GameCard from '../components/GameCard.js';

const Home = ({ searchQuery, favorites, toggleFavorite }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredGames = GAMES.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          game.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = activeCategory === 'All' || game.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-12 pb-12">
      {!searchQuery && activeCategory === 'All' && (
        <section className="relative h-[400px] rounded-3xl overflow-hidden group">
          <img 
            src="https://picsum.photos/seed/hero/1200/600" 
            className="w-full h-full object-cover"
            alt="Hero Background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent flex items-center p-8 md:p-16">
            <div className="max-w-lg">
              <span className="inline-block px-3 py-1 bg-indigo-600 rounded-full text-xs font-bold tracking-wider uppercase mb-4">
                Recommended for you
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight">
                UNLIMITED <br/>FUN AWAITS
              </h1>
              <p className="text-slate-300 text-lg mb-8">
                The fastest way to play your favorite web games. No downloads, no blocked sites.
              </p>
              <button className="px-8 py-3 bg-white text-slate-900 rounded-xl font-bold hover:bg-slate-100 transition-colors shadow-xl shadow-white/10">
                Explore Library
              </button>
            </div>
          </div>
        </section>
      )}

      <div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-2">
        <button
          onClick={() => setActiveCategory('All')}
          className={`px-6 py-2 rounded-full whitespace-nowrap text-sm font-semibold transition-all ${
            activeCategory === 'All' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
          }`}
        >
          All Games
        </button>
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full whitespace-nowrap text-sm font-semibold transition-all ${
              activeCategory === cat ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            {searchQuery ? `Search Results for "${searchQuery}"` : activeCategory === 'All' ? 'Popular Games' : activeCategory}
            <span className="text-sm font-normal text-slate-500">({filteredGames.length} items)</span>
          </h2>
        </div>

        {filteredGames.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGames.map(game => (
              <GameCard 
                key={game.id} 
                game={game} 
                isFavorite={favorites.includes(game.id)}
                toggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-slate-800/20 rounded-3xl border border-dashed border-slate-700">
            <svg className="mx-auto h-12 w-12 text-slate-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-slate-400 text-lg">No games found matching your criteria.</p>
          </div>
        )}
      </section>

      {!searchQuery && (
        <section className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="p-8 rounded-3xl bg-gradient-to-br from-indigo-900/40 to-slate-900 border border-indigo-500/20">
            <h3 className="text-xl font-bold mb-4 text-indigo-400">Why NovaArcade?</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                100% Unblocked in most networks
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                Curated list of high-quality HTML5 titles
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                Save your favorites locally
              </li>
            </ul>
          </div>
          <div className="p-8 rounded-3xl bg-slate-800/40 border border-slate-700">
            <h3 className="text-xl font-bold mb-4 text-white">Join the Community</h3>
            <p className="text-slate-400 mb-6">Want to request a game? Find a bug? Get in touch with us through our public repository or community channels.</p>
            <button className="px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors">Contact Support</button>
          </div>
        </section>
      )}
    </div>
  );
};

export default Home;
