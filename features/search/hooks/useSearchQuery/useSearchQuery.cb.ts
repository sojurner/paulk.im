import { Dispatch, SetStateAction } from 'react';

// ========================================================================================
// Types
// ========================================================================================
export interface State {
  inputValue: string;
  suggestions: Suggestion[];
}

export interface Methods {
  setSuggestions: Dispatch<SetStateAction<State['suggestions']>>;
  setInputValue: Dispatch<SetStateAction<State['inputValue']>>;
  onQueryChange: (query: string) => void;
}

export interface Params {}

export interface Return {
  state: State;
  methods: Methods;
}

export interface Suggestion {
  doc: Models.Document;
  id: string;
}

// ========================================================================================
// Consts
// ========================================================================================
export enum SuggestionCategory {
  POST = 'posts',
  MEME = 'memes',
}

// ========================================================================================
// Utils
// ========================================================================================
export function shuffleSearchSuggestions<T = any>(array: T[]): T[] {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
