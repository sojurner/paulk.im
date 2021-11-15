import { RegularText } from '@/components/Typography';
import { Flex } from '@chakra-ui/layout';
import React from 'react';
import { µPostsRoot } from './types';

export const PostsRoot: React.FC<µPostsRoot.Props> = props => {
  return (
    <Flex {...props}>
      <RegularText>POSTS Home</RegularText>
    </Flex>
  );
};
