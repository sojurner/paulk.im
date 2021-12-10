import { DispatchWithoutAction } from 'react';

export interface State {
  showSearch: boolean;
}

export interface Methods {
  toggleSearch: DispatchWithoutAction;
}

export interface Return {
  state: State;
  methods: Methods;
}
