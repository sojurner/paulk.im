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

import { ConfusedTravolta, BookmarkIcon } from '@/components/Icon';
import { useFavoritesContext } from '@/features/favorites';
import { FavoritesItem } from '@/features/favorites';

import { µFavoritesControl } from '.';

export const FavoritesControl: React.FC<
  µFavoritesControl.Props
> = props => {
  const { favoritesStorage } = useFavoritesContext();

  const favoritePosts = Object.entries(
    favoritesStorage.state.favorites.post
  ).filter(([_SLUG, POST]) => POST.saved);
  const favoriteMemes = Object.entries(
    favoritesStorage.state.favorites.meme
  ).filter(([_SLUG, MEME]) => MEME.saved);

  return (
    <Popover matchWidth {...props}>
      <PopoverTrigger>
        <Box
          px="1"
          cursor="pointer"
          fontSize="1.2em"
          _hover={{
            background: 'blackAlpha.100',
          }}
        >
          <BookmarkIcon />
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
                        <div>
                          <FavoritesItem favorite={POST} />
                        </div>
                      </NextLink>
                    );
                  })}
              </TabPanel>
              <TabPanel overflowY="auto" height="290px">
                {!!!favoriteMemes.length && (
                  <Flex
                    justifyContent="center"
                    position="relative"
                    fontSize="15em"
                  >
                    <ConfusedTravolta />
                  </Flex>
                )}
                {!!favoriteMemes.length &&
                  favoriteMemes.map(([SLUG, MEME]) => {
                    return (
                      <NextLink key={SLUG} href={`/memes/${SLUG}`}>
                        <div>
                          <FavoritesItem favorite={MEME} />
                        </div>
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
