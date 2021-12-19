/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';

import { µUseRouterHistory } from '.';
import { useDataContext } from '@/features/data';

export const useRouterHistory = (
  params: µUseRouterHistory.Types.Params
): µUseRouterHistory.Types.Return => {
  const router = useRouter();
  const dataContext = useDataContext();

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

  // validate path and add to routerHistory
  useEffect(() => {
    const validPath = µUseRouterHistory.Utils.validatePath({
      path: router.asPath,
      memes: dataContext.data.state.memes,
      posts: dataContext.data.state.posts,
    });

    if (!validPath) return;

    const newRouteHistory = µUseRouterHistory.Utils.addRoute(
      µUseRouterHistory.Enums.RouteHistoryCategory.POSTS,
      {
        path: validPath,
        name: slug || `${rootPath || 'home'}.pk`,
      }
    );
    setRouteHistory(newRouteHistory);
  }, [router.asPath]);

  // initialize route history
  useEffect(() => {
    const initialHistory = µUseRouterHistory.Utils.getRouteHistory(
      µUseRouterHistory.Enums.RouteHistoryCategory.POSTS
    ).reduce((ACC, ROUTE) => {
      if (ROUTE.path === currentPath) return [ROUTE, ...ACC];

      return [...ACC, ROUTE];
    }, [] as µUseRouterHistory.Types.RouteHistory[]);

    setRouteHistory(initialHistory);
  }, [router.asPath]);

  return {
    state: {
      routeHistory,
      currentPath,
    },
    methods: { onRemoveRoute },
  };
};
