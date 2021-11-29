import { Dispatch, SetStateAction } from 'react';
import { µSearch } from '@/features/search';

export interface State {
  inputValue: string;
  initialQuery: string;
  category: µSearch.Enums.SuggestionCategory;
  postSuggestions: µSearch.Suggestion[];
  memeSuggestions: µSearch.Suggestion[];
}

export interface Methods {
  setPostSuggestions: Dispatch<SetStateAction<State['postSuggestions']>>;
  setMemeSuggestions: Dispatch<SetStateAction<State['memeSuggestions']>>;
  setCategory: Dispatch<SetStateAction<State['category']>>;
  setInputValue: Dispatch<SetStateAction<State['inputValue']>>;
  onQueryChange: (query: string) => void;
}

export interface Params {}

export interface Return {
  state: State;
  methods: Methods;
}
