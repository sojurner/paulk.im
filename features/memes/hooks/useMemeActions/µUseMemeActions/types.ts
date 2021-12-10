import { Dispatch, SetStateAction } from 'react';
import { µFavoritesProvider } from '@/features/favorites';

export interface Args {
  meme: Models.Meme;
}

export interface State {
  upvoted: boolean;
  canFavorite: boolean;
  notFavorited: boolean;
}

export interface Methods {
  setUpvoted: Dispatch<SetStateAction<boolean>>;
  handleFavorite: () => void;
  handleUpvote: () => Promise<void>;
}

export interface Return {
  state: State;
  methods: Methods;
}

export { µFavoritesProvider };
