import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';

import { µUseRouterHistory } from '.';
import { µRouterHistory } from '..';

export const useRouterHistory = (
  params: µUseRouterHistory.Params
): µUseRouterHistory.Return => {
  const router = useRouter();

  const [_, rootPath, slug] = router.asPath.split('/');

  const [routeHistory, setRouteHistory] = useState<
    µRouterHistory.RouteHistory[]
  >([]);

  const currentPath = useMemo(() => {
    return `/${rootPath}${slug ? `/${slug?.split('?')[0]}` : ''}`;
  }, [router.asPath]);

  const onRemoveRoute = (path: string) => {
    const removeResult = µRouterHistory.Utils.removeRoute(
      µRouterHistory.Enums.RouteHistoryCategory.POSTS,
      path
    );

    // removed route was current path, push first path to router
    if (router.asPath === path && removeResult.length) {
      router.push(removeResult[0].path);
    }

    setRouteHistory(removeResult);
  };

  // add route to route history
  useEffect(() => {
    const addResult = µRouterHistory.Utils.addRoute(
      µRouterHistory.Enums.RouteHistoryCategory.POSTS,
      {
        path: `/${rootPath}${slug ? `/${slug}` : ''}`,
        name: slug || `${rootPath}.pk`,
      }
    );
    setRouteHistory(addResult);
  }, [rootPath, slug]);

  // initialize route history
  useEffect(() => {
    const initialHistory = µRouterHistory.Utils.getRouteHistory(
      µRouterHistory.Enums.RouteHistoryCategory.POSTS
    ).reduce((ACC, ROUTE) => {
      if (ROUTE.path === currentPath) {
        return [ROUTE, ...ACC];
      }
      return [...ACC, ROUTE];
    }, [] as µRouterHistory.RouteHistory[]);

    setRouteHistory(initialHistory);
  }, []);

  return {
    state: {
      routeHistory,
      currentPath,
    },
    methods: { onRemoveRoute },
  };
};
