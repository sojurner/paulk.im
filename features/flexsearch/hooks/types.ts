import { Dispatch, SetStateAction } from 'react';

export namespace µUseFlexSearch {
  export interface State {
    index: number;
  }

  export interface Methods {
    setIndex: Dispatch<SetStateAction<number>>;
  }

  export interface Params {
    query: string;
    initialFlexSearch: any;
    store: Record<number, Models.Document>;
  }

  export interface Return {}
}
