import { FlexProps } from '@chakra-ui/layout';
import { µUseRouterHistory } from '@/features/routerHistory';

export interface Props extends FlexProps {}

export interface Methods {
  arrangeActiveToFront: (
    acc: µUseRouterHistory.Types.RouteHistory[],
    curr: µUseRouterHistory.Types.RouteHistory
  ) => µUseRouterHistory.Types.RouteHistory[];
}
