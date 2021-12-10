import { GridProps } from '@chakra-ui/layout';
import { µUseFavoritesStorage } from '@/features/favorites';

export interface Props extends GridProps {
  favorite: µUseFavoritesStorage.Types.Favorite;
}

export interface Methods {}
