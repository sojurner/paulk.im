import React from 'react';
import {
  VStack,
  Box,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react';

import { useResponsiveContext } from '@/features/responsive';
import Prism from 'prismjs';

import { µTilRoot } from '.';
import { LatestTIL } from '../LatestTIL';
import { SubTitle } from '@/components/Typography';
import { IconWrapper, IdeaIcon } from '@/components/Icon';
import { useFavoritesContext } from '@/features/favorites';
import { SearchIcon } from '@/components/Icon';
import { useSearchQuery, useFlexSearch } from '@/features/search';

export const TilRoot: React.FC<µTilRoot.Props> = ({ tils, ...props }) => {
  const flexSearch = useFlexSearch({ tils });
  const { colorMode } = useColorMode();
  const searchQuery = useSearchQuery({
    document: flexSearch.state.tilsDocument,
  });
  const { collapsible, mediaQueries } = useResponsiveContext();
  const favoritesCxt = useFavoritesContext();

  const onFavoriteClick = React.useCallback((slug: string) => {
    favoritesCxt.methods.onFavoriteToggle(slug);
  }, []);

  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <VStack
      alignItems="center"
      flexDir="column"
      overflowX="hidden"
      overflowY="auto"
      py="2.5em"
      spacing={12}
      {...(!collapsible.state.collapsed &&
        !mediaQueries.state.isLargerThan500 && {
          onClick: collapsible.methods.toggleCollapsed,
        })}
      {...props}
    >
      <HStack spacing={4} alignItems={'center'}>
        <IconWrapper fontSize={'1.2em'}>
          <IdeaIcon />
        </IconWrapper>
        <SubTitle fontSize={'2em'}>Today I Learned</SubTitle>
        <IconWrapper fontSize={'1.2em'}>
          <IdeaIcon />
        </IconWrapper>
      </HStack>
      <InputGroup width={['95%', 700]}>
        <InputLeftElement pointerEvents="none">
          <SearchIcon />
        </InputLeftElement>
        <Input
          variant="filled"
          background={useColorModeValue('gray.50', 'gray.900')}
          outline={'1px solid'}
          focusBorderColor={useColorModeValue('gray.400', 'orange.200')}
          outlineColor={useColorModeValue('gray.500', 'orange.300')}
          autoFocus
          value={searchQuery.state.inputValue}
          placeholder="search by title"
          onChange={e =>
            searchQuery.methods.onQueryChange(e?.currentTarget?.value)
          }
        />
      </InputGroup>
      {!!searchQuery.state.inputValue &&
        !!searchQuery.state?.suggestions &&
        searchQuery.state.suggestions.map(SUGG => {
          return (
            <Box key={SUGG.doc.slug} width={['95%', 700]}>
              <LatestTIL
                query={searchQuery.state.inputValue}
                isFavorited={favoritesCxt.state.favorites[SUGG.doc.slug]}
                onFavoriteClick={onFavoriteClick}
                isLight={colorMode === 'light'}
                til={SUGG.doc}
              />
            </Box>
          );
        })}
      {!!searchQuery.state.inputValue &&
        !searchQuery.state?.suggestions?.length && (
          <SubTitle>No results</SubTitle>
        )}
      {!!!searchQuery.state.inputValue &&
        tils.map(TIL => {
          return (
            <Box key={TIL.slug} width={['95%', 700]}>
              <LatestTIL
                query={searchQuery.state.inputValue}
                isFavorited={favoritesCxt.state.favorites[TIL.slug]}
                isLight={colorMode === 'light'}
                onFavoriteClick={onFavoriteClick}
                til={TIL}
              />
            </Box>
          );
        })}
    </VStack>
  );
};
