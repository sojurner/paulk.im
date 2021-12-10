import { µRouterHistory } from '@/features/routerHistory';

export interface State {
  routeHistory: µRouterHistory.RouteHistory[];
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

export interface RouteHistory {
  path: string;
  name: string;
}