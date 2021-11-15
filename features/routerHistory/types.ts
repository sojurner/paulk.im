export namespace ƒRouteSessionHistory {
  export namespace Models {
    export interface RouteHistory {
      path: string;
      name: string;
    }
  }

  export class Utils {
    public static getRouteHistory = (
      key: Enums.RouteHistoryCategory
    ): Models.RouteHistory[] => {
      const routerHistory = sessionStorage.getItem(key);

      if (!routerHistory) {
        Utils.initializeRouteHistory(key);
        return [] as Models.RouteHistory[];
      }

      return JSON.parse(routerHistory) as Models.RouteHistory[];
    };

    public static addRoute = (
      key: Enums.RouteHistoryCategory,
      route: Models.RouteHistory
    ): ƒRouteSessionHistory.Models.RouteHistory[] => {
      let routeHistory = Utils.getRouteHistory(key);
      const routeExists = routeHistory.some(RH => RH.path === route.path);

      if (!routeExists) {
        routeHistory = [route, ...routeHistory];
      }

      sessionStorage.setItem(key, JSON.stringify(routeHistory));
      return routeHistory;
    };

    public static removeRoute = (
      key: Enums.RouteHistoryCategory,
      path: string
    ): ƒRouteSessionHistory.Models.RouteHistory[] => {
      const routeHistory = Utils.getRouteHistory(key);

      const removeRouteHistory = routeHistory.filter(RH => RH.path !== path);

      sessionStorage.setItem(key, JSON.stringify(removeRouteHistory));

      return removeRouteHistory;
    };

    public static initializeRouteHistory = (
      key: Enums.RouteHistoryCategory
    ) => {
      sessionStorage.setItem(key, JSON.stringify([]));
    };
  }

  export namespace Enums {
    export enum RouteHistoryCategory {
      POSTS = 'router-history-posts',
      MEMES = 'router-history-memes',
    }
  }
}
