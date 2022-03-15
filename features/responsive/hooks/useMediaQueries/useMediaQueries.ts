import { useMediaQuery } from '@chakra-ui/react';
import { µUseMediaQueries } from '.';

export const useMediaQueries = (
  args: µUseMediaQueries.Args
): µUseMediaQueries.Return => {
  const [isLargerThan1600] = useMediaQuery(
    `(min-width: ${args.collapsed ? 1600 - 320 : 1600}px)`
  );
  const [isLargerThan1280] = useMediaQuery(
    `(min-width: ${args.collapsed ? 1280 - 320 : 1280}px)`
  );
  const [isLargerThan500] = useMediaQuery(`(min-width: 501px)`);

  const state = {
    isLargerThan1280,
    isLargerThan1600,
    isLargerThan500,
  };

  const methods = {};

  return { state, methods };
};
