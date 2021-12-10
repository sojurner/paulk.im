import { Enums } from '.';

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
  type: Enums.FavoriteType;
  value: any;
  saved: boolean;
}

export type FavoritesStore = Record<
  Enums.FavoriteType,
  Record<string, Favorite>
>;
export interface GetParams {
  key?: string;
  type: Enums.FavoriteType;
}
