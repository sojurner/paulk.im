import React from 'react';

import { useFavoritesStorage } from '@/features/favorites';
import { createContextProvider } from '@/lib/createContextProvider';

import { µFavoritesProvider } from '.';

export const [FavoritesContextProvider, useFavoritesContext] =
  createContextProvider<µFavoritesProvider.Types.Value>({
    name: 'FavoritesContext',
    errorMessage: 'context must be wrapped in Favorites Provider',
  });

export const FavoritesProvider: React.FC = props => {
  const favoritesStorage = useFavoritesStorage();

  return <FavoritesContextProvider value={{ favoritesStorage }} {...props} />;
};
