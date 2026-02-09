
import React, { useState, useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route, Link, useParams, useLocation } from 'react-router-dom';
import { GAMES, CATEGORIES, GameCategory } from './data.ts';

// --- COMPONENTS ---

const Header = ({ searchQuery, setSearchQuery }) => (
  <header className="sticky top-0 z-50 glass border-b border-slate-800">
    <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
      <Link to="/" className="flex items-center gap-2 group">
        <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:bg-indigo-500 transition-colors">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <span className="text-xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent hidden sm:block">
          NovaArcade
        </span>
      </Link>

      <div className="flex-1 max-w-xl relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-2 border border-slate-700 rounded-full bg-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all sm:text-sm"
          placeholder="Search games..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <nav className="hidden md:flex items-center gap-6">
        <Link to="/" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Home</Link>
        <Link to="/favorites" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Favorites</Link>
      </nav>
    </div>
  </header>
);

const GameCard = ({ game, isFavorite, toggleFavorite }) => (
  <Link 
    to={`/game/${game.id}`}
    className="group relative flex flex-col bg-slate-800/40 rounded-2xl overflow-hidden border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-800 transition-all duration-300"
  >
    <div className="relative aspect-[4/3] overflow-hidden">
      <img 
        src={game.thumbnail} 
        alt={game.title}
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
      
      <button 
        onClick={(e) => toggleFavorite(e, game.id)}
        className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all ${
          isFavorite ? 'bg-red-500 text-white' : 'bg-slate-900/40 text-white hover:bg-slate-900/60'
        }`}
      >
        <svg className="w-4 h-4" fill={isFavorite ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </button>

      {game.isHot && (
        <span className="absolute top-3 left-3 px-2 py-0.5 bg-amber-500 text-slate-900 text-[10px] font-black rounded uppercase">Hot</span>
      )}
    </div>

    <div className="p-4">
      <div className="flex justify-between items-start mb-1">
        <h3 className="font-bold text-slate-100 group-hover:text-indigo-400 transition-colors truncate">{game.title}</h3>
      </div>
      <p className="text-xs text-slate-500 line-clamp-2">{game.description}</p>
    </div>
  </Link>
);

// --- PAGES ---

const Home = ({ searchQuery, favorites, toggleFavorite }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredGames = useMemo(() => {
    return GAMES.filter(game => {
      const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            game.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = activeCategory === 'All' || game.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="space-y-8 pb-12">
      {!searchQuery && activeCategory === 'All' && (
        <section className="relative h-64 sm:h-80 rounded-3xl overflow-hidden shadow-2xl">
          <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&h=400&auto=format&fit=crop" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-900/60 flex flex-col justify-center p-8 sm:p-12">
            <h1 className="text-3xl sm:text-5xl font-black text-white mb-4">Level Up Your Break</h1>
            <p className="text-slate-300 max-w-md">Access premium unblocked games instantly. No downloads, no filters, just pure fun.</p>
          </div>
        </section>
      )}

      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
        <button
          onClick={() => setActiveCategory('All')}
          className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
            activeCategory === 'All' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
          }`}
        >
          All
        </button>
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
              activeCategory === cat ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

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
    </div>
  );
};

const GameDetail = () => {
  const { id } = useParams();
  const game = GAMES.find(g => g.id === id);
  const [isFullscreen, setIsFullscreen] = useState(false);

  if (!game) return <div className="text-center py-20">Game not found</div>;

  const toggleFullscreen = () => {
    const frame = document.getElementById('game-frame');
    if (frame?.requestFullscreen) frame.requestFullscreen();
  };

  return (
    <div className="space-y-6 pb-12">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back
        </Link>
        <button 
          onClick={toggleFullscreen}
          className="px-4 py-2 bg-slate-800 text-slate-200 rounded-lg text-sm font-bold hover:bg-slate-700 flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
          Fullscreen
        </button>
      </div>

      <div className="w-full aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
        <iframe
          id="game-frame"
          src={game.iframeUrl}
          className="w-full h-full"
          allowFullScreen
        />
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 p-8 bg-slate-800/20 rounded-3xl border border-slate-800">
          <h2 className="text-2xl font-black mb-4">{game.title}</h2>
          <p className="text-slate-400 leading-relaxed mb-6">{game.description}</p>
          <div className="flex flex-wrap gap-2">
            {game.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-slate-800 rounded-full text-[10px] font-bold text-slate-500 uppercase">#{tag}</span>
            ))}
          </div>
        </div>
        <div className="p-8 bg-indigo-600/10 rounded-3xl border border-indigo-500/20">
          <h3 className="font-bold mb-4 text-indigo-400">Controls</h3>
          <p className="text-sm text-slate-400">Use your mouse or keyboard depending on the game type. Most arcade games use WASD or Arrow keys.</p>
        </div>
      </div>
    </div>
  );
};

const Favorites = ({ favorites, toggleFavorite }) => {
  const favoriteGames = GAMES.filter(g => favorites.includes(g.id));

  return (
    <div className="space-y-8 pb-12">
      <h1 className="text-3xl font-black">My Favorites</h1>
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
        <div className="text-center py-32 bg-slate-800/10 rounded-3xl border border-dashed border-slate-700">
          <p className="text-slate-500 mb-6">No favorites yet.</p>
          <Link to="/" className="px-6 py-3 bg-indigo-600 rounded-xl font-bold">Discover Games</Link>
        </div>
      )}
    </div>
  );
};

// --- APP CORE ---

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
};

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('nova-favorites');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('nova-favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorites(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <main className="flex-1 container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home searchQuery={searchQuery} favorites={favorites} toggleFavorite={toggleFavorite} />} />
            <Route path="/game/:id" element={<GameDetail />} />
            <Route path="/favorites" element={<Favorites favorites={favorites} toggleFavorite={toggleFavorite} />} />
          </Routes>
        </main>
        <footer className="py-12 border-t border-slate-800 text-center">
          <p className="text-slate-600 text-xs tracking-widest uppercase">&copy; 2024 NovaArcade Portals</p>
        </footer>
      </div>
    </Router>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
