import React from 'react';

import {
  VStack,
  Flex,
  Input,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';

import NextLink from 'next/link';

import { SearchSuggestion, useSearch, µSearch } from '@/features/search';
import { SearchIcon } from '@/components/Icon';

import { µSearchRoot } from '.';

export const SearchRoot: React.FC<µSearchRoot.Props> = props => {
  const { state, methods } = useSearch({});

  return (
    <Flex
      py="2em"
      flexDir="column"
      alignItems="center"
      justifyContent="flex-start"
      {...props}
    >
      <Tabs
        variant="soft-rounded"
        colorScheme="messenger"
        onChange={methods.setCategory}
      >
        <TabList mb="6" py="4" justifyContent="center">
          <Tab>Posts</Tab>
          <Tab>Memes</Tab>
        </TabList>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <SearchIcon isActive />
          </InputLeftElement>
          <Input
            variant="filled"
            defaultValue={state.initialQuery}
            value={state.inputValue}
            placeholder="search"
            width="400px"
            onChange={e => methods.onQueryChange(e.currentTarget.value)}
          />
        </InputGroup>
        <TabPanels alignItems="flex-start" maxW="400px">
          <TabPanel>
            {!!state.postSuggestions.length &&
              state.postSuggestions.map(SUGG => {
                return (
                  <NextLink key={SUGG.id} href={`/posts/${SUGG.id}`}>
                    <div>
                      <SearchSuggestion
                        key={SUGG.id}
                        suggestion={SUGG}
                        category={µSearch.Enums.SuggestionCategory.POST}
                      />
                    </div>
                  </NextLink>
                );
              })}
          </TabPanel>
          <TabPanel>
            {!!state.memeSuggestions.length &&
              state.memeSuggestions.map(SUGG => {
                return (
                  <NextLink key={SUGG.id} href={`/memes/${SUGG.id}`}>
                    <div>
                      <SearchSuggestion
                        key={SUGG.id}
                        suggestion={SUGG}
                        category={µSearch.Enums.SuggestionCategory.MEME}
                      />
                    </div>
                  </NextLink>
                );
              })}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};
