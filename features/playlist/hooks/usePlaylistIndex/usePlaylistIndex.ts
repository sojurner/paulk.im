import { useState } from 'react';

export const usePlaylistIndex = () => {
  const [playlist, setPlaylist] = useState<Models.Post[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const onAdd = (item: Models.Post) => {
    setPlaylist(state => {
      if (state.some(ITEM => ITEM.slug === item.slug)) {
        setCurrentIndex(0);
        return state;
      }
      return [...state, item];
    });
  };

  const onRemove = (idx: number) => {
    setPlaylist(state => {
      if (currentIndex === idx) setCurrentIndex(0);
      if (idx < currentIndex) setCurrentIndex(state => state - 1);

      return state.filter((_, I) => I !== idx);
    });
  };

  const onClear = () => {
    setPlaylist([]);
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
    onRemove,
    onClear,
    setCurrentIndex,
    onSelectItem,
  };

  return { state, methods };
};
