import React from 'react';

import { createContextProvider } from '@/lib/core';

import { useExplorer } from '@/features/explorer';
import { useResponsiveContext } from '@/features/responsive';
import { useDataContext } from '@/features/data';

import { µExplorerProvider } from '.';

export const [ExplorerContextProvider, useExplorerContext] =
  createContextProvider<µExplorerProvider.Value>({
    name: 'SearchContext',
    errorMessage: 'context must be wrapped in Search Provider',
  });

export const ExplorerProvider: React.FC<µExplorerProvider.Props> = props => {
  const { collapsible } = useResponsiveContext();
  const { state, methods } = useDataContext();

  // const explorer = useExplorer({
  //   memes: state.pow,
  //   posts: state.,
  // });

  React.useEffect(() => {
    if (state.initialized) return;
    if (collapsible.state.collapsed) return;

    methods.fetchData();
  }, [collapsible.state.collapsed]);

  return (
    <ExplorerContextProvider
      value={{ explorer: { state: {} as any, methods: {} as any } }}
      {...props}
    />
  );
};
