import { useEffect, useState } from 'react';

import { µUseMemeActions } from '.';
import {
  useFavoritesContext,
  µUseFavoritesStorage,
} from '@/features/favorites';
import { useSettingsContext } from '@/features/settings';

export const useMemeActions = (
  args: µUseMemeActions.Types.Args
): µUseMemeActions.Types.Return => {
  const { favoritesStorage } = useFavoritesContext();
  const settingsContext = useSettingsContext();

  const [upvoted, setUpvoted] = useState(false);

  const handleFavorite: µUseMemeActions.Types.Methods['handleFavorite'] =
    () => {
      favoritesStorage.methods.onFavoritesUpdate({
        type: µUseFavoritesStorage.Enums.FavoriteType.MEME,
        title: args.meme.title,
        slug: args.meme.slug,
        value: args.meme.image,
      });
    };

  const handleUpvote: µUseMemeActions.Types.Methods['handleUpvote'] =
    async () => {
      await fetch(`/api/memes/${args.meme.slug}`, {
        method: 'POST',
        body: JSON.stringify({ upvotes: args.meme.upvotes + 1 }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setUpvoted(true);
    };

  useEffect(() => {
    if (!upvoted) return;
    setUpvoted(false);
  }, [args.meme.slug]);

  const state = {
    upvoted,
    canFavorite: settingsContext.state.favorites.enabled,
    notFavorited:
      !settingsContext.state.favorites.enabled ||
      !favoritesStorage.state.favorites?.[
        µUseFavoritesStorage.Enums.FavoriteType.MEME
      ]?.[args.meme.slug]?.saved,
  };
  const methods = { setUpvoted, handleFavorite, handleUpvote };

  return { state, methods };
};
