import React from 'react';

import { useFavoritesStorage } from '@/features/favorites';
import { createContextProvider } from '@/lib/core';

import { µFavoritesProvider } from '.';

export const [FavoritesContextProvider, useFavoritesContext] =
  createContextProvider<µFavoritesProvider.Value>({
    name: 'FavoritesContext',
    errorMessage: 'context must be wrapped in Favorites Provider',
  });

export const FavoritesProvider: React.FC = props => {
  const favoritesStorage = useFavoritesStorage();

  return <FavoritesContextProvider value={{ favoritesStorage }} {...props} />;
};
