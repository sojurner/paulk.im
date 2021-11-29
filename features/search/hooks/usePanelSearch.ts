import { useState, useEffect } from 'react';

import { useSearchContext, µSearch } from '@/features/search';

import { µUseSearch } from '.';

export const useSearch = (params: µUseSearch.Params): µUseSearch.Return => {
  const SearchContext = useSearchContext();

  const [inputValue, setInputValue] = useState(
    SearchContext.state.initialQuery || ''
  );
  const [category, setCategory] = useState(
    µSearch.Enums.SuggestionCategory.POST
  );
  const [postSuggestions, setPostSuggestions] = useState<
    µUseSearch.State['postSuggestions']
  >([]);
  const [memeSuggestions, setMemeSuggestions] = useState<
    µUseSearch.State['memeSuggestions']
  >([]);

  const onQueryChange: µUseSearch.Methods['onQueryChange'] = query => {
    if (category === µSearch.Enums.SuggestionCategory.POST) {
      const [postsResult] = SearchContext.state.postDocument.search(query, {
        enrich: true,
      });
      setPostSuggestions(
        (postsResult?.result as unknown as µUseSearch.State['postSuggestions']) ||
          []
      );
    } else if (category === µSearch.Enums.SuggestionCategory.MEME) {
      const [memesResult] = SearchContext.state.memeDocument.search(query, {
        enrich: true,
      });

      setMemeSuggestions(
        (memesResult?.result as unknown as µUseSearch.State['memeSuggestions']) ||
          []
      );
    }

    setInputValue(query);
  };

  useEffect(() => {
    if (!SearchContext.state.initialQuery) return;

    onQueryChange(SearchContext.state.initialQuery);
  }, [SearchContext.state.initialQuery]);

  return {
    state: {
      inputValue,
      category,
      initialQuery: SearchContext.state.initialQuery || '',
      postSuggestions,
      memeSuggestions,
    },
    methods: {
      onQueryChange,
      setCategory,
      setPostSuggestions,
      setMemeSuggestions,
      setInputValue,
    },
  };
};
