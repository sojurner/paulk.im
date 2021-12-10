import { Enums, Types } from '.';

export const LS_FAVORITES_KEY = 'pk-favorites';

export const LS_FAVORITES_INIT_VAL: Types.FavoritesStore = {
  [Enums.FavoriteType.POST]: {},
  [Enums.FavoriteType.MEME]: {},
};
