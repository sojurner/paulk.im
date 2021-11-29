import { GridProps } from '@chakra-ui/layout';
import { µFavoritesProvider } from '@/features/favorites';

export namespace çFavoritesItem {
  export interface Props extends GridProps {
    favorite: µFavoritesProvider.Models.Favorite;
  }

  export interface Methods {}
}
