import React from 'react';
import NextLink from 'next/link';
import {
  Box,
  Flex,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';

import { ConfusedTravolta, FavoritesCartIcon } from '@/components/Icon';
import { useFavoritesContext } from '@/features/favorites';
import { FavoritesItem } from '@/features/favorites';

import { çFavoritesControl } from './types';

export const FavoritesControl: React.FC<çFavoritesControl.Props> = props => {
  const favoritesContext = useFavoritesContext();

  const favoritePosts = Object.entries(
    favoritesContext.state.favorites.post
  ).filter(([_SLUG, POST]) => POST.saved);
  const favoriteMemes = Object.entries(
    favoritesContext.state.favorites.meme
  ).filter(([_SLUG, MEME]) => MEME.saved);

  return (
    <Popover matchWidth {...props}>
      <PopoverTrigger>
        <Box
          px="1"
          cursor="pointer"
          fontSize="1.4em"
          _hover={{
            background: 'blackAlpha.100',
          }}
        >
          <FavoritesCartIcon isActive={true} />
        </Box>
      </PopoverTrigger>
      <PopoverContent height="400px" width="450px" pos="relative">
        <PopoverArrow />
        <PopoverCloseButton />
        <Tabs variant="soft-rounded" colorScheme="messenger">
          <PopoverHeader>
            <TabList py="4" justifyContent="center">
              <Tab>Posts</Tab>
              <Tab>Memes</Tab>
            </TabList>
          </PopoverHeader>
          <PopoverBody>
            <TabPanels alignItems="flex-start">
              <TabPanel>
                {!!!favoritePosts.length && (
                  <Flex
                    justifyContent="center"
                    position="relative"
                    fontSize="15em"
                  >
                    <ConfusedTravolta />
                  </Flex>
                )}
                {!!favoritePosts.length &&
                  favoritePosts.map(([SLUG, POST]) => {
                    return (
                      <NextLink key={SLUG} href={`/posts/${SLUG}}`}>
                        <FavoritesItem favorite={POST} />
                      </NextLink>
                    );
                  })}
              </TabPanel>
              <TabPanel overflowY="auto" height="290px">
                {!!favoriteMemes.length &&
                  favoriteMemes.map(([SLUG, MEME]) => {
                    return (
                      <NextLink key={SLUG} href={`/memes/${SLUG}`}>
                        <FavoritesItem favorite={MEME} />
                      </NextLink>
                    );
                  })}
              </TabPanel>
            </TabPanels>
          </PopoverBody>
        </Tabs>
      </PopoverContent>
    </Popover>
  );
};
