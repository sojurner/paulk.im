import { Dispatch, SetStateAction } from 'react';
import { ƒSearch } from '../types';

export namespace µUseSearch {
  export interface State {
    inputValue: string;
    initialQuery: string;
    category: ƒSearch.Enums.SuggestionCategory;
    postSuggestions: ƒSearch.Suggestion[];
    memeSuggestions: ƒSearch.Suggestion[];
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
}
