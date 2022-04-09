import React from 'react';

import { useFavoritesStorage } from '@/features/favorites';
import { createContextProvider } from '@/lib/core';

import { µUseFavoritesStorage } from '../hooks';

export const [FavoritesContextProvider, useFavoritesContext] =
  createContextProvider<µUseFavoritesStorage.Return>({
    name: 'FavoritesContext',
    errorMessage: 'context must be wrapped in Favorites Provider',
  });

export const FavoritesProvider: React.FC = props => {
  const favoritesStorage = useFavoritesStorage();

  return <FavoritesContextProvider value={favoritesStorage} {...props} />;
};
