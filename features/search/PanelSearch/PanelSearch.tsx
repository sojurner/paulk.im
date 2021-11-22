import React from 'react';
import NextLink from 'next/link';

import { Box, Input } from '@chakra-ui/react';

import { SearchSuggestion, useSearch } from '@/features/search';
import { Panel } from '@/components/Panel';

import { ƒSearch, µPanelSearch } from './types';

export const PanelSearch: React.FC<µPanelSearch.Props> = props => {
  const { state, methods } = useSearch({});

  return (
    <Panel flexDir="column" alignItems="center" {...props}>
      <Input
        defaultValue={state.initialQuery}
        value={state.inputValue}
        placeholder="search"
        variant="flushed"
        width="90%"
        onChange={e => methods.onQueryChange(e.currentTarget.value)}
      />
      <Box width="100%" alignSelf="flex-start">
        {!!state.postSuggestions.length &&
          state.postSuggestions.map(SUGG => {
            return (
              <NextLink
                key={SUGG.id}
                href={`/posts/${SUGG.id}?search=${state.inputValue}`}
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
        {!!state.memeSuggestions.length &&
          state.memeSuggestions.map(SUGG => {
            return (
              <NextLink
                key={SUGG.id}
                href={`/memes/${SUGG.id}?search=${state.inputValue}`}
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
      </Box>
    </Panel>
  );
};
