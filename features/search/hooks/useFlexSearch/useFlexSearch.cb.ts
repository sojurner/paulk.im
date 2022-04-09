import { Document } from 'flexsearch';

export interface Args {
  tils: Models.TIL[];
}

export interface State {
  tilsDocument: Document<unknown, true>;
}

export interface Methods {}

export interface Return {
  state: State;
  methods: Methods;
}
