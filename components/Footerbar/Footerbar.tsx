import { Flex, HStack } from '@chakra-ui/layout';
import React from 'react';
import { SmallText } from '../Typography';
import { µFooterbar } from './types';

export const Footerbar: React.FC<µFooterbar.Props> = (props) => {
  return (
    <Flex
      bg="gray.300"
      justifyContent="space-between"
      px="10"
      width="100vw"
      height="100%"
      {...props}
    >
      <HStack spacing="6">
        <SmallText>#1</SmallText>
        <SmallText>#2</SmallText>
        <SmallText>#3</SmallText>
      </HStack>
      <HStack spacing="6">
        <SmallText>#1</SmallText>
        <SmallText>#2</SmallText>
        <SmallText>#3</SmallText>
      </HStack>
    </Flex>
  );
};
