import React from 'react';
import { Flex } from '@chakra-ui/react';

import { µLatestCard } from '.';

export const LatestCard: React.FC<µLatestCard.Types.Props> = props => {
  return (
    <Flex
      transition=".15s linear"
      outline="1px solid var(--chakra-colors-gray-50)"
      cursor="pointer"
      boxShadow="0 2px 5px rgba(0,0,0,0.1)"
      minH="541"
      pos="relative"
      m="1"
      flexDir="column"
      _hover={{
        transform: 'translate(0, -2px)',
        boxShadow: '0 4px 5px rgba(0,0,0,0.2)',
      }}
      {...props}
    />
  );
};
