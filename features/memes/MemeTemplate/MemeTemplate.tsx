import React from 'react';
import NextImage from 'next/image';
import { µMemeTemplate } from './types';
import { Flex, Box, Grid, GridItem, HStack, Tooltip } from '@chakra-ui/react';
import {
  RegularText,
  SubTitle,
  SubHeading,
  SmallText,
} from '@/components/Typography';
import { useSettingsContext } from '@/features/settings';
import {
  FavoritesCartIcon,
  BackArrowIcon,
  NextArrowIcon,
} from '@/components/Icon';
import { useFavoritesContext, çFavoritesProvider } from '@/features/favorites';

export const MemeTemplate: React.FC<µMemeTemplate.Props> = ({
  meme,
  ...props
}) => {
  const settingsContext = useSettingsContext();
  const favoritesContext = useFavoritesContext();

  const handleFavoriteClick = () => {
    favoritesContext.methods.onFavoritesUpdate({
      type: çFavoritesProvider.Enums.FavoriteType.MEME,
      title: meme.title,
      slug: meme.slug,
      value: meme.image,
    });
  };

  return (
    <Flex direction="column" alignItems="center" py="4" {...props}>
      <Flex
        pos="relative"
        width="500px"
        direction="column"
        alignItems="flex-start"
      >
        <Grid
          width="100%"
          gridTemplateAreas={`
          "title actions"
          "date actions"
        `}
        >
          <GridItem gridArea="title">
            <SubTitle fontWeight="600" fontSize="2xl">
              {meme.title}
            </SubTitle>
          </GridItem>
          <GridItem gridArea="date">
            <RegularText fontSize="1em" color="blackAlpha.600">
              {meme.date}
            </RegularText>
          </GridItem>
          <GridItem
            display="flex"
            flexDir="column"
            alignItems="center"
            marginLeft="auto"
            gridArea="actions"
          >
            <HStack spacing="6" fontSize="1.5em">
              <Box>
                <BackArrowIcon />
                <SmallText>back</SmallText>
              </Box>
              <Box>
                <NextArrowIcon />
                <SmallText>next</SmallText>
              </Box>
            </HStack>
            <Tooltip
              openDelay={1000}
              isDisabled={settingsContext.state.favorites.enabled}
              label={'Enable Favorites in Settings to Save!!'}
              hasArrow
              placement="top"
              bg="gray.500"
            >
              <Box
                mt="2"
                cursor={
                  settingsContext.state.favorites.enabled
                    ? 'pointer'
                    : 'initial'
                }
                fontSize="2em"
                opacity={settingsContext.state.favorites.enabled ? 1 : 0.3}
                onClick={handleFavoriteClick}
              >
                <FavoritesCartIcon
                  isActive={
                    settingsContext.state.favorites.enabled &&
                    favoritesContext.state.favorites?.[
                      çFavoritesProvider.Enums.FavoriteType.MEME
                    ]?.[meme.slug]?.saved
                  }
                />
              </Box>
            </Tooltip>
          </GridItem>
        </Grid>
        <Box>
          {console.log(meme.image.url)}
          <NextImage
            src={meme.image.url}
            height="500px"
            width="500px"
          />
        </Box>
      </Flex>
    </Flex>
  );
};
