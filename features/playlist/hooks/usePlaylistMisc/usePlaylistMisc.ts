import { useReducer } from 'react';

export const usePlaylistMisc = () => {
  const [showQueue, toggleShowQueue] = useReducer(state => !state, false);
  const [isFullscreen, toggleFullscreen] = useReducer(state => !state, true);

  const state = {
    showQueue,
    isFullscreen,
  };

  const methods = {
    toggleFullscreen,
    toggleShowQueue,
  };

  return { state, methods };
};
