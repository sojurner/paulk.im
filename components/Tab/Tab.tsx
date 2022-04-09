import React from 'react';

import { Center, useColorModeValue } from '@chakra-ui/react';
import { RegularText } from '@/components/Typography';

import { µTab } from '.';

export const AppbarTab: React.FC<µTab.Props> = ({
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
      borderLeftColor={borderColor}
      cursor="pointer"
      overflow="hidden"
      maxW="250px"
      px={10}
      borderRight=".5px solid"
      borderRightColor={borderColor}
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

// eslint-disable-next-line react/display-name
export const SidebarTab =
  // eslint-disable-next-line react/display-name
  React.forwardRef<HTMLDivElement, µTab.Props>(
    ({ isActive, ...props }, ref) => {
      const bg = useColorModeValue('blue.50', 'blue.900');

      return (
        <Center
          ref={ref}
          cursor="pointer"
          bg={isActive ? bg : 'initial'}
          pos="relative"
          height={['40px', '60px']}
          width={['40px', '100%']}
          {...props}
        ></Center>
      );
    }
  );
