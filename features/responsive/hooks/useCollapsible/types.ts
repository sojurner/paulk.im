import { DispatchWithoutAction } from 'react';

export interface State {
  collapsed: boolean;
}

export interface Methods {
  toggleCollapsed: DispatchWithoutAction;
}

export interface Return {
  state: State;
  methods: Methods;
}
