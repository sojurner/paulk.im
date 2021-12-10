import { Dispatch, SetStateAction } from 'react';

import { Enums } from '.';

export interface State {
  inputValue: string;
  postSuggestions: Suggestion[];
  memeSuggestions: Suggestion[];
  shuffledSuggestions: Suggestion[];
}

export interface Methods {
  setPostSuggestions: Dispatch<SetStateAction<State['postSuggestions']>>;
  setMemeSuggestions: Dispatch<SetStateAction<State['memeSuggestions']>>;
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
  type: Enums.SuggestionCategory;
  id: string;
}
