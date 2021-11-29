import React from 'react';
import { Flex } from '@chakra-ui/react';

import { µPanel } from '.';

export const Panel: React.FC<µPanel.Props> = props => {
  return (
    <Flex
      height="calc(100vh - 30px)"
      width="100%"
      background="white.200"
      borderRight="1px solid"
      borderColor="blackAlpha.100"
      {...props}
    ></Flex>
  );
};
