
import React from 'react';
import { Link } from 'react-router-dom';

const GameCard = ({ game, isFavorite, toggleFavorite }) => {
  return (
    <Link 
      to={`/game/${game.id}`}
      className="group relative flex flex-col bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-indigo-500 hover:bg-slate-800 transition-all duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={game.thumbnail} 
          alt={game.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <button className="w-full py-2 bg-indigo-600 text-white rounded-lg font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            Play Now
          </button>
        </div>
        
        {game.isHot && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
            Hot
          </div>
        )}

        <button 
          onClick={(e) => toggleFavorite(e, game.id)}
          className={`absolute top-2 right-2 p-1.5 rounded-full backdrop-blur-md transition-colors ${
            isFavorite ? 'bg-red-500 text-white' : 'bg-slate-900/40 text-white hover:bg-slate-900/60'
          }`}
        >
          <svg className="w-4 h-4" fill={isFavorite ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-bold text-slate-100 group-hover:text-indigo-400 transition-colors truncate">{game.title}</h3>
          <span className="text-[10px] text-slate-500 uppercase font-medium">{game.category}</span>
        </div>
        <p className="text-xs text-slate-400 line-clamp-2">{game.description}</p>
      </div>
    </Link>
  );
};

export default GameCard;
