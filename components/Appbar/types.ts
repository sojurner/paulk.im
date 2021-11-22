import React from 'react';
import { FlexProps } from '@chakra-ui/layout';
import { ƒRouteSessionHistory } from '@/features/routerHistory';

export namespace µAppbar {
  export interface Props extends FlexProps {}

  export interface Methods {
    arrangeActiveToFront: (
      acc: ƒRouteSessionHistory.Models.RouteHistory[],
      curr: ƒRouteSessionHistory.Models.RouteHistory
    ) => ƒRouteSessionHistory.Models.RouteHistory[];
  }
}
