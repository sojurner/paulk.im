import { Consts, Types } from '.';

export const initializeFavoritesStorage = () => {
  localStorage.setItem(
    Consts.LS_FAVORITES_KEY,
    JSON.stringify(Consts.LS_FAVORITES_INIT_VAL)
  );
};

export const getFavoritesStorage = (params?: Types.GetParams) => {
  const favoritesStorageExists = localStorage.getItem(Consts.LS_FAVORITES_KEY);

  if (!favoritesStorageExists) {
    initializeFavoritesStorage();
    return Consts.LS_FAVORITES_INIT_VAL;
  }

  const favoritesStorage: Types.FavoritesStore = JSON.parse(
    favoritesStorageExists
  );

  if (!params?.key || !params.type) return favoritesStorage;

  return favoritesStorage[params.type][params.key];
};

export const updateFavoritesStorage = (params: Types.Favorite) => {
  const favoritesStorage = getFavoritesStorage() as Types.FavoritesStore;

  if (!favoritesStorage) {
    initializeFavoritesStorage();
    return;
  }

  localStorage.setItem(
    Consts.LS_FAVORITES_KEY,
    JSON.stringify({
      ...favoritesStorage,
      [params.type]: {
        ...favoritesStorage[params.type],
        [params.slug]: params,
      },
    })
  );
};
