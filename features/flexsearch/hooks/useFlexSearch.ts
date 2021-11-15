import { useState, useEffect, useMemo } from 'react';
import FlexSearch from 'flexsearch';
import { µUseFlexSearch } from '.';

export const useFlexSearch = (params: µUseFlexSearch.Params) => {
  // const [index, setIndex] = useState(null);

  // useEffect(() => {
  //   if (!params.initialFlexSearch && !params.store)
  //     console.warn(
  //       'A FlexSearch index and store was not provided. Your search results will be empty.'
  //     );
  //   else if (!params.initialFlexSearch)
  //     console.warn(
  //       'A FlexSearch index was not provided. Your search results will be empty.'
  //     );
  //   else if (!params.store)
  //     console.warn(
  //       'A FlexSearch store was not provided. Your search results will be empty.'
  //     );
  // }, [params.initialFlexSearch, params.store]);

  // useEffect(() => {
  //   if (!params.initialFlexSearch) {
  //     setIndex(null);
  //     return;
  //   }

  //   if (params.initialFlexSearch instanceof FlexSearch) {
  //     setIndex(params.initialFlexSearch);
  //     return;
  //   }

  //   const importedIndex = FlexSearch.create({ optimize: true });
  //   importedIndex.import(params.initialFlexSearch);

  //   setIndex(importedIndex);
  // }, [params.initialFlexSearch]);

  // return useMemo(() => {
  //   if (!query || !index || !params.store) return [];

  //   const rawResults = index.search(query, searchOptions);

  //   return rawResults.map(id => store[id]);
  // }, [query, index, store]);
};
