
import React from 'react';
import { GAMES } from '../data.js';
import GameCard from '../components/GameCard.js';
import { Link } from 'react-router-dom';

const Favorites = ({ favorites, toggleFavorite }) => {
  const favoriteGames = GAMES.filter(game => favorites.includes(game.id));

  return (
    <div className="pb-12 space-y-8 min-h-[60vh]">
      <div className="flex items-center gap-4">
        <Link 
          to="/" 
          className="p-2 bg-slate-800 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </Link>
        <h1 className="text-3xl font-black text-white">My Favorites</h1>
      </div>

      {favoriteGames.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {favoriteGames.map(game => (
            <GameCard 
              key={game.id} 
              game={game} 
              isFavorite={true}
              toggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-32 bg-slate-800/10 rounded-3xl border border-dashed border-slate-700">
          <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mb-6">
            <svg className="w-10 h-10 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-white mb-2">No Favorites Yet</h2>
          <p className="text-slate-400 mb-8 max-w-xs text-center">
            Click the heart icon on any game to save it here for quick access later.
          </p>
          <Link 
            to="/" 
            className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/20"
          >
            Browse Games
          </Link>
        </div>
      )}
    </div>
  );
};

export default Favorites;
