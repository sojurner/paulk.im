import { useEffect, useState } from 'react';

import { µUsePostActions } from '.';
import {
  useFavoritesContext,
  µUseFavoritesStorage,
} from '@/features/favorites';
import { useSettingsContext } from '@/features/settings';

export const usePostActions = (
  args: µUsePostActions.Args
): µUsePostActions.Return => {
  const { favoritesStorage } = useFavoritesContext();
  const settingsContext = useSettingsContext();

  const [upvoted, setUpvoted] = useState(false);

  const handleFavorite: µUsePostActions.Methods['handleFavorite'] = () => {
    favoritesStorage.methods.onFavoritesUpdate({
      type: µUseFavoritesStorage.FavoriteType.POST,
      title: args.post.title,
      slug: args.post.slug,
      value: args.post.coverImage,
    });
  };

  const handleUpvote: µUsePostActions.Methods['handleUpvote'] = async () => {
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
        µUseFavoritesStorage.FavoriteType.POST
      ]?.[args.post.slug]?.saved,
  };
  const methods = { setUpvoted, handleFavorite, handleUpvote };

  return { state, methods };
};
