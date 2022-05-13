import { useState } from 'react';

export const usePlaylistIndex = () => {
  const [playlist, setPlaylist] = useState<Models.Post[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const onAdd =
    (action: 'push' | 'unshift' = 'push') =>
    (item: Models.Post) => {
      setPlaylist(state => {
        const existingIndex = state.findIndex(ITEM => ITEM.slug === item.slug);
        if (existingIndex >= 0) {
          setCurrentIndex(existingIndex);
          return state;
        }
        if (action === 'push') {
          return [...state, item];
        }
        setCurrentIndex(0);
        return [item, ...state];
      });
    };

  const onAddMultiple =
    (type: Models.Post['type']) => (items: Models.Post[]) => {
      setPlaylist(state => {
        const currentPlayMatchesType = state?.[currentIndex]?.type === type;
        if (!currentPlayMatchesType) return items;

        return [
          state[currentIndex],
          ...items.filter(IT => IT.slug !== state?.[currentIndex]?.slug),
        ];
      });
    };

  const onRemove = (idx: number) => {
    setPlaylist(state => {
      console.log({ currentIndex, idx });
      if (currentIndex === idx) setCurrentIndex(0);
      if (idx < currentIndex) setCurrentIndex(state => state - 1);

      return state.filter((_, I) => I !== idx);
    });
  };

  const onClear = () => {
    setPlaylist([]);
    setCurrentIndex(0);
  };

  const onSelectItem = (post: Models.Post) => {
    const targetIndex = playlist.findIndex(state => state.slug === post.slug);
    if (targetIndex < 0) return;

    setCurrentIndex(targetIndex);
  };

  const state = {
    playlist,
    currentIndex,
    currentlyPlaying: playlist[currentIndex],
  };

  const methods = {
    onAdd,
    onAddMultiple,
    onRemove,
    onClear,
    setCurrentIndex,
    onSelectItem,
  };

  return { state, methods };
};
