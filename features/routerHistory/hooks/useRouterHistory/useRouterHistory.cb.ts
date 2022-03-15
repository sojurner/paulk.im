// ==========================================================================================
// Consts˝
// ==========================================================================================
export const VALID_ROUTES = ['/', '/memes', '/posts'];

export enum RouteHistoryCategory {
  POSTS = 'router-history-posts',
  MEMES = 'router-history-memes',
}

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

export const getRouteHistory = (key: RouteHistoryCategory): RouteHistory[] => {
  const routerHistory = localStorage.getItem(key);

  if (!routerHistory) {
    initializeRouteHistory(key);
    return [] as RouteHistory[];
  }

  return JSON.parse(routerHistory) as RouteHistory[];
};

export const addRoute = (
  key: RouteHistoryCategory,
  route: RouteHistory
): RouteHistory[] => {
  let routeHistory = getRouteHistory(key);
  const routeExists = routeHistory.some(RH => RH.path === route.path);

  if (!routeExists) {
    routeHistory = [route, ...routeHistory];
  }

  localStorage.setItem(key, JSON.stringify(routeHistory));
  return routeHistory;
};

export const removeRoute = (
  key: RouteHistoryCategory,
  path: string
): RouteHistory[] => {
  const routeHistory = getRouteHistory(key);

  const removeRouteHistory = routeHistory.filter(RH => RH.path !== path);

  localStorage.setItem(key, JSON.stringify(removeRouteHistory));

  return removeRouteHistory;
};

export const initializeRouteHistory = (key: RouteHistoryCategory) => {
  localStorage.setItem(key, JSON.stringify([]));
};

export const validatePath = ({
  path,
  memes,
  posts,
}: {
  path: string;
  memes: Models.Meme[];
  posts: Models.Post[];
}): string | undefined => {
  const validRoutes = [
    ...VALID_ROUTES,
    ...memes.map(meme => `/memes/${meme.slug}`),
    ...posts.map(posts => `/posts/${posts.slug}`),
  ];

  return validRoutes.find(RTE => RTE === path);
};
