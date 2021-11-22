import React from 'react';
import { useToast } from '@chakra-ui/react';
import { createContextProvider } from '@/lib/createContextProvider';
import { çFavoritesProvider } from './types';
import { useSettingsContext } from '@/features/settings';

export const [FavoritesContextProvider, useFavoritesContext] =
  createContextProvider<çFavoritesProvider.Return>({
    name: 'FavoritesContext',
    errorMessage: 'context must be wrapped in Favorites Provider',
  });

export const FavoritesProvider: React.FC = props => {
  const settingsContext = useSettingsContext();
  const toast = useToast();

  const [favorites, setFavorites] = React.useState<
    çFavoritesProvider.State['favorites']
  >(çFavoritesProvider.Constants.LS_FAVORITES_INIT_VAL);

  const onFavoritesUpdate: çFavoritesProvider.Methods['onFavoritesUpdate'] =
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

      çFavoritesProvider.Utils.updateFavoritesStorage(updateFavorite);
    };

  const onStorageValidate: çFavoritesProvider.Methods['onStorageValidate'] =
    () => {
      const favoritesStorage =
        çFavoritesProvider.Utils.getFavoritesStorage() as çFavoritesProvider.Models.FavoritesStore;

      const favoriteEntries = Object.entries(favoritesStorage);
      const favoriteTypes = Object.values(
        çFavoritesProvider.Enums.FavoriteType
      );

      const isValid = favoriteEntries.every(([KEY, _VALUE]) => {
        const validEnums = favoriteTypes.some(TYPE => TYPE === KEY);

        return validEnums;
      });

      return isValid ? favoritesStorage : null;
    };

  const onStorageError = () => {
    çFavoritesProvider.Utils.initializeFavoritesStorage();

    toast({
      title: 'Corrupted Data',
      description: 'Your favorites list have been reset. Sorry!',
      status: 'error',
      duration: 4000,
      isClosable: true,
    });
  };

  React.useEffect(() => {
    if (!settingsContext.state.favorites.enabled) return;

    const validatedStorage = onStorageValidate();

    if (!validatedStorage) return onStorageError();

    setFavorites(validatedStorage);
  }, [settingsContext.state.favorites.enabled]);

  const state = { favorites };
  const methods = { onFavoritesUpdate, onStorageValidate, onStorageError };

  return <FavoritesContextProvider value={{ state, methods }} {...props} />;
};
