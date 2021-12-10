import { useState } from 'react';

import { useSearchContext } from '@/features/search';

import { µUseSearchQuery } from '.';

export const useSearchQuery = (): µUseSearchQuery.Types.Return => {
  const { flexSearch } = useSearchContext();

  const [inputValue, setInputValue] = useState('');

  const [postSuggestions, setPostSuggestions] = useState<
    µUseSearchQuery.Types.State['postSuggestions']
  >([]);
  const [memeSuggestions, setMemeSuggestions] = useState<
    µUseSearchQuery.Types.State['memeSuggestions']
  >([]);

  const onQueryChange: µUseSearchQuery.Types.Methods['onQueryChange'] =
    query => {
      setInputValue(query);

      const [postsResult] = flexSearch.state.postDocument.search(query, {
        enrich: true,
      });
      const postsFinal = postsResult?.result.map((ELE: unknown) => ({
        ...(ELE as Omit<µUseSearchQuery.Types.Suggestion, 'type'>),
        type: µUseSearchQuery.Enums.SuggestionCategory.POST,
      }));
      setPostSuggestions(postsFinal || []);

      const [memesResult] = flexSearch.state.memeDocument.search(query, {
        enrich: true,
      });
      const memesFinal = memesResult?.result.map((ELE: unknown) => ({
        ...(ELE as Omit<µUseSearchQuery.Types.Suggestion, 'type'>),
        type: µUseSearchQuery.Enums.SuggestionCategory.MEME,
      }));
      setMemeSuggestions(memesFinal || []);
    };

  return {
    state: {
      inputValue,
      postSuggestions,
      memeSuggestions,
      shuffledSuggestions: µUseSearchQuery.Utils.shuffleSearchSuggestions([
        ...postSuggestions,
        ...memeSuggestions,
      ]),
    },
    methods: {
      onQueryChange,
      setPostSuggestions,
      setMemeSuggestions,
      setInputValue,
    },
  };
};
