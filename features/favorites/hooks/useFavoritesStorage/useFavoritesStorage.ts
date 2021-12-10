import { useState, useEffect } from 'react';
import { useToast } from '@chakra-ui/react';
import { useSettingsContext } from '@/features/settings';

import { µUseFavoritesStorage } from '.';

export const useFavoritesStorage = (): µUseFavoritesStorage.Types.Return => {
  const settingsContext = useSettingsContext();
  const toast = useToast();

  const [favorites, setFavorites] = useState<
    µUseFavoritesStorage.Types.State['favorites']
  >(µUseFavoritesStorage.Consts.LS_FAVORITES_INIT_VAL);

  const onFavoritesUpdate: µUseFavoritesStorage.Types.Methods['onFavoritesUpdate'] =
    params => {
      if (!settingsContext.state.favorites.enabled) return;

      const validatedStorage = onStorageValidate();

      if (!validatedStorage) return onStorageError();

      const favoriteType = favorites[params.type];
      let updateSaved = true;

      if (params.slug in favoriteType)
        updateSaved = !!!favoriteType[params.slug].saved;

      const updateFavorite = {
        ...params,
        saved: updateSaved,
      };

      setFavorites(state => {
        return {
          ...state,
          [params.type]: {
            ...state[params.type],
            [params.slug]: updateFavorite,
          },
        };
      });

      µUseFavoritesStorage.Utils.updateFavoritesStorage(updateFavorite);
    };

  const onStorageValidate: µUseFavoritesStorage.Types.Methods['onStorageValidate'] =
    () => {
      const favoritesStorage =
        µUseFavoritesStorage.Utils.getFavoritesStorage() as µUseFavoritesStorage.Types.FavoritesStore;

      const favoriteEntries = Object.entries(favoritesStorage);
      const favoriteTypes = Object.values(
        µUseFavoritesStorage.Enums.FavoriteType
      );

      const isValid = favoriteEntries.every(([KEY, _VALUE]) => {
        const validEnums = favoriteTypes.some(TYPE => TYPE === KEY);

        return validEnums;
      });

      return isValid ? favoritesStorage : null;
    };

  const onStorageError = () => {
    µUseFavoritesStorage.Utils.initializeFavoritesStorage();

    toast({
      title: 'Corrupted Data',
      description: 'Your favorites list have been reset. Sorry!',
      status: 'error',
      duration: 4000,
      isClosable: true,
    });
  };

  useEffect(() => {
    if (!settingsContext.state.favorites.enabled) return;

    const validatedStorage = onStorageValidate();

    if (!validatedStorage) return onStorageError();

    setFavorites(validatedStorage);
  }, [settingsContext.state.favorites.enabled]);

  const state = { favorites };
  const methods = { onFavoritesUpdate, onStorageValidate, onStorageError };

  return { state, methods };
};
