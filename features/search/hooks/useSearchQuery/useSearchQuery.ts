import { useState } from 'react';
import { Document } from 'flexsearch';

import { µUseSearchQuery } from '.';

export const useSearchQuery = ({
  document,
}: {
  document: Document<unknown, true>;
}): µUseSearchQuery.Return => {
  const [inputValue, setInputValue] = useState('');

  const [suggestions, setSuggestions] = useState<
    µUseSearchQuery.State['suggestions']
  >([]);

  const onQueryChange: µUseSearchQuery.Methods['onQueryChange'] = query => {
    setInputValue(query);

    const [queried] = document?.search(query, {
      enrich: true,
    });

    const mapped = queried?.result.map((ELE: unknown) => ({
      ...(ELE as µUseSearchQuery.Suggestion),
    }));

    setSuggestions(mapped);
  };

  return {
    state: {
      inputValue,
      suggestions,
    },
    methods: {
      onQueryChange,
      setSuggestions,
      setInputValue,
    },
  };
};
