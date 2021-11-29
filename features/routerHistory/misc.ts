import * as Enums from './enums';
import { µRouterHistory } from '.';

export class Utils {
  public static getRouteHistory = (
    key: Enums.RouteHistoryCategory
  ): µRouterHistory.RouteHistory[] => {
    const routerHistory = localStorage.getItem(key);

    if (!routerHistory) {
      Utils.initializeRouteHistory(key);
      return [] as µRouterHistory.RouteHistory[];
    }

    return JSON.parse(routerHistory) as µRouterHistory.RouteHistory[];
  };

  public static addRoute = (
    key: Enums.RouteHistoryCategory,
    route: µRouterHistory.RouteHistory
  ): µRouterHistory.RouteHistory[] => {
    let routeHistory = Utils.getRouteHistory(key);
    const routeExists = routeHistory.some(RH => RH.path === route.path);

    if (!routeExists) {
      routeHistory = [route, ...routeHistory];
    }

    localStorage.setItem(key, JSON.stringify(routeHistory));
    return routeHistory;
  };

  public static removeRoute = (
    key: Enums.RouteHistoryCategory,
    path: string
  ): µRouterHistory.RouteHistory[] => {
    const routeHistory = Utils.getRouteHistory(key);

    const removeRouteHistory = routeHistory.filter(RH => RH.path !== path);

    localStorage.setItem(key, JSON.stringify(removeRouteHistory));

    return removeRouteHistory;
  };

  public static initializeRouteHistory = (key: Enums.RouteHistoryCategory) => {
    localStorage.setItem(key, JSON.stringify([]));
  };
}
