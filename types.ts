
export interface Game {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  iframeUrl: string;
  category: GameCategory;
  tags: string[];
  isHot?: boolean;
}

export enum GameCategory {
  Arcade = "Arcade",
  Puzzle = "Puzzle",
  Action = "Action",
  Sports = "Sports",
  Strategy = "Strategy",
  Retro = "Retro"
}

export interface AppState {
  favorites: string[];
}
