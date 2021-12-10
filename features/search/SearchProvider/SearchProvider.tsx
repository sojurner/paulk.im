import React from 'react';

import { createContextProvider } from '@/lib/createContextProvider';

import { useSearchToggle, useFlexSearch } from '@/features/search';
import { useDataContext } from '@/features/data';

import { µSearchProvider } from '.';

export const [SearchContextProvider, useSearchContext] =
  createContextProvider<µSearchProvider.Types.Value>({
    name: 'SearchContext',
    errorMessage: 'context must be wrapped in Search Provider',
  });

export const SearchProvider: React.FC<µSearchProvider.Types.Props> = props => {
  const searchToggle = useSearchToggle();
  const { data } = useDataContext();

  const flexSearch = useFlexSearch({
    memes: data.state.memes,
    posts: data.state.posts,
  });

  React.useEffect(() => {
    if (data.state.initialized) return;
    if (!searchToggle.state.showSearch) return;

    data.methods.fetchData();
  }, [searchToggle.state.showSearch]);

  return (
    <SearchContextProvider value={{ flexSearch, searchToggle }} {...props} />
  );
};
