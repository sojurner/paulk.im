import { FlexProps } from '@chakra-ui/layout';
import { µRouterHistory } from '@/features/routerHistory';

export interface Props extends FlexProps {}

export interface Methods {
  arrangeActiveToFront: (
    acc: µRouterHistory.RouteHistory[],
    curr: µRouterHistory.RouteHistory
  ) => µRouterHistory.RouteHistory[];
}
