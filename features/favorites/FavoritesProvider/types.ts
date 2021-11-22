import { Dispatch, SetStateAction } from 'react';

export namespace çFavoritesProvider {
  export interface State {
    favorites: Models.FavoritesStore;
  }

  export interface Props {}

  export interface Methods {
    onFavoritesUpdate: (params: Types.PartialBy<Models.Favorite, 'saved'>) => void;
    onStorageValidate: () => Models.FavoritesStore | null;
    onStorageError: () => void;
  }

  export interface Return {
    state: State;
    methods: Methods;
  }

  export namespace Models {
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
  }

  export namespace Enums {
    export enum FavoriteType {
      POST = 'post',
      MEME = 'meme',
    }
  }

  export class Constants {
    static LS_FAVORITES_KEY = 'pk-favorites';
    static LS_FAVORITES_INIT_VAL: Models.FavoritesStore = {
      [Enums.FavoriteType.POST]: {},
      [Enums.FavoriteType.MEME]: {},
    };
  }

  export class Utils {
    static initializeFavoritesStorage = () => {
      localStorage.setItem(
        Constants.LS_FAVORITES_KEY,
        JSON.stringify(Constants.LS_FAVORITES_INIT_VAL)
      );
    };

    static getFavoritesStorage = (params?: Models.GetParams) => {
      const favoritesStorageExists = localStorage.getItem(
        Constants.LS_FAVORITES_KEY
      );

      if (!favoritesStorageExists) {
        Utils.initializeFavoritesStorage();
        return Constants.LS_FAVORITES_INIT_VAL;
      }

      const favoritesStorage: Models.FavoritesStore = JSON.parse(
        favoritesStorageExists
      );

      if (!params?.key || !params.type) return favoritesStorage;

      return favoritesStorage[params.type][params.key];
    };

    static updateFavoritesStorage = (params: Models.Favorite) => {
      const favoritesStorage =
        Utils.getFavoritesStorage() as Models.FavoritesStore;

      if (!favoritesStorage) {
        Utils.initializeFavoritesStorage();
        return;
      }

      localStorage.setItem(
        Constants.LS_FAVORITES_KEY,
        JSON.stringify({
          ...favoritesStorage,
          [params.type]: {
            ...favoritesStorage[params.type],
            [params.slug]: params,
          },
        })
      );
    };
  }
}
