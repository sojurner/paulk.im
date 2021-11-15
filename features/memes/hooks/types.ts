import { Dispatch, SetStateAction } from "react";

export namespace µUsePanelMemes {
  export interface State {
    activeMeme?: Models.Meme['id'];
  }

  export interface Methods {
    setActiveMeme: Dispatch<SetStateAction<State['activeMeme']>>
  }

  export interface Params {
    activeMeme?: string;
  }

  export interface Return {
    state: State;
    methods: Methods;
  }
}
