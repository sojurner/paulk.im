/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';

import { µUseRouterHistory } from '.';
import { useDataContext } from '@/features/data';

export const useRouterHistory = (
  params?: µUseRouterHistory.Params
): µUseRouterHistory.Return => {
  const router = useRouter();
  const dataContext = useDataContext();

  const [_, rootPath, query] = router.asPath.split('/');

  const [routeHistory, setRouteHistory] = useState<
    µUseRouterHistory.RouteHistory[]
  >([]);

  const currentPath = useMemo(() => {
    return `/${rootPath}${query ? `/${query?.split('?')[0]}` : ''}`;
  }, [router.asPath]);

  const onRemoveRoute = (path: string) => {
    const removeResult = µUseRouterHistory.removeRoute(path);

    // removed route was current path, push first path to router
    if (router.asPath === path && removeResult.length) {
      router.push(removeResult[0].path);
    }

    setRouteHistory(removeResult);
  };

  // validate path and add to routerHistory
  useEffect(() => {
    const validPath = µUseRouterHistory.validatePath({
      path: router.asPath,
      tags: dataContext.state.tags,
    });

    if (!validPath) return;

    const newRouteHistory = µUseRouterHistory.addRoute({
      path: validPath,
      name: !query ? `${rootPath || 'home'}` : `${query}.til`,
    });
    setRouteHistory(newRouteHistory);
  }, [router.asPath]);

  // initialize route history
  useEffect(() => {
    const initialHistory = µUseRouterHistory
      .getRouteHistory()
      .reduce((ACC, ROUTE) => {
        if (ROUTE.path === currentPath) return [ROUTE, ...ACC];

        return [...ACC, ROUTE];
      }, [] as µUseRouterHistory.RouteHistory[]);

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
