import React from 'react';
import NextLink from 'next/link';
import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  useOutsideClick,
} from '@chakra-ui/react';

import { RegularText } from '@/components/Typography';

import {
  SearchSuggestion,
  useSearchContext,
  useSearchQuery,
} from '@/features/search';

import { SearchIcon } from '@/components/Icon';

import { µSearchRoot } from '.';

export const SearchRoot: React.FC<µSearchRoot.Types.Props> = props => {
  const searchQuery = useSearchQuery();
  const { searchToggle } = useSearchContext();

  const ref = React.useRef<HTMLDivElement>(null);

  useOutsideClick({
    ref,
    handler: searchToggle.methods.toggleSearch,
  });

  return (
    <Flex
      ref={ref}
      flexDir="column"
      alignItems="center"
      justifyContent="flex-start"
      overflow="auto"
      backgroundColor="gray.200"
      minH="300px"
      pos="fixed"
      zIndex="1000"
      top={['40px', '0']}
      maxW="600px"
      width={['100vw', '75vw']}
      minW="400px"
      right="50%"
      transform="translate(50%, 0)"
      boxShadow="0 4px 5px rgba(0,0,0,0.2)"
      {...props}
    >
      <InputGroup my="2" width="98%">
        <InputLeftElement pointerEvents="none">
          <SearchIcon />
        </InputLeftElement>
        <Input
          variant="filled"
          autoFocus
          defaultValue={''}
          value={searchQuery.state.inputValue}
          placeholder="search"
          onChange={e =>
            searchQuery.methods.onQueryChange(e.currentTarget.value)
          }
        />
      </InputGroup>
      <Flex width="100%" flexDir="column" maxH="350px" overflow="auto">
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
  );
};
