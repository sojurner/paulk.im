import React, { useRef, useState } from 'react';

import { useSearchContext } from '@/features/search';

import { µUseSearchQuery } from '.';
import { useRouter } from 'next/router';

export const useSearchQuery = (): µUseSearchQuery.Return => {
  const { flexSearch, searchToggle } = useSearchContext();
  const router = useRouter();

  const [inputValue, setInputValue] = useState('');
  const [focusedSuggestionIndex, setFocusedSuggestionIndex] =
    useState<number>();

  const [postSuggestions, setPostSuggestions] = useState<
    µUseSearchQuery.State['postSuggestions']
  >([]);
  const [memeSuggestions, setMemeSuggestions] = useState<
    µUseSearchQuery.State['memeSuggestions']
  >([]);

  const shuffledSuggestions = React.useMemo(
    () =>
      µUseSearchQuery.shuffleSearchSuggestions([
        ...postSuggestions,
        ...memeSuggestions,
      ]),
    [postSuggestions, memeSuggestions]
  );

  const onKeyDown: µUseSearchQuery.Methods['onKeyDown'] = e => {
    console.log(this);
    if (!shuffledSuggestions.length) return;

    if (e.code === 'Backspace') {
      setFocusedSuggestionIndex(undefined);
    }

    if (e.code === 'ArrowDown') {
      setFocusedSuggestionIndex(state => {
        if (state === undefined || state === shuffledSuggestions.length - 1) {
          return 0;
        }

        return state + 1;
      });
    }

    if (e.code === 'ArrowUp') {
      setFocusedSuggestionIndex(state => {
        if (!state) return shuffledSuggestions.length - 1;
        return state - 1;
      });
    }

    if (e.code === 'Enter') {
      if (focusedSuggestionIndex === undefined) return;

      const routeSuggestion = shuffledSuggestions[focusedSuggestionIndex];
      router.push(`/${routeSuggestion.type}/${routeSuggestion.id}`);
      searchToggle.methods.toggleSearch();
    }
  };

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
      focusedSuggestionIndex,
      postSuggestions,
      memeSuggestions,
      shuffledSuggestions,
    },
    methods: {
      onQueryChange,
      onKeyDown,
      setPostSuggestions,
      setMemeSuggestions,
      setInputValue,
    },
  };
};
