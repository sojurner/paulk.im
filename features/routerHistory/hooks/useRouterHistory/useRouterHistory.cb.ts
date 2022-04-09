// ==========================================================================================
// Consts˝
// ==========================================================================================
export const VALID_ROUTES = ['/', '/tils'];
export const ROUTER_HISTORY_KEY = 'router-history';

// ==========================================================================================
// Types
// ==========================================================================================

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

// ==========================================================================================
// Utils
// ==========================================================================================

export const getRouteHistory = (): RouteHistory[] => {
  const routerHistory = localStorage.getItem(ROUTER_HISTORY_KEY);

  if (!routerHistory) {
    initializeRouteHistory();
    return [] as RouteHistory[];
  }

  return JSON.parse(routerHistory) as RouteHistory[];
};

export const addRoute = (route: RouteHistory): RouteHistory[] => {
  let routeHistory = getRouteHistory();
  const routeExists = routeHistory.some(RH => RH.path === route.path);

  if (!routeExists) {
    routeHistory = [route, ...routeHistory];
  }

  localStorage.setItem(ROUTER_HISTORY_KEY, JSON.stringify(routeHistory));
  return routeHistory;
};

export const removeRoute = (path: string): RouteHistory[] => {
  const routeHistory = getRouteHistory();

  const removeRouteHistory = routeHistory.filter(RH => RH.path !== path);

  localStorage.setItem(ROUTER_HISTORY_KEY, JSON.stringify(removeRouteHistory));

  return removeRouteHistory;
};

export const initializeRouteHistory = () => {
  localStorage.setItem(ROUTER_HISTORY_KEY, JSON.stringify([]));
};

export const validatePath = ({
  path,
  tags,
}: {
  path: string;
  tags: string[];
}): string | undefined => {
  const validRoutes = [...VALID_ROUTES, ...tags.map(TAG => `/tils/${TAG}`)];

  return validRoutes.find(RTE => RTE === path);
};
