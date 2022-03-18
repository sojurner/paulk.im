import { Dispatch, SetStateAction, KeyboardEvent } from 'react';

// ========================================================================================
// Types
// ========================================================================================
export interface State {
  inputValue: string;
  postSuggestions: Suggestion[];
  memeSuggestions: Suggestion[];
  shuffledSuggestions: Suggestion[];
  focusedSuggestionIndex?: number;
}

export interface Methods {
  setPostSuggestions: Dispatch<SetStateAction<State['postSuggestions']>>;
  setMemeSuggestions: Dispatch<SetStateAction<State['memeSuggestions']>>;
  setInputValue: Dispatch<SetStateAction<State['inputValue']>>;
  onQueryChange: (query: string) => void;
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
}

export interface Params {}

export interface Return {
  state: State;
  methods: Methods;
}

export interface Suggestion {
  doc: Models.Document;
  type: SuggestionCategory;
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
