import React from 'react';
import { Flex, useColorModeValue } from '@chakra-ui/react';

import { useResponsiveContext } from '@/features/responsive';

import { µPanel } from '.';

export const Panel: React.FC<µPanel.Props> = props => {
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
