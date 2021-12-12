import { useEffect, useState } from 'react';

import { µUsePostActions } from '.';
import {
  useFavoritesContext,
  µUseFavoritesStorage,
} from '@/features/favorites';
import { useSettingsContext } from '@/features/settings';

export const usePostActions = (
  args: µUsePostActions.Types.Args
): µUsePostActions.Types.Return => {
  const { favoritesStorage } = useFavoritesContext();
  const settingsContext = useSettingsContext();

  const [upvoted, setUpvoted] = useState(false);

  const handleFavorite: µUsePostActions.Types.Methods['handleFavorite'] =
    () => {
      favoritesStorage.methods.onFavoritesUpdate({
        type: µUseFavoritesStorage.Enums.FavoriteType.POST,
        title: args.post.title,
        slug: args.post.slug,
        value: args.post.coverImage,
      });
    };

  const handleUpvote: µUsePostActions.Types.Methods['handleUpvote'] =
    async () => {
      await fetch(`/api/posts/${args.post.slug}`, {
        method: 'POST',
        body: JSON.stringify({ upvotes: args.post.upvotes + 1 }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setUpvoted(true);
    };

  useEffect(() => {
    if (!upvoted) return;
    setUpvoted(false);
  }, [args.post.slug]);

  const state = {
    upvoted,
    canFavorite: settingsContext.state.favorites.enabled,
    notFavorited:
      !settingsContext.state.favorites.enabled ||
      !favoritesStorage.state.favorites?.[
        µUseFavoritesStorage.Enums.FavoriteType.POST
      ]?.[args.post.slug]?.saved,
  };
  const methods = { setUpvoted, handleFavorite, handleUpvote };

  return { state, methods };
};
