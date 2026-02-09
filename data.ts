
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
    thumbnail: "https://picsum.photos/seed/2048/400/300",
    iframeUrl: "https://play2048.co/",
    category: GameCategory.Puzzle,
    tags: ["numbers", "logic", "casual"],
    isHot: true
  },
  {
    id: "tetris",
    title: "Tetris Lite",
    description: "The classic block-stacking game. Arrange falling tetrominoes into complete lines to clear them.",
    thumbnail: "https://picsum.photos/seed/tetris/400/300",
    iframeUrl: "https://tetris.com/play-tetris",
    category: GameCategory.Arcade,
    tags: ["classic", "blocks", "retro"],
    isHot: true
  },
  {
    id: "hextris",
    title: "Hextris",
    description: "A fast-paced puzzle game where you rotate a hexagon to catch colored blocks.",
    thumbnail: "https://picsum.photos/seed/hextris/400/300",
    iframeUrl: "https://hextris.io/",
    category: GameCategory.Arcade,
    tags: ["puzzle", "hexagon", "rhythm"],
    isHot: false
  },
  {
    id: "snake",
    title: "Classic Snake",
    description: "Eat the fruit, grow longer, and don't hit the walls! The ultimate retro experience.",
    thumbnail: "https://picsum.photos/seed/snake/400/300",
    iframeUrl: "https://www.google.com/logos/2010/pacman10-i.html",
    category: GameCategory.Retro,
    tags: ["snake", "classic", "8-bit"],
    isHot: true
  },
  {
    id: "paper-io",
    title: "Paper.io 2",
    description: "Capture as much territory as possible. Stay safe in your own zone, but watch out for others!",
    thumbnail: "https://picsum.photos/seed/paperio/400/300",
    iframeUrl: "https://paper-io.com/",
    category: GameCategory.Action,
    tags: ["io", "multiplayer", "territory"],
    isHot: true
  },
  {
    id: "flappy-bird",
    title: "Flappy Clone",
    description: "Navigate through the pipes and try to get the highest score in this frustratingly addictive game.",
    thumbnail: "https://picsum.photos/seed/flappy/400/300",
    iframeUrl: "https://flappybird.io/",
    category: GameCategory.Arcade,
    tags: ["pipes", "skill", "one-click"],
    isHot: false
  },
  {
    id: "cut-the-rope",
    title: "Cut The Rope",
    description: "Feed Om Nom candies by cutting ropes and solving physics-based puzzles.",
    thumbnail: "https://picsum.photos/seed/rope/400/300",
    iframeUrl: "https://www.google.com/logos/2012/st-patrick-12-hp.html",
    category: GameCategory.Puzzle,
    tags: ["physics", "cute", "logic"],
    isHot: false
  },
  {
    id: "minesweeper",
    title: "Minesweeper Pro",
    description: "Find all the hidden mines without blowing yourself up. A true test of logic.",
    thumbnail: "https://picsum.photos/seed/mines/400/300",
    iframeUrl: "https://minesweeperonline.com/",
    category: GameCategory.Strategy,
    tags: ["logic", "windows", "classic"],
    isHot: false
  }
];

export const CATEGORIES = Object.values(GameCategory);
