import React from 'react';

import { Center } from '@chakra-ui/layout';
import { RegularText } from '@/components/Typography';

import { µTab } from './types';

export const AppbarTab: µTab.Component = ({
  isActive,
  children,
  ...props
}) => {
  return (
    <Center
      background={isActive ? 'gray.100' : 'gray.200'}
      borderLeft=".5px solid"
      borderRight=".5px solid"
      borderColor="gray.300"
      cursor="pointer"
      py={4}
      px={8}
      {...props}
    >
      <RegularText>{children}</RegularText>
    </Center>
  );
};

export const SidebarTab: µTab.Component = ({ isActive, ...props }) => {
  return (
    <Center
      cursor="pointer"
      bg={isActive ? 'gray.300' : 'initial'}
      height="70px"
      {...props}
    ></Center>
  );
};
