import { GridProps } from '@chakra-ui/layout';
import { çFavoritesProvider } from '@/features/favorites';

export namespace çFavoritesItem {
  export interface Props extends GridProps {
    favorite: çFavoritesProvider.Models.Favorite;
  }

  export interface Methods {}
}
