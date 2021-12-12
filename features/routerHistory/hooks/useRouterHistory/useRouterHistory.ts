import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';

import { µUseRouterHistory } from '.';
import { useDataContext } from '@/features/data';

export const useRouterHistory = (
  params: µUseRouterHistory.Types.Params
): µUseRouterHistory.Types.Return => {
  const router = useRouter();
  const dataContext = useDataContext();

  const validRoutes = [
    ...µUseRouterHistory.Consts.VALID_ROUTES,
    ...µUseRouterHistory.Utils.mapToValidRoutes(
      dataContext.data.state.memes,
      dataContext.data.state.posts
    ),
  ];

  const [_, rootPath, slug] = router.asPath.split('/');

  const [routeHistory, setRouteHistory] = useState<
    µUseRouterHistory.Types.RouteHistory[]
  >([]);

  const currentPath = useMemo(() => {
    return `/${rootPath}${slug ? `/${slug?.split('?')[0]}` : ''}`;
  }, [router.asPath]);

  const onRemoveRoute = (path: string) => {
    const removeResult = µUseRouterHistory.Utils.removeRoute(
      µUseRouterHistory.Enums.RouteHistoryCategory.POSTS,
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
    const validPath = validRoutes.find(RTE => RTE === router.asPath);
    if (!validPath) {
      return;
    }

    const addResult = µUseRouterHistory.Utils.addRoute(
      µUseRouterHistory.Enums.RouteHistoryCategory.POSTS,
      {
        path: validPath,
        name: slug || `${rootPath || 'home'}.pk`,
      }
    );
    setRouteHistory(addResult);
  }, [rootPath, slug]);

  // initialize route history
  useEffect(() => {
    const initialHistory = µUseRouterHistory.Utils.getRouteHistory(
      µUseRouterHistory.Enums.RouteHistoryCategory.POSTS
    ).reduce((ACC, ROUTE) => {
      if (ROUTE.path === currentPath) {
        return [ROUTE, ...ACC];
      }
      return [...ACC, ROUTE];
    }, [] as µUseRouterHistory.Types.RouteHistory[]);

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
