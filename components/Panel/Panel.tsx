import React from 'react';
import { Flex, useColorModeValue } from '@chakra-ui/react';

import { µPanel } from '.';
import { useResponsiveContext } from '@/features/responsive';

export const Panel: React.FC<µPanel.Types.Props> = props => {
  const borderColor = useColorModeValue('gray.300', 'gray.600');
  const { collapsible } = useResponsiveContext();
  return (
    <Flex
      height="calc(100vh - 30px)"
      width="100%"
      background="white.200"
      {...(!collapsible.state.collapsed && { borderRight: '1px solid' })}
      borderColor={borderColor}
      {...props}
    ></Flex>
  );
};
