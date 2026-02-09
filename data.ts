
export const GameCategory = {
  Arcade: "Arcade",
  Puzzle: "Puzzle",
  Action: "Action",
  Sports: "Sports",
  Strategy: "Strategy",
  Retro: "Retro"
};

export const GAMES = [
  {
    id: "2048",
    title: "2048",
    description: "Join the numbers and get to the 2048 tile! A challenging puzzle game that tests your strategy.",
    thumbnail: "https://images.unsplash.com/photo-1614332284113-94576356781f?q=80&w=400&h=300&auto=format&fit=crop",
    iframeUrl: "https://play2048.co/",
    category: GameCategory.Puzzle,
    tags: ["numbers", "logic", "casual"],
    isHot: true
  },
  {
    id: "tetris",
    title: "Tetris Lite",
    description: "The classic block-stacking game. Arrange falling tetrominoes into complete lines to clear them.",
    thumbnail: "https://images.unsplash.com/photo-1611996591156-66715d60681d?q=80&w=400&h=300&auto=format&fit=crop",
    iframeUrl: "https://tetris.com/play-tetris",
    category: GameCategory.Arcade,
    tags: ["classic", "blocks", "retro"],
    isHot: true
  },
  {
    id: "hextris",
    title: "Hextris",
    description: "A fast-paced puzzle game where you rotate a hexagon to catch colored blocks.",
    thumbnail: "https://images.unsplash.com/photo-1614332284113-94576356781f?q=80&w=400&h=300&auto=format&fit=crop",
    iframeUrl: "https://hextris.io/",
    category: GameCategory.Arcade,
    tags: ["puzzle", "hexagon", "rhythm"],
    isHot: false
  },
  {
    id: "paper-io",
    title: "Paper.io 2",
    description: "Capture as much territory as possible. Stay safe in your own zone, but watch out for others!",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=400&h=300&auto=format&fit=crop",
    iframeUrl: "https://paper-io.com/",
    category: GameCategory.Action,
    tags: ["io", "multiplayer", "territory"],
    isHot: true
  },
  {
    id: "minesweeper",
    title: "Minesweeper",
    description: "Find all the hidden mines without blowing yourself up. A true test of logic.",
    thumbnail: "https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=400&h=300&auto=format&fit=crop",
    iframeUrl: "https://minesweeperonline.com/",
    category: GameCategory.Strategy,
    tags: ["logic", "windows", "classic"],
    isHot: false
  }
];

export const CATEGORIES = Object.values(GameCategory);
