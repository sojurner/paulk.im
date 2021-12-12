import React from 'react';
import { Flex } from '@chakra-ui/react';
import { ConfusedTravolta } from '@/components/Icon';

export default function FourOFour() {
  return (
    <Flex
      gridArea="body"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      position="relative"
      fontSize="20em"
    >
      <ConfusedTravolta />
    </Flex>
  );
}
