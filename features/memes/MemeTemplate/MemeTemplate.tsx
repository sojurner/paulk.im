import React from 'react';
import NextImage from 'next/image';
import { µMemeTemplate } from './types';
import { Flex, Box } from '@chakra-ui/layout';
import { RegularText, SubTitle } from '@/components/Typography';

export const MemeTemplate: React.FC<µMemeTemplate.Props> = ({
  meme,
  ...props
}) => {
  return (
    <Flex direction="column" {...props}>
      <SubTitle>
        {meme.title}
      </SubTitle>
      <Box>
        <NextImage src={meme.image.url} height="300px" width="300px" />
      </Box>
    </Flex>
  );
};
