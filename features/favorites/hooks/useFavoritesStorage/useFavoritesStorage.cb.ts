export const LS_FAVORITES_KEY = 'pk-favorites';

export const LS_FAVORITES_INIT_VAL: Record<string, boolean> = {};

export type FavoriteStore = Record<string, boolean>;
export interface State {
  favorites: FavoriteStore;
}

export interface Methods {
  onFavoriteToggle: (slug: string) => void;
  onStorageError: () => void;
}

export interface Return {
  state: State;
  methods: Methods;
}

export const initializeFavorites = () => {
  localStorage.setItem(LS_FAVORITES_KEY, JSON.stringify(LS_FAVORITES_INIT_VAL));
};

export const getFavorites = (): FavoriteStore => {
  const favoritesStorageExists = localStorage.getItem(LS_FAVORITES_KEY);

  if (!favoritesStorageExists) {
    initializeFavorites();
    return LS_FAVORITES_INIT_VAL;
  }

  return JSON.parse(favoritesStorageExists);
};

export const toggleFavorite = (slug: string) => {
  const favorites = getFavorites();
  const updatedFavorites: FavoriteStore = {
    ...favorites,
    [slug]: slug in favorites ? !favorites[slug] : true,
  };

  localStorage.setItem(LS_FAVORITES_KEY, JSON.stringify(updatedFavorites));

  return updatedFavorites;
};
