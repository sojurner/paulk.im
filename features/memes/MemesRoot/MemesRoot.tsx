import React from 'react';
import NextLink from 'next/link';
import NextImage from 'next/image';

import {
  Box,
  Flex,
  Divider,
  Tooltip,
  HStack,
  VStack,
  Tag,
} from '@chakra-ui/react';
import { RegularText, SubTitle, Title } from '@/components/Typography';

import { µMemesRoot } from '.';
import { BookmarkIcon } from '@/components/Icon';
import { useFavoritesContext, µFavoritesProvider } from '@/features/favorites';
import { useSettingsContext } from '@/features/settings';

export const MemesRoot: React.FC<µMemesRoot.Props> = ({ memes, ...props }) => {
  const favoritesContext = useFavoritesContext();
  const settingsContext = useSettingsContext();

  const handleFavoriteClick: µMemesRoot.Methods['handleFavorite'] =
    React.useCallback(
      meme => () => {
        favoritesContext.methods.onFavoritesUpdate({
          slug: meme.slug,
          title: meme.title,
          type: µFavoritesProvider.Enums.FavoriteType.MEME,
          value: meme.image,
        });
      },
      [favoritesContext.methods.onFavoritesUpdate]
    );

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
              <HStack alignItems="center">
                <HStack>
                  {MEME.tags.map(TAG => {
                    return (
                      <Tag size="lg" key={`${MEME.slug}-${TAG}`}>
                        {TAG}
                      </Tag>
                    );
                  })}
                </HStack>
                <RegularText
                  fontSize="16px"
                  fontWeight="bold"
                  color="blackAlpha.600"
                >
                  ·
                </RegularText>
                <RegularText
                  color="blackAlpha.600"
                  letterSpacing="-.5px"
                  fontSize="16px"
                >
                  {MEME.date.timeFromNow}
                </RegularText>
                <Tooltip
                  openDelay={500}
                  isDisabled={settingsContext.state.favorites.enabled}
                  label={'Enable Bookmarks to save!!'}
                  hasArrow
                  placement="top"
                  bg="gray.500"
                >
                  <Box
                    marginLeft="auto !important"
                    fontSize="1.4em"
                    {...((!settingsContext.state.favorites.enabled ||
                      !favoritesContext.state.favorites?.meme?.[MEME.slug]
                        ?.saved) && { filter: 'grayscale(1)' })}
                    {...(settingsContext.state.favorites.enabled && {
                      onClick: handleFavoriteClick(MEME),
                      cursor: 'pointer',
                    })}
                    {...(!settingsContext.state.favorites.enabled && {
                      opacity: 0.6,
                    })}
                  >
                    <BookmarkIcon />
                  </Box>
                </Tooltip>
              </HStack>
              <Box cursor="pointer" my="3">
                <NextLink href={`/memes/${MEME.slug}`}>
                  <div>
                    <SubTitle className="post__title">{MEME.title}</SubTitle>
                  </div>
                </NextLink>
              </Box>

              <NextLink href={`/memes/${MEME.slug}`}>
                <div style={{ cursor: 'pointer' }}>
                  <NextImage
                    src={MEME?.image?.url}
                    layout="responsive"
                    height="390"
                    width="420"
                  />
                </div>
              </NextLink>
              <Divider mt="10" />
            </Box>
          );
        })}
      </VStack>
    </Flex>
  );
};
