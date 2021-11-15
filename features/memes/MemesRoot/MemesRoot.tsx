import { RegularText } from '@/components/Typography';
import { Flex } from '@chakra-ui/layout';
import React from 'react';
import { µMemesRoot } from './types';

export const MemesRoot: React.FC<µMemesRoot.Props> = props => {
  return (
    <Flex {...props}>
      <RegularText>Memes Root</RegularText>
    </Flex>
  );
};
