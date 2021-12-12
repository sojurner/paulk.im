export interface State {
  routeHistory: RouteHistory[];
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
