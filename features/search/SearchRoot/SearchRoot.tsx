import React from 'react';

import {
  Box,
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

import { RegularText, SubHeading, Title } from '@/components/Typography';
import NextLink from 'next/link';
import { µSearchRoot } from './types';
import { ƒSearch } from '@/features/search';

import { SearchSuggestion, useSearch } from '@/features/search';
import { SearchIcon } from '@/components/Icon';

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
      <SubHeading>Search</SubHeading>
      <Tabs
        variant="soft-rounded"
        colorScheme="messenger"
        onChange={methods.setCategory}
      >
        <TabList py="4" justifyContent="center">
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
                  <NextLink
                    key={SUGG.id}
                    href={`/posts/${SUGG.id}`}
                  >
                    <div>
                      <SearchSuggestion
                        key={SUGG.id}
                        suggestion={SUGG}
                        category={ƒSearch.Enums.SuggestionCategory.POST}
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
                  <NextLink
                    key={SUGG.id}
                    href={`/memes/${SUGG.id}`}
                  >
                    <div>
                      <SearchSuggestion
                        key={SUGG.id}
                        suggestion={SUGG}
                        category={ƒSearch.Enums.SuggestionCategory.MEME}
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
