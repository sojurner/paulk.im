import { createContextProvider } from '@/lib/core';
import { usePlaylistMisc, usePlaylistPlayer, usePlaylistIndex } from '..';

export const [PlaylistContextProvider, usePlaylistContext] =
  createContextProvider<PlaylistContext>({
    name: 'PlaylistContext',
    errorMessage: 'context must be wrapped in Playlist Provider',
  });

export const usePlaylist = () => {
  return {
    usePlaylistIndex: usePlaylistIndex(),
    usePlaylistMisc: usePlaylistMisc(),
    usePlaylistPlayer: usePlaylistPlayer(),
  };
};

type PlaylistContext = ReturnType<typeof usePlaylist>;

export const PlaylistProvider: React.FC = props => {
  const playlist = usePlaylist();

  return <PlaylistContextProvider value={playlist} {...props} />;
};
