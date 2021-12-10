import React from 'react';

import { Center } from '@chakra-ui/layout';
import { RegularText } from '@/components/Typography';

import { µTab } from '.';

export const AppbarTab: React.FC<µTab.Types.Props> = ({
  isActive,
  children,
  ...props
}) => {
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

export const SidebarTab: React.FC<µTab.Types.Props> = ({
  isActive,
  ...props
}) => {
  return (
    <Center
      cursor="pointer"
      bg={isActive ? 'blue.50' : 'initial'}
      pos="relative"
      height={['40px', '60px']}
      width={['40px', '100%']}
      {...props}
    ></Center>
  );
};
