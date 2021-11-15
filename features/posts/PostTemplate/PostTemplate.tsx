import React from 'react';
import { Flex } from '@chakra-ui/react';
import { SubHeading } from '@/components/Typography';

import { Article } from './styles';
import { µPostTemplate } from './types';

export const PostTemplate: React.FC<µPostTemplate.Props> = ({ post }) => {
  return (
    <Flex gridArea="body" overflow="auto">
      <Flex flexDir="column" px="50px" py="40px" className="mb-32">
        <SubHeading>{post.title}</SubHeading>
        <Article dangerouslySetInnerHTML={{ __html: post.content }} />
      </Flex>
    </Flex>
  );
};
