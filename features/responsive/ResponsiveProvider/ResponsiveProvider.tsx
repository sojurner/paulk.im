import React from 'react';
import { createContextProvider } from '@/lib/createContextProvider';
import { µResponsiveProvider } from '.';
import { useCollapsible, useMediaQueries } from '@/features/responsive/hooks';

export const [ResponsiveContextProvider, useResponsiveContext] =
  createContextProvider<µResponsiveProvider.Return>({
    name: 'ResponsiveContext',
    errorMessage: 'context must be wrapped in Favorites Provider',
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
