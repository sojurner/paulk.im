import React from 'react';
import { Flex, useColorModeValue } from '@chakra-ui/react';
import { ConfusedTravolta } from '@/components/Icon';

export default function FourOFour() {
  const svgFill = useColorModeValue('black', "white");
  return (
    <Flex
      gridArea="body"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      position="relative"
      fontSize="20em"
      color={svgFill}
    >
      <ConfusedTravolta />
    </Flex>
  );
}
