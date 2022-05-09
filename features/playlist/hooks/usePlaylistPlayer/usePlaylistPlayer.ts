import { useReducer, useState } from 'react';

export const usePlaylistPlayer = () => {
  // currently playing
  const [isPlaying, toggleIsPlaying] = useReducer(state => !state, true);
  // amount played (0-100)
  const [played, setPlayed] = useState(0);
  // prevent normal progression from updating `played`
  const [isSeeking, toggleIsSeeking] = useReducer(state => !state, false);

  const state = {
    isPlaying,
    played,
    isSeeking,
  };

  const methods = {
    toggleIsPlaying,
    setPlayed,
    toggleIsSeeking,
  };

  return { state, methods };
};
