import { Dispatch, SetStateAction } from 'react';

export interface State {
  activeMeme?: Models.Meme['slug'];
}

export interface Methods {
  setActiveMeme: Dispatch<SetStateAction<State['activeMeme']>>;
}

export interface Params {
  activeMeme?: string;
}

export interface Return {
  state: State;
  methods: Methods;
}
