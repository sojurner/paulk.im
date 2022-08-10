import React, { useReducer } from 'react';
import {
  VStack,
  Box,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
  useColorMode,
  Portal,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
} from '@chakra-ui/react';

import { useResponsiveContext } from '@/features/responsive';
import Prism from 'prismjs';

import { µTilRoot } from '.';
import { LatestTIL } from '../LatestTIL';
import { SubTitle } from '@/components/Typography';
import { IconWrapper, IdeaIcon } from '@/components/Icon';
import { useFavoritesContext } from '@/features/favorites';
import { SearchIcon, ConfusedTravolta } from '@/components/Icon';
import { useSearchQuery, useFlexSearch } from '@/features/search';

export const TilRoot: React.FC<µTilRoot.Props> = ({ tils, ...props }) => {
  const flexSearch = useFlexSearch({ tils });
  const { colorMode } = useColorMode();
  const searchQuery = useSearchQuery({
    document: flexSearch.state.tilsDocument,
  });
  const { collapsible, mediaQueries } = useResponsiveContext();
  const favoritesCxt = useFavoritesContext();
  const [showModal, toggleModal] = useReducer(state => !state, false);

  const onFavoriteClick = React.useCallback((slug: string) => {
    favoritesCxt.methods.onFavoriteToggle(slug);
  }, []);

  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  const inputBg = useColorModeValue('gray.50', 'gray.900');
  const outlineColor = useColorModeValue('gray.500', 'orange.300');
  const svgFill = useColorModeValue('black', 'white');

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
          onClick={toggleModal}
          readOnly
          variant="filled"
          background={inputBg}
          outline={'1px solid'}
          focusBorderColor={'none'}
          outlineColor={outlineColor}
          value={searchQuery.state.inputValue}
          placeholder="search by title"
          onChange={e =>
            searchQuery.methods.onQueryChange(e?.currentTarget?.value)
          }
        />
      </InputGroup>
      {tils.map(TIL => {
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
      {showModal && (
        <Modal
          isOpen={showModal}
          onClose={() => {
            searchQuery.methods.onQueryChange('');
            toggleModal();
          }}
        >
          <ModalOverlay />
          <ModalContent minWidth={['95%', 700]}>
            <ModalCloseButton />
            <ModalHeader>
              <InputGroup width="95%">
                <InputLeftElement pointerEvents="none">
                  <SearchIcon />
                </InputLeftElement>
                <Input
                  autoFocus
                  variant="filled"
                  focusBorderColor={'none'}
                  value={searchQuery.state.inputValue}
                  placeholder="search by title"
                  onChange={e =>
                    searchQuery.methods.onQueryChange(e?.currentTarget?.value)
                  }
                />
              </InputGroup>
            </ModalHeader>
            <ModalBody>
              <VStack spacing={4}>
                {!!searchQuery.state.inputValue &&
                  !!searchQuery.state?.suggestions &&
                  searchQuery.state.suggestions.map(SUGG => {
                    return (
                      <Box key={SUGG.doc.slug} width={['95%', '100%']}>
                        <LatestTIL
                          query={searchQuery.state.inputValue}
                          isFavorited={
                            favoritesCxt.state.favorites[SUGG.doc.slug]
                          }
                          onFavoriteClick={onFavoriteClick}
                          isLight={colorMode === 'light'}
                          til={SUGG.doc}
                        />
                      </Box>
                    );
                  })}
                {!!searchQuery.state.inputValue &&
                  !searchQuery.state?.suggestions?.length && (
                    <Box
                      display="flex"
                      alignItems="center"
                      flexDirection="column"
                      justifyContent="center"
                      position="relative"
                      color={svgFill}
                      fontSize="20em"
                    >
                      <ConfusedTravolta />
                    </Box>
                  )}
              </VStack>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </VStack>
  );
};
