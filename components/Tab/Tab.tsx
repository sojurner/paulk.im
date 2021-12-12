import React from 'react';

import { Center, useColorModeValue } from '@chakra-ui/react';
import { RegularText } from '@/components/Typography';

import { µTab } from '.';

export const AppbarTab: React.FC<µTab.Types.Props> = ({
  isActive,
  children,
  ...props
}) => {
  const bg = useColorModeValue('gray.200', 'gray.900');
  const activeBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.300', 'gray.600');

  return (
    <Center
      background={isActive ? activeBg : bg}
      borderLeft=".5px solid"
      borderRight=".5px solid"
      borderLeftColor={borderColor}
      borderRightColor={borderColor}
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
  const bg = useColorModeValue('blue.50', 'blue.900');

  return (
    <Center
      cursor="pointer"
      bg={isActive ? bg : 'initial'}
      pos="relative"
      height={['40px', '60px']}
      width={['40px', '100%']}
      {...props}
    ></Center>
  );
};
