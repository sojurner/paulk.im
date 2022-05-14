import { NextSeo } from 'next-seo';
import { usePlaylistContext } from '@/features/playlist';

import { EMOTICONS } from './consts';
import { useMemo } from 'react';

export const SEO = () => {
  const { usePlaylistIndex, usePlaylistPlayer } = usePlaylistContext();

  const emoticon = useMemo(() => {
    return EMOTICONS[Math.floor(Math.random() * EMOTICONS.length)];
  }, []);

  return (
    <NextSeo
      title={
        (usePlaylistPlayer.state.isPlaying &&
          usePlaylistIndex.state?.currentlyPlaying?.title) ||
        emoticon
      }
    />
  );
};
