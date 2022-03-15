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
  useColorModeValue,
} from '@chakra-ui/react';

import { useSettingsContext } from '@/features/settings';

import { RegularText, SubTitle, Title } from '@/components/Typography';
import { BookmarkIcon, IconWrapper } from '@/components/Icon';
import {
  useFavoritesContext,
  µUseFavoritesStorage,
} from '@/features/favorites';

import { µMemesRoot } from '.';

export const MemesRoot: React.FC<µMemesRoot.Props> = ({ memes, ...props }) => {
  const { favoritesStorage } = useFavoritesContext();
  const settingsContext = useSettingsContext();
  const secondaryTxtColor = useColorModeValue('gray.600', 'gray.400');

  const handleFavoriteClick: µMemesRoot.Methods['handleFavorite'] =
    React.useCallback(
      meme => () => {
        favoritesStorage.methods.onFavoritesUpdate({
          slug: meme.slug,
          title: meme.title,
          type: µUseFavoritesStorage.FavoriteType.MEME,
          value: meme.image,
        });
      },
      [favoritesStorage.methods.onFavoritesUpdate]
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
              <HStack spacing="3" alignItems="center">
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
                  color={secondaryTxtColor}
                >
                  ·
                </RegularText>
                <RegularText
                  color={secondaryTxtColor}
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
                  <div style={{ marginLeft: 'auto' }}>
                    <IconWrapper
                      fontSize="1.4em"
                      isActive={
                        settingsContext.state.favorites.enabled &&
                        favoritesStorage.state.favorites?.meme?.[MEME.slug]
                          ?.saved
                      }
                      {...(settingsContext.state.favorites.enabled && {
                        onClick: handleFavoriteClick(MEME),
                        cursor: 'pointer',
                      })}
                      {...(!settingsContext.state.favorites.enabled && {
                        opacity: 0.6,
                      })}
                    >
                      <BookmarkIcon />
                    </IconWrapper>
                  </div>
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
