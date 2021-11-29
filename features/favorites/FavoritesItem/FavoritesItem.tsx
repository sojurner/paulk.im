import React from 'react';
import { Grid, GridItem, Flex } from '@chakra-ui/layout';
import { MidText, RegularText } from '@/components/Typography';
import NextImage from 'next/image';

import { çFavoritesItem } from './types';

export const FavoritesItem: React.FC<çFavoritesItem.Props> = ({
  favorite,
  ...props
}) => {
  return (
    <Grid
      gridTemplateAreas={`
      "img title" 
    `}
      justifyItems="center"
      alignItems="center"
      gridTemplateColumns="60px calc(100% - 60px)"
      pos="relative"
      overflow="hidden"
      pr="2"
      py="2"
      cursor="pointer"
      _hover={{
        background: 'gray.50',
      }}
      {...props}
    >
      <GridItem gridArea="img">
        <Flex
          overflow="hidden"
          borderRadius="10px"
          justifyContent="center"
          fontSize="2em"
        >
          {favorite?.value?.url && (
            <NextImage height="50px" width="50px" src={favorite.value.url} />
          )}
        </Flex>
      </GridItem>
      <GridItem ml="3" width="100%" justifySelf="start" gridArea="title">
        <RegularText
          textOverflow="ellipsis"
          fontSize="18px"
          // whiteSpace="nowrap"
          // overflow="hidden"
          // width="100%"
        >
          {favorite.title}
        </RegularText>
      </GridItem>
    </Grid>
  );
};
