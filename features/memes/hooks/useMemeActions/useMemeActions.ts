import { useEffect, useState } from 'react';

import { µUseMemeActions } from '.';
import { useFavoritesContext, µFavoritesProvider } from '@/features/favorites';
import { useSettingsContext } from '@/features/settings';

export const useMemeActions = (
  args: µUseMemeActions.Args
): µUseMemeActions.Return => {
  const favoritesContext = useFavoritesContext();
  const settingsContext = useSettingsContext();

  const [upvoted, setUpvoted] = useState(false);

  const handleFavorite: µUseMemeActions.Methods['handleFavorite'] = () => {
    favoritesContext.methods.onFavoritesUpdate({
      type: µFavoritesProvider.Enums.FavoriteType.MEME,
      title: args.meme.title,
      slug: args.meme.slug,
      value: args.meme.image,
    });
  };

  const handleUpvote: µUseMemeActions.Methods['handleUpvote'] = async () => {
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
      !favoritesContext.state.favorites?.[
        µFavoritesProvider.Enums.FavoriteType.MEME
      ]?.[args.meme.slug]?.saved,
  };
  const methods = { setUpvoted, handleFavorite, handleUpvote };

  return { state, methods };
};
