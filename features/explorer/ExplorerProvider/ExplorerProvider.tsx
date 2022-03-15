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
  const { data } = useDataContext();

  const explorer = useExplorer({
    memes: data.state.memes,
    posts: data.state.posts,
  });

  React.useEffect(() => {
    if (data.state.initialized) return;
    if (collapsible.state.collapsed) return;

    data.methods.fetchData();
  }, [collapsible.state.collapsed]);

  return <ExplorerContextProvider value={{ explorer }} {...props} />;
};
