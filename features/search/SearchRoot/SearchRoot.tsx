import React from 'react';
import NextLink from 'next/link';
import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  useOutsideClick,
  useColorModeValue,
} from '@chakra-ui/react';

import { RegularText } from '@/components/Typography';

import {
  SearchSuggestion,
  useSearchContext,
  useSearchQuery,
} from '@/features/search';

import { SearchIcon } from '@/components/Icon';

import { µSearchRoot } from '.';

export const SearchRoot: React.FC<µSearchRoot.Props> = props => {
  const searchQuery = useSearchQuery();
  const { searchToggle } = useSearchContext();

  const ref = React.useRef<HTMLDivElement>(null);

  useOutsideClick({
    ref,
    handler: searchToggle.methods.toggleSearch,
  });

  const containerBg = useColorModeValue('gray.100', 'gray.700');
  const inputColorScheme = useColorModeValue('gray.50', 'gray.800');
  const borderColor = useColorModeValue('gray.300', 'gray.600');
  const boxShadow = useColorModeValue(
    '0 4px 9px rgba(0,0,0,0.2)',
    '0 4px 10px rgba(0,0,0)'
  );

  return (
    <>
      <Flex
        ref={ref}
        flexDir="column"
        alignItems="center"
        justifyContent="flex-start"
        overflow="auto"
        backgroundColor={containerBg}
        borderBottomRightRadius="5px"
        borderBottomLeftRadius="5px"
        borderBottom="1px solid"
        borderLeft="1px solid"
        borderRight="1px solid"
        borderColor={borderColor}
        minH="300px"
        pos="fixed"
        zIndex="1000"
        top={['40px', '0']}
        maxW="600px"
        width={['100%', '75vw']}
        minW={['100%', '400px']}
        right="50%"
        transform="translate(50%, 0)"
        boxShadow={boxShadow}
        {...props}
      >
        <InputGroup my="2" width="98%">
          <InputLeftElement pointerEvents="none">
            <SearchIcon />
          </InputLeftElement>
          <Input
            variant="filled"
            colorScheme="red"
            background={inputColorScheme}
            focusBorderColor="gray.500"
            autoFocus
            defaultValue={''}
            value={searchQuery.state.inputValue}
            placeholder="search"
            onChange={e =>
              searchQuery.methods.onQueryChange(e?.currentTarget?.value)
            }
          />
        </InputGroup>
        <Flex width="100%" flexDir="column" maxH="350px" overflowY="auto">
          {!!!searchQuery.state.shuffledSuggestions.length &&
            searchQuery.state.inputValue && (
              <RegularText p="3">No Matching Results</RegularText>
            )}
          {!!searchQuery.state.shuffledSuggestions.length &&
            searchQuery.state.shuffledSuggestions.map(SUGG => {
              return (
                <NextLink key={SUGG.id} href={`/${SUGG.type}/${SUGG.id}`}>
                  <div
                    onClick={searchToggle.methods.toggleSearch}
                    style={{ width: '100%' }}
                  >
                    <SearchSuggestion
                      key={SUGG.id}
                      suggestion={SUGG}
                      category={SUGG.type}
                    />
                  </div>
                </NextLink>
              );
            })}
        </Flex>
      </Flex>
    </>
  );
};
