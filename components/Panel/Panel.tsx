import React from 'react';
import { Flex } from '@chakra-ui/react';

import { µPanel } from './types';

export const Panel: React.FC<µPanel.Props> = (props) => {
  return (
    <Flex
      height="calc(100vh - 30px)"
      width="320px"
      background="white.200"
      borderRight="1px solid"
      borderColor="blackAlpha.100"
      {...props}
    ></Flex>
  );
};
