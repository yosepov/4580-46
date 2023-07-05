export type GameType = {
    id: string;
    name: string;
    description: string;
    coverUrl: string;
    imageUrl: string[];
    videoUrl: string;
    category: GameCategoryType[];
    console: GameConsoleType[];
    price: number;
    rating: number[];
    release: string;
    company: string;
    version: string;
}


export type GameCategoryType = 'Action' | 'FPS' | 'Strategy' | 'Horror' | 'RPG' | 'MMO' | 'Adventure' | 'Simulator' | 'Multiplayer'
export type GameConsoleType = 'PS3' | 'PS4' | 'PS5' | 'XBOX360' | 'XBOXONE' | 'XBOX-S' | 'XBOX-X' | 'PC' | 'Mobile' | 'Nintendo'

export const gameCategories: GameCategoryType[] = ['Action', 'FPS', 'Strategy', 'Horror', 'RPG', 'MMO', 'Adventure', 'Simulator', 'Multiplayer']
export const gameConsoles: GameConsoleType[] = ['PS3', 'PS4', 'PS5', 'XBOX360', 'XBOXONE', 'XBOX-S', 'XBOX-X', 'PC', 'Mobile', 'Nintendo']