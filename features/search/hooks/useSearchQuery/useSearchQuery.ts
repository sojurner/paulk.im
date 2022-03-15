import { useState } from 'react';

import { useSearchContext } from '@/features/search';

import { µUseSearchQuery } from '.';

export const useSearchQuery = (): µUseSearchQuery.Return => {
  const { flexSearch } = useSearchContext();

  const [inputValue, setInputValue] = useState('');

  const [postSuggestions, setPostSuggestions] = useState<
    µUseSearchQuery.State['postSuggestions']
  >([]);
  const [memeSuggestions, setMemeSuggestions] = useState<
    µUseSearchQuery.State['memeSuggestions']
  >([]);

  const onQueryChange: µUseSearchQuery.Methods['onQueryChange'] = query => {
    setInputValue(query);

    const [postsResult] = flexSearch.state.postDocument.search(query, {
      enrich: true,
    });
    const postsFinal = postsResult?.result.map((ELE: unknown) => ({
      ...(ELE as Omit<µUseSearchQuery.Suggestion, 'type'>),
      type: µUseSearchQuery.SuggestionCategory.POST,
    }));
    setPostSuggestions(postsFinal || []);

    const [memesResult] = flexSearch.state.memeDocument.search(query, {
      enrich: true,
    });
    const memesFinal = memesResult?.result.map((ELE: unknown) => ({
      ...(ELE as Omit<µUseSearchQuery.Suggestion, 'type'>),
      type: µUseSearchQuery.SuggestionCategory.MEME,
    }));
    setMemeSuggestions(memesFinal || []);
  };

  return {
    state: {
      inputValue,
      postSuggestions,
      memeSuggestions,
      shuffledSuggestions: µUseSearchQuery.shuffleSearchSuggestions([
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
