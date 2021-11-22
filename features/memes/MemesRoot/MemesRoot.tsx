import React from 'react';
import NextLink from 'next/link';
import NextImage from 'next/image';

import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  VStack,
  Tag,
} from '@chakra-ui/react';
import { RegularText, SubTitle, Title } from '@/components/Typography';

import { µMemesRoot } from '.';
import { FavoritesCartIcon } from '@/components/Icon';
import { useFavoritesContext } from '@/features/favorites';

export const MemesRoot: React.FC<µMemesRoot.Props> = ({ memes, ...props }) => {
  const favoritesContext = useFavoritesContext();

  return (
    <Flex
      alignItems="center"
      flexDir="column"
      overflowX="hidden"
      overflowY="auto"
      p="2em"
      {...props}
    >
      <Title mb="4">Latest Memes</Title>
      <VStack my="5" spacing="10" alignItems="baseline">
        {memes.map(MEME => {
          return (
            <Box maxW="450px" width="450px" key={MEME.slug}>
              <NextLink href={`/memes/${MEME.slug}`}>
                <div>
                  <SubTitle cursor="pointer" className="post__title">
                    {MEME.title}
                  </SubTitle>
                </div>
              </NextLink>

              <HStack my="2">
                <RegularText
                  color="blackAlpha.600"
                  letterSpacing="-.5px"
                  fontSize="14px"
                >
                  {MEME.date}
                </RegularText>
                <RegularText color="blackAlpha.600">·</RegularText>
              </HStack>
              <Flex cursor="pointer" pos="relative">
                <Box fontSize="2em" pos="absolute" zIndex="2" top="2" right="2">
                  <FavoritesCartIcon
                    isActive={
                      favoritesContext.state.favorites?.meme?.[MEME.slug]?.saved
                    }
                  />
                </Box>
                <NextLink href={`/meme/${MEME.slug}`}>
                  <div>
                    <NextImage src={MEME.image.url} height={500} width={450} />
                  </div>
                </NextLink>
              </Flex>
              <Flex justifyContent="space-between"></Flex>
            </Box>
          );
        })}
      </VStack>
    </Flex>
  );
};
