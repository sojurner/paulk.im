import { Enums, Types } from '.';

export const getRouteHistory = (
  key: Enums.RouteHistoryCategory
): Types.RouteHistory[] => {
  const routerHistory = localStorage.getItem(key);

  if (!routerHistory) {
    initializeRouteHistory(key);
    return [] as Types.RouteHistory[];
  }

  return JSON.parse(routerHistory) as Types.RouteHistory[];
};

export const addRoute = (
  key: Enums.RouteHistoryCategory,
  route: Types.RouteHistory
): Types.RouteHistory[] => {
  let routeHistory = getRouteHistory(key);
  const routeExists = routeHistory.some(RH => RH.path === route.path);

  if (!routeExists) {
    routeHistory = [route, ...routeHistory];
  }

  localStorage.setItem(key, JSON.stringify(routeHistory));
  return routeHistory;
};

export const removeRoute = (
  key: Enums.RouteHistoryCategory,
  path: string
): Types.RouteHistory[] => {
  const routeHistory = getRouteHistory(key);

  const removeRouteHistory = routeHistory.filter(RH => RH.path !== path);

  localStorage.setItem(key, JSON.stringify(removeRouteHistory));

  return removeRouteHistory;
};

export const initializeRouteHistory = (key: Enums.RouteHistoryCategory) => {
  localStorage.setItem(key, JSON.stringify([]));
};

export const mapToValidRoutes = (
  memes: Models.Meme[],
  posts: Models.Post[]
) => {
  return [
    ...memes.map(meme => `/memes/${meme.slug}`),
    ...posts.map(posts => `/posts/${posts.slug}`),
  ];
};
