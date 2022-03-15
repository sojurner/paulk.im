export const LS_FAVORITES_KEY = 'pk-favorites';

export enum FavoriteType {
  POST = 'post',
  MEME = 'meme',
}

export const LS_FAVORITES_INIT_VAL: FavoritesStore = {
  [FavoriteType.POST]: {},
  [FavoriteType.MEME]: {},
};

export interface State {
  favorites: FavoritesStore;
}

export interface Methods {
  onFavoritesUpdate: (params: Types.PartialBy<Favorite, 'saved'>) => void;
  onStorageValidate: () => FavoritesStore | null;
  onStorageError: () => void;
}

export interface Return {
  state: State;
  methods: Methods;
}

export interface Favorite {
  slug: string;
  title: string;
  type: FavoriteType;
  value: any;
  saved: boolean;
}

export type FavoritesStore = Record<FavoriteType, Record<string, Favorite>>;
export interface GetParams {
  key?: string;
  type: FavoriteType;
}

export const initializeFavoritesStorage = () => {
  localStorage.setItem(LS_FAVORITES_KEY, JSON.stringify(LS_FAVORITES_INIT_VAL));
};

export const getFavoritesStorage = (params?: GetParams) => {
  const favoritesStorageExists = localStorage.getItem(LS_FAVORITES_KEY);

  if (!favoritesStorageExists) {
    initializeFavoritesStorage();
    return LS_FAVORITES_INIT_VAL;
  }

  const favoritesStorage: FavoritesStore = JSON.parse(favoritesStorageExists);

  if (!params?.key || !params.type) return favoritesStorage;

  return favoritesStorage[params.type][params.key];
};

export const updateFavoritesStorage = (params: Favorite) => {
  const favoritesStorage = getFavoritesStorage() as FavoritesStore;

  if (!favoritesStorage) {
    initializeFavoritesStorage();
    return;
  }

  localStorage.setItem(
    LS_FAVORITES_KEY,
    JSON.stringify({
      ...favoritesStorage,
      [params.type]: {
        ...favoritesStorage[params.type],
        [params.slug]: params,
      },
    })
  );
};
