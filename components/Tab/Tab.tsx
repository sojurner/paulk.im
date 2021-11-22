import React from 'react';

import { Center } from '@chakra-ui/layout';
import { RegularText } from '@/components/Typography';

import { µTab } from './types';

export const AppbarTab: µTab.Component = ({ isActive, children, ...props }) => {
  return (
    <Center
      background={isActive ? 'white' : 'gray.200'}
      borderLeft=".5px solid"
      borderRight=".5px solid"
      borderColor="gray.300"
      cursor="pointer"
      overflow="hidden"
      maxW="250px"
      py={4}
      px={10}
      {...props}
    >
      <RegularText
        overflow="hidden"
        textOverflow="ellipsis"
        whiteSpace="nowrap"
        width="100%"
      >
        {children}
      </RegularText>
    </Center>
  );
};

export const SidebarTab: µTab.Component = ({ isActive, ...props }) => {
  return (
    <Center
      cursor="pointer"
      bg={isActive ? 'blue.50' : 'initial'}
      pos="relative"
      // _after={{
      //   content: '""',
      //   borderLeft: '3px solid',
      //   position: 'absolute',
      //   height: "100%",
      //   width: 1,
      //   right: 0,
      //   borderColor: isActive ? 'blue.300' : 'transparent',
      // }}
      height="60px"
      {...props}
    ></Center>
  );
};
