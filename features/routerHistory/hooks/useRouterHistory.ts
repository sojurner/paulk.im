import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { ƒRouteSessionHistory } from '../types';
import { µUseRouterHistory } from './types';

export const useRouterHistory = (
  params: µUseRouterHistory.Params
): µUseRouterHistory.Return => {
  const router = useRouter();

  const [routeHistory, setRouteHistory] = useState<
    ƒRouteSessionHistory.Models.RouteHistory[]
  >([]);

  const onRemoveRoute = (path: string) => {
    const removeResult = ƒRouteSessionHistory.Utils.removeRoute(
      ƒRouteSessionHistory.Enums.RouteHistoryCategory.POSTS,
      path
    );

    // removed route was current path, push first path to router
    if (router.asPath === path && removeResult.length) {
      router.push(removeResult[0].path);
    }

    setRouteHistory(removeResult);
  };

  useEffect(() => {
    const [_, rootPath, slug] = router.asPath.split('/');

    const addResult = ƒRouteSessionHistory.Utils.addRoute(
      ƒRouteSessionHistory.Enums.RouteHistoryCategory.POSTS,
      { path: router.asPath, name: slug || `${rootPath}.pk` }
    );
    setRouteHistory(addResult);
  }, [router.asPath]);

  useEffect(() => {
    setRouteHistory(
      ƒRouteSessionHistory.Utils.getRouteHistory(
        ƒRouteSessionHistory.Enums.RouteHistoryCategory.POSTS
      )
    );
  }, []);

  return {
    state: {
      routeHistory,
      currentPath: router.asPath,
    },
    methods: { onRemoveRoute },
  };
};
