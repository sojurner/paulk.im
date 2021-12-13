import React from 'react';
import { Flex, useColorModeValue } from '@chakra-ui/react';

import { µLatestCard } from '.';

export const LatestCard: React.FC<µLatestCard.Types.Props> = props => {
  const boxShadow = useColorModeValue(
    '0 2px 5px rgba(0,0,0,0.1)',
    '0 2px 6px rgba(0,0,0)'
  );

  const hoverBoxShadow = useColorModeValue(
    '0 3px 5px rgba(0,0,0,0.2)',
    '0 3px 7px rgba(0,0,0)'
  );

  return (
    <Flex
      transition=".15s linear"
      cursor="pointer"
      boxShadow={boxShadow}
      minH="541"
      pos="relative"
      m="1"
      flexDir="column"
      _hover={{
        transform: 'translate(0, -2px)',
        boxShadow: hoverBoxShadow,
      }}
      {...props}
    />
  );
};
