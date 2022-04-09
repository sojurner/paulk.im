import { useState, useEffect } from 'react';
import { useToast } from '@chakra-ui/react';
import { useSettingsContext } from '@/features/settings';

import { µUseFavoritesStorage } from '.';

export const useFavoritesStorage = (): µUseFavoritesStorage.Return => {
  const settingsContext = useSettingsContext();
  const toast = useToast();

  const [favorites, setFavorites] = useState(
    µUseFavoritesStorage.LS_FAVORITES_INIT_VAL
  );

  const onFavoriteToggle: µUseFavoritesStorage.Methods['onFavoriteToggle'] =
    slug => {
      const updateFavorites = µUseFavoritesStorage.toggleFavorite(slug);

      setFavorites(updateFavorites);
    };

  const onStorageError = () => {
    µUseFavoritesStorage.initializeFavorites();

    toast({
      title: 'Corrupted Data',
      description: 'Your favorites list have been reset. Sorry!',
      status: 'error',
      duration: 4000,
      isClosable: true,
    });
  };

  useEffect(() => {
    const favoritesStorage = µUseFavoritesStorage.getFavorites();

    setFavorites(favoritesStorage);
  }, [settingsContext.state.favorites.enabled]);

  const state = { favorites };
  const methods = { onFavoriteToggle, onStorageError };

  return { state, methods };
};
