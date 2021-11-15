import { ƒRouteSessionHistory } from '../types';

export namespace µUseRouterHistory {
  export interface State {
    routeHistory: ƒRouteSessionHistory.Models.RouteHistory[];
    currentPath?: string;
  }

  export interface Methods {
    onRemoveRoute: (path: string) => void;
  }

  export interface Params {}

  export interface Return {
    state: State;
    methods: Methods;
  }
}
