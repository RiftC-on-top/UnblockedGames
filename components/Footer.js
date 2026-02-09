
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h4 className="text-lg font-bold text-white mb-4">NovaArcade</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Your ultimate destination for free, unblocked HTML5 games. Play anytime, anywhere, with no restrictions.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Categories</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <span className="text-slate-400 hover:text-indigo-400 cursor-pointer">Arcade</span>
              <span className="text-slate-400 hover:text-indigo-400 cursor-pointer">Puzzle</span>
              <span className="text-slate-400 hover:text-indigo-400 cursor-pointer">Strategy</span>
              <span className="text-slate-400 hover:text-indigo-400 cursor-pointer">Action</span>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Community</h4>
            <p className="text-slate-400 text-sm">
              Join thousands of players and explore a curated list of non-blocked web experiences.
            </p>
            <div className="mt-4 flex justify-center md:justify-start gap-4">
              <button className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                <svg className="w-5 h-5 text-slate-300" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
          &copy; {new Date().getFullYear()} NovaArcade. For educational purposes. All trademarks belong to their respective owners.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
