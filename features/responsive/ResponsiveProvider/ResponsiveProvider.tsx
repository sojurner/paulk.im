import React from 'react';

import { createContextProvider } from '@/lib/core';
import { useCollapsible, useMediaQueries } from '@/features/responsive/hooks';

import { µResponsiveProvider } from '.';

export const [ResponsiveContextProvider, useResponsiveContext] =
  createContextProvider<µResponsiveProvider.Value>({
    name: 'ResponsiveContext',
    errorMessage: 'context must be wrapped in Responsive Provider',
  });

export const ResponsiveProvider: React.FC = props => {
  const collapsible = useCollapsible();
  const mediaQueries = useMediaQueries(collapsible.state);

  React.useEffect(() => {
    if (mediaQueries.state.isLargerThan500) return;
    if (collapsible.state.collapsed) return;

    collapsible.methods.toggleCollapsed();
  }, [mediaQueries.state.isLargerThan500]);

  return (
    <ResponsiveContextProvider
      value={{ collapsible, mediaQueries }}
      {...props}
    />
  );
};
