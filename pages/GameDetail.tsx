
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { GAMES } from '../data.ts';

const GameDetail = () => {
  const { id } = useParams();
  const game = GAMES.find(g => g.id === id);
  const [isFullscreen, setIsFullscreen] = useState(false);

  if (!game) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <h2 className="text-2xl font-bold text-white mb-4">Game not found</h2>
        <Link to="/" className="text-indigo-400 hover:underline">Return to Home</Link>
      </div>
    );
  }

  const toggleFullscreen = () => {
    const frame = document.getElementById('game-frame');
    if (!frame) return;

    if (!document.fullscreenElement) {
      frame.requestFullscreen().catch(err => {
        alert(`Error attempting to enable full-screen mode: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <div className="pb-12 space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link 
            to="/" 
            className="p-2 bg-slate-800 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </Link>
          <div>
            <h1 className="text-3xl font-black text-white">{game.title}</h1>
            <div className="flex items-center gap-2 mt-1">
              <span className="px-2 py-0.5 bg-slate-800 text-slate-400 text-[10px] font-bold rounded uppercase">{game.category}</span>
              {game.tags.map(tag => (
                <span key={tag} className="text-[10px] text-slate-500 font-medium">#{tag}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
           <button 
            onClick={() => window.open(game.iframeUrl, '_blank')}
            className="hidden sm:flex items-center gap-2 px-4 py-2 bg-slate-800 text-slate-300 hover:text-white rounded-lg text-sm font-semibold transition-all border border-slate-700"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            New Tab
          </button>
           <button 
            onClick={toggleFullscreen}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-500/20"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            Fullscreen
          </button>
        </div>
      </div>

      <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
        <iframe
          id="game-frame"
          src={game.iframeUrl}
          className="w-full h-full border-none"
          title={game.title}
          allowFullScreen
          allow="autoplay; encrypted-media; fullscreen"
        />
        <div className="absolute inset-0 bg-slate-900 pointer-events-none opacity-0 flex items-center justify-center transition-opacity duration-500">
          <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="p-8 bg-slate-800/30 rounded-3xl border border-slate-800">
            <h3 className="text-xl font-bold text-white mb-4">About the Game</h3>
            <p className="text-slate-400 leading-relaxed text-lg">
              {game.description}
            </p>
            <div className="mt-8 pt-8 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div>
                <p className="text-slate-500 text-xs uppercase font-bold mb-1">Developer</p>
                <p className="text-slate-300 font-medium">Community Labs</p>
              </div>
              <div>
                <p className="text-slate-500 text-xs uppercase font-bold mb-1">Added On</p>
                <p className="text-slate-300 font-medium">March 2024</p>
              </div>
              <div>
                <p className="text-slate-500 text-xs uppercase font-bold mb-1">Plays</p>
                <p className="text-slate-300 font-medium">14.2k+</p>
              </div>
              <div>
                <p className="text-slate-500 text-xs uppercase font-bold mb-1">Rating</p>
                <div className="flex items-center text-amber-400 font-bold">
                  4.8 <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white">Suggested Games</h3>
          <div className="space-y-4">
            {GAMES.filter(g => g.id !== game.id).slice(0, 4).map(suggested => (
              <Link 
                key={suggested.id}
                to={`/game/${suggested.id}`}
                className="flex items-center gap-4 p-3 bg-slate-800/30 rounded-xl hover:bg-slate-800 border border-slate-700 transition-all group"
              >
                <img src={suggested.thumbnail} className="w-20 aspect-square object-cover rounded-lg group-hover:scale-105 transition-transform" />
                <div className="min-w-0">
                  <h4 className="font-bold text-slate-200 truncate">{suggested.title}</h4>
                  <p className="text-xs text-slate-500 truncate">{suggested.category}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetail;
